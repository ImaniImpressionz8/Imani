const Nav = ({ setView }: { setView: Function }) => {
    return (
        <div className="flex w-1/5 h-full bg-slate-50 items-start flex-col">
            <NavButton
                label="Products"
                onClick={() => {
                    setView('products');
                }}
            />
            <NavButton
                label="Users"
                onClick={() => {
                    setView('users');
                }}
            />
            <NavButton
                label="Orders"
                onClick={() => {
                    setView('orders');
                }}
            />
        </div>
    );
};

const NavButton = ({
    label,
    onClick
}: {
    label: string;
    onClick: Function;
}) => {
    return (
        <div
            onClick={() => {
                onClick && onClick();
            }}
            className="bg-slate-300 w-full h-14 border-b border-slate-50 flex items-center justify-center cursor-pointer"
        >
            <h3 className="text-lg">{label}</h3>
        </div>
    );
};

export default Nav;
