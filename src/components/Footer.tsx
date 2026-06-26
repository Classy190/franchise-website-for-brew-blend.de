import { Link } from 'react-router-dom';
import { useTranslations } from '../i18n';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#1a1a1a] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#b48e57] mb-4">{t.footer.company}</p>
          <h2 className="text-2xl font-semibold text-white">{t.footer.company} Franchise</h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">{t.footer.description}</p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-[#b48e57] mb-4">{t.footer.quickAccess}</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">{t.footer.home}</Link>
            </li>
            <li>
              <Link to="/investition" className="hover:text-white transition">{t.footer.invest}</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">{t.footer.about}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-[#b48e57] mb-4">{t.footer.service}</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/contact" className="hover:text-white transition">{t.footer.contactLink}</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition">{t.footer.faq}</Link>
            </li>
            <li>
              <Link to="/legal" className="hover:text-white transition">{t.footer.legal}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-[#b48e57] mb-4">{t.footer.contact}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{t.footer.email}: franchise@brew-blend.de</p>
          <p className="text-sm text-gray-300 leading-relaxed mt-3">{t.footer.phone}: +90 212 000 0000</p>
          <p className="text-sm text-gray-300 leading-relaxed mt-3">{t.footer.location}</p>
        </div>
      </div>
      <div className="border-t border-[#333333]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          {t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}
        </div>
      </div>
    </footer>
  );
}
