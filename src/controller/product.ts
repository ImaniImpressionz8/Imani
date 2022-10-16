import Product from '../model/product';

const getProducts = async () =>
    await Product.find()
        .then((products) => products)
        .catch((err) => {
            throw err;
        });

const getProduct = async ({ _id }: { _id: string }) =>
    await Product.findOne({ _id })
        .then((product) => {
            return product;
        })
        .catch((err) => {
            throw err;
        });

const saveProduct = ({
    department,
    minorderqty,
    name
}: {
    name?: string;
    department?: string;
    minorderqty?: string;
}) => new Product({ name, department, minorderqty }).save();

const updateProduct = async ({ _id, price }: { _id: string; price: object }) =>
    await Product.findByIdAndUpdate(
        _id,
        { $push: { prices: price } },
        { new: true }
    )
        .then((product) => {
            return product;
        })
        .catch((err) => {
            throw err;
        });

const deleteProduct = ({ _id }: { _id: string }) => Product.deleteOne({ _id });

const deleteProductPrice = ({
    _id,
    priceId
}: {
    _id: string;
    priceId: string;
}) =>
    Product.updateOne(
        { _id },
        {
            $pull: {
                prices: { _id: priceId }
            }
        }
    );

export {
    deleteProduct,
    deleteProductPrice,
    getProduct,
    getProducts,
    saveProduct,
    updateProduct
};
