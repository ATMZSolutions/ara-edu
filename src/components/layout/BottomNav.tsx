import { 
    FaMap,
    FaUser,
    FaFileAlt
  } from "react-icons/fa";
  import { TiHome } from "react-icons/ti";
  
  const BottomNav = () => {
    const menuOptions = [
      { label: "Home", link: "/", icon: <TiHome size={22} /> },
      { label: "Trilhas", link: "/trilhas", icon: <FaMap size={22} /> },
      { label: "Perfil", link: "/perfil", icon: <FaUser size={22} /> },
      { label: "Simulados", link: "/simulados", icon: <FaFileAlt size={22} /> },
    ];
  
    return (
      <>
        {/* Barra de navegação fixa no inferior */}
        <nav className="fixed bottom-0 left-0 right-0 bg-[#00145d] border-t border-gray-700 text-white p-1 z-30 w-full">
          <div className="mx-auto w-full md:max-w-md lg:max-w-xs flex justify-around items-center">
            {menuOptions.map((option) => (
              <a
                key={option.label}
                href={option.link}
                className="flex flex-col items-center p-1 text-[#ffda00] hover:text-gray-300"
              >
                {option.icon}
                <span className="text-xs mt-1">{option.label}</span>
              </a>
            ))}
          </div>
        </nav>
  
        {/* Espaço reservado para evitar que o conteúdo fique escondido atrás da barra */}
        <div className="pb-16"></div>
      </>
    );
  };
  
  export default BottomNav;
  