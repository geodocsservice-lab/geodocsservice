import React, { useState } from 'react';
import { 
  Zap, ShieldAlert, Clock, Bell, LayoutGrid, MessageSquare, 
  Instagram, Facebook, Send, Phone, Home, Mail, FileText, 
  Info, ShieldCheck, Globe, X
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('GE');
  const [showPrivacy, setShowPrivacy] = useState(false);

  const content = {
    GE: {
      brand: "GEO DOCS SERVICE", slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!", cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)", deleteBtn: "მყისიერი წაშლა პირადი ინფორმაციის",
      aboutTitle: "რატომ GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "სისწრაფე", text: "მზა დოკუმენტი სულ რაღაც 2 წუთში" },
        { icon: ShieldCheck, title: "კონფიდენციალურობა", text: "მონაცემები 100%-ით დაცულია" },
        { icon: Globe, title: "30+ ენა", text: "გენერაცია მსოფლიოს წამყვან ენებზე" }
      ],
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ]
    },
    EN: {
      brand: "GEO DOCS SERVICE", slogan: "Don't get distracted",
      alert: "Deleted automatically in 2 min!", cvBtn: "AI CV in 2 min",
      invoiceBtn: "Invoice (Soon)", deleteBtn: "Instant info deletion",
      aboutTitle: "Why GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "Speed", text: "Ready in just 2 minutes" },
        { icon: ShieldCheck, title: "Privacy", text: "100% secure" },
        { icon: Globe, title: "30+ Languages", text: "Global support" }
      ],
      prices: [
        { title: "Georgian CV Generation", price: "20₾" },
        { title: "Foreign Language CV", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited Generation", price: "75₾" }
      ]
    },
    RU: {
      brand: "GEO DOCS SERVICE", slogan: "Не отвлекайтесь от дел",
      alert: "Данные удаляются через 2 минуты!", cvBtn: "AI CV за 2 мин",
      invoiceBtn: "Инвойс (Скоро)", deleteBtn: "Мгновенное удаление",
      aboutTitle: "Почему GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "Скорость", text: "Готово за 2 минуты" },
        { icon: ShieldCheck, title: "Приватность", text: "100% защита" },
        { icon: Globe, title: "30+ Языков", text: "Мировые языки" }
      ],
      prices: [
        { title: "CV на грузинском", price: "20₾" },
        { title: "CV на ин. языках", price: "35₾" },
        { title: "CV на 5 языках", price: "55₾" },
        { title: "Безლიмит", price: "75₾" }
      ]
    }
  };

  const cur = content[lang] || content.GE;

  const styles = {
    container: { backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', paddingBottom: '120px' },
    nav: { backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 },
    logoCircle: { width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: '900', fontSize: '10px' },
    langContainer: { display: 'flex', gap: '5px', backgroundColor: 'black', padding: '5px', borderRadius: '10px' },
    langBtn: { padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', fontSize: '10px', cursor: 'pointer' },
    hero: { padding: '30px 20px', textAlign: 'center', maxWidth: '500px', margin: '0 auto' },
    alertBox: { backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', color: '#fecaca', padding: '12px', borderRadius: '12px', fontSize: '13px', marginBottom: '25px' },
    mainBtn: { width: '100%', backgroundColor: 'white', color: 'black', fontWeight: '900', padding: '20px', borderRadius: '18px', fontSize: '20px', border: 'none', marginBottom: '12px', boxShadow: '0 8px 15px rgba(0,0,0,0.2)' },
    secBtn: { width: '100%', backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '14px', marginBottom: '8px' },
    card: { backgroundColor: 'rgba(0,0,0,0.2)', padding: '18px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px', textAlign: 'left' },
    priceRow: { display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' },
    footer: { position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#1A1A1A', display: 'flex', justifyContent: 'space-around', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={styles.logoCircle}>LOGO</div>
          <span style={{ fontWeight: '900', fontStyle: 'italic', marginLeft: '10px', letterSpacing: '-1px' }}>{cur.brand}</span>
        </div>
        <div style={styles.langContainer}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{...styles.langBtn, backgroundColor: lang === l ? '#444' : 'transparent'}}>{l}</button>
          ))}
        </div>
      </nav>

      <main style={styles.hero}>
        <h2 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '15px', lineHeight: '1.1' }}>{cur.slogan}</h2>
        <div style={styles.alertBox}>⚠️ {cur.alert}</div>
        
        <button style={styles.mainBtn}>{cur.cvBtn}</button>
        <button style={styles.secBtn}>{cur.invoiceBtn}</button>
        <button style={{...styles.secBtn, color: '#ffaaaa'}}>{cur.deleteBtn}</button>

        <h3 style={{ marginTop: '45px', textAlign: 'left', fontWeight: '900' }}>{cur.aboutTitle}</h3>
        {cur.features.map((f, i) => (
          <div key={i} style={styles.card}>
            <f.icon size={30} />
            <div>
              <div style={{ fontWeight: 'bold' }}>{f.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>{f.text}</div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '40px', backgroundColor: 'rgba(0,0,0,0.15)', padding: '20px', borderRadius: '20px' }}>
          {cur.prices.map((p, i) => (
            <div key={i} style={styles.priceRow}>
              <span style={{ fontSize: '13px' }}>{p.title}</span>
              <span style={{ fontWeight: 'bold' }}>{p.price}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '40px', opacity: 0.8 }}>
          <Instagram size={28} /> <Facebook size={28} /> <Send size={28} /> <Phone size={28} />
        </div>
      </main>

      <div style={styles.footer}>
        <Home size={26} /> <LayoutGrid size={26} /> <MessageSquare size={26} /> <Info size={26} onClick={() => setShowPrivacy(true)} />
      </div>

      {showPrivacy && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 200, padding: '40px 20px', textAlign: 'center' }}>
          <X size={32} onClick={() => setShowPrivacy(false)} style={{ position: 'absolute', top: 20, right: 20 }} />
          <h3>Privacy Policy</h3>
          <p style={{ opacity: 0.8, marginTop: '20px' }}>პერსონალური მონაცემები იშლება ავტომატურად 2 წუთში დოკუმენტის გენერირების შემდეგ.</p>
        </div>
      )}
    </div>
  );
}

