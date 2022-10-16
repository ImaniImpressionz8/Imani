import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        clientName: String,
        product: Object,
        orderNumber: String,
        totalcost: Number,
        department: String,
        qty: Number,
        email: String,
        phoneNumber: String,
        state: String
    },
    { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
