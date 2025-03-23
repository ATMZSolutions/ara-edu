// Importando React e Hooks
import { useState, useEffect } from "react";
import EnemLogo from "../assets/enem-logo.png";

const Baixarprovas = () => {
  // Estados principais
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedDay, setSelectedDay] = useState("D1");
  const [selectedBooklet, setSelectedBooklet] = useState("");

  // Lista de anos disponíveis
  const availableYears = ["2024", "2023", "2022", "2021", "2020"];

  // Mapeamento de cadernos por ano e dia
  const bookletColorsByYear: Record<
    string,
    Record<string, { code: string; color: string }[]>
  > = {
    "2024": {
      D1: [
        { code: "CD1", color: "Azul" },
        { code: "CD2", color: "Amarelo" },
        { code: "CD3", color: "Branco" },
        { code: "CD4", color: "Verde" },
      ],
      D2: [
        { code: "CD5", color: "Amarelo" },
        { code: "CD6", color: "Cinza" },
        { code: "CD7", color: "Azul" },
        { code: "CD8", color: "Verde" },
      ],
    },
    "2023": {
      D1: [
        { code: "CD1", color: "Azul" },
        { code: "CD2", color: "Amarelo" },
        { code: "CD3", color: "Branco" },
        { code: "CD4", color: "Rosa" },
      ],
      D2: [
        { code: "CD5", color: "Amarelo" },
        { code: "CD6", color: "Cinza" },
        { code: "CD7", color: "Azul" },
        { code: "CD8", color: "Rosa" },
      ],
    },
    "2022": {
      D1: [
        { code: "CD1", color: "Azul" },
        { code: "CD2", color: "Amarelo" },
        { code: "CD3", color: "Branco" },
        { code: "CD4", color: "Rosa" },
      ],
      D2: [
        { code: "CD5", color: "Amarelo" },
        { code: "CD6", color: "Cinza" },
        { code: "CD7", color: "Azul" },
        { code: "CD8", color: "Rosa" },
      ],
    },
    "2021": {
      D1: [
        { code: "CD1", color: "Azul" },
        { code: "CD2", color: "Amarelo" },
        { code: "CD3", color: "Branco" },
        { code: "CD4", color: "Verde" },
      ],
      D2: [
        { code: "CD5", color: "Amarelo" },
        { code: "CD6", color: "Cinza" },
        { code: "CD7", color: "Azul" },
        { code: "CD8", color: "Rosa" },
      ],
    },
    "2020": {
      D1: [
        { code: "CD1", color: "Azul" },
        { code: "CD2", color: "Amarelo" },
        { code: "CD3", color: "Branco" },
        { code: "CD4", color: "Rosa" },
      ],
      D2: [
        { code: "CD5", color: "Amarelo" },
        { code: "CD6", color: "Cinza" },
        { code: "CD7", color: "Branco" },
        { code: "CD8", color: "Rosa" },
      ],
    },
  };

  // Atualiza o caderno quando ano ou dia mudam
  useEffect(() => {
    const defaultBooklet =
      bookletColorsByYear[selectedYear]?.[selectedDay]?.[0]?.code || "";
    setSelectedBooklet(defaultBooklet);
  }, [selectedYear, selectedDay]);

  // Função para abrir o download da prova
  const handleDownload = () => {
    window.open(
      `https://download.inep.gov.br/enem/provas_e_gabaritos/${selectedYear}_PV_impresso_${selectedDay}_${selectedBooklet}.pdf`,
      "_blank"
    );
  };

  // Função para abrir o download do gabarito
  const handleDownloadGabarito = () => {
    window.open(
      `https://download.inep.gov.br/enem/provas_e_gabaritos/${selectedYear}_GB_impresso_${selectedDay}_${selectedBooklet}.pdf`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-6 text-center">
      <img
        src={EnemLogo}
        alt="Person reading"
        className="w-3/5 md:1/5 mt-22 mb-2"
      />
      <p className="text-gray-600 mb-10">
        Baixar Provas do ENEM de forma prática!
      </p>

      {/* Formulário */}
      <div className="w-full max-w-xl bg-gray-50 rounded px-2 py-6 space-y-3">
        <div className="flex flex-col items-start">
          <label className="block mb-1 font-medium">Ano:</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-start">
          <label className="block mb-1 font-medium">Dia da prova:</label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="D1">Dia 1 - Linguagens, Humanas e Redação</option>
            <option value="D2">
              Dia 2 - Matemática e Ciências da Natureza
            </option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <label className="block mb-1 font-medium">Caderno:</label>
          <select
            value={selectedBooklet}
            onChange={(e) => setSelectedBooklet(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            {(bookletColorsByYear[selectedYear]?.[selectedDay] || []).map(
              (booklet) => (
                <option key={booklet.code} value={booklet.code}>
                  {booklet.code} - {booklet.color}
                </option>
              )
            )}
          </select>
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-700 transition mt-2"
        >
          Baixar Prova
        </button>

        {/* Botão para baixar o gabarito */}
        <button
          onClick={handleDownloadGabarito}
          className="w-full bg-transparent text-black border-2 py-2 rounded-xl transition mt-1"
        >
          Baixar Gabarito
        </button>
      </div>
    </div>
  );
};

export default Baixarprovas;
