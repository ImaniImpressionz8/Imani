import { Box, StyledText, Page } from '../components/common';

const Desk = () => {
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
            ></Box>
        </Page>
    );
};

export default Desk;
