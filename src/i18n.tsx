import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'DE' | 'TR';

export const translations = {
  DE: {
    nav: {
      home: 'Startseite',
      invest: 'Investition',
      about: 'Über uns',
      contact: 'Kontakt',
      faq: 'FAQ',
      legal: 'Rechtliches',
    },
    footer: {
      company: 'Brew Blend',
      description: 'Premium Specialty Coffee Franchise - Gründungsstandort: Antalya, Muratpaşa',
      quickAccess: 'Schnellzugriff',
      service: 'Service',
      contact: 'Kontakt',
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Antalya, Muratpaşa, Türkei',
      home: 'Startseite',
      invest: 'Investition',
      about: 'Über uns',
      contactLink: 'Kontakt',
      faq: 'FAQ',
      legal: 'Rechtliches',
      copyright: '© {year} Brew Blend Franchise Türkei. Alle Rechte vorbehalten.',
    },
    header: {
      franchise: 'Franchise',
      de: 'DE',
      tr: 'TR',
    },
    home: {
      heroLabel: 'Internationale Expansion 2025',
      heroTitle: 'Brew Blend Franchise in der Türkei',
      heroSubtitle: 'Premium Specialty Coffee für urbane Standorte in Istanbul, Ankara, İzmir und touristischen Regionen.',
      heroCta: 'Investition ansehen',
      heroSecondary: 'Kontakt aufnehmen',
      stats: [
        { label: 'Marktwachstum', value: '+20% p.a.' },
        { label: 'Standorte', value: 'Istanbul, Ankara, İzmir' },
        { label: 'Investition', value: 'Ab 140.000 €' },
      ],
      highlights: [
        {
          title: 'Premium-Positionierung',
          description: 'Skandinavisches Design und sorgfältig ausgewählte Specialty Coffee Markenkommunikation.',
        },
        {
          title: 'Türkischer Wachstumsmotor',
          description: 'Hoher Bedarf an Premium-Kaffee in urbanen Metropolen und touristischen Regionen.',
        },
        {
          title: 'Vollständiges Franchise-Paket',
          description: 'Konzept, Schulung, Marketing und laufender Support für Ihren Erfolg.',
        },
      ],
      sections: [
        {
          title: 'Ihr Einstieg',
          text: 'Mit Brew Blend profitieren Sie von einer starken Marke, professioneller Prozessführung und einem definierten Expansionsplan für die Türkei.',
        },
        {
          title: 'Unsere Werte',
          text: 'Nachhaltigkeit, Qualität und Transparenz sind das Fundament für langfristigen Franchise-Erfolg.',
        },
      ],
      pdfText: 'Franchise-Konzept als PDF herunterladen',
    },
    invest: {
      pageLabel: 'Investitionsdetails',
      back: 'Zurück zur Startseite',
      title: 'Marktangepasste Investitionsübersicht für Brew Blend Türkei',
      subtitle: 'Reale lokale Werte für Standortwahl, Kosten und Franchisemodelle in TL und Euro.',
      cards: [
        { title: 'Gesamtinvestition', value: '4,5 – 6,5 Mio. TL / 140.000 – 205.000 €' },
        { title: 'Geschäftsmodell', value: 'Flaggschiff Café' },
        { title: 'Transparenz', value: 'Standort & Kosten lokal' },
      ],
      overviewTitle: 'Türkischer Franchise-Markt im Überblick',
      overviewCards: [
        {
          title: 'Wachstumsmarkt',
          text: 'Specialty Coffee gewinnt in der Türkei stark an Bedeutung, insbesondere in Großstädten und Touristenzentren.',
        },
        {
          title: 'Lokale Nachfrage',
          text: 'Räume mit hoher Frequenz und anspruchsvollem Publikum sind bestens geeignet.',
        },
        {
          title: 'Touristische Stärke',
          text: 'Ganzjährige Besucherströme stärken das Umsatzpotenzial in beliebten Regionen.',
        },
      ],
      structureTitle: 'Investitionsstruktur',
      structureItems: [
        { label: 'Franchise-Lizenz', value: '450.000 TL / ~14.000 €' },
        { label: 'Einrichtung & Design', value: '1.200.000 – 1.900.000 TL / ~37.000 – 60.000 €' },
        { label: 'Equipment', value: '900.000 – 1.300.000 TL / ~28.000 – 41.000 €' },
        { label: 'Startvorrat', value: '200.000 – 300.000 TL / ~6.000 – 9.500 €' },
        { label: 'POS & IT', value: '120.000 – 180.000 TL / ~3.700 – 5.700 €' },
        { label: 'Marketing & Schulung', value: '220.000 – 340.000 TL / ~6.800 – 10.700 €' },
      ],
      total: '4,5 – 6,5 Mio. TL / 140.000 – 205.000 €',
      footer: 'Zahlen dienen als Orientierung und basieren auf konservativen Annahmen für die Türkei.',
    },
    about: {
      pageLabel: 'Über Brew Blend',
      back: 'Zurück zur Startseite',
      title: 'Brew Blend Franchise in der Türkei',
      subtitle: 'Premium Specialty Coffee trifft modernes Café-Erlebnis. Ihr Franchise-Partner für langfristiges Wachstum.',
      cards: [
        { title: 'Unsere Mission', text: 'Wir bringen Specialty Coffee mit nachhaltigem Franchise-Konzept in die Türkei.' },
        { title: 'Unsere Werte', text: 'Qualität, Transparenz und Design stehen im Mittelpunkt unseres Systems.' },
        { title: 'Ihr Partner', text: 'Unterstützung bei Einkauf, Training und Marktaufbau für Ihre Eröffnung.' },
      ],
      whyTitle: 'Warum Brew Blend in der Türkei?',
      bullets: [
        'Stark wachsender Premium-Kaffeemarkt',
        'Skandinavische Markenpositionierung für ein gehobenes Publikum',
        'Direkter Zugang zu Premium-Bohnen und verlässlicher Lieferkette',
      ],
    },
    contact: {
      pageLabel: 'Kontakt',
      back: 'Zurück zur Startseite',
      title: 'Ihr Kontakt zum Brew Blend Franchise-Team',
      subtitle: 'Wir begleiten Sie von der ersten Anfrage bis zur Eröffnung Ihres Brew Blend Standorts in der Türkei.',
      contactCards: [
        { label: 'E-Mail', value: 'franchise@brew-blend.de' },
        { label: 'Telefon', value: '+90 212 000 0000' },
        { label: 'Adresse', value: 'Antalya, Muratpaşa / Türkei' },
      ],
      intro: 'Schreiben Sie uns direkt und wir melden uns zeitnah mit einer passenden Beratung für Ihr Franchise-Projekt.',
      quickContactTitle: 'Schnellkontakt',
      quickContactDescription: 'Schreiben Sie uns direkt und wir melden uns zeitnah mit einer passenden Beratung für Ihr Franchise-Projekt.',
      processTitle: 'So gehen wir vor',
      processSteps: [
        '1. Erstkontakt und Bedarfsanalyse',
        '2. Individuelles Beratungsgespräch',
        '3. Standort- und Budgetanalyse',
        '4. Bewerbungsunterlagen und Vertragsdetails',
        '5. Start der Vorbereitung und Eröffnungsvorbereitung',
      ],
    },
    faq: {
      pageLabel: 'FAQ',
      back: 'Zurück zur Startseite',
      title: 'Häufige Fragen zum Brew Blend Franchise',
      subtitle: 'Wichtige Antworten zu Standort, Kosten, Vertrag und Markteintritt in der Türkei.',
      items: [
        {
          question: 'Wie hoch ist die Mindestinvestition?',
          answer: 'Für ein Flaggschiff-Café rechnen wir mit 4,5 – 6,5 Mio. TL / 140.000 – 205.000 € inklusive Einrichtung, Equipment und Marketing.',
        },
        {
          question: 'Welche Franchise-Gebühr fällt an?',
          answer: 'Die laufende Franchise-Gebühr beträgt 5% vom Nettoumsatz; zusätzlich wird ein Marketingbeitrag von 2% erhoben.',
        },
        {
          question: 'Welche Standortgröße wird empfohlen?',
          answer: 'Für ein Café empfehlen wir mindestens 90 m², für Express-Formate 45 m² und für Corner-Stationen 18 m².',
        },
        {
          question: 'Welche rechtlichen Anforderungen sind wichtig?',
          answer: 'Sie benötigen eine Gewerbeanmeldung, Gastronomielizenz, eine lokale Gesellschaft sowie Registrierung bei SGK und Steuerbehörden.',
        },
        {
          question: 'Wie unterstützt Brew Blend beim Markteintritt?',
          answer: 'Wir begleiten Sie mit Standortanalyse, Schulung, Strategie, Marketingmaterialien und laufendem Support.',
        },
      ],
    },
    legal: {
      pageLabel: 'Rechtliches',
      back: 'Zurück zur Startseite',
      title: 'Impressum & Datenschutz',
      subtitle: 'Alle rechtlichen Informationen zum Franchise-Angebot in der Türkei.',
      impressumTitle: 'Impressum',
      impressumLines: [
        'Brew Blend Franchise Türkiye',
        'Adresse: Antalya, Muratpaşa, Türkiye',
        'E-Mail: franchise@brew-blend.de',
        'Telefon: +90 212 000 0000',
      ],
      privacyTitle: 'Datenschutz',
      privacyLines: [
        'Wir behandeln Ihre Daten vertraulich und verwenden sie nur zur Bearbeitung Ihrer Anfrage.',
        'Ihre Daten werden nicht ohne Ihre Zustimmung weitergegeben.',
      ],
    },
  },
  TR: {
    nav: {
      home: 'Anasayfa',
      invest: 'Yatırım',
      about: 'Hakkımızda',
      contact: 'İletişim',
      faq: 'SSS',
      legal: 'Hukuki',
    },
    footer: {
      company: 'Brew Blend',
      description: 'Premium Specialty Coffee Franchise - Kuruluş Merkezi: Antalya, Muratpaşa',
      quickAccess: 'Hızlı Erişim',
      service: 'Hizmet',
      contact: 'İletişim',
      email: 'E-posta',
      phone: 'Telefon',
      location: 'Antalya, Muratpaşa, Türkiye',
      home: 'Anasayfa',
      invest: 'Yatırım',
      about: 'Hakkımızda',
      contactLink: 'İletişim',
      faq: 'SSS',
      legal: 'Hukuki',
      copyright: '© {year} Brew Blend Franchise Türkiye. Tüm hakları saklıdır.',
    },
    header: {
      franchise: 'Franchise',
      de: 'DE',
      tr: 'TR',
    },
    home: {
      heroLabel: '2025 Uluslararası Büyüme',
      heroTitle: 'Brew Blend Franchise Türkiye',
      heroSubtitle: 'İstanbul, Ankara, İzmir ve turistik bölgelerde premium Specialty Coffee deneyimi.',
      heroCta: 'Yatırımı İncele',
      heroSecondary: 'İletişime Geç',
      stats: [
        { label: 'Pazar Büyümesi', value: 'Yıllık %20+' },
        { label: 'Konumlar', value: 'İstanbul, Ankara, İzmir' },
        { label: 'Yatırım', value: '140.000 €' },
      ],
      highlights: [
        {
          title: 'Premium Konumlandırma',
          description: 'İskandinav tasarımı ve seçkin Specialty Coffee iletişimi.',
        },
        {
          title: 'Türk Büyüme Motoru',
          description: 'Kentsel metropollerde ve turizm bölgelerinde yüksek talep.',
        },
        {
          title: 'Tam Franchise Paketi',
          description: 'Konsept, eğitim, pazarlama ve sürekli destek.',
        },
      ],
      sections: [
        {
          title: 'Başlangıç',
          text: 'Brew Blend ile güçlü bir marka, profesyonel süreçler ve Türkiye için planlanmış bir genişleme stratejisinden faydalanırsınız.',
        },
        {
          title: 'Değerlerimiz',
          text: 'Sürdürülebilirlik, kalite ve şeffaflık uzun vadeli başarımızın temelidir.',
        },
      ],
      pdfText: 'Franchise konseptini PDF olarak indir',
    },
    invest: {
      pageLabel: 'Yatırım Detayları',
      back: 'Anasayfaya Dön',
      title: 'Brew Blend Türkiye için Pazar Uyumlu Yatırım İncelemesi',
      subtitle: 'Lokasyon seçimi, maliyetler ve franchise modelleri için TL ve Euro cinsinden gerçek değerler.',
      cards: [
        { title: 'Toplam Yatırım', value: '4,5 – 6,5 Mio. TL / 140.000 – 205.000 €' },
        { title: 'İş Modeli', value: 'Amiral Gemisi Kafe' },
        { title: 'Şeffaflık', value: 'Yerel lokasyon ve maliyet bilgisi' },
      ],
      overviewTitle: 'Türk Franchise Pazarı Genel Bakış',
      overviewCards: [
        {
          title: 'Büyüyen Pazar',
          text: 'Specialty Coffee, özellikle büyük şehirlerde ve turistik merkezlerde hızla değer kazanıyor.',
        },
        {
          title: 'Yerel Talep',
          text: 'Yüksek trafik ve seçkin müşteri profiline sahip alanlar ideal.',
        },
        {
          title: 'Turistik Güç',
          text: 'Popüler bölgelerde yıl boyu ziyaretçi akışı gelir potansiyelini destekliyor.',
        },
      ],
      structureTitle: 'Yatırım Yapısı',
      structureItems: [
        { label: 'Franchise Lisansı', value: '450.000 TL / ~14.000 €' },
        { label: 'Dekorasyon & Tasarım', value: '1.200.000 – 1.900.000 TL / ~37.000 – 60.000 €' },
        { label: 'Ekipman', value: '900.000 – 1.300.000 TL / ~28.000 – 41.000 €' },
        { label: 'Başlangıç Stoku', value: '200.000 – 300.000 TL / ~6.000 – 9.500 €' },
        { label: 'POS & IT', value: '120.000 – 180.000 TL / ~3.700 – 5.700 €' },
        { label: 'Pazarlama & Eğitim', value: '220.000 – 340.000 TL / ~6.800 – 10.700 €' },
      ],
      total: '4,5 – 6,5 Mio. TL / 140.000 – 205.000 €',
      footer: 'Rakamlar Türkiye için yönlendirici olup muhafazakar varsayımlara dayanmaktadır.',
    },
    about: {
      pageLabel: 'Brew Blend Hakkında',
      back: 'Anasayfaya Dön',
      title: 'Brew Blend Franchise Türkiye',
      subtitle: 'Premium Specialty Coffee, modern bir kafe deneyimiyle buluşuyor. Uzun vadeli büyüme için Franchise ortağınız.',
      cards: [
        { title: 'Misyonumuz', text: 'Sürdürülebilir franchise konsepti ile Specialty Coffee’yi Türkiye’ye getiriyoruz.' },
        { title: 'Değerlerimiz', text: 'Kalite, şeffaflık ve tasarım sistemimizin merkezindedir.' },
        { title: 'Ortağınız', text: 'Açılış, eğitim ve pazar kurulumunda destek sağlıyoruz.' },
      ],
      whyTitle: 'Neden Brew Blend Türkiye?',
      bullets: [
        'Hızla büyüyen premium kahve pazarı',
        'İskandinav marka konumlandırması',
        'Premium kahvelere ve güvenilir tedarik zincirine doğrudan erişim',
      ],
    },
    contact: {
      pageLabel: 'İletişim',
      back: 'Anasayfaya Dön',
      title: 'Brew Blend Franchise Ekibi ile İletişim',
      subtitle: 'İlk talebinizden Türkiye’deki Brew Blend yerinizin açılışına kadar yanınızdayız.',
      contactCards: [
        { label: 'E-posta', value: 'franchise@brew-blend.de' },
        { label: 'Telefon', value: '+90 212 000 0000' },
        { label: 'Adres', value: 'Antalya, Muratpaşa, Türkiye' },
      ],
      intro: 'Bize yazın, size franchise projeniz için hızlı ve uygun bir danışmanlık sunalım.',
      steps: [
        'İlk iletişim ve ihtiyaç analizi',
        'Kişiye özel danışma',
        'Lokasyon ve bütçe analizi',
        'Başvuru belgeleri ve sözleşme detayları',
        'Hazırlık ve açılış planlaması',
      ],
    },
    faq: {
      pageLabel: 'SSS',
      back: 'Anasayfaya Dön',
      title: 'Brew Blend Franchise Hakkında Sık Sorulan Sorular',
      subtitle: 'Türkiye’de yer seçimi, maliyet, sözleşme ve pazara giriş hakkında önemli yanıtlar.',
      items: [
        {
          question: 'Minimum yatırım tutarı ne kadar?',
          answer: 'Bir amiral gemisi kafe için 4,5 – 6,5 Mio. TL / 140.000 – 205.000 € arasında yatırım öngörüyoruz.',
        },
        {
          question: 'Franchise ücreti ne kadar?',
          answer: 'Sürekli franchise ücreti net satışların %5’i olup ek olarak %2’lik pazarlama katkısı alınır.',
        },
        {
          question: 'Önerilen lokasyon büyüklüğü nedir?',
          answer: 'Bir kafe için en az 90 m², express formatlar için 45 m² ve corner istasyonlar için 18 m² öneriyoruz.',
        },
        {
          question: 'Önemli yasal gereksinimler nelerdir?',
          answer: 'Ticari kayıt, gastronomi lisansı, yerel şirket kurulumu ve SGK ile vergi kaydı gereklidir.',
        },
        {
          question: 'Brew Blend pazara girişte nasıl destek sunuyor?',
          answer: 'Yer analizi, eğitim, strateji, pazarlama materyalleri ve sürekli destek sağlıyoruz.',
        },
      ],
    },
    legal: {
      pageLabel: 'Hukuki',
      back: 'Anasayfaya Dön',
      title: 'İmza & Veri Koruma',
      subtitle: 'Franchise teklifine ilişkin tüm hukuki bilgiler.',
      impressumTitle: 'İmza',
      impressumLines: [
        'Brew Blend Franchise Türkiye',
        'Adres: Antalya, Muratpaşa, Türkiye',
        'E-posta: franchise@brew-blend.de',
        'Telefon: +90 212 000 0000',
      ],
      privacyTitle: 'Veri Koruma',
      privacyLines: [
        'Verilerinizi gizli tutuyoruz ve yalnızca talebinizi işlemek için kullanıyoruz.',
        'Rızanız olmadan verileriniz üçüncü taraflarla paylaşılmaz.',
      ],
    },
  },
} as const;

type TranslationData = (typeof translations)[Language];

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('DE');

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'DE' ? 'TR' : 'DE'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language] as TranslationData;
}
