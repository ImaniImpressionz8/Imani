import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { format } from 'date-fns';

// hooks
import { useOrder } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';

const Orders = () => {
    const navigate = useNavigate();

    const {
        getOrders,
        createOrder,
        updateOrder,
        getOrder,
        removeOrder,
        orders
    } = useOrder();
    const { user } = useAuth();

    const [currentOrder, setCurrentOrder] = useState<{
        clientName: string;
        department: string;
        product: { name: string; sides: string; lamination: string };
        orderNumber: string;
        phoneNumber: string;
        _id: string;
        totalcost: number;
        email: string;
        state: string;
        createdAt: Date;
    }>();

    useEffect(() => {
        getOrders();
    }, []);

    useEffect(() => {
        let { search } = window.location;
        let params = new URLSearchParams(search);
        let username = params.get('username');

        if (!user && !username) navigate('/');
    }, [user, navigate]);

    return (
        <section className="min-h-screen flex justify-center items-center flex-col p-4">
            <div className="flex w-auto">
                <div className="border rounded p-4 justify-center items-start mr-4">
                    <div>
                        <b>
                            {currentOrder?.product?.name
                                ? currentOrder?.product?.name
                                : '-'}
                        </b>
                        <div className="flex flex-col">
                            <p className="mt-4">Custmer Details</p>

                            <div className="flex  flex-1">
                                <div className="mt-4 flex  flex-1 flex-col">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Customer Name
                                    </p>
                                    <h3>
                                        {currentOrder?.clientName
                                            ? currentOrder?.clientName
                                            : '-'}
                                    </h3>
                                </div>
                                <div className="mt-4 flex  flex-1 flex-col">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Customer Phone #
                                    </p>
                                    <h3>
                                        {currentOrder?.phoneNumber
                                            ? currentOrder?.phoneNumber
                                            : '-'}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex  flex-1">
                                <div className="mt-4 flex  flex-1 flex-col">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Customer Email
                                    </p>
                                    <h3>
                                        {currentOrder?.email
                                            ? currentOrder?.email
                                            : '-'}
                                    </h3>
                                </div>
                                <div className="mt-4 flex  flex-1 flex-col">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Order Time
                                    </p>
                                    <h3>
                                        {currentOrder?.createdAt
                                            ? format(
                                                  new Date(
                                                      currentOrder?.createdAt.toString()
                                                  ),
                                                  'dd MMM yyy, HH:mm:ss'
                                              )
                                            : '-'}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex border rounded p-4 mt-4">
                        <div className="flex flex-1 flex-col">
                            <div className="flex flex-1 flex-col">
                                <p className="text-sm text-slate-500">Sides</p>
                                <h3>
                                    {currentOrder?.product?.sides
                                        ? currentOrder?.product?.sides
                                        : '-'}
                                </h3>
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                                <p className="text-sm text-slate-500">
                                    Lamination
                                </p>
                                <h3>
                                    {currentOrder?.product?.lamination
                                        ? currentOrder?.product?.lamination
                                        : '-'}
                                </h3>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <div className="flex flex-1 flex-col">
                                <p className="text-sm text-slate-500">Sides</p>
                                <h3>
                                    {currentOrder?.product?.sides
                                        ? currentOrder?.product?.sides
                                        : '-'}
                                </h3>
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                                <p className="text-sm text-slate-500">State</p>
                                <h3>
                                    {currentOrder?.state
                                        ? currentOrder?.state
                                        : '-'}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border rounded flex flex-col p-4">
                    <b
                        className="cursor-pointer"
                        onClick={() => {
                            getOrders();
                        }}
                    >
                        Orders
                    </b>
                    <div className="overflow-y-auto h-96">
                        {orders?.map(
                            (item: {
                                clientName: string;
                                department: string;
                                product: {
                                    name: string;
                                    sides: string;
                                    lamination: string;
                                };
                                orderNumber: string;
                                phoneNumber: string;
                                _id: string;
                                totalcost: number;
                                lamination: string;
                                email: string;
                                sides: number;
                                state: string;
                                createdAt: Date;
                            }) => {
                                const {
                                    clientName,
                                    department,
                                    product,
                                    orderNumber,
                                    totalcost,
                                    phoneNumber,
                                    _id
                                } = item;

                                const { name } = product || {};

                                return (
                                    <div
                                        className="flex mt-4 border p-2 cursor-pointer"
                                        onClick={() => {
                                            console.log(item.createdAt);

                                            setCurrentOrder(item);
                                        }}
                                        key={_id}
                                    >
                                        <div className="flex flex-1 flex-col w-36">
                                            <div className="flex flex-col">
                                                <p className="text-sm text-slate-500">
                                                    Customer
                                                </p>
                                                <h3>{clientName}</h3>
                                            </div>
                                            <div className="flex flex-1 flex-col pt-2">
                                                <p className="text-sm text-slate-500">
                                                    Customer #
                                                </p>
                                                <h3>{phoneNumber}</h3>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col w-36">
                                            <div className="flex flex-col">
                                                <p className="text-sm text-slate-500">
                                                    Product Name
                                                </p>
                                                <h3>{name}</h3>
                                            </div>
                                            <div className="flex flex-1 flex-col  pt-2">
                                                <p className="text-sm text-slate-500">
                                                    Order #
                                                </p>
                                                <h3>{orderNumber}</h3>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col w-36">
                                            <div className="flex flex-col">
                                                <p className="text-sm text-slate-500">
                                                    Department
                                                </p>
                                                <h3>{department}</h3>
                                            </div>
                                            <div className="flex flex-1 flex-col  pt-2">
                                                <p className="text-sm text-slate-500">
                                                    Cost
                                                </p>
                                                <h3>{`GHS ${
                                                    totalcost / 100
                                                }`}</h3>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
            <div className="flex m-8">
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        updateOrder({
                            _id: currentOrder?._id,
                            order: { state: 'cancelled' }
                        });
                    }}
                >
                    Cancel
                </Button>
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        navigate('/desk');
                    }}
                >
                    New Order
                </Button>
            </div>
        </section>
    );
};

export default Orders;
