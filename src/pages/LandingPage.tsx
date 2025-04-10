import CardDisciplina from "../components/common/CardDisciplina";
import ImageSlider from "../components/layout/ImageSlider";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

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
    title: "Linguagens",
    descricao:
      "Melhore sua interpretação de texto e domine gramática e literatura com foco no ENEM.",
    link: "/linguagens",
    style: "bg-purple-200",
    icon: "linguagens",
  },
  {
    title: "Matemática",
    descricao:
      "Aprenda matemática com foco em resolução prática, revisão rápida e exercícios comentados.",
    link: "/matematica",
    style: "bg-red-200",
    icon: "exatas",
  },
  {
    title: "Ciências da Natureza",
    descricao:
      "Explore biologia, física e química com abordagens interdisciplinares e atualizadas.",
    link: "/ciencias-natureza",
    style: "bg-orange-200",
    icon: "natureza",
  },
  {
    title: "Ciências Humanas",
    descricao:
      "Entenda história, geografia, filosofia e sociologia com foco em atualidades e ENEM.",
    link: "/ciencias-humanas",
    style: "bg-blue-200",
    icon: "humanas",
  },
  {
    title: "Língua Estrangeira",
    descricao:
      "Aprenda inglês ou espanhol de forma contextualizada para interpretação de texto no ENEM.",
    link: "/lingua-estrangeira",
    style: "bg-pink-200",
    icon: "idiomas",
  }
];

const LandingPage = () => {
  const images = [slide1, slide2, slide1, slide3]; // Imagens para o slider

  return (
    <section className="flex flex-col my-b min-h-screen max-w-screen items-center">
      {/* Slider de imagens da landing */}
      <ImageSlider style="w-full" images={images} />

      {/* Título principal */}
      <p className="text-3xl text-[#00155d] font-bold text-center mt-8">
        Olá, estudante!
      </p>

      {/* Texto de chamada + botão principal */}
      <div className="flex flex-col items-center w-3/5 md:w-2/5">
        <p className="text-center text-sm mt-2">
          Comece sua jornada com nossas <br /> trilhas de conhecimento:
        </p>
      </div>

      {/* Cards de disciplina por área */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
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
