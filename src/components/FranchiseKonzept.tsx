import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import {
  Coffee,
  MapPin,
  DollarSign,
  Users,
  CheckCircle2,
  FileText,
  Building2,
  GraduationCap,
  TrendingUp,
  Globe,
  Award,
  ShieldCheck,
  Truck,
  Star,
  ChevronDown,
  Download,
  Phone,
  Mail,
  ArrowRight,
  Leaf,
  BarChart3,
  Clock,
  Heart,
  Target,
  Zap,
} from 'lucide-react';

const IMAGES = {
  hero: 'https://images.pexels.com/photos/33298496/pexels-photo-33298496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
  shop: 'https://images.pexels.com/photos/16999510/pexels-photo-16999510.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  istanbul: 'https://images.pexels.com/photos/28191913/pexels-photo-28191913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  beans: 'https://images.pexels.com/photos/4815956/pexels-photo-4815956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  roasting: 'https://images.pexels.com/photos/6079719/pexels-photo-6079719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  interior: 'https://images.pexels.com/photos/35829302/pexels-photo-35829302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
};

export default function FranchiseKonzept() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const generatePDF = async () => {
    setGenerating(true);
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 20;
      const contentWidth = pageWidth - 2 * margin;
      let y = 0;

      const addNewPage = () => {
        pdf.addPage();
        y = margin;
      };

      const checkPageBreak = (needed: number) => {
        if (y + needed > pageHeight - margin) {
          addNewPage();
        }
      };

      // Cover Page
      pdf.setFillColor(26, 26, 26);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');
      
      // Gold accent line
      pdf.setFillColor(180, 142, 87);
      pdf.rect(margin, 40, 60, 2, 'F');

      pdf.setTextColor(180, 142, 87);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'normal');
      pdf.text('FRANCHISE-KONZEPT', margin, 55);

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(36);
      pdf.setFont('helvetica', 'bold');
      pdf.text('BREW BLEND', margin, 80);

      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Türkei Expansion 2025/2026', margin, 95);

      pdf.setFillColor(180, 142, 87);
      pdf.rect(margin, 105, 40, 1, 'F');

      pdf.setTextColor(200, 200, 200);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const subtitles = [
        'World\'s Finest Specialty Coffee & Tea',
        'Premium Single-Origin Kaffeebohnen',
        'SCA 80+ Qualitätsstandard',
        'Direct Trade & Nachhaltigkeit',
      ];
      subtitles.forEach((line, i) => {
        pdf.text(line, margin, 120 + i * 8);
      });

      // Confidential notice
      pdf.setFillColor(40, 40, 40);
      pdf.roundedRect(margin, 200, contentWidth, 30, 3, 3, 'F');
      pdf.setTextColor(180, 142, 87);
      pdf.setFontSize(9);
      pdf.text('VERTRAULICH / CONFIDENTIAL', margin + 5, 212);
      pdf.setTextColor(160, 160, 160);
      pdf.setFontSize(8);
      pdf.text('Dieses Dokument enthält vertrauliche Geschäftsinformationen der Brew Blend GmbH.', margin + 5, 220);
      pdf.text('Weitergabe an Dritte nur mit ausdrücklicher schriftlicher Genehmigung.', margin + 5, 226);

      pdf.setTextColor(120, 120, 120);
      pdf.setFontSize(8);
      pdf.text('brew-blend.de | info@brew-blend.de', margin, pageHeight - 15);
      pdf.text('© 2025 Brew Blend GmbH – Alle Rechte vorbehalten', margin, pageHeight - 10);

      // === PAGE 2: INHALTSVERZEICHNIS ===
      addNewPage();
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');
      
      pdf.setFillColor(180, 142, 87);
      pdf.rect(margin, y, 40, 2, 'F');
      y += 15;

      pdf.setTextColor(26, 26, 26);
      pdf.setFontSize(22);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Inhaltsverzeichnis', margin, y);
      y += 20;

      const tocItems = [
        { num: '01', title: 'Über Brew Blend', page: '3' },
        { num: '02', title: 'Der türkische Kaffeemarkt', page: '4' },
        { num: '03', title: 'Das Franchise-Modell', page: '5' },
        { num: '04', title: 'Investitionsübersicht', page: '6' },
        { num: '05', title: 'Anforderungen an den Franchisenehmer', page: '7' },
        { num: '06', title: 'Erforderliche Dokumente & Unterlagen', page: '8' },
        { num: '07', title: 'Standortanforderungen', page: '9' },
        { num: '08', title: 'Schulung & Support', page: '10' },
        { num: '09', title: 'Marketing & Markenführung', page: '11' },
        { num: '10', title: 'Umsatz- & Ertragsprognose', page: '12' },
        { num: '11', title: 'Nächste Schritte & Kontakt', page: '13' },
      ];

      tocItems.forEach((item) => {
        pdf.setTextColor(180, 142, 87);
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text(item.num, margin, y);
        
        pdf.setTextColor(60, 60, 60);
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');
        pdf.text(item.title, margin + 15, y);
        
        pdf.setTextColor(160, 160, 160);
        pdf.text(item.page, pageWidth - margin - 5, y);
        
        // Dotted line
        pdf.setDrawColor(200, 200, 200);
        pdf.setLineDashPattern([1, 2], 0);
        const titleWidth = pdf.getTextWidth(item.title);
        pdf.line(margin + 15 + titleWidth + 3, y, pageWidth - margin - 12, y);
        pdf.setLineDashPattern([], 0);
        
        y += 14;
      });

      // === PAGE 3: ÜBER BREW BLEND ===
      addNewPage();
      
      // Section header helper
      const sectionHeader = (num: string, title: string) => {
        pdf.setFillColor(180, 142, 87);
        pdf.rect(margin, y, 40, 2, 'F');
        y += 12;
        pdf.setTextColor(180, 142, 87);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text(num, margin, y);
        pdf.setTextColor(26, 26, 26);
        pdf.setFontSize(20);
        pdf.setFont('helvetica', 'bold');
        pdf.text(title, margin + 10, y);
        y += 15;
      };

      const bodyText = (text: string) => {
        pdf.setTextColor(80, 80, 80);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        const lines = pdf.splitTextToSize(text, contentWidth);
        checkPageBreak(lines.length * 5 + 5);
        pdf.text(lines, margin, y);
        y += lines.length * 5 + 5;
      };

      const bulletPoint = (text: string) => {
        pdf.setTextColor(180, 142, 87);
        pdf.setFontSize(10);
        pdf.text('●', margin + 2, y);
        pdf.setTextColor(60, 60, 60);
        pdf.setFont('helvetica', 'normal');
        const lines = pdf.splitTextToSize(text, contentWidth - 12);
        pdf.text(lines, margin + 10, y);
        y += lines.length * 5 + 3;
      };

      const subHeading = (text: string) => {
        checkPageBreak(15);
        pdf.setTextColor(26, 26, 26);
        pdf.setFontSize(13);
        pdf.setFont('helvetica', 'bold');
        pdf.text(text, margin, y);
        y += 10;
      };

      sectionHeader('01', 'Über Brew Blend');
      
      bodyText('Brew Blend ist ein Premium-Spezialitätenkaffee-Unternehmen mit Sitz in Deutschland, das sich auf handverlesene Single-Origin Kaffeebohnen und exklusive Blends in Specialty-Qualität (SCA 80+) spezialisiert hat. Unsere Mission ist es, Kaffeeliebhabern weltweit Zugang zu den feinsten Kaffeebohnen zu ermöglichen.');
      
      bodyText('Wir arbeiten mit einer dänischen Partnerrösterei zusammen, die mittels traditioneller Langzeit-Trommelröstung (Slow-Crafted-Verfahren) ein harmonisches, magenfreundliches Profil erzielt. Unser Sortiment umfasst über 20 faszinierende Ursprünge weltweit.');

      subHeading('Unsere Werte');
      bulletPoint('Direct Trade: Faire Löhne und stabile Handelspartnerschaften mit Kooperativen');
      bulletPoint('Nachhaltigkeit: Umweltschonender Kaffeeanbau und transparente Lieferketten');
      bulletPoint('Qualität: SCA 80+ Standard, lückenlose Rückverfolgbarkeit bis zur Plantage');
      bulletPoint('Innovation: Patentierter Coffeebrewer und 333g Aromafrische-Konzept');
      bulletPoint('Handwerkskunst: Small-Batch Röstung statt industrieller Massenware');

      subHeading('Produktportfolio');
      bulletPoint('Espresso House Blend (Brasilien & Uganda) – Schokolade, Praline, Kirsche');
      bulletPoint('Brazil Espresso – Kräftig & Schokoladig');
      bulletPoint('Tanzania Single Origin – Fruchtig & Beerig');
      bulletPoint('Brazil Single Origin – Edel & Ausgewogen');
      bulletPoint('Seasonal Limited Editions & Tee-Kollektion');

      // === PAGE 4: TÜRKISCHER KAFFEEMARKT ===
      addNewPage();
      sectionHeader('02', 'Der türkische Kaffeemarkt');

      bodyText('Die Türkei bietet ein enormes Potenzial für Premium-Kaffeemarken. Mit einer Bevölkerung von über 85 Millionen Menschen und einer tief verwurzelten Kaffeekultur ist die Türkei einer der vielversprechendsten Märkte für Specialty Coffee in der Region.');

      subHeading('Marktdaten & Potenzial');
      bulletPoint('Kaffeemarkt-Volumen Türkei: ca. 2,5 Mrd. USD (2024), jährliches Wachstum 12-15%');
      bulletPoint('Specialty Coffee Segment wächst überdurchschnittlich mit 20-25% pro Jahr');
      bulletPoint('Über 45.000 Cafés in der Türkei – Tendenz stark steigend');
      bulletPoint('Istanbul allein: über 15.000 Cafés, höchste Dichte in der Region');
      bulletPoint('Steigende Nachfrage nach Premium- und Third-Wave-Coffee-Erlebnissen');
      bulletPoint('Junge, urbane Bevölkerung (Durchschnittsalter: 31,5 Jahre) mit hohem Kaffeekonsum');

      subHeading('Zielstädte für die Expansion');
      bulletPoint('Phase 1 (2025): Istanbul (europäische & asiatische Seite), Ankara, Izmir');
      bulletPoint('Phase 2 (2026): Antalya, Bursa, Bodrum, Çeşme');
      bulletPoint('Phase 3 (2027+): Trabzon, Gaziantep, Mersin, touristische Hotspots');

      subHeading('Wettbewerbsvorteile von Brew Blend');
      bulletPoint('Einzigartige Positionierung: European Specialty Coffee in der Türkei');
      bulletPoint('Authentische Single-Origin Bohnen mit nachvollziehbarer Herkunft');
      bulletPoint('Innovative 333g Aromafrische-Verpackung als USP');
      bulletPoint('Kombination aus On-Site-Erlebnis und Retail-Verkauf (Bohnen zum Mitnehmen)');

      // === PAGE 5: FRANCHISE-MODELL ===
      addNewPage();
      sectionHeader('03', 'Das Franchise-Modell');

      bodyText('Das Brew Blend Franchise-Modell bietet drei flexible Konzepte, die an verschiedene Standorte und Investitionsbudgets angepasst sind:');

      subHeading('Modell A: Brew Blend Café (Flaggschiff)');
      bulletPoint('Fläche: 80-150 m², Premium-Lage in Innenstädten oder Shopping-Centern');
      bulletPoint('Vollständige Barista-Bar mit Siebträger-Maschinen');
      bulletPoint('Sitzplätze: 30-60 Gäste, modernes skandinavisches Design');
      bulletPoint('Komplettes Sortiment: Kaffee, Tee, Gebäck, Bohnen-Retail');
      bulletPoint('Investition: 120.000 – 180.000 EUR');

      subHeading('Modell B: Brew Blend Express');
      bulletPoint('Fläche: 30-60 m², hohe Frequenzlagen (Bahnhöfe, Business-Districts)');
      bulletPoint('Fokus auf Take-Away mit begrenzter Sitzfläche (8-15 Plätze)');
      bulletPoint('Kompaktes Equipment, schneller Service');
      bulletPoint('Kaffee, Tee, ausgewähltes Gebäck, Bohnen-Retail');
      bulletPoint('Investition: 60.000 – 100.000 EUR');

      subHeading('Modell C: Brew Blend Corner (Shop-in-Shop)');
      bulletPoint('Fläche: 10-25 m², in bestehenden Geschäften, Hotels oder Bürogebäuden');
      bulletPoint('Minimales Setup: Barista-Station mit 1-2 Mitarbeitern');
      bulletPoint('Kaffee-to-Go und Bohnenverkauf');
      bulletPoint('Investition: 30.000 – 55.000 EUR');

      y += 5;
      bodyText('Alle Modelle beinhalten das komplette Brew Blend CI-Paket, Erstausstattung, Schulungsprogramm und laufenden Support.');

      // === PAGE 6: INVESTITIONSÜBERSICHT ===
      addNewPage();
      sectionHeader('04', 'Investitionsübersicht');

      bodyText('Die folgende Aufstellung gibt einen detaillierten Überblick über die erforderlichen Investitionen für ein Brew Blend Café (Modell A, Flaggschiff):');

      subHeading('Einmalige Gebühren');
      
      // Table-like layout
      const tableRow = (label: string, value: string, highlight = false) => {
        checkPageBreak(8);
        if (highlight) {
          pdf.setFillColor(245, 240, 230);
          pdf.rect(margin, y - 4, contentWidth, 7, 'F');
        }
        pdf.setTextColor(60, 60, 60);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text(label, margin + 3, y);
        pdf.setFont('helvetica', 'bold');
        pdf.text(value, pageWidth - margin - 3, y, { align: 'right' });
        y += 8;
      };

      tableRow('Franchise-Lizenzgebühr', '25.000 EUR', true);
      tableRow('Store-Design & Einrichtung', '45.000 – 70.000 EUR');
      tableRow('Kaffee-Equipment (Siebträger, Mühlen, etc.)', '20.000 – 35.000 EUR', true);
      tableRow('Erstbestand Kaffeebohnen & Zubehör', '5.000 – 8.000 EUR');
      tableRow('IT-System (POS, Warenwirtschaft)', '4.000 – 6.000 EUR', true);
      tableRow('Marketing-Startpaket (Eröffnungskampagne)', '5.000 – 8.000 EUR');
      tableRow('Schulung & Training (Team)', '3.000 – 5.000 EUR', true);
      tableRow('Kaution & Reserven', '10.000 – 15.000 EUR');
      y += 5;
      
      pdf.setFillColor(26, 26, 26);
      pdf.rect(margin, y - 4, contentWidth, 8, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Gesamtinvestition Modell A', margin + 3, y);
      pdf.text('120.000 – 180.000 EUR', pageWidth - margin - 3, y, { align: 'right' });
      y += 15;

      subHeading('Laufende Gebühren');
      tableRow('Franchise-Gebühr (monatlich)', '5% vom Nettoumsatz', true);
      tableRow('Marketing-Beitrag (monatlich)', '2% vom Nettoumsatz');
      tableRow('Warenbezug (Kaffeebohnen exklusiv über Brew Blend)', 'gemäß Preisliste', true);

      // === PAGE 7: ANFORDERUNGEN FRANCHISENEHMER ===
      addNewPage();
      sectionHeader('05', 'Anforderungen an den Franchisenehmer');

      bodyText('Als Franchise-Partner von Brew Blend suchen wir unternehmerisch denkende Persönlichkeiten, die unsere Leidenschaft für Premium-Kaffee teilen. Folgende Voraussetzungen müssen erfüllt sein:');

      subHeading('Persönliche Anforderungen');
      bulletPoint('Nachgewiesene unternehmerische Erfahrung (min. 3 Jahre Selbstständigkeit oder Führungsposition)');
      bulletPoint('Leidenschaft für Kaffee und Premium-Gastronomie');
      bulletPoint('Bereitschaft zur aktiven, operativen Mitarbeit im Tagesgeschäft (mindestens in der Anfangsphase)');
      bulletPoint('Führungskompetenz und Erfahrung im Personalmanagement');
      bulletPoint('Kommunikationsstärke in Türkisch (Muttersprache) und Englisch (verhandlungssicher)');
      bulletPoint('Bereitschaft, am Brew Blend Schulungsprogramm in Deutschland teilzunehmen (2-4 Wochen)');
      bulletPoint('Einwandfreies polizeiliches Führungszeugnis');

      subHeading('Finanzielle Anforderungen');
      bulletPoint('Eigenkapital: mindestens 40% der Gesamtinvestition (Modell A: min. 50.000-72.000 EUR)');
      bulletPoint('Nachweis liquider Mittel oder verbindlicher Finanzierungszusage für den Restbetrag');
      bulletPoint('Positive Schufa-Auskunft oder vergleichbarer Bonitätsnachweis (türkisches Äquivalent: KKB/Findeks)');
      bulletPoint('Finanzielle Reserven für mindestens 6 Monate Betriebskosten nach Eröffnung');
      bulletPoint('Keine bestehenden Insolvenzverfahren oder offenen Vollstreckungstitel');

      subHeading('Geschäftliche Anforderungen');
      bulletPoint('Gründung einer türkischen Kapitalgesellschaft (Limited Şirketi / Anonim Şirketi)');
      bulletPoint('Gewerbeanmeldung und Gastronomie-Lizenz in der Türkei');
      bulletPoint('Bereitschaft, die Brew Blend Qualitätsstandards und CI-Richtlinien vollständig einzuhalten');
      bulletPoint('Exklusiver Bezug aller Kaffeebohnen und markeneigenen Produkte über Brew Blend');

      // === PAGE 8: ERFORDERLICHE DOKUMENTE ===
      addNewPage();
      sectionHeader('06', 'Erforderliche Dokumente & Unterlagen');

      bodyText('Für die Bewerbung als Brew Blend Franchise-Partner in der Türkei sind folgende Dokumente einzureichen:');

      subHeading('Persönliche Dokumente');
      bulletPoint('Aktueller Lebenslauf (CV) mit Foto und vollständiger Berufshistorie');
      bulletPoint('Kopie des gültigen Reisepasses oder Personalausweises (Kimlik)');
      bulletPoint('Polizeiliches Führungszeugnis (Adli Sicil Belgesi) – nicht älter als 3 Monate');
      bulletPoint('Nachweis des Wohnsitzes (İkametgah Belgesi)');
      bulletPoint('Referenzschreiben (min. 2 geschäftliche Referenzen)');

      subHeading('Finanzielle Dokumente');
      bulletPoint('Kontoauszüge der letzten 6 Monate (alle Geschäfts- und Privatkonten)');
      bulletPoint('Steuererklärungen der letzten 3 Jahre (Gelir Vergisi Beyannamesi)');
      bulletPoint('Eigenkapitalnachweis (Bankbestätigung über verfügbare Mittel)');
      bulletPoint('Bonitätsauskunft / Findeks-Bericht (Kredi Kayıt Bürosu)');
      bulletPoint('Ggf. Finanzierungszusage der Bank (Kredi Onay Belgesi)');
      bulletPoint('Vermögensübersicht (Immobilien, Fahrzeuge, Wertpapiere)');

      subHeading('Geschäftliche Dokumente');
      bulletPoint('Ausgefülltes Brew Blend Franchise-Bewerbungsformular');
      bulletPoint('Businessplan mit 3-Jahres-Prognose für den geplanten Standort');
      bulletPoint('Standortanalyse und Marktrecherche für die gewählte Stadt/Region');
      bulletPoint('Ggf. Nachweise über bestehende Unternehmen (Ticaret Sicil Gazetesi)');
      bulletPoint('Vergi Levhası (Steuerkarte) – falls bereits Unternehmer');
      bulletPoint('Motivationsschreiben: Warum Brew Blend? Vision für den türkischen Markt');

      subHeading('Nach Vertragsabschluss zusätzlich erforderlich');
      bulletPoint('Gründungsurkunde der türkischen Gesellschaft (Şirket Ana Sözleşmesi)');
      bulletPoint('Handelsregisterauszug (Ticaret Sicil Belgesi)');
      bulletPoint('Steuernummer (Vergi Kimlik Numarası)');
      bulletPoint('Gastronomie-Betriebserlaubnis (İşyeri Açma ve Çalıştırma Ruhsatı)');
      bulletPoint('Gesundheitszeugnis für alle Mitarbeiter (Sağlık Raporu)');
      bulletPoint('Hygienezertifikat (Hijyen Eğitim Belgesi)');
      bulletPoint('Brandschutzgenehmigung (Yangın Güvenlik Raporu)');
      bulletPoint('Mietvertrag oder Eigentumsurkunde (Tapu) des Geschäftslokals');

      // === PAGE 9: STANDORTANFORDERUNGEN ===
      addNewPage();
      sectionHeader('07', 'Standortanforderungen');

      bodyText('Die Wahl des richtigen Standorts ist entscheidend für den Erfolg. Brew Blend hat klare Kriterien für die Standortgenehmigung:');

      subHeading('Lage & Umfeld');
      bulletPoint('A-Lage oder starke B-Lage in urbanen Zentren (Frequenzlage)');
      bulletPoint('Mindestens 5.000 Passanten pro Tag im direkten Umfeld');
      bulletPoint('Nähe zu Bürogebäuden, Universitäten, Einkaufszentren oder Touristenattraktionen');
      bulletPoint('Gute Sichtbarkeit und Zugänglichkeit (Erdgeschoss bevorzugt)');
      bulletPoint('Ausreichend Parkplätze oder ÖPNV-Anbindung in der Nähe');

      subHeading('Technische Anforderungen');
      bulletPoint('Fläche: mindestens 80 m² für Modell A (inkl. Lager & Personalbereich)');
      bulletPoint('Wasseranschluss mit geeigneter Wasserqualität (Filtration ggf. erforderlich)');
      bulletPoint('Starkstromanschluss (380V) für Siebträgermaschinen');
      bulletPoint('Ausreichende Belüftung und Möglichkeit für Abluftanlage');
      bulletPoint('Barrierefreier Zugang (gem. türkischer Bauordnung)');
      bulletPoint('Deckenhöhe mindestens 3,00 m');

      subHeading('Vertragskonditionen Mietobjekt');
      bulletPoint('Mietvertragslaufzeit: mindestens 5 Jahre (idealerweise 10 Jahre)');
      bulletPoint('Optionsrecht auf Verlängerung');
      bulletPoint('Umbauten und Brew Blend CI-Anpassungen müssen vertraglich gestattet sein');
      bulletPoint('Miete sollte 10-12% des prognostizierten Umsatzes nicht überschreiten');

      // === PAGE 10: SCHULUNG & SUPPORT ===
      addNewPage();
      sectionHeader('08', 'Schulung & Support');

      bodyText('Brew Blend bietet ein umfassendes Schulungs- und Supportpaket, das den Franchise-Partner vom ersten Tag an begleitet:');

      subHeading('Initiale Schulung (vor Eröffnung)');
      bulletPoint('2-4 Wochen Intensivtraining in Deutschland (Hauptquartier & Partnerrösterei)');
      bulletPoint('Barista-Ausbildung (SCA-zertifiziert): Espresso, Latte Art, Brewing Methods');
      bulletPoint('Kaffee-Sensorik und Qualitätsbewertung (Cupping-Schulung)');
      bulletPoint('Betriebswirtschaftliche Schulung: Kalkulation, Warenwirtschaft, Controlling');
      bulletPoint('Personalführung und Service-Excellence-Training');
      bulletPoint('Hygiene- und HACCP-Schulung nach EU- und türkischen Standards');
      bulletPoint('Marketing- und Social-Media-Workshop');

      subHeading('Pre-Opening Support');
      bulletPoint('Standortbewertung und Genehmigung durch Brew Blend Expansionsteam');
      bulletPoint('Architektonische Planung und Store-Design (inkl. 3D-Visualisierung)');
      bulletPoint('Unterstützung bei Behördengängen und Genehmigungen');
      bulletPoint('Rekrutierung und Schulung des lokalen Teams (vor Ort, 2-3 Wochen)');
      bulletPoint('Equipment-Beschaffung und Installation');
      bulletPoint('Soft-Opening mit Brew Blend Support-Team vor Ort');

      subHeading('Laufender Support');
      bulletPoint('Dedizierter Franchise-Manager als persönlicher Ansprechpartner');
      bulletPoint('Quartalsweise Besuche und Qualitätsaudits');
      bulletPoint('24/7 Support-Hotline für operative Fragen');
      bulletPoint('Regelmäßige Produktschulungen bei neuen Sorten/Saisonprodukten');
      bulletPoint('Zugang zur Brew Blend Academy (Online-Lernplattform)');
      bulletPoint('Jährliche Franchise-Partner-Konferenz');

      // === PAGE 11: MARKETING ===
      addNewPage();
      sectionHeader('09', 'Marketing & Markenführung');

      bodyText('Die Marke Brew Blend wird zentral geführt, um weltweit ein konsistentes Premium-Image sicherzustellen:');

      subHeading('Corporate Identity');
      bulletPoint('Vollständiges CI-Handbuch mit Logo, Farben, Typografie und Bildsprache');
      bulletPoint('Store-Design-Manual: Möbel, Beleuchtung, Materialien, Musik');
      bulletPoint('Einheitliche Verpackungen und Branded Merchandise');
      bulletPoint('Digitale Asset-Bibliothek für lokale Marketingmaßnahmen');

      subHeading('Digitales Marketing');
      bulletPoint('Lokale Website/Landingpage unter brew-blend.com.tr');
      bulletPoint('Social-Media-Vorlagen und Content-Kalender');
      bulletPoint('Google My Business und lokale SEO-Optimierung');
      bulletPoint('Influencer-Marketing-Strategie für den türkischen Markt');
      bulletPoint('Newsletter- und CRM-System');

      subHeading('Lokales Marketing');
      bulletPoint('Grand-Opening-Kampagne mit Medieneinladung');
      bulletPoint('Kooperationen mit lokalen Unternehmen und Hotels');
      bulletPoint('Kundenbindungsprogramm (Stempelkarte / Brew Blend Rewards App)');
      bulletPoint('Saisonale Promotions und Limited Editions');
      bulletPoint('Kaffee-Tastings und Community-Events');

      // === PAGE 12: UMSATZPROGNOSE ===
      addNewPage();
      sectionHeader('10', 'Umsatz- & Ertragsprognose');

      bodyText('Die folgenden Prognosen basieren auf vergleichbaren Specialty-Coffee-Standorten in der Türkei und dienen als Orientierung. Tatsächliche Ergebnisse können abweichen.');

      subHeading('Modell A – Café (Flaggschiff) | Monatliche Prognose');
      
      y += 3;
      // Header row
      pdf.setFillColor(26, 26, 26);
      pdf.rect(margin, y - 4, contentWidth, 8, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Position', margin + 3, y);
      pdf.text('Jahr 1', margin + 80, y);
      pdf.text('Jahr 2', margin + 115, y);
      pdf.text('Jahr 3', margin + 145, y);
      y += 10;

      const progRow = (label: string, v1: string, v2: string, v3: string, highlight = false) => {
        if (highlight) {
          pdf.setFillColor(245, 240, 230);
          pdf.rect(margin, y - 4, contentWidth, 7, 'F');
        }
        pdf.setTextColor(60, 60, 60);
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.text(label, margin + 3, y);
        pdf.text(v1, margin + 80, y);
        pdf.text(v2, margin + 115, y);
        pdf.text(v3, margin + 145, y);
        y += 8;
      };

      progRow('Bruttoumsatz/Monat', '25.000 €', '35.000 €', '45.000 €', true);
      progRow('Wareneinsatz (30%)', '7.500 €', '10.500 €', '13.500 €');
      progRow('Personalkosten (25%)', '6.250 €', '8.750 €', '11.250 €', true);
      progRow('Miete & Nebenkosten', '3.000 €', '3.200 €', '3.400 €');
      progRow('Franchise-Gebühr (5%)', '1.250 €', '1.750 €', '2.250 €', true);
      progRow('Marketing-Beitrag (2%)', '500 €', '700 €', '900 €');
      progRow('Sonstige Kosten', '2.000 €', '2.100 €', '2.200 €', true);
      
      y += 2;
      pdf.setFillColor(26, 26, 26);
      pdf.rect(margin, y - 4, contentWidth, 8, 'F');
      pdf.setTextColor(180, 142, 87);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Nettoergebnis/Monat', margin + 3, y);
      pdf.text('4.500 €', margin + 80, y);
      pdf.text('8.000 €', margin + 115, y);
      pdf.text('11.500 €', margin + 145, y);
      y += 15;

      bodyText('Break-Even wird typischerweise innerhalb von 12-18 Monaten erreicht. Die vollständige Amortisation der Investition ist innerhalb von 24-36 Monaten realistisch.');

      // === PAGE 13: NÄCHSTE SCHRITTE & KONTAKT ===
      addNewPage();
      sectionHeader('11', 'Nächste Schritte & Kontakt');

      bodyText('Der Weg zu Ihrer Brew Blend Franchise-Partnerschaft:');

      y += 5;
      const steps = [
        { step: '01', title: 'Erstkontakt & Informationsgespräch', desc: 'Nehmen Sie Kontakt mit unserem Expansionsteam auf. In einem unverbindlichen Gespräch klären wir erste Fragen und prüfen die grundsätzliche Eignung.' },
        { step: '02', title: 'Bewerbung einreichen', desc: 'Senden Sie Ihre vollständigen Bewerbungsunterlagen (siehe Abschnitt 06) an unser Franchise-Team.' },
        { step: '03', title: 'Prüfung & persönliches Interview', desc: 'Nach positiver Vorprüfung laden wir Sie zu einem persönlichen Gespräch ein (vor Ort in Deutschland oder per Videokonferenz).' },
        { step: '04', title: 'Discovery Day in Deutschland', desc: 'Besuchen Sie uns in Deutschland: Erleben Sie Brew Blend hautnah, besuchen Sie unsere Partnerrösterei und lernen Sie das Team kennen.' },
        { step: '05', title: 'Standortsuche & Genehmigung', desc: 'Gemeinsam identifizieren und bewerten wir den optimalen Standort für Ihr Brew Blend Café.' },
        { step: '06', title: 'Vertragsunterzeichnung', desc: 'Unterzeichnung des Franchise-Vertrags und Zahlung der Lizenzgebühr.' },
        { step: '07', title: 'Schulung & Aufbau', desc: 'Intensivtraining in Deutschland, paralleler Aufbau des Stores in der Türkei.' },
        { step: '08', title: 'Grand Opening', desc: 'Feierliche Eröffnung Ihres Brew Blend Cafés mit vollem Marketing-Support!' },
      ];

      steps.forEach((s) => {
        checkPageBreak(20);
        pdf.setFillColor(245, 240, 230);
        pdf.roundedRect(margin, y - 4, contentWidth, 18, 2, 2, 'F');
        
        pdf.setTextColor(180, 142, 87);
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        pdf.text(s.step, margin + 4, y + 2);
        
        pdf.setTextColor(26, 26, 26);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.text(s.title, margin + 18, y + 2);
        
        pdf.setTextColor(100, 100, 100);
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        const descLines = pdf.splitTextToSize(s.desc, contentWidth - 22);
        pdf.text(descLines, margin + 18, y + 9);
        
        y += 22;
      });

      y += 10;
      checkPageBreak(40);
      
      // Contact box
      pdf.setFillColor(26, 26, 26);
      pdf.roundedRect(margin, y, contentWidth, 45, 3, 3, 'F');
      
      pdf.setTextColor(180, 142, 87);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Kontakt Franchise-Abteilung', margin + 10, y + 12);
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Brew Blend GmbH', margin + 10, y + 22);
      pdf.text('E-Mail: franchise@brew-blend.de', margin + 10, y + 29);
      pdf.text('Web: www.brew-blend.de/franchise', margin + 10, y + 36);

      // Footer on last page
      pdf.setTextColor(160, 160, 160);
      pdf.setFontSize(7);
      pdf.text('Dieses Dokument dient ausschließlich Informationszwecken und stellt kein verbindliches Angebot dar.', margin, pageHeight - 15);
      pdf.text('Stand: Januar 2025 | © Brew Blend GmbH', margin, pageHeight - 10);

      // Add page numbers to all pages
      const totalPages = pdf.getNumberOfPages();
      for (let i = 2; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setTextColor(180, 180, 180);
        pdf.setFontSize(8);
        pdf.text(`${i} / ${totalPages}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
        
        // Add footer line
        pdf.setDrawColor(230, 230, 230);
        pdf.line(margin, pageHeight - 18, pageWidth - margin, pageHeight - 18);
        pdf.setTextColor(200, 200, 200);
        pdf.text('BREW BLEND – Franchise-Konzept Türkei', margin, pageHeight - 10);
      }

      pdf.save('Brew-Blend-Franchise-Konzept-Tuerkei.pdf');
    } catch (err) {
      console.error('PDF generation failed:', err);
      alert('PDF-Generierung fehlgeschlagen. Bitte versuchen Sie es erneut.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#b48e57]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Coffee className="w-7 h-7 text-[#b48e57]" />
              <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                BREW BLEND
              </span>
              <span className="hidden sm:inline text-[#b48e57] text-xs tracking-[0.3em] uppercase ml-2">Franchise</span>
            </div>
            <button
              onClick={generatePDF}
              disabled={generating}
              className="flex items-center gap-2 bg-[#b48e57] hover:bg-[#9a7848] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#b48e57]/20"
            >
              <Download className="w-4 h-4" />
              {generating ? 'Wird erstellt...' : 'PDF herunterladen'}
            </button>
          </div>
        </div>
      </nav>

      <div ref={contentRef}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0">
            <img src={IMAGES.hero} alt="Brew Blend Coffee Shop" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/70 to-[#1a1a1a]/90" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#b48e57]/20 border border-[#b48e57]/30 rounded-full px-5 py-2 mb-8">
              <Globe className="w-4 h-4 text-[#b48e57]" />
              <span className="text-[#b48e57] text-sm font-medium tracking-wider uppercase">Internationale Expansion 2025</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Franchise-Konzept<br />
              <span className="text-[#b48e57]">Türkei</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Werden Sie Teil der Brew Blend Familie und bringen Sie World's Finest Specialty Coffee in die Türkei.
              Premium Single-Origin Kaffeebohnen. SCA 80+ Qualität. Direct Trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={generatePDF}
                disabled={generating}
                className="flex items-center justify-center gap-2 bg-[#b48e57] hover:bg-[#9a7848] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-[#b48e57]/30 disabled:opacity-50"
              >
                <FileText className="w-5 h-5" />
                {generating ? 'PDF wird erstellt...' : 'Komplettes Konzept als PDF'}
              </button>
              <Link to="/investition" className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
                Investitionsdetails
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#b48e57]" />
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#1a1a1a] py-8 border-y border-[#b48e57]/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '20+', label: 'Kaffee-Ursprünge', icon: Globe },
                { value: 'SCA 80+', label: 'Qualitätsstandard', icon: Award },
                { value: '333g', label: 'Aromafrische-Format', icon: Coffee },
                { value: '100%', label: 'Direct Trade', icon: Leaf },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <stat.icon className="w-6 h-6 text-[#b48e57] mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Über Brew Blend</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                World's Finest Specialty Coffee
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Brew Blend vereint handverlesene Single-Origin Kaffeebohnen aus über 20 Ursprüngen weltweit 
                mit traditioneller Slow-Crafted Trommelröstung aus unserer dänischen Partnerrösterei.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative rounded-2xl overflow-hidden h-80 md:h-auto">
                <img src={IMAGES.beans} alt="Premium Kaffeebohnen" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Single-Origin Excellence</h3>
                  <p className="text-gray-200 mt-2">SCA 80+ zertifizierte Bohnen mit lückenloser Rückverfolgbarkeit</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Leaf, title: 'Direct Trade', desc: 'Faire Löhne & stabile Partnerschaften mit Kooperativen weltweit' },
                  { icon: Award, title: 'SCA 80+', desc: 'Höchste Qualitätsstandards für jede einzelne Charge' },
                  { icon: ShieldCheck, title: 'Transparenz', desc: 'Lückenlose Nachvollziehbarkeit bis zur Plantage' },
                  { icon: Zap, title: 'Small-Batch', desc: 'Traditionelle Röstung in kleinen Chargen für maximales Aroma' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 rounded-lg bg-[#b48e57]/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-[#b48e57]" />
                    </div>
                    <h4 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Turkish Market */}
        <section className="py-20 px-6 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Marktanalyse</span>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Der türkische<br /><span className="text-[#b48e57]">Kaffeemarkt</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Mit über 85 Mio. Einwohnern und einer tief verwurzelten Kaffeekultur bietet die Türkei 
                  enormes Potenzial für Premium Specialty Coffee.
                </p>
                <div className="space-y-4">
                  {[
                    { value: '2,5 Mrd. $', label: 'Marktvolumen Türkei 2024' },
                    { value: '20-25%', label: 'Jährliches Wachstum Specialty Coffee' },
                    { value: '45.000+', label: 'Cafés in der Türkei' },
                    { value: '31,5 Jahre', label: 'Durchschnittsalter – junge, urbane Zielgruppe' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-[#b48e57] font-bold text-xl min-w-[100px]" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img src={IMAGES.istanbul} alt="Istanbul Café Kultur" className="rounded-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-[#b48e57] rounded-xl p-6 shadow-2xl max-w-xs">
                  <div className="text-white font-bold text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>3 Phasen</div>
                  <div className="text-white/80 text-sm mt-1">Expansionsplan 2025-2027</div>
                  <div className="text-white/60 text-xs mt-3">Istanbul → Ankara → İzmir → Antalya → Bodrum</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Franchise Models */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Franchise-Modelle</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Drei flexible Konzepte
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Wählen Sie das Modell, das zu Ihrem Budget und Standort passt.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Brew Blend Café',
                  subtitle: 'Flaggschiff',
                  area: '80-150 m²',
                  seats: '30-60 Gäste',
                  equipment: 'Siebträger, 2 Mahlwerke, Kühlschrank, POS, Getränke-Kühlung, Spüle',
                  features: [
                    'Vollständige Barista-Bar',
                    'Skandinavisches Premium-Design',
                    'Komplettes Sortiment',
                    'Bohnen-Retail-Bereich',
                    'Community Events & Tastings',
                  ],
                  recommended: true,
                },
                {
                  title: 'Brew Blend Express',
                  subtitle: 'High-Frequency',
                  area: '30-60 m²',
                  seats: '8-15 Plätze',
                  equipment: 'Kompakter Siebträger, Mahlwerk, Kühlung, POS, Barista-Arbeitsplatz',
                  features: [
                    'Fokus Take-Away',
                    'Kompaktes Equipment',
                    'Schneller Service',
                    'Ausgewähltes Gebäck',
                    'Bohnen-Retail',
                  ],
                  recommended: false,
                },
                {
                  title: 'Brew Blend Corner',
                  subtitle: 'Shop-in-Shop',
                  area: '10-25 m²',
                  seats: 'Stehplätze',
                  equipment: 'Kaffee-Take-away-Station, kleine Espressomaschine, Mini-Kühlung, POS',
                  features: [
                    'In bestehenden Geschäften',
                    'Hotels & Bürogebäude',
                    'Minimales Setup',
                    'Kaffee-to-Go',
                    'Bohnenverkauf',
                  ],
                  recommended: false,
                },
              ].map((model, i) => (
                <div key={i} className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${model.recommended ? 'bg-[#1a1a1a] text-white shadow-2xl ring-2 ring-[#b48e57]' : 'bg-white shadow-lg border border-gray-100'}`}>
                  {model.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b48e57] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Empfohlen
                    </div>
                  )}
                  <div className={`text-sm font-semibold tracking-wider uppercase ${model.recommended ? 'text-[#b48e57]' : 'text-[#b48e57]'}`}>{model.subtitle}</div>
                  <h3 className="text-2xl font-bold mt-2 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{model.title}</h3>
                  <div className={`flex gap-4 mb-6 text-sm ${model.recommended ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{model.area}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" />{model.seats}</span>
                  </div>
                  <ul className="space-y-3">
                    {model.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${model.recommended ? 'text-[#b48e57]' : 'text-green-500'}`} />
                        <span className={model.recommended ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-6 rounded-2xl p-4 ${model.recommended ? 'bg-[#191919]/80' : 'bg-[#f6f3ed]'}`}>
                    <p className={`text-sm font-semibold mb-2 ${model.recommended ? 'text-[#b48e57]' : 'text-[#b48e57]'}`}>Standard-Ausstattung</p>
                    <p className={`text-sm ${model.recommended ? 'text-gray-200' : 'text-gray-600'}`}>{model.equipment}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="/investition" className="inline-flex items-center gap-2 justify-center bg-[#b48e57] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-[#b48e57]/20 transition hover:bg-[#9a7848]">
                Alle Investitionsdetails anzeigen
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 px-6 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Voraussetzungen</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Anforderungen an Partner
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Was Sie als Franchise-Partner mitbringen müssen
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Persönliche Anforderungen',
                  color: 'from-amber-500 to-orange-600',
                  items: [
                    'Min. 3 Jahre unternehmerische Erfahrung',
                    'Leidenschaft für Kaffee & Premium-Gastronomie',
                    'Aktive operative Mitarbeit (Anfangsphase)',
                    'Führungskompetenz & Personalerfahrung',
                    'Türkisch (Muttersprache) + Englisch',
                    'Schulung in Deutschland (2-4 Wochen)',
                    'Polizeiliches Führungszeugnis',
                  ],
                },
                {
                  icon: DollarSign,
                  title: 'Finanzielle Anforderungen',
                  color: 'from-emerald-500 to-green-600',
                  items: [
                    'Eigenkapital: min. 40% der Investition',
                    'Liquide Mittel oder Finanzierungszusage',
                    'Positive Bonitätsauskunft (Findeks)',
                    'Reserven für 6 Monate Betriebskosten',
                    'Keine Insolvenzverfahren',
                    'Vermögensnachweis',
                  ],
                },
                {
                  icon: Building2,
                  title: 'Geschäftliche Anforderungen',
                  color: 'from-blue-500 to-indigo-600',
                  items: [
                    'Gründung türk. Kapitalgesellschaft (Ltd. Şti.)',
                    'Gewerbeanmeldung & Gastronomie-Lizenz',
                    'Einhaltung der Brew Blend CI-Richtlinien',
                    'Exklusiver Warenbezug über Brew Blend',
                    'Standortgenehmigung durch HQ',
                    'Regelmäßige Qualitätsaudits',
                  ],
                },
              ].map((cat, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <cat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#b48e57] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Dokumente</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Erforderliche Unterlagen
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Checkliste aller Dokumente für die Franchise-Bewerbung
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Persönliche Dokumente',
                  icon: FileText,
                  items: [
                    'Aktueller Lebenslauf (CV) mit Foto',
                    'Reisepass oder Personalausweis (Kimlik)',
                    'Polizeiliches Führungszeugnis (Adli Sicil Belgesi)',
                    'Wohnsitznachweis (İkametgah Belgesi)',
                    'Min. 2 geschäftliche Referenzschreiben',
                  ],
                },
                {
                  title: 'Finanzielle Dokumente',
                  icon: DollarSign,
                  items: [
                    'Kontoauszüge der letzten 6 Monate',
                    'Steuererklärungen letzte 3 Jahre (Gelir Vergisi)',
                    'Eigenkapitalnachweis (Bankbestätigung)',
                    'Findeks-Bericht (Kredi Kayıt Bürosu)',
                    'Ggf. Finanzierungszusage (Kredi Onay Belgesi)',
                    'Vermögensübersicht',
                  ],
                },
                {
                  title: 'Geschäftliche Dokumente',
                  icon: Building2,
                  items: [
                    'Brew Blend Franchise-Bewerbungsformular',
                    'Businessplan mit 3-Jahres-Prognose',
                    'Standortanalyse & Marktrecherche',
                    'Ggf. Handelsregisterauszug (Ticaret Sicil Gazetesi)',
                    'Vergi Levhası (falls Unternehmer)',
                    'Motivationsschreiben',
                  ],
                },
                {
                  title: 'Nach Vertragsabschluss',
                  icon: ShieldCheck,
                  items: [
                    'Gesellschaftsvertrag (Şirket Ana Sözleşmesi)',
                    'Handelsregisterauszug (Ticaret Sicil Belgesi)',
                    'Steuernummer (Vergi Kimlik Numarası)',
                    'Gastronomie-Lizenz (İşyeri Açma Ruhsatı)',
                    'Gesundheitszeugnisse (Sağlık Raporu)',
                    'Hygienezertifikat (Hijyen Eğitim Belgesi)',
                    'Brandschutzgenehmigung (Yangın Güvenlik)',
                    'Mietvertrag oder Eigentumsurkunde (Tapu)',
                  ],
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className="bg-[#faf9f7] rounded-2xl overflow-hidden border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => toggleSection(`doc-${i}`)}
                >
                  <div className="flex items-center justify-between p-6 bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#b48e57]/10 flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-[#b48e57]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#1a1a1a]">{section.title}</h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeSection === `doc-${i}` ? 'rotate-180' : ''}`} />
                  </div>
                  <div className={`transition-all duration-300 overflow-hidden ${activeSection === `doc-${i}` ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="p-6 space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#b48e57] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Requirements */}
        <section className="py-20 px-6 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src={IMAGES.interior} alt="Coffee Shop Interior" className="rounded-2xl w-full h-[450px] object-cover" />
              </div>
              <div>
                <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Standort</span>
                <h2 className="text-4xl font-bold text-white mt-3 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Standort-<br />anforderungen
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: 'A-Lage oder starke B-Lage, min. 5.000 Passanten/Tag' },
                    { icon: Building2, text: 'Mindestens 80 m² (Modell A) inkl. Lager & Personal' },
                    { icon: Target, text: 'Nähe zu Büros, Unis, Shopping-Centern oder Touristenzielen' },
                    { icon: Zap, text: 'Starkstromanschluss (380V), Wasseranschluss, Belüftung' },
                    { icon: Clock, text: 'Mietvertrag min. 5 Jahre, Deckenhöhe min. 3,00 m' },
                    { icon: Heart, text: 'Barrierefreier Zugang gem. türkischer Bauordnung' },
                  ].map((req, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                      <req.icon className="w-5 h-5 text-[#b48e57] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training & Support */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Support</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Schulung & Betreuung
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: 'Initiale Schulung',
                  desc: '2-4 Wochen Intensivtraining in Deutschland',
                  items: [
                    'SCA-zertifizierte Barista-Ausbildung',
                    'Kaffee-Sensorik & Cupping',
                    'BWL: Kalkulation & Controlling',
                    'Personalführung & Service',
                    'HACCP & Hygieneschulung',
                    'Marketing & Social Media',
                  ],
                },
                {
                  icon: Building2,
                  title: 'Pre-Opening',
                  desc: 'Volle Unterstützung vor der Eröffnung',
                  items: [
                    'Standortbewertung & Genehmigung',
                    'Store-Design & 3D-Visualisierung',
                    'Behördengänge & Genehmigungen',
                    'Team-Rekrutierung & Schulung',
                    'Equipment-Beschaffung',
                    'Soft-Opening mit Support-Team',
                  ],
                },
                {
                  icon: Star,
                  title: 'Laufender Support',
                  desc: 'Kontinuierliche Begleitung',
                  items: [
                    'Persönlicher Franchise-Manager',
                    'Quartalsweise Qualitätsaudits',
                    '24/7 Support-Hotline',
                    'Regelmäßige Produktschulungen',
                    'Brew Blend Academy Online',
                    'Jährliche Partner-Konferenz',
                  ],
                },
              ].map((block, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-[#b48e57]/10 flex items-center justify-center mb-6">
                    <block.icon className="w-7 h-7 text-[#b48e57]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{block.title}</h3>
                  <p className="text-[#b48e57] text-sm font-medium mb-6">{block.desc}</p>
                  <ul className="space-y-3">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 px-6 bg-[#faf9f7]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#b48e57] text-sm font-semibold tracking-[0.3em] uppercase">Ihr Weg</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Nächste Schritte
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: '01', title: 'Erstkontakt & Informationsgespräch', desc: 'Unverbindliches Gespräch mit unserem Expansionsteam' },
                { step: '02', title: 'Bewerbung einreichen', desc: 'Vollständige Unterlagen an das Franchise-Team senden' },
                { step: '03', title: 'Prüfung & Interview', desc: 'Persönliches Gespräch vor Ort oder per Videokonferenz' },
                { step: '04', title: 'Discovery Day', desc: 'Besuch in Deutschland: Brew Blend & Rösterei hautnah erleben' },
                { step: '05', title: 'Standortsuche', desc: 'Gemeinsame Identifikation des optimalen Standorts' },
                { step: '06', title: 'Vertragsunterzeichnung', desc: 'Franchise-Vertrag und Zahlung der Lizenzgebühr' },
                { step: '07', title: 'Schulung & Aufbau', desc: 'Intensivtraining + paralleler Store-Aufbau in der Türkei' },
                { step: '08', title: 'Grand Opening', desc: 'Feierliche Eröffnung mit vollem Marketing-Support!' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-x-1">
                  <div className="w-14 h-14 rounded-full bg-[#b48e57]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#b48e57] font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-lg">{s.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#b48e57] ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA & Contact */}
        <section className="py-20 px-6 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={IMAGES.roasting} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Coffee className="w-16 h-16 text-[#b48e57] mx-auto mb-8" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Werden Sie Teil der<br /><span className="text-[#b48e57]">Brew Blend Familie</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Starten Sie Ihre Reise als Brew Blend Franchise-Partner in der Türkei. 
              Kontaktieren Sie unser Expansionsteam für ein unverbindliches Erstgespräch.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10">
              <a href="mailto:franchise@brew-blend.de" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl p-5 transition-colors">
                <Mail className="w-5 h-5 text-[#b48e57]" />
                <span className="text-white">franchise@brew-blend.de</span>
              </a>
              <a href="tel:+4900000000" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl p-5 transition-colors">
                <Phone className="w-5 h-5 text-[#b48e57]" />
                <span className="text-white">Jetzt anrufen</span>
              </a>
            </div>

            <button
              onClick={generatePDF}
              disabled={generating}
              className="inline-flex items-center gap-3 bg-[#b48e57] hover:bg-[#9a7848] text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl shadow-[#b48e57]/30 disabled:opacity-50"
            >
              <Download className="w-6 h-6" />
              {generating ? 'PDF wird erstellt...' : 'Komplettes Franchise-Konzept als PDF herunterladen'}
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#111] py-8 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Coffee className="w-5 h-5 text-[#b48e57]" />
              <span className="text-white font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>BREW BLEND</span>
              <span className="text-gray-600 text-sm">GmbH</span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              © 2025 Brew Blend GmbH – Alle Rechte vorbehalten | Dieses Dokument ist vertraulich
            </p>
            <a href="https://brew-blend.de" target="_blank" rel="noopener noreferrer" className="text-[#b48e57] text-sm hover:underline">
              brew-blend.de
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
