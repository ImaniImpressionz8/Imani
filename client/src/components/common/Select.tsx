import type * as CSS from 'csstype';

const Select = ({
    width,
    height,
    padding,
    borderStyle,
    borderWidth,
    borderColor,
    borderRadius,
    children,
    margin
}: {
    width?: number;
    height?: number;
    padding?: number;
    borderStyle?: CSS.Property.BorderStyle;
    borderWidth?: number;
    borderColor?: CSS.Property.BorderColor;
    borderRadius?: number;
    textAlign?: CSS.Property.TextAlign;
    children: React.ReactNode[];
    margin?: number | string;
}) => {
    return (
        <select
            style={{
                width,
                height,
                padding,
                borderStyle,
                borderWidth,
                borderColor,
                borderRadius,
                margin
            }}
        >
            {children}
        </select>
    );
};

export default Select;
