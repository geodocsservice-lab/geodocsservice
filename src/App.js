import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, FileText,
  Instagram, Facebook, Send, ShieldCheck, User 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  
  const pricingRef = useRef(null);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 
  const robotUrl = "/robot.png";

  const translations = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      prices: [{ title: "სივის ქართულად გენერირება", price: "20₾" }, { title: "სივის უცხო ენაზე გენერირება", price: "35₾" }, { title: "სივის გენერირება 5 ენაზე", price: "55₾" }, { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დოკუმენტების მომზადების პროცესის მაქსიმალური გამარტივება ხელოვნური ინტელექტის გამოყენებით.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშ ფაილებს მომსახურების გასაუმჯობესებლად.", cookieBtn: "ვეთანხმები",
      profileTitle: "პირადი კაბინეტი", regHint: "დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად", login: "შესვლა", register: "რეგისტრაცია"
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      prices: [{ title: "CV in Georgian", price: "20₾" }, { title: "CV in Foreign Language", price: "35₾" }, { title: "CV in 5 Languages", price: "55₾" }, { title: "Unlimited CV Generation", price: "75₾" }],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to simplify document preparation using AI.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files to ensure the best experience.", cookieBtn: "I Agree",
      profileTitle: "Profile", regHint: "Register to use the full functionality of the site", login: "Login", register: "Register"
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы",
      prices: [{ title: "Резюме на грузинском", price: "20₾" }, { title: "Резюме на ин. языке", price: "35₾" }, { title: "Резюме на 5 языках", price: "55₾" }, { title: "Безлимитное резюме", price: "75₾" }],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша цель — упростить процесс подготовки документов с помощью ИИ.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      cookieMsg: "Мы используем кэш для улучшения работы сайта.", cookieBtn: "Согласен",
      profileTitle: "Личный кабинет", regHint: "Зарегистрируйтесь, чтобы использовать полную функциональность сайта", login: "Вход", register: "Регистрация"
    }
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px' }}>
      <header style={{ backgroundColor: '#1A1A1A', padding: '12px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
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
        {activeTab === 'home' && (
          <div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px' }}><span style={{ color: '#FFB800' }}>{t.sloganPart1}</span>{t.sloganPart2}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '25px 0' }}><img src={robotUrl} alt="AI" style={{ width: '260px' }} onError={(e) => e.target.style.display = 'none'} /></div>
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '19px', cursor: 'pointer', marginBottom: '15px' }}>{t.cvBtn}</button>
            <button style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '20px', border: '2px dashed #FFB800', color: 'white', fontWeight: 'bold', marginBottom: '40px' }}>{t.invoiceBtn}</button>
            <h2 style={{ color: '#FFB800', fontWeight: '900', marginBottom: '20px' }}>{t.pricesTitle}</h2>
            {t.prices.map((p, i) => (
              <div key={i} style={{ backgroundColor: '#2A2A2A', padding: '20px', borderRadius: '25px', marginBottom: '12px' }}>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>{p.title}</div>
                <div style={{ color: '#FFB800', fontSize: '26px', fontWeight: '900' }}>{p.price}</div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'about' && (
          <div style={{ backgroundColor: '#2A2A2A', padding: '30px', borderRadius: '30px', textAlign: 'center' }}>
            <Info size={40} color="#FFB800" style={{marginBottom: '20px'}} />
            <h2 style={{ fontSize: '24px', fontWeight: '900' }}>{t.aboutTitle}</h2>
            <p style={{ lineHeight: '1.7', fontSize: '14px' }}>{t.aboutContent}</p>
          </div>
        )}
        {activeTab === 'profile' && (
          <div style={{ textAlign: 'center', padding: '40px 20px', marginTop: '20px' }}>
            <p style={{ fontSize: '14px', marginBottom: '15px', color: '#fff', opacity: 0.9 }}>{t.regHint}</p>
            <User size={80} color="#FFB800" style={{marginBottom: '20px', margin: '0 auto', display: 'block'}} />
            <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '30px' }}>{t.profileTitle}</h2>
            <button style={{ width: '100%', padding: '18px', borderRadius: '15px', border: 'none', backgroundColor: '#007AFF', color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', cursor: 'pointer' }}>{t.login}</button>
            <button style={{ width: '100%', padding: '18px', borderRadius: '15px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>{t.register}</button>
          </div>
        )}
        <footer style={{ textAlign: 'center', marginTop: '50px' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '45px', borderRadius: '50%' }} onError={(e) => e.target.style.display = 'none'} />
          <h3 style={{ fontStyle: 'italic', fontWeight: '900' }}>GEO DOCS SERVICE</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '15px 0' }}><Instagram size={22} /><Facebook size={22} /><Send size={22} /></div>
          <p style={{ fontSize: '11px', opacity: 0.5 }}>{t.rights}</p>
        </footer>
      </main>

      <div style={{ position: 'fixed', bottom: '20px', left: '7.5%', width: '85%', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '3px solid #007AFF' }}>
        <Home size={24} onClick={() => setActiveTab('home')} color={activeTab === 'home' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
        <LayoutGrid size={24} onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info size={24} onClick={() => setActiveTab('about')} color={activeTab === 'about' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
        <User size={24} onClick={() => setActiveTab('profile')} color={activeTab === 'profile' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
}
