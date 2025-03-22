import Logo from "./../../assets/atmz-s-logo.svg";

const AppFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full h-auto flex flex-row md:flex-row gap-4 justify-center items-center p-6">
        <p className="text-gray-500">Desenvolvido por: <br/> WebDevMatias :D</p>
        <img src={Logo} className="w-32" alt="Logo" />
      </div>
      <div className="border-t border-gray-700">
        <p className="text-center text-gray-500 text-sm py-4">
          &copy; 2025 AraEDU. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
