import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, CheckCircle2, Lock, Shield
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
  const robotUrl = "/damiso-ok-high-res.png"; 

  const translations = {
    GE: {
      sloganPart1: "ნუ მოწყდები ",
      sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      whyTitle: "რატომ ჩვენ?",
      whyItems: ["სწრაფი გენერირება (2 წთ)", "მრავალენოვანი მხარდაჭერა", "მაქსიმალური სიზუსტე AI-თ", "სრული ანონიმურობა"],
      pricesTitle: "ტარიფები",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დოკუმენტების მომზადების პროცესის მაქსიმალური გამარტივება ხელოვნური ინტელექტის გამოყენებით.",
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyContent: "ჩვენთვის პრიორიტეტულია თქვენი ანონიმურობა. სისტემაში შეყვანილი ინფორმაცია გამოიყენება მხოლოდ დოკუმენტის შესაქმნელად და გენერირებიდან ზუსტად 2 წუთში სრულად იშლება ბაზიდან.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშ (Cache) ფაილებს მომსახურების გასაუმჯობესებლად.",
      cookieBtn: "ვეთანხმები"
    },
    EN: {
      sloganPart1: "Stay Focused on ",
      sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes",
      invoiceBtn: "Invoice (Soon)",
      whyTitle: "Why Us?",
      whyItems: ["Fast Generation (2 min)", "Multilingual Support", "AI Accuracy", "Full Anonymity"],
      pricesTitle: "Pricing",
      prices: [
        { title: "CV in Georgian", price: "20₾" },
        { title: "CV in Foreign Language", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited CV Generation", price: "75₾" }
      ],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to simplify document preparation using AI.",
      privacyTitle: "Privacy Policy",
      privacyContent: "Anonymity is our priority. Information is used only for generation and is deleted exactly 2 minutes after processing.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files to ensure the best experience.",
      cookieBtn: "I Agree"
    }
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px', overflowX: 'hidden' }}>
      
      {/* Header with Search Bar and Lock */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '12px 15px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <img src={logoUrl} alt="Logo" style={{ width: '28px', height: '28px', borderRadius: '50%' }} />
            <span style={{ fontWeight: '900', fontSize: '14px', fontStyle: 'italic' }}>GEO DOCS</span>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            {['GE', 'EN'].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : '#333', color: 'white', border: 'none', padding: '4px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 'bold' }}>{l}</button>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: '#000', borderRadius: '10px', padding: '8px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #333', justifyContent: 'center' }}>
          <Lock size={12} color="#4ade80" />
          <span style={{ fontSize: '12px', color: '#ccc' }}>www.geodocsservice.ge</span>
        </div>
      </header>

      <div style={{ height: '120px' }}></div>

      <main style={{ padding: '0 20px' }}>
        {activeTab === 'home' ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              
              <div style={{ position: 'relative', display: 'inline-block', marginTop: '25px', width: '100%' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', lineHeight: 1.1, margin: 0 }}>
                  <span style={{ color: '#FFB800' }}>{t.sloganPart1}</span><br />
                  <span style={{ color: 'white' }}>{t.sloganPart2}</span>
                </h1>
                <img 
                  src={robotUrl} 
                  alt="Damiso" 
                  style={{ 
                    width: '75px', 
                    position: 'absolute', 
                    right: '0', 
                    top: '-10px',
                    borderRadius: '15px' 
                  }} 
                />
              </div>
            </div>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '19px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'black' }}>
              <Zap fill="black" size={20} /> {t.cvBtn}
            </button>

            <button style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '18px', borderRadius: '20px', border: '2px dashed #FFB800', color: 'white', fontWeight: 'bold', fontSize: '16px', marginBottom: '40px', opacity: 0.9 }}>
              <FileText size={20} color="#FFB800" /> {t.invoiceBtn}
            </button>

            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontStyle: 'italic', marginBottom: '20px', color: '#FFB800', fontWeight: '900' }}>{t.whyTitle}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {t.whyItems.map((item, i) => (
                  <div key={i} style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px' }}>
                    <CheckCircle2 size={20} color="#FFB800" />
                    <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div ref={pricingRef} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontStyle: 'italic', marginBottom: '20px', color: '#FFB800', fontWeight: '900' }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <div key={i} style={{ backgroundColor: '#2A2A2A', padding: '20px', borderRadius: '25px', marginBottom: '12px', borderLeft: '4px solid #FFB800' }}>
                  <div style={{ fontSize: '13px', opacity: 0.8 }}>{p.title}</div>
                  <div style={{ color: '#FFB800', fontSize: '26px', fontWeight: '900', fontStyle: 'italic' }}>{p.price}</div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '25px', borderRadius: '25px', marginTop: '20px' }}>
              <h3 style={{ fontSize: '18px', color: '#FFB800', marginBottom: '10px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={20} /> {t.privacyTitle}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.9 }}>{t.privacyContent}</p>
            </div>
          </>
        ) : (
          <div style={{ padding: '20px 0' }}>
            <div style={{ backgroundColor: '#2A2A2A', padding: '30px', borderRadius: '30px', textAlign: 'center' }}>
              <Info size={40} color="#FFB800" style={{marginBottom: '20px'}} />
              <h2 style={{ fontStyle: 'italic', fontSize: '24px', marginBottom: '20px', fontWeight: '900' }}>{t.aboutTitle}</h2>
              <p style={{ lineHeight: '1.7', fontSize: '15px', color: '#eee' }}>{t.aboutContent}</p>
            </div>
          </div>
        )}

        <footer style={{ textAlign: 'center', marginTop: '50px', paddingBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
            <Instagram size={24} /> <Facebook size={24} /> <Send size={24} />
          </div>
          <p style={{ fontSize: '11px', opacity: 0.5 }}>{t.rights}</p>
        </footer>
      </main>

      {showCookieConsent && (
        <div style={{ position: 'fixed', bottom: '100px', left: '20px', right: '20px', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '15px', border: '1px solid #FFB800', zIndex: 2000, textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.8)' }}>
          <p style={{ fontSize: '11px', marginBottom: '10px' }}>{t.cookieMsg}</p>
          <button onClick={() => setShowCookieConsent(false)} style={{ backgroundColor: '#FFB800', color: 'black', border: 'none', padding: '8px 25px', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px' }}>{t.cookieBtn}</button>
        </div>
      )}

      <nav style={{ position: 'fixed', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ width: '85%', maxWidth: '350px', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '4px solid #007AFF', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <Home size={26} onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} />
          <LayoutGrid size={26} onClick={() => { setActiveTab('home'); setTimeout(() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ cursor: 'pointer', color: 'white' }} />
          <Info size={26} onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} />
          <ShieldCheck size={26} style={{ color: 'white', opacity: 0.8 }} />
        </div>
      </nav>
    </div>
  );
}
