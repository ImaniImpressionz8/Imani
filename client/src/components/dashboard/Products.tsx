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
        <div className="flex flex-1">
            <div className="flex flex-1 bg-white">
                {edit && (
                    <AddPriceForm
                        currentProduct={currentProduct}
                        addProductPrice={addProductPrice}
                        setEdit={setEdit}
                    />
                )}
                {showProducts ? (
                    <ProductList
                        currentProduct={currentProduct}
                        products={products}
                        setCurrentProduct={setCurrentProduct}
                        setEdit={setEdit}
                        removeProduct={removeProduct}
                    />
                ) : (
                    <NewProductForm
                        departments={departments}
                        createProduct={createProduct}
                    />
                )}
            </div>
            <div className="flex w-1/5 h-full bg-slate-50 items-start flex-col">
                <SideButton
                    label="New Product"
                    onClick={() => {
                        setShowProducts(false);
                    }}
                />
                <SideButton
                    label="Products"
                    onClick={() => {
                        setShowProducts(true);
                    }}
                />
            </div>
        </div>
    );
};

const AddPriceForm = ({
    currentProduct,
    addProductPrice,
    setEdit
}: {
    currentProduct: any;
    addProductPrice: any;
    setEdit: any;
}) => {
    const [unitPrice, setUnitPrice] = useState<Number>();
    const [sides, setSides] = useState<Number>();
    const [unit, setUnit] = useState<String>();
    const [lamination, setLamination] = useState<String>();

    return (
        <div className="z-10 absolute inset-0 flex justify-center items-center bg-white flex flex-col">
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
                        <p className="mb-1 text-sm text-slate-500">Unit</p>
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
                        <p className="mb-1 text-sm text-slate-500">Sides</p>
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
            </div>
            <div className="m-6">
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    colorScheme="teal"
                    className="h-60 mr-2 my-2 w-64"
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
                    className="h-60 mr-2 my-2  w-64"
                    onClick={() => {
                        setEdit(false);
                    }}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};

const NewProductForm = ({
    departments,
    createProduct
}: {
    departments: any;
    createProduct: any;
}) => {
    const [productName, setProductName] = useState<String>();
    const [productDepartment, setProductDepartment] = useState<String>();
    const [minorderqty, setMinorderqty] = useState<Number>();

    return (
        <div className="flex flex-1 justify-center items-center flex-col">
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
                    <div className="m-1 w-60">
                        <p className="mb-1">Department</p>
                        <Select
                            id={'isAdmin'}
                            name={'isAdmin'}
                            style={{
                                fontFamily: 'Roboto Mono'
                            }}
                            className="h-10 rounded p-2"
                            onChange={({ target }) => {
                                const { value } = target;

                                setProductDepartment(value);
                            }}
                        >
                            {departments?.map(
                                (
                                    item: { value: string; name: string },
                                    key: string | number
                                ) => {
                                    const { value, name } = item;

                                    return (
                                        <option key={key} value={value}>
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
                </div>
            </div>
            <Button
                style={{
                    fontFamily: 'Roboto Mono'
                }}
                className="w-64 h-60 p-2 m-4"
                colorScheme={'teal'}
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
    );
};

const ProductList = ({
    currentProduct,
    removeProduct,
    setCurrentProduct,
    setEdit,
    products
}: {
    currentProduct: any;
    removeProduct: any;
    setCurrentProduct: any;
    setEdit: any;
    products: any;
}) => {
    return (
        <div className="flex flex-1 justify-center m-10">
            <div className="border p-4 overflow-y-auto">
                <h3 className="mb-4">Product Price List</h3>
                {currentProduct?.prices?.map(
                    (item: {
                        priceperunit: Number;
                        sides: Number;
                        unit: String;
                        lamination: String;
                        _id: string;
                    }) => {
                        const { _id, priceperunit, unit, sides, lamination } =
                            item;
                        return (
                            <div key={_id} className="flex mb-4 border p-2">
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
                                        <p className="mb-1">{lamination}</p>
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
                            <p className="mb-1">{currentProduct?.name}</p>
                        </div>
                        <div className="flex flex-col flex-1  mr-4 mt-2">
                            <p className="mb-1 text-sm text-slate-500">MOQ</p>
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
                            <p className="mb-1">{currentProduct?.department}</p>
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
            <div className="overflow-y-auto border p-4">
                {products?.map(
                    (item: {
                        name: string;
                        _id: string;
                        minorderqty: Number;
                        department: string;
                        prices: [];
                    }) => {
                        const { _id, minorderqty, name, department } = item;

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
                                        <p className="mb-1">{name}</p>
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
                                        <p className="mb-1">{department}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

const SideButton = ({
    label,
    onClick
}: {
    label: string;
    onClick: Function;
}) => {
    return (
        <div
            onClick={() => {
                onClick && onClick();
            }}
            className="bg-slate-300 w-full h-14 border-b border-slate-50 flex items-center justify-center cursor-pointer"
        >
            <h3 className="text-lg">{label}</h3>
        </div>
    );
};

export default Products;
