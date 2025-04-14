// src/pages/Matematica.jsx
import CardDropdown from "../../components/common/CardDropdown";
import ButtonNormal from "../../components/common/ButtonNormal";
import TitleIcon from "../../components/common/TitleIcon";

// Link do vídeo padrão
const videoPadrao = "https://youtu.be/XG3F-gJXzZs?si=i1sdKWpXnB9qHIZY";

// Lista de conteúdos de Matemática
const checklistConteudos = [
  {
    titulo: "1. Matemática Básica e Funções",
    descricao:
      "Conceitos fundamentais para o desenvolvimento do raciocínio matemático.",
    exemplos: [
      "Matemática básica",
      "Razão e proporção",
      "Porcentagem",
      "Estudo das grandezas",
      "Regras de três simples e compostas",
      "Função do 1° grau",
      "Função do 2° grau",
      "Progressão aritmética",
      "Progressão geométrica",
    ],
    videoLink: videoPadrao,
  },
  {
    titulo: "2. Geometria Plana",
    descricao: "Estudo das figuras bidimensionais e suas propriedades.",
    exemplos: [
      "Estudo dos ângulos e triângulos",
      "Quadriláteros notáveis",
      "Polígonos convexos e polígonos regulares",
      "Semelhança de triângulos",
      "Relações métricas de um triângulo retângulo",
      "Áreas de figuras elementares",
      "Fórmulas de áreas de triângulos",
      "Área do círculo e suas partes",
    ],
    videoLink: videoPadrao,
  },
  {
    titulo: "3. Trigonometria",
    descricao: "Análise das relações entre ângulos e lados de triângulos.",
    exemplos: [
      "Trigonometria no triângulo retângulo",
      "Funções trigonométricas",
      "Gráficos de função trigonométrica",
    ],
    videoLink: videoPadrao,
  },
  {
    titulo: "4. Geometria Espacial",
    descricao: "Estudo das formas tridimensionais e seus cálculos.",
    exemplos: [
      "Estudo dos sólidos geométricos",
      "Cálculo de volumes dos sólidos geométricos",
      "Cálculo das áreas superficiais dos sólidos geométricos",
    ],
    videoLink: videoPadrao,
  },
  {
    titulo: "5. Geometria de Posição",
    descricao: "Análise das formas espaciais em relação à posição e projeção.",
    exemplos: [
      "Estudo dos Poliedros convexos",
      "Estudos dos Poliedros Regulares",
      "Projeção Ortogonal",
    ],
    videoLink: videoPadrao,
  },
  {
    titulo: "6. Combinatória e Probabilidade",
    descricao: "Técnicas de contagem e cálculo de probabilidades.",
    exemplos: [
      "Arranjo",
      "Permutação simples e Permutação com repetição",
      "Combinação",
      "Probabilidade (definição)",
      "Probabilidade da União",
      "Probabilidade Condicional",
    ],
    videoLink: videoPadrao,
  },
  {
    titulo: "7. Estatística",
    descricao: "Estudo de dados e medidas estatísticas.",
    exemplos: [
      "Cálculo de média, mediana e moda",
      "Desvio médio",
      "Desvio Padrão",
    ],
    videoLink: videoPadrao,
  },
];

const Matematica = () => {
  return (
    <div className="min-h-screen bg-white px-4">
      <div className="max-w-4xl mx-auto mt-18 flex flex-col items-center">
        {/* Título principal da página */}
        <TitleIcon
          title="Matemática"
          subtitle="Conteúdo Programático."
          style="text-5xl"
        />

        <p className="text-gray-700 text-justify mb-6 indent-10">
          A prova de Matemática do ENEM é composta por 45 questões, com grande
          parte delas — cerca de 30 — consideradas de fácil ou média
          dificuldade. Isso significa que, com uma boa preparação, é possível
          garantir uma pontuação alta acertando as questões mais acessíveis, que
          costumam envolver raciocínio lógico, interpretação de gráficos e
          operações básicas.
        </p>

        {/* Caixa de dica em destaque */}
        <div className="bg-[#00145d] border-l-4 border-yellow-400 p-4 mb-8 w-full">
          <p className="text-[#ffd400] font-medium">
            Dica: Resolver questões de provas anteriores é uma ótima maneira de
            se preparar.
          </p>
        </div>

        {/* Lista de conteúdos com dropdowns */}
        <section className="space-y-6 w-full">
          {checklistConteudos.map((item, index) => (
            <CardDropdown key={index} assunto={item} />
          ))}
        </section>

        {/* Botão de navegação ao final */}
        <ButtonNormal
          label="Questões de Matemática"
          to="/questoes-matematica"
          className="mt-8 w-full text-white bg-[#00145d] rounded"
        />
      </div>
    </div>
  );
};

export default Matematica;
