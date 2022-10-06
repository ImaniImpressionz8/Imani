import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [confirmResult, setConfirmResult] = useState<any>(null);
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState<string | null>('+233');
    const [optCode, setOTPCode] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    useEffect(() => {}, []);

    const login = () => {
        
        console.log('Logging In');
    };

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
