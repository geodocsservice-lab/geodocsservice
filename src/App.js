import React, { useState, useEffect } from 'react';
import { 
  Home, LayoutGrid, Info, User, Instagram, Facebook, Send, 
  Upload, History, FileText, Download, CheckCircle, LogOut
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', password: '' });
  const [pwdStrength, setPwdStrength] = useState('');

  const t = {
    GE: {
      sloganPart1: "ნუ მოწყდები ", sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში", invoiceBtn: "ინვოისი (მალე)",
      pricesTitle: "ტარიფები",
      aboutTitle: "ჩვენს შესახებ",
      loginTitle: "შესვლა", registerTitle: "რეგისტრაცია",
      regFields: ["სახელი", "გვარი", "ელ-ფოსტა", "ტელეფონის ნომერი"],
      dashboardTitle: "პირადი კაბინეტი",
      uploadDoc: "დოკუმენტების ატვირთვა",
      historyTitle: "სივის გენერირების ისტორია",
      logout: "გასვლა"
    }
  }[lang];

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setFormData({...formData, password: val});
    if (val.length < 6) setPwdStrength('სუსტი');
    else if (val.length < 10) setPwdStrength('საშუალო');
    else setPwdStrength('ძლიერი');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if(formData.password.length >= 6) {
        setIsLoggedIn(true);
        setActiveTab('dashboard');
    } else {
        alert("პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!");
    }
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', width: '100%' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: '900', fontStyle: 'italic', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>GEO DOCS SERVICE</div>
      </header>

      <main style={{ padding: '80px 20px' }}>
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h1>{t.sloganPart1}{t.sloganPart2}</h1>
            <button style={{ width: '100%', padding: '18px', background: '#FFB800', border: 'none', borderRadius: '20px', fontWeight: 'bold' }}>{t.cvBtn}</button>
          </div>
        )}

        {(activeTab === 'register' || activeTab === 'login') && (
          <form onSubmit={handleRegister} style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px' }}>
            <h2>{t.registerTitle}</h2>
            {t.regFields.map(f => <input key={f} placeholder={f} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} />)}
            <input type="password" placeholder="Password" onChange={handlePasswordChange} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} />
            <div style={{fontSize: '12px', color: '#FFB800'}}>პაროლის დონე: {pwdStrength}</div>
            <button type="submit" style={{ width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '10px', marginTop: '10px' }}>Submit</button>
          </form>
        )}

        {activeTab === 'dashboard' && isLoggedIn && (
          <div>
            <h2>{t.dashboardTitle}</h2>
            <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px' }}>
               <Upload size={40} />
               <h3>{t.uploadDoc}</h3>
            </div>
            <button onClick={() => setIsLoggedIn(false)}><LogOut /> {t.logout}</button>
          </div>
        )}
      </main>

      {/* Navigation */}
      <nav style={{ position: 'fixed', bottom: '15px', width: '90%', left: '5%', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around' }}>
        <Home onClick={() => setActiveTab('home')} />
        <User onClick={() => isLoggedIn ? setActiveTab('dashboard') : setActiveTab('register')} />
      </nav>
    </div>
  );
}
