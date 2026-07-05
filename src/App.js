import React, { useState, useEffect } from 'react';
import { Home, LayoutGrid, Info, Send, X } from 'lucide-react';

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
  const robotUrl = "/robot.png";

  // სქროლის ლოგიკა (დაბრუნდა!)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Gemini API-ს ფუნქცია
  const handleChatSubmit = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const API_KEY = "Environment Variables"; 
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `
            შენ ხარ დოქტორი დამისო, Geo Docs Service-ის AI ასისტენტი. 
            წესები: 
            1. CV ქართულად 10₾, უცხო ენაზე 15₾. 
            2. მონაცემები იშლება 5 წუთში. 
            3. უფასო ჩასწორება/განმეორებითი ფაილი: მხოლოდ იმავე დღეს, იმავე ენაზე და იმავე იმეილით.
            4. მომსახურება დასრულებულია როცა კლიენტი მიიღებს PDF-ს. ფული არ ბრუნდება.
            იყავი ზრდილობიანი და მოკლე, პასუხე ქართულად. კითხვა: ${input}` }] }]
        })
      });
      const data = await response.json();
      const botText = data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "დროებით ვერ გპასუხობ, სცადე ცოტა ხანში." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        <div style={{ backgroundColor: '#000', borderRadius: '8px', padding: '2px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px' }}>
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <img src={robotUrl} alt="Robot" style={{ width: '220px', margin: '20px auto' }} />
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '18px', background: '#FFB800', borderRadius: '20px', fontWeight: 'bold', border: 'none', color: 'black' }}>AI CV 5 წუთში</button>
          </div>
        )}
      </main>

      {/* ჩატის ფანჯარა */}
      {isChatOpen && (
        <div style={{ position: 'fixed', bottom: '100px', right: '20px', width: '320px', height: '450px', backgroundColor: '#1A1A1A', borderRadius: '20px', border: '2px solid #007AFF', zIndex: 10000, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '15px', backgroundColor: '#007AFF', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
            <span>Dr. Damiso</span>
            <X size={20} onClick={() => setIsChatOpen(false)} style={{ cursor: 'pointer' }} />
          </div>
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', backgroundColor: m.role === 'user' ? '#007AFF' : '#333', padding: '10px', borderRadius: '15px', maxWidth: '80%' }}>{m.text}</div>
            ))}
            {loading && <div style={{ color: '#aaa', fontSize: '12px' }}>დოქტორი დამისო ბეჭდავს...</div>}
          </div>
          <div style={{ padding: '10px', display: 'flex', gap: '5px' }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="მოწერე..." style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none' }} />
            <button onClick={handleChatSubmit} style={{ background: '#FFB800', border: 'none', borderRadius: '10px', padding: '10px' }}><Send size={18} /></button>
          </div>
        </div>
      )}

      {/* ჩატის ღილაკი */}
      <div style={{ position: 'fixed', bottom: '30px', right: '20px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 9999 }}>
        <div style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>Dr. Damiso</div>
        <div onClick={() => setIsChatOpen(!isChatOpen)} style={{ backgroundColor: 'white', border: '3px solid #007AFF', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', overflow: 'hidden' }}>
          <img src={robotUrl} alt="Dr. Damiso" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </div>
      
      {/* ნავიგაცია */}
      <nav style={{ position: 'fixed', bottom: '15px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', zIndex: 1000, transition: 'transform 0.3s, opacity 0.3s', transform: showNav ? 'translateY(0)' : 'translateY(100px)' }}>
        <Home onClick={() => setActiveTab('home')} style={{ color: activeTab === 'home' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <LayoutGrid onClick={() => setActiveTab('home')} style={{ color: 'white', cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ color: activeTab === 'about' ? '#007AFF' : 'white', cursor: 'pointer' }} />
      </nav>
    </div>
  );
}
