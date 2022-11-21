import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Nav, Products, Users } from '../components/dashboard';

// hooks
import { useAuth } from '../context/AuthContext';
import Orders from '../components/dashboard/Orders';

const Dashboard = () => {
    const navigate = useNavigate();

    const { user } = useAuth();

    const [tab, setTab] = useState('products');

    useEffect(() => {
        if (!user) navigate('/');
    }, [user, navigate]);

    return (
        <div className="h-screen bg-white flex">
            <Nav setView={setTab} />
            {tab === 'products' && <Products />}
            {tab === 'users' && <Users />}
            {tab === 'orders' && <Orders />}
        </div>
    );
};

export default Dashboard;
