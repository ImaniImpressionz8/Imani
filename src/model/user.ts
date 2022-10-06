import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        firstname: String,
        username: { type: String, unique: true },
        department: String,
        isAdmin: { type: Boolean, default: false },
        password: String
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);
