//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
//import {GoogleAuthProvider,signInWithPopup,getRedirectResult,signInWithPopup,getAuth,signInWithRedirect} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBuDSH3I2usj57koTory9dK26wks5JhHdA",
    authDomain: "prototurismo-df05f.firebaseapp.com",
    projectId: "prototurismo-df05f",
    storageBucket: "prototurismo-df05f.appspot.com",
    messagingSenderId: "842374207052",
    appId: "1:842374207052:web:35c63e545f9afe9d7606e9"
  };
const firebase = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
