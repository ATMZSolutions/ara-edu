import CardDisciplina from "../components/common/CardDisciplina";
import ImageSlider from "../components/layout/ImageSlider";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

// Informações de cada área do conhecimento
// Informações de cada área do conhecimento
const areaInfo = [
  {
    title: "Redação",
    descricao: "Estrutura, argumentação e estratégias para um texto nota 1000.",
    link: "/redacao",
    style: "bg-yellow-200",
    icon: "redacao",
  },
  {
    title: "Matemática",
    descricao: "Resolução prática, revisão rápida e exercícios comentados.",
    link: "/matematica",
    style: "bg-red-200",
    icon: "exatas",
  },
  {
    title: "Linguagens",
    descricao: "Estudo da norma culta, análise sintática e variações linguísticas.",
    link: "/linguagens",
    style: "bg-purple-200",
    icon: "linguagens",
  },
  {
    title: "Literatura",
    descricao: "Estilos literários, movimentos e análise de obras exigidas no ENEM.",
    link: "/literatura",
    style: "bg-cyan-100",
    icon: "literatura",
  },
  {
    title: "Inglês",
    descricao: "Leitura e interpretação de textos em língua inglesa no ENEM.",
    link: "/ingles",
    style: "bg-pink-200",
    icon: "idiomas",
  },
  {
    title: "Espanhol",
    descricao: "Leitura e interpretação de textos em língua espanhola no ENEM.",
    link: "/espanhol",
    style: "bg-pink-100",
    icon: "idiomas",
  },
  {
    title: "Geografia",
    descricao: "Conteúdos geográficos com foco em atualidades e temas ambientais.",
    link: "/geografia",
    style: "bg-blue-200",
    icon: "geografia",
  },
  {
    title: "Física",
    descricao: "Aprenda conceitos físicos com aplicações práticas e interdisciplinares.",
    link: "/fisica",
    style: "bg-orange-200",
    icon: "fisica",
  },
  {
    title: "Biologia",
    descricao: "Conteúdos sobre corpo humano, ecologia, genética e evolução.",
    link: "/biologia",
    style: "bg-rose-100",
    icon: "biologia",
  },
  {
    title: "História",
    descricao: "Estudos históricos com foco em Brasil, mundo e cidadania.",
    link: "/historia",
    style: "bg-yellow-100",
    icon: "historia",
  },
  {
    title: "Sociologia",
    descricao: "Temas sociais, culturais e políticos em contexto contemporâneo.",
    link: "/sociologia",
    style: "bg-indigo-100",
    icon: "sociologia",
  },
  {
    title: "Química",
    descricao: "Química orgânica, inorgânica e ambiental aplicada ao cotidiano.",
    link: "/quimica",
    style: "bg-red-200",
    icon: "quimica",
  },
];


const LandingPage = () => {
  const images = [slide1, slide2, slide1, slide3]; // Imagens para o slider

  return (
    <section className="flex flex-col my-b min-h-screen max-w-screen items-center justify-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
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
