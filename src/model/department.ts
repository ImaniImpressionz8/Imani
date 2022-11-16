import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema(
    {
        name: String,
        value: String
    },
    { timestamps: true }
);

export default mongoose.model('Department', DepartmentSchema);
