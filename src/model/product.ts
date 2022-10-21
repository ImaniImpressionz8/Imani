import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        name: String,
        prices: [
            {
                priceperunit: Number,
                unit: String,
                sides: Number,
                lamination: String
            }
        ],
        department: String,
        minorderqty: Number
    },
    { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
