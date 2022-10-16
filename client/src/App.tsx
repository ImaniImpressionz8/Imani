import { useEffect, useState } from 'react';
import { Desk, Home } from './pages';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
    AuthContextProvider,
    UserContextProvider,
    ProductContextProvider,
    OrderContextProvider
} from './context/';

function App() {
    const [data, setData] = useState<{ user_agent?: string }>({});

    useEffect(() => {
        callBackendAPI()
            .then((res) => {
                setData(res);
            })
            .catch((err) => console.log(err));
    }, []);

    const callBackendAPI = async () => {
        const response = await fetch('/api');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    };

    return (
        <AuthContextProvider>
            <UserContextProvider>
                <ProductContextProvider>
                    <OrderContextProvider>
                        <Router>
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path="/desk" element={<Desk />} />
                                {/* <Route path="/" element={<Desk />} /> */}
                            </Routes>
                        </Router>
                    </OrderContextProvider>
                </ProductContextProvider>
            </UserContextProvider>
        </AuthContextProvider>
    );
}

export default App;
