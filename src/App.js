import React, { useState } from 'react';
import { 
  Zap, FileText, Home, LayoutGrid, Info, Bell, 
  MessageSquare, Instagram, Facebook, Send, Phone, Mail, ShieldCheck, Globe 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');

  const content = {
    GE: {
      brand: "GEO DOCS SERVICE", slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!", cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)", pricesTitle: "ტარიფები",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      aboutTitle: "რატომ GEO DOCS SERVICE?",
      aboutDesc: "ჩვენი პლატფორმა შეიქმნა იმისათვის, რომ დაგიზოგოთ ყველაზე ძვირფასი — დრო.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    }
    // EN და RU დაემატება ანალოგიურად
  };

  const cur = content.GE; // მაგალითისთვის GE

  const styles = {
    body: { backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', paddingBottom: '120px' },
    nav: { backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    logoBox: { display: 'flex', flexDirection: 'column', fontWeight: '900', fontStyle: 'italic', lineHeight: '1' },
    langBar: { backgroundColor: '#000', padding: '4px', borderRadius: '8px', display: 'flex', gap: '5px' },
    langBtnActive: { backgroundColor: '#007AFF', color: 'white', border: 'none', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' },
    alertBox: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '10px 20px', margin: '20px auto', width: 'fit-content', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', color: '#ccc' },
    heroTitle: { fontSize: '42px', fontWeight: '900', fontStyle: 'italic', textAlign: 'center', margin: '40px 0', lineHeight: '1.1' },
    yellowBtn: { backgroundColor: '#FFB800', color: 'black', width: '90%', margin: '10px auto', padding: '20px', borderRadius: '20px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '22px', fontWeight: '900' },
    darkBtn: { backgroundColor: '#2A2A2A', color: '#ccc', width: '90%', margin: '10px auto', padding: '20px', borderRadius: '20px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '18px' },
    priceCard: { backgroundColor: '#2A2A2A', width: '90%', margin: '15px auto', padding: '25px', borderRadius: '30px', textAlign: 'left' },
    priceValue: { color: '#FFB800', fontSize: '35px', fontWeight: '900', fontStyle: 'italic', marginTop: '10px' },
    footerNav: { position: 'fixed', bottom: '20px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '4px solid #007AFF' },
    activeIcon: { backgroundColor: '#007AFF', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    aboutCard: { backgroundColor: '#2A2A2A', width: '90%', margin: '40px auto', padding: '30px', borderRadius: '40px' }
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.nav}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: 'white', color: 'black', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '10px' }}>LOGO</div>
          <div style={styles.logoBox}>
            <span>GEO DOCS</span>
            <span>SERVICE</span>
          </div>
        </div>
        <div style={styles.langBar}>
          <button style={styles.langBtnActive}>GE</button>
          <button style={{ background: 'none', color: '#666', border: 'none', fontSize: '12px' }}>EN</button>
          <button style={{ background: 'none', color: '#666', border: 'none', fontSize: '12px' }}>RU</button>
        </div>
      </header>

      {/* Main UI */}
      <div style={styles.alertBox}>
        <ShieldCheck size={16} /> {cur.alert}
      </div>

      <h1 style={styles.heroTitle}>ნუ მოწყდები შენს საქმეს</h1>

      <button style={styles.yellowBtn}><Zap fill="black" /> {cur.cvBtn}</button>
      <button style={styles.darkBtn}><FileText size={20} /> {cur.invoiceBtn}</button>

      {/* Prices Section */}
      <div style={{ marginTop: '50px' }}>
        {cur.prices.map((p, i) => (
          <div key={i} style={styles.priceCard}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', width: '70%' }}>{p.title}</div>
            <div style={styles.priceValue}>{p.price}</div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div style={styles.aboutCard}>
        <h2 style={{ color: '#FFB800', fontStyle: 'italic', fontWeight: '900', fontSize: '24px', marginBottom: '20px' }}>რატომ GEO DOCS SERVICE?</h2>
        <p style={{ fontSize: '15px', lineHeight: '1.6', opacity: '0.8' }}>{cur.aboutDesc}</p>
        
        <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '20px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
           <div style={{ backgroundColor: '#222', padding: '10px', borderRadius: '10px' }}><Zap color="#007AFF" /></div>
           <div>
             <div style={{ fontWeight: 'bold', fontStyle: 'italic' }}>სისწრაფე</div>
             <div style={{ fontSize: '12px', opacity: 0.6 }}>მზა დოკუმენტი სულ რაღაც 2 წუთში</div>
           </div>
        </div>
      </div>

      {/* Final Contact Footer */}
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
         <div style={{ backgroundColor: 'white', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
            <span style={{ color: 'black', fontWeight: 'bold', fontSize: '10px' }}>LOGO</span>
         </div>
         <h3 style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</h3>
         <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#FFB800', fontWeight: 'bold' }}>
            <div><Phone size={16} inline /> +995 5XX XX XX XX</div>
            <div style={{ textDecoration: 'underline' }}>info@geodocs.ge</div>
         </div>
         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', opacity: 0.6 }}>
            <Instagram /> <Facebook /> <Send />
         </div>
         <p style={{ fontSize: '10px', marginTop: '40px', opacity: 0.4 }}>{cur.rights}</p>
      </div>

      {/* Navigation Bar */}
      <div style={styles.footerNav}>
        <div style={styles.activeIcon}><Home size={24} /></div>
        <LayoutGrid size={24} color="#666" />
        <Info size={24} color="#666" />
        <Bell size={24} color="#666" />
        <MessageSquare size={24} color="#666" />
      </div>
    </div>
  );
}
