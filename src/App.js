import React, { useState } from 'react';
import { Zap, ShieldCheck, Globe } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('GE');

  const content = {
    GE: {
      brand: "GEO DOCS SERVICE",
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      features: [
        { icon: Zap, title: "სისწრაფე", text: "მზა დოკუმენტი სულ რაღაც 2 წუთში" },
        { icon: ShieldCheck, title: "კონფიდენციალურობა", text: "მონაცემები 100%-ით დაცულია" },
        { icon: Globe, title: "30+ ენა", text: "გენერაცია მსოფლიოს წამყვან ენებზე" }
      ]
    },
    EN: {
      brand: "GEO DOCS SERVICE",
      slogan: "Don't get distracted from your work",
      alert: "Information is deleted automatically in 2 min!",
      cvBtn: "AI CV in 2 min",
      features: [
        { icon: Zap, title: "Speed", text: "Ready in just 2 minutes" },
        { icon: ShieldCheck, title: "Privacy", text: "100% secure" },
        { icon: Globe, title: "30+ Languages", text: "Global language support" }
      ]
    }
  };

  const cur = content[lang] || content.GE;

  const styles = {
    container: { backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', paddingBottom: '100px' },
    nav: { backgroundColor: '#1A1A1A', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.5)', sticky: 'top' },
    logoCircle: { width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: '900', fontSize: '10px' },
    brandName: { fontWeight: '900', fontSize: '20px', fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '-1px', marginLeft: '10px' },
    langBtn: { padding: '5px 10px', backgroundColor: 'black', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', fontSize: '12px', cursor: 'pointer', marginLeft: '5px' },
    hero: { padding: '40px 20px', textAlign: 'center', maxWidth: '500px', margin: '0 auto' },
    slogan: { fontSize: '32px', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '15px' },
    alertBox: { backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', color: '#fecaca', padding: '10px', borderRadius: '10px', fontSize: '12px', marginBottom: '30px' },
    mainBtn: { width: '100%', backgroundColor: 'white', color: 'black', fontWeight: '900', padding: '20px', borderRadius: '15px', fontSize: '20px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', cursor: 'pointer' },
    featureCard: { backgroundColor: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px', textAlign: 'left' }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={styles.logoCircle}>LOGO</div>
          <span style={styles.brandName}>{cur.brand}</span>
        </div>
        <div>
          <button onClick={() => setLang('GE')} style={styles.langBtn}>GE</button>
          <button onClick={() => setLang('EN')} style={styles.langBtn}>EN</button>
        </div>
      </nav>

      <main style={styles.hero}>
        <h2 style={styles.slogan}>{cur.slogan}</h2>
        <div style={styles.alertBox}>⚠️ {cur.alert}</div>
        
        <button style={styles.mainBtn}>{cur.cvBtn}</button>

        <div style={{ marginTop: '40px' }}>
          {cur.features.map((f, i) => (
            <div key={i} style={styles.featureCard}>
              <f.icon size={32} color="white" />
              <div>
                <div style={{ fontWeight: 'bold' }}>{f.title}</div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>{f.text}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
