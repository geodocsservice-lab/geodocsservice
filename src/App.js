import React, { useState, useEffect } from 'react';
import { 
  Home, LayoutGrid, Info, User, Instagram, Facebook, Send, 
  Upload, History, FileText, Download, CheckCircle, LogOut
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი გუნდი მუშაობს მაღალი სიზუსტის ხელოვნურ ინტელექტზე, რათა თქვენი დოკუმენტები მომზადდეს წამებში. ჩვენ პრიორიტეტს ვანიჭებთ უსაფრთხოებას, კონფიდენციალურობას და მომხმარებლის კომფორტს.",
      loginTitle: "შესვლა", registerTitle: "რეგისტრაცია",
      regFields: ["სახელი", "გვარი", "ელ-ფოსტა", "ტელეფონის ნომერი"],
      profileHint: "დარეგისტრირდი საიტის სრული ფუნქციონალის გამოსაყენებლად",
      dashboardTitle: "პირადი კაბინეტი",
      uploadDoc: "დოკუმენტების ატვირთვა",
      historyTitle: "სივის გენერირების ისტორია",
      logout: "გასვლა",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      sloganPart1: "Stay Focused on ", sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes", invoiceBtn: "Invoice (Soon)",
      pricesTitle: "Pricing",
      prices: [{ title: "CV in Georgian", price: "20₾" }, { title: "CV in Foreign Language", price: "35₾" }, { title: "CV in 5 Languages", price: "55₾" }, { title: "Unlimited CV", price: "75₾" }],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our team works on high-precision AI to ensure your documents are prepared in seconds. We prioritize security, confidentiality, and user comfort.",
      loginTitle: "Login", registerTitle: "Registration",
      regFields: ["First Name", "Last Name", "Email", "Phone Number"],
      profileHint: "Register to use the full functionality of the site",
      dashboardTitle: "User Dashboard",
      uploadDoc: "Upload Documents",
      historyTitle: "CV Generation History",
      logout: "Logout",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ", sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты", invoiceBtn: "Инвойс (Скоро)",
      pricesTitle: "Тарифы",
      prices: [{ title: "Резюме на грузинском", price: "20₾" }, { title: "Резюме на ин. языке", price: "35₾" }, { title: "Резюме на 5 языках", price: "55₾" }, { title: "Безлимитное", price: "75₾" }],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша команда работает над высокоточным ИИ, чтобы ваши документы готовились за секунды.",
      loginTitle: "Вход", registerTitle: "Регистрация",
      regFields: ["Имя", "Фамилия", "Email", "Номер телефона"],
      profileHint: "Зарегистрируйтесь, чтобы использовать полную функциональность сайта",
      dashboardTitle: "Личный кабинет",
      uploadDoc: "Загрузка документов",
      historyTitle: "История генерации резюме",
      logout: "Выйти",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены."
    }
  }[lang];

  // სიმულირებული ისტორია
  const historyData = [
    { id: 1, date: "24.03.2026", type: "AI CV", lang: "GE", status: "Done" },
    { id: 2, date: "25.03.2026", type: "AI CV", lang: "EN", status: "Done" },
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('home');
  };

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    setActiveTab('dashboard');
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} onClick={() => setActiveTab('home')}>
            <img src={logoUrl} alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer' }} />
            <div style={{ fontWeight: '900', fontStyle: 'italic', cursor: 'pointer' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', borderRadius: '8px', padding: '2px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px', boxSizing: 'border-box' }}>
        
        {/* Main Home Page */}
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '15px', fontSize: '11px', marginBottom: '20px' }}>{t.alert}</div>
            <h1 style={{ fontSize: '26px', margin: '20px 0' }}>{t.sloganPart1}{t.sloganPart2}</h1>
            <img src={robotUrl} alt="Robot" style={{ width: '220px', margin: '10px auto' }} />
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '18px', background: '#FFB800', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>{t.cvBtn}</button>
            <button style={{ width: '100%', padding: '15px', background: 'transparent', border: '2px dashed #FFB800', marginTop: '15px', borderRadius: '20px', color: 'white' }}>{t.invoiceBtn}</button>
            
            <h2 style={{ marginTop: '30px', textAlign: 'left' }}>{t.pricesTitle}</h2>
            {t.prices.map((p, i) => (
              <button key={i} onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', background: '#2A2A2A', padding: '20px', borderRadius: '20px', border: '1px solid #444', marginBottom: '10px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '14px' }}>{p.title}</span> 
                <b style={{ color: '#FFB800', fontSize: '18px' }}>{p.price}</b>
              </button>
            ))}
          </div>
        )}

        {/* Profile / Auth Choice */}
        {activeTab === 'profile' && !isLoggedIn && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <User size={80} style={{ margin: '0 auto 20px' }} />
            <p>{t.profileHint}</p>
            <button onClick={() => setActiveTab('login')} style={{ width: '100%', padding: '15px', background: '#007AFF', borderRadius: '15px', border: 'none', color: 'white', marginBottom: '10px', cursor: 'pointer' }}>{t.loginTitle}</button>
            <button onClick={() => setActiveTab('register')} style={{ width: '100%', padding: '15px', background: 'transparent', border: '1px solid white', borderRadius: '15px', color: 'white', cursor: 'pointer' }}>{t.registerTitle}</button>
          </div>
        )}

        {/* Login/Register Forms */}
        {(activeTab === 'login' || activeTab === 'register') && (
          <div style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2>{activeTab === 'login' ? t.loginTitle : t.registerTitle}</h2>
            {activeTab === 'register' && t.regFields.map(f => <input key={f} placeholder={f} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block', boxSizing: 'border-box' }} />)}
            <input placeholder="Email" style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block', boxSizing: 'border-box' }} />
            <input placeholder="Password" type="password" style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block', boxSizing: 'border-box' }} />
            <button onClick={handleLoginSubmit} style={{ width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '10px', marginTop: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Submit</button>
          </div>
        )}

        {/* USER DASHBOARD (New Page) */}
        {(activeTab === 'dashboard' || (activeTab === 'profile' && isLoggedIn)) && (
          <div style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: '#FFB800' }}>{t.dashboardTitle}</h2>
                <LogOut onClick={handleLogout} style={{ cursor: 'pointer', color: '#ff4444' }} />
            </div>
            
            {/* Document Upload Section */}
            <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px', marginBottom: '20px', border: '2px dashed #444', textAlign: 'center' }}>
                <Upload size={40} style={{ color: '#007AFF', marginBottom: '10px' }} />
                <h3>{t.uploadDoc}</h3>
                <input type="file" style={{ display: 'none' }} id="fileInput" />
                <label htmlFor="fileInput" style={{ display: 'block', background: '#007AFF', padding: '10px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' }}>Choose File</label>
            </div>

            {/* History Section */}
            <h3>{t.historyTitle}</h3>
            {historyData.map(item => (
                <div key={item.id} style={{ background: '#1A1A1A', padding: '15px', borderRadius: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FileText style={{ color: '#FFB800' }} />
                        <div>
                            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.type} ({item.lang})</div>
                            <div style={{ fontSize: '11px', opacity: 0.6 }}>{item.date}</div>
                        </div>
                    </div>
                    <Download size={20} style={{ color: '#007AFF', cursor: 'pointer' }} />
                </div>
            ))}
          </div>
        )}

        {/* About Us */}
        {activeTab === 'about' && (
          <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2>{t.aboutTitle}</h2>
            <p style={{ lineHeight: '1.6' }}>{t.aboutContent}</p>
          </div>
        )}

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '40px', opacity: 0.6 }}>
          <img src={logoUrl} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}><Instagram /><Facebook /><Send /></div>
          <p style={{ fontSize: '10px' }}>{t.rights}</p>
        </footer>
      </main>

      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', bottom: '15px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', 
        padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', 
        zIndex: 1000, boxSizing: 'border-box',
        transition: 'transform 0.3s, opacity 0.3s',
        transform: showNav ? 'translateY(0)' : 'translateY(100px)',
        opacity: showNav ? 1 : 0
      }}>
        <Home onClick={() => setActiveTab('home')} style={{ color: activeTab === 'home' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <LayoutGrid onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ color: activeTab === 'about' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <User onClick={() => isLoggedIn ? setActiveTab('dashboard') : setActiveTab('profile')} style={{ color: (activeTab === 'profile' || activeTab === 'dashboard') ? '#007AFF' : 'white', cursor: 'pointer' }} />
      </nav>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { 
  Home, LayoutGrid, Info, User, Instagram, Facebook, Send, 
  Upload, History, FileText, Download, CheckCircle, LogOut
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState(''); // დამატებულია
  const [pwdStrength, setPwdStrength] = useState(''); // დამატებულია

  // პაროლის შემოწმების ლოგიკა
  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (val.length < 6) setPwdStrength('სუსტი');
    else if (val.length < 10) setPwdStrength('საშუალო');
    else setPwdStrength('ძლიერი');
  };

  // რეგისტრაციის ლოგიკა
  const handleLoginSubmit = () => {
    if (password.length >= 6) { // ვალიდაცია
      setIsLoggedIn(true);
      setActiveTab('dashboard');
    } else {
      alert("გთხოვთ, მიუთითოთ მინიმუმ 6 სიმბოლოიანი პაროლი");
    }
  };

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
    // (აქ დაამატეთ EN და RU ობიექტები ისევ, როგორც თქვენს კოდში იყო)
  }[lang] || t.GE;

  const historyData = [
    { id: 1, date: "24.03.2026", type: "AI CV", lang: "GE", status: "Done" }
  ];

  const handleLogout = () => { setIsLoggedIn(false); setActiveTab('home'); };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* (თქვენი არსებული Header, Main და Nav კოდი აქ, მხოლოდ LoginSubmit-ში ცვლილებით) */}
      
      {/* რეგისტრაციის ფორმის შეცვლილი ნაწილი */}
      {(activeTab === 'login' || activeTab === 'register') && (
          <div style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2>{activeTab === 'login' ? t.loginTitle : t.registerTitle}</h2>
            {activeTab === 'register' && t.regFields.map(f => <input key={f} placeholder={f} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} />)}
            <input placeholder="Email" style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} />
            <input placeholder="Password" type="password" onChange={handlePasswordChange} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px' }} />
            <div style={{fontSize: '12px', color: '#FFB800'}}>პაროლის დონე: {pwdStrength}</div>
            <button onClick={handleLoginSubmit} style={{ width: '100%', padding: '15px', background: '#FFB800', borderRadius: '10px', marginTop: '10px', fontWeight: 'bold' }}>Submit</button>
          </div>
        )}
    </div>
  );
}
