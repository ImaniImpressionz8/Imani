import { createContext, useContext, useEffect, useState } from 'react';

import { fetchUsers, postUser, removeUser, fetchUser } from '../services/user';

const UserContext = createContext<any>({});

export const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<Array<{}>>([]);

    useEffect(() => {}, []);

    const getUsers = async () => {
        try {
            const { success, data, message } = await fetchUsers();

            if (success) setUsers(data);
        } catch (err) {}
    };

    const saveUsers = async ({
        firstname,
        username,
        department,
        password
    }: {
        firstname: string;
        username: string;
        department: string;
        password: string;
    }) => {
        try {
            const { success, data, message } = await postUser({
                user: { firstname, username, department, password }
            });

            if (success) setUsers([...users, data]);
        } catch (err) {}
    };

    const deleteUser = async ({ _id }: { _id: string }) => {
        try {
            const { success, data, message } = await removeUser({ _id });

            if (success) {
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
            value={{ getUsers, users, saveUsers, deleteUser, getUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
