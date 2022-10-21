import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        clientName: { type: String, required: true },
        product: Object,
        orderNumber: { type: String, required: true },
        totalcost: { type: Number, required: true },
        department: String,
        qty: { type: Number, required: true },
        email: String,
        phoneNumber: String,
        state: { type: String, default: 'placed' },
        printFiles: [],
        placedBy: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
