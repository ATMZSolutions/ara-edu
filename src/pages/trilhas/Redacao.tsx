import ButtonNormal from "../../components/common/ButtonNormal";
import CardDropdown from "../../components/common/CardDropdown";
import TitleIcon from "../../components/common/TitleIcon";

// Interface tipada para os temas de redação
interface Assunto {
  titulo: string;
  descricao: string;
  imagem?: string;
  videoLink?: string;
}

const RedacaoENEM = () => {
  // Link padrão dos vídeos
  const videoPadrao = "https://youtu.be/XG3F-gJXzZs?si=i1sdKWpXnB9qHIZY";

  // Lista de temas abordados na redação do ENEM com descrições mais claras
  const temasRedacao: Assunto[] = [
    {
      titulo: "1- O que é a estrutura da redação do ENEM?",
      descricao:
        "A redação deve seguir o modelo dissertativo-argumentativo: introdução com tese, desenvolvimento com argumentos e conclusão com proposta de intervenção.",
      videoLink: videoPadrao,
    },
    {
      titulo: "2- Como demonstrar domínio da norma culta?",
      descricao:
        "O candidato deve usar a língua portuguesa de forma formal, evitando erros gramaticais, gírias e construções informais.",
      videoLink: videoPadrao,
    },
    {
      titulo: "3- Como compreender e responder à proposta da redação?",
      descricao:
        "É essencial entender o tema proposto e abordá-lo diretamente, mantendo foco e coerência ao longo do texto.",
      videoLink: videoPadrao,
    },
    {
      titulo: "4- Como desenvolver bons argumentos?",
      descricao:
        "Argumentos devem ser bem estruturados, baseados em dados, fatos ou referências que sustentem o ponto de vista defendido.",
      videoLink: videoPadrao,
    },
    {
      titulo: "5- Como garantir coesão textual?",
      descricao:
        "Use conectivos e transições adequadas para ligar as ideias de forma lógica, mantendo o fluxo do texto consistente.",
      videoLink: videoPadrao,
    },
    {
      titulo: "6- Como elaborar uma proposta de intervenção eficaz?",
      descricao:
        "A proposta deve apresentar uma solução clara para o problema abordado, indicando agentes, ações e meios, sempre respeitando os direitos humanos.",
      videoLink: videoPadrao,
    },
    {
      titulo: "7- Quais temas podem aparecer na redação?",
      descricao:
        "O ENEM costuma abordar temas sociais, culturais e políticos relevantes para a sociedade brasileira.",
      videoLink: videoPadrao,
    },
    {
      titulo: "8- Quais são as principais dicas para se destacar na redação?",
      descricao:
        "É importante treinar a escrita com temas anteriores, manter-se informado, revisar o texto e gerenciar bem o tempo durante a prova.",
      videoLink: videoPadrao,
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="max-w-4xl mx-auto mt-18 flex flex-col items-center">
        {/* Título da página */}
        <TitleIcon
          title="Redação"
          subtitle="Conteúdo Programático."
          style="text-4xl"
        />  

        {/* Seção de Introdução */}
        <section className="mb-8">
          <p className="text-gray-700 text-justify mb-6 indent-10">
            A redação do ENEM é uma das partes mais importantes do exame,
            valendo até 1000 pontos. Nesta página, você encontrará os principais
            elementos para construir uma redação nota máxima, apresentados em
            forma de perguntas e respostas interativas.
          </p>
          <div className="bg-[#00145d] border-l-4 border-yellow-400 p-4">
            <p className="text-[#ffd400] font-medium">
              Dica: filmes, livros e séries podem ser ótimas fontes de
              inspiração.
            </p>
          </div>
        </section>

        {/* Alternância entre texto e dropdowns */}
        <section className="space-y-6 w-full">
          {temasRedacao.map((assunto, index) => (
            <div key={index}>
              <CardDropdown assunto={assunto} />
            </div>
          ))}
        </section>

        <ButtonNormal
          label="Leia Redações Nota 1000"
          to="/redacoes-nota-maxima"
          className="mt-8 w-full text-white bg-[#00145d] rounded"
        />
      </div>
    </div>
  );
};

export default RedacaoENEM;
