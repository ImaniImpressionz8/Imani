import { createContext, useContext, useEffect, useState } from 'react';

import { fetchUsers, loginUser } from '../services/auth';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [users, setUsers] = useState<Array<{}>>([]);
    const [confirmResult, setConfirmResult] = useState<any>(null);
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState<string | null>('+233');
    const [optCode, setOTPCode] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    useEffect(() => {}, []);

    const login = async (username: string, password: string, navigate: any) => {
        const { data, success, message } = await loginUser(username, password);

        if (success) {
            setUser(data);
            navigate('/desk');
        }
    };

    const getUsers = async () => {
        try {
            const { success, data, message } = await fetchUsers();

            if (success) setUsers(data);
        } catch (err) {}
    };

    return (
        <AuthContext.Provider value={{ login, getUsers, users }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
