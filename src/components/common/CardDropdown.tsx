import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import ReactPlayer from "react-player";

// Tipagem para os dados dos cards
interface Assunto {
  titulo: string;
  descricao: string;
  exemplos?: string[];
  imagem?: string;
  videoLink?: string;
}

const CardDropdown = ({ assunto }: { assunto: Assunto }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full md:w-4/5 lg:w-3/4 mb-5 rounded-xl shadow-sm">
      {/* Botão de abertura do card */}
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center p-2 bg-white hover:bg-gray-50 border border-gray-300 rounded-md transition-colors"
      >
        <span className="text-left mr-2 font-semibold text-gray-800">{assunto.titulo}</span>
        {isOpen ? <FiChevronUp size={22} /> : <FiChevronDown size={22} />}
      </button>

      {/* Conteúdo do card */}
      {isOpen && (
        <div className="bg-white p-5 border border-t-0 border-gray-300 rounded-b-md">
          {/* Descrição */}
          <p className="mb-3 text-gray-700 text-justify break-all">
            {assunto.descricao}
          </p>

          {/* Imagem (se houver) */}
          {assunto.imagem && (
            <img
              src={assunto.imagem}
              alt={`Imagem ilustrativa para ${assunto.titulo}`}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
          )}

          {/* Vídeo (se houver) */}
          {assunto.videoLink && (
            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">Vídeoaula Recomendada:</p>
              <div className="aspect-video max-w-full mx-auto">
                <ReactPlayer
                  url={assunto.videoLink}
                  width="100%"
                  height="100%"
                  backgroundColor="#000"
                  controls
                />
              </div>
            </div>
          )}

          {/* Lista de exemplos (se houver) */}
          {assunto.exemplos && (
            <>
              {/* <p className="font-semibold text-gray-800 mb-2">Estudar:</p> */}
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {assunto.exemplos.map((exemplo, index) => (
                  <li key={index} className="text-start">{exemplo}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CardDropdown;
