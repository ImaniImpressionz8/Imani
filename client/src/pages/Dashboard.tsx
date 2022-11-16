import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Products, Users } from '../components/dashboard';

const Dashboard = () => {
    const [tab, setTab] = useState('users');

    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className="flex p-1">
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        setTab('users');
                    }}
                >
                    Users
                </Button>
                <Button
                    style={{
                        fontFamily: 'Roboto Mono'
                    }}
                    className="w-64 h-60 m-2"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                        setTab('products');
                    }}
                >
                    Products
                </Button>
            </div>
            {tab === 'users' ? <Users /> : <Products />}
        </div>
    );
};

export default Dashboard;
