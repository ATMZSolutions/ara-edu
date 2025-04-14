import { FaPenAlt } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { RiHome2Fill } from "react-icons/ri";

const BottomNav = () => {
  const menuOptions = [
    { label: "Home", link: "/home", icon: <RiHome2Fill size={22} /> },
    { label: "Redação", link: "/redacao", icon: <FaPenAlt size={22} /> },
    { label: "Provas", link: "/baixar-provas", icon: <IoIosPaper size={22} /> },
    // { label: "Perfil", link: "/perfil", icon: <FaUser size={22} /> },
  ];

  return (
    <>
      {/* Barra de navegação fixa no inferior (mobile) e lateral (desktop) */}
      <nav
        className="
          fixed z-10 bg-[#00145d] text-white 
          bottom-0 left-0 right-0 w-full border-t border-gray-700 p-1
          md:top-0 md:bottom-0 md:left-0 md:bg-[#ffd400] md:w-20 md:border-t-0 md:border-r md:border-gray-700
        "
      >
        <div
          className="
            mx-auto w-full flex justify-around items-center
            md:flex-col md:justify-center md:items-center md:gap-6 md:h-full
          "
        >
          {menuOptions.map((option) => (
            <a
              key={option.label}
              href={option.link}
              className="flex flex-col items-center p-1 text-[#ffda00] md:text-[#00145d] hover:text-gray-300"
            >
              {option.icon}
              <span className="text-xs mt-1">{option.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Espaço reservado para evitar que o conteúdo fique escondido atrás da barra */}
      <div className="pb-16 md:pl-20"></div>
    </>
  );
};

export default BottomNav;
