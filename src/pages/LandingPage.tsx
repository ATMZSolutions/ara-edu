import ButtonNormal from "../components/common/ButtonNormal";
import CardDisciplina from "../components/common/CardDisciplina";
import ImageSlider from "../components/layout/ImageSlider";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";

// Informações de cada área do conhecimento
const areaInfo = [
  {
    title: "Redação",
    descricao:
      "Domine competências, estrutura, argumentação e conclusão com exemplos práticos.",
    link: "/tutorial-redacao",
    style: "bg-yellow-200",
    icon: "redacao",
  },
  {
    title: "Ciências Humanas",
    descricao:
      "Aprenda história, geografia, filosofia e sociologia de forma integrada e atualizada para o ENEM.",
    link: "/ciencias-humanas",
    style: "bg-blue-200",
    icon: "humanas",
  },
  {
    title: "Exatas",
    descricao:
      "Matemática, física, química e biologia descomplicadas, com foco em resolução prática e revisão rápida.",
    link: "/exatas",
    style: "bg-red-200",
    icon: "exatas",
  },
  {
    title: "Linguagens",
    descricao:
      "Melhore sua interpretação de texto, aprenda gramática na prática e domine o conteúdo de inglês ou espanhol.",
    link: "/linguagens",
    style: "bg-purple-200",
    icon: "linguagens",
  },
];

const LandingPage = () => {
  const images = [slide1, slide2]; // Imagens para o slider

  return (
    <section className="flex flex-col my-16 min-h-screen w-full items-center">
      {/* Slider de imagens da landing */}
      <ImageSlider images={images} />

      {/* barra divisoria */}
      <div className="h-1 bg-[#00145d3d] mt-4 w-4/5 md:w-4/5"></div>

      {/* Título principal */}
      <p className="text-3xl text-[#00155d] font-bold text-center mt-4">
        Bem-vindo!
      </p>
      <p className="text-lg text-gray-600 text-center mt-2">
        Sua plataforma de aprendizado <br /> para o ENEM!
      </p>

      {/* barra divisoria */}
      <div className="h-1 bg-[#00145d3d] mt-4 w-4/5 md:4/5"></div>

      {/* Texto de chamada + botão principal */}
      <div className="flex flex-col items-center w-3/5 md:w-2/5 mt-4">
        <p className="text-center text-md font-medium mt-2">
          Comece sua jornada com nossas trilhas de conhecimento:
        </p>
      </div>

      {/* Cards de disciplina por área */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
        {areaInfo.map((area, index) => (
          <CardDisciplina
            key={index}
            disciplina={{
              title: area.title,
              descricao: area.descricao,
              link: area.link,
              style: area.style,
              icon: area.icon, // ícone correspondente à área
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default LandingPage;
