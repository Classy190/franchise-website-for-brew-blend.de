import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FranchiseKonzept from './components/FranchiseKonzept';
import Header from './components/Header';
import Footer from './components/Footer';
import InvestitionsDetails from './pages/InvestitionsDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import { LanguageProvider } from './i18n';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<FranchiseKonzept />} />
              <Route path="/investition" element={<InvestitionsDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
