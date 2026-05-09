import React, { useState, useRef } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, 
  MessageSquare, Instagram, Facebook, Send, ShieldCheck, X, CheckCircle2 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  
  // სექციების რეფერენსები ნავიგაციისთვის
  const pricingRef = useRef(null);
  const homeRef = useRef(null);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "https://lh3.googleusercontent.com/d/1f_wZs5TugjvcEfC9U-4kXtgT8Oc5sjF1";

  const translations = {
    GE: {
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
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
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      slogan: "Stay Focused on Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes",
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
      aboutContent: "Geo Docs Service is a fully automated platform for document generation.",
      privacyTitle: "Privacy Policy",
      privacyContent: "Your data is used only for processing and is permanently deleted within 2 minutes.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    }
  };

  const t = translations[lang] || translations['GE'];

  const scrollToPrices = () => {
    setActiveTab('prices');
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToHome = () => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '100px' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '13px' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      {/* Page Content */}
      <main style={{ padding: '20px' }}>
        
        {activeTab === 'home' || activeTab === 'prices' ? (
          <div ref={homeRef}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ fontSize: '34px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px', lineHeight: 1 }}>{t.slogan}</h1>
            </div>

            <button onClick={() => window.open(googleFormUrl)} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '20px', cursor: 'pointer', marginBottom: '40px' }}>
              <Zap fill="black" size={20} style={{marginRight: '8px'}} /> {t.cvBtn}
            </button>

            {/* Why Us Section */}
            <div style={{ backgroundColor: '#2A2A2A', padding: '20px', borderRadius: '25px', marginBottom: '30px' }}>
              <h3 style={{ color: '#FFB800', fontStyle: 'italic', marginBottom: '15px', fontSize: '16px' }}>{t.whyTitle}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {t.whyItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
                    <CheckCircle2 size={14} color="#007AFF" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div ref={pricingRef} style={{ paddingTop: '20px' }}>
              <h2 style={{ fontSize: '22px', fontStyle: 'italic', marginBottom: '20px', color: '#FFB800' }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <button key={i} onClick={() => window.open(googleFormUrl)} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '25px', border: 'none', color: 'white', textAlign: 'left', marginBottom: '12px' }}>
                  <div style={{ fontSize: '14px', opacity: 0.8 }}>{p.title}</div>
                  <div style={{ color: '#FFB800', fontSize: '28px', fontWeight: '900', fontStyle: 'italic' }}>{p.price}</div>
                </button>
              ))}
            </div>
          </div>
        ) : activeTab === 'about' ? (
          <div style={{ padding: '20px', textAlign: 'center', animation: 'fadeIn 0.5s' }}>
            <Info size={50} color="#FFB800" style={{marginBottom: '20px'}} />
            <h2 style={{ fontStyle: 'italic', fontSize: '28px', marginBottom: '20px' }}>{t.aboutTitle}</h2>
            <p style={{ lineHeight: '1.8', fontSize: '16px', backgroundColor: '#2A2A2A', padding: '25px', borderRadius: '25px' }}>{t.aboutContent}</p>
          </div>
        ) : (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <MessageSquare size={50} color="#FFB800" style={{marginBottom: '20px'}} />
            <h2 style={{ fontStyle: 'italic', fontSize: '28px', marginBottom: '20px' }}>{t.privacyTitle}</h2>
            <p style={{ lineHeight: '1.8', fontSize: '16px', backgroundColor: '#2A2A2A', padding: '25px', borderRadius: '25px' }}>{t.privacyContent}</p>
          </div>
        )}

        {/* Footer Branding */}
        <footer style={{ textAlign: 'center', marginTop: '60px', padding: '20px' }}>
          <img src={logoUrl} alt="Footer Logo" style={{ width: '50px', marginBottom: '10px' }} />
          <h3 style={{ fontStyle: 'italic', fontWeight: '900', fontSize: '18px' }}>GEO DOCS SERVICE</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
            <Instagram size={22} /> <Facebook size={22} /> <Send size={22} />
          </div>
          {/* გასწორებული თეთრი ბმული */}
          <button onClick={() => setActiveTab('privacy')} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px', marginBottom: '15px' }}>
            {t.privacyTitle}
          </button>
          <p style={{ fontSize: '10px', opacity: 0.6, marginTop: '10px' }}>{t.rights}</p>
        </footer>
      </main>

      {/* Navigation Bar */}
      <div style={{ position: 'fixed', bottom: '15px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', borderRadius: '35px', padding: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '3px solid #007AFF', zIndex: 100 }}>
        <Home 
          size={26} 
          onClick={goToHome} 
          style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} 
        />
        <LayoutGrid 
          size={26} 
          onClick={scrollToPrices} 
          style={{ cursor: 'pointer', color: activeTab === 'prices' ? '#007AFF' : 'white' }} 
        />
        <Info 
          size={26} 
          onClick={() => setActiveTab('about')} 
          style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} 
        />
        <Bell size={26} color="#444" />
        <MessageSquare 
          size={26} 
          onClick={() => setActiveTab('privacy')} 
          style={{ cursor: 'pointer', color: activeTab === 'privacy' ? '#007AFF' : 'white' }} 
        />
      </div>
    </div>
  );
}
