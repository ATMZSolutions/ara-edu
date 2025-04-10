import Logo from "./../../assets/atmz-s-logo.svg";
import Logo2 from "./../../assets/ara-logo.png";

const AppFooter = () => {
  return (
    <footer className="bg-[#00145D] text-white">
      <div className="w-full h-auto flex flex-col gap-4 justify-center items-center p-6">
        <div className="flex flex-row gap-4">
          <img src={Logo} className="w-30" alt="Logo" />
          <img src={Logo2} className="w-34 bg-white px-2 py-1 rounded" alt="Logo Ara" />
        </div>
      </div>
      <div className="border-t border-gray-700">
        <p className="text-center text-[#ffda00] text-sm py-4">
          &copy; 2025 AraEDU. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
