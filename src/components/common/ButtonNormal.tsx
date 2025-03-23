import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";

interface ButtonNormalProps {
    label: string;
    to: string; // Adiciona a propriedade 'to' para o destino da navegação
    className?: string;
}

const ButtonNormal: React.FC<ButtonNormalProps> = ({ label, to, className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to); // Navega para o destino especificado
    };

    return (
        <button
            className={`w-4/5 flex justify-center items-center gap-4 bg-black text-white py-1 ${className}`}
            onClick={handleClick}
        >
            {label}
            <FaArrowAltCircleRight />
        </button>
    );
};

export default ButtonNormal;