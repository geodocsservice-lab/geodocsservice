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
      regHint: "დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად",
      login: "შესვლა",
      register: "რეგისტრაცია",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '100px' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '16px' }}>GEO DOCS SERVICE</div>
        <div style={{ backgroundColor: '#000', borderRadius: '8px', padding: '2px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', borderRadius: '6px', padding: '5px 10px', cursor: 'pointer', fontSize: '12px' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: '#444', padding: '10px', borderRadius: '15px', fontSize: '12px', marginBottom: '20px' }}>
              <ShieldCheck size={16} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> {t.alert}
            </div>
            <h1 style={{ margin: '20px 0', fontSize: '24px', fontWeight: 'bold' }}>{t.slogan}</h1>
            <div style={{ width: '120px', height: '120px', backgroundColor: '#555', margin: '20px auto', borderRadius: '50%' }}></div>
            <button style={{ backgroundColor: '#FFB800', border: 'none', padding: '18px', width: '100%', borderRadius: '20px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginBottom: '10px' }}>{t.cvBtn}</button>
            <button style={{ backgroundColor: '#2A2A2A', border: '2px dashed #FFB800', padding: '15px', width: '100%', borderRadius: '20px', color: 'white', fontWeight: 'bold' }}>{t.invoiceBtn}</button>
            
            <h3 style={{ textAlign: 'left', marginTop: '30px' }}>{t.pricesTitle}</h3>
            {t.prices.map((p, i) => (
              <div key={i} style={{ backgroundColor: '#2A2A2A', padding: '15px', margin: '8px 0', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px' }}>{p.name}</span>
                <span style={{ color: '#FFB800', fontWeight: 'bold' }}>{p.price}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div style={{ backgroundColor: '#2A2A2A', padding: '25px', borderRadius: '20px', marginTop: '20px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '15px' }}>{t.aboutTitle}</h2>
            <p style={{ lineHeight: '1.6', fontSize: '14px' }}>{t.aboutContent}</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '13px', marginBottom: '15px', opacity: 0.9 }}>{t.regHint}</p>
            <User size={80} style={{ margin: '20px auto', color: '#FFB800' }} />
            <h2 style={{ marginBottom: '20px' }}>{t.profileTitle}</h2>
            <button style={{ width: '100%', padding: '15px', marginBottom: '10px', backgroundColor: '#007AFF', border: 'none', borderRadius: '15px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>{t.login}</button>
            <button style={{ width: '100%', padding: '15px', backgroundColor: 'transparent', border: '1px solid white', borderRadius: '15px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>{t.register}</button>
          </div>
        )}

        <footer style={{ marginTop: '50px', textAlign: 'center', opacity: 0.6 }}>
          <p>GEO DOCS SERVICE</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '15px 0' }}>
            <Instagram size={20} /> <Facebook size={20} /> <Send size={20} />
          </div>
          <p style={{ fontSize: '11px' }}>{t.rights}</p>
        </footer>
      </main>

      {/* Fixed Navigation */}
      <nav style={{ position: 'fixed', bottom: '20px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', border: '1px solid #333' }}>
        <Home onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} />
        <LayoutGrid onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} />
        <User onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer', color: activeTab === 'profile' ? '#007AFF' : 'white' }} />
      </nav>
    </div>
  );
}
