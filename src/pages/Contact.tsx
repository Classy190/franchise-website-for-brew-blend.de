import { Link } from 'react-router-dom';
import { ArrowLeft, Mail as MailIcon, Phone, MapPin } from 'lucide-react';
import { useTranslations } from '../i18n';

export default function Contact() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#1a1a1a] border border-[#b48e57] px-4 py-2 rounded-full hover:bg-[#b48e57]/10 transition"
        >
          <ArrowLeft className="w-4 h-4" /> {t.contact.back}
        </Link>

        <header className="mt-10 mb-10 text-center">
          <p className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">{t.contact.pageLabel}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.contact.title}
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            {t.contact.contactCards.map((card, index) => (
              <div key={index} className="flex items-center gap-4 mb-6">
                {index === 0 && <MailIcon className="w-6 h-6 text-[#b48e57]" />}
                {index === 1 && <Phone className="w-6 h-6 text-[#b48e57]" />}
                {index === 2 && <MapPin className="w-6 h-6 text-[#b48e57]" />}
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-[0.3em]">{card.label}</p>
                  <p className="font-semibold">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-[#f5f0e8] p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Schnellkontakt
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t.contact.intro}
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-4 border border-gray-200">
                <p className="text-sm text-gray-500">{t.contact.contactCards[0].label}</p>
                <p className="mt-2 text-gray-700">{t.contact.contactCards[0].value}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-gray-200">
                <p className="text-sm text-gray-500">{t.contact.contactCards[1].label}</p>
                <p className="mt-2 text-gray-700">{t.contact.contactCards[1].value}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-gray-200">
                <p className="text-sm text-gray-500">{t.contact.contactCards[2].label}</p>
                <p className="mt-2 text-gray-700">{t.contact.contactCards[2].value}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.contact.processTitle}
          </h2>
          <div className="grid gap-4">
            {t.contact.processSteps.map((step, index) => (
              <div key={index} className="rounded-2xl bg-[#faf9f7] p-5 border border-gray-100">
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
