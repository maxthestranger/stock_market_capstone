import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Ref from './pages/ref';
import CompanyInfo from './pages/companyInfo';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companyInfo/:companySymbol" element={<CompanyInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/ref" element={<Ref />} />
    </Routes>
  </BrowserRouter>
);

export default App;
