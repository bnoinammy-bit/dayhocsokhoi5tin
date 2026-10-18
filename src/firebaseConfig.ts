import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeFirestore, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDav9kvbj5-SjZLp6RpbgY7fWvy3O9ur1k",
  authDomain: "dayhocsotinhoccong5.firebaseapp.com",
  projectId: "dayhocsotinhoccong5",
  storageBucket: "dayhocsotinhoccong5.firebasestorage.app",
  messagingSenderId: "902719274170",
  appId: "1:902719274170:web:4b40bc41ea52bdf4695683",
  measurementId: "G-54SBQJ49Q0"
};

// Initialize Firebase safely
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with experimentalForceLongPolling to avoid iframe WebSocket drops
export const db = (() => {
  try {
    return initializeFirestore(app, {
      experimentalForceLongPolling: true
    });
  } catch {
    return getFirestore(app);
  }
})();

export const auth = getAuth(app);
export default app;
