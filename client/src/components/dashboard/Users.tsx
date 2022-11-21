import { Button, Input, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// hooks
import { useUser } from '../../context/UserContext';
import { useProduct } from '../../context/ProductContext';

const Users = () => {
    const { getUsers, users, deleteUser, saveUser, showUsers, setShowUsers } =
        useUser();
    const { getDepartments, departments } = useProduct();

    const [firstname, setFirstname] = useState<String>();
    const [username, setUsername] = useState<String>();
    const [password, setPassword] = useState<String>();
    const [department, setDepartment] = useState<String>();
    const [isAdmin, setIsAdmin] = useState<boolean>();

    const [currentUser, setCurrentUser] = useState<{
        firstname: string;
        _id: string;
        username: string;
        department: string;
        isAdmin: boolean;
    }>();

    useEffect(() => {
        getUsers();
        getDepartments();
    }, []);

    return (
        <div className="flex flex-1">
            <div className="flex flex-1 bg-white">
                {showUsers ? (
                    <UserList
                        users={users}
                        currentUser={currentUser}
                        deleteUser={deleteUser}
                        setCurrentUser={setCurrentUser}
                    />
                ) : (
                    <NewUserForm
                        departments={departments}
                        saveUser={saveUser}
                    />
                )}
            </div>
            <div className="flex w-1/5 h-full bg-slate-50 items-start flex-col">
                <SideButton
                    label="New User"
                    onClick={() => {
                        setShowUsers(false);
                    }}
                />
                <SideButton
                    label="Users"
                    onClick={() => {
                        setShowUsers(true);
                    }}
                />
            </div>
        </div>
    );

    return (
        <div className="flex flex-col">
            {showUsers ? (
                <div className="flex">
                    <div className="border p-4">
                        <h3>User Details</h3>
                        <div className="flex mb-4 cursor-pointer mt-4">
                            <div className="flex flex-col">
                                <div className="flex flex-col flex-1  mr-4 mt-2">
                                    <p className="mb-1 text-sm text-slate-500">
                                        Firstname
                                    </p>
                                    <p className="mb-1">
                                        {currentUser?.firstname}
                                    </p>
                                </div>
                                <div className="flex flex-col flex-1  mr-4 mt-2">
                                    <p className="mb-1 text-sm text-slate-500">
                                        Username
                                    </p>
                                    <p className="mb-1">
                                        {currentUser?.username}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col flex-1 mr-4 mt-2">
                                    <p className="mb-1 text-sm text-slate-500">
                                        Department
                                    </p>
                                    <p className="mb-1">
                                        {currentUser?.department}
                                    </p>
                                </div>
                                <div className="flex flex-col flex-1  mr-4 mt-2">
                                    <p className="mb-1 text-sm text-slate-500">
                                        Adminstrator Rights
                                    </p>
                                    <p className="mb-1">
                                        {currentUser?.isAdmin
                                            ? 'True'
                                            : 'False'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <Button
                                style={{
                                    fontFamily: 'Roboto Mono'
                                }}
                                className="h-60 mr-2 my-2"
                                size="sm"
                                onClick={() => {
                                    const { _id } = currentUser || {};

                                    deleteUser({ _id });
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-y-auto h-96 border p-4">
                            {users?.map(
                                (item: {
                                    firstname: string;
                                    _id: string;
                                    username: string;
                                    department: string;
                                    isAdmin: boolean;
                                }) => {
                                    const {
                                        _id,
                                        username,
                                        firstname,
                                        department,
                                        isAdmin
                                    } = item;

                                    return (
                                        <div
                                            key={_id}
                                            className="flex bg-slate-100 mb-4 p-2 cursor-pointer"
                                            onClick={() => {
                                                setCurrentUser(item);
                                            }}
                                        >
                                            <div className="flex flex-col">
                                                <div className="m-1 flex flex-col flex-1  mx-4">
                                                    <p className="mb-1 text-sm text-slate-500">
                                                        Firstname
                                                    </p>
                                                    <p className="mb-1">
                                                        {firstname}
                                                    </p>
                                                </div>
                                                <div className="m-1 flex flex-col flex-1  mx-4">
                                                    <p className="mb-1 text-sm text-slate-500">
                                                        Username
                                                    </p>
                                                    <p className="mb-1">
                                                        {username}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="m-1 flex flex-col flex-1 mx-4">
                                                    <p className="mb-1 text-sm text-slate-500">
                                                        Department
                                                    </p>
                                                    <p className="mb-1">
                                                        {department}
                                                    </p>
                                                </div>
                                                <div className="m-1 flex flex-col flex-1  mx-4">
                                                    <p className="mb-1 text-sm text-slate-500">
                                                        Adminstrator Rights
                                                    </p>
                                                    <p className="mb-1">
                                                        {isAdmin
                                                            ? 'True'
                                                            : 'False'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="border p-4">
                        <div className="flex">
                            <div className="m-1">
                                <p className="mb-1">Firstname</p>
                                <Input
                                    id={'firstname'}
                                    name={'firstname'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setFirstname(value);
                                    }}
                                />
                            </div>
                            <div className="m-1">
                                <p className="mb-1">Username</p>
                                <Input
                                    id={'username'}
                                    name={'username'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setUsername(value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-1">
                                <p className="mb-1">Department</p>
                                <Input
                                    id={'department'}
                                    name={'department'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setDepartment(value);
                                    }}
                                />
                            </div>
                            <div className="m-1">
                                <p className="mb-1">Password</p>
                                <Input
                                    id={'password'}
                                    name={'password'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setPassword(value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-1">
                                <p className="mb-1">Adminstrator Rights</p>
                                <Select
                                    id={'isAdmin'}
                                    name={'isAdmin'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={({ target }) => {
                                        const { value } = target;

                                        setIsAdmin(Boolean(parseInt(value)));
                                    }}
                                >
                                    <option value={0}>False</option>
                                    <option value={1}>True</option>
                                </Select>
                            </div>
                            <div className="m-1">
                                <p className="mb-1">Action</p>
                                <Button
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-60 p-2"
                                    size="sm"
                                    onClick={() => {
                                        if (
                                            !firstname ||
                                            !username ||
                                            !department ||
                                            !password
                                        )
                                            return;

                                        saveUser({
                                            firstname,
                                            username,
                                            department,
                                            password,
                                            isAdmin
                                        });

                                        setFirstname(undefined);
                                        setUsername(undefined);
                                        setPassword(undefined);
                                        setDepartment(undefined);
                                        setIsAdmin(undefined);
                                    }}
                                >
                                    Save user
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-center p-1">
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        setShowUsers(false);
                    }}
                >
                    New User
                </Button>
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        setShowUsers(true);
                    }}
                >
                    Show Users
                </Button>
            </div>
        </div>
    );
};

const NewUserForm = ({
    saveUser,
    departments
}: {
    saveUser: any;
    departments: any;
}) => {
    const [firstname, setFirstname] = useState<String>();
    const [username, setUsername] = useState<String>();
    const [password, setPassword] = useState<String>();
    const [department, setDepartment] = useState<String>();
    const [isAdmin, setIsAdmin] = useState<boolean>();

    return (
        <div className="flex flex-1 justify-center items-center flex-col">
            <div className="border p-4">
                <div className="flex">
                    <div className="m-1">
                        <p className="mb-1">Firstname</p>
                        <Input
                            id={'firstname'}
                            name={'firstname'}
                            style={{
                                fontFamily: 'Roboto Mono'
                            }}
                            className="w-64 h-10 rounded p-2"
                            onChange={({ target }) => {
                                const { value } = target;

                                setFirstname(value);
                            }}
                        />
                    </div>
                    <div className="m-1">
                        <p className="mb-1">Username</p>
                        <Input
                            id={'username'}
                            name={'username'}
                            style={{
                                fontFamily: 'Roboto Mono'
                            }}
                            className="w-64 h-10 rounded p-2"
                            onChange={({ target }) => {
                                const { value } = target;

                                setUsername(value);
                            }}
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="m-1">
                        <p className="mb-1">Password</p>
                        <Input
                            id={'password'}
                            name={'password'}
                            style={{
                                fontFamily: 'Roboto Mono'
                            }}
                            className="w-64 h-10 rounded p-2"
                            onChange={({ target }) => {
                                const { value } = target;

                                setPassword(value);
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
                            className="w-64 h-10 rounded p-2"
                            onChange={({ target }) => {
                                const { value } = target;

                                setDepartment(value);
                            }}
                        >
                            {departments?.map(
                                (item: { value: string; name: string }) => {
                                    const { value, name } = item;

                                    return (
                                        <option value={value}>{name}</option>
                                    );
                                }
                            )}
                        </Select>
                    </div>
                </div>
                <div className="flex">
                    <div className="m-1 w-60">
                        <p className="mb-1">Adminstrator Rights</p>
                        <Select
                            id={'isAdmin'}
                            name={'isAdmin'}
                            style={{
                                fontFamily: 'Roboto Mono'
                            }}
                            className="w-64 h-10 rounded p-2"
                            onChange={({ target }) => {
                                const { value } = target;

                                setIsAdmin(Boolean(parseInt(value)));
                            }}
                        >
                            <option value={0}>False</option>
                            <option value={1}>True</option>
                        </Select>
                    </div>
                </div>
            </div>
            <Button
                style={{
                    fontFamily: 'Roboto Mono'
                }}
                className="w-64 h-60 p-2  m-4"
                colorScheme={'teal'}
                onClick={() => {
                    if (!firstname || !username || !department || !password)
                        return;

                    saveUser({
                        firstname,
                        username,
                        department,
                        password,
                        isAdmin
                    });

                    setFirstname(undefined);
                    setUsername(undefined);
                    setPassword(undefined);
                    setDepartment(undefined);
                    setIsAdmin(undefined);
                }}
            >
                Save user
            </Button>
        </div>
    );
};

const UserList = ({
    users,
    currentUser,
    deleteUser,
    setCurrentUser
}: {
    users: any;
    currentUser: any;
    deleteUser: any;
    setCurrentUser: any;
}) => {
    const { firstname, username, department, isAdmin } = currentUser || {};
    return (
        <div className="flex flex-1 justify-center m-10">
            <div className="border p-4">
                <h3>User Details</h3>
                <div className="flex mb-4 cursor-pointer mt-4">
                    <div className="flex flex-col">
                        <div className="flex flex-col flex-1  mr-4 mt-2">
                            <p className="mb-1 text-sm text-slate-500">
                                Firstname
                            </p>
                            <p className="mb-1">{firstname}</p>
                        </div>
                        <div className="flex flex-col flex-1  mr-4 mt-2">
                            <p className="mb-1 text-sm text-slate-500">
                                Username
                            </p>
                            <p className="mb-1">{username}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col flex-1 mr-4 mt-2">
                            <p className="mb-1 text-sm text-slate-500">
                                Department
                            </p>
                            <p className="mb-1">{department}</p>
                        </div>
                        <div className="flex flex-col flex-1  mr-4 mt-2">
                            <p className="mb-1 text-sm text-slate-500">
                                Adminstrator Rights
                            </p>
                            <p className="mb-1">{isAdmin ? 'True' : 'False'}</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <Button
                        style={{
                            fontFamily: 'Roboto Mono'
                        }}
                        className="h-60 mr-2 my-2"
                        size="sm"
                        onClick={() => {
                            const { _id } = currentUser || {};

                            deleteUser({ _id });
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
            <div>
                <div className="overflow-y-auto h-full border p-4">
                    {users?.map(
                        (item: {
                            firstname: string;
                            _id: string;
                            username: string;
                            department: string;
                            isAdmin: boolean;
                        }) => {
                            const {
                                _id,
                                username,
                                firstname,
                                department,
                                isAdmin
                            } = item;

                            return (
                                <div
                                    key={_id}
                                    className="flex bg-slate-100 mb-4 p-2 cursor-pointer"
                                    onClick={() => {
                                        setCurrentUser(item);
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <div className="m-1 flex flex-col flex-1  mx-4">
                                            <p className="mb-1 text-sm text-slate-500">
                                                Firstname
                                            </p>
                                            <p className="mb-1">{firstname}</p>
                                        </div>
                                        <div className="m-1 flex flex-col flex-1  mx-4">
                                            <p className="mb-1 text-sm text-slate-500">
                                                Username
                                            </p>
                                            <p className="mb-1">{username}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="m-1 flex flex-col flex-1 mx-4">
                                            <p className="mb-1 text-sm text-slate-500">
                                                Department
                                            </p>
                                            <p className="mb-1">{department}</p>
                                        </div>
                                        <div className="m-1 flex flex-col flex-1  mx-4">
                                            <p className="mb-1 text-sm text-slate-500">
                                                Adminstrator Rights
                                            </p>
                                            <p className="mb-1">
                                                {isAdmin ? 'True' : 'False'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
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

export default Users;
