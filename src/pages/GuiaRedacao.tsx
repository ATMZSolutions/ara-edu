import ButtonNormal from "../components/common/ButtonNormal";
import CardDropdown from "../components/common/CardDropdown";
import EnemLogo from "../assets/enem-logo.png";

const TutorialRedacao = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center mb-8">
      <img
        src={EnemLogo}
        alt="Person reading"
        className="w-3/5 md:1/5 mt-22 mb-8"
      />
      <CardDropdown
        assunto={{
          titulo: "1- Competências do ENEM?",
          descricao:
            "Entenda as 5 competências exigidas pelo ENEM para a redação. Estude como cada uma é avaliada para garantir uma redação bem estruturada e objetiva.",
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
      <ButtonNormal
        label="Analise de Redação"
        to="/tutorial-redacao/analise"
        className="mt-4"
      />
    </section>
  );
};

export default TutorialRedacao;
