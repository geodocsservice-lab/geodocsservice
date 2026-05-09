import React, { useState } from 'react';
import { 
  Zap, ShieldCheck, Globe, Instagram, Facebook, Send, 
  Phone, Mail, FileText, Info, LayoutGrid, MessageSquare 
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('GE');

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
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" }
      ]
    },
    EN: {
      brand: "GEO DOCS SERVICE", slogan: "Don't get distracted from your work",
      alert: "Information is deleted automatically in 2 min!", cvBtn: "AI CV in 2 min",
      invoiceBtn: "Invoice (Soon)", deleteBtn: "Instant info deletion",
      aboutTitle: "Why GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "Speed", text: "Ready in just 2 minutes" },
        { icon: ShieldCheck, title: "Privacy", text: "100% secure" },
        { icon: Globe, title: "30+ Languages", text: "Global language support" }
      ],
      prices: [
        { title: "Georgian CV Generation", price: "20₾" },
        { title: "Foreign Language CV", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" }
      ]
    },
    RU: {
      brand: "GEO DOCS SERVICE", slogan: "Не отвлекайтесь от дел",
      alert: "Данные удаляются через 2 минуты!", cvBtn: "AI CV за 2 мин",
      invoiceBtn: "Инвойс (Скоро)", deleteBtn: "Мгновенное удаление данных",
      aboutTitle: "Почему GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "Скорость", text: "Готово за 2 минуты" },
        { icon: ShieldCheck, title: "Приватность", text: "Данные защищены" },
        { icon: Globe, title: "30+ Языков", text: "Мировые языки" }
      ],
      prices: [
        { title: "CV на грузинском", price: "20₾" },
        { title: "CV на ин. языках", price: "35₾" },
        { title: "CV на 5 языках", price: "55₾" }
      ]
    }
  };

  const cur = content[lang];

  const styles = {
    container: { backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', paddingBottom: '120px' },
    nav: { backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 },
    logoCircle: { width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: '900', fontSize: '10px' },
    langBtn: { padding: '5px 8px', backgroundColor: 'black', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', fontSize: '11px', marginLeft: '4px', cursor: 'pointer' },
    hero: { padding: '30px 20px', textAlign: 'center', maxWidth: '500px', margin: '0 auto' },
    alertBox: { backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', color: '#fecaca', padding: '12px', borderRadius: '12px', fontSize: '13px', marginBottom: '25px' },
    mainBtn: { width: '100%', backgroundColor: 'white', color: 'black', fontWeight: '900', padding: '18px', borderRadius: '15px', fontSize: '18px', border: 'none', marginBottom: '12px' },
    secBtn: { width: '100%', backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '14px', marginBottom: '8px' },
    card: { backgroundColor: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '15px', marginTop: '12px', textAlign: 'left' },
    priceRow: { display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' },
    footer: { position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#1A1A1A', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={styles.logoCircle}>LOGO</div>
          <span style={{ fontWeight: '900', fontStyle: 'italic', marginLeft: '10px' }}>{cur.brand}</span>
        </div>
        <div>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{...styles.langBtn, backgroundColor: lang === l ? '#444' : 'black'}}>{l}</button>
          ))}
        </div>
      </nav>

      <main style={styles.hero}>
        <h2 style={{ fontSize: '28px', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '15px' }}>{cur.slogan}</h2>
        <div style={styles.alertBox}>⚠️ {cur.alert}</div>
        
        <button style={styles.mainBtn}>{cur.cvBtn}</button>
        <button style={styles.secBtn}>{cur.invoiceBtn}</button>
        <button style={{...styles.secBtn, color: '#ffaaaa'}}>{cur.deleteBtn}</button>

        <h3 style={{ marginTop: '40px', textAlign: 'left' }}>{cur.aboutTitle}</h3>
        {cur.features.map((f, i) => (
          <div key={i} style={styles.card}>
            <f.icon size={28} />
            <div><div style={{ fontWeight: 'bold' }}>{f.title}</div><div style={{ fontSize: '11px', opacity: 0.7 }}>{f.text}</div></div>
          </div>
        ))}

        <div style={{ marginTop: '40px', backgroundColor: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '15px' }}>
          {cur.prices.map((p, i) => (
            <div key={i} style={styles.priceRow}>
              <span style={{ fontSize: '13px' }}>{p.title}</span>
              <span style={{ fontWeight: 'bold' }}>{p.price}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          <Instagram size={24} /> <Facebook size={24} /> <Send size={24} />
        </div>
      </main>

      <div style={styles.footer}>
        <Home size={24} /> <LayoutGrid size={24} /> <MessageSquare size={24} /> <Info size={24} />
      </div>
    </div>
  );
}
