import { Box, StyledText, Page } from '../components/common';

const Home = () => {
    const people = ['Max', 'Amina', 'Rachael'];
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
                <StyledText>Username</StyledText>
                <select
                    style={{
                        width: 300,
                        height: 40,
                        padding: 5,
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: '#444444',
                        borderRadius: 5
                    }}
                >
                    {people.map((item, index) => {
                        return (
                            <option key={index}>
                                <StyledText>{item}</StyledText>
                            </option>
                        );
                    })}
                </select>
                <StyledText>Password</StyledText>
                <input
                    type={'password'}
                    style={{
                        width: 290,
                        height: 25,
                        padding: 5,
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: '#444444',
                        borderRadius: 5,
                        backgroundColor: '#f0f0f0'
                    }}
                />
                <input
                    type={'button'}
                    value={'Login'}
                    style={{
                        width: 300,
                        height: 40,
                        padding: 5,
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: '#444444',
                        borderRadius: 5,
                        marginTop: 30,
                        backgroundColor: '#444444',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                />
            </Box>
        </Page>
    );
};

export default Home;
