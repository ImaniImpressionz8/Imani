import { createContext, useContext, useEffect, useState } from 'react';

import {
    fetchOrders,
    saveOrder,
    patchOrder,
    fetchOrder,
    deleteOrder
} from '../services/order';

const OrderContext = createContext<any>({});

export const useOrder = () => useContext(OrderContext);

const OrderContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [orders, setOrders] = useState();

    useEffect(() => {}, []);

    const getOrders = async () => {
        try {
            const { success, data, message } = await fetchOrders();

            if (success) {
                setOrders(data);
            }
        } catch (err) {}
    };

    const createOrder = async ({
        order,
        navigate
    }: {
        order: object;
        navigate: any;
    }) => {
        try {
            const { success, data, message } = await saveOrder({ order });

            if (success) {
                navigate('/desk/orders');
            }
        } catch (err) {}
    };

    const updateOrder = async ({
        _id,
        order
    }: {
        _id: string;
        order: object;
    }) => {
        try {
            const { success, data, message } = await patchOrder({
                _id,
                order
            });

            if (success) {
                getOrders();
            }
        } catch (err) {}
    };

    const getOrder = async ({ _id }: { _id: string }) => {
        try {
            const { success, data, message } = await fetchOrder({
                _id
            });

            if (success) {
                console.log(data);
            }
        } catch (err) {}
    };

    const removeOrder = async ({ _id }: { _id: string }) => {
        try {
            const { success, data, message } = await deleteOrder({
                _id
            });

            if (success) {
            }
        } catch (err) {}
    };

    return (
        <OrderContext.Provider
            value={{
                getOrders,
                orders,
                createOrder,
                updateOrder,
                getOrder,
                removeOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;
