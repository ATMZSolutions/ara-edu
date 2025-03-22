import CardDropdown from "../components/common/CardDropdown";

const TutorialRedacao = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center mb-8">
      <h1 className="text-3xl font-bold mb-8 mt-24">Tutorial de Redação</h1>

      <CardDropdown
        assunto={{
          titulo: "1- Competências do ENEM?",
          descricao:
            "Entenda as 5 competências exigidas pelo ENEM para a redação. Estude como cada uma é avaliada para garantir uma redação bem estruturada e objetiva.",
          exemplos: [
            "Competência 1: Estude gramática, ortografia e sintaxe. Pratique revisão de textos e evite erros comuns.",
            "Competência 2: Pratique interpretar diferentes tipos de temas e faça resumos do que foi solicitado, para não fugir do assunto.",
            "Competência 3: Estude como agrupar e ordenar suas ideias de maneira lógica e coerente, além de desenvolver argumentos bem estruturados.",
            "Competência 4: Estude temas sociais, políticos e culturais atuais. Use exemplos de notícias, livros e eventos históricos para fundamentar seus argumentos.",
            "Competência 5: Estude formas de propor soluções viáveis e claras para o problema abordado, evitando propostas genéricas e imprecisas.",
          ],
          videoLink: "https://youtu.be/DE92wAdgJhM?si=VwmX4aPcr2gMPJVx",
        }}
      />

      <CardDropdown
        assunto={{
          titulo: "2- Como fazer uma introdução?",
          descricao:
            "Aprenda como criar uma introdução impactante para sua redação. A introdução deve apresentar o tema de forma clara e contextualizada.",
          videoLink: "https://youtu.be/WfP2bl5xb5E?si=RIgQbI6xgI1X32ke",
        }}
      />

      <CardDropdown
        assunto={{
          titulo: "3- Como fazer um desenvolvimento?",
          descricao:
            "Descubra como organizar seus argumentos de forma lógica e coesa. O desenvolvimento deve explorar o tema com profundidade e apresentar soluções.",
          videoLink: "https://youtu.be/tDwcYr_-j0g?si=icGiWXQ2fycndEa4",
        }}
      />

      <CardDropdown
        assunto={{
          titulo: "4- Como fazer uma conclusão?",
          descricao:
            "Saiba como concluir sua redação de forma eficaz, resumindo os pontos principais e propondo soluções ou reflexões finais.",
          videoLink: "https://youtu.be/LcTBcoKjk7U?si=ncXyRMCuPJlYriDe",
        }}
      />
    </section>
  );
};

export default TutorialRedacao;
