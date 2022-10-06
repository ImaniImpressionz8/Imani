import { useEffect, useState } from 'react';
import { Desk, Home } from './pages';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './context/';

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
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/desk" element={<Desk />} />
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
