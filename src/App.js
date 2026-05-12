import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, CheckCircle2, Lock 
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
      privacyContent: "ჩვენთვის პრიორიტეტულია თქვენი ანონიმურობა. სისტემაში შეყვანილი ინფორმაცია გამოიყენება მხოლოდ დოკუმენტის შესაქმნელად და გენერირებიდან ზუსტად 2 წუთში სრულად იშლება ბაზიდან. ჩვენ არ ვინახავთ თქვენს პერსონალურ მონაცემებს გრძელვადიანად.",
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
      privacyContent: "Anonymity is our priority. Information is used only for document generation and is deleted exactly 2 minutes after processing.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files to ensure the best experience.",
      cookieBtn: "I Agree"
    }
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px', overflowX: 'hidden' }}>
      
      {/* Header with Address Bar Simulation */}
      <header style={{ 
        backgroundColor: '#1A1A1A', 
        padding: '10px 15px', 
        position: 'fixed', 
        top: 0, 
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <img src={logoUrl} alt="L" style={{ width: '28px', height: '28px', borderRadius: '50%' }} />
            <span style={{ fontWeight: '900', fontSize: '12px', fontStyle: 'italic' }}>GEO DOCS</span>
          </div>
          <div style={{ backgroundColor: '#000', padding: '2px', borderRadius: '6px', display: 'flex', gap: '2px' }}>
            {['GE', 'EN'].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>{l}</button>
            ))}
          </div>
        </div>

        {/* Address Bar Simulation */}
        <div style={{ 
          backgroundColor: '#000', 
          borderRadius: '10px', 
          padding: '6px 12px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          border: '1px solid #333',
          justifyContent: 'center'
        }}>
          <Lock size={12} color="#4ade80" />
          <span style={{ fontSize: '12px', color: '#ccc', letterSpacing: '0.5px' }}>www.geodocsservice.ge</span>
        </div>
      </header>

      <div style={{ height: '110px' }}></div>

      <main style={{ padding: '0 20px' }}>
        {activeTab === 'home' ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              
              <div style={{ position: 'relative', display: 'inline-block', marginTop: '20px' }}>
                <h1 style={{ fontSize: '30px', fontWeight: '900', fontStyle: 'italic', lineHeight: 1.1, margin: 0 }}>
                  <span style={{ color: '#FFB800' }}>{t.sloganPart1}</span><br />
                  <span style={{ color: 'white' }}>{t.sloganPart2}</span>
                </h1>
                <img 
                  src={robotUrl} 
                  alt="Damiso" 
                  style={{ width: '80px', position: 'absolute', right: '-65px', bottom: '-5px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} 
                />
              </div>
            </div>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '18px', borderRadius: '18px', border: 'none', fontWeight: '900', fontSize: '18px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'black' }}>
              <Zap fill="black" size={20} /> {t.cvBtn}
            </button>

            <button style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '18px', borderRadius: '18px', border: '2px dashed #FFB800', color: 'white', fontWeight: 'bold', fontSize: '15px', marginBottom: '35px', opacity: 0.8 }}>
              <FileText size={18} color="#FFB800" /> {t.invoiceBtn}
            </button>

            <div style={{ marginBottom: '35px' }}>
              <h2 style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '15px', color: '#FFB800', fontWeight: '900' }}>{t.whyTitle}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {t.whyItems.map((item, i) => (
                  <div key={i} style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '5px' }}>
                    <CheckCircle2 size={18} color="#FFB800" />
                    <span style={{ fontSize: '10px', fontWeight: 'bold' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div ref={pricingRef} style={{ marginBottom: '35px' }}>
              <h2 style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '15px', color: '#FFB800', fontWeight: '900' }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <div key={i} style={{ backgroundColor: '#2A2A2A', padding: '15px', borderRadius: '20px', marginBottom: '10px' }}>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>{p.title}</div>
                  <div style={{ color: '#FFB800', fontSize: '22px', fontWeight: '900', fontStyle: 'italic' }}>{p.price}</div>
                </div>
              ))}
            </div>

            {/* Privacy Integrated at bottom of home */}
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '20px', marginTop: '40px' }}>
              <h3 style={{ fontSize: '16px', color: '#FFB800', marginBottom: '10px', fontWeight: '900' }}>{t.privacyTitle}</h3>
              <p style={{ fontSize: '11px', lineHeight: '1.5', opacity: 0.8 }}>{t.privacyContent}</p>
            </div>
          </>
        ) : (
          <div style={{ padding: '20px 0' }}>
            <div style={{ backgroundColor: '#2A2A2A', padding: '25px', borderRadius: '25px', textAlign: 'center' }}>
              <Info size={30} color="#FFB800" style={{marginBottom: '15px'}} />
              <h2 style={{ fontStyle: 'italic', fontSize: '20px', marginBottom: '15px', fontWeight: '900' }}>{t.aboutTitle}</h2>
              <p style={{ lineHeight: '1.6', fontSize: '13px', color: '#eee' }}>{t.aboutContent}</p>
            </div>
          </div>
        )}

        <footer style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
            <Instagram size={20} /> <Facebook size={20} /> <Send size={20} />
          </div>
          <p style={{ fontSize: '10px', opacity: 0.4 }}>{t.rights}</p>
        </footer>
      </main>

      {showCookieConsent && (
        <div style={{ position: 'fixed', bottom: '90px', left: '15px', right: '15px', backgroundColor: '#1A1A1A', padding: '12px', borderRadius: '12px', border: '1px solid #FFB800', zIndex: 2000, textAlign: 'center' }}>
          <p style={{ fontSize: '10px', marginBottom: '8px' }}>{t.cookieMsg}</p>
          <button onClick={() => setShowCookieConsent(false)} style={{ backgroundColor: '#FFB800', color: 'black', border: 'none', padding: '5px 15px', borderRadius: '6px', fontWeight: 'bold', fontSize: '11px' }}>{t.cookieBtn}</button>
        </div>
      )}

      <nav style={{ position: 'fixed', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ width: '80%', backgroundColor: '#1A1A1A', borderRadius: '30px', padding: '12px', display: 'flex', justifyContent: 'space-around', borderBottom: '3px solid #007AFF' }}>
          <Home size={22} onClick={() => setActiveTab('home')} style={{ color: activeTab === 'home' ? '#007AFF' : 'white' }} />
          <LayoutGrid size={22} onClick={() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' })} />
          <Info size={22} onClick={() => setActiveTab('about')} style={{ color: activeTab === 'about' ? '#007AFF' : 'white' }} />
          <ShieldCheck size={22} color="#444" />
        </div>
      </nav>
    </div>
  );
}
