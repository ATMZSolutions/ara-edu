import Logo from "./../../assets/atmz-s-logo.svg";
import Logo2 from "./../../assets/ara-logo.png";
import logo3 from "./../../assets/logo-araedu-w.png";

const AppFooter = () => {
  return (
    <footer className="bg-[#00145D] text-white mb-14">
      <div className="w-full h-auto flex flex-col gap-4 justify-center items-center p-6">
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
        <img src={logo3} className="w-36" alt="Logo AraEdu" />
          <img src={Logo} className="w-30" alt="Logo" />
          <img src={Logo2} className="w-40 bg-white px-4 py-1 rounded" alt="Logo Araçoiaba" />
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
