// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL1i01UUmrGboCAuYzpRaNvkW8UmwB24g",
  authDomain: "jalrakshak-4f86a.firebaseapp.com",
  projectId: "jalrakshak-4f86a",
  storageBucket: "jalrakshak-4f86a.firebasestorage.app",
  messagingSenderId: "94954887367",
  appId: "1:94954887367:web:471448bef8f20154a146e2",
  measurementId: "G-3D01EMPG9Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);