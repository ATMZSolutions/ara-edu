import PropTypes from "prop-types";
import Logo from "./../../assets/atmz-solutions-logo.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones de hambúrguer e fechar

interface AppHeaderProps {
    userType: "admin" | "aluno";
}

const AppHeader = ({ userType }: AppHeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu hamburguer
    const headers = {
        admin: "AraEDU-Admin | ENEM",
        aluno: "Ara Edu | ENEM",
    };

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev); // Alterna o estado do menu
    };

    const menuOptions = {
        admin: [
            { label: "Home", link: "/" },
            { label: "Simulados", link: "/simulados" },
            { label: "Adicionar Questões", link: "/adicionar-questoes" },
            { label: "Gerenciar Alunos", link: "/gerenciar-alunos" },
        ],
        aluno: [
            { label: "Home", link: "/" },
            { label: "Simulados", link: "/simulados" },
            { label: "Guia De Redação", link: "/guia-redacao" },
            { label: "Baixar Provas", link: "/baixar-provas" },
        ],
    };

    return (
        <header className="bg-[#00145D] w-full flex flex-col gap-2 items-center justify-between text-white p-2 z-10 lg:flex-row lg:gap-4">
            <div className="flex items-center gap-2 w-full justify-between lg:justify-start">
                <div className="flex items-center gap-2">
                    <img src={Logo} className="w-8" alt="Logo" />
                    <h1 className="text-2xl font-semibold">{headers[userType]}</h1>
                </div>
                {/* Ícone do menu hamburguer visível apenas em telas pequenas */}
                <button
                    className="text-[#ffd400] focus:outline-none lg:hidden"
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Navegação visível apenas em telas grandes */}
            <nav className="hidden lg:flex gap-6 w-1/2">
                {menuOptions[userType].map((option) => (
                    <a
                        key={option.label}
                        href={option.link}
                        className="text-[#ffd400] hover:text-gray-400 text-base "
                    >
                        {option.label}
                    </a>
                ))}
            </nav>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="absolute top-[45px] left-0 w-full bg-[#ffd400] text-white p-4 z-20 lg:hidden">
                    {menuOptions[userType].map((option) => (
                        <a
                            key={option.label}
                            href={option.link}
                            className="block px-4 text-[#00145d] hover:text-gray-400"
                        >
                            - {option.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

AppHeader.propTypes = {
    userType: PropTypes.oneOf(["admin", "aluno"]).isRequired,
};

export default AppHeader;