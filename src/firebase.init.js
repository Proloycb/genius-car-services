// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAom91oIz2A-62XeF5g2m3CHxcs_kHLA_g",
  authDomain: "genius-car-services-ab018.firebaseapp.com",
  projectId: "genius-car-services-ab018",
  storageBucket: "genius-car-services-ab018.appspot.com",
  messagingSenderId: "410220296990",
  appId: "1:410220296990:web:1b593a5ee8ad789e2e670f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;