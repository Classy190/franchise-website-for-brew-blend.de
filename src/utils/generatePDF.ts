import jsPDF from 'jspdf';

export const generateFranchisePDF = async () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let y = margin;

  const addNewPage = () => {
    pdf.addPage();
    y = margin;
  };

  const checkPageBreak = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      addNewPage();
    }
  };

  const sectionHeader = (num: string, title: string) => {
    checkPageBreak(20);
    pdf.setFillColor(180, 142, 87);
    pdf.rect(margin, y, 40, 2, 'F');
    y += 10;
    pdf.setTextColor(180, 142, 87);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text(num, margin, y);
    pdf.setTextColor(26, 26, 26);
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text(title, margin + 8, y);
    y += 15;
  };

  const subHeading = (text: string) => {
    checkPageBreak(12);
    pdf.setTextColor(26, 26, 26);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text(text, margin, y);
    y += 10;
  };

  const bodyText = (text: string) => {
    pdf.setTextColor(80, 80, 80);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    const lines = pdf.splitTextToSize(text, contentWidth);
    checkPageBreak(lines.length * 4.5 + 3);
    pdf.text(lines, margin, y);
    y += lines.length * 4.5 + 3;
  };

  const bulletPoint = (text: string) => {
    checkPageBreak(10);
    pdf.setTextColor(180, 142, 87);
    pdf.setFontSize(9);
    pdf.text('▪', margin + 2, y);
    pdf.setTextColor(60, 60, 60);
    pdf.setFont('helvetica', 'normal');
    const lines = pdf.splitTextToSize(text, contentWidth - 12);
    pdf.text(lines, margin + 10, y);
    y += lines.length * 4.5 + 2;
  };

  // ===== PAGE 1: COVER =====
  pdf.setFillColor(26, 26, 26);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
  pdf.setFillColor(180, 142, 87);
  pdf.rect(margin, 30, 60, 2, 'F');

  pdf.setTextColor(180, 142, 87);
  pdf.setFontSize(13);
  pdf.setFont('helvetica', 'normal');
  pdf.text('FRANCHISE-KONZEPT 2025', margin, 45);

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(42);
  pdf.setFont('helvetica', 'bold');
  pdf.text('BREW BLEND', margin, 75);

  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Premium Specialty Coffee in der Türkei', margin, 100);

  pdf.setTextColor(200, 200, 200);
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.text('World\'s Finest Single-Origin Kaffeebohnen', margin, 120);
  pdf.text('Direct Trade • Nachhaltigkeit • Handwerk', margin, 128);

  pdf.setFillColor(40, 40, 40);
  pdf.rect(margin, 180, contentWidth, 60, 'F');
  
  pdf.setTextColor(180, 142, 87);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Expansionsbasis: ANTALYA', margin + 8, 195);
  
  pdf.setTextColor(200, 200, 200);
  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Als strategische Zentrale in Antalya können Sie modular in Istanbul, Ankara,', margin + 8, 207);
  pdf.text('İzmir und weitere Städte expandieren. Unser Geschäftsmodell erlaubt es Ihnen,', margin + 8, 214);
  pdf.text('von einer zentralen Distributionsstelle aus mehrere Standorte gleichzeitig zu', margin + 8, 221);
  pdf.text('betreiben und somit von Economies of Scale zu profitieren.', margin + 8, 228);

  pdf.setTextColor(120, 120, 120);
  pdf.setFontSize(8);
  pdf.text('www.brew-blend.de | franchise@brew-blend.de', margin, pageHeight - 12);
  pdf.text('© 2025 Brew Blend GmbH – Vertrauliches Geschäftsdokument', margin, pageHeight - 8);

  // ===== PAGE 2: TABLE OF CONTENTS =====
  addNewPage();
  
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
  pdf.setFillColor(180, 142, 87);
  pdf.rect(margin, y, 40, 2, 'F');
  y += 12;

  pdf.setTextColor(26, 26, 26);
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Inhaltsverzeichnis', margin, y);
  y += 20;

  const tocItems = [
    '01. Über Brew Blend',
    '02. Der türkische Kaffeemarkt',
    '03. Expansionsstrategie mit Antalya als Basis',
    '04. Franchise-Modelle im Vergleich',
    '05. Investitionsübersicht & Finanzierung',
    '06. Anforderungen an Sie als Franchisenehmer',
    '07. Erforderliche Unterlagen',
    '08. Standortstrategie',
    '09. Was Sie monatlich verdienen – Ertragsprognose',
    '10. Was die Zentrale erhält vs. was Sie erhalten',
    '11. Schulung & Support',
    '12. Marketing & Markenführung',
    '13. Die nächsten Schritte & Kontakt',
  ];

  tocItems.forEach((item) => {
    pdf.setTextColor(60, 60, 60);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text(item, margin + 5, y);
    y += 9;
  });

  // ===== PAGE 3: ABOUT BREW BLEND =====
  addNewPage();
  sectionHeader('01', 'Über Brew Blend');
  
  bodyText('Brew Blend ist ein Premium-Specialty-Coffee-Unternehmen mit Basis in Deutschland. Wir importieren handverlesene Single-Origin Kaffeebohnen von über 20 faszinierenden Ursprüngen weltweit und rösten diese in Partnerschaft mit einer etablierten dänischen Slow-Crafted-Rösterei.');

  subHeading('Was macht uns besonders?');
  bulletPoint('SCA 80+ Qualitätsstandard – die höchste Kaffeeklassifikation');
  bulletPoint('Direct-Trade-Modell: Faire Löhne, langfristige Partnerschaften, volle Transparenz');
  bulletPoint('Innovative 333g Aromafrische-Verpackung mit patentiertem Design');
  bulletPoint('Kombinierte Gastronomie + Retail-Konzept (Bohnen zum Mitnehmen)');
  bulletPoint('Kompletter Support vom Store-Design bis zur Marketing-Kampagne');

  // ===== PAGE 4: MARKET =====
  addNewPage();
  sectionHeader('02', 'Der türkische Kaffeemarkt');
  
  bodyText('Die Türkei ist einer der vielversprechendsten Märkte für Specialty Coffee in Europa und Asien. Mit über 85 Millionen Einwohnern, einer tiefen Kaffeekultur und rasant wachsendem Einkommen ist jetzt der ideale Zeitpunkt.');

  subHeading('Marktchancen');
  bulletPoint('Kaffeemarkt-Volumen: ~2,5 Mrd. USD, wachsend um 12-15% jährlich');
  bulletPoint('Specialty Coffee wächst: +20-25% pro Jahr');
  bulletPoint('45.000+ Cafés landesweit, über 15.000 allein in Istanbul');
  bulletPoint('Durchschnittsalter 31,5 Jahre – junge, urbane, digitalaffine Kundschaft');
  bulletPoint('Tourismussektor: 45+ Mio. Besucher pro Jahr (Antalya: 15+ Mio. allein!)');

  subHeading('Warum Antalya als Basis?');
  bulletPoint('Eines der TOP Touristenziele der Welt mit ganzjährig hohen Besucherzahlen');
  bulletPoint('Luxussegment stark vertreten – Bereitschaft für Premium-Kaffee');
  bulletPoint('Zentrale geografische Position für Expansion in andere Städte');
  bulletPoint('Established infrastructure & internationales Geschäftsumfeld');
  bulletPoint('Bereits viele internationale Marken mit Headquarters in Antalya');

  // ===== PAGE 5: EXPANSION STRATEGY =====
  addNewPage();
  sectionHeader('03', 'Expansionsstrategie mit Antalya als Basis');
  
  bodyText('Wir empfehlen Antalya als strategische Zentrale. Von dort aus bauen Sie ein Multi-Unit Portfolio auf:');

  subHeading('Phase 1 (Jahr 1): Antalya Flagship + Istanbul Start');
  bulletPoint('Brew Blend Flagship-Café in Antalya (80-150 m²)');
  bulletPoint('Zentrallager, Schulungscenter und HQ in Antalya');
  bulletPoint('1-2 Express-Standorte in Istanbul parallel');

  subHeading('Phase 2 (Jahr 2-3): Regionale Expansion');
  bulletPoint('2-3 weitere Standorte in Istanbul');
  bulletPoint('1 Standort in Ankara oder İzmir');
  bulletPoint('Beach-Clubs oder Hotels in Bodrum, Çeşme');

  subHeading('Phase 3 (Jahr 4+): Multi-City Portfolio');
  bulletPoint('Ziel: 8-12 Brew Blend Punkte im ganzen Land');
  bulletPoint('Jeder Standort profitiert von zentralisierten Einkäufen & Schulungen');
  bulletPoint('Ggf. Lizenzierung weiterer lokaler Unternehmer unter Ihrer Region');

  // ===== PAGE 6: MODELS =====
  addNewPage();
  sectionHeader('04', 'Franchise-Modelle im Vergleich');
  
  const models = [
    { name: 'Modell A: Café', size: '80-150 m²', seats: '30-60', cost: '120-180 K€', desc: 'Premium-Gastro mit Full Barista-Bar, Retail, höchste Profitabilität' },
    { name: 'Modell B: Express', size: '30-60 m²', seats: '8-15', cost: '60-100 K€', desc: 'Take-Away-fokussiert, hohe Frequenzlagen, schneller ROI' },
    { name: 'Modell C: Corner', size: '10-25 m²', seats: 'Stehplätze', cost: '30-55 K€', desc: 'Shop-in-Shop, Hotels/Büros, minimales Setup' },
  ];

  models.forEach((model) => {
    checkPageBreak(16);
    pdf.setFillColor(245, 240, 230);
    pdf.rect(margin, y - 2, contentWidth, 14, 'F');
    
    pdf.setTextColor(26, 26, 26);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text(model.name, margin + 4, y + 2);
    
    pdf.setTextColor(100, 100, 100);
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${model.size} | ${model.seats} Plätze | ${model.cost}`, margin + 4, y + 8);
    
    pdf.setTextColor(60, 60, 60);
    const lines = pdf.splitTextToSize(model.desc, contentWidth - 8);
    pdf.text(lines, margin + 4, y + 12);
    
    y += 16;
  });

  // ===== PAGE 7: INVESTMENT =====
  addNewPage();
  sectionHeader('05', 'Investitionsübersicht (Modell A - Café)');
  
  const investRows = [
    ['Franchise-Lizenz', '25.000 €'],
    ['Store-Design & Umbau', '45.000-70.000 €'],
    ['Equipment (Siebträger, Mühlen)', '20.000-35.000 €'],
    ['Möbel, Beleuchtung, Dekor', '12.000-18.000 €'],
    ['POS-System & IT', '4.000-6.000 €'],
    ['Erstbestand & Zubehör', '5.000-8.000 €'],
    ['Marketing & Grand-Opening', '5.000-8.000 €'],
    ['Team-Schulung (Deutschland)', '3.000-5.000 €'],
    ['Lizenzen & Genehmigungen', '2.000-4.000 €'],
    ['Reserve & Puffer', '10.000-15.000 €'],
  ];

  investRows.forEach((row) => {
    checkPageBreak(7);
    pdf.setTextColor(60, 60, 60);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text(row[0], margin + 2, y);
    pdf.setFont('helvetica', 'bold');
    pdf.text(row[1], pageWidth - margin - 2, y, { align: 'right' });
    y += 7;
  });

  y += 3;
  pdf.setFillColor(26, 26, 26);
  pdf.rect(margin, y - 3, contentWidth, 8, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('GESAMTINVESTITION', margin + 2, y);
  pdf.text('120.000 – 180.000 €', pageWidth - margin - 2, y, { align: 'right' });
  y += 12;

  subHeading('Laufende monatliche Gebühren');
  bulletPoint('Franchise-Gebühr: 5% vom Nettoumsatz');
  bulletPoint('Marketing-Beitrag: 2% vom Nettoumsatz');
  bulletPoint('Kaffeebohnen-Bezug exklusiv über Brew Blend');

  // ===== PAGE 8: REQUIREMENTS =====
  addNewPage();
  sectionHeader('06', 'Anforderungen an Sie als Franchisenehmer');
  
  subHeading('Geschäftliche Anforderungen');
  bulletPoint('Min. 3 Jahre Erfahrung als Unternehmer/Führungskraft');
  bulletPoint('Eigenkapital: 40% der Investition (~50-72 K€ für Modell A)');
  bulletPoint('Finanzierungszusage oder liquide Mittel für Restbetrag');
  bulletPoint('Gründung einer türkischen Kapitalgesellschaft');

  subHeading('Persönliche Anforderungen');
  bulletPoint('Leidenschaft für Premium-Kaffee & Gastronomie');
  bulletPoint('Bereitschaft zur aktiven Mitarbeit (erste 6-12 Monate)');
  bulletPoint('Gutes Deutsch + fließend Türkisch');
  bulletPoint('Führungskompetenz & Personalerfahrung');
  bulletPoint('Bereitschaft zu 2-4 Wochen Schulung in Deutschland');

  // ===== PAGE 9: EARNINGS TABLE 1 =====
  addNewPage();
  sectionHeader('09', 'Was Sie monatlich verdienen – Realistische Prognose');
  
  bodyText('JAHR 1-2: Aufbau- & Wachstumsphase (monatliche Durchschnitte)');
  
  y += 5;
  const year12Rows = [
    ['Position', 'Monat 3-6 (Start)', 'Monat 7-12 (Anlauf)', 'Jahr 2 (Vollauslastung)'],
    ['Bruttoumsatz', '18.000 €', '25.000 €', '35.000 €'],
    ['Wareneinsatz (-30%)', '-5.400 €', '-7.500 €', '-10.500 €'],
    ['Personalkosten (-25%)', '-6.000 €', '-8.000 €', '-8.750 €'],
    ['Miete & NK (-11%)', '-3.000 €', '-3.200 €', '-3.200 €'],
    ['Franchise-Gebühr (-5%)', '-900 €', '-1.250 €', '-1.750 €'],
    ['Marketing-Beitrag (-2%)', '-360 €', '-500 €', '-700 €'],
    ['Sonstige Kosten (-5%)', '-1.200 €', '-1.300 €', '-1.400 €'],
    ['▼ NETTO-GEWINN', '1.140 €', '3.250 €', '8.900 €'],
  ];

  let tableY = y;
  year12Rows.forEach((row, idx) => {
    const isHeader = idx === 0 || idx === year12Rows.length - 1;
    if (isHeader) {
      pdf.setFillColor(26, 26, 26);
      pdf.rect(margin, tableY - 4, contentWidth, 6, 'F');
      pdf.setTextColor(255, 255, 255);
    } else {
      if (idx % 2 === 0) {
        pdf.setFillColor(245, 240, 230);
        pdf.rect(margin, tableY - 4, contentWidth, 6, 'F');
      }
      pdf.setTextColor(60, 60, 60);
    }
    
    pdf.setFontSize(8);
    pdf.setFont('helvetica', isHeader ? 'bold' : 'normal');
    pdf.text(row[0], margin + 2, tableY);
    pdf.text(row[1], margin + 50, tableY);
    pdf.text(row[2], margin + 95, tableY);
    pdf.text(row[3], pageWidth - margin - 2, tableY, { align: 'right' });
    tableY += 6;
  });

  y = tableY + 8;

  bodyText('Jahr 3+: Bei 45.000 € Bruttoumsatz monatlich erreichen Sie einen stabilen Nettogewinn von 12.200+ € pro Monat. Bei Multi-Unit-Betrieb (2-3 Standorte) multiplizieren sich diese Zahlen entsprechend. Break-Even typischerweise Monat 12-14, Amortisation in 24-36 Monaten.');

  // ===== PAGE 10: REVENUE SPLIT =====
  addNewPage();
  sectionHeader('10', 'Was die Zentrale erhält vs. was Sie erhalten');
  
  bodyText('TRANSPARENTE WERTVERTEILUNG: Bei 30.000 € Bruttoumsatz/Monat');
  
  checkPageBreak(35);
  pdf.setFillColor(26, 26, 26);
  pdf.rect(margin, y - 2, (contentWidth - 5) / 2, 30, 'F');
  
  pdf.setTextColor(180, 142, 87);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('SIE ERHALTEN', margin + 5, y + 3);
  
  pdf.setTextColor(200, 200, 200);
  pdf.setFontSize(7.5);
  pdf.setFont('helvetica', 'normal');
  let boxY = y + 10;
  const yourBenefits = [
    '✓ Netto-Gewinn: ~5.800 € (19%)',
    '✓ Entwickeltes Business-Modell',
    '✓ Schulung & Onboarding',
    '✓ Marke & Corporate Design',
    '✓ Marketing-Kampagnen',
    '✓ Dedizierter Manager',
    '✓ 24/7 Support',
  ];
  
  yourBenefits.forEach((b) => {
    pdf.text(b, margin + 5, boxY);
    boxY += 4;
  });

  pdf.setFillColor(180, 142, 87);
  pdf.rect(margin + (contentWidth + 5) / 2, y - 2, (contentWidth - 5) / 2, 30, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('BREW BLEND ERHÄLT', margin + (contentWidth + 5) / 2 + 5, y + 3);
  
  pdf.setTextColor(220, 220, 220);
  pdf.setFontSize(7.5);
  pdf.setFont('helvetica', 'normal');
  boxY = y + 10;
  const brewBlendGets = [
    '✓ Franchise-Gebühr: 1.500 € (5%)',
    '✓ Marketing-Beitrag: 600 € (2%)',
    '✓ Gewinn auf Kaffee-Verkauf',
    '✓ Lizenzen & Brand Protection',
    '✓ Qualitätssicherung & Audits',
    '✓ Produktentwicklung',
    '✓ Zentrales Marketing',
  ];
  
  brewBlendGets.forEach((b) => {
    pdf.text(b, margin + (contentWidth + 5) / 2 + 5, boxY);
    boxY += 4;
  });

  y += 35;

  // ===== PAGE 11: SUPPORT =====
  addNewPage();
  sectionHeader('11', 'Schulung & Support');
  
  subHeading('Pre-Opening (3-4 Monate vor Eröffnung)');
  bulletPoint('2-4 Wochen Intensivtraining in Deutschland');
  bulletPoint('Barista-Zertifizierung (SCA-Standard)');
  bulletPoint('Kaffee-Sensorik & Cupping');
  bulletPoint('Betriebswirtschaft & Controlling');
  bulletPoint('Team-Schulung vor Ort in der Türkei');

  subHeading('Laufender Support (24/7)');
  bulletPoint('Dedizierter Franchise-Manager');
  bulletPoint('Quartalsweise Audits & Besuche');
  bulletPoint('Hotline & Email-Support jederzeit');
  bulletPoint('Regelmäßige Produktschulungen');
  bulletPoint('Jährliche Partner-Konferenz');

  // ===== PAGE 12: NEXT STEPS =====
  addNewPage();
  sectionHeader('13', 'Die nächsten Schritte');
  
  const steps = [
    { num: '01', title: 'Erstkontakt', desc: 'Unverbindliches Infogespräch mit unserem Franchise-Team' },
    { num: '02', title: 'Bewerbung', desc: 'Einreichung Ihrer Unterlagen und Geschäftsplan' },
    { num: '03', title: 'Prüfung', desc: 'Bewertung Ihrer Qualifikation und Finanzierung' },
    { num: '04', title: 'Interview', desc: 'Persönliches oder Video-Gespräch' },
    { num: '05', title: 'Discovery Day', desc: 'Besuch in Deutschland – erleben Sie Brew Blend live' },
    { num: '06', title: 'Standortsuche', desc: 'Gemeinsame Identifikation des optimalen Standorts' },
    { num: '07', title: 'Vertragsabschluss', desc: 'Unterzeichnung & Lizenzgebühr' },
    { num: '08', title: 'Schulung & Aufbau', desc: 'Training + paralleler Store-Aufbau' },
    { num: '09', title: 'Grand Opening!', desc: 'Feierliche Eröffnung mit vollem HQ-Support' },
  ];

  steps.forEach((step) => {
    checkPageBreak(14);
    pdf.setFillColor(245, 240, 230);
    pdf.rect(margin, y - 2, contentWidth, 12, 'F');
    
    pdf.setTextColor(180, 142, 87);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text(step.num, margin + 3, y + 2);
    
    pdf.setTextColor(26, 26, 26);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.text(step.title, margin + 15, y + 2);
    
    pdf.setTextColor(80, 80, 80);
    pdf.setFontSize(7.5);
    pdf.setFont('helvetica', 'normal');
    pdf.text(step.desc, margin + 15, y + 8);
    
    y += 14;
  });

  y += 8;
  checkPageBreak(30);
  
  pdf.setFillColor(26, 26, 26);
  pdf.rect(margin, y, contentWidth, 30, 'F');
  
  pdf.setTextColor(180, 142, 87);
  pdf.setFontSize(13);
  pdf.setFont('helvetica', 'bold');
  pdf.text('KONTAKT FRANCHISE-TEAM', margin + 8, y + 10);
  
  pdf.setTextColor(200, 200, 200);
  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Brew Blend GmbH', margin + 8, y + 18);
  pdf.text('E-Mail: franchise@brew-blend.de', margin + 8, y + 24);
  pdf.text('Web: www.brew-blend.de/franchise', margin + 8, y + 30);

  // Footer on all pages
  const totalPages = pdf.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    
    pdf.setDrawColor(230, 230, 230);
    pdf.line(margin, pageHeight - 18, pageWidth - margin, pageHeight - 18);
    
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(7);
    pdf.text('BREW BLEND – Premium Specialty Coffee Franchise Türkei', margin, pageHeight - 12);
    
    pdf.setTextColor(180, 180, 180);
    pdf.text(`${i} / ${totalPages}`, pageWidth - margin, pageHeight - 12, { align: 'right' });
    
    pdf.setTextColor(160, 160, 160);
    pdf.text('© 2025 Brew Blend GmbH – Vertrauliches Dokument', margin, pageHeight - 8);
  }

  pdf.save('Brew-Blend-Franchise-Konzept-Tuerkei-2025.pdf');
};
