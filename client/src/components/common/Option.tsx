import type * as CSS from 'csstype';

const Option = ({
    size,
    textAlign,
    children
}: {
    size?: string;
    textAlign?: CSS.Property.TextAlign;
    children: string;
}) => {
    return <option style={{ fontSize: size, textAlign }}>{children}</option>;
};

export default Option;
