  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_M0TCwtCECo4rwnAVG4Yfg7xh90nX3ck",
    authDomain: "rhulmakers-members-portal.firebaseapp.com",
    projectId: "rhulmakers-members-portal",
    storageBucket: "rhulmakers-members-portal.firebasestorage.app",
    messagingSenderId: "423791052279",
    appId: "1:423791052279:web:9162e22d5b1c665240daf2",
    measurementId: "G-2NYNSD9SHQ"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);