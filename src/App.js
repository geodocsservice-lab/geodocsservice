import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  
  const pricingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  
  // აქ ჩაემატა თქვენი ატვირთული ფაილის ზუსტი სახელი
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 

  const translations = {
    GE: {
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      whyTitle: "რატომ ჩვენ?",
      whyItems: ["სწრაფი გენერირება (2 წთ)", "მრავალენოვანი მხარდაჭერა", "მაქსიმალური სიზუსტე AI-თ", "სრული ანონიმურობა"],
      pricesTitle: "ტარიფები",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა.",
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyContent: "ჩვენთვის პრიორიტეტულია თქვენი ანონიმურობა. სისტემაში შეყვანილი ინფორმაცია გამოიყენება მხოლოდ დოკუმენტის შესაქმნელად და გენერირებიდან ზუსტად 2 წუთში სრულად იშლება ბაზიდან.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      slogan: "Stay Focused on Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes",
      invoiceBtn: "Invoice (Soon)",
      whyTitle: "Why Us?",
      whyItems: ["Fast Generation (2 min)", "Multilingual Support", "AI Accuracy", "Full Anonymity"],
      pricesTitle: "Pricing",
      prices: [
        { title: "CV in Georgian", price: "20₾" },
        { title: "CV in Foreign Language", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited CV Generation", price: "75₾" }
      ],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is a fully automated platform.",
      privacyTitle: "Privacy Policy",
      privacyContent: "Your data is used only for processing and is permanently deleted within 2 minutes.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      slogan: "Не отвлекайтесь от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты",
      invoiceBtn: "Инвойс (Скоро)",
      whyTitle: "Почему мы?",
      whyItems: ["Быстрая генерация (2 мин)", "Мультиязычность", "Точность ИИ", "Анонимность"],
      pricesTitle: "Тарифы",
      prices: [
        { title: "Резюме на грузинском", price: "20₾" },
        { title: "Резюме на ин. языке", price: "35₾" },
        { title: "Резюме на 5 языках", price: "55₾" },
        { title: "Безлимитное резюме", price: "75₾" }
      ],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — это первая грузинская полностью автоматизированная платформа.",
      privacyTitle: "Конфиденциальность",
      privacyContent: "Ваша анонимность — наш приоритет. Информация удаляется через 2 минуты.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  };

  const t = translations[lang] || translations['GE'];

  const handleLogoClick = () => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px', overflowX: 'hidden' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img 
            src={logoUrl} 
            alt="Logo" 
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFC107' }} 
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '13px' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button 
              key={l} 
              onClick={() => setLang(l)} 
              style={{ 
                background: lang === l ? '#2563EB' : 'transparent',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        {activeTab === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '10px', lineHeight: '1.1' }}>{t.slogan}</h1>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#ADB5BD', fontSize: '14px', backgroundColor: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '12px' }}>
                <ShieldCheck size={16} />
                <span>{t.alert}</span>
              </div>
            </div>

            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '22px', borderRadius: '18px', border: 'none', backgroundColor: '#FFC107', color: 'black', fontSize: '20px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,193,7,0.3)' }}>
                <Zap fill="black" /> {t.cvBtn}
              </button>
            </a>

            <button disabled style={{ width: '100%', padding: '22px', borderRadius: '18px', border: 'none', backgroundColor: '#212529', color: '#6C757D', fontSize: '18px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', cursor: 'not-allowed' }}>
              <FileText /> {t.invoiceBtn}
            </button>

            <section style={{ backgroundColor: '#1A1A1A', padding: '25px', borderRadius: '24px', marginTop: '10px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>{t.pricesTitle}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {t.prices.map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '14px' }}>
                    <span style={{ fontSize: '15px', color: '#E9ECEF' }}>{p.title}</span>
                    <span style={{ fontWeight: '800', color: '#FFC107', fontSize: '18px' }}>{p.price}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'info' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <section style={{ backgroundColor: '#1A1A1A', padding: '25px', borderRadius: '24px' }}>
              <h2 style={{ color: '#FFC107', marginBottom: '15px' }}>{t.aboutTitle}</h2>
              <p style={{ lineHeight: '1.6', color: '#ADB5BD' }}>{t.aboutContent}</p>
            </section>
            <section style={{ backgroundColor: '#1A1A1A', padding: '25px', borderRadius: '24px' }}>
              <h2 style={{ color: '#FFC107', marginBottom: '15px' }}>{t.privacyTitle}</h2>
              <p style={{ lineHeight: '1.6', color: '#ADB5BD' }}>{t.privacyContent}</p>
            </section>
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      <nav style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '25px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 1000, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: activeTab === 'home' ? '#2563EB' : '#6C757D', cursor: 'pointer' }}>
          <Home size={28} />
        </button>
        <button onClick={() => setActiveTab('grid')} style={{ background: 'none', border: 'none', color: activeTab === 'grid' ? '#2563EB' : '#6C757D', cursor: 'pointer' }}>
          <LayoutGrid size={28} />
        </button>
        <button onClick={() => setActiveTab('info')} style={{ background: 'none', border: 'none', color: activeTab === 'info' ? '#2563EB' : '#6C757D', cursor: 'pointer' }}>
          <Info size={28} />
        </button>
        <button style={{ background: 'none', border: 'none', color: '#6C757D', cursor: 'pointer' }}>
          <Bell size={28} />
        </button>
      </nav>
    </div>
  );
}

