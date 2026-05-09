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
  
  // Google Drive-ის პირდაპირი ლინკი
  const logoUrl = "https://lh3.googleusercontent.com/d/1f_wZs5TugjvcEfC9U-4kXtgT8Oc5sjF1";

  const translations = {
    GE: {
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      aboutTitle: "ჩვენს შესახებ",
      aboutText: "Geo Docs Service არის სრულად ავტომატიზებული პლატფორმა, რომელიც ხელოვნური ინტელექტის გამოყენებით ქმნის პროფესიონალურ დოკუმენტებს. ჩვენი მიზანია დაგიზოგოთ დრო და ენერგია რუტინულ საქმეებში.",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyText: "თქვენი პერსონალური მონაცემები არ ინახება. გენერირების დასრულებიდან 2 წუთში სისტემა ავტომატურად შლის ყველა ინფორმაციას.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      slogan: "Stay Focused on Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes",
      invoiceBtn: "Invoice (Soon)",
      aboutTitle: "About Us",
      aboutText: "Geo Docs Service is a fully automated platform that uses AI to create professional documents. We aim to save your time and energy on routine tasks.",
      prices: [
        { title: "CV in Georgian", price: "20₾" },
        { title: "CV in Foreign Language", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited CV Generation", price: "75₾" }
      ],
      privacyTitle: "Privacy Policy",
      privacyText: "Your personal data is not stored. All info is deleted 2 minutes after processing.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      slogan: "Не отвлекайтесь от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты",
      invoiceBtn: "Инвойс (Скоро)",
      aboutTitle: "О нас",
      aboutText: "Geo Docs Service — это полностью автоматизированная платформа для создания документов с помощью ИИ. Мы экономим ваше время на рутине.",
      prices: [
        { title: "Резюме на грузинском", price: "20₾" },
        { title: "Резюме на иностр. языке", price: "35₾" },
        { title: "Резюме на 5 языках", price: "55₾" },
        { title: "Безлимитное резюме", price: "75₾" }
      ],
      privacyTitle: "Конфиденциальность",
      privacyText: "Ваши данные не сохраняются. Система удаляет всё через 2 минуты после обработки.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  };

  const t = translations[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', paddingBottom: '120px' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid white' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '16px', lineHeight: 1.1 }}>
            GEO DOCS SERVICE
          </div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '4px', borderRadius: '8px', display: 'flex', gap: '5px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: lang === l ? 'white' : '#666', border: 'none', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '20px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px' }}>
          <ShieldCheck size={16} /> {t.alert}
        </div>
        
        <h1 style={{ fontSize: '38px', fontWeight: '900', fontStyle: 'italic', marginBottom: '40px', lineHeight: 1.1 }}>{t.slogan}</h1>

        <button onClick={() => window.open(googleFormUrl)} style={{ backgroundColor: '#FFB800', color: 'black', width: '100%', padding: '22px', borderRadius: '22px', border: 'none', fontWeight: '900', fontSize: '22px', display: 'flex', justifyContent: 'center', gap: '10px', cursor: 'pointer' }}>
          <Zap fill="black" size={24} /> {t.cvBtn}
        </button>

        <div style={{ marginTop: '40px' }}>
          {t.prices.map((p, i) => (
            <button key={i} onClick={() => window.open(googleFormUrl)} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '25px', borderRadius: '30px', border: 'none', color: 'white', textAlign: 'left', marginBottom: '15px', cursor: 'pointer' }}>
              <div style={{ fontSize: '17px', fontWeight: 'bold' }}>{p.title}</div>
              <div style={{ color: '#FFB800', fontSize: '34px', fontWeight: '900', fontStyle: 'italic', marginTop: '5px' }}>{p.price}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: '20px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '15px', display: 'flex', justifyContent: 'space-around', borderBottom: '4px solid #007AFF', zIndex: 100 }}>
        <Home size={28} onClick={() => { setShowAbout(false); setShowPrivacy(false); }} style={{ cursor: 'pointer' }} />
        <LayoutGrid size={28} color="#666" />
        <Info size={28} color={showAbout ? "#007AFF" : "#666"} onClick={() => setShowAbout(true)} style={{ cursor: 'pointer' }} />
        <Bell size={28} color="#666" />
        <MessageSquare size={28} color="#666" onClick={() => setShowPrivacy(true)} style={{ cursor: 'pointer' }} />
      </div>

      {/* About Modal */}
      {showAbout && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <button onClick={() => setShowAbout(false)} style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white' }}><X size={35} /></button>
          <img src={logoUrl} alt="About Logo" style={{ width: '80px', height: '80px', borderRadius: '20px', marginBottom: '20px' }} />
          <h2 style={{ color: '#FFB800', fontSize: '28px', marginBottom: '20px', fontStyle: 'italic' }}>{t.aboutTitle}</h2>
          <p style={{ lineHeight: '1.8', fontSize: '18px', maxWidth: '400px' }}>{t.aboutText}</p>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <button onClick={() => setShowPrivacy(false)} style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white' }}><X size={35} /></button>
          <h2 style={{ color: '#FFB800', fontSize: '28px', marginBottom: '20px' }}>{t.privacyTitle}</h2>
          <p style={{ lineHeight: '1.8', fontSize: '18px', maxWidth: '400px' }}>{t.privacyText}</p>
        </div>
      )}
    </div>
  );
}
