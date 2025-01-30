import React, { createContext, useContext   } from 'react';
import { User } from 'firebase/auth';

export const AuthContext = createContext<User | null>(null);

export const useAuth = () => {
    return useContext(AuthContext);
};