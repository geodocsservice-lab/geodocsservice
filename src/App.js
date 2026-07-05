import React, { useState, useEffect } from 'react';
import { 
  Home, LayoutGrid, Info, Instagram, Facebook, Send, MessageCircle 
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
      setShowNav(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const t = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 5 წუთში!",
      cvBtn: "AI CV 5 წუთში", 
      invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "10₾" }, 
        { title: "სივის უცხო ენაზე გენერირება", price: "15₾" }
      ],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი გუნდი მუშაობს მაღალი სიზუსტის ხელოვნურ ინტელექტზე, რათა თქვენი დოკუმენტები მომზადდეს წამებში. ჩვენ პრიორიტეტს ვანიჭებთ უსაფრთხოებას, კონფიდენციალურობას და მომხმარებლის კომფორტს.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 5 minutes!",
      cvBtn: "AI CV in 5 Minutes", 
      invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      prices: [
        { title: "CV Generation in Georgian", price: "10₾" }, 
        { title: "CV Generation in Foreign Language", price: "15₾" }
      ],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our team works on high-precision AI to ensure your documents are prepared in seconds. We prioritize security, confidentiality, and user comfort.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Данные удаляются через 5 минут!",
      cvBtn: "AI CV за 5 минут", 
      invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы",
      prices: [
        { title: "Генерация резюме на грузинском", price: "10₾" }, 
        { title: "Генерация резюме на иностранном языке", price: "15₾" }
      ],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша команда работает над высокоточным ИИ, чтобы ваши документы готовились за секунды.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
            <img src={logoUrl} alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', borderRadius: '8px', padding: '2px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px', boxSizing: 'border-box' }}>
        
        {/* Main Home Page */}
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '15px', fontSize: '11px', marginBottom: '20px' }}>
              {t.alert}
            </div>
            
            <h1 style={{ fontSize: '26px', margin: '20px 0' }}>
              <span style={{ color: 'white' }}>{t.sloganPart1}</span>
              <span style={{ color: '#FFB800' }}>{t.sloganPart2}</span>
            </h1>
            
            <img src={robotUrl} alt="Robot" style={{ width: '220px', margin: '10px auto' }} />
            
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '18px', background: '#FFB800', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', color: 'black' }}>
              {t.cvBtn}
            </button>
            
            <button style={{ width: '100%', padding: '15px', background: '#007AFF', border: '2px dashed #FFB800', marginTop: '15px', borderRadius: '20px', color: 'white', fontWeight: 'bold' }}>
              {t.invoiceBtn}
            </button>

            {/* ტარიფების სექცია */}
            <div id="pricing-section" style={{ marginTop: '40px' }}>
              <h2 style={{ textAlign: 'left', marginBottom: '20px', color: '#FFB800' }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <button key={i} onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', background: '#2A2A2A', padding: '20px', borderRadius: '20px', border: '1px solid #444', marginBottom: '10px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ fontSize: '14px' }}>{p.title}</span> 
                  <b style={{ color: '#FFB800', fontSize: '18px' }}>{p.price}</b>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* About Us */}
        {activeTab === 'about' && (
          <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2 style={{ color: '#FFB800' }}>{t.aboutTitle}</h2>
            <p style={{ lineHeight: '1.6' }}>{t.aboutContent}</p>
          </div>
        )}

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '40px', opacity: 0.6 }}>
          <img src={logoUrl} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
            <Instagram size={20} />
            <Facebook size={20} />
            <Send size={20} />
          </div>
          <p style={{ fontSize: '10px' }}>{t.rights}</p>
        </footer>
      </main>

      {/* Dr. Damiso Messenger Chat Button */}
      <div 
        style={{
          position: 'fixed',
          bottom: showNav ? '90px' : '30px', 
          right: '20px',
          backgroundColor: '#007AFF',
          color: 'white',
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'bottom 0.3s'
        }}
        onClick={() => window.open('https://m.me/geodocsservice', '_blank')} 
      >
        <MessageCircle size={28} />
      </div>

      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', bottom: '15px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', 
        padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', 
        zIndex: 1000, boxSizing: 'border-box',
        transition: 'transform 0.3s, opacity 0.3s',
        transform: showNav ? 'translateY(0)' : 'translateY(100px)',
        opacity: showNav ? 1 : 0
      }}>
        <Home onClick={() => setActiveTab('home')} style={{ color: activeTab === 'home' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        
        <LayoutGrid 
          onClick={() => {
            setActiveTab('home');
            setTimeout(() => {
              document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} 
          style={{ cursor: 'pointer', color: 'white' }} 
        />
        
        <Info onClick={() => setActiveTab('about')} style={{ color: activeTab === 'about' ? '#007AFF' : 'white', cursor: 'pointer' }} />
      </nav>
    </div>
  );
}
