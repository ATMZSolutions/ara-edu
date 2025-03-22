import CardDropdown from "../components/common/CardDropdown";

const TutorialRedacao = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Tutorial de Redação</h1>
      <CardDropdown
        assunto={{
          titulo: "1- Competências do ENEM?",
          descricao: "Veja as 5 competências do ENEM para a redação, de um video remomendado para você.",
          exemplos: ["Exemplo 1", "Exemplo 2"],
          videoLink: "https://youtu.be/DE92wAdgJhM?si=VwmX4aPcr2gMPJVx",
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
