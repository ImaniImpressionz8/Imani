import User from '../model/user';

const getUsers = async () =>
    await User.find()
        .then((users) => users)
        .catch((err) => {
            throw err;
        });

const getUser = async (username: string) =>
    await User.findOne({ username })
        .then((user) => user)
        .catch((err) => {
            throw err;
        });

const saveUser = (
    department?: string,
    firstname?: string,
    username?: string,
    password?: string,
    isAdmin?: boolean
) => new User({ username, department, firstname, password, isAdmin }).save();

const deleteUser = (_id: string) => User.deleteOne({ _id });

export { deleteUser, getUser, getUsers, saveUser };
