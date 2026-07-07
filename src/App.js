import React, { useState, useEffect } from 'react';
import { Home, LayoutGrid, Info, Instagram, Facebook, Send, X, FileText } from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'გამარჯობა! მე ვარ დოქტორი დამისო. რით შემიძლია დაგეხმაროთ?' }]);
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

  const handleChatSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const systemPrompt = `შენ ხარ დოქტორი დამისო (Dr. Damiso), Geo Docs Service-ის ოფიციალური AI ასისტენტი (3D რობოტი).
    შენი წესები, რომლებიც აუცილებლად უნდა დაიცვა და აუხსნა მომხმარებელს საჭიროების შემთხვევაში:
    1. ფასები: CV ქართულად 10₾, უცხო ენაზე 15₾.
    2. კონფიდენციალურობა: მომხმარებლის მიერ შეყვანილი ყველა პერსონალური მონაცემი იშლება ბაზიდან CV-ის დამზადებიდან 5 წუთში. უფასო ჩასწორების უზრუნველსაყოფად ინახება მხოლოდ 3 დეტალი: თარიღი, არჩეული ენა და ელ-ფოსტა.
    3. ფაილის წაშლა: თავად გენერირებული CV ფაილი (PDF) Drive-იდან იშლება იმავე დღის ღამის 12 საათზე.
    4. უფასო ჩასწორება: მომხმარებელს შეუძლია უფასოდ დააგენერიროს/ჩაასწოროს თავისი CV იმავე დღეს, იმავე ენაზე და იმავე ელ-ფოსტის გამოყენებით.
    5. დაბრუნების პოლიტიკა: მომსახურება ითვლება გაწეულად PDF დოკუმენტის გაგზავნისთანავე. თანხა არ ბრუნდება, გარდა ტექნიკური ხარვეზის შემთხვევისა.
    იყავი მეგობრული, ზრდილობიანი და ლაკონიური. პასუხი გასეცი ზუსტად იმ ენაზე, რომელ ენაზეც მომხმარებელი მოგმართავს (ქართულად, ინგლისურად ან რუსულად). ნუ ისაუბრებ ისეთ თემებზე, რაც არ ეხება CV-ს ან Geo Docs Service-ს.
    მომხმარებლის კითხვა: ${input}`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt }] }]
        })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.candidates[0].content.parts[0].text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "ბოდიში, დროებით კავშირის პრობლემაა. გთხოვთ, სცადოთ ოდნავ მოგვიანებით." }]);
    }
    setLoading(false);
  };

  const t = {
    GE: { 
      sloganPart1: "ნუ მოწყდები ", 
      sloganPart2: "შენს საქმეს", 
      alert: "პერსონალური მონაცემები იშლება 5 წუთში, ფაილი - შუაღამისას!", 
      cvBtn: "AI CV 2 წუთში", 
      invoiceBtn: "ინვოისი (მალე)", 
      pricesTitle: "ტარიფები", 
      prices: [{ title: "სივის ქართულად გენერირება", price: "10₾" }, { title: "სივის უცხო ენაზე გენერირება", price: "15₾" }], 
      aboutTitle: "ჩვენს შესახებ", 
      aboutContent: "Geo Docs Service არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი გუნდი მუშაობს მაღალი სიზუსტის ხელოვნურ ინტელექტზე, რათა თქვენი დოკუმენტები მომზადდეს წამებში. ჩვენ პრიორიტეტს ვანიჭებთ უსაფრთხოებას, კონფიდენციალურობას და მომხმარებლის კომფორტს.", 
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      termsTitle: "წესები და პირობები",
      termsList: [
        "მომხმარებლის მიერ შეყვანილი პერსონალური მონაცემები სრულად იშლება ჩვენი ბაზიდან CV-ის დამზადებიდან 5 წუთში. უფასო ჩასწორების სერვისის უზრუნველსაყოფად სისტემაში ინახება მხოლოდ 3 დეტალი: თარიღი, არჩეული ენა და ელ-ფოსტა.",
        "უშუალოდ გენერირებული PDF დოკუმენტი (CV) ჩვენი სისტემიდან (Google Drive) იშლება იმავე დღის ღამის 12 საათზე.",
        "მომხმარებელს უფლება აქვს ისარგებლოს უფასო ჩასწორების/განმეორებითი გენერაციის სერვისით იმავე დღეს, იმავე ენაზე და იმავე ელ-ფოსტის გამოყენების შემთხვევაში.",
        "მომსახურება ითვლება გაწეულად PDF დოკუმენტის თქვენს ელ-ფოსტაზე გაგზავნის მომენტიდან.",
        "გადახდილი თანხა უკან არ ბრუნდება, გარდა იმ შემთხვევისა, როდესაც დაფიქსირდა ტექნიკური ხარვეზი სისტემის მხრიდან."
      ]
    },
    EN: { 
      sloganPart1: "Stay Focused on ", 
      sloganPart2: "Your Business", 
      alert: "Personal data is deleted in 5 mins, file - at midnight!", 
      cvBtn: "AI CV in 2 Minutes", 
      invoiceBtn: "Invoice (Soon)", 
      pricesTitle: "Pricing", 
      prices: [{ title: "CV Generation in Georgian", price: "10₾" }, { title: "CV Generation in Foreign Language", price: "15₾" }], 
      aboutTitle: "About Us", 
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our team works on high-precision AI to ensure your documents are prepared in seconds. We prioritize security, confidentiality, and user comfort.", 
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      termsTitle: "Terms and Conditions",
      termsList: [
        "Personal data entered by the user is completely deleted from our database within 5 minutes after the CV is created. To provide the free revision service, only 3 details are kept: date, selected language, and email address.",
        "The generated PDF document (CV) is completely deleted from our system (Google Drive) at midnight of the same day.",
        "Users have the right to a free revision/regeneration on the same day, in the same language, and using the same email address.",
        "The service is considered fulfilled once the PDF document is sent to your email.",
        "Paid amounts are non-refundable unless a technical error occurs on the system's side."
      ]
    },
    RU: { 
      sloganPart1: "Не отвлекайтесь ", 
      sloganPart2: "от дел", 
      alert: "Личные данные удаляются через 5 мин, файл - в полночь!", 
      cvBtn: "AI CV за 2 минуты", 
      invoiceBtn: "Инвойс (Скоро)", 
      pricesTitle: "Тарифы", 
      prices: [{ title: "Генерация резюме на грузинском", price: "10₾" }, { title: "Генерация резюме на иностранном языке", price: "15₾" }], 
      aboutTitle: "О нас", 
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша команда работает над высокоточным ИИ, чтобы ваши документы готовились за секунды. Мы уделяем приоритетное внимание безопасности.", 
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      termsTitle: "Правила и условия",
      termsList: [
        "Личные данные, введенные пользователем, полностью удаляются из нашей базы данных в течение 5 минут после создания резюме. Для обеспечения бесплатной проверки сохраняются только 3 детали: дата, выбранный язык и электронная почта.",
        "Сгенерированный PDF-документ (резюме) удаляется из нашей системы (Google Drive) в полночь того же дня.",
        "Пользователи имеют право на бесплатное исправление/повторную генерацию в тот же день, на том же языке и с использованием того же адреса электронной почты.",
        "Услуга считается выполненной после отправки PDF-документа на вашу электронную почту.",
        "Оплаченные суммы не подлежат возврату, за исключением случаев технической ошибки со стороны системы."
      ]
    }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
            <img src={logoUrl} alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', borderRadius: '8px', padding: '2px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px', boxSizing: 'border-box' }}>
        
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '15px', fontSize: '11px', marginBottom: '20px' }}>
              {t.alert}
            </div>
            
            <h1 style={{ fontSize: '26px', margin: '20px 0' }}>
              <span style={{ color: 'white' }}>{t.sloganPart1}</span>
              <span style={{ color: '#FFB800' }}>{t.sloganPart2}</span>
            </h1>
            
            <img src={robotUrl} alt="Robot" style={{ width: '220px', margin: '10px auto' }} />
            
            <button onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', padding: '18px', background: '#FFB800', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', color: 'black' }}>
              {t.cvBtn}
            </button>
            
            <button style={{ width: '100%', padding: '15px', background: '#007AFF', border: '2px dashed #FFB800', marginTop: '15px', borderRadius: '20px', color: 'white', fontWeight: 'bold' }}>
              {t.invoiceBtn}
            </button>

            {/* Pricing Section */}
            <div id="pricing-section" style={{ marginTop: '40px' }}>
              <h2 style={{ textAlign: 'left', marginBottom: '20px', color: '#FFB800' }}>{t.pricesTitle}</h2>
              {t.prices.map((p, i) => (
                <button key={i} onClick={() => window.open(googleFormUrl, '_blank')} style={{ width: '100%', background: '#2A2A2A', padding: '20px', borderRadius: '20px', border: '1px solid #444', marginBottom: '10px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ fontSize: '14px' }}>{p.title}</span> 
                  <b style={{ color: '#FFB800', fontSize: '18px' }}>{p.price}</b>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2 style={{ color: '#FFB800' }}>{t.aboutTitle}</h2>
            <p style={{ lineHeight: '1.6' }}>{t.aboutContent}</p>
          </div>
        )}

        {/* Terms Tab */}
        {activeTab === 'terms' && (
          <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2 style={{ color: '#FFB800', marginBottom: '20px' }}>{t.termsTitle}</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px' }}>
              {t.termsList.map((term, index) => (
                <li key={index} style={{ marginBottom: '15px' }}>{term}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '40px', opacity: 0.6 }}>
          <img src={logoUrl} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginBottom: '10px', objectFit: 'cover' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
            <Instagram size={20} />
            <Facebook size={20} />
            <Send size={20} />
          </div>
          
          <div 
            onClick={() => setActiveTab('terms')} 
            style={{ fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', marginBottom: '10px', color: '#FFB800' }}>
            {t.termsTitle}
          </div>
          
          <p style={{ fontSize: '10px' }}>{t.rights}</p>
        </footer>
      </main>

      {/* Dr. Damiso Chat Window */}
      {isChatOpen && (
        <div style={{
          position: 'fixed', bottom: '150px', right: '5%', width: '90%', maxWidth: '350px', height: '400px',
          backgroundColor: '#1A1A1A', borderRadius: '20px', border: '2px solid #007AFF',
          zIndex: 10000, display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
        }}>
          <div style={{ padding: '12px 15px', backgroundColor: '#007AFF', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
            <span style={{ fontWeight: 'bold' }}>Dr. Damiso</span>
            <X size={20} onClick={() => setIsChatOpen(false)} style={{ cursor: 'pointer' }} />
          </div>
          
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', backgroundColor: m.role === 'user' ? '#007AFF' : '#333', padding: '10px 14px', borderRadius: '15px', maxWidth: '85%', fontSize: '14px', lineHeight: '1.4' }}>
                {m.text}
              </div>
            ))}
            {loading && <div style={{ alignSelf: 'flex-start', color: '#888', fontSize: '12px', fontStyle: 'italic' }}>ბეჭდავს...</div>}
          </div>
          
          <form 
            onSubmit={handleChatSubmit} 
            style={{ padding: '10px', display: 'flex', gap: '8px', borderTop: '1px solid #333', margin: 0 }}
          >
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="მოწერე შეტყობინება..." 
              style={{ flex: 1, padding: '10px 12px', borderRadius: '10px', border: 'none', backgroundColor: '#fff', color: '#000', fontSize: '14px', outline: 'none' }} 
            />
            <button 
              type="submit" 
              style={{ background: '#FFB800', border: 'none', borderRadius: '10px', padding: '0 15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Send size={18} color="#000" />
            </button>
          </form>
        </div>
      )}

      {/* Dr. Damiso Chat Button */}
      <div style={{
          position: 'fixed', bottom: '80px', right: '20px', 
          display: 'flex', alignItems: 'center', gap: '10px', zIndex: 9999
      }}>
        <div style={{
          backgroundColor: '#1A1A1A', color: 'white', padding: '8px 15px', 
          borderRadius: '20px', fontWeight: 'bold', fontSize: '14px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>
          Dr. Damiso
        </div>
        <div 
          onClick={() => setIsChatOpen(!isChatOpen)}
          style={{
            backgroundColor: 'white', border: '3px solid #007AFF', width: '60px', height: '60px',
            borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
            cursor: 'pointer', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          <img src={robotUrl} alt="Dr. Damiso" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', bottom: '15px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', 
        padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', 
        zIndex: 1000, boxSizing: 'border-box',
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform: showNav ? 'translateY(0)' : 'translateY(100px)',
        opacity: showNav ? 1 : 0,
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
      }}>
        <Home onClick={() => setActiveTab('home')} style={{ color: activeTab === 'home' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <LayoutGrid 
          onClick={() => {
            setActiveTab('home');
            setTimeout(() => {
              document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} 
          style={{ cursor: 'pointer', color: 'white' }} 
        />
        <FileText onClick={() => setActiveTab('terms')} style={{ color: activeTab === 'terms' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ color: activeTab === 'about' ? '#007AFF' : 'white', cursor: 'pointer' }} />
      </nav>
      
    </div>
  );
}
