"use client";

import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Grow,
} from "@mui/material";
import { useRef, useEffect, useState } from "react";
import BotIcon from "../BotIcon";
import { AccountCircle, Logout, Send } from "@mui/icons-material";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import withAuth from "../protectedRoute";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the GTCO customer support assistant. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true);
    setMessage(""); // Clear the input field
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message }, // Add the user's message to the chat
      { role: "assistant", content: "" }, // Add a placeholder for the assistant's response
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, { role: "user", content: message }]),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((messages) => [
        ...messages,
        {
          role: "assistant",
          content:
            "I'm sorry, but I encountered an error. Please try again later.",
        },
      ]);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#121212", color: "white" }}
      >
        <Toolbar>
          <BotIcon />
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1 }}>
            GTCO shares AI Assistant
          </Typography>

          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <AccountCircle fontSize="large" sx={{ color: "#afafaf" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#1e1e1e",
                color: "white",
              },
            }}
          >
            <MenuItem>
              <Typography variant="body2">{userEmail}</Typography>
            </MenuItem>
            <MenuItem onClick={async () => await signOut(auth)}>
              <Logout fontSize="small" />
              <Typography variant="body2" sx={{ marginLeft: 1 }}>
                Sign Out
              </Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 2,
        }}
      >
        <Stack spacing={2}>
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: "80%",
                borderRadius: "20px",
                padding: 2,
                marginBottom: 1,
                color: "white",
                backgroundColor:
                  message.role === "assistant" ? "#333" : "#1e1e1e",
                alignSelf:
                  message.role === "assistant" ? "flex-start" : "flex-end",
                overflowWrap: "break-word",
              }}
            >
              {message.content}
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
      </Box>

      <Box
        sx={{
          padding: 2,
          backgroundColor: "#121212",
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          multiline
          maxRows={3}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton onClick={sendMessage} disabled={isLoading}>
                <Send style={{ color: "#fff" }} />
              </IconButton>
            ),
          }}
          sx={{
            backgroundColor: "#333",
            color: "white",
            borderRadius: "25px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              "& fieldset": {
                borderColor: "#555",
              },
              "&:hover fieldset": {
                borderColor: "#777",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "#aaa",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
          }}
          ref={inputRef}
        />
      </Box>
    </Box>
  );
};

export default withAuth(ChatPage);
