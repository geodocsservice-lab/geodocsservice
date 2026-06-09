import React, { useState } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, FileText,
  Instagram, Facebook, Send, ShieldCheck, User 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  
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
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      profileTitle: "პირადი კაბინეტი",
      login: "შესვლა",
      register: "რეგისტრაცია"
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to simplify document preparation using AI.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      profileTitle: "Profile",
      login: "Login",
      register: "Register"
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы",
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша цель — упростить процесс подготовки документов с помощью ИИ.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      profileTitle: "Личный кабинет",
      login: "Вход",
      register: "Регистрация"
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
        {activeTab === 'profile' ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', marginTop: '20px' }}>
            <User size={80} color="#FFB800" style={{marginBottom: '20px', margin: '0 auto', display: 'block'}} />
            <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '30px' }}>{t.profileTitle}</h2>
            
            <button style={{ width: '100%', padding: '18px', borderRadius: '15px', border: 'none', backgroundColor: '#007AFF', color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', cursor: 'pointer' }}>
              {t.login}
            </button>
            <button style={{ width: '100%', padding: '18px', borderRadius: '15px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.register}
            </button>
          </div>
        ) : (
          /* აქ დარჩენილია შენი დანარჩენი გვერდების ლოგიკა */
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Content for {activeTab}</h2>
          </div>
        )}
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
