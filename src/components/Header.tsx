import { NavLink } from 'react-router-dom';
import { Coffee } from 'lucide-react';
import { useLanguage, useTranslations } from '../i18n';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#b48e57]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Coffee className="w-7 h-7 text-[#b48e57]" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                BREW BLEND
              </span>
              <span className="text-[#b48e57] text-xs uppercase tracking-[0.3em]">{t.header.franchise}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white transition')}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/investition" className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white transition')}>
              {t.nav.invest}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white transition')}>
              {t.nav.about}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white transition')}>
              {t.nav.contact}
            </NavLink>
          </nav>

          <div className="inline-flex rounded-full border border-[#b48e57] bg-white/5 overflow-hidden">
            {(['DE', 'TR'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`px-4 py-2 text-sm font-semibold uppercase transition ${
                  language === lang ? 'bg-[#b48e57] text-white' : 'text-gray-200 hover:bg-white/10'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
