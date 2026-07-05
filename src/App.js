import React, { useState, useEffect } from 'react';
import { Home, LayoutGrid, Info, Instagram, Facebook, Send, X, MessageCircle } from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'გამარჯობა! მე ვარ დოქტორი დამისო. როგორ შემიძლია დაგეხმაროთ?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleChatSubmit = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `შენ ხარ დოქტორი დამისო. წესები: CV ქართულად 10₾, უცხო ენაზე 15₾. მონაცემები იშლება 5 წუთში. უფასო ჩასწორება/განმეორებითი ფაილი: იმავე დღეს, იმავე ენაზე, იმავე იმეილით. თანხა არ ბრუნდება PDF-ის შემდეგ. პასუხე ქართულად. კითხვა: ${input}` }] }]
        })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.candidates[0].content.parts[0].text }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "დროებით ვერ გპასუხობ." }]);
    }
    setLoading(false);
  };

  const t = {
    GE: { sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს", alert: "ინფორმაცია იშლება ავტომატურად 5 წუთში!", cvBtn: "AI CV 5 წუთში", invoiceBtn: "ინვოისი (მალე)", pricesTitle: "ტარიფები", prices: [{ title: "სივის ქართულად გენერირება", price: "10₾" }, { title: "სივის უცხო ენაზე გენერირება", price: "15₾" }], aboutTitle: "ჩვენს შესახებ", aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა...", rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია." },
    EN: { sloganPart1: "Stay Focused on ", sloganPart2: "Your Business", alert: "Data is auto-deleted in 5 minutes!", cvBtn: "AI CV in 5 Minutes", invoiceBtn: "Invoice (Soon)", pricesTitle: "Pricing", prices: [{ title: "CV Generation in Georgian", price: "10₾" }, { title: "CV Generation in Foreign Language", price: "15₾" }], aboutTitle: "About Us", aboutContent: "Geo Docs Service is the first fully automated Georgian platform...", rights: "© 2026 GEO DOCS SERVICE. All rights reserved." },
    RU: { sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел", alert: "Данные удаляются через 5 минут!", cvBtn: "AI CV за 5 минут", invoiceBtn: "Инвойс (Скоро)", pricesTitle: "Тарифы", prices: [{ title: "Генерация резюме на грузинском", price: "10₾" }, { title: "Генерация резюме на иностранном языке", price: "15₾" }], aboutTitle: "О нас", aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа.", rights: "© 2026 GEO DOCS SERVICE. Все права защищены." }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' }}>
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} onClick={() => setActiveTab('home')}>
            <img src={logoUrl} alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        </div>
        <div>{['GE', 'EN', 'RU'].map(l => <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px' }}>{l}</button>)}</div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px' }}>
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '15px', fontSize: '11px', marginBottom: '20px' }}>{t.alert}</div>
            <h1 style={{ fontSize: '26px', margin: '20px 0' }}><span>{t.sloganPart1}</span><span style={{ color: '#FFB800' }}>{t.sloganPart2}</span></h1>
            <img src={robotUrl} alt="Robot" style={{ width: '220px', margin: '10px auto' }} />
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '18px', background: '#FFB800', border: 'none', borderRadius: '20px', fontWeight: 'bold' }}>{t.cvBtn}</button>
            <div id="pricing-section" style={{ marginTop: '40px' }}><h2 style={{ textAlign: 'left', color: '#FFB800' }}>{t.pricesTitle}</h2>{t.prices.map((p, i) => <button key={i} style={{ width: '100%', background: '#2A2A2A', padding: '20px', margin: '5px 0', borderRadius: '20px', color: 'white', display: 'flex', justifyContent: 'space-between' }}><span>{p.title}</span> <b>{p.price}</b></button>)}</div>
          </div>
        )}
        {activeTab === 'about' && (<div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}><h2>{t.aboutTitle}</h2><p>{t.aboutContent}</p></div>)}
        <footer style={{ textAlign: 'center', marginTop: '40px' }}><p style={{ fontSize: '10px' }}>{t.rights}</p></footer>
      </main>

      {/* Dr. Damiso ჩატი */}
      {isChatOpen && (
        <div style={{ position: 'fixed', bottom: '150px', right: '20px', width: '300px', height: '400px', backgroundColor: '#1A1A1A', borderRadius: '20px', border: '2px solid #007AFF', zIndex: 10000, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '10px', backgroundColor: '#007AFF', display: 'flex', justifyContent: 'space-between' }}><span>Dr. Damiso</span><X size={20} onClick={() => setIsChatOpen(false)} /></div>
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>{messages.map((m, i) => <div key={i} style={{ margin: '5px', padding: '8px', borderRadius: '10px', backgroundColor: m.role === 'user' ? '#007AFF' : '#333' }}>{m.text}</div>)}</div>
          <div style={{ padding: '10px', display: 'flex' }}><input value={input} onChange={(e) => setInput(e.target.value)} style={{ flex: 1 }} /><button onClick={handleChatSubmit}><Send /></button></div>
        </div>
      )}

      {/* ჩატის ღილაკი */}
      <div style={{ position: 'fixed', bottom: '80px', right: '20px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 999 }}>
        <div style={{ backgroundColor: '#1A1A1A', padding: '8px', borderRadius: '15px' }}>Dr. Damiso</div>
        <img src={robotUrl} onClick={() => setIsChatOpen(!isChatOpen)} style={{ width: '50px', cursor: 'pointer', borderRadius: '50%', border: '2px solid #007AFF' }} />
      </div>

      {/* ნავიგაცია */}
      <nav style={{ position: 'fixed', bottom: '15px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', zIndex: 1000, transform: showNav ? 'translateY(0)' : 'translateY(100px)' }}>
        <Home onClick={() => setActiveTab('home')} />
        <LayoutGrid onClick={() => setActiveTab('home')} />
        <Info onClick={() => setActiveTab('about')} />
      </nav>
    </div>
  );
}
