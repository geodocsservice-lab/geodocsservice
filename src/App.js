import React, { useState } from 'react';
import { 
  Zap, FileText, Home, LayoutGrid, Info, Bell, 
  MessageSquare, Instagram, Facebook, Send, Phone, ShieldCheck, X 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [showPrivacy, setShowPrivacy] = useState(false);

  // --- თქვენი მონაცემები ---
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/logo.jpg"; // დარწმუნდით, რომ ფაილი public ფოლდერშია ამ სახელით

  const content = {
    GE: {
      brand: "GEO DOCS SERVICE", slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!", cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyText: "Geo Docs Service-ზე შეყვანილი ყველა პერსონალური მონაცემი გამოიყენება მხოლოდ თქვენი დოკუმენტის გენერირებისთვის. პროცესის დასრულებისთანავე თქვენი მონაცემები სრულად და შეუქცევადად იშლება ჩვენი სისტემიდან მაქსიმუმ 2 წუთში.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    }
  };

  const cur = content.GE;

  const handleOrder = () => {
    window.open(googleFormUrl, "_blank");
  };

  const styles = {
    body: { backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', paddingBottom: '120px' },
    nav: { backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 },
    logoImg: { width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' },
    langBar: { backgroundColor: '#000', padding: '4px', borderRadius: '8px', display: 'flex', gap: '5px' },
    langBtnActive: { backgroundColor: '#007AFF', color: 'white', border: 'none', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' },
    alertBox: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '10px 20px', margin: '20px auto', width: 'fit-content', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: '#eee' },
    heroTitle: { fontSize: '42px', fontWeight: '900', fontStyle: 'italic', textAlign: 'center', margin: '40px 0', lineHeight: '1.1', padding: '0 15px' },
    yellowBtn: { backgroundColor: '#FFB800', color: 'black', width: '90%', margin: '10px auto', padding: '22px', borderRadius: '22px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '24px', fontWeight: '900', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' },
    priceCard: { backgroundColor: '#2A2A2A', width: '90%', margin: '15px auto', padding: '25px', borderRadius: '30px', border: 'none', color: 'white', textAlign: 'left', cursor: 'pointer', display: 'block', transition: 'transform 0.2s' },
    priceValue: { color: '#FFB800', fontSize: '38px', fontWeight: '900', fontStyle: 'italic', marginTop: '10px' },
    footerNav: { position: 'fixed', bottom: '20px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '4px solid #007AFF', zIndex: 100, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
    modal: { position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.nav}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={logoUrl} alt="Logo" style={styles.logoImg} onError={(e) => e.target.src='https://via.placeholder.com/45'} />
          <div style={{ fontWeight: '900', fontStyle: 'italic', lineHeight: '1', fontSize: '18px' }}>
            <span>GEO DOCS</span><br/><span>SERVICE</span>
          </div>
        </div>
        <div style={styles.langBar}>
          <button style={styles.langBtnActive}>GE</button>
          <button style={{ background: 'none', color: '#666', border: 'none', padding: '5px 10px', fontSize: '12px' }}>EN</button>
          <button style={{ background: 'none', color: '#666', border: 'none', padding: '5px 10px', fontSize: '12px' }}>RU</button>
        </div>
      </header>

      {/* Alert */}
      <div style={styles.alertBox}>
        <ShieldCheck size={16} /> {cur.alert}
      </div>

      <h1 style={styles.heroTitle}>{cur.slogan}</h1>

      {/* Main CV Button */}
      <button onClick={handleOrder} style={styles.yellowBtn}>
        <Zap fill="black" size={28} /> {cur.cvBtn}
      </button>

      {/* Invoice Button (Disabled for now) */}
      <button style={{...styles.yellowBtn, backgroundColor: '#2A2A2A', color: '#777', fontSize: '18px', cursor: 'default'}}>
        <FileText size={20} /> {cur.invoiceBtn}
      </button>

      {/* Price Buttons */}
      <div style={{ marginTop: '40px' }}>
        {cur.prices.map((p, i) => (
          <button key={i} onClick={handleOrder} style={styles.priceCard}>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{p.title}</div>
            <div style={styles.priceValue}>{p.price}</div>
          </button>
        ))}
      </div>

      {/* Footer Contact */}
      <div style={{ textAlign: 'center', padding: '60px 0 160px 0', opacity: 0.9 }}>
         <img src={logoUrl} alt="Footer Logo" style={{ width: '60px', height: '60px', borderRadius: '15px', marginBottom: '15px', border: '1px solid rgba(255,255,255,0.2)' }} onError={(e) => e.target.src='https://via.placeholder.com/60'} />
         <h3 style={{ fontWeight: '900', fontStyle: 'italic', letterSpacing: '-0.5px' }}>GEO DOCS SERVICE</h3>
         
         <div style={{ margin: '25px 0' }}>
            <button 
              onClick={() => setShowPrivacy(true)}
              style={{ background: 'none', border: 'none', color: '#007AFF', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px' }}
            >
              კონფიდენციალურობის პოლიტიკა
            </button>
         </div>

         <div style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '25px', fontSize: '18px' }}>
            <p>info@geodocs.ge</p>
         </div>
         
         <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            <Instagram size={28} style={{ cursor: 'pointer' }} /> 
            <Facebook size={28} style={{ cursor: 'pointer' }} /> 
            <Send size={28} style={{ cursor: 'pointer' }} />
         </div>
         <p style={{ fontSize: '10px', marginTop: '50px', opacity: 0.4 }}>{cur.rights}</p>
      </div>

      {/* Navigation Bar */}
      <div style={styles.footerNav}>
        <div style={{ backgroundColor: '#007AFF', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}><Home size={24} /></div>
        <LayoutGrid size={24} color="#666" style={{ cursor: 'pointer' }} />
        <Info size={24} color="#666" onClick={() => setShowPrivacy(true)} style={{ cursor: 'pointer' }} />
        <Bell size={24} color="#666" style={{ cursor: 'pointer' }} />
        <MessageSquare size={24} color="#666" style={{ cursor: 'pointer' }} />
      </div>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div style={styles.modal}>
          <button 
            onClick={() => setShowPrivacy(false)}
            style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <X size={35} />
          </button>
          <div style={{ padding: '20px', maxWidth: '500px' }}>
            <h2 style={{ color: '#FFB800', marginBottom: '30px', fontSize: '24px', fontWeight: '900' }}>{cur.privacyTitle}</h2>
            <p style={{ lineHeight: '1.8', fontSize: '17px', textAlign: 'justify', opacity: 0.9 }}>{cur.privacyText}</p>
            <button 
              onClick={() => setShowPrivacy(false)}
              style={{ marginTop: '40px', padding: '15px 40px', borderRadius: '15px', backgroundColor: '#007AFF', border: 'none', color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}
            >
              გასაგებია
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
