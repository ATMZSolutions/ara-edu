import AraEducationLogo from "../assets/ara-education-b.svg";
import ButtonNormal from "../components/common/ButtonNormal";
import CardDisciplina from "../components/common/CardDisciplina"; // Importando o CardDisciplina

const areaInfo = [
  {
    title: "Redação",
    descricao:
      "Domine competências, estrutura, argumentação e conclusão com exemplos práticos.",
    link: "/tutorial-redacao",
    style: "bg-yellow-200",
  },
  {
    title: "Ciências Humanas",
    descricao:
      "Aprenda história, geografia, filosofia e sociologia de forma integrada e atualizada para o ENEM.",
    link: "/ciencias-humanas",
    style: "bg-blue-200",
  },
  {
    title: "Exatas",
    descricao:
      "Matemática, física, química e biologia descomplicadas, com foco em resolução prática e revisão rápida.",
    link: "/exatas",
    style: "bg-red-200",
  },
  {
    title: "Linguagens",
    descricao:
      "Melhore sua interpretação de texto, aprenda gramática na prática e domine o conteúdo de inglês ou espanhol.",
    link: "/linguagens",
    style: "bg-green-200",
  },
];

const LandingPage = () => {
  return (
    <section className="w-full  min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-gray-100 via-white to-white p-8 mt-0 md:mt-8">
      <div className="flex flex-col w-4/5 md:w-2/5 items-center md:items-start text-center md:text-left gap-4 max-w-xl px-0 md:px-12">
        <img
          src={AraEducationLogo}
          alt="Logo do Ara Education"
          className="w-2/4 md:w-1/2 lg:w-1/3 mt-20 md:mt-0"
        />
        <p className="text-gray-700 text-base md:text-md">
          Plataforma gratuita conteúdos completos e organizados sobre todas as áreas do ENEM.
        </p>
        <ButtonNormal
          label="Começar Agora"
          to="/guia-redacao"
          className="w-full sm:w-auto py-1 font-semibold px-6 rounded-sm hover:cursor-pointer"
        />
      </div>
      <div className="grid gap-4 max-w-full md:max-w-3/5 w-full mt-6 md:mt-0 grid-cols-1 sm:grid-cols-2 px-4 mb-8">
        {/* Usando o componente CardDisciplina para gerar os cards */}
        {areaInfo.map((area, index) => (
          <CardDisciplina
            key={index}
            disciplina={{
              title: area.title,
              descricao: area.descricao,
              link: area.link,
              style: area.style,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default LandingPage;
