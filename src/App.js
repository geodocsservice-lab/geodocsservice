import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, User, LogIn
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  
  const pricingRef = useRef(null);

  useEffect(() => {
    // Cookie-ის შემოწმება დარეფრეშების დროს
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

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
      pricesTitle: "ტარიფები",
      aboutTitle: "ჩვენს შესახებ", privacyTitle: "კონფიდენციალურობა",
      profileTitle: "შესვლა / რეგისტრაცია",
      loginBtn: "შესვლა", regBtn: "რეგისტრაცია",
      cookieMsg: "საიტი იყენებს ქეშს მომსახურების გასაუმჯობესებლად.", cookieBtn: "ვეთანხმები"
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Personal data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      aboutTitle: "About Us", privacyTitle: "Privacy Policy",
      profileTitle: "Login / Register",
      loginBtn: "Login", regBtn: "Register",
      cookieMsg: "We use cache files to ensure the best experience.", cookieBtn: "I Agree"
    }
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '12px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '15px' }}>GEO DOCS</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <div style={{ height: '80px' }}></div>

      <main style={{ padding: '0 20px' }}>
        {activeTab === 'home' ? (
          <div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-block' }}>
                <ShieldCheck size={14} style={{display:'inline'}} /> {t.alert}
              </div>
              <h1 style={{ fontSize: '30px', marginTop: '20px' }}>{t.sloganPart1} <span style={{color: '#FFB800'}}>{t.sloganPart2}</span></h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
              <img src={robotUrl} alt="Robot" style={{ width: '180px' }} onError={(e) => e.target.style.display='none'} />
            </div>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '20px', borderRadius: '20px', border: 'none', backgroundColor: '#FFB800', fontWeight: '900', fontSize: '18px', cursor: 'pointer' }}>{t.cvBtn}</button>
          </div>
        ) : activeTab === 'profile' ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#2A2A2A', borderRadius: '30px' }}>
            <h2>{t.profileTitle}</h2>
            <button style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '15px', border: 'none', background: '#007AFF', color: 'white' }}>{t.loginBtn}</button>
            <button style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '15px', border: '1px solid white', background: 'transparent', color: 'white' }}>{t.regBtn}</button>
          </div>
        ) : null}
      </main>

      {/* Cookie Consent */}
      {showCookieConsent && (
        <div style={{ position: 'fixed', bottom: '100px', left: '20px', right: '20px', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '15px', border: '1px solid #FFB800', textAlign: 'center', zIndex: 2000 }}>
          <p style={{ fontSize: '12px' }}>{t.cookieMsg}</p>
          <button onClick={handleCookieAccept} style={{ backgroundColor: '#FFB800', border: 'none', padding: '8px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>{t.cookieBtn}</button>
        </div>
      )}

      {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ width: '85%', maxWidth: '340px', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '15px', display: 'flex', justifyContent: 'space-around', borderBottom: '3px solid #007AFF' }}>
          <Home size={24} onClick={() => setActiveTab('home')} color={activeTab === 'home' ? '#007AFF' : 'white'} style={{cursor: 'pointer'}} />
          <LayoutGrid size={24} onClick={() => setActiveTab('home')} color={activeTab === 'prices' ? '#007AFF' : 'white'} style={{cursor: 'pointer'}} />
          <Info size={24} onClick={() => setActiveTab('about')} color={activeTab === 'about' ? '#007AFF' : 'white'} style={{cursor: 'pointer'}} />
          <User size={24} onClick={() => setActiveTab('profile')} color={activeTab === 'profile' ? '#007AFF' : 'white'} style={{cursor: 'pointer'}} />
        </div>
      </div>
    </div>
  );
}
