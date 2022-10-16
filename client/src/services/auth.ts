import axios from 'axios';

import { DOMAIN } from '.';

const loginUser = async ({
    username,
    password
}: {
    username: string;
    password: string;
}) => {
    try {
        const { data } = await axios.get(
            `${DOMAIN}/users/login?username=${username}&password=${password}`
        );

        return data;
    } catch (err) {
        throw err;
    }
};

export { loginUser };
