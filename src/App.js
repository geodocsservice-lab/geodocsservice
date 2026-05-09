import React, { useState } from 'react';
import { 
  Zap, FileText, Home, LayoutGrid, Info, Bell, 
  MessageSquare, Instagram, Facebook, Send, ShieldCheck, X, CheckCircle2 
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
      whyTitle: "რატომ ჩვენ?",
      whyItems: ["სწრაფი გენერირება (2 წთ)", "მრავალენოვანი მხარდაჭერა", "მაქსიმალური სიზუსტე AI-თ", "სრული ანონიმურობა"],
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyContent: "Geo Docs Service-ზე შეყვანილი ყველა პერსონალური მონაცემი გამოიყენება მხოლოდ დოკუმენტის გენერირებისთვის. პროცესის დასრულებისთანავე (მაქსიმუმ 2 წუთში) ინფორმაცია სრულად და შეუქცევადად იშლება ჩვენი სისტემიდან. ჩვენ არ ვინახავთ და არ გადავცემთ თქვენს მონაცემებს მესამე პირებს.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      slogan: "Stay Focused on Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes",
      invoiceBtn: "Invoice (Soon)",
      aboutTitle: "About Us",
      aboutText: "Geo Docs Service is a fully automated platform designed to save your time. All processes are AI-powered.",
      whyTitle: "Why Us?",
      whyItems: ["Fast Generation (2 min)", "Multilingual Support", "AI Accuracy", "Full Anonymity"],
      prices: [
        { title: "CV in Georgian", price: "20₾" },
        { title: "CV in Foreign Language", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited CV Generation", price: "75₾" }
      ],
      privacyTitle: "Privacy Policy",
      privacyContent: "All personal data entered is used only for document generation. Information is permanently deleted within 2 minutes after completion. We do not store or share your data.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      slogan: "Не отвлекайтесь от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты",
      invoiceBtn: "Инвойс (Скоро)",
      aboutTitle: "О нас",
      aboutText: "Geo Docs Service — полностью автоматизированная платформа для экономии вашего времени. Все процессы на базе ИИ.",
      whyTitle: "Почему мы?",
      whyItems: ["Быстрота (2 мин)", "Многоязычность", "Точность ИИ", "Анонимность"],
      prices: [
        { title: "Резюме на грузинском", price: "20₾" },
        { title: "Резюме на иностр. языке", price: "35₾" },
        { title: "Резюме на 5 языках", price: "55₾" },
        { title: "Безлимитное резюме", price: "75₾" }
      ],
      privacyTitle: "Конфиденциальность",
      privacyContent: "Данные используются только для генерации документов. Информация безвозвратно удаляется через 2 минуты после обработки. Мы не храним ваши данные.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  };

  const t = translations[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => {setShowAbout(false); setShowPrivacy(false); window.scrollTo(0,0);}}>
          <img src={logoUrl} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '14px' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      {/* Main UI */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '10px 15px', borderRadius: '20px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px' }}>
          <ShieldCheck size={16} color="#FFB800" /> {t.alert}
        </div>
        <h1 style={{ fontSize: '38px', fontWeight: '900', fontStyle: 'italic', marginBottom: '40px', lineHeight: 1.1 }}>{t.slogan}</h1>
        
        <button onClick={() => window.open(googleFormUrl)} style={{ backgroundColor: '#FFB800', width: '100%', padding: '22px', borderRadius: '22px', border: 'none', fontWeight: '900', fontSize: '22px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
          <Zap fill="black" size={24} style={{marginRight: '10px'}} /> {t.cvBtn}
        </button>

        {/* Why Us Section */}
        <div style={{ marginTop: '40px', backgroundColor: '#2A2A2A', padding: '25px', borderRadius: '30px', textAlign: 'left' }}>
          <h3 style={{ color: '#FFB800', fontStyle: 'italic', marginBottom: '20px' }}>{t.whyTitle}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {t.whyItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <CheckCircle2 size={16} color="#007AFF" /> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Prices */}
        <div style={{ marginTop: '30px' }}>
          {t.prices.map((p, i) => (
            <button key={i} onClick={() => window.open(googleFormUrl)} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '25px', borderRadius: '30px', border: 'none', color: 'white', textAlign: 'left', marginBottom: '15px', cursor: 'pointer' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{p.title}</div>
              <div style={{ color: '#FFB800', fontSize: '34px', fontWeight: '900', fontStyle: 'italic', marginTop: '5px' }}>{p.price}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Branding */}
      <footer style={{ textAlign: 'center', padding: '40px 20px 160px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <img src={logoUrl} alt="Footer Logo" style={{ width: '60px', height: '60px', borderRadius: '15px', marginBottom: '15px' }} />
        <h2 style={{ fontWeight: '900', fontStyle: 'italic', marginBottom: '10px' }}>GEO DOCS SERVICE</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '25px' }}>
          <Instagram size={24} style={{cursor: 'pointer'}} /> <Facebook size={24} style={{cursor: 'pointer'}} /> <Send size={24} style={{cursor: 'pointer'}} />
        </div>
        <button onClick={() => setShowPrivacy(true)} style={{ background: 'none', border: 'none', color: '#007AFF', textDecoration: 'underline', cursor: 'pointer', marginBottom: '20px' }}>
          {t.privacyTitle}
        </button>
        <p style={{ fontSize: '12px', opacity: 0.5 }}>{t.rights}</p>
      </footer>

      {/* Navigation Bar */}
      <div style={{ position: 'fixed', bottom: '20px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '15px', display: 'flex', justifyContent: 'space-around', borderBottom: '4px solid #007AFF', zIndex: 100, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <Home size={28} onClick={() => { setShowAbout(false); setShowPrivacy(false); window.scrollTo(0,0); }} style={{ cursor: 'pointer', color: (!showAbout && !showPrivacy) ? '#007AFF' : 'white' }} />
        <LayoutGrid size={28} color="#666" style={{ cursor: 'pointer' }} />
        <Info size={28} onClick={() => {setShowAbout(true); setShowPrivacy(false);}} style={{ cursor: 'pointer', color: showAbout ? '#007AFF' : 'white' }} />
        <Bell size={28} color="#666" style={{ cursor: 'pointer' }} />
        <MessageSquare size={28} onClick={() => {setShowPrivacy(true); setShowAbout(false);}} style={{ cursor: 'pointer', color: showPrivacy ? '#007AFF' : 'white' }} />
      </div>

      {/* Popups (About & Privacy) */}
      {(showPrivacy || showAbout) && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.98)', zIndex: 1000, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => { setShowPrivacy(false); setShowAbout(false); }} style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={35} /></button>
          <div style={{ maxWidth: '500px', textAlign: 'center' }}>
            <h2 style={{ color: '#FFB800', fontSize: '28px', marginBottom: '30px', fontStyle: 'italic', fontWeight: '900' }}>{showPrivacy ? t.privacyTitle : t.aboutTitle}</h2>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ lineHeight: '1.8', fontSize: '17px', color: '#eee' }}>{showPrivacy ? t.privacyContent : t.aboutText}</p>
            </div>
            <button onClick={() => { setShowPrivacy(false); setShowAbout(false); }} style={{ marginTop: '30px', padding: '12px 40px', borderRadius: '12px', backgroundColor: '#007AFF', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
