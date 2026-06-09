import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, FileText,
  Instagram, Facebook, Send, ShieldCheck, User 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 
  const robotUrl = "/robot.png";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const t = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      prices: [{ title: "სივის ქართულად გენერირება", price: "20₾" }, { title: "სივის უცხო ენაზე", price: "35₾" }, { title: "სივის გენერირება 5 ენაზე", price: "55₾" }, { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა.",
      loginTitle: "შესვლა", registerTitle: "რეგისტრაცია",
      regFields: ["სახელი", "გვარი", "ელ-ფოსტა", "ტელეფონის ნომერი"],
      rights: "© 2026 GEO DOCS SERVICE."
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      prices: [{ title: "CV in Georgian", price: "20₾" }, { title: "CV in Foreign Language", price: "35₾" }, { title: "CV in 5 Languages", price: "55₾" }, { title: "Unlimited CV", price: "75₾" }],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform.",
      loginTitle: "Login", registerTitle: "Registration",
      regFields: ["First Name", "Last Name", "Email", "Phone Number"],
      rights: "© 2026 GEO DOCS SERVICE."
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы",
      prices: [{ title: "Резюме на грузинском", price: "20₾" }, { title: "Резюме на ин. языке", price: "35₾" }, { title: "Резюме на 5 языках", price: "55₾" }, { title: "Безлимитное", price: "75₾" }],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа.",
      loginTitle: "Вход", registerTitle: "Регистрация",
      regFields: ["Имя", "Фамилия", "Email", "Номер телефона"],
      rights: "© 2026 GEO DOCS SERVICE."
    }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' }}>
      
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ fontWeight: '900', fontStyle: 'italic', paddingLeft: '10px' }}>GEO DOCS SERVICE</div>
        <div style={{ backgroundColor: '#000', borderRadius: '8px', padding: '2px', marginRight: '10px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px', boxSizing: 'border-box' }}>
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '15px', fontSize: '11px', marginBottom: '20px' }}>{t.alert}</div>
            <h1 style={{ fontSize: '26px', margin: '20px 0' }}>{t.sloganPart1}{t.sloganPart2}</h1>
            <img src={robotUrl} alt="Robot" style={{ width: '220px', margin: '10px auto' }} />
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '18px', background: '#FFB800', border: 'none', borderRadius: '20px', fontWeight: 'bold' }}>{t.cvBtn}</button>
            <button style={{ width: '100%', padding: '15px', background: 'transparent', border: '2px dashed #FFB800', marginTop: '15px', borderRadius: '20px', color: 'white' }}>{t.invoiceBtn}</button>
            
            <h2 style={{ marginTop: '30px', textAlign: 'left' }}>{t.pricesTitle}</h2>
            {t.prices.map((p, i) => (
              <div key={i} style={{ background: '#2A2A2A', padding: '15px', borderRadius: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <span>{p.title}</span> <b style={{ color: '#FFB800' }}>{p.price}</b>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ textAlign: 'center' }}>
            <User size={80} style={{ margin: '20px auto' }} />
            <p>დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად</p>
            <button onClick={() => setActiveTab('login')} style={{ width: '100%', padding: '15px', background: '#007AFF', borderRadius: '15px', border: 'none', color: 'white' }}>{t.loginTitle}</button>
            <button onClick={() => setActiveTab('register')} style={{ width: '100%', padding: '15px', background: 'transparent', border: '1px solid white', marginTop: '10px', borderRadius: '15px' }}>{t.registerTitle}</button>
          </div>
        )}

        {(activeTab === 'login' || activeTab === 'register') && (
          <div style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px' }}>
            <h2>{activeTab === 'login' ? t.loginTitle : t.registerTitle}</h2>
            {activeTab === 'register' && t.regFields.map(f => <input key={f} placeholder={f} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none' }} />)}
            {activeTab === 'login' && <><input placeholder="Email" style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} /><input placeholder="Password" style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} /></>}
            <button style={{ width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '10px', marginTop: '10px', fontWeight: 'bold' }}>Submit</button>
          </div>
        )}

        {activeTab === 'about' && (
          <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px' }}>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutContent}</p>
          </div>
        )}
      </main>

      <nav style={{ 
        position: 'fixed', bottom: '15px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', 
        padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', 
        zIndex: 1000, boxSizing: 'border-box',
        transition: 'transform 0.3s, opacity 0.3s',
        transform: showNav ? 'translateY(0)' : 'translateY(100px)',
        opacity: showNav ? 1 : 0
      }}>
        <Home onClick={() => setActiveTab('home')} style={{ color: activeTab === 'home' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <LayoutGrid onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ color: activeTab === 'about' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <User onClick={() => setActiveTab('profile')} style={{ color: activeTab === 'profile' ? '#007AFF' : 'white', cursor: 'pointer' }} />
      </nav>
    </div>
  );
}
