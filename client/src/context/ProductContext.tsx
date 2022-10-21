import { createContext, useContext, useEffect, useState } from 'react';

import {
    fetchProducts,
    saveProduct,
    postProductPrice,
    fetchProduct
} from '../services/product';

const ProductContext = createContext<any>({});

export const useProduct = () => useContext(ProductContext);

const ProductContextProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {}, []);

    const getProudcts = async () => {
        try {
            const { success, data, message } = await fetchProducts();

            if (success) {
                setProducts(data);
            }
        } catch (err) {}
    };

    const createProduct = async ({ product }: { product: object }) => {
        try {
            const { success, data, message } = await saveProduct({ product });

            if (success) {
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
                getProudcts,
                products,
                createProduct,
                addProductPrice,
                getProduct
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
