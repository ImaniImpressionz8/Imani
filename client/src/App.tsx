import React, { useEffect, useState } from 'react';
import { Home } from './pages';
import './App.css';

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

    // return <p style={{ fontSize: 12 }}>Hello World, {data?.user_agent}</p>;

    return <Home />;
}

export default App;
