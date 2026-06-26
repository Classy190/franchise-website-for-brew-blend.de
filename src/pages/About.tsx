import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Sparkles, Users } from 'lucide-react';
import { useTranslations } from '../i18n';

export default function About() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#1a1a1a] border border-[#b48e57] px-4 py-2 rounded-full hover:bg-[#b48e57]/10 transition"
        >
          <ArrowLeft className="w-4 h-4" /> {t.about.back}
        </Link>

        <header className="mt-10 mb-10 text-center">
          <p className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">{t.about.pageLabel}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.about.title}
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-3 mb-12">
          {t.about.cards.map((card, index) => (
            <div key={index} className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
              {index === 0 && <Globe className="w-8 h-8 text-[#b48e57] mb-4" />}
              {index === 1 && <Sparkles className="w-8 h-8 text-[#b48e57] mb-4" />}
              {index === 2 && <Users className="w-8 h-8 text-[#b48e57] mb-4" />}
              <h2 className="text-xl font-bold mb-3">{card.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl bg-[#f5f0e8] p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.about.whyTitle}
          </h2>
          <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
            {t.about.bullets.map((bullet, index) => (
              <li key={index} className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
                <strong className="font-semibold">{bullet}</strong>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
