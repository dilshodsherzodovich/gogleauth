// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfCh8KiJQ9ubxSdWXHgTrSMWRMimUb5OY",
  authDomain: "auth-dde9c.firebaseapp.com",
  projectId: "auth-dde9c",
  storageBucket: "auth-dde9c.appspot.com",
  messagingSenderId: "391681977776",
  appId: "1:391681977776:web:4710308c61635500f37a75",
  measurementId: "G-L6J2P16Q8M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
