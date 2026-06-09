import React, { useState } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, FileText,
  Instagram, Facebook, Send, ShieldCheck, User 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  
  const googleFormUrl = "#"; // აქ ჩასვი შენი Google Form-ის ლინკი
  const logoUrl = "/logo.png"; // შენი ლოგოს მისამართი
  const robotUrl = "/robot.png"; // რობოტის სურათის მისამართი

  const translations = {
    GE: {
      alert: "პერსონალური ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      slogan: "ნუ მოწყდები შენს საქმეს",
      aiBtn: "AI CV 2 წუთში",
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      profileTitle: "პირადი კაბინეტი"
    },
    EN: {
      alert: "Personal data is deleted automatically in 2 minutes!",
      slogan: "Stay focused on your business",
      aiBtn: "AI CV in 2 minutes",
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      profileTitle: "Profile"
    },
    RU: {
      alert: "Персональные данные удаляются автоматически через 2 минуты!",
      slogan: "Не отвлекайтесь от дел",
      aiBtn: "AI CV за 2 минуты",
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      profileTitle: "Личный кабинет"
    }
  };

  const t = translations[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '40px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>GEO DOCS SERVICE</span>
        </div>
        <div style={{ backgroundColor: '#000', borderRadius: '5px', padding: '2px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        {activeTab === 'home' && (
          <>
            <div style={{ backgroundColor: '#555', padding: '10px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px' }}>
              <ShieldCheck style={{ verticalAlign: 'middle', marginRight: '5px' }} /> {t.alert}
            </div>
            <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>{t.slogan}</h1>
            <img src={robotUrl} alt="AI" style={{ width: '200px', marginBottom: '20px' }} />
            <button style={{ backgroundColor: '#FFB800', border: 'none', padding: '20px 40px', borderRadius: '15px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.aiBtn}
            </button>
          </>
        )}

        {activeTab === 'about' && (
          <div style={{ backgroundColor: '#2A2A2A', padding: '20px', borderRadius: '15px' }}>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutContent}</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <User size={80} style={{ margin: '20px auto' }} />
            <h2>{t.profileTitle}</h2>
          </div>
        )}
      </main>

      {/* Footer & Nav */}
      <footer style={{ marginTop: '50px', textAlign: 'center', paddingBottom: '100px' }}>
        <img src={logoUrl} alt="Logo" style={{ width: '50px', marginBottom: '10px' }} />
        <p>GEO DOCS SERVICE</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '15px 0' }}>
          <Instagram /> <Facebook /> <Send />
        </div>
        <p style={{ fontSize: '12px', opacity: 0.7 }}>{t.rights}</p>
      </footer>

      <nav style={{ position: 'fixed', bottom: '20px', left: '10%', width: '80%', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '30px', display: 'flex', justifyContent: 'space-around' }}>
        <Home onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <LayoutGrid style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ cursor: 'pointer' }} />
        <User onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer' }} />
      </nav>
    </div>
  );
}
