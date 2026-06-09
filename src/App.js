import React, { useState } from 'react';
import { Home, LayoutGrid, Info, User, ShieldCheck, Instagram, Facebook, Send } from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');

  const t = {
    GE: {
      alert: "პერსონალური ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      slogan: "ნუ მოწყდები შენს საქმეს",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      prices: [
        { name: "სივის ქართულად გენერირება", price: "20₾" },
        { name: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { name: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { name: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დოკუმენტების მომზადების პროცესის მაქსიმალური გამარტივება ხელოვნური ინტელექტის გამოყენებით.",
      profileTitle: "პირადი კაბინეტი",
      regHint: "შესვლა და რეგისტრაცია მალე იქნება ხელმისაწვდომი.",
      login: "შესვლა",
      register: "რეგისტრაცია",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '100px' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        <div>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ margin: '0 4px', backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 8px', cursor: 'pointer', fontSize: '12px' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: '#444', padding: '10px', borderRadius: '15px', fontSize: '12px', marginBottom: '20px' }}><ShieldCheck size={16} style={{ verticalAlign: 'middle' }} /> {t.alert}</div>
            <h1 style={{ margin: '20px 0', fontSize: '24px' }}>{t.slogan}</h1>
            <div style={{ width: '150px', height: '150px', backgroundColor: '#555', margin: '20px auto', borderRadius: '50%' }}>{/* აქ მოთავსდება რობოტის სურათი */}</div>
            <button style={{ backgroundColor: '#FFB800', border: 'none', padding: '18px', width: '100%', borderRadius: '20px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>{t.cvBtn}</button>
            <button style={{ backgroundColor: '#2A2A2A', border: '2px dashed #FFB800', padding: '15px', width: '100%', borderRadius: '20px', color: 'white', marginTop: '10px', fontWeight: 'bold' }}>{t.invoiceBtn}</button>
            
            <h3 style={{ textAlign: 'left', marginTop: '30px' }}>{t.pricesTitle}</h3>
            {t.prices.map((p, i) => (
              <div key={i} style={{ backgroundColor: '#2A2A2A', padding: '15px', margin: '8px 0', borderRadius: '15px', display: 'flex', justifyContent: 'space-between' }}>
                <span>{p.name}</span>
                <span style={{ color: '#FFB800', fontWeight: 'bold' }}>{p.price}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div style={{ backgroundColor: '#2A2A2A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2>{t.aboutTitle}</h2>
            <p style={{ lineHeight: '1.6' }}>{t.aboutContent}</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <User size={80} style={{ margin: '20px auto', color: '#FFB800' }} />
            <h2>{t.profileTitle}</h2>
            <p style={{ opacity: 0.8, marginBottom: '20px' }}>{t.regHint}</p>
            <button style={{ width: '100%', padding: '15px', marginBottom: '10px', backgroundColor: '#007AFF', border: 'none', borderRadius: '15px', color: 'white', fontWeight: 'bold' }}>{t.login}</button>
            <button style={{ width: '100%', padding: '15px', backgroundColor: 'transparent', border: '1px solid white', borderRadius: '15px', color: 'white', fontWeight: 'bold' }}>{t.register}</button>
          </div>
        )}
      </main>

      {/* Navigation */}
      <nav style={{ position: 'fixed', bottom: '20px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', border: '1px solid #333' }}>
        <Home onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} />
        <LayoutGrid style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} />
        <User onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer', color: activeTab === 'profile' ? '#007AFF' : 'white' }} />
      </nav>
    </div>
  );
}
