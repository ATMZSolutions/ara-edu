import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight, FaPencilAlt, FaGlobeAmericas, FaBook } from "react-icons/fa";
import { TbMath } from "react-icons/tb";

// Interface que define o tipo do objeto disciplina
interface Disciplina {
    title: string;
    descricao: string;
    link: string;
    style?: string;
    icon?: string; // ex: "redacao", "humanas", "exatas", "linguagens"
}

// Função que retorna o ícone correspondente baseado na string passada
const getIconComponent = (icon?: string) => {
    switch (icon) {
        case "redacao":
            return <FaPencilAlt size={40} className="text-[#00145d]" />;
        case "humanas":
            return <FaGlobeAmericas size={40} className="text-[#00145d]" />;
        case "exatas":
            return <TbMath size={40} className="text-[#00145d]" />;
        case "linguagens":
            return <FaBook size={40} className="text-[#00145d]" />;
        default:
            return null;
    }
};

const CardDisciplina = ({ disciplina }: { disciplina: Disciplina }) => {
    const navigate = useNavigate();
    const IconComponent = getIconComponent(disciplina.icon);

    return (
        // Card com tamanho fixo e layout horizontal
        <div
            className={`w-[350px] h-[150px] m-2 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-row items-center justify-between ${disciplina.style || ""}`}
        >
            {/* Ícone à esquerda */}
            {IconComponent && (
                <div className="mr-4">
                    {IconComponent}
                </div>
            )}

            {/* Conteúdo do card */}
            <div className="flex-grow">
                <h2 className="text-xl font-semibold text-black">{disciplina.title}</h2>
                <p className="text-gray-700 text-sm mt-1">{disciplina.descricao}</p>
            </div>

            {/* Botão de navegação à direita */}
            <div
                className="h-full rounded-full bg-[#00145d] text-white flex justify-center items-center p-2 ml-2"
                onClick={() => navigate(disciplina.link)}
            >
                <FaArrowAltCircleRight size={20} className="text-[#ffd400]" />
            </div>
        </div>
    );
};

export default CardDisciplina;
