import {
    Box,
    StyledText,
    Page,
    Option,
    Select,
    Input
} from '../components/common';

import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Home = () => {
    const people = ['Max', 'Amina', 'Rachael'];

    const { login } = useAuth();

    useEffect(() => {}, []);

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
                >
                    {people.map((item, index) => {
                        return <Option key={index}>{item}</Option>;
                    })}
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
                        login();
                    }}
                    cursor={'pointer'}
                />
            </Box>
        </Page>
    );
};

export default Home;
