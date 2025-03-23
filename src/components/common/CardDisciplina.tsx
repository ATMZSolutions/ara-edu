import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface Disciplina {
    title: string;
    descricao: string;
    link: string;
    style?: string;
}

const CardDisciplina = ({ disciplina }: { disciplina: Disciplina }) => {
    const navigate = useNavigate();

    return (
        <div
            className={`shadow-lg rounded-2xl pl-5 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-row ${disciplina.style || ""}`}
        >
            <div>
                <h2 className="text-xl font-semibold my-1 text-black">{disciplina.title}</h2>
                <p className="text-gray-700 text-sm mb-2">{disciplina.descricao}</p>
            </div>
            <div
                className="h-full rounded-r-2xl bg-gray-900 text-white flex justify-center items-center px-1 ml-1"
                onClick={() => navigate(disciplina.link)}
            >
                <FaArrowAltCircleRight />
            </div>
        </div>
    );
};

export default CardDisciplina;
