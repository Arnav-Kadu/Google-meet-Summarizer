// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtLLBCu3HTE8-oShT7hIg2Ed-fjBxOfD0",
  authDomain: "sumify-c78da.firebaseapp.com",
  projectId: "sumify-c78da",
  storageBucket: "sumify-c78da.appspot.com",
  messagingSenderId: "8884609504",
  appId: "1:8884609504:web:90408b2077159fe2b6cb85",
  measurementId: "G-MKSW2EW4CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;