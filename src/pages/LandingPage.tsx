import AraEducationLogo from "../assets/ara-education-b.svg";
import ButtonNormal from "../components/common/ButtonNormal";

const LandingPage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 via-white to-white p-4 mb-8">
      <img
        src={AraEducationLogo}
        alt="Logo do Ara Education"
        className="w-3/5 mt-40 mb-8"
      />
      <p className="text-center text-xl text-gray-700 max-w-2xl mb-12">
        Plataforma gratuita para te guiar na jornada rumo à aprovação, com
        conteúdos completos e organizados sobre todas as áreas do ENEM.
      </p>

      <div className="grid gap-8 max-w-4xl w-full md:grid-cols-2">
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2 text-black">Redação</h2>
          <p className="text-gray-700">
            Construa redações de alto nível: domine competências, estrutura,
            argumentação e conclusão com exemplos práticos.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2 text-black">
            Ciências Humanas
          </h2>
          <p className="text-gray-700">
            Aprenda história, geografia, filosofia e sociologia de forma
            integrada e atualizada para o ENEM.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2 text-black">Exatas</h2>
          <p className="text-gray-700">
            Matemática, física, química e biologia descomplicadas, com foco em
            resolução prática e revisão rápida.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2 text-black">Linguagens</h2>
          <p className="text-gray-700">
            Melhore sua interpretação de texto, aprenda gramática na prática e
            domine o conteúdo de inglês ou espanhol.
          </p>
        </div>
      </div>

      {/* Botão fora da grid e centralizado */}
      <ButtonNormal
        label="Começar Agora"
        to="/tutorial-redacao"
        className="mt-12 w-full mx-auto bg-gradient-to-r from-black py-3 px-8 rounded-full shadow-xl hover:opacity-90 transition-all duration-300"
      />
    </section>
  );
};

export default LandingPage;
