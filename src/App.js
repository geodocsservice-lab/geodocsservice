import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, User 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  
  const pricingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 
  const robotUrl = "/robot.png";

  const translations = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს",
      alert: "პერსონალური ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      whyTitle: "რატომ ჩვენ?", pricesTitle: "ტარიფები",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      aboutTitle: "ჩვენს შესახებ", aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა.",
      privacyTitle: "კონფიდენციალურობის პოლიტიკა", privacyContent: "თქვენი პერსონალური ინფორმაცია იშლება გენერირებიდან 2 წუთში.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშს მომსახურების გასაუმჯობესებლად.", cookieBtn: "ვეთანხმები",
      profileTitle: "პირადი კაბინეტი"
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Personal data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      whyTitle: "Why Us?", pricesTitle: "Pricing",
      prices: [
        { title: "CV in Georgian", price: "20₾" },
        { title: "CV in Foreign Lang", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited CV Generation", price: "75₾" }
      ],
      aboutTitle: "About Us", aboutContent: "Geo Docs Service is the first fully automated Georgian platform.",
      privacyTitle: "Privacy Policy", privacyContent: "Your personal data is deleted in 2 minutes.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files to ensure the best experience.", cookieBtn: "I Agree",
      profileTitle: "My Profile"
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Персональные данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      whyTitle: "Почему мы?", pricesTitle: "Тарифы",
      prices: [
        { title: "Резюме на грузинском", price: "20₾" },
        { title: "Резюме на ин. языке", price: "35₾" },
        { title: "Резюме на 5 языках", price: "55₾" },
        { title: "Безлимитное резюме", price: "75₾" }
      ],
      aboutTitle: "О нас", aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа.",
      privacyTitle: "Конфиденциальность", privacyContent: "Ваши персональные данные удаляются через 2 минуты.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      cookieMsg: "Мы используем кэш для улучшения работы сайта.", cookieBtn: "Согласен",
      profileTitle: "Личный кабинет"
    }
  };

  const t = translations[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px' }}>
      <header style={{ backgroundColor: '#1A1A1A', padding: '12px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, width: '100%', zIndex: 1000, boxSizing: 'border-box' }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '15px' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <div style={{ height: '80px' }}></div>

      <main style={{ padding: '0 20px' }}>
        {activeTab === 'home' ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px' }}>
                <span style={{ color: '#FFB800' }}>{t.sloganPart1}</span>{t.sloganPart2}
              </h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
              <img src={robotUrl} alt="AI Robot" style={{ width: '180px', height: 'auto' }} onError={(e) => e.target.style.display = 'none'} />
            </div>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '19px', cursor: 'pointer', marginBottom: '15px' }}>
              {t.cvBtn}
            </button>

            <button style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '20px', border: '2px dashed #FFB800', color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
              {t.invoiceBtn}
            </button>
          </div>
        ) : activeTab === 'about' ? (
          <div style={{ padding: '20px', backgroundColor: '#2A2A2A', borderRadius: '30px' }}>
            <h2 style={{ textAlign: 'center' }}>{t.aboutTitle}</h2>
            <p>{t.aboutContent}</p>
          </div>
        ) : activeTab === 'profile' ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{t.profileTitle}</h2>
            <User size={60} style={{ margin: '20px auto' }} />
          </div>
        ) : null}
      </main>

      <nav style={{ position: 'fixed', bottom: '20px', left: '7.5%', width: '85%', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 1000 }}>
        <Home size={24} onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} />
        <LayoutGrid size={24} onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info size={24} onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} />
        <User size={24} onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer', color: activeTab === 'profile' ? '#007AFF' : 'white' }} />
      </nav>
    </div>
  );
}
