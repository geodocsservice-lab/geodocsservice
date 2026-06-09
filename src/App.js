import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, FileText,
  Instagram, Facebook, Send, ShieldCheck, User 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 
  const robotUrl = "/robot.png";

  const t = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      prices: [{ title: "სივის ქართულად გენერირება", price: "20₾" }, { title: "სივის უცხო ენაზე", price: "35₾" }, { title: "სივის გენერირება 5 ენაზე", price: "55₾" }, { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დოკუმენტების მომზადების პროცესის მაქსიმალური გამარტივება ხელოვნური ინტელექტის გამოყენებით.",
      loginTitle: "შესვლა", registerTitle: "რეგისტრაცია",
      regFields: ["სახელი", "გვარი", "ელ-ფოსტა", "ტელეფონის ნომერი"],
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      prices: [{ title: "CV in Georgian", price: "20₾" }, { title: "CV in Foreign Language", price: "35₾" }, { title: "CV in 5 Languages", price: "55₾" }, { title: "Unlimited CV Generation", price: "75₾" }],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to simplify the document preparation process using AI.",
      loginTitle: "Login", registerTitle: "Registration",
      regFields: ["First Name", "Last Name", "Email", "Phone Number"],
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы",
      prices: [{ title: "Резюме на грузинском", price: "20₾" }, { title: "Резюме на ин. языке", price: "35₾" }, { title: "Резюме на 5 языках", price: "55₾" }, { title: "Безлимитное резюме", price: "75₾" }],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша цель — упростить процесс подготовки документов с помощью ИИ.",
      loginTitle: "Вход", registerTitle: "Регистрация",
      regFields: ["Имя", "Фамилия", "Email", "Номер телефона"],
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', paddingBottom: '100px' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
        <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        <div style={{ backgroundColor: '#000', borderRadius: '8px', padding: '2px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '90px 20px 20px 20px' }}>
        {activeTab === 'home' && (
          <>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px', borderRadius: '20px', fontSize: '11px', display: 'inline-block' }}>{t.alert}</div>
              <h1 style={{ fontSize: '28px', margin: '20px 0' }}>{t.sloganPart1}{t.sloganPart2}</h1>
              <img src={robotUrl} alt="Robot" style={{ width: '200px', margin: '20px auto' }} />
            </div>
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '20px', background: '#FFB800', borderRadius: '20px', fontWeight: 'bold' }}>{t.cvBtn}</button>
            <button style={{ width: '100%', padding: '18px', background: 'transparent', border: '2px dashed #FFB800', marginTop: '15px', borderRadius: '20px' }}>{t.invoiceBtn}</button>
            
            <h2 style={{ marginTop: '30px' }}>{t.pricesTitle}</h2>
            {t.prices.map((p, i) => (
              <div key={i} style={{ background: '#2A2A2A', padding: '15px', borderRadius: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <span>{p.title}</span> <b style={{ color: '#FFB800' }}>{p.price}</b>
              </div>
            ))}
          </>
        )}

        {activeTab === 'about' && (
          <div style={{ background: '#2A2A2A', padding: '25px', borderRadius: '20px' }}>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutContent}</p>
          </div>
        )}

        {(activeTab === 'login' || activeTab === 'register') && (
          <div style={{ background: '#1A1A1A', padding: '25px', borderRadius: '20px' }}>
            <h2>{activeTab === 'login' ? t.loginTitle : t.registerTitle}</h2>
            {activeTab === 'register' && t.regFields.map(f => <input key={f} placeholder={f} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} />)}
            {activeTab === 'login' && <><input placeholder="Email" style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} /><input placeholder="Password" style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} /></>}
            <button style={{ width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '10px', marginTop: '10px' }}>Submit</button>
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ textAlign: 'center' }}>
            <User size={80} style={{ margin: '20px auto' }} />
            <p>დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად</p>
            <button onClick={() => setActiveTab('login')} style={{ width: '100%', padding: '15px', background: '#007AFF', borderRadius: '10px' }}>{t.loginTitle}</button>
            <button onClick={() => setActiveTab('register')} style={{ width: '100%', padding: '15px', background: 'transparent', border: '1px solid white', marginTop: '10px', borderRadius: '10px' }}>{t.registerTitle}</button>
          </div>
        )}

        <footer style={{ textAlign: 'center', marginTop: '40px', opacity: 0.7 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
            <Instagram /> <Facebook /> <Send />
          </div>
          <p style={{ fontSize: '12px' }}>{t.rights}</p>
        </footer>
      </main>

      {/* Sticky Bottom Nav */}
      <nav style={{ position: 'fixed', bottom: '20px', left: '10%', width: '80%', background: '#1A1A1A', padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', border: '1px solid #444', zIndex: 1000 }}>
        <Home onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} />
        <LayoutGrid onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} />
        <User onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer', color: activeTab === 'profile' ? '#007AFF' : 'white' }} />
      </nav>
    </div>
  );
}
