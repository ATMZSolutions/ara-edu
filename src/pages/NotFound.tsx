import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Página Não Encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
                Voltar para a página inicial
            </Link>
        </div>
    );
};

export default NotFound;