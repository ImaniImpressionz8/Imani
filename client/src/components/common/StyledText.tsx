import type * as CSS from 'csstype';

const StyledText = ({
    size,
    textAlign,
    children,
    margin
}: {
    size?: string;
    textAlign?: CSS.Property.TextAlign;
    children: string;
    margin?: number | string;
}) => {
    return <p style={{ fontSize: size, textAlign, margin }}>{children}</p>;
};

export default StyledText;
