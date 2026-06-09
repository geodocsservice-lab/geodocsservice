import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, User, FileText,
  Instagram, Facebook, Send, ShieldCheck
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
      sloganPart1: "ნუ მოწყდები ",
      sloganPart2: "შენს საქმეს",
      alert: "პერსონალური ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      aboutTitle: "ჩვენს შესახებ",
      privacyTitle: "კონფიდენციალურობა",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშ ფაილებს მომსახურების გასაუმჯობესებლად.",
      cookieBtn: "ვეთანხმები"
    },
    // ... დანარჩენი ენები იგივეა
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px', overflowX: 'hidden' }}>
      
      <header style={{ backgroundColor: '#1A1A1A', padding: '12px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }}/>
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
        {activeTab === 'home' ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px' }}>
                <span style={{ color: '#FFB800' }}>{t.sloganPart1}</span>
                <span style={{ color: 'white' }}>{t.sloganPart2}</span>
              </h1>
            </div>

            {/* რობოტი უფრო პატარა ზომით */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
              <img src={robotUrl} alt="AI Robot" style={{ width: '180px', height: 'auto', display: 'block', maxHeight: '300px' }} onError={(e) => { e.target.style.display = 'none'; }}/>
            </div>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '19px', cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'black' }}>
              <Zap fill="black" size={20} /> {t.cvBtn}
            </button>

            {/* ინვოისი არაფერს შვრება */}
            <button style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '20px', border: '2px dashed #FFB800', color: 'white', fontWeight: 'bold', fontSize: '16px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: 0.9 }}>
              <FileText size={20} color="#FFB800" /> {t.invoiceBtn}
            </button>
          </div>
        ) : activeTab === 'profile' ? (
            <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#2A2A2A', borderRadius: '30px' }}>
                <User size={60} color="#FFB800" style={{ marginBottom: '20px' }} />
                <h2 style={{ fontStyle: 'italic' }}>პირადი გვერდი</h2>
                <p style={{ opacity: 0.7 }}>თქვენი მონაცემები აქ გამოჩნდება.</p>
            </div>
        ) : null}
      </main>

      {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ width: '85%', maxWidth: '340px', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '3px solid #007AFF', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
          <Home size={24} onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} />
          <LayoutGrid size={24} onClick={() => setActiveTab('prices')} style={{ cursor: 'pointer', color: activeTab === 'prices' ? '#007AFF' : 'white' }} />
          <User size={24} onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer', color: activeTab === 'profile' ? '#007AFF' : 'white' }} />
          <Info size={24} onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} />
        </div>
      </div>
    </div>
  );
}
