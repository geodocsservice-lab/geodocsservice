import React, { useState, useRef } from 'react';
import { Zap, Home, LayoutGrid, Info, FileText, Instagram, Facebook, Send, ShieldCheck, User } from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const pricingRef = useRef(null);

  const t = {
    GE: {
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      slogan: "ნუ მოწყდები შენს საქმეს",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      prices: [{ title: "სივის ქართულად გენერირება", price: "20₾" }, { title: "სივის უცხო ენაზე", price: "35₾" }, { title: "სივის გენერირება 5 ენაზე", price: "55₾" }, { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დოკუმენტების მომზადების პროცესის მაქსიმალური გამარტივება ხელოვნური ინტელექტის გამოყენებით.",
      profileTitle: "პირადი კაბინეტი", regHint: "დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად", login: "შესვლა", register: "რეგისტრაცია",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      alert: "Data is auto-deleted in 2 minutes!",
      slogan: "Stay focused on your business",
      cvBtn: "AI CV in 2 minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      prices: [{ title: "CV in Georgian", price: "20₾" }, { title: "CV in Foreign language", price: "35₾" }, { title: "CV in 5 languages", price: "55₾" }, { title: "Unlimited CV generation", price: "75₾" }],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to simplify the document preparation process using AI.",
      profileTitle: "Profile", regHint: "Register to use the full functionality of the site", login: "Login", register: "Register",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      alert: "Данные удаляются через 2 минуты!",
      slogan: "Не отвлекайтесь от дел",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы",
      prices: [{ title: "Резюме на грузинском", price: "20₾" }, { title: "Резюме на ин. языке", price: "35₾" }, { title: "Резюме на 5 языках", price: "55₾" }, { title: "Безлимитное резюме", price: "75₾" }],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша цель — максимально упростить процесс подготовки документов с помощью ИИ.",
      profileTitle: "Личный кабинет", regHint: "Зарегистрируйтесь, чтобы использовать полную функциональность сайта", login: "Вход", register: "Регистрация",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', paddingBottom: '100px' }}>
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 'bold' }}>GEO DOCS SERVICE</div>
        <div>{['GE', 'EN', 'RU'].map(l => <button key={l} onClick={() => setLang(l)} style={{ margin: '0 5px', color: lang === l ? '#007AFF' : 'white', background: 'none', border: 'none', cursor: 'pointer' }}>{l}</button>)}</div>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'home' && (
          <>
            <div style={{ background: '#444', padding: '10px', borderRadius: '10px', fontSize: '12px' }}><ShieldCheck size={16} /> {t.alert}</div>
            <h1 style={{ margin: '20px 0' }}>{t.slogan}</h1>
            <button style={{ width: '100%', padding: '20px', background: '#FFB800', borderRadius: '15px', fontWeight: 'bold' }}>{t.cvBtn}</button>
            <button style={{ width: '100%', padding: '15px', background: 'transparent', border: '2px dashed #FFB800', color: 'white', marginTop: '10px', borderRadius: '15px' }}>{t.invoiceBtn}</button>
            <h3 style={{ marginTop: '30px' }}>{t.pricesTitle}</h3>
            {t.prices.map((p, i) => <div key={i} style={{ background: '#2A2A2A', padding: '15px', margin: '5px 0', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}><span>{p.title}</span> <b>{p.price}</b></div>)}
          </>
        )}

        {activeTab === 'about' && (
          <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '15px' }}>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutContent}</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ textAlign: 'center' }}>
            <p>{t.regHint}</p>
            <User size={80} style={{ margin: '20px auto' }} />
            <button onClick={() => setActiveTab('login')} style={{ width: '100%', padding: '15px', background: '#007AFF', borderRadius: '10px', border: 'none', color: 'white' }}>{t.login}</button>
            <button onClick={() => setActiveTab('register')} style={{ width: '100%', padding: '15px', background: 'transparent', border: '1px solid white', color: 'white', marginTop: '10px', borderRadius: '10px' }}>{t.register}</button>
          </div>
        )}

        {(activeTab === 'login' || activeTab === 'register') && (
          <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '15px' }}>
            <h2>{activeTab === 'login' ? t.login : t.register}</h2>
            <input type="text" placeholder="Email" style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px' }} />
            <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px' }} />
            <button style={{ width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Submit</button>
          </div>
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: '20px', left: '10%', width: '80%', background: '#1A1A1A', padding: '15px', borderRadius: '30px', display: 'flex', justifyContent: 'space-around', border: '1px solid #444' }}>
        <Home onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <LayoutGrid style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ cursor: 'pointer' }} />
        <User onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer' }} />
      </nav>
    </div>
  );
}
