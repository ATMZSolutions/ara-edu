import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Assunto {
  titulo: string;
  descricao: string;
  exemplos: string[];
  imagem?: string; // Propriedade opcional para a imagem
  videoLink?: string; // Propriedade opcional para o link de vídeo
}

const CardDropdown = ({ assunto }: { assunto: Assunto }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Função para extrair o ID do vídeo do YouTube
  const getYouTubeID = (url: string) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoID = assunto.videoLink ? getYouTubeID(assunto.videoLink) : null;

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
          <p className="mb-2 text-justify">
            <strong>Descrição:</strong> {assunto.descricao}
          </p>
          {/* Imagem opcional */}
          {assunto.imagem && (
            <img
              src={assunto.imagem}
              alt={assunto.titulo}
              className="w-full h-48 object-cover mb-2"
            />
          )}
          {/* Video link opcional */}
          {videoID && (
            <div className="mb-2 w-full">
              <strong>Vídeo aula Recomendada:</strong>
              <div className="mt-2 flex justify-center bg-black">
                <iframe
                  width=""
                  height=""
                  src={`https://www.youtube.com/embed/${videoID}`}
                  title={assunto.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <p className="mb-1 font-semibold">Estudar:</p>
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
