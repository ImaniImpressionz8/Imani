import axios from 'axios';

import { DOMAIN } from '.';

const loginUser = async (username, password) => {
    try {
        const { data } = await axios.get(
            `${DOMAIN}/users/login?username=${username}&password=${password}`
        );

        return data;
    } catch (err) {
        throw err;
    }
};

const fetchUsers = async () => {
    try {
        const { data } = await axios.get(`${DOMAIN}/users`);

        return data;
    } catch (err) {
        throw err;
    }
};

export { fetchUsers, loginUser };
