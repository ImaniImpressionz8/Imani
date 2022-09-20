import type * as CSS from 'csstype';

const StyledText = ({
    size,
    textAlign,
    children
}: {
    size?: string;
    textAlign?: CSS.Property.TextAlign;
    children: string;
}) => {
    return <p style={{ fontSize: size, textAlign }}>{children}</p>;
};

export default StyledText;
