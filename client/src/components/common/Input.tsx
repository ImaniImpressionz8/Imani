import type * as CSS from 'csstype';

const Input = ({
    type,
    size,
    textAlign,
    width,
    height,
    padding,
    borderStyle,
    borderWidth,
    borderColor,
    borderRadius,
    backgroundColor,
    value,
    onClick,
    cursor,
    margin,
    color
}: {
    type?: string;
    size?: string;
    backgroundColor: CSS.Property.BackgroundColor;
    width?: number | string;
    height?: number;
    padding?: number;
    borderStyle?: CSS.Property.BorderStyle;
    borderWidth?: number;
    borderColor?: CSS.Property.BorderColor;
    borderRadius?: number;
    textAlign?: CSS.Property.TextAlign;
    value?: string;
    onClick?: () => void;
    cursor?: string;
    margin?: number | string;
    color?: string;
}) => {
    return (
        <input
            onClick={() => onClick && onClick()}
            type={type}
            value={value}
            style={{
                textAlign,
                fontSize: size,
                backgroundColor,
                width,
                height,
                padding,
                borderStyle,
                borderWidth,
                borderColor,
                borderRadius,
                cursor,
                margin,
                color
            }}
        />
    );
};

export default Input;
