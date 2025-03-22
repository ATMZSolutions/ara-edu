import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const NotFound: React.FC = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-2 text-lg text-gray-600">A página que você está procurando <br /> não existe. :C</p>
            {/* Botão com ícone */}
            <Link to="/" className="mt-6 bg-black rounded-lg text-white px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition">
                <AiOutlineHome size={20} />
                Voltar para a Home
            </Link>
        </div>
    );
};

export default NotFound;