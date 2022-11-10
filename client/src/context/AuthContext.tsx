import { createContext, useContext, useEffect, useState } from 'react';

import { loginUser } from '../services/auth';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const user = localStorage.getItem('user');

        let parsedUser = null;

        if (user) parsedUser = JSON.parse(user);

        if (user && parsedUser) setUser(parsedUser);
    }, []);

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

                localStorage.setItem('user', JSON.stringify(data));

                const { department } = data;

                switch (department) {
                    case 'front':
                        navigate('/desk');
                        break;
                    case 'digital':
                        navigate('/room/orders');
                        break;
                    case 'souvenir':
                        navigate('/room/orders');
                        break;
                    case 'large':
                        navigate('/room/orders');
                        break;
                    case 'admin':
                        navigate('/dashboard');
                        break;
                    default:
                        break;
                }
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
