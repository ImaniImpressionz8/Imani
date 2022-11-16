import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Input, Select } from '@chakra-ui/react';

// components

// hooks
import { useAuth } from '../context/AuthContext';
import { useUser } from '../context/UserContext';
import { useProduct } from '../context/ProductContext';
import { useOrder } from '../context/OrderContext';

const Home = () => {
    const { login } = useAuth();
    const { getUsers, users } = useUser();
    const { getProudcts, addProductPrice, createProduct, getProduct } =
        useProduct();
    const { getOrders, createOrder, updateOrder, getOrder, removeOrder } =
        useOrder();

    const [password, setPassowrd] = useState<string>();
    const [username, setUsername] = useState<string>();

    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <section className="h-screen w-screen flex justify-center items-center">
            <div className="w-64 border rounded p-4 justify-center items-start">
                <div className="">
                    <h1 className="py-4">Username</h1>
                    <Select
                        placeholder="Select User"
                        className="w-full rounded flex justify-center items-center"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                        style={{
                            fontFamily: 'Roboto Mono'
                        }}
                    >
                        {users?.map(
                            (item: {
                                firstname: string;
                                _id: string;
                                username: string;
                            }) => {
                                const { _id, username: user } = item;

                                return (
                                    <option
                                        style={{
                                            fontFamily: 'Roboto Mono'
                                        }}
                                        key={_id}
                                    >
                                        {user}
                                    </option>
                                );
                            }
                        )}
                    </Select>
                </div>
                <div>
                    <h1 className="py-4">Password</h1>
                    <Input
                        placeholder="********"
                        className="w-full h-10 rounded p-2"
                        type={'password'}
                        onChange={(event) => {
                            setPassowrd(event.target.value);
                        }}
                    />
                </div>
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-full h-60 mt-4"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        login({ username, password, navigate });
                    }}
                >
                    Login
                </Button>
            </div>
        </section>
    );
};

export default Home;
