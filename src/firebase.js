// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7B6LagAbfSjbSvZWFyr7OA01DMClsDv8",
    authDomain: "netflix-clone-80fc2.firebaseapp.com",
    databaseURL:"https://netflix-clone-80fc2.web.app",
    projectId: "netflix-clone-80fc2",
    storageBucket: "netflix-clone-80fc2.appspot.com",
    messagingSenderId: "347846936510",
    appId: "1:347846936510:web:50b514bbf3596408e21bef"
};

// Initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// db & auth
const db  = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };    // Explicit Export
export default db ;