import { Button, Input, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// hooks
import { useUser } from '../../context/UserContext';

const Users = () => {
    const { getUsers, users } = useUser();

    const [showUsers, setShowUsers] = useState(false);

    const [currentUser, setCurrentUser] = useState<{
        firstname: string;
        _id: string;
        username: string;
        department: string;
        isAdmin: boolean;
    }>();

    useEffect(() => {
        getUsers();
    }, []);

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
                                onClick={() => {}}
                            >
                                Delete
                            </Button>
                            <Button
                                style={{
                                    fontFamily: 'Roboto Mono'
                                }}
                                className="h-60 mr-2 my-2"
                                size="sm"
                                onClick={() => {}}
                            >
                                Edit
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
                                    id={'username'}
                                    name={'username'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={(event) => {}}
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
                                    onChange={(event) => {}}
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-1">
                                <p className="mb-1">Department</p>
                                <Input
                                    id={'clientName'}
                                    name={'clientName'}
                                    style={{
                                        fontFamily: 'Roboto Mono'
                                    }}
                                    className="w-64 h-10 rounded p-2"
                                    onChange={(event) => {}}
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
                                    onChange={(event) => {}}
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
                                    onChange={(event) => {}}
                                >
                                    <option value={0}>False</option>
                                    <option value={1}>True</option>
                                </Select>
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

export default Users;
