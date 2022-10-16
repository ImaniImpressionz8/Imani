import { customAlphabet } from 'nanoid';

import Order from '../model/order';

const getOrders = async () =>
    await Order.find()
        .then((orders) => {
            return orders;
        })
        .catch((err) => {
            throw err;
        });

const getOrder = async (_id: string) =>
    await Order.findOne({ _id })
        .then((order) => {
            return order;
        })
        .catch((err) => {
            throw err;
        });

const saveOrder = ({ order }: { order: object }) => {
    const nanoid = customAlphabet('123456789IM', 8);

    const orderNumber = nanoid();

    return new Order({
        ...order,
        orderNumber
    }).save();
};

const updateOrder = ({ _id, body }: { body?: object; _id: string }) =>
    Order.findByIdAndUpdate(_id, { $set: { ...body } }, { new: true })
        .then((order) => {
            return order;
        })
        .catch((err) => {
            throw err;
        });

const deleteOrder = (_id: string) => Order.deleteOne({ _id });

export { deleteOrder, getOrder, getOrders, saveOrder, updateOrder };
