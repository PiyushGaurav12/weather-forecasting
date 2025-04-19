import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdCo9aUaHkHwEITsy5hJO79WWpnLyY1_U",
    authDomain: "weather-forecasting-57b2f.firebaseapp.com",
    projectId: "weather-forecasting-57b2f",
    storageBucket: "weather-forecasting-57b2f.firebasestorage.app",
    messagingSenderId: "1024675877709",
    appId: "1:1024675877709:web:849578eff71e881ed39d04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
