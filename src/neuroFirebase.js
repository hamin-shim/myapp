import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjwvw2J4UoHSsj4V6DccdzTngIMpT0MOM",
  authDomain: "neurowiki-c0f44.firebaseapp.com",
  projectId: "neurowiki-c0f44",
  storageBucket: "neurowiki-c0f44.appspot.com",
  messagingSenderId: "826119699242",
  appId: "1:826119699242:web:ccc545c8a368e2d63ffc53",
  measurementId: "G-FEXE1N2CD3",
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
