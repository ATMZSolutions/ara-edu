import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Assunto {
  titulo: string;
  descricao: string;
  exemplos: string[];
  imagem?: string; // Propriedade opcional para a imagem
}

const CardDropdown = ({ assunto }: { assunto: Assunto }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="mb-4 rounded-md overflow-hidden w-4/5">
      {/* Toggle button */}
      <button
        className="w-full flex justify-between items-center p-2 bg-gray-200 hover:bg-gray-300 transition-all"
        onClick={toggleDropdown}
      >
        <span className="font-medium">{assunto.titulo}</span>
        {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="p-4 bg-gray-50 text-gray-700">
          <p className="mb-2">
            <strong>Descrição:</strong> {assunto.descricao}
          </p>
          {/* Imagem opcional */}
          {assunto.imagem && (
            <img
              src={assunto.imagem}
              alt={assunto.titulo}
              className="w-full h-48 object-cover"
            />
          )}
          <p className="mb-1 font-semibold">Exemplos:</p>
          <ul className="list-disc list-inside">
            {assunto.exemplos.map((exemplo, index) => (
              <li key={index}>{exemplo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardDropdown;
