import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, User 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  
  const pricingRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) setShowCookieConsent(true);
  }, []);

  const t = {
    GE: {
      slogan1: "ნუ მოწყდები ", slogan2: "შენს საქმეს", alert: "პერსონალური ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)", pricesTitle: "ტარიფები",
      aboutTitle: "ჩვენს შესახებ", aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშს მომსახურების გასაუმჯობესებლად.", cookieBtn: "ვეთანხმები",
      profileTitle: "შესვლა / რეგისტრაცია", login: "შესვლა", register: "რეგისტრაცია"
    },
    EN: {
      slogan1: "Stay Focused on ", slogan2: "Your Business", alert: "Personal data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)", pricesTitle: "Pricing",
      aboutTitle: "About Us", aboutContent: "Geo Docs Service is the first fully automated Georgian platform.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files to ensure the best experience.", cookieBtn: "I Agree",
      profileTitle: "Login / Register", login: "Login", register: "Register"
    },
    RU: {
      slogan1: "Не отвлекайтесь ", slogan2: "от дел", alert: "Персональные данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)", pricesTitle: "Тарифы",
      aboutTitle: "О нас", aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      cookieMsg: "Мы используем кэш для улучшения работы сайта.", cookieBtn: "Согласен",
      profileTitle: "Вход / Регистрация", login: "Вход", register: "Регистрация"
    }
  }[lang];

  const prices = [
    { title: "სივის ქართულად გენერირება", price: "20₾" },
    { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
    { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
    { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
  ];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', paddingBottom: '120px' }}>
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
        <div style={{ fontWeight: 'bold' }}>GEO DOCS SERVICE</div>
        <div style={{ display: 'flex', gap: '5px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ background: lang === l ? '#007AFF' : '#333', color: 'white', border: 'none', padding: '5px', borderRadius: '5px' }}>{l}</button>
          ))}
        </div>
      </header>

      <div style={{ height: '80px' }}></div>

      <main style={{ padding: '20px' }}>
        {activeTab === 'home' && (
          <>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '11px', background: 'rgba(0,0,0,0.2)', padding: '5px', borderRadius: '10px' }}><ShieldCheck size={14} /> {t.alert}</p>
              <h1>{t.slogan1} <span style={{color: '#FFB800'}}>{t.slogan2}</span></h1>
              <img src="/robot.png" alt="Robot" style={{ width: '180px', margin: '20px 0' }} />
              <button style={{ width: '100%', padding: '20px', borderRadius: '20px', background: '#FFB800', border: 'none', fontWeight: 'bold' }}>{t.cvBtn}</button>
              <button style={{ width: '100%', padding: '20px', borderRadius: '20px', background: 'transparent', border: '2px dashed #FFB800', marginTop: '10px' }}>{t.invoiceBtn}</button>
            </div>
            <h2 style={{ marginTop: '30px' }}>{t.pricesTitle}</h2>
            {prices.map((p, i) => (
              <div key={i} style={{ background: '#2A2A2A', padding: '15px', borderRadius: '15px', marginBottom: '10px' }}>
                <p style={{ fontSize: '12px' }}>{p.title}</p>
                <h3 style={{ color: '#FFB800' }}>{p.price}</h3>
              </div>
            ))}
          </>
        )}

        {activeTab === 'about' && (
          <div style={{ padding: '20px', background: '#2A2A2A', borderRadius: '20px' }}>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutContent}</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{t.profileTitle}</h2>
            <button style={{ width: '100%', padding: '15px', background: '#007AFF', borderRadius: '10px', border: 'none', color: 'white' }}>{t.login}</button>
            <button style={{ width: '100%', padding: '15px', background: 'transparent', borderRadius: '10px', border: '1px solid white', marginTop: '10px' }}>{t.register}</button>
          </div>
        )}
      </main>

      <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px', opacity: 0.6 }}>
        <p style={{ fontSize: '11px' }}>{t.rights}</p>
      </footer>

      <nav style={{ position: 'fixed', bottom: '20px', left: '5%', width: '90%', background: '#1A1A1A', borderRadius: '40px', padding: '15px', display: 'flex', justifyContent: 'space-around' }}>
        <Home onClick={() => setActiveTab('home')} color={activeTab === 'home' ? '#007AFF' : 'white'} />
        <LayoutGrid onClick={() => setActiveTab('home')} />
        <Info onClick={() => setActiveTab('about')} color={activeTab === 'about' ? '#007AFF' : 'white'} />
        <User onClick={() => setActiveTab('profile')} color={activeTab === 'profile' ? '#007AFF' : 'white'} />
      </nav>
    </div>
  );
}
