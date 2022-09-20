import Box from './Box';

const Page = ({
    children,
    justifyContent,
    alignItems
}: {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
}) => {
    return (
        <Box
            height={'100vh'}
            justifyContent={justifyContent}
            alignItems={alignItems}
        >
            {children}
        </Box>
    );
};

export default Page;
