import React, { useState, useEffect } from 'react';
import { 
  Home, LayoutGrid, Info, User, Instagram, Facebook, Send, 
  Upload, FileText, Download, LogOut 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', password: '' });
  const [pwdStrength, setPwdStrength] = useState('');

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

  const t = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      prices: [{ title: "სივის ქართულად გენერირება", price: "20₾" }, { title: "სივის უცხო ენაზე", price: "35₾" }, { title: "სივის გენერირება 5 ენაზე", price: "55₾" }, { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა.",
      loginTitle: "შესვლა", registerTitle: "რეგისტრაცია",
      regFields: ["სახელი", "გვარი", "ელ-ფოსტა", "ტელეფონის ნომერი"],
      profileHint: "დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად",
      dashboardTitle: "პირადი კაბინეტი",
      uploadDoc: "დოკუმენტების ატვირთვა",
      historyTitle: "სივის გენერირების ისტორია",
      logout: "გასვლა",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    }
  }[lang];

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setFormData({...formData, password: val});
    if(val.length < 6) setPwdStrength('სუსტი');
    else if(val.length < 10) setPwdStrength('საშუალო');
    else setPwdStrength('ძლიერი');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(val => val !== '')) {
      setIsLoggedIn(true);
      setActiveTab('dashboard');
    } else { alert("გთხოვთ შეავსოთ ყველა ველი!"); }
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' }}>
      
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: '900', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>GEO DOCS SERVICE</div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px' }}>
        
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h1>{t.sloganPart1}{t.sloganPart2}</h1>
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '15px', background: '#FFB800', borderRadius: '20px', border: 'none', fontWeight: 'bold' }}>{t.cvBtn}</button>
          </div>
        )}

        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px' }}>
            <h2>{t.registerTitle}</h2>
            {t.regFields.map(f => <input key={f} placeholder={f} onChange={(e) => setFormData({...formData, [f]: e.target.value})} style={{ width: '100%', padding: '10px', margin: '5px 0', display: 'block' }} />)}
            <input type="password" placeholder="პაროლი" onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', margin: '5px 0' }} />
            <div style={{ fontSize: '12px', color: pwdStrength === 'ძლიერი' ? '#4CAF50' : '#FF9800' }}>პაროლის დონე: {pwdStrength}</div>
            <button type="submit" style={{ width: '100%', padding: '15px', background: '#FFB800', marginTop: '10px' }}>Submit</button>
          </form>
        )}

        {activeTab === 'dashboard' && (
          isLoggedIn ? (
            <div>
              <h2>{t.dashboardTitle}</h2>
              <div style={{ background: '#2A2A2A', padding: '20px', textAlign: 'center' }}>{t.uploadDoc}</div>
              <button onClick={() => {setIsLoggedIn(false); setActiveTab('home');}}><LogOut /> {t.logout}</button>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <p>გთხოვთ, გაიაროთ რეგისტრაცია!</p>
              <button onClick={() => setActiveTab('register')}>რეგისტრაცია</button>
            </div>
          )
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: '15px', width: '100%', display: 'flex', justifyContent: 'space-around', background: '#1A1A1A', padding: '15px' }}>
        <Home onClick={() => setActiveTab('home')} />
        <User onClick={() => setActiveTab(isLoggedIn ? 'dashboard' : 'register')} />
      </nav>
    </div>
  );
}
