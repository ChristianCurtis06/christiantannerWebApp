import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqZvP9UuMTyie_o0FU2DR0MVWHS4yYc-Q",
    authDomain: "christiantannerwebform.firebaseapp.com",
    projectId: "christiantannerwebform",
    storageBucket: "christiantannerwebform.firebasestorage.app",
    messagingSenderId: "79778893356",
    appId: "1:79778893356:web:7c82048c1aac07c4a54b89",
    measurementId: "G-KMTQHS808M"
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { auth };