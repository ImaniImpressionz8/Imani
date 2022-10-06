import User from '../model/user';

const getUsers = async () =>
    await User.find((docs) => {
        return docs;
    }).clone();

const getUser = async (_id: string) =>
    await User.findOne({ _id }, (doc: object) => {
        return doc;
    }).clone();

const saveUser = (department?: string, name?: string, isAdmin?: boolean) =>
    new User({ name, department, isAdmin }).save();

const deleteUser = (_id?: string) => User.deleteOne({ _id });

export { deleteUser, getUser, getUsers, saveUser };
