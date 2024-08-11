// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4k9z6iVvzM8124T28PFZPFHKcnSvKdSM",
  authDomain: "gtco-shares-ai-assistant.firebaseapp.com",
  projectId: "gtco-shares-ai-assistant",
  storageBucket: "gtco-shares-ai-assistant.appspot.com",
  messagingSenderId: "813998903636",
  appId: "1:813998903636:web:d77c95c634f4679fbf78c1",
  measurementId: "G-CYYG5T0FCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

// Export the initialized Firebase services
export { app, auth, firestore, provider };
