import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones do menu
import Logo from "./../../assets/logo-araedu-w.png"; // Logo da aplicação

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado de visibilidade do menu
  const headerTitle = "";

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Alterna entre abrir e fechar o menu
  };

  const menuOptions = [
    { label: "Cadastre-se", link: "/cadastro" },
    { label: "Login", link: "/login" },
  ];

  return (
    <header className="bg-[#00145D] w-full flex z-20 fixed top-0 left-0 flex-col items-center justify-around text-white lg:flex-row lg:justify-between lg:items-center">
      {/* Logo + Título + Botão do menu (mobile) */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            className="ml-2 w-36 bg-gradient-to-r"
            alt="Logo"
          />
          <h1 className="text-2xl font-semibold">{headerTitle}</h1>
        </div>

        {/* Ícone do menu hamburguer (mobile) */}
        <button
          className="text-[#ffd400] focus:outline-none lg:hidden mr-2"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu de navegação (desktop) */}
      <nav className="hidden lg:flex gap-6 mr-4">
        {menuOptions.map((option) => (
          <a
            key={option.label}
            href={option.link}
            className="text-[#ffd400] hover:text-gray-400 text-base"
          >
            {option.label}
          </a>
        ))}
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute top-[47px] left-0 w-full bg-[#ffd400] text-white p-4 pb-16 z-20 lg:hidden">
          {menuOptions.map((option) => (
            <a
              key={option.label}
              href={option.link}
              className="block px-4 py-2 text-[#00145d] hover:text-gray-400"
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default AppHeader;
