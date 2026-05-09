import React, { useState, useRef } from 'react';
import { Zap, Home, LayoutGrid, Info, Bell, MessageSquare, Instagram, Facebook, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const pricingRef = useRef(null);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "https://lh3.googleusercontent.com/d/1f_wZs5TugjvcEfC9U-4kXtgT8Oc5sjF1";

  const translations = {
    GE: {
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      whyTitle: "რატომ ჩვენ?",
      whyItems: ["სწრაფი გენერირება (2 წთ)", "მრავალენოვანი მხარდაჭერა", "მაქსიმალური სიზუსტე AI-თ", "სრული ანონიმურობა"],
      pricesTitle: "ტარიფები",
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა...",
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyContent: "ჩვენთვის პრიორიტეტულია თქვენი ანონიმურობა...",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      slogan: "Stay Focused on Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes",
      whyTitle: "Why Us?",
      whyItems: ["Fast Generation (2 min)", "Multilingual Support", "AI Accuracy", "Full Anonymity"],
      pricesTitle: "Pricing",
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is a fully automated platform...",
      privacyTitle: "Privacy Policy",
      privacyContent: "Your data is used only for processing and is permanently deleted...",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      slogan: "Не отвлекайтесь от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты",
      whyTitle: "Почему мы?",
      whyItems: ["Быстрота (2 мин)", "Многоязычность", "Точность ИИ", "Анонимность"],
      pricesTitle: "Тарифы",
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — полностью автоматизированная платформа...",
      privacyTitle: "Конфиденциальность",
      privacyContent: "Ваши данные используются только для генерации и удаляются через 2 минуты...",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  };

  const t = translations[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', paddingBottom: '100px' }}>
      
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '35px', borderRadius: '50%' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '13px' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'home' && (
          <div>
            <h1 style={{ textAlign: 'center', fontSize: '32px', margin: '20px 0' }}>{t.slogan}</h1>
            <button onClick={() => window.open(googleFormUrl)} style={{ width: '100%', padding: '20px', borderRadius: '20px', backgroundColor: '#FFB800', border: 'none', fontSize: '18px', fontWeight: 'bold' }}>{t.cvBtn}</button>
            
            <h2 style={{ marginTop: '30px', color: '#FFB800' }}>{t.pricesTitle}</h2>
            <div ref={pricingRef} style={{ height: '200px', backgroundColor: '#333', borderRadius: '20px', marginBottom: '20px' }}>{/* ფასები */}</div>
            
            {/* "რატომ ჩვენ" გადატანილია აქ */}
            <div style={{ backgroundColor: '#2A2A2A', padding: '20px', borderRadius: '25px' }}>
              <h3 style={{ color: '#FFB800' }}>{t.whyTitle}</h3>
              {t.whyItems.map((item, i) => <div key={i} style={{ margin: '10px 0' }}>{item}</div>)}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            <h2 style={{ color: '#FFB800' }}>{t.aboutTitle}</h2>
            <p>{t.aboutContent}</p>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            <h2 style={{ color: '#FFB800' }}>{t.privacyTitle}</h2>
            <p>{t.privacyContent}</p>
          </div>
        )}
      </main>

      {/* მენიუ გაშუალებულია და გასწორებული */}
      <div style={{ position: 'fixed', bottom: '15px', left: '0', right: '0', display: 'flex', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#1A1A1A', padding: '15px 25px', borderRadius: '40px', display: 'flex', gap: '30px', border: '2px solid #007AFF' }}>
          <Home onClick={() => setActiveTab('home')} color={activeTab === 'home' ? '#007AFF' : 'white'} style={{cursor:'pointer'}} />
          <LayoutGrid onClick={() => {setActiveTab('home'); setTimeout(()=>pricingRef.current.scrollIntoView({behavior:'smooth'}), 100)}} style={{cursor:'pointer'}} />
          <Info onClick={() => setActiveTab('about')} color={activeTab === 'about' ? '#007AFF' : 'white'} style={{cursor:'pointer'}} />
          <Bell color="white" />
          <MessageSquare onClick={() => setActiveTab('privacy')} color={activeTab === 'privacy' ? '#007AFF' : 'white'} style={{cursor:'pointer'}} />
        </div>
      </div>
    </div>
  );
}

