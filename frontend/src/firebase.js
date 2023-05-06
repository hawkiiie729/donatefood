
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApx0SGuuKL-D_qxWVIezo8w2eOJIg253k",
  authDomain: "donateproject-38fd9.firebaseapp.com",
  projectId: "donateproject-38fd9",
  storageBucket: "donateproject-38fd9.appspot.com",
  messagingSenderId: "591225446052",
  appId: "1:591225446052:web:5afbe101fb6080a5f25031"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();