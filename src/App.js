import React, { useState } from 'react';
import { 
  Zap, FileText, Home, LayoutGrid, Info, Bell, 
  MessageSquare, Instagram, Facebook, Send, ShieldCheck, X 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "https://lh3.googleusercontent.com/d/1f_wZs5TugjvcEfC9U-4kXtgT8Oc5sjF1";

  const translations = {
    GE: {
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      aboutTitle: "ჩვენს შესახებ",
      aboutText: "Geo Docs Service არის სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დაგიზოგოთ დრო რუტინულ საქმეებში. ყველა პროცესი იმართება ხელოვნური ინტელექტის მიერ.",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyText: "Geo Docs Service-ზე შეყვანილი ყველა პერსონალური მონაცემი გამოიყენება მხოლოდ დოკუმენტის გენერირებისთვის. პროცესის დასრულებისთანავე (მაქსიმუმ 2 წუთში) ინფორმაცია სრულად და შეუქცევადად იშლება ჩვენი სისტემიდან.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      slogan: "Stay Focused on Your Business",
      alert: "Information is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes",
      invoiceBtn: "Invoice (Soon)",
      aboutTitle: "About Us",
      aboutText: "Geo Docs Service is a fully automated platform. Our goal is to save your time on routine tasks. All processes are powered by AI.",
      prices: [
        { title: "CV in Georgian", price: "20₾" },
        { title: "CV in Foreign Language", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited CV Generation", price: "75₾" }
      ],
      privacyTitle: "Privacy Policy",
      privacyText: "All personal data entered on Geo Docs Service is used only for document generation. Information is permanently deleted from our system within 2 minutes after the process.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      slogan: "Не отвлекайтесь от дел",
      alert: "Информация удаляется через 2 минуты!",
      cvBtn: "AI CV за 2 минуты",
      invoiceBtn: "Инвойс (Скоро)",
      aboutTitle: "О нас",
      aboutText: "Geo Docs Service — это полностью автоматизированная платформа. Мы экономим ваше время на рутинных задачах с помощью ИИ.",
      prices: [
        { title: "Резюме на грузинском", price: "20₾" },
        { title: "Резюме на иностр. языке", price: "35₾" },
        { title: "Резюме на 5 языках", price: "55₾" },
        { title: "Безлимитное резюме", price: "75₾" }
      ],
      privacyTitle: "Политика конфиденциальности",
      privacyText: "Все персональные данные, введенные на Geo Docs Service, используются только для генерации документа. Сразу после завершения (максимум через 2 минуты) информация полностью удаляется из нашей системы.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  };

  const t = translations[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', paddingBottom: '120px' }}>
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '15px' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '4px', borderRadius: '8px', display: 'flex', gap: '5px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '20px', fontSize: '12px', marginBottom: '30px' }}>
          <ShieldCheck size={14} style={{ marginRight: '5px' }} /> {t.alert}
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: '900', fontStyle: 'italic', marginBottom: '40px' }}>{t.slogan}</h1>
        
        <button onClick={() => window.open(googleFormUrl)} style={{ backgroundColor: '#FFB800', width: '100%', padding: '22px', borderRadius: '22px', border: 'none', fontWeight: '900', fontSize: '20px', cursor: 'pointer' }}>
          {t.cvBtn}
        </button>

        <div style={{ marginTop: '30px' }}>
          {t.prices.map((p, i) => (
            <button key={i} onClick={() => window.open(googleFormUrl)} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '25px', border: 'none', color: 'white', textAlign: 'left', marginBottom: '15px', cursor: 'pointer' }}>
              <div style={{ fontSize: '16px' }}>{p.title}</div>
              <div style={{ color: '#FFB800', fontSize: '32px', fontWeight: '900', fontStyle: 'italic' }}>{p.price}</div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px' }}>
        <button onClick={() => setShowPrivacy(true)} style={{ background: 'none', border: 'none', color: '#007AFF', textDecoration: 'underline', cursor: 'pointer' }}>
          {t.privacyTitle}
        </button>
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '15px', display: 'flex', justifyContent: 'space-around', zIndex: 100 }}>
        <Home size={28} style={{ cursor: 'pointer' }} />
        <LayoutGrid size={28} color="#666" />
        <Info size={28} onClick={() => setShowAbout(true)} style={{ cursor: 'pointer', color: showAbout ? '#007AFF' : 'white' }} />
        <Bell size={28} color="#666" />
        <MessageSquare size={28} onClick={() => setShowPrivacy(true)} style={{ cursor: 'pointer', color: showPrivacy ? '#007AFF' : 'white' }} />
      </div>

      {(showPrivacy || showAbout) && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: '40px', textAlign: 'center' }}>
          <button onClick={() => { setShowPrivacy(false); setShowAbout(false); }} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white' }}><X size={30} /></button>
          <h2 style={{ color: '#FFB800', marginBottom: '20px' }}>{showPrivacy ? t.privacyTitle : t.aboutTitle}</h2>
          <p style={{ lineHeight: '1.8' }}>{showPrivacy ? t.privacyText : t.aboutText}</p>
        </div>
      )}
    </div>
  );
}
