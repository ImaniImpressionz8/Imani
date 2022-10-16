import { createContext, useContext, useEffect, useState } from 'react';

import { loginUser } from '../services/auth';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {}, []);

    const login = async ({
        username,
        password,
        navigate
    }: {
        username: string;
        password: string;
        navigate: any;
    }) => {
        try {
            const { data, success, message } = await loginUser({
                username,
                password
            });

            if (success) {
                setUser(data);
                navigate('/desk');
            }
        } catch (err) {}
    };

    return (
        <AuthContext.Provider value={{ login, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
