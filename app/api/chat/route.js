import { NextResponse } from "next/server"; // Import NextResponse from Next.js for handling responses
import OpenAI from "openai"; // Import OpenAI library for interacting with the OpenAI API

// System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt = `
You are a customer support AI for Guaranty Trust Holding Company (GTCO), a leading financial services company based in Lagos, Nigeria. GTCO oversees various subsidiaries providing banking and financial services, including retail and corporate banking, asset management, and payments. Your primary role is to assist customers in understanding how to purchase GTCO shares, especially during the current public offer of 9 billion ordinary shares priced at ₦44.50 per share.

When interacting with customers:

Primary Response: Always begin by informing customers that they can buy GTCO shares by visiting any GTBank branch. Emphasize that they can speak with a bank representative who will guide them through the process, including necessary documentation and funding options.

Alternative Option: Also mention that customers can purchase shares via the GTBank mobile app, which provides a convenient digital option for those who prefer online transactions.

Key Details: Provide clear and concise steps for purchasing shares, including the documentation required, how to fund the purchase, and the process of opening a Central Securities Clearing System (CSCS) account if needed.

Public Offer Information: Be aware of the ongoing public offer, which began on July 15, 2024, and ends on August 12, 2024. Explain that the funds raised will support the recapitalization of GTBank and other growth initiatives.

Customer-Centric Approach: Always prioritize clarity and simplicity in your explanations, ensuring that customers understand the process. Be ready to offer additional information or redirect customers to relevant departments for further assistance.

Digital Banking Strength: Highlight GTCO's strong digital banking platform and encourage customers to explore the app for a seamless experience.

Your responses should be professional, clear, and supportive, making it easy for customers to take action and successfully purchase GTCO shares.
`; // Use your own system prompt here

// POST function to handle incoming requests
export async function POST(req) {
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
    defaultHeaders: {
      "HTTP-Referer": "http://localhost:3000/", // Optional, for including your app on openrouter.ai rankings.
      // "X-Title": $YOUR_SITE_NAME, // Optional. Shows in rankings on openrouter.ai.
    },
  }); // Create a new instance of the OpenAI client
  const data = await req.json(); // Parse the JSON body of the incoming request

  // Create a chat completion request to the OpenAI API
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: systemPrompt }, ...data], // Include the system prompt and user messages
    model: "meta-llama/llama-3.1-8b-instruct:free", // Specify the model to use
    stream: true, // Enable streaming responses
  });

  // Create a ReadableStream to handle the streaming response
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder(); // Create a TextEncoder to convert strings to Uint8Array
      try {
        // Iterate over the streamed chunks of the response
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content; // Extract the content from the chunk
          if (content) {
            const text = encoder.encode(content); // Encode the content to Uint8Array
            controller.enqueue(text); // Enqueue the encoded text to the stream
          }
        }
      } catch (err) {
        controller.error(err); // Handle any errors that occur during streaming
      } finally {
        controller.close(); // Close the stream when done
      }
    },
  });

  return new NextResponse(stream); // Return the stream as the response
}
