import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCFOT9uwmNVGQaKC4MpzyaYbsOIKD_SL88",
  authDomain: "web-seblaks.firebaseapp.com",
  projectId: "web-seblaks",
  storageBucket: "web-seblaks.appspot.com",
  messagingSenderId: "141892365979",
  appId: "1:141892365979:web:4eb518cd3d3091ca3be03e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)