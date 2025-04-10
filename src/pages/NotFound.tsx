import React from 'react';
import ButtonNormal from '../components/common/ButtonNormal';
import { RiErrorWarningLine } from "react-icons/ri";


const NotFound: React.FC = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center min-h-screen">
            {/* <img src={logo} alt="Logo Ara Education" className="w-2/4 md:w-1/2 lg:w-1/3 md:mt-0 mb-4" /> */}
            <RiErrorWarningLine size={100} className="text-[#ffd400] mb-4" />
            <p className="mt-2 text-2xl text-gray-600 mb-2"><span className='font-bold'>404.</span> Isso é um erro.</p>
            <p className="text-gray-600">A página que você está procurando <br></br> não foi encontrada.</p>
            {/* Botão com ícone */}
            <ButtonNormal label="Voltar para a Home" to="/" className="mt-8 w-4/5 text-[#ffd400] bg-[#00145d] rounded" />
        </div>
    );
};

export default NotFound;