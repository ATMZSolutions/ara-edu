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
        aluno: "AraEDU | ENEM",
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
            { label: "Guia De Redação", link: "/tutorial-redacao" },
            { label: "Baixar Provas", link: "/baixar-provas" },
        ],
    };

    return (
        <>
            <div className="bg-black fixed top-0 left-0 w-full flex gap-2 items-center justify-between text-white p-4 z-10">
                <div className="flex items-center gap-2">
                    <img src={Logo} className="w-8" alt="Logo" />
                    <h1 className="text-2xl font-semibold">{headers[userType]}</h1>
                </div>
                {/* Ícone do menu hamburguer ou de fechar */}
                <button
                    className="text-white focus:outline-none lg:hidden"
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? (
                        <FaTimes size={24} /> // Ícone de fechar quando o menu estiver aberto
                    ) : (
                        <FaBars size={24} /> // Ícone de hambúrguer quando o menu estiver fechado
                    )}
                </button>
            </div>

            {/* Menu de navegação que aparece abaixo do cabeçalho */}
            <div
                className={`${
                    isMenuOpen ? "absolute" : "hidden"
                } top-[60px] left-0 w-full bg-[#333] text-white p-4 z-20`} // Cor de fundo cinza escuro
            >
                {menuOptions[userType].map((option) => (
                    <a
                        key={option.label}
                        href={option.link}
                        className="block py-2 px-4 text-white hover:text-gray-400"
                    >
                        {option.label}
                    </a>
                ))}
            </div>
        </>
    );
};

AppHeader.propTypes = {
    userType: PropTypes.oneOf(["admin", "aluno"]).isRequired,
};

export default AppHeader;
