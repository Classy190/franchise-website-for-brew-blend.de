import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Sparkles, Users } from 'lucide-react';

export default function About() {
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
          <p className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Über Brew Blend</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Brew Blend Franchise in der Türkei
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium Specialty Coffee trifft skandinavisches Design. Brew Blend steht für hohe Qualität, nachhaltige Beschaffung und ein skalierbares Franchise-Modell.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-3 mb-12">
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <Globe className="w-8 h-8 text-[#b48e57] mb-4" />
            <h2 className="text-xl font-bold mb-3">Unsere Mission</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Wir bringen überzeugende Specialty-Coffee-Erlebnisse in die Türkei und schaffen gleichzeitig ein nachhaltiges Franchise-System für ambitionierte Partner.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <Sparkles className="w-8 h-8 text-[#b48e57] mb-4" />
            <h2 className="text-xl font-bold mb-3">Unsere Werte</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Qualität, Transparenz und Design sind unser Kern. Wir kombinieren Direct Trade Kaffee mit einer Erlebniswelt, die Gäste immer wieder zurückbringt.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <Users className="w-8 h-8 text-[#b48e57] mb-4" />
            <h2 className="text-xl font-bold mb-3">Ihr Partner</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Als Franchise-Partner profitieren Sie von unserem Markenkonzept, dem Einkauf, Schulungen und dem laufenden Support für den türkischen Markt.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-[#f5f0e8] p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Warum Brew Blend in der Türkei?
          </h2>
          <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <li className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
              <strong className="font-semibold">Stark wachsender Specialty-Coffee-Markt</strong> mit hoher Zahlungsbereitschaft in urbanen Regionen.
            </li>
            <li className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
              <strong className="font-semibold">Skandinavische Markenpositionierung</strong> für ein gehobenes, modernes Publikum.
            </li>
            <li className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
              <strong className="font-semibold">Direkter Zugang zu Premium-Bohnen</strong> und ein etabliertes Logistik- und Qualitätsmanagement.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
