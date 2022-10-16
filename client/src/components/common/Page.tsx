import type * as CSS from 'csstype';
import Box from './Box';

const Page = ({
    children,
    justifyContent,
    alignItems,
    flexDirection
}: {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: CSS.Property.FlexDirection;
}) => {
    return (
        <Box
            height={'100vh'}
            justifyContent={justifyContent}
            alignItems={alignItems}
            flexDirection={flexDirection}
        >
            {children}
        </Box>
    );
};

export default Page;
