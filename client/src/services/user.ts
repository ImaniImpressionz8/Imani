import axios from 'axios';

import { DOMAIN } from '.';

const fetchUsers = async () => {
    try {
        const { data } = await axios.get(`${DOMAIN}/users`);

        return data;
    } catch (err) {
        throw err;
    }
};

const fetchUser = async ({ username }: { username: string }) => {
    try {
        const { data } = await axios.get(`${DOMAIN}/users/${username}`);

        return data;
    } catch (err) {
        throw err;
    }
};

const postUser = async ({
    user
}: {
    user: {
        firstname: string;
        username: string;
        department: string;
        password: string;
    };
}) => {
    try {
        const { data } = await axios.post(`${DOMAIN}/users/`, { ...user });

        return data;
    } catch (err) {
        throw err;
    }
};

const removeUser = async ({ _id }: { _id: string }) => {
    try {
        const { data } = await axios.delete(`${DOMAIN}/users/?_id=${_id}`);

        return data;
    } catch (err) {
        throw err;
    }
};

export { fetchUser, fetchUsers, postUser, removeUser };
