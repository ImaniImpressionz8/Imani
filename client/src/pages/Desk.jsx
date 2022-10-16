import { Box, Page, StyledText } from '../components/common';

const Desk = () => {
    return (
        <Page flexDirection="column">
            <Box flex={1}></Box>
            <Box flex={1}>
                <Box flex={1}>
                    <StyledText>Desk</StyledText>
                </Box>
                <Box flex={1} backgroundColor="red">
                    <StyledText>Desk</StyledText>
                </Box>
            </Box>
            <Box flex={1}></Box>
        </Page>
    );
};

export default Desk;
