import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, 
  Home, 
  LayoutGrid, 
  Info, 
  Bell, 
  FileText,
  Instagram, 
  Facebook, 
  Send, 
  ShieldCheck, 
  Lock 
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
  const robotUrl = "/Dr-Damiso.jpg"; 

  const translations = {
    GE: {
      sloganPart1: "ნუ მოწყდები ",
      sloganPart2: "შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      robotGreet: "გამარჯობა! მე დოქტორი დამისო ვარ. რით შემიძლია დაგეხმაროთ?",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      whyTitle: "რატომ ჩვენ?",
      whyItems: [
        "სწრაფი გენერირება (2 წთ)",
        "მრავალენოვანი მხარდაჭერა",
        "მაქსიმალური სიზუსტე AI-თ",
        "სრული ანონიმურობა"
      ],
      pricesTitle: "ტარიფები",
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      aboutTitle: "ჩვენს შესახებ",
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი მიზანია დოკუმენტების მომზადების პროცესის მაქსიმალური გამარტივება ხელოვნური ინტელექტის გამოყენებით.",
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyContent: "ჩვენთვის პრიორიტეტულია თქვენი ანონიმურობა. სისტემაში შეყვანილი ინფორმაცია გამოიყენება მხოლოდ დოკუმენტის შესაქმნელად და გენერირებიდან ზუსტად 2 წუთში სრულად იშლება ბაზიდან.",
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      cookieMsg: "საიტი იყენებს ქეშ (Cache) ფაილებს მომსახურების გასაუმჯობესებლად.",
      cookieBtn: "ვეთანხმები"
    },
    EN: {
      sloganPart1: "Stay Focused on ",
      sloganPart2: "Your Business",
      alert: "Data is auto-deleted in 2 minutes!",
      robotGreet: "Hello! I am Dr. Damiso. How can I help you?",
      cvBtn: "AI CV in 2 Minutes",
      invoiceBtn: "Invoice (Soon)",
      whyTitle: "Why Us?",
      whyItems: [
        "Fast Generation (2 min)",
        "Multilingual Support",
        "AI Accuracy",
        "Full Anonymity"
      ],
      pricesTitle: "Pricing",
      prices: [
        { title: "CV in Georgian", price: "20₾" },
        { title: "CV in Foreign Language", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited CV Generation", price: "75₾" }
      ],
      aboutTitle: "About Us",
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to simplify the document preparation process using AI.",
      privacyTitle: "Privacy Policy",
      privacyContent: "Anonymity is our priority. Information entered is deleted from the database exactly 2 minutes after generation.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      cookieMsg: "We use cache files to ensure the best experience.",
      cookieBtn: "I Agree"
    },
    RU: {
      sloganPart1: "Не отвлекайтесь ",
      sloganPart2: "от дел",
      alert: "Данные удаляются через 2 минуты!",
      robotGreet: "Привет! Я Доктор Дамисо. Чем могу помочь?",
      cvBtn: "AI CV за 2 минуты",
      invoiceBtn: "Инвойс (Скоро)",
      whyTitle: "Почему мы?",
      whyItems: [
        "Быстрая генерация (2 мин)",
        "Мультиязычность",
        "Точность ИИ",
        "Анонимность"
      ],
      pricesTitle: "Тарифы",
      prices: [
        { title: "Резюме на грузинском", price: "20₾" },
        { title: "Резюме на ин. языке", price: "35₾" },
        { title: "Резюме на 5 языках", price: "55₾" },
        { title: "Безлимитное резюме", price: "75₾" }
      ],
      aboutTitle: "О нас",
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа.",
      privacyTitle: "Конфиденциальность",
      privacyContent: "Ваша анонимность — приоритет. Данные удаляются через 2 минуты после генерации.",
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      cookieMsg: "Мы используем кэш для улучшения работы сайта.",
      cookieBtn: "Согласен"
    }
  };

  const t = translations[lang] || translations['GE'];

  return (
    <div style={{ 
      backgroundColor: '#6D757D', 
      minHeight: '100vh', 
      color: 'white', 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      paddingBottom: '140px' 
    }}>
      
      {/* HEADER */}
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
        borderBottom: '1px solid #333' 
      }}>
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <img 
            src={logoUrl} 
            alt="Logo" 
            style={{ width: '32px', height: '32px', borderRadius: '50%' }} 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '5px', 
            backgroundColor: '#000', 
            padding: '5px 12px', 
            borderRadius: '15px', 
            border: '1px solid #333' 
          }}>
            <Lock size={12} color="#4ade80" fill="#4ade80" /> 
            <div style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '11px', letterSpacing: '0.5px' }}>
              GEO DOCS SERVICE
            </div>
          </div>
        </div>
        <div style={{ 
          backgroundColor: '#000', 
          padding: '3px', 
          borderRadius: '10px', 
          display: 'flex', 
          gap: '2px', 
          border: '1px solid #333' 
        }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button 
              key={l} 
              onClick={() => setLang(l)} 
              style={{ 
                backgroundColor: lang === l ? '#007AFF' : 'transparent', 
                color: 'white', 
                border: 'none', 
                padding: '6px 10px', 
                borderRadius: '8px', 
                fontSize: '10px', 
                fontWeight: 'bold' 
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </header>

      <div style={{ height: '90px' }}></div>

      <main style={{ maxWidth: '500px', margin: '0 auto', padding: '0 15px' }}>
        {activeTab === 'home' ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.15)', 
                padding: '8px 15px', 
                borderRadius: '20px', 
                fontSize: '11px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '5px', 
                backdropFilter: 'blur(5px)' 
              }}>
                <ShieldCheck size={14} color="#FFB800" /> {t.alert}
              </div>
              <h1 style={{ 
                fontSize: '32px', 
                fontWeight: '900', 
                fontStyle: 'italic', 
                marginTop: '20px', 
                lineHeight: 1.1 
              }}>
                <span style={{ color: '#FFB800' }}>{t.sloganPart1}</span>
                <span style={{ color: 'white' }}>{t.sloganPart2}</span>
              </h1>
            </div>

            {/* DR. DAMISO SECTION */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
              <img 
                src={robotUrl} 
                alt="Dr. Damiso" 
                style={{ 
                  width: '160px', 
                  height: 'auto', 
                  filter: 'drop-shadow(0 0 12px rgba(74, 222, 128, 0.5))' 
                }} 
              />
              <div style={{ 
                backgroundColor: '#1A1A1A', 
                padding: '12px 18px', 
                borderRadius: '20px', 
                border: '1.5px solid #4ade80', 
                marginTop: '-10px', 
                position: 'relative', 
                maxWidth: '85%',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}>
                <p style={{ 
                  fontSize: '13px', 
                  margin: 0, 
                  textAlign: 'center', 
                  fontWeight: 'bold', 
                  color: '#4ade80', 
                  lineHeight: '1.4' 
                }}>
                  {t.robotGreet}
                </p>
              </div>
            </div>

            <button 
              onClick={() => window.open(googleFormUrl, '_blank')} 
              style={{ 
                backgroundColor: '#FFB800', 
                width: '100%', 
                padding: '22px', 
                borderRadius: '24px', 
                border: 'none', 
                fontWeight: '900', 
                fontSize: '20px', 
                marginBottom: '15px', 
                color: 'black', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '10px' 
              }}
            >
              <Zap fill="black" size={22} /> {t.cvBtn}
            </button>

            <button style={{ 
              backgroundColor: '#2A2A2A', 
              width: '100%', 
              padding: '20px', 
              borderRadius: '24px', 
              border: '2px dashed #FFB800', 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: '16px', 
              marginBottom: '40px', 
              opacity: 0.8, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '10px' 
            }}>
              <FileText size={20} color="#FFB800" /> {t.invoiceBtn}
            </button>

            <div ref={pricingRef} style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '22px', 
                fontStyle: 'italic', 
                marginBottom: '20px', 
                color: '#FFB800', 
                fontWeight: '900' 
              }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <div 
                  key={i} 
                  style={{ 
                    backgroundColor: '#1A1A1A', 
                    width: '100%', 
                    padding: '20px', 
                    borderRadius: '25px', 
                    border: '1px solid #333', 
                    marginBottom: '12px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{p.title}</div>
                  <div style={{ color: '#FFB800', fontSize: '24px', fontWeight: '900', fontStyle: 'italic' }}>
                    {p.price}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#1A1A1A', 
            borderRadius: '25px', 
            border: '1px solid #333', 
            marginBottom: '40px' 
          }}>
            <h2 style={{ color: '#FFB800', fontSize: '24px', marginBottom: '15px' }}>
              {activeTab === 'about' ? t.aboutTitle : t.privacyTitle}
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.9 }}>
              {activeTab === 'about' ? t.aboutContent : t.privacyContent}
            </p>
          </div>
        )}

        <footer style={{ textAlign: 'center', padding: '40px 0', opacity: 0.6 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '20px' }}>
            <Instagram size={22} /> 
            <Facebook size={22} /> 
            <Send size={22} />
          </div>
          <p style={{ fontSize: '10px', letterSpacing: '1px' }}>{t.rights}</p>
        </footer>
      </main>

      {/* COOKIE CONSENT */}
      {showCookieConsent && (
        <div style={{ 
          position: 'fixed', 
          bottom: '100px', 
          left: '20px', 
          right: '20px', 
          backgroundColor: '#1A1A1A', 
          padding: '15px', 
          borderRadius: '20px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          border: '1px solid #333', 
          zIndex: 2000,
          boxShadow: '0 5px 20px rgba(0,0,0,0.5)'
        }}>
          <p style={{ fontSize: '11px', margin: 0, maxWidth: '70%' }}>{t.cookieMsg}</p>
          <button 
            onClick={() => setShowCookieConsent(false)} 
            style={{ 
              backgroundColor: '#007AFF', 
              color: 'white', 
              border: 'none', 
              padding: '8px 15px', 
              borderRadius: '12px', 
              fontSize: '11px', 
              fontWeight: 'bold' 
            }}
          >
            {t.cookieBtn}
          </button>
        </div>
      )}

      {/* NAVIGATION BAR */}
      <div style={{ 
        position: 'fixed', 
        bottom: '25px', 
        left: 0, 
        right: 0, 
        display: 'flex', 
        justifyContent: 'center', 
        zIndex: 1000 
      }}>
        <div style={{ 
          width: '90%', 
          maxWidth: '360px', 
          backgroundColor: '#1A1A1A', 
          borderRadius: '35px', 
          padding: '12px', 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)', 
          borderBottom: '4px solid #007AFF' 
        }}>
          <Home 
            size={26} 
            onClick={() => setActiveTab('home')} 
            style={{ color: activeTab === 'home' ? '#007AFF' : 'white', cursor: 'pointer' }} 
          />
          <LayoutGrid 
            size={26} 
            onClick={() => { 
              setActiveTab('home'); 
              setTimeout(() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); 
            }} 
            style={{ color: activeTab === 'prices' ? '#007AFF' : 'white', cursor: 'pointer' }} 
          />
          <Info 
            size={26} 
            onClick={() => setActiveTab('about')} 
            style={{ color: activeTab === 'about' ? '#007AFF' : 'white', cursor: 'pointer' }} 
          />
          <Bell size={26} color="#333" style={{ opacity: 0.4 }} />
        </div>
      </div>
    </div>
  );
}

