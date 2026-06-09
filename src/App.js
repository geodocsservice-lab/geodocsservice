import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  
  const pricingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 
  const robotUrl = "/robot.png"; // აქ უკვე წერია .png რობოტისთვის

  const translations = {
    GE: {
      sloganPart1: "ნუ მოწყდები ",
      sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      whyTitle: "რატომ ჩვენ?",
      whyItems: ["სწრაფი გენერირება (2 წთ)", "მრავალენოვანი მხარდაჭერა", "მაქსიმალური სიზუსტე AI-თ", "სრული ანონიმურობა"],
      pricesTitle: "ტარიფები",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დოკუმენტების მომზადების პროცესის მაქსიმალური გამარტივება ხელოვნური ინტელექტის გამოყენებით, რაც საშუალებას გაძლევთ დაზოგოთ დრო და მიიღოთ პროფესიონალური შედეგი წამებში.",
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyContent: "ჩვენთვის პრიორიტეტულია თქვენი ანონიმურობა. სისტემაში შეყვანილი ინფორმაცია გამოიყენება მხოლოდ დოკუმენტის შესაქმნელად და გენერირებიდან ზუსტად 2 წუთში სრულად იშლება ბაზიდან. ჩვენ არ ვინახავთ თქვენს პერსონალურ მონაცემებს გრძელვადიანად.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშ (Cache) ფაილებს მომსახურების გასაუმჯობესებლად.",
      cookieBtn: "ვეთანხმები"
    },
    EN: {
      sloganPart1: "Stay Focused on ",
      sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      cvBtn: "AI CV in 2 Minutes",
      invoiceBtn: "Invoice (Soon)",
      whyTitle: "Why Us?",
      whyItems: ["Fast Generation (2 min)", "Multilingual Support", "AI Accuracy", "Full Anonymity"],
      pricesTitle: "Pricing",
      prices: [
        { title: "CV in Georgian", price: "20₾" },
        { title: "CV in Foreign Language", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited CV Generation", price: "75₾" }
      ],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to completely simplify the document preparation process using artificial intelligence, allowing you to save time and get professional results in seconds.",
      privacyTitle: "Privacy Policy",
      privacyContent: "Your anonymity is our priority. Information entered into the system is used solely for document creation and is completely deleted from the database exactly 2 minutes after generation. We do not store your personal data long-term.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files to ensure the best experience.",
      cookieBtn: "I Agree"
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ",
      sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      cvBtn: "AI CV за 2 минуты",
      invoiceBtn: "Инвойс (Скоро)",
      whyTitle: "Почему мы?",
      whyItems: ["Быстрая генерация (2 мин)", "Мультиязычность", "Точность ИИ", "Анонимность"],
      pricesTitle: "Тарифы",
      prices: [
        { title: "Резюме на грузинском", price: "20₾" },
        { title: "Резюме на ин. языке", price: "35₾" },
        { title: "Резюме на 5 языках", price: "55₾" },
        { title: "Безлимитное резюме", price: "75₾" }
      ],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша цель — максимально упростить процесс подготовки документов с помощью искусственного интеллекта, что позволяет вам экономить время и получать профессиональный результат за считанные секунды.",
      privacyTitle: "Конфиденциальность",
      privacyContent: "Ваша анонимность — наш приоритет. Информация, введенная в систему, используется только для создания документа и полностью удаляется из базы данных ровно через 2 минуты после генерации. Мы не храним ваши персональные данные в долгосрочной перспективе.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      cookieMsg: "Мы используем кэш для улучшения работы сайта.",
      cookieBtn: "Согласен"
    }
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '120px', overflowX: 'hidden' }}>
      
      {/* Header - სუფთა დიზაინი ხელოვნური ბოქლომის გარეშე */}
      <header style={{ 
        backgroundColor: '#1A1A1A', 
        padding: '12px 15px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'fixed', 
        top: 0, 
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
      }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img 
            src={logoUrl} 
            alt="Logo" 
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '15px', letterSpacing: '0.5px' }}>
            GEO DOCS SERVICE
          </div>
        </div>
        
        <div style={{ backgroundColor: '#000', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      {/* Spacing */}
      <div style={{ height: '80px' }}></div>

      <main style={{ padding: '0 20px' }}>
        {activeTab === 'home' || activeTab === 'prices' ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', marginTop: '25px', lineHeight: 1.1 }}>
                <span style={{ color: '#FFB800' }}>{t.sloganPart1}</span>
                <span style={{ color: 'white' }}>{t.sloganPart2}</span>
              </h1>
            </div>

            {/* რობოტი ბიჭუნას სურათი სლოგანის ბოლოში */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
              <img 
                src={robotUrl} 
                alt="AI Robot" 
                style={{ width: '160px', height: '160px', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#FFB800', width: '100%', padding: '20px', borderRadius: '20px', border: 'none', fontWeight: '900', fontSize: '19px', cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'black' }}>
              <Zap fill="black" size={20} /> {t.cvBtn}
            </button>

            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '20px', border: '2px dashed #FFB800', color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: 0.9 }}>
              <FileText size={20} color="#FFB800" /> {t.invoiceBtn}
            </button>

            <div ref={pricingRef} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontStyle: 'italic', marginBottom: '20px', color: '#FFB800', fontWeight: '900' }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <button key={i} onClick={() => window.open(googleFormUrl, '_blank')} style={{ backgroundColor: '#2A2A2A', width: '100%', padding: '20px', borderRadius: '25px', border: 'none', color: 'white', textAlign: 'left', marginBottom: '12px', cursor: 'pointer' }}>
                  <div style={{ fontSize: '13px', opacity: 0.8 }}>{p.title}</div>
                  <div style={{ color: '#FFB800', fontSize: '26px', fontWeight: '900', fontStyle: 'italic' }}>{p.price}</div>
                </button>
              ))}
            </div>
          </div>
        ) : activeTab === 'about' ? (
          <div style={{ padding: '20px 0' }}>
            <div style={{ backgroundColor: '#2A2A2A', padding: '30px', borderRadius: '30px', textAlign: 'center' }}>
              <Info size={40} color="#FFB800" style={{marginBottom: '20px'}} />
              <h2 style={{ fontStyle: 'italic', fontSize: '24px', marginBottom: '20px', fontWeight: '900' }}>{t.aboutTitle}</h2>
              <p style={{ lineHeight: '1.7', fontSize: '14px', color: '#eee', textAlign: 'center' }}>{t.aboutContent}</p>
            </div>
          </div>
        ) : (
          <div style={{ padding: '20px 0' }}>
             <div style={{ backgroundColor: '#2A2A2A', padding: '35px 25px', borderRadius: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <ShieldCheck size={40} color="#FFB800" style={{marginBottom: '20px'}} />
                <h2 style={{ fontStyle: 'italic', fontSize: '20px', marginBottom: '20px', fontWeight: '900' }}>{t.privacyTitle}</h2>
              </div>
              <p style={{ lineHeight: '1.6', fontSize: '12.5px', color: '#ccc', textAlign: 'left', padding: '0 5px' }}>
                {t.privacyContent}
              </p>
            </div>
          </div>
        )}

        <footer style={{ textAlign: 'center', marginTop: '30px', padding: '20px' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '45px', borderRadius: '50%' }} onError={(e) => e.target.style.display='none'}/>
          <h3 style={{ fontStyle: 'italic', fontWeight: '900', fontSize: '16px', marginTop: '10px' }}>GEO DOCS SERVICE</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', margin: '20px 0' }}>
            <Instagram size={22} /> <Facebook size={22} /> <Send size={22} />
          </div>
          <p style={{ fontSize: '11px', opacity: 0.5 }}>{t.rights}</p>
        </footer>
      </main>

      {/* Cookie Consent */}
      {showCookieConsent && (
        <div style={{ position: 'fixed', bottom: '100px', left: '20px', right: '20px', backgroundColor: '#1A1A1A', padding: '15px', borderRadius: '15px', border: '1px solid #FFB800', zIndex: 2000, textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.8)' }}>
          <p style={{ fontSize: '11px', marginBottom: '10px', color: '#eee' }}>{t.cookieMsg}</p>
          <button onClick={() => setShowCookieConsent(false)} style={{ backgroundColor: '#FFB800', color: 'black', border: 'none', padding: '6px 20px', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>{t.cookieBtn}</button>
        </div>
      )}

      {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ width: '85%', maxWidth: '340px', backgroundColor: '#1A1A1A', borderRadius: '40px', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '3px solid #007AFF', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
          <Home size={24} onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#007AFF' : 'white' }} />
          <LayoutGrid size={24} onClick={() => { setActiveTab('home'); setTimeout(() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ cursor: 'pointer', color: activeTab === 'prices' ? '#007AFF' : 'white' }} />
          <Info size={24} onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: activeTab === 'about' ? '#007AFF' : 'white' }} />
          <Bell size={24} color="#444" style={{ opacity: 0.5 }} />
        </div>
      </div>
    </div>
  );
}
