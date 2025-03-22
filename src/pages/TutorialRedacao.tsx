import CardDropdown from "../components/common/CardDropdown";
import CompetenciasImage from "../assets/competencias-enem.jpg";

const TutorialRedacao = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Tutorial de Redação</h1>
      <CardDropdown
        assunto={{
          titulo: "1- Competências do ENEM?",
          descricao: "Descrição do assunto 1",
          exemplos: ["Exemplo 1", "Exemplo 2"],
          imagem: CompetenciasImage,
        }}
      />
      <CardDropdown
        assunto={{
          titulo: "2- Como fazer uma introdução?",
          descricao: "Descrição do assunto 2",
          exemplos: ["Exemplo 1", "Exemplo 2"],
        }}
      />
      <CardDropdown
        assunto={{
          titulo: "3- Como fazer um desenvolvimento?",
          descricao: "Descrição do assunto 3",
          exemplos: ["Exemplo 1", "Exemplo 2"],
        }}
      />
      <CardDropdown
        assunto={{
          titulo: "4- Como fazer uma conclusão?",
          descricao: "Descrição do assunto 3",
          exemplos: ["Exemplo 1", "Exemplo 2"],
        }}
      />
    </section>
  );
};

export default TutorialRedacao;
