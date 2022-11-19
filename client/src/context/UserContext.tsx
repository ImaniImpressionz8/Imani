import { createContext, useContext, useEffect, useState } from 'react';

import { fetchUsers, postUser, removeUser, fetchUser } from '../services/user';

const UserContext = createContext<any>({});

export const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<Array<{}>>([]);

    const [showUsers, setShowUsers] = useState(false);

    useEffect(() => {}, []);

    const getUsers = async () => {
        try {
            const { success, data, message } = await fetchUsers();

            if (success) setUsers(data);
        } catch (err) {}
    };

    const saveUser = async ({
        firstname,
        username,
        department,
        password,
        isAdmin
    }: {
        firstname: string;
        username: string;
        department: string;
        password: string;
        isAdmin: boolean;
    }) => {
        try {
            const { success, data, message } = await postUser({
                user: { firstname, username, department, password, isAdmin }
            });

            if (success) {
                getUsers();
                setShowUsers(true);
            }
        } catch (err) {}
    };

    const deleteUser = async ({ _id }: { _id: string }) => {
        try {
            const { success, data, message } = await removeUser({ _id });

            if (success) {
                getUsers();
            }
        } catch (err) {}
    };

    const getUser = async ({ username }: { username: string }) => {
        try {
            const { success, data, message } = await fetchUser({ username });

            if (success) console.log(data);
        } catch (err) {}
    };

    return (
        <UserContext.Provider
            value={{
                getUsers,
                users,
                saveUser,
                deleteUser,
                getUser,
                showUsers,
                setShowUsers
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
