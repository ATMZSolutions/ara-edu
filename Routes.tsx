import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaixarProvas from './src/pages/BaixarProvas.tsx';
import NotFound from './src/pages/NotFound.tsx';
import AppHeader from './src/components/layout/AppHeader.tsx';
import AppFooter from './src/components/layout/AppFooter.tsx';
import LandingPage from './src/pages/LandingPage.tsx';
import BottomNav from './src/components/layout/BottomNav.tsx';
import Redacao from './src/pages/trilhas/Redacao.tsx';
import Matematica from './src/pages/trilhas/Matematica.tsx';
import SplashScreen from './src/pages/SplashScreen.tsx';

function AppRoutes() {
    return (
        <Router>
            <AppHeader/>
            <div className="min-w-full min-h-screen pl-0 md:pl-20">
                <Routes>
                    <Route path="/" element={<SplashScreen />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/baixar-provas" element={<BaixarProvas />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/redacao" element={<Redacao />} />
                    <Route path="/matematica" element={<Matematica />} />
                </Routes>
            </div>
            <BottomNav/>
            <AppFooter />
        </Router>
    );
}

export default AppRoutes;
