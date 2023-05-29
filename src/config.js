
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFaFOkMp7uFKZaVNolE_MDrQ7GKkNZQWk",
  authDomain: "auth-f51f1.firebaseapp.com",
  projectId: "auth-f51f1",
  storageBucket: "auth-f51f1.appspot.com",
  messagingSenderId: "567826020331",
  appId: "1:567826020331:web:5a46b14fd2164868294bae",
  measurementId: "G-VYS9B6KM3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export{auth, provider}