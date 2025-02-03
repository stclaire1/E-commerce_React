import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXOcCkQC88OndmfxeLUa7ZIMbczZqnNDk",
    authDomain: "ecommerce-compass.firebaseapp.com",
    projectId: "ecommerce-compass",
    storageBucket: "ecommerce-compass.firebasestorage.app",
    messagingSenderId: "283747525501",
    appId: "1:283747525501:web:169a1ada8a6cb113d02214"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);