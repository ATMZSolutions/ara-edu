import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaixarProvas from './src/pages/BaixarProvas.tsx';
import NotFound from './src/pages/NotFound.tsx';
import AppHeader from './src/components/layout/AppHeader.tsx';
import AppFooter from './src/components/layout/AppFooter.tsx';
import TutorialRedacao from './src/pages/TutorialRedacao.tsx';
import LandingPage from './src/pages/LandingPage.tsx';

function AppRoutes() {
    return (
        <Router>
            <AppHeader userType="aluno" />
            <div className="w-full min-h-screen">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/baixar-provas" element={<BaixarProvas />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/tutorial-redacao" element={<TutorialRedacao />} />
                </Routes>
            </div>
            <AppFooter />
        </Router>
    );
}

export default AppRoutes;
