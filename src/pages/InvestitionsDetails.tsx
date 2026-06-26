import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, Building2, FileText, CheckCircle2 } from 'lucide-react';

export default function InvestitionsDetails() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#1a1a1a] border border-[#b48e57] px-4 py-2 rounded-full hover:bg-[#b48e57]/10 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>

        <header className="mt-10 mb-12 text-center">
          <p className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Investitionsdetails</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Marktangepasste Investitionsübersicht für Brew Blend Türkei
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reale lokale Werte für Standortwahl, Flächenbedarf und Investitionsblöcke in türkischer Lira und Euro. Ideal für Entscheidungen in Istanbul, Ankara, İzmir und touristischen Hotspots.
          </p>
        </header>

        <section className="grid lg:grid-cols-3 gap-6 mb-14">
          {[
            { icon: DollarSign, title: 'Gesamtinvestition', value: '4,5 – 6,5 Mio. TL / 140.000 – 205.000 €' },
            { icon: Building2, title: 'Geschäftsmodell', value: 'Flaggschiff Café' },
            { icon: FileText, title: 'Tiefgreifende Transparenz', value: 'Standort & Kosten lokal' },
          ].map((stat, index) => (
            <div key={index} className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
              <stat.icon className="w-10 h-10 text-[#b48e57] mb-5" />
              <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-3">{stat.title}</p>
              <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl bg-[#f7f2e9] p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Türkischer Franchise-Markt im Überblick
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Wachstumsmarkt</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die türkische Café-Kultur wächst stark – insbesondere in Großstädten und Touristenzentren. Specialty Coffee hat in den letzten Jahren deutlich an Bedeutung gewonnen.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Lokale Nachfrage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In Istanbul, Ankara und İzmir steigen die Ausgaben für hochwertige Kaffee-Erlebnisse. Kunden erwarten modernes Design, nachhaltige Produkte und schnellen Service.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Touristische Stärken</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beliebte Reiseziele wie Bodrum, Antalya und Cappadocia bieten ganzjährige Besucherspitzen. Das steigert Umsatzpotenzial für Premium-Kaffeekonzepte.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mt-8">
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Währung & Vergleichbarkeit</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die Zahlen sind primär in TL kalkuliert. Euro-Angaben dienen als Referenz – basierend auf einem konservativen Wechselkurs von rund 32 TL/€.
              </p>
            </div>
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Lieferkette & Betrieb</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Für den Betrieb in der Türkei sind lokale Zulieferer, Zollabwicklung und effiziente Logistik entscheidend. Brew Blend nutzt lokale Partner für Warenfluss und Bestandsmanagement.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Investitionsstruktur</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-2">Franchise-Lizenz</p>
                <p className="text-xl font-semibold">450.000 TL / ~14.000 €</p>
              </div>
              <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-2">Einrichtung & Design</p>
                <p className="text-xl font-semibold">1.200.000 – 1.900.000 TL / ~37.000 – 60.000 €</p>
              </div>
              <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-2">Equipment</p>
                <p className="text-xl font-semibold">900.000 – 1.300.000 TL / ~28.000 – 41.000 €</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-2">Startvorrat</p>
                <p className="text-xl font-semibold">200.000 – 300.000 TL / ~6.000 – 9.500 €</p>
              </div>
              <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-2">POS & IT</p>
                <p className="text-xl font-semibold">120.000 – 180.000 TL / ~3.700 – 5.700 €</p>
              </div>
              <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-2">Marketing & Schulung</p>
                <p className="text-xl font-semibold">220.000 – 340.000 TL / ~6.800 – 10.700 €</p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-[#1a1a1a] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b48e57] mb-2">Gesamt für Modell A</p>
            <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>4,5 – 6,5 Mio. TL / 140.000 – 205.000 €</p>
          </div>
        </section>

        <section className="rounded-3xl bg-[#f5f0e8] p-8 shadow-lg border border-gray-100 mb-12">
          <div className="text-center mb-8">
            <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Fläche & Ausstattung</span>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Mindestflächen und notwendige Ausstattung
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Die Investitionsseite enthält die konkreten Flächen- und Ausstattungsanforderungen für jedes Brew Blend Modell.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Brew Blend Café',
                minArea: '90 m²',
                equipment: 'Siebträger, 2 Mahlwerke, Kühlschränke, Spüle, POS, offene Barista-Theke',
              },
              {
                title: 'Brew Blend Express',
                minArea: '45 m²',
                equipment: 'Kompakter Siebträger, Mahlwerk, Kühlung, POS, Barista-Arbeitsplatz',
              },
              {
                title: 'Brew Blend Corner',
                minArea: '18 m²',
                equipment: 'Kaffee-Take-away-Station, kleine Espressomaschine, Mini-Kühlung, POS',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                <p className="text-sm text-[#b48e57] font-semibold uppercase tracking-[0.3em] mb-3">Mindestfläche</p>
                <p className="text-3xl font-bold text-[#1a1a1a] mb-4">{item.minArea}</p>
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p className="font-semibold mb-2">Empfohlene Basisausstattung:</p>
                  <p>{item.equipment}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Laufende Gebühren</h2>
          <div className="grid gap-4">
            {[
              { label: 'Franchise-Gebühr', value: '5% vom Nettoumsatz' },
              { label: 'Marketing-Beitrag', value: '2% vom Nettoumsatz' },
              { label: 'Warenbezug', value: 'gemäß Preisliste, exklusiv über Brew Blend' },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100 flex justify-between items-center">
                <span className="font-semibold">{item.label}</span>
                <span className="text-[#1a1a1a] font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Rahmenbedingungen</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Finanzielle Anforderungen</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Eigenkapital: mind. 40% der Gesamtinvestition</li>
                <li>Liquide Mittel für 6 Monate Betriebskosten</li>
                <li>Bonität und Finanzprüfung durch Brew Blend</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Rechtliche Anforderungen</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Gewerbeanmeldung und Gastronomie-Lizenz in der Türkei</li>
                <li>Registrierung als Ltd. Şti. oder andere geeignete Rechtsform</li>
                <li>Steuernummer (Vergi Kimlik Numarası) und Sozialversicherungsregistrierung (SGK)</li>
                <li>Standortgenehmigung und Bauauflagenprüfung</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Betriebliche Anforderungen</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Exklusiver Warenbezug über Brew Blend</li>
                <li>Schulung in Deutschland: 2-4 Wochen</li>
                <li>Mietvertrag min. 5 Jahre</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Standortanforderungen</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bevorzugte Lagen in Fußgängerzonen, Einkaufszentren oder hochwertigen Geschäftsstraßen. Gute Sichtbarkeit und Laufkundschaft sind dafür entscheidend.
              </p>
            </div>
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Personal & Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Betreiber sollten operative Erfahrung mitbringen. Mindestens ein baristaerfahrener Manager, plus Service- und Küchenpersonal für den lokalen Betrieb.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#faf9f7] p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Unser Rat</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Brew Blend setzt auf klare Standards: hochwertige Produkte, konsistente Markenführung und strenge Qualitätskontrollen. Der Erfolg hängt von einer sauberen Umsetzung dieser Elemente vor Ort ab.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wählen Sie Ihren Standort mit Bedacht: Gute Erreichbarkeit, Frequenz und ein Umfeld mit höherer Kaufkraft sind wichtiger als die niedrigste Miete.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lokale Marktkenntnis ist entscheidend. Nutzen Sie unsere Standortanalyse und sprechen Sie mit lokalen Maklern, um die passende Nachbarschaft für Brew Blend zu finden.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Planen Sie die ersten Monate konservativ. Seien Sie auf einen längeren Anlauf vorbereitet und nutzen Sie gemeinsame Marketingaktionen mit Brew Blend, um schnell Bekanntheit aufzubauen.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Wichtiger Hinweis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Alle Zahlen sind Orientierungswerte. Bitte lassen Sie finalen Finanzplan und Marktanalyse durch unser Team oder Ihren Steuerberater prüfen.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Empfehlung</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nutzen Sie unsere Franchise-Begleitung für Vertragsverhandlung, Standortprüfung und die ersten 90 Tage nach Eröffnung.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Häufig gestellte Fragen</h2>
          <div className="grid gap-6">
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Wie schnell ist eine Eröffnung möglich?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nach Vertragsunterzeichnung rechnen wir mit 4-6 Monaten bis zur Eröffnung, abhängig von Standortfreigabe, Baugenehmigung und Einrichtung.
              </p>
            </div>
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Welche lokalen Kosten sind besonders wichtig?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Miete, Personal, lokale Steuern und Versorgungsleistungen sind die größten laufenden Posten. Achten Sie besonders auf die Mietbindung und Betriebskosten in zentralen Lagen.
              </p>
            </div>
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Sind Auszahlungen in Euro möglich?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vertrags- und Lizenzzahlungen erfolgen in der Regel in TL. Euro-Angaben sind als Orientierung gedacht und helfen bei der Planung internationaler Investoren.
              </p>
            </div>
            <div className="rounded-3xl bg-[#faf9f7] p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Wie unterstützt Brew Blend beim Standort?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Brew Blend bietet Unterstützung bei Standortanalyse, Marktstudien und Verhandlungen. Lokale Experten begleiten Sie bei der Auswahl und der Genehmigungsphase.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#f7f2e9] p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Kontakt & nächste Schritte</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-4">
                Interesse an Brew Blend Franchise in der Türkei? Unser Expansionsteam beantwortet Ihre Fragen und begleitet Sie von der ersten Standortprüfung bis zur Eröffnung.
              </p>
              <p className="text-gray-600 text-sm"><strong>E-Mail:</strong> franchise@brew-blend.de</p>
              <p className="text-gray-600 text-sm"><strong>Web:</strong> www.brew-blend.de/franchise</p>
              <p className="text-gray-600 text-sm"><strong>Telefon:</strong> +90 212 000 0000</p>
            </div>
            <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Nächste Schritte</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-600 text-sm">
                <li>Kontakt aufnehmen und Erstgespräch vereinbaren</li>
                <li>Standortanalyse und Finanzplanung prüfen</li>
                <li>Bewerbungsunterlagen einreichen</li>
                <li>Persönliches Gespräch und Discovery Day in Deutschland</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
