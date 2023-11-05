// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqfqE8NL0QKq5QnQ7Dx8-Zb4fu2Jljs3I",
  authDomain: "worktales-client.firebaseapp.com",
  projectId: "worktales-client",
  storageBucket: "worktales-client.appspot.com",
  messagingSenderId: "316250428467",
  appId: "1:316250428467:web:60c2debb69274c2ffe3f46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 