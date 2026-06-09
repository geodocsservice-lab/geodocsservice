import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, User, FileText, Bell, ShieldCheck, Instagram, Facebook, Send
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
      pricesTitle: "ტარიფები", aboutTitle: "ჩვენს შესახებ",
      login: "შესვლა და რეგისტრაცია", loginBtn: "შესვლა", regBtn: "რეგისტრაცია",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა...",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    }
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px' }}>
      
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%' }} onError={(e) => e.target.style.display = 'none'}/>
          <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' }}>{l}</button>
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
                <span style={{ color: '#FFB800' }}>{t.sloganPart1}</span>
                <span style={{ color: 'white' }}>{t.sloganPart2}</span>
              </h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
              <img src={robotUrl} alt="AI Robot" style={{ width: '180px', height: 'auto' }} />
            </div>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '19px', marginBottom: '15px', cursor: 'pointer' }}>
              {t.cvBtn}
            </button>

            <button style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '20px', border: '2px dashed #FFB800', color: 'white', fontWeight: 'bold', fontSize: '16px', marginBottom: '40px' }}>
              {t.invoiceBtn}
            </button>
          </div>
        ) : activeTab === 'profile' ? (
            <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#2A2A2A', borderRadius: '30px', marginTop: '20px' }}>
                <User size={60} color="#FFB800" style={{ marginBottom: '20px' }} />
                <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>{t.login}</h2>
                <button style={{ backgroundColor: '#007AFF', width: '100%', padding: '15px', borderRadius: '15px', border: 'none', color: 'white', marginBottom: '10px' }}>{t.loginBtn}</button>
                <button style={{ backgroundColor: 'transparent', width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #FFB800', color: '#FFB800' }}>{t.regBtn}</button>
            </div>
        ) : activeTab === 'about' ? (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>{t.aboutTitle}</h2>
                <p>{t.aboutContent}</p>
            </div>
        ) : null}
      </main>

      <div style={{ position: 'fixed', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ width: '90%', maxWidth: '380px', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '3px solid #007AFF', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
          <Home size={22} onClick={() => setActiveTab('home')} color={activeTab === 'home' ? '#007AFF' : 'white'} />
          <LayoutGrid size={22} onClick={() => setActiveTab('prices')} color={activeTab === 'prices' ? '#007AFF' : 'white'} />
          <Info size={22} onClick={() => setActiveTab('about')} color={activeTab === 'about' ? '#007AFF' : 'white'} />
          <Bell size={22} color="white" />
          <User size={22} onClick={() => setActiveTab('profile')} color={activeTab === 'profile' ? '#007AFF' : 'white'} />
        </div>
      </div>
    </div>
  );
}
