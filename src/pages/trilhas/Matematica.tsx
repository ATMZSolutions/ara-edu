// src/pages/ChecklistConteudos.jsx
import CardDropdown from "../../components/common/CardDropdown";
import ButtonNormal from "../../components/common/ButtonNormal";
import TitleIcon from "../../components/common/TitleIcon";

// Link do vídeo padrão
const videoPadrao = "https://youtu.be/XG3F-gJXzZs?si=i1sdKWpXnB9qHIZY";

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
    videoLink: videoPadrao, // Adicionando o link de vídeo
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
    videoLink: videoPadrao, // Adicionando o link de vídeo
  },
  {
    titulo: "3. Trigonometria",
    descricao: "Análise das relações entre ângulos e lados de triângulos.",
    exemplos: [
      "Trigonometria no triângulo retângulo",
      "Funções trigonométricas",
      "Gráficos de função trigonométrica",
    ],
    videoLink: videoPadrao, // Adicionando o link de vídeo
  },
  {
    titulo: "4. Geometria Espacial",
    descricao: "Estudo das formas tridimensionais e seus cálculos.",
    exemplos: [
      "Estudo dos sólidos geométricos",
      "Cálculo de volumes dos sólidos geométricos",
      "Cálculo das áreas superficiais dos sólidos geométricos",
    ],
    videoLink: videoPadrao, // Adicionando o link de vídeo
  },
  {
    titulo: "5. Geometria de Posição",
    descricao: "Análise das formas espaciais em relação à posição e projeção.",
    exemplos: [
      "Estudo dos Poliedros convexos",
      "Estudos dos Poliedros Regulares",
      "Projeção Ortogonal",
    ],
    videoLink: videoPadrao, // Adicionando o link de vídeo
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
    videoLink: videoPadrao, // Adicionando o link de vídeo
  },
  {
    titulo: "7. Estatística",
    descricao: "Estudo de dados e medidas estatísticas.",
    exemplos: [
      "Cálculo de média, mediana e moda",
      "Desvio médio",
      "Desvio Padrão",
    ],
    videoLink: videoPadrao, // Adicionando o link de vídeo
  },
];

const Matematica = () => {
  return (
    <div className="p-6 max-w-screen flex flex-col items-center justify-center">

        <TitleIcon
          title="Matemática"
          subtitle="Conteúdo Programático."
          style="text-5xl"
        />

      {checklistConteudos.map((item, index) => (
        <CardDropdown key={index} assunto={item} />
      ))}
      <ButtonNormal
        label="Questões de Matemática"
        to="/redacoes-nota-maxima"
        className="mt-4 w-full text-white bg-[#00145d] rounded"
      />
    </div>
  );
};

export default Matematica;
