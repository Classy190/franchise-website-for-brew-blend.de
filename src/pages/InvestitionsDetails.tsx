import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, Building2, FileText, CheckCircle2, TrendingUp, BarChart3, Percent } from 'lucide-react';
import { useTranslations } from '../i18n';

export default function InvestitionsDetails() {
  const t = useTranslations();

  // Beispielberechnung mit 30k€ monatlichem Umsatz
  const monthlyRevenue = 30000;
  const costsPercentages = {
    warenEinsatz: 0.30, // 30%
    personalkosten: 0.25, // 25%
    miete: 3000, // Fixkosten
    franchiseGebühr: 0.05, // 5%
    marketingBeitrag: 0.02, // 2%
    sonstige: 1500, // Sonstige Kosten
  };

  const netRevenue = monthlyRevenue - (monthlyRevenue * costsPercentages.warenEinsatz);
  const personalCosts = monthlyRevenue * costsPercentages.personalkosten;
  const franchiseFee = monthlyRevenue * costsPercentages.franchiseGebühr;
  const marketingFee = monthlyRevenue * costsPercentages.marketingBeitrag;
  const totalCosts = (monthlyRevenue * costsPercentages.warenEinsatz) + personalCosts + costsPercentages.miete + franchiseFee + marketingFee + costsPercentages.sonstige;
  const netProfit = monthlyRevenue - totalCosts;
  const netProfitPercent = ((netProfit / monthlyRevenue) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#1a1a1a] border border-[#b48e57] px-4 py-2 rounded-full hover:bg-[#b48e57]/10 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück
        </Link>

        <header className="mt-10 mb-12 text-center">
          <p className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Investition & Finanzierung</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Was Sie investieren, was Sie bekommen
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detaillierte Kostenübersicht, Leistungen und Gewinnprognose für Ihr Brew Blend Franchise
          </p>
        </header>

        {/* Was Sie investieren */}
        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Was Sie investieren – Kostenübersicht Modell A (Café Flaggschiff)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-2">Franchise-Lizenzgebühr</p>
                <p className="text-2xl font-bold">25.000 €</p>
                <p className="text-xs text-gray-500 mt-2">Einmalige Gebühr für Markenrechte und Support</p>
              </div>
              <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-2">Store-Design & Einrichtung</p>
                <p className="text-2xl font-bold">45.000 – 70.000 €</p>
                <p className="text-xs text-gray-500 mt-2">Innenarchitektur, Möbel, Bar-Aufbau</p>
              </div>
              <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-2">Kaffee-Equipment</p>
                <p className="text-2xl font-bold">20.000 – 35.000 €</p>
                <p className="text-xs text-gray-500 mt-2">Espressomaschinen, Mahlwerke, Brühgeräte</p>
              </div>
              <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-2">Erstbestand Kaffee & Zubehör</p>
                <p className="text-2xl font-bold">5.000 – 8.000 €</p>
                <p className="text-xs text-gray-500 mt-2">Premium-Kaffeebohnen, Zubereitungsmittel</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-2">IT-System (POS, Warenwirtschaft)</p>
                <p className="text-2xl font-bold">4.000 – 6.000 €</p>
                <p className="text-xs text-gray-500 mt-2">Kassensystem, Bestandsverwaltung, Analytics</p>
              </div>
              <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-2">Marketing-Startpaket</p>
                <p className="text-2xl font-bold">5.000 – 8.000 €</p>
                <p className="text-xs text-gray-500 mt-2">Launch-Kampagne, Beschilderung, Social Media</p>
              </div>
              <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-2">Schulung & Training</p>
                <p className="text-2xl font-bold">3.000 – 5.000 €</p>
                <p className="text-xs text-gray-500 mt-2">2-4 Wochen Deutschland, Barista-Zertifizierung</p>
              </div>
              <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-2">Kaution & Reserven</p>
                <p className="text-2xl font-bold">10.000 – 15.000 €</p>
                <p className="text-xs text-gray-500 mt-2">6 Monate Betriebskosten-Reserve</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#1a1a1a] p-8 text-white">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">GESAMTINVESTITION</span>
              <span className="text-4xl font-bold text-[#b48e57]" style={{ fontFamily: 'Playfair Display, serif' }}>
                120.000 – 180.000 €
              </span>
            </div>
            <p className="text-sm text-gray-300 mt-3">(Davon ~40% Eigenkapital erforderlich = 48.000 – 72.000 €)</p>
          </div>
        </section>

        {/* Was Sie bekommen */}
        <section className="rounded-3xl bg-[#f5f0e8] p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Was Sie bekommen – Unsere Leistungen
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Premium-Konzept</h3>
              <p className="text-gray-600 text-sm">Bewährte Geschäftsformula mit etabliertem Branding und Markenidentität</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Exklusiver Warenbezug</h3>
              <p className="text-gray-600 text-sm">Zugang zu Premium-Kaffeebohnen mit garantierter Qualität und fairen Preisen</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Schulung & Zertifizierung</h3>
              <p className="text-gray-600 text-sm">2-4 Wochen intensives Training in Deutschland, Barista-Zertifizierung inklusive</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Marketing & PR</h3>
              <p className="text-gray-600 text-sm">Launch-Support, Social-Media-Vorlagen und regionale Marketingkampagnen</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Ständige Erreichbarkeit für Betriebsfragen, technische Probleme und Beratung</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Quartalsaudits</h3>
              <p className="text-gray-600 text-sm">Regelmäßige Qualitätsprüfungen und Optimierungsvorschläge für Ihren Betrieb</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Standortberatung</h3>
              <p className="text-gray-600 text-sm">Professionelle Unterstützung bei Standortsuche und Marktanalyse in der Türkei</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Academy & Weiterbildung</h3>
              <p className="text-gray-600 text-sm">Zugang zu Online-Akademie mit regelmäßigen Schulungsinhalten und Updates</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#b48e57]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Netzwerk & Community</h3>
              <p className="text-gray-600 text-sm">Austausch mit anderen Franchise-Partnern und Zugang zur globalen Brew Blend Community</p>
            </div>
          </div>
        </section>

        {/* Monatliche Gebühren & Abgaben */}
        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Was Sie monatlich abgeben – Gebühren & Prozentual
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl bg-gradient-to-br from-red-50 to-red-100 p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <Percent className="w-6 h-6 text-red-600" />
                <p className="text-sm text-red-600 font-semibold uppercase tracking-[0.3em]">Franchise-Gebühr</p>
              </div>
              <p className="text-3xl font-bold text-red-700">5%</p>
              <p className="text-sm text-red-600 mt-3">vom Nettoumsatz</p>
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-xs text-gray-600">Beispiel bei 30.000€ Umsatz: 1.500€/Monat</p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <Percent className="w-6 h-6 text-orange-600" />
                <p className="text-sm text-orange-600 font-semibold uppercase tracking-[0.3em]">Marketing-Beitrag</p>
              </div>
              <p className="text-3xl font-bold text-orange-700">2%</p>
              <p className="text-sm text-orange-600 mt-3">vom Nettoumsatz</p>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="text-xs text-gray-600">Beispiel bei 30.000€ Umsatz: 600€/Monat</p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-[0.3em]">Warenbezug</p>
              </div>
              <p className="text-3xl font-bold text-blue-700">variabel</p>
              <p className="text-sm text-blue-600 mt-3">nach Preisliste</p>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-xs text-gray-600">Typisch ~30% des Umsatzes</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#faf9f7] p-6 border border-gray-200">
            <p className="text-sm text-gray-600 mb-3"><strong>Zusammenfassung laufende Gebühren:</strong></p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Franchise-Gebühr + Marketing:</span>
                <span className="font-semibold">7% vom Umsatz</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span className="text-xs">(Beispiel: 30.000€ Umsatz = 2.100€/Monat)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Beispielrechnung 30k€ */}
        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Praktische Gewinnberechnung – Beispiel mit 30.000€ monatlicher Umsatz
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="text-left p-4 rounded-tl-lg">Position</th>
                  <th className="text-right p-4">Betrag</th>
                  <th className="text-right p-4">% vom Umsatz</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#faf9f7] border-b">
                  <td className="p-4 font-semibold text-green-700">Bruttoumsatz</td>
                  <td className="text-right p-4 font-bold text-green-700">30.000€</td>
                  <td className="text-right p-4 font-bold text-green-700">100%</td>
                </tr>
                
                <tr className="border-b">
                  <td className="p-4">Wareneinsatz (30%)</td>
                  <td className="text-right p-4">- 9.000€</td>
                  <td className="text-right p-4">30%</td>
                </tr>
                
                <tr className="bg-[#faf9f7] border-b">
                  <td className="p-4">Personalkosten (25%)</td>
                  <td className="text-right p-4">- 7.500€</td>
                  <td className="text-right p-4">25%</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Miete & Nebenkosten</td>
                  <td className="text-right p-4">- 3.000€</td>
                  <td className="text-right p-4">10%</td>
                </tr>

                <tr className="bg-[#faf9f7] border-b">
                  <td className="p-4 font-semibold text-red-600">Franchise-Gebühr (5%)</td>
                  <td className="text-right p-4 font-semibold text-red-600">- 1.500€</td>
                  <td className="text-right p-4 font-semibold text-red-600">5%</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold text-red-600">Marketing-Beitrag (2%)</td>
                  <td className="text-right p-4 font-semibold text-red-600">- 600€</td>
                  <td className="text-right p-4 font-semibold text-red-600">2%</td>
                </tr>

                <tr className="bg-[#faf9f7] border-b">
                  <td className="p-4">Sonstige Kosten</td>
                  <td className="text-right p-4">- 1.500€</td>
                  <td className="text-right p-4">5%</td>
                </tr>

                <tr className="bg-[#1a1a1a] text-white font-bold">
                  <td className="p-4 rounded-bl-lg">NETTOGEWINN/MONAT</td>
                  <td className="text-right p-4 text-[#b48e57]">{netProfit.toFixed(0)}€</td>
                  <td className="text-right p-4 rounded-br-lg text-[#b48e57]">{netProfitPercent}%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 border border-green-200">
              <p className="text-sm text-green-600 font-semibold uppercase tracking-[0.3em] mb-2">Jahresgewinn (bei konstanter Performance)</p>
              <p className="text-3xl font-bold text-green-700">{(netProfit * 12).toFixed(0)}€</p>
              <p className="text-xs text-green-600 mt-3">= Gewinn pro Jahr</p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 border border-blue-200">
              <p className="text-sm text-blue-600 font-semibold uppercase tracking-[0.3em] mb-2">Gesamtausgaben monatlich</p>
              <p className="text-3xl font-bold text-blue-700">{totalCosts.toFixed(0)}€</p>
              <p className="text-xs text-blue-600 mt-3">= 80% des Umsatzes</p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 border border-purple-200">
              <p className="text-sm text-purple-600 font-semibold uppercase tracking-[0.3em] mb-2">ROI (Gesamtinvestition)</p>
              <p className="text-3xl font-bold text-purple-700">24-30 Monate</p>
              <p className="text-xs text-purple-600 mt-3">Bei 150k€ Investition & 6k€ monatlicher Gewinn</p>
            </div>
          </div>

          <div className="rounded-xl bg-yellow-50 p-6 border-l-4 border-yellow-500">
            <p className="text-sm text-yellow-800 font-semibold mb-3">ℹ️ Wichtige Hinweise:</p>
            <ul className="text-sm text-yellow-800 space-y-2">
              <li>✓ Beispiel zeigt realistische Zahlen für etablierte Lokale</li>
              <li>✓ Die ersten 6-12 Monate sind typischerweise schwächer (Kundenaufbau)</li>
              <li>✓ Touristenzentren können höhere Umsätze erzielen (40-50k€+)</li>
              <li>✓ Diese Berechnung ist eine Orientierung – lokale Marktbedingungen variieren</li>
            </ul>
          </div>
        </section>

        {/* Break-Even Analyse */}
        <section className="rounded-3xl bg-[#f5f0e8] p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Punkt der Rentabilität (Break-Even)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#b48e57]">Notwendiger monatlicher Umsatz für Break-Even</h3>
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-2">Minimale monatliche Fixkosten (mit allen Gebühren):</p>
                <p className="text-2xl font-bold text-[#1a1a1a]">~17.000€ – 20.000€</p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-2">Das bedeutet:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Mit 20k€ Umsatz: ca. 1.200€ monatlicher Gewinn</li>
                  <li>✓ Mit 25k€ Umsatz: ca. 3.800€ monatlicher Gewinn</li>
                  <li>✓ Mit 30k€ Umsatz: ca. 6.000€ monatlicher Gewinn</li>
                  <li>✓ Mit 40k€ Umsatz: ca. 10.500€ monatlicher Gewinn</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#b48e57]">Typische Timeline zur Rentabilität</h3>
              
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-700">Monat 1-3: Anlaufphase</p>
                  <p className="text-xs text-gray-500">Kundenakquise, ~10-15k€ Umsatz/Monat, noch negative Gewinn</p>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-700">Monat 4-6: Wachstumphase</p>
                  <p className="text-xs text-gray-500">~15-20k€ Umsatz/Monat, erste kleine Gewinne</p>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-700">Monat 7-12: Stabilisierung</p>
                  <p className="text-xs text-gray-500">~20-25k€ Umsatz/Monat, solide Gewinne</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">Monat 12+: Profitabilität</p>
                  <p className="text-xs text-gray-500">~25-30k€+ Umsatz/Monat, ROI nach 24-30 Monaten erreicht</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="rounded-3xl bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-8 shadow-lg border border-[#b48e57]/30">
          <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Möchten Sie mehr erfahren?
          </h2>
          <p className="text-gray-300 mb-6">
            Unsere Experten beantworten Ihre Fragen und erstellen einen individuellen Finanzplan basierend auf Ihrem geplanten Standort.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
              <p className="text-[#b48e57] text-sm font-semibold uppercase tracking-[0.3em] mb-2">E-Mail</p>
              <p className="text-white text-lg font-semibold">franchise@brew-blend.de</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
              <p className="text-[#b48e57] text-sm font-semibold uppercase tracking-[0.3em] mb-2">Telefon</p>
              <p className="text-white text-lg font-semibold">+90 212 000 0000</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
              <p className="text-[#b48e57] text-sm font-semibold uppercase tracking-[0.3em] mb-2">Ort</p>
              <p className="text-white text-lg font-semibold">Antalya, Muratpaşa</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
