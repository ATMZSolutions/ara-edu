import Logo from "./../../assets/atmz-s-logo.svg";

const AppFooter = () => {
    return (
        <div className="w-full h-auto flex gap-2 bg-black justify-center text-white p-4">
            <img src={Logo} className="w-32" alt="Logo" />
        </div>
    );
};

export default AppFooter;
