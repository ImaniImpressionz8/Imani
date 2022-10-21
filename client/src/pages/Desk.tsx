import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Input, Select } from '@chakra-ui/react';

// hooks
import { useProduct } from '../context/ProductContext';
import { useOrder } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';

const Desk = () => {
    const navigate = useNavigate();

    const { getProudcts, products } = useProduct();
    const { user } = useAuth();
    const { getOrders, createOrder, updateOrder, getOrder, removeOrder } =
        useOrder();

    const [workFiles, setWorkFiles] = useState<(File | null | undefined)[]>();

    const [currentProductId, setCurrentProductId] = useState('');
    const [currentProduct, setCurrentProduct] = useState<{
        prices: [];
        minorderqty: number;
        department: string;
        name: string;
    }>();

    const [currentProductPrice, setCurrentProductPrice] = useState<{
        sides: number;
        priceperunit: number;
        unit: string;
        lamination: string;
    }>();

    const [currentProductPriceId, setCurrentProductPriceId] = useState('');
    const [orderQTY, setOrderQTY] = useState<number>(
        currentProduct ? currentProduct?.minorderqty : 1
    );

    const [customerName, setCustomerName] = useState<string>();
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState<string>();
    const [customerEmail, setCustomerEmail] = useState<string>();

    useEffect(() => {
        getProudcts();
    }, []);

    useEffect(() => {
        if (!user) navigate('/');
    }, [user, navigate]);

    useEffect(() => {
        const selectedProduct = products?.filter(
            ({ _id }: { _id: string }) => _id === currentProductId
        );

        setCurrentProduct(selectedProduct[0]);
    }, [currentProductId, products]);

    useEffect(() => {
        const selectedProductPrice = currentProduct?.prices?.filter(
            ({ _id }: { _id: string }) => _id === currentProductPriceId
        );

        if (selectedProductPrice)
            setCurrentProductPrice(selectedProductPrice[0]);
    }, [currentProductPriceId, currentProduct]);

    return (
        <section className="min-h-screen flex justify-center items-center flex-col p-4">
            <div className="flex">
                <div className="border rounded p-4 justify-center items-start mr-4">
                    <div>
                        <Select
                            placeholder="Select Product"
                            className="rounded"
                            onChange={(event) => {
                                setCurrentProductId(event.target.value);
                            }}
                            style={{
                                fontFamily: 'Roboto Mono'
                            }}
                        >
                            {products?.map(
                                (item: { _id: string; name: string }) => {
                                    const { _id, name } = item;

                                    return (
                                        <option
                                            style={{
                                                fontFamily: 'Roboto Mono'
                                            }}
                                            value={_id}
                                            key={_id}
                                        >
                                            {name}
                                        </option>
                                    );
                                }
                            )}
                        </Select>
                        <div className="flex">
                            <div>
                                <p className="my-4">Custmer Details</p>
                                <div className="mt-4">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Customer Name
                                    </p>
                                    <Input
                                        style={{
                                            fontFamily: 'Roboto Mono'
                                        }}
                                        className="w-64 h-10 rounded p-2"
                                        onChange={(event) => {
                                            setCustomerName(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Customer Phone #
                                    </p>
                                    <Input
                                        style={{
                                            fontFamily: 'Roboto Mono'
                                        }}
                                        className="w-64 h-10 rounded p-2"
                                        onChange={(event) => {
                                            setCustomerPhoneNumber(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Customer Email
                                    </p>
                                    <Input
                                        style={{
                                            fontFamily: 'Roboto Mono'
                                        }}
                                        className="w-64 h-10 rounded p-2"
                                        onChange={(event) => {
                                            setCustomerEmail(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="ml-8">
                                <p className="my-4">Order Details</p>
                                <div className="mt-4">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Quantity
                                    </p>
                                    <Input
                                        style={{
                                            fontFamily: 'Roboto Mono'
                                        }}
                                        className="w-64 h-10 rounded p-2"
                                        onChange={(event) => {
                                            setOrderQTY(
                                                parseInt(event.target.value, 10)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-slate-500 mb-2">
                                        Price/Sides/Lamination
                                    </p>
                                    <Select
                                        placeholder="Select Price/Unit"
                                        className="rounded"
                                        onChange={(event) => {
                                            setCurrentProductPriceId(
                                                event.target.value
                                            );
                                        }}
                                        style={{
                                            fontFamily: 'Roboto Mono'
                                        }}
                                    >
                                        {currentProduct?.prices?.map(
                                            (item: {
                                                _id: string;
                                                priceperunit: Number;
                                                sides: Number;
                                                lamination: string;
                                                unit: string;
                                            }) => {
                                                const {
                                                    _id,
                                                    priceperunit,
                                                    sides,
                                                    lamination,
                                                    unit
                                                } = item;

                                                return (
                                                    <option
                                                        style={{
                                                            fontFamily:
                                                                'Roboto Mono'
                                                        }}
                                                        value={_id}
                                                        key={_id}
                                                    >
                                                        {`
                                                        GHS ${
                                                            parseInt(
                                                                priceperunit?.toString(),
                                                                10
                                                            ) / 100
                                                        }/${unit}${
                                                            sides
                                                                ? `-${sides} side(s)`
                                                                : ''
                                                        }${
                                                            lamination
                                                                ? `-Lamination: ${lamination}`
                                                                : ''
                                                        }
                                                    `}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded p-4 mt-4">
                        <div className="flex">
                            <div className="flex flex-1 flex-col">
                                <p className="text-sm text-slate-500 mb-2">
                                    Price/Unit(GHS)
                                </p>
                                <h3 className="text-lg">
                                    {currentProductPrice?.priceperunit
                                        ? currentProductPrice?.priceperunit /
                                          100
                                        : '-'}
                                </h3>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <p className="text-sm text-slate-500 mb-2">
                                    Unit
                                </p>
                                <h3 className="text-lg">
                                    {currentProductPrice?.unit
                                        ? currentProductPrice?.unit
                                        : '-'}
                                </h3>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-1 flex-col mt-4">
                                <p className="text-sm text-slate-500 mb-2">
                                    Sides
                                </p>
                                <h3 className="text-lg">
                                    {currentProductPrice?.sides
                                        ? currentProductPrice?.sides.toString()
                                        : '-'}
                                </h3>
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                                <p className="text-sm text-slate-500 mb-2">
                                    Lamination
                                </p>
                                <h3 className="text-lg">
                                    {currentProductPrice?.lamination
                                        ? currentProductPrice?.lamination
                                        : '-'}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border rounded flex flex-1 flex-col p-4">
                    <div className="pb-4">
                        <p>Sub Total</p>
                        <b className="text-lg mt-2">
                            {currentProductPrice &&
                            currentProductPrice?.priceperunit
                                ? `GHS ${
                                      (currentProductPrice?.priceperunit *
                                          orderQTY) /
                                      100
                                  }`
                                : '-'}
                        </b>
                    </div>
                    <div className="pb-4">
                        <p>VAT</p>
                        <b className="text-lg mt-2">{'-'}</b>
                    </div>
                    <div className="pb-4">
                        <p>Total Cost</p>
                        <b className="text-lg mt-2">
                            {currentProductPrice &&
                            currentProductPrice?.priceperunit
                                ? `GHS ${
                                      (currentProductPrice?.priceperunit *
                                          orderQTY) /
                                      100
                                  }`
                                : '-'}
                        </b>
                    </div>
                    <Input
                        style={{
                            fontFamily: 'Roboto Mono'
                        }}
                        className="w-64 border-none bg-slate-100"
                        colorScheme="teal"
                        size="sm"
                        type={'file'}
                        multiple
                        onChange={(event) => {
                            const { files } = event.target;

                            let make = [];

                            for (
                                let i = 0;
                                i < (files?.length ? files?.length : 0);
                                i++
                            ) {
                                make[i] = files?.item(i);
                            }

                            setWorkFiles(make);
                        }}
                    />
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
                        createOrder({
                            order: {
                                clientName: customerName,
                                department: currentProduct?.department,
                                email: customerEmail,
                                totalcost: currentProductPrice?.priceperunit
                                    ? currentProductPrice?.priceperunit *
                                      orderQTY
                                    : -1,
                                phoneNumber: customerPhoneNumber,
                                qty: orderQTY,
                                product: {
                                    ...currentProductPrice,
                                    name: currentProduct?.name
                                },
                                files: workFiles,
                                placedBy: user?.username
                            },
                            navigate
                        });
                    }}
                >
                    Submit
                </Button>
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        navigate('/desk/orders');
                    }}
                >
                    Orders
                </Button>
            </div>
        </section>
    );
};

export default Desk;
