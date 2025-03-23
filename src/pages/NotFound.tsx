import React from 'react';
import ButtonNormal from '../components/common/ButtonNormal';
import logo from '../assets/ara-education-b.svg';

const NotFound: React.FC = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center min-h-screen">
            <img src={logo} alt="Logo Ara Education" className="w-2/4 md:w-1/2 lg:w-1/3 md:mt-0 mb-4" />
            <p className="mt-2 text-2xl text-gray-600 mb-2"><span className='font-bold'>404.</span> Isso é um erro.</p>
            <p className="text-gray-600">A página que você está procurando <br></br> não foi encontrada.</p>
            {/* Botão com ícone */}
            <ButtonNormal label="Voltar para a Home" to="/" className="mt-8" />
        </div>
    );
};

export default NotFound;