import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBpE6WZzf0nj4AedfPSvV2cLTMZqd4VYFw",
    authDomain: "community-742ec.firebaseapp.com",
    projectId: "community-742ec",
    storageBucket: "community-742ec.appspot.com",
    messagingSenderId: "46800622611",
    appId: "1:46800622611:web:a4c0cfd934414a3bbe1be6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export {db, auth};