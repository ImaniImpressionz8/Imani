import axios from 'axios';

import { DOMAIN } from '.';

const route = `${DOMAIN}/products`;

const fetchProducts = async () => {
    try {
        const { data } = await axios.get(`${route}/`);

        return data;
    } catch (err) {
        throw err;
    }
};

const fetchDepartments = async () => {
    try {
        const { data } = await axios.get(`${route}/departments`);

        return data;
    } catch (err) {
        throw err;
    }
};

const saveProduct = async ({ product }: { product: object }) => {
    try {
        const { data } = await axios.post(`${route}/`, { ...product });

        return data;
    } catch (err) {
        throw err;
    }
};

const postProductPrice = async ({
    _id,
    price
}: {
    _id: string;
    price: object;
}) => {
    try {
        const { data } = await axios.put(`${route}/${_id}`, {
            price
        });

        return data;
    } catch (err) {
        throw err;
    }
};

const fetchProduct = async ({ _id }: { _id: string }) => {
    try {
        const { data } = await axios.get(`${route}/${_id}`);

        return data;
    } catch (err) {
        throw err;
    }
};

const deleteProduct = async ({ _id }: { _id: string }) => {
    try {
        const { data } = await axios.delete(`${route}/?_id=${_id}`);

        return data;
    } catch (err) {
        throw err;
    }
};

export {
    fetchProducts,
    saveProduct,
    postProductPrice,
    fetchProduct,
    deleteProduct,
    fetchDepartments
};
