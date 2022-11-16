import { createContext, useContext, useEffect, useState } from 'react';

import {
    fetchProducts,
    saveProduct,
    postProductPrice,
    fetchProduct,
    deleteProduct,
    fetchDepartments
} from '../services/product';

const ProductContext = createContext<any>({});

export const useProduct = () => useContext(ProductContext);

const ProductContextProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [products, setProducts] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [showProducts, setShowProducts] = useState(false);
    const [edit, setEdit] = useState<boolean>(false);

    useEffect(() => {}, []);

    const getProducts = async () => {
        try {
            const { success, data, message } = await fetchProducts();

            if (success) {
                setProducts(data);
            }
        } catch (err) {}
    };

    const getDepartments = async () => {
        try {
            const { success, data, message } = await fetchDepartments();

            if (success) {
                setDepartments(data);
            }
        } catch (err) {}
    };
    const createProduct = async ({ product }: { product: object }) => {
        try {
            const { success, data, message } = await saveProduct({ product });

            if (success) {
                getProducts();
                setShowProducts(true);
            }
        } catch (err) {}
    };

    const addProductPrice = async ({
        _id,
        price
    }: {
        _id: string;
        price: object;
    }) => {
        try {
            const { success, data, message } = await postProductPrice({
                _id,
                price
            });

            if (success) {
                setEdit(false);
                getProducts();
            }
        } catch (err) {}
    };

    const removeProduct = async ({ _id }: { _id: string; price: object }) => {
        try {
            const { success, data, message } = await deleteProduct({
                _id
            });

            if (success) {
                getProducts();
            }
        } catch (err) {}
    };

    const getProduct = async ({ _id }: { _id: string }) => {
        try {
            const { success, data, message } = await fetchProduct({ _id });

            if (success) {
            }
        } catch (err) {}
    };

    return (
        <ProductContext.Provider
            value={{
                getProducts,
                products,
                createProduct,
                addProductPrice,
                getProduct,
                removeProduct,
                showProducts,
                setShowProducts,
                departments,
                getDepartments,
                edit,
                setEdit
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
