import { auth } from "../config/firebaseSetup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const createAccount = async(email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

const signIn = async(email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
  };

export { createAccount, signIn, logOut };