import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#1a1a1a] border border-[#b48e57] px-4 py-2 rounded-full hover:bg-[#b48e57]/10 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>

        <header className="mt-10 mb-10 text-center">
          <p className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Kontakt</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ihr Kontakt zum Brew Blend Franchise-Team
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wir begleiten Sie von der ersten Anfrage bis zur Eröffnung Ihres Brew Blend Standorts in der Türkei.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-6 h-6 text-[#b48e57]" />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em]">E-Mail</p>
                <p className="font-semibold">franchise@brew-blend.de</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Phone className="w-6 h-6 text-[#b48e57]" />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em]">Telefon</p>
                <p className="font-semibold">+90 212 000 0000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#b48e57]" />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em]">Adresse</p>
                <p className="font-semibold">Istanbul / Türkei</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#f5f0e8] p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Schnellkontakt
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Schreiben Sie uns direkt und wir melden uns zeitnah mit einer passenden Beratung für Ihr Franchise-Projekt.
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-4 border border-gray-200">
                <p className="text-sm text-gray-500">Ihr Name</p>
                <p className="mt-2 text-gray-700">Max Mustermann</p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-gray-200">
                <p className="text-sm text-gray-500">Ihre E-Mail</p>
                <p className="mt-2 text-gray-700">max@beispiel.de</p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-gray-200">
                <p className="text-sm text-gray-500">Nachricht</p>
                <p className="mt-2 text-gray-700">Ich möchte mehr über eine Franchise-Partnerschaft erfahren.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            So gehen wir vor
          </h2>
          <div className="grid gap-4">
            {[
              '1. Erstkontakt und Bedarfsanalyse',
              '2. Individuelles Beratungsgespräch',
              '3. Standort- und Budgetanalyse',
              '4. Bewerbungsunterlagen und Vertragsdetails',
              '5. Start der Vorbereitung und Eröffnungsvorbereitung',
            ].map((step, index) => (
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
