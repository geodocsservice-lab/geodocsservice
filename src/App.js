import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const pricingRef = useRef(null);

  // ნავიგაციის დამალვა/გამოჩენის ლოგიკა სკროლისას
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { 
        setShowNav(false); // აწევისას ქრება
      } else { 
        setShowNav(true);  // ჩამოწევისას ჩნდება
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 

  const translations = {
    GE: {
      slogan: "ნუ მოწყდები შენს საქმეს",
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
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    // ... EN და RU თარგმანები იგივე რჩება
  };

  const t = translations[lang] || translations['GE'];

  const handleLogoClick = () => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px', overflowX: 'hidden' }}>
      
      {/* Header - ყოველთვის ფიქსირებული (Sticky) */}
      <header style={{ 
        backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', 
        justifyContent: 'space-between', alignItems: 'center', 
        position: 'sticky', top: 0, zIndex: 1100, borderBottom: '1px solid #333' 
      }}>
        <div onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '13px', whiteSpace: 'nowrap' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        {activeTab === 'home' ? (
          /* მთავარი გვერდის კონტენტი */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ fontSize: '34px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px', lineHeight: 1.1 }}>{t.slogan}</h1>
            </div>
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '20px', cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><Zap fill="black" size={20} /> {t.cvBtn}</button>
            {/* ... დანარჩენი სექციები (Prices, Why us) ... */}
          </div>
        ) : (
          /* კონფიდენციალურობის და "ჩვენს შესახებ" გვერდები */
          <div style={{ padding: '10px 0', textAlign: 'center' }}>
             <div style={{ backgroundColor: '#2A2A2A', padding: '25px', borderRadius: '30px' }}>
              <ShieldCheck size={35} color="#FFB800" style={{marginBottom: '15px'}} />
              {/* დაპატარავებული შრიფტი სათაურისთვის */}
              <h2 style={{ fontStyle: 'italic', fontSize: '20px', marginBottom: '15px', fontWeight: '900', lineHeight: '1.2' }}>
                {activeTab === 'about' ? t.aboutTitle : t.privacyTitle}
              </h2>
              <p style={{ lineHeight: '1.6', fontSize: '14px', color: '#eee' }}>
                {activeTab === 'about' ? t.aboutContent : t.privacyContent}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px', cursor: 'pointer' }} onClick={handleLogoClick} />
          <h3 style={{ fontStyle: 'italic', fontWeight: '900', fontSize: '18px' }}>GEO DOCS SERVICE</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', margin: '20px 0' }}>
            <Instagram size={24} /> <Facebook size={24} /> <Send size={24} />
          </div>
          <p style={{ fontSize: '11px', opacity: 0.5 }}>{t.rights}</p>
        </footer>
      </main>

      {/* Navigation Bar - დამალვა/გამოჩენის ეფექტით */}
      <div style={{ 
        position: 'fixed', bottom: '20px', left: 0, right: 0, 
        display: 'flex', justifyContent: 'center', zIndex: 1000,
        transition: 'transform 0.3s ease-in-out',
