import User from '../model/user';

const getUsers = async () =>
    await User.find((docs) => {
        return docs;
    }).clone();

const getUser = async (username: string) =>
    await User.findOne({ username }, (doc: object) => {
        return doc;
    }).clone();

const saveUser = (
    department?: string,
    firstname?: string,
    username?: string,
    password?: string,
    isAdmin?: boolean
) => new User({ username, department, firstname, password, isAdmin }).save();

const deleteUser = (_id?: string) => User.deleteOne({ _id });

export { deleteUser, getUser, getUsers, saveUser };
