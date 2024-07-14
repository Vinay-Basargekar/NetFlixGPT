// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBBN5W1Tbqd3pqZSm1BN_9a-sTuepQT8b0",
	authDomain: "netflixgpt-8b1c9.firebaseapp.com",
	projectId: "netflixgpt-8b1c9",
	storageBucket: "netflixgpt-8b1c9.appspot.com",
	messagingSenderId: "653327203857",
	appId: "1:653327203857:web:62bf09cbb45e49478e3bb0",
	measurementId: "G-0N2Q5Z9E9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);