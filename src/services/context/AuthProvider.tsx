import React, { useEffect, useState, ReactNode } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider } from "firebase/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("Auth state changed:", firebaseUser);
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};