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
  
  // პაროლის და სიძლიერის მდგომარეობა
  const [password, setPassword] = useState('');
  const [pwdStrength, setPwdStrength] = useState('');

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 
  const robotUrl = "/robot.png";

  const t = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს", alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)", pricesTitle: "ტარიფები",
      prices: [{ title: "სივის ქართულად გენერირება", price: "20₾" }, { title: "სივის უცხო ენაზე", price: "35₾" }, { title: "სივის გენერირება 5 ენაზე", price: "55₾" }, { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }],
      aboutTitle: "ჩვენს შესახებ", aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა.",
      loginTitle: "შესვლა", registerTitle: "რეგისტრაცია", regFields: ["სახელი", "გვარი", "ელ-ფოსტა", "ტელეფონის ნომერი"],
      profileHint: "დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად", dashboardTitle: "პირადი კაბინეტი",
      uploadDoc: "დოკუმენტების ატვირთვა", historyTitle: "სივის გენერირების ისტორია", logout: "გასვლა", rights: "© 2026 GEO DOCS SERVICE."
    }
  }[lang] || t?.GE;

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (!val) setPwdStrength('');
    else if (val.length < 6) setPwdStrength('სუსტი');
    else if (val.length < 10) setPwdStrength('საშუალო');
    else setPwdStrength('ძლიერი');
  };

  const handleLoginSubmit = () => {
    if (password.length >= 6) {
      setIsLoggedIn(true);
      setActiveTab('dashboard');
    } else {
      alert("გთხოვთ მიუთითოთ მინიმუმ 6 სიმბოლოიანი პაროლი!");
    }
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial' }}>
      <header style={{ padding: '20px', background: '#1A1A1A', position: 'fixed', width: '100%', top: 0 }}>
        <div onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>GEO DOCS SERVICE</div>
      </header>

      <main style={{ padding: '100px 20px' }}>
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h1>{t.sloganPart1}{t.sloganPart2}</h1>
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ padding: '15px', background: '#FFB800', border: 'none', borderRadius: '20px' }}>{t.cvBtn}</button>
          </div>
        )}

        {(activeTab === 'login' || activeTab === 'register') && (
          <div style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px' }}>
            <h2>{activeTab === 'login' ? t.loginTitle : t.registerTitle}</h2>
            {activeTab === 'register' && t.regFields.map(f => <input key={f} placeholder={f} style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '10px' }} />)}
            <input placeholder="Email" style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '10px' }} />
            <input type="password" placeholder="პაროლი" onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '10px' }} />
            <div style={{fontSize: '12px', color: pwdStrength === 'ძლიერი' ? '#4CAF50' : '#FF9800'}}>პაროლის დონე: {pwdStrength}</div>
            <button onClick={handleLoginSubmit} style={{ width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '10px', marginTop: '10px' }}>Submit</button>
          </div>
        )}

        {activeTab === 'dashboard' && (
          isLoggedIn ? (
            <div>
              <h2>{t.dashboardTitle}</h2>
              <button onClick={() => {setIsLoggedIn(false); setActiveTab('home');}}><LogOut /> {t.logout}</button>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <p>გთხოვთ გაიაროთ რეგისტრაცია</p>
              <button onClick={() => setActiveTab('register')}>რეგისტრაცია</button>
            </div>
          )
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: '15px', width: '100%', display: 'flex', justifyContent: 'space-around', background: '#1A1A1A', padding: '15px' }}>
        <Home onClick={() => setActiveTab('home')} />
        <User onClick={() => isLoggedIn ? setActiveTab('dashboard') : setActiveTab('register')} />
      </nav>
    </div>
  );
}
