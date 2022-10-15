import { Box, Page, StyledText } from '../components/common';

const Desk = () => {
    return (
        <Page justifyContent={'center'} alignItems={'center'}>
            <Box
                justifyContent={'center'}
                borderWidth={1}
                flexDirection={'column'}
            >
                <StyledText>Desk</StyledText>
            </Box>
        </Page>
    );
};

export default Desk;
