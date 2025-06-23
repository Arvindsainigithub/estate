
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realstate-45039.firebaseapp.com",
  projectId: "realstate-45039",
  storageBucket: "realstate-45039.firebasestorage.app",
  messagingSenderId: "785283702868",
  appId: "1:785283702868:web:4af74b3ad8bbaa792e4dc1",
  measurementId: "G-VG1Y7XRK9F",
};

export const app = initializeApp(firebaseConfig);
