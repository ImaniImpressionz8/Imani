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
    margin,
    onChange
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
    onChange?: (value: string) => void;
}) => {
    return (
        <select
            onChange={(event) => {
                const { value } = event.target;

                onChange && onChange(value);
            }}
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
