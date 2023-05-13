import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwa-3bxqqtjdncUJIVwpuE8HDYyJ29LR0",
  authDomain: "react-medical-care.firebaseapp.com",
  databaseURL: "https://react-medical-care-default-rtdb.firebaseio.com",
  projectId: "react-medical-care",
  storageBucket: "react-medical-care.appspot.com",
  messagingSenderId: "357811438782",
  appId: "1:357811438782:web:5db7f4e6a9650b28cd8aef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
