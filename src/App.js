import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, User 
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
      pricesTitle: "ტარიფები", aboutTitle: "ჩვენს შესახებ",
      login: "შესვლა და რეგისტრაცია", loginBtn: "შესვლა", regBtn: "რეგისტრაცია",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა.",
      privacyTitle: "კონფიდენციალურობა",
      privacyContent: "ჩვენთვის პრიორიტეტულია თქვენი ანონიმურობა. ინფორმაცია იშლება 2 წუთში.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშ ფაილებს.", cookieBtn: "ვეთანხმები"
    }
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px', overflowX: 'hidden' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '12px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '15px' }}>GEO DOCS SERVICE</div>
        </div>
      </header>

      <div style={{ height: '80px' }}></div>

      <main style={{ padding: '0 20px' }}>
        {activeTab === 'home' || activeTab === 'prices' ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px' }}>
                <span style={{ color: '#FFB800' }}>{t.sloganPart1}</span>{t.sloganPart2}
              </h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
              <img src={robotUrl} alt="AI Robot" style={{ width: '260px', height: 'auto' }} />
            </div>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '19px', cursor: 'pointer', marginBottom: '15px' }}>{t.cvBtn}</button>
            
            <div ref={pricingRef} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontStyle: 'italic', marginBottom: '20px', color: '#FFB800' }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <button key={i} onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '25px', border: 'none', color: 'white', textAlign: 'left', marginBottom: '12px', cursor: 'pointer' }}>
                  <div style={{ opacity: 0.8 }}>{p.title}</div>
                  <div style={{ color: '#FFB800', fontSize: '26px', fontWeight: '900' }}>{p.price}</div>
                </button>
              ))}
            </div>
          </div>
        ) : activeTab === 'profile' ? (
          <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#2A2A2A', borderRadius: '30px', marginTop: '20px' }}>
            <User size={60} color="#FFB800" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>{t.login}</h2>
            <button style={{ backgroundColor: '#007AFF', width: '100%', padding: '15px', borderRadius: '15px', border: 'none', color: 'white', marginBottom: '10px', cursor: 'pointer' }}>{t.loginBtn}</button>
            <button style={{ backgroundColor: 'transparent', width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #FFB800', color: '#FFB800', cursor: 'pointer' }}>{t.regBtn}</button>
          </div>
        ) : (
          <div style={{ padding: '20px 0' }}>
            <div style={{ backgroundColor: '#2A2A2A', padding: '30px', borderRadius: '30px', textAlign: 'center' }}>
              <Info size={40} color="#FFB800" style={{marginBottom: '20px'}} />
              <h2 style={{ fontStyle: 'italic', fontSize: '24px', marginBottom: '20px' }}>{t.aboutTitle}</h2>
              <p style={{ lineHeight: '1.7' }}>{t.aboutContent}</p>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ width: '85%', maxWidth: '340px', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '3px solid #007AFF', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
          <Home size={24} onClick={() => setActiveTab('home')} color={activeTab === 'home' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
          <LayoutGrid size={24} onClick={() => { setActiveTab('home'); setTimeout(() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }} color={activeTab === 'prices' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
          <Info size={24} onClick={() => setActiveTab('about')} color={activeTab === 'about' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
          <User size={24} onClick={() => setActiveTab('profile')} color={activeTab === 'profile' ? '#007AFF' : 'white'} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}
