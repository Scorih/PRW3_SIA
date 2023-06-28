import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/about_us';
import HomePage from './pages/home_page';
import { HeaderPage } from './pages/header';
import { FooterPage } from './pages/footer';
import LightPage from './pages/light';
import GeometryPage from './pages/geometry';
import OtherEntitiesPage from './pages/other_entities';
import OptimizationPage from './pages/optimization';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage />
      <Routes>
        <Route path={'/home_page'} element={<HomePage/>} />
        <Route path={'/light'} element={<LightPage/>} />
        <Route path={'/geometry'} element={<GeometryPage/>} />
        <Route path={'/other_entities'} element={<OtherEntitiesPage/>} />
        <Route path={'/optimization'} element={<OptimizationPage/>} />
        <Route path={'/about_us'} element={<AboutPage/>} />
      </Routes>
      <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
