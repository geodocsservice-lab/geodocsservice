import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  
  const pricingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Google Form-ის ჩაშენებული ლინკი
  const embedFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?embedded=true";
  
  // ლოგოს ლინკი (დარწმუნდი რომ ფაილი ატვირთულია ამ მისამართზე)
  const logoUrl = "https://geodocsservice.ge/logo.png"; 

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
    EN: {
      slogan: "Stay Focused on Your Business",
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
      aboutContent: "Geo Docs Service is a fully automated platform for document generation.",
      privacyTitle: "Privacy Policy",
      privacyContent: "Your data is used only for processing and is permanently deleted within 2 minutes.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      slogan: "Не отвлекайтесь от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты",
      invoiceBtn: "Инвойс (Скоро)",
      whyTitle: "Почему мы?",
      whyItems: ["Быстрая генерация (2 мин)", "Мультиязычность", "Точность ИИ", "Анонимность"],
      pricesTitle: "Тарифы",
      prices: [
        { title: "Резюме на грузинском", price: "20₾" },
        { title: "Резюме на ин. языке", price: "35₾" },
        { title: "Резюме на 5 языках", price: "55₾" },
        { title: "Безлимитное резюме", price: "75₾" }
      ],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — это первая грузинская полностью автоматизированная платформа.",
      privacyTitle: "Конфиденциальность",
      privacyContent: "Ваша анонимность — наш приоритет. Информация удаляется через 2 минуты.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  };

  const t = translations[lang] || translations['GE'];

  const handleLogoClick = () => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px', overflowX: 'hidden' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img 
            src={logoUrl} 
            alt="Logo" 
            style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} 
            onError={(e) => { e.target.src = "https://via.placeholder.com/35?text=GD"; }} 
          />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '13px' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: activeTab === 'form' ? '0' : '20px' }}>
        {activeTab === 'home' || activeTab === 'prices' ? (
          <div>
            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ fontSize: '34px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px', lineHeight: 1.1 }}>{t.slogan}</h1>
            </div>

            {/* AI CV Button */}
            <button onClick={() => setActiveTab('form')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '20px', cursor: 'pointer', marginBottom: '15px' }}>
              <Zap fill="black" size={20} style={{marginRight: '8px'}} /> {t.cvBtn}
            </button>

            {/* Invoice Button (Soon) - Now also leads to form */}
            <button onClick={() => setActiveTab('form')} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '20px', border: '2px dashed #FFB800', color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: 0.9 }}>
              <FileText size={20} color="#FFB800" /> {t.invoiceBtn}
            </button>

            {/* Pricing Section */}
            <div ref={pricingRef} style={{ paddingTop: '20px', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontStyle: 'italic', marginBottom: '20px', color: '#FFB800', fontWeight: '900' }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <button key={i} onClick={() => setActiveTab('form')} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '25px', border: 'none', color: 'white', textAlign: 'left', marginBottom: '12px', cursor: 'pointer' }}>
                  <div style={{ fontSize: '14px', opacity: 0.8 }}>{p.title}</div>
                  <div style={{ color: '#FFB800', fontSize: '28px', fontWeight: '900', fontStyle: 'italic' }}>{p.price}</div>
                </button>
              ))}
            </div>

            {/* Why Us Section */}
            <div style={{ backgroundColor: '#2A2A2A', padding: '25px', borderRadius: '30px', marginBottom: '30px' }}>
              <h3 style={{ color: '#FFB800', fontStyle: 'italic', marginBottom: '20px', fontSize: '18px', fontWeight: '900' }}>{t.whyTitle}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {t.whyItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                    <CheckCircle2 size={16} color="#007AFF" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : activeTab === 'form' ? (
          <div style={{ width: '100%', height: 'calc(100vh - 150px)', overflow: 'hidden', padding: '0 5px' }}>
             <iframe 
               src={embedFormUrl} 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               marginHeight="0" 
               marginWidth="0"
               style={{ borderRadius: '15px', backgroundColor: '#fff' }}
             >იტვირთება...</iframe>
          </div>
        ) : activeTab === 'about' ? (
          <div style={{ padding: '20px 0', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#2A2A2A', padding: '30px', borderRadius: '30px' }}>
              <Info size={40} color="#FFB800" style={{marginBottom: '20px'}} />
              <h2 style={{ fontStyle: 'italic', fontSize: '28px', marginBottom: '20px', fontWeight: '900' }}>{t.aboutTitle}</h2>
              <p style={{ lineHeight: '1.8', fontSize: '16px', color: '#eee' }}>{t.aboutContent}</p>
            </div>
          </div>
        ) : (
          <div style={{ padding: '20px 0', textAlign: 'center' }}>
             <div style={{ backgroundColor: '#2A2A2A', padding: '30px', borderRadius: '30px' }}>
              <ShieldCheck size={40} color="#FFB800" style={{marginBottom: '20px'}} />
              <h2 style={{ fontStyle: 'italic', fontSize: '28px', marginBottom: '20px', fontWeight: '900' }}>{t.privacyTitle}</h2>
              <p style={{ lineHeight: '1.8', fontSize: '16px', color: '#eee' }}>{t.privacyContent}</p>
            </div>
          </div>
        )}

        {/* Footer (Hidden on form tab to save space) */}
        {activeTab !== 'form' && (
          <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
            <img src={logoUrl} alt="Footer Logo" style={{ width: '50px', marginBottom: '10px', borderRadius: '50%' }} onClick={handleLogoClick} />
            <h3 style={{ fontStyle: 'italic', fontWeight: '900', fontSize: '18px', cursor: 'pointer' }} onClick={handleLogoClick}>GEO DOCS SERVICE</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', margin: '20px 0' }}>
              <Instagram size={24} style={{cursor:'pointer'}} /> <Facebook size={24} style={{cursor:'pointer'}} /> <Send size={24} style={{cursor:'pointer'}} />
            </div>
            <button onClick={() => setActiveTab('privacy')} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px' }}>
              {t.privacyTitle}
            </button>
            <p style={{ fontSize: '11px', opacity: 0.5, marginTop: '20px' }}>{t.rights}</p>
          </footer>
        )}
      </main>

      {/* Navigation Bar */}
      <div style={{ position: 'fixed', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ width: '90%', maxWidth: '350px', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '4px solid #007AFF', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <Home size={26} onClick={handleLogoClick} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} />
          <LayoutGrid size={26} onClick={() => { setActiveTab('home'); setTimeout(() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ cursor: 'pointer', color: activeTab === 'prices' ? '#007AFF' : 'white' }} />
          <Info size={26} onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} />
          <Bell size={26} color="#444" style={{ opacity: 0.5 }} />
        </div>
      </div>
    </div>
  );
}

