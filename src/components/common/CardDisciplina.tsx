import { useNavigate } from "react-router-dom";
import { FaBookAtlas } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";

// Ícones padrão
import {
  FaArrowAltCircleRight,
  FaPencilAlt,
  FaGlobeAmericas,
  FaBookReader,
  FaBacterium,
  FaBookOpen
  
} from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";
import { TbMath } from "react-icons/tb";

// Novos ícones exclusivos por disciplina
import {
  GiChemicalDrop,
  GiThreeFriends,
  GiThink
} from "react-icons/gi";

// Interface que define o tipo do objeto disciplina
interface Disciplina {
  title: string;
  descricao: string;
  link: string;
  style?: string;
  icon?: string; // ex: "redacao", "humanas", "exatas", "linguagens", "fisica" etc.
}

// Função que retorna o ícone correspondente baseado na string passada
const getIconComponent = (icon?: string) => {
  switch (icon) {
    case "redacao":
      return <FaPencilAlt size={40} className="text-[#00145d]" />;
    case "geografia":
      return <FaGlobeAmericas size={40} className="text-[#00145d]" />;
    case "exatas":
      return <TbMath size={40} className="text-[#00145d]" />;
    case "linguagens":
      return <FaBookReader size={40} className="text-[#00145d]" />;
    case "biologia":
      return <FaBacterium size={40} className="text-[#00145d]" />;
    case "idiomas":
      return <MdOutlineTranslate size={40} className="text-[#00145d]" />;
    case "fisica":
      return <RiReactjsLine size={40} className="text-[#00145d]" />;
    case "quimica":
      return <GiChemicalDrop size={40} className="text-[#00145d]" />;
    case "sociologia":
      return <GiThreeFriends size={40} className="text-[#00145d]" />;
    case "filosofia":
      return <GiThink size={40} className="text-[#00145d]" />;
    case "historia":
      return <FaBookAtlas size={40} className="text-[#00145d]" />;
    case "literatura":
      return <FaBookOpen size={40} className="text-[#00145d]" />;
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
      className={`w-11/12 h-[150px] md:w-[300px] shadow-md rounded-2xl pl-4 mx-auto cursor-pointer flex flex-row items-center justify-between ${disciplina.style || ""}`}
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
        className="h-full rounded-r-2xl bg-[#00145d] text-white flex justify-center items-center p-2 ml-2"
        onClick={() => navigate(disciplina.link)}
      >
        <FaArrowAltCircleRight size={20} className="text-white" />
      </div>
    </div>
  );
};

export default CardDisciplina;