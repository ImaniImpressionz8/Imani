import type * as CSS from 'csstype';

const Box = ({
    children,
    padding = 16,
    justifyContent,
    alignItems,
    height,
    backgroundColor = '#f0f0f0',
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
    flexDirection,
    ...rest
}: {
    children: React.ReactNode;
    padding?: number;
    justifyContent?: string;
    alignItems?: string;
    backgroundColor?: string;
    height?: string;
    borderWidth?: number;
    borderColor?: string;
    borderStyle?: string;
    borderRadius?: string;
    flexDirection?: CSS.Property.FlexDirection;
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection,
                padding,
                justifyContent,
                alignItems,
                backgroundColor,
                height,
                borderWidth,
                borderColor,
                borderStyle,
                borderRadius,
                ...rest
            }}
        >
            {children}
        </div>
    );
};

export default Box;
