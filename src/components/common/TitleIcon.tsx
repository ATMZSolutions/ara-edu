// src/components/common/TitleIcon.tsx
import React, { JSX } from "react";
import { RiReactjsLine } from "react-icons/ri";

// Ícones padrão
import {
  FaArrowAltCircleRight,
  FaPencilAlt,
  FaGlobeAmericas,
  FaBookOpen,
  FaBacterium,
  FaBookReader
} from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";
import { FaBookAtlas } from "react-icons/fa6";
import { TbMath } from "react-icons/tb";

// Ícones adicionais exclusivos
import { GiChemicalDrop, GiThreeFriends, GiThink } from "react-icons/gi";

interface TitleIconProps {
  title: string;
  subtitle: string;
  style?: string;
}

const getIconByTitle = (title: string): JSX.Element => {
  const lower = title.toLowerCase();

  if (lower.includes("matemática")) return <TbMath />;             // Matemática
  if (lower.includes("redação")) return <FaPencilAlt />;           // Redação
  if (lower.includes("literatura")) return <FaBookOpen />;         // Literatura
  if (lower.includes("linguagens")) return <FaBookReader />;       // Linguagens
  if (lower.includes("geografia")) return <FaGlobeAmericas />;     // Geografia
  if (lower.includes("história")) return <FaBookAtlas />;          // História
  if (lower.includes("biologia")) return <FaBacterium />;          // Biologia
  if (lower.includes("física")) return <RiReactjsLine />;                 // Física
  if (lower.includes("química")) return <GiChemicalDrop />;        // Química
  if (lower.includes("sociologia")) return <GiThreeFriends />;     // Sociologia
  if (lower.includes("filosofia")) return <GiThink />;             // Filosofia
  if (lower.includes("espanhol")) return <MdOutlineTranslate />;   // Espanhol
  if (lower.includes("inglês")) return <MdOutlineTranslate />;     // Inglês

  return <FaArrowAltCircleRight />; // Default
};

const TitleIcon: React.FC<TitleIconProps> = ({ title, subtitle, style }) => {
  const icon = getIconByTitle(title);

  return (
    <div className="flex flex-row items-center gap-4">
      <div className={`text-4xl text-[#00145d] mb-4 ${style}`}>{icon}</div>
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-bold text-gray-800 mt-4">{title}</h1>
        <p className="text-gray-700 mb-8">{subtitle}</p>
      </div>
    </div>
  );
};

export default TitleIcon;
