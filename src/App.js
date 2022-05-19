import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/home';
import About from './pages/about';
import Ref from './pages/ref';
import CompanyInfo from './pages/companyInfo';
import { fetchStock } from './redux/stock';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStock());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companyInfo/:companySymbol" element={<CompanyInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/ref" element={<Ref />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
