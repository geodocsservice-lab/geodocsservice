import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, User, LogIn, UserPlus
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
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დოკუმენტების მომზადების პროცესის მაქსიმალური გამარტივება ხელოვნური ინტელექტის გამოყენებით.",
      loginTitle: "შესვლა", registerTitle: "რეგისტრაცია",
      regFields: ["სახელი", "გვარი", "ელ-ფოსტა", "ტელეფონის ნომერი"],
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშ (Cache) ფაილებს მომსახურების გასაუმჯობესებლად.", cookieBtn: "ვეთანხმები"
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to completely simplify the document preparation process using artificial intelligence.",
      loginTitle: "Login", registerTitle: "Registration",
      regFields: ["First Name", "Last Name", "Email", "Phone Number"],
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files to ensure the best experience.", cookieBtn: "I Agree"
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы",
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша цель — максимально упростить процесс подготовки документов с помощью искусственного интеллекта.",
      loginTitle: "Вход", registerTitle: "Регистрация",
      regFields: ["Имя", "Фамилия", "Email", "Номер телефона"],
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      cookieMsg: "Мы используем кэш для улучшения работы сайта.", cookieBtn: "Согласен"
    }
  };

  const t = translations[lang];

  const renderInput = (placeholder) => (
    <input type="text" placeholder={placeholder} style={{ width: '100%', padding: '15px', marginBottom: '10px', borderRadius: '15px', border: '1px solid #444', backgroundColor: '#2A2A2A', color: 'white' }} />
  );

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px' }}>
      <header style={{ backgroundColor: '#1A1A1A', padding: '12px 15px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '15px' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <div style={{ height: '80px' }}></div>

      <main style={{ padding: '0 20px' }}>
        {activeTab === 'home' && (
          <div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-block' }}>{t.alert}</div>
              <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px' }}>{t.sloganPart1}{t.sloganPart2}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}><img src={robotUrl} style={{ width: '260px' }} /></div>
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '19px', cursor: 'pointer' }}>{t.cvBtn}</button>
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <User size={80} style={{ margin: '20px auto', color: '#FFB800' }} />
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად</p>
            <button onClick={() => setActiveTab('login')} style={{ width: '100%', padding: '15px', marginBottom: '10px', backgroundColor: '#007AFF', borderRadius: '15px', border: 'none', color: 'white', fontWeight: 'bold' }}>{t.loginTitle}</button>
            <button onClick={() => setActiveTab('register')} style={{ width: '100%', padding: '15px', backgroundColor: 'transparent', border: '1px solid white', borderRadius: '15px', color: 'white', fontWeight: 'bold' }}>{t.registerTitle}</button>
          </div>
        )}

        {(activeTab === 'login' || activeTab === 'register') && (
          <div style={{ backgroundColor: '#1A1A1A', padding: '25px', borderRadius: '25px' }}>
            <h2 style={{ marginBottom: '20px' }}>{activeTab === 'login' ? t.loginTitle : t.registerTitle}</h2>
            {activeTab === 'register' && t.regFields.map((f, i) => renderInput(f))}
            {activeTab === 'login' && (renderInput("Email") || renderInput("Password"))}
            <button style={{ width: '100%', padding: '15px', backgroundColor: '#FFB800', borderRadius: '15px', border: 'none', fontWeight: 'bold', marginTop: '10px' }}>Submit</button>
          </div>
        )}

        {activeTab === 'about' && (
          <div style={{ backgroundColor: '#2A2A2A', padding: '25px', borderRadius: '25px', textAlign: 'center' }}>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutContent}</p>
          </div>
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: '20px', left: '10%', width: '80%', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '3px solid #007AFF', zIndex: 1000 }}>
        <Home size={24} onClick={() => setActiveTab('home')} color={activeTab === 'home' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
        <LayoutGrid size={24} onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info size={24} onClick={() => setActiveTab('about')} color={activeTab === 'about' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
        <User size={24} onClick={() => setActiveTab('profile')} color={activeTab === 'profile' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
      </nav>
    </div>
  );
}
