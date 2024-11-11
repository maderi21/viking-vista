import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC562ZMyvM6qOFnhFRKyr5u7g2r9DfLm5w",
  authDomain: "viking-vista.firebaseapp.com",
  projectId: "viking-vista",
  storageBucket: "viking-vista.appspot.com",
  messagingSenderId: "736212484415",
  appId: "1:736212484415:web:4819f7072bc761b00c938a",
  measurementId: "G-S0HJKQKDLD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
};
