import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, Lock, User 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  
  const pricingRef = useRef(null);

  useEffect(() => {
    // ქუქების შემოწმება (თუ უკვე დათანხმდა, არ აჩვენოს)
    if (!localStorage.getItem('cookiesAccepted')) {
      setShowCookieConsent(true);
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleCookieAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieConsent(false);
  };

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 
  const robotUrl = "/robot.png";

  const translations = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები", aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა.",
      login: "შესვლა და რეგისტრაცია", loginBtn: "შესვლა", regBtn: "რეგისტრაცია",
      privacyTitle: "კონფიდენციალურობა",
      privacyContent: "ჩვენთვის პრიორიტეტულია თქვენი ანონიმურობა. მონაცემები იშლება 2 წუთში.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშ ფაილებს.", cookieBtn: "ვეთანხმები"
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing", aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform.",
      login: "Login & Register", loginBtn: "Login", regBtn: "Register",
      privacyTitle: "Privacy Policy",
      privacyContent: "Your anonymity is our priority. Data is deleted in 2 minutes.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files for better experience.", cookieBtn: "I Agree"
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы", aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа.",
      login: "Вход и Регистрация", loginBtn: "Войти", regBtn: "Регистрация",
      privacyTitle: "Конфиденциальность",
      privacyContent: "Ваша анонимность — приоритет. Данные удаляются через 2 минуты.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      cookieMsg: "Мы используем кэш для улучшения работы.", cookieBtn: "Согласен"
    }
  };

  const t = translations[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px' }}>
      
      <header style={{ backgroundColor: '#1A1A1A', padding: '12px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          <div style={{ fontSize: '12px', fontWeight: 'bold' }}>GEO DOCS</div>
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ background: lang === l ? '#007AFF' : '#333', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '5px', fontSize: '10px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <div style={{ height: '80px' }}></div>

      <main style={{ padding: '0 20px' }}>
        {activeTab === 'home' && (
          <div>
            <h1 style={{ textAlign: 'center', fontSize: '28px' }}>{t.sloganPart1}<span style={{color: '#FFB800'}}>{t.sloganPart2}</span></h1>
            <img src={robotUrl} alt="Robot" style={{ width: '180px', display: 'block', margin: '20px auto' }} />
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '15px', backgroundColor: '#FFB800', border: 'none', borderRadius: '20px', fontWeight: 'bold' }}>{t.cvBtn}</button>
          </div>
        )}
        {activeTab === 'profile' && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <User size={60} color="#FFB800" />
            <h2>{t.login}</h2>
            <button style={{ width: '100%', padding: '10px', marginTop: '10px' }}>{t.loginBtn}</button>
          </div>
        )}
      </main>

      {showCookieConsent && (
        <div style={{ position: 'fixed', bottom: '100px', padding: '10px', backgroundColor: '#333', textAlign: 'center', margin: '0 20px', borderRadius: '15px' }}>
          <p style={{fontSize: '12px'}}>{t.cookieMsg}</p>
          <button onClick={handleCookieAccept} style={{ padding: '5px 15px' }}>{t.cookieBtn}</button>
        </div>
      )}

      {/* Bottom Nav - მცოცავი და ზარის იკონკით */}
      <div style={{ position: 'fixed', bottom: '20px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', zIndex: 1000 }}>
        <Home size={24} onClick={() => setActiveTab('home')} color={activeTab === 'home' ? '#007AFF' : 'white'} />
        <Info size={24} onClick={() => setActiveTab('about')} color={activeTab === 'about' ? '#007AFF' : 'white'} />
        <Bell size={24} color="white" />
        <User size={24} onClick={() => setActiveTab('profile')} color={activeTab === 'profile' ? '#007AFF' : 'white'} />
      </div>
    </div>
  );
}
