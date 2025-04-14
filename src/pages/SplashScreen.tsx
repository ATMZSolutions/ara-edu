import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // hook para redirecionamento
import logo from '../assets/logo-araedu-borda.png';

const SplashScreen: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const duration = 2000;
        const interval = 50;   // atualiza a cada 50ms
        const increment = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                return next >= 100 ? 100 : next;
            });
        }, interval);

        // Redireciona para /home após 3 segundos
        const redirectTimeout = setTimeout(() => {
            navigate('/home');
        }, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimeout);
        };
    }, [navigate]);

    return (
        <div className='fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#00155d] z-[9999]'>
            <img
                src={logo}
                alt="Logo AraEdu"
                className="w-1/2 md:w-20 lg:w-40 mb-4 animate-pulse"
            />

            {/* Barra de carregamento proporcional à largura da imagem */}
            <div className="w-1/2 md:w-20 lg:w-40 h-2 bg-white rounded-full overflow-hidden">
                <div
                    className="h-full bg-yellow-400 transition-all duration-50"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SplashScreen;
