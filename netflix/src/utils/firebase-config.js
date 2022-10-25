
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5h77GE9-sTep2dYMPrWFw4b0Vm4xbLr8",
  authDomain: "react-netflix-clone-cd31f.firebaseapp.com",
  projectId: "react-netflix-clone-cd31f",
  storageBucket: "react-netflix-clone-cd31f.appspot.com",
  messagingSenderId: "162310195653",
  appId: "1:162310195653:web:8e04f043a930f272bae3ac"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);