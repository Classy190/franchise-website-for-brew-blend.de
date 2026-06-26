import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FranchiseKonzept from './components/FranchiseKonzept';
import InvestitionsDetails from './pages/InvestitionsDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FranchiseKonzept />} />
        <Route path="/investition" element={<InvestitionsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  );
}
