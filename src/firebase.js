import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBxTLzEX1Dbyr1XCF-dUOsb9a2CCg4dBlU",
  authDomain: "netflix-clone-ab5a6.firebaseapp.com",
  projectId: "netflix-clone-ab5a6",
  storageBucket: "netflix-clone-ab5a6.firebasestorage.app",
  messagingSenderId: "208839767136",
  appId: "1:208839767136:web:a5adb6c2c105b00c32bf05",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Error signing up:", error.message);
    toast(error.code.split('/')[1].split('-').join(' '), {
        theme: "dark", 
        progressStyle: { backgroundColor: "red" }, 
        style: { backgroundColor: "#1e1e1e", color: "#fff" },
      });
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error Log In:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(' '), );
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
