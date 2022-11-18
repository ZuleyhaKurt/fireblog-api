<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDdMpYG2fiVS4-rCzty78GBU4kyrSKmCeQ",
  authDomain: "fireblog-app-687ba.firebaseapp.com",
  databaseURL: "https://fireblog-app-687ba-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-687ba",
  storageBucket: "fireblog-app-687ba.appspot.com",
  messagingSenderId: "677647767351",
  appId: "1:677647767351:web:92e9b6ae3f6d97fe916cb2",
  measurementId: "G-QQ1LL2HCEQ"
=======
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
>>>>>>> 748437aea0ac10e46584867b2da38712271a98f8
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
<<<<<<< HEAD
export const auth = getAuth()
=======
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
>>>>>>> 748437aea0ac10e46584867b2da38712271a98f8
