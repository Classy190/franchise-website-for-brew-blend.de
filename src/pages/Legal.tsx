import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';
import { useTranslations } from '../i18n';

export default function Legal() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#1a1a1a] border border-[#b48e57] px-4 py-2 rounded-full hover:bg-[#b48e57]/10 transition"
        >
          <ArrowLeft className="w-4 h-4" /> {t.legal.back}
        </Link>

        <header className="mt-10 mb-10 text-center">
          <p className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">{t.legal.pageLabel}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.legal.title}
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.legal.subtitle}
          </p>
        </header>

        <div className="grid gap-6">
          <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#b48e57]" />
              <h2 className="text-2xl font-semibold">Impressum</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Brew Blend Franchise Türkei
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Adresse: Istanbul, Türkiye
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              E-Mail: franchise@brew-blend.de
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Telefon: +90 212 000 0000
            </p>
          </section>

          <section className="rounded-3xl bg-[#f5f0e8] p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#b48e57]" />
              <h2 className="text-2xl font-semibold">Datenschutz</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Wir behandeln Ihre Daten vertraulich und verwenden sie ausschließlich zur Bearbeitung Ihrer Anfrage sowie für Franchise-Informationen.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ihre Daten werden nicht ohne Ihre Zustimmung weitergegeben. Bitte prüfen Sie bei konkreten Projekten die vollständigen Datenschutzbestimmungen im Vertrag.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
