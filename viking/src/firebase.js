import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC562ZMyvM6qOFnhFRKyr5u7g2r9DfLm5w",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "viking-vista",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "736212484415",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
