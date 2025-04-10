import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaixarProvas from './src/pages/BaixarProvas.tsx';
import NotFound from './src/pages/NotFound.tsx';
import AppHeader from './src/components/layout/AppHeader.tsx';
import AppFooter from './src/components/layout/AppFooter.tsx';
import GuiaRedacao from './src/pages/GuiaRedacao.tsx';
import LandingPage from './src/pages/LandingPage.tsx';
import { useRealAccessibility } from './src/hooks/useRealAccessibility'; // importando o hook

function AppRoutes() {
  useRealAccessibility(); // ativando o script do Real Acessibility

  return (
    <Router>
      <AppHeader userType="aluno" />
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/baixar-provas" element={<BaixarProvas />} />
          <Route path="/guia-redacao" element={<GuiaRedacao />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <AppFooter />
    </Router>
  );
}

export default AppRoutes;
