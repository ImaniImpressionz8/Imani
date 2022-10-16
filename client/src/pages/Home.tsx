import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// components
import {
    Box,
    StyledText,
    Page,
    Option,
    Select,
    Input
} from '../components/common';

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
        <Page justifyContent={'center'} alignItems={'center'}>
            <img
                style={{ width: 300, position: 'fixed', top: 50, left: 0 }}
                alt="Imani Logo"
                src="../../imani_logo.png"
            />
            <Box
                justifyContent={'center'}
                borderWidth={1}
                flexDirection={'column'}
            >
                <StyledText margin={5}>Username</StyledText>
                <Select
                    width={300}
                    height={40}
                    padding={5}
                    borderStyle={'solid'}
                    borderWidth={2}
                    borderColor={'#444444'}
                    borderRadius={5}
                    margin={5}
                    onChange={(value) => {
                        setUsername(value);
                    }}
                >
                    {[
                        {
                            firstname: 'Select User',
                            _id: 'Select User',
                            username: 'Select User'
                        },
                        ...users
                    ]?.map(
                        (item: {
                            firstname: string;
                            _id: string;
                            username: string;
                        }) => {
                            const { _id, username: user } = item;

                            return <Option key={_id}>{user}</Option>;
                        }
                    )}
                </Select>
                <StyledText margin={5}>Password</StyledText>
                <Input
                    type={'password'}
                    width={290}
                    height={30}
                    padding={5}
                    borderStyle={'solid'}
                    borderWidth={2}
                    borderColor={'#444444'}
                    borderRadius={5}
                    backgroundColor={'#f0f0f0'}
                    margin={5}
                    onChange={(value: string) => {
                        setPassowrd(value);
                    }}
                />
                <Input
                    type={'button'}
                    value={'Login'}
                    width={303}
                    height={40}
                    padding={5}
                    borderStyle={'solid'}
                    borderWidth={2}
                    borderColor={'#444444'}
                    borderRadius={5}
                    backgroundColor={'#444444'}
                    color={'white'}
                    margin={5}
                    onClick={() => {
                        // login({ username, password, navigate });
                        // addProductPrice({
                        //     _id: '634b1890167bfe692ad899b5',
                        //     price: {
                        //         priceperunit: 1,
                        //         unit: 'pieces',
                        //         sides: 2,
                        //         lamnination: 'Vynil'
                        //     }
                        // });
                        // getOrders();
                        // createOrder({
                        //     order: {
                        //         clientName: 'Nakama',
                        //         totalcost: 60000,
                        //         department: 'digital',
                        //         product: {
                        //             name: 'Flyer',
                        //             price: {
                        //                 priceperunit: 0.6,
                        //                 unit: 'pieces',
                        //                 sides: 1,
                        //                 lamnination: 'Vynil'
                        //             }
                        //         },
                        //         qty: 1000,
                        //         email: 'mail@nakamaltd.com',
                        //         phoneNumber: '2335050030073',
                        //         state: 'placed'
                        //     }
                        // });
                        // getProduct({ _id: '634aebde167bfe692ad899b4' });
                        // createProduct({
                        //     product: {
                        //         name: 'Cup',
                        //         department: 'souvenir',
                        //         minorderqty: 6
                        //     }
                        // });
                        // updateOrder({
                        //     _id: '634bc77f5101a7135874a407',
                        //     order: { state: 'completed' }
                        // });
                        // getOrder({ _id: '634bc77f5101a7135874a407' });
                        // removeOrder({ _id: '634bc77f5101a7135874a407' });
                    }}
                    cursor={'pointer'}
                />
            </Box>
        </Page>
    );
};

export default Home;
