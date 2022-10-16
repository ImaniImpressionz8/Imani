import axios from 'axios';

import { DOMAIN } from '.';

const route = `${DOMAIN}/orders`;

const fetchOrders = async () => {
    try {
        const { data } = await axios.get(`${route}/`);

        return data;
    } catch (err) {
        throw err;
    }
};

const saveOrder = async ({ order }: { order: object }) => {
    try {
        const { data } = await axios.post(`${route}/`, { ...order });

        return data;
    } catch (err) {
        throw err;
    }
};

const patchOrder = async ({ _id, order }: { _id: string; order: object }) => {
    try {
        const { data } = await axios.patch(`${route}/${_id}`, { ...order });

        return data;
    } catch (err) {
        throw err;
    }
};

const fetchOrder = async ({ _id }: { _id: string }) => {
    try {
        const { data } = await axios.get(`${route}/${_id}`);

        return data;
    } catch (err) {
        throw err;
    }
};

const deleteOrder = async ({ _id }: { _id: string }) => {
    try {
        const { data } = await axios.delete(`${route}/?_id=${_id}`);

        return data;
    } catch (err) {
        throw err;
    }
};

export { fetchOrders, saveOrder, patchOrder, fetchOrder, deleteOrder };
