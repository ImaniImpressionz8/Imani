import { Button, Input, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// hooks
import { useProduct } from '../../context/ProductContext';

const Products = () => {
    const {
        getProducts,
        products,
        removeProduct,
        createProduct,
        showProducts,
        setShowProducts,
        getDepartments,
        departments,
        edit,
        setEdit,
        addProductPrice
    } = useProduct();

    const [productName, setProductName] = useState<String>();
    const [productDepartment, setProductDepartment] = useState<String>();
    const [lamination, setLamination] = useState<String>();
    const [minorderqty, setMinorderqty] = useState<Number>();

    const [unitPrice, setUnitPrice] = useState<Number>();
    const [sides, setSides] = useState<Number>();
    const [unit, setUnit] = useState<String>();

    const [currentProduct, setCurrentProduct] = useState<{
        name: string;
        _id: string;
        minorderqty: Number;
        department: string;
        prices: [];
    }>();

    useEffect(() => {
        getProducts();
        getDepartments();
    }, []);

    return (
        <div className="flex flex-col">
            {edit && (
                <div className="z-10 absolute inset-0 flex justify-center items-center bg-white">
                    <div className="border rounded p-4 bg-slate-100">
                        <div className="mb-4  flex">
                            <div className="mx-4">
                                <p className="mb-1 text-sm text-slate-500">
                                    Unit Price (GHS)
                                </p>
                                <Input
                                    id={'unitprice'}
                                    name={'unitprice'}
                                    style={{
                                        fontFamily: 'Roboto Mono',
                                        backgroundColor: 'white'
                                    }}
                                    className="w-64 h-10 rounded p-2 mt-1"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setUnitPrice(parseFloat(value) * 100);
                                    }}
                                />
                            </div>
                            <div className="mx-4">
                                <p className="mb-1 text-sm text-slate-500">
                                    Unit
                                </p>
                                <Input
                                    id={'unitprice'}
                                    name={'unitprice'}
                                    style={{
                                        fontFamily: 'Roboto Mono',
                                        backgroundColor: 'white'
                                    }}
                                    className="w-64 h-10 rounded p-2  mt-1"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setUnit(value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mb-4  flex">
                            <div className="mx-4">
                                <p className="mb-1 text-sm text-slate-500">
                                    Sides
                                </p>
                                <Input
                                    id={'unitprice'}
                                    name={'unitprice'}
                                    style={{
                                        fontFamily: 'Roboto Mono',
                                        backgroundColor: 'white'
                                    }}
                                    className="w-64 h-10 rounded p-2 mt-1"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setSides(parseInt(value));
                                    }}
                                />
                            </div>
                            <div className="mx-4">
                                <p className="mb-1 text-sm text-slate-500">
                                    Lamination
                                </p>
                                <Input
                                    id={'unitprice'}
                                    name={'unitprice'}
                                    style={{
                                        fontFamily: 'Roboto Mono',
                                        backgroundColor: 'white'
                                    }}
                                    className="w-64 h-10 rounded p-2 mt-1"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setLamination(value);
                                    }}
                                />
                            </div>
                        </div>
                        <Button
                            style={{
                                fontFamily: 'Roboto Mono'
                            }}
                            colorScheme="teal"
                            className="h-60 mr-2 my-2"
                            size="sm"
                            onClick={() => {
                                if (!unitPrice) return;

                                addProductPrice({
                                    _id: currentProduct?._id,
                                    price: {
                                        priceperunit: unitPrice,
                                        unit,
                                        sides,
                                        lamination
                                    }
                                });

                                setSides(undefined);
                                setUnit(undefined);
                                setUnitPrice(undefined);
                                setLamination(undefined);
                            }}
                        >
                            Save Price
                        </Button>
                        <Button
                            style={{
                                fontFamily: 'Roboto Mono'
                            }}
                            colorScheme="teal"
                            className="h-60 mr-2 my-2"
                            size="sm"
                            onClick={() => {
                                setEdit(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            )}
            {showProducts ? (
                <div className="flex">
                    <div className="border p-4 overflow-y-auto h-96">
                        <h3 className="mb-4">Product Price List</h3>
                        {currentProduct?.prices?.map(
                            (item: {
                                priceperunit: Number;
                                sides: Number;
                                unit: String;
                                lamination: String;
                                _id: string;
                            }) => {
                                const {
                                    _id,
                                    priceperunit,
                                    unit,
                                    sides,
                                    lamination
                                } = item;
                                return (
                                    <div
                                        key={_id}
                                        className="flex mb-4 border p-2"
                                    >
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-1  mx-4">
                                                <p className="mb-1 text-sm text-slate-500">
                                                    Unit Price
                                                </p>
                                                <p className="mb-1">
                                                    {`GHS ${(
                                                        parseFloat(
                                                            priceperunit?.toString()
                                                        ) / 100
                                                    )?.toString()}`}
                                                </p>
                                            </div>
                                            <div className="flex flex-col flex-1  mx-4">
                                                <p className="mb-1 text-sm text-slate-500">
                                                    Sides
                                                </p>
                                                <p className="mb-1">
                                                    {sides?.toString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-1 mx-4">
                                                <p className="mb-1 text-sm text-slate-500">
                                                    Unit
                                                </p>
                                                <p className="mb-1">{unit}</p>
                                            </div>
                                            <div className="flex flex-col flex-1 mx-4">
                                                <p className="mb-1 text-sm text-slate-500">
                                                    Lamination
                                                </p>
                                                <p className="mb-1">
                                                    {lamination}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <div className="border p-4">
                        <h3>Products Details</h3>
                        <div className="flex mb-4 cursor-pointer mt-4">
                            <div className="flex flex-col">
                                <div className="flex flex-col flex-1  mr-4 mt-2">
                                    <p className="mb-1 text-sm text-slate-500">
                                        Product Name
                                    </p>
                                    <p className="mb-1">
                                        {currentProduct?.name}
                                    </p>
                                </div>
                                <div className="flex flex-col flex-1  mr-4 mt-2">
                                    <p className="mb-1 text-sm text-slate-500">
                                        MOQ
                                    </p>
                                    <p className="mb-1">
                                        {currentProduct?.minorderqty?.toString()}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col flex-1 mr-4 mt-2">
                                    <p className="mb-1 text-sm text-slate-500">
                                        Department
                                    </p>
                                    <p className="mb-1">
                                        {currentProduct?.department}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {currentProduct && (
                            <div className="flex">
                                <Button
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="h-60 mr-2 my-2"
                                    size="sm"
                                    onClick={() => {
                                        removeProduct({
                                            _id: currentProduct?._id
                                        });
                                    }}
                                >
                                    Delete
                                </Button>
                                <Button
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="h-60 mr-2 my-2"
                                    size="sm"
                                    onClick={() => {
                                        setEdit(true);
                                    }}
                                >
                                    Add Price
                                </Button>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="overflow-y-auto h-96 border p-4">
                            {products?.map(
                                (item: {
                                    name: string;
                                    _id: string;
                                    minorderqty: Number;
                                    department: string;
                                    prices: [];
                                }) => {
                                    const {
                                        _id,
                                        minorderqty,
                                        name,
                                        department
                                    } = item;

                                    return (
                                        <div
                                            key={_id}
                                            className="flex bg-slate-100 mb-4 p-2 cursor-pointer"
                                            onClick={() => {
                                                setCurrentProduct(item);
                                            }}
                                        >
                                            <div className="flex flex-col">
                                                <div className="m-1 flex flex-col flex-1  mx-4">
                                                    <p className="mb-1 text-sm text-slate-500">
                                                        Product Name
                                                    </p>
                                                    <p className="mb-1">
                                                        {name}
                                                    </p>
                                                </div>
                                                <div className="m-1 flex flex-col flex-1  mx-4">
                                                    <p className="mb-1 text-sm text-slate-500">
                                                        MOQ
                                                    </p>
                                                    <p className="mb-1">
                                                        {minorderqty?.toString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="m-1 flex flex-col flex-1 mx-4">
                                                    <p className="mb-1 text-sm text-slate-500">
                                                        Department
                                                    </p>
                                                    <p className="mb-1">
                                                        {department}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="border p-4">
                        <div className="flex">
                            <div className="m-1">
                                <p className="mb-1">Product Name</p>
                                <Input
                                    id={'productname'}
                                    name={'productname'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setProductName(value);
                                    }}
                                />
                            </div>
                            <div className="m-1">
                                <p className="mb-1">Department</p>
                                <Select
                                    id={'isAdmin'}
                                    name={'isAdmin'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setProductDepartment(value);
                                    }}
                                >
                                    {departments?.map(
                                        (item: {
                                            value: string;
                                            name: string;
                                        }) => {
                                            const { value, name } = item;

                                            return (
                                                <option value={value}>
                                                    {name}
                                                </option>
                                            );
                                        }
                                    )}
                                </Select>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-1">
                                <p className="mb-1">MOQ</p>
                                <Input
                                    id={'moq'}
                                    name={'moq'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setMinorderqty(parseInt(value));
                                    }}
                                />
                            </div>
                            <div className="m-1">
                                <p className="mb-1">Action</p>
                                <Button
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-60 p-2"
                                    size="sm"
                                    onClick={() => {
                                        createProduct({
                                            product: {
                                                name: productName,
                                                department: productDepartment,
                                                minorderqty
                                            }
                                        });
                                    }}
                                >
                                    Save product
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-center p-1">
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        setShowProducts(false);
                    }}
                >
                    New Product
                </Button>
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        setShowProducts(true);
                    }}
                >
                    Show Products
                </Button>
            </div>
        </div>
    );
};

export default Products;
