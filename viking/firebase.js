import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC562ZMyvM6qOFnhFRKyr5u7g2r9DfLm5w",
  authDomain: "viking-vista.firebaseapp.com",
  projectId: "viking-vista",
  storageBucket: "viking-vista.appspot.com", // Note: Corrected storage bucket URL
  messagingSenderId: "736212484415",
  appId: "1:736212484415:web:4819f7072bc761b00c938a",
  measurementId: "G-S0HJKQKDLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Auth

// Export the necessary objects
export {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
};
