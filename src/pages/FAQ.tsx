import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function FAQ() {
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
          <p className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Häufige Fragen zum Brew Blend Franchise
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alle wichtigen Antworten für Ihre Entscheidung: Standort, Kosten, Vertrag und den Markteintritt in der Türkei.
          </p>
        </header>

        <div className="grid gap-6">
          {[
            {
              question: 'Wie hoch ist die Mindestinvestition?',
              answer: 'Für ein Flaggschiff-Brew Blend Café rechnen wir mit 4,5 – 6,5 Mio. TL / 140.000 – 205.000 € inklusive Einrichtung, Equipment und Eröffnungsmarketing.',
            },
            {
              question: 'Welche Franchise-Gebühr fällt an?',
              answer: 'Die laufende Franchise-Gebühr beträgt 5% vom Nettoumsatz. Zusätzlich wird ein Marketingbeitrag von 2% erhoben.',
            },
            {
              question: 'Welche Standortgröße wird empfohlen?',
              answer: 'Für ein Café empfehlen wir mindestens 90 m², für Express-Formate 45 m² und für Corner-Stationen mindestens 18 m².',
            },
            {
              question: 'Welche rechtlichen Anforderungen sind wichtig?',
              answer: 'Sie benötigen eine Gewerbeanmeldung, Gastronomielizenz, eine lokale Gesellschaft (z.B. Ltd. Şti.) und die Registrierung bei SGK sowie Steuerbehörden.',
            },
            {
              question: 'Wie unterstützt Brew Blend beim Markteintritt?',
              answer: 'Wir begleiten Sie mit Standortanalyse, Schulung, Markteintrittsstrategie, Marketingmaterialien und laufendem Support vor Ort.',
            },
          ].map((item, index) => (
            <div key={index} className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-[#b48e57]" />
                <h2 className="text-xl font-semibold">{item.question}</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
