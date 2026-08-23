import { useState, useEffect } from 'react';
import { Home, LayoutGrid, Info, Instagram, Facebook, Send, X, FileText } from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]); 
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // 🔴 1. ენის ჩატვირთვა ლოკალური მეხსიერებიდან (გვერდის გახსნისას)
  useEffect(() => {
    const savedLang = localStorage.getItem('geoDocsLang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // 🔴 2. ენის შენახვა ლოკალურ მეხსიერებაში (როცა მომხმარებელი ენას შეცვლის)
  useEffect(() => {
    localStorage.setItem('geoDocsLang', lang);
  }, [lang]);

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

    const systemPrompt = `შენ ხარ დოქტორი დამისო (Dr. Damiso), ჯეო დოკს სერვისის (Geo Docs Service) ოფიციალური AI ასისტენტი (3D რობოტი).

    მკაცრი წესები კომუნიკაციაზე:
    1. მისალმება: თუ მომხმარებელი მხოლოდ მოგესალმა (მაგ: გამარჯობა, hello, привет), უპასუხე: "გამარჯობა! მე ვარ დოქტორი დამისო. რით შემიძლია დაგეხმაროთ?" (გადათარგმნე იმ ენაზე, რა ენაზეც მოგესალმნენ). სხვა კონკრეტულ კითხვებზე პირდაპირ საქმეზე გადადი, ზედმეტი მისალმების გარეშე.
    2. ენა: ყოველთვის უპასუხე იმ ენაზე, რა ენაზეც გწერენ! თუ გწერენ ინგლისურად - უპასუხე ინგლისურად. თუ გწერენ რუსულად (თუნდაც ლათინური ასოებით) - უპასუხე გამართული რუსულით.
    3. ლაკონიურობა: უპასუხე ზუსტად და მოკლედ მხოლოდ დასმულ შეკითხვას. ნუ მოყვები უსაფრთხოებაზე ან მონაცემთა წაშლაზე, თუ კონკრეტულად არ გეკითხებიან!

    დახმარება და საიტის ნავიგაცია (ძალიან მნიშვნელოვანი):
    - თუ მომხმარებელი გეკითხება, როგორ შექმნას CV, სად დააჭიროს, ან როგორ დაიწყოს პროცესი, აუხსენი ეს შინაარსი (აუცილებლად იმ ენაზე, რა ენაზეც გკითხეს!): 
    "CV-ს შესაქმნელად, გთხოვთ მთავარ გვერდზე დააჭიროთ ყვითელ ღილაკს 'AI CV 2 წუთში' ან 'ტარიფების' განყოფილებაში აირჩიოთ სასურველი ენა."

    თავაზიანობა:
    - თუ მომხმარებელი მადლობას გიხდის, უპასუხე ძალიან თავაზიანად (იმ ენაზე, რომელზეც გწერენ). მაგალითად: "გამიხარდა, რომ დაგეხმარეთ! თუ კიდევ დაგჭირდით, მე აქ ვარ რათა დაგეხმაროთ."

    პროცესი და მიწოდება (აუცილებლად გაითვალისწინე, როცა დეტალებს ითხოვენ):
    - კითხვარის შევსების შემდეგ, დაგენერირებული საბუთი იგზავნება მომხმარებლის იმეილზე დაახლოებით 2 წუთში. 
    - აუცილებლად ურჩიე/გააფრთხილე მომხმარებელი: "იმეილი სწორად ჩაწერეთ, რადგან მითითებულ იმეილზე გამოგეგზავნებათ დამზადებული PDF ფაილი." (გადათარგმნე შესაბამის ენაზე).

    შენი ცოდნა (გამოიყენე მხოლოდ საჭიროებისას):
    - ფასები: CV ქართულად - 10₾. ნებისმიერ უცხო ენაზე (მათ შორის არგენტინულ ესპანურზეც) - 15₾.
    - უსაფრთხოება და წაშლა: პერსონალური მონაცემები იშლება საბუთის დამზადებიდან 5 წუთში. მომსახურების უზრუნველსაყოფად შენახული ინფორმაცია (თარიღი, ენა, ელ-ფოსტა) და გენერირებული PDF ფაილები სრულად იშლება ყოველ ღამის 12 საათზე.
    - მონაცემთა გამოყენება: მოწოდებული ინფორმაცია გამოყენებული იქნება ექსკლუზიურად მხოლოდ შერჩეული დოკუმენტის მოსამზადებლად.`;

    const userPrompt = `მომხმარებლის კითხვა: ${input}`;
    const fullPrompt = systemPrompt + "\n\n" + userPrompt;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: fullPrompt })
      });
      
      const data = await response.json();
      
      if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        const botResponse = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      } else {
        setMessages(prev => [...prev, { role: 'bot', text: "ბოდიში, პასუხი ვერ მივიღე. სცადე თავიდან." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "ბოდიში, დროებით კავშირის პრობლემაა. გთხოვთ სცადოთ ხელახლა." }]);
    }
    setLoading(false);
  };

  const t = {
    GE: { 
      sloganPart1: "ნუ მოწყდები ", 
      sloganPart2: "შენს საქმეს", 
      alert: "პერსონალური მონაცემები იშლება 5 წუთში!", 
      cvBtn: "AI CV 2 წუთში, ნებისმიერ ენაზე", 
      invoiceBtn: "ინვოისი (მალე)", 
      pricesTitle: "ტარიფები", 
      prices: [{ title: "სივის ქართულად გენერირება", price: "10₾" }, { title: "სივის უცხო ენაზე გენერირება", price: "15₾" }], 
      aboutTitle: "ჩვენს შესახებ", 
      aboutContent: (
        <div style={{ lineHeight: '1.6', fontSize: '15px' }}>
          <p style={{ marginBottom: '15px' }}>ჯეო დოკს სერვისი არის პირველი ქართული სრულად ავტომატიზებული პლატფორმა. ჩვენი გუნდი მუშაობს მაღალი სიზუსტის ხელოვნურ ინტელექტზე, რათა თქვენი დოკუმენტები მომზადდეს წამებში.</p>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>ფუნქციონალი და დანიშნულება</p>
          <p style={{ marginBottom: '10px' }}>პლატფორმა ორიენტირებულია ბიზნესპროცესების გასამარტივებლად და დოკუმენტბრუნვის სრული ავტომატიზაციისთვის. მისი მეშვეობით შეგიძლიათ მარტივად დააგენერიროთ:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
            <li><b style={{ color: '#FFB800' }}>ავტომატიზებული CV-ები (რეზიუმეები):</b> საერთაშორისო სტანდარტების შესაბამისად, ნებისმიერ ენაზე.</li>
            <li><b style={{ color: '#FFB800' }}>ინვოისები და შაბლონები:</b> ფინანსური და ადმინისტრაციული დოკუმენტების სწრაფი მართვა.</li>
          </ul>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>მთავარი მისია ემიგრანტებისთვის</p>
          <p style={{ marginBottom: '15px' }}>ჩვენი პლატფორმა სპეციალურად შეიქმნა ქართველი ემიგრანტებისთვის. ის გაძლევთ უნიკალურ შესაძლებლობას, კითხვარი შეავსოთ მარტივად, მშობლიურ (ქართულ) ენაზე, ხოლო უმაღლესი ხარისხის პროფესიონალური დოკუმენტი 2 წუთში დაგენერირდება და გამოგეგზავნებათ ზუსტად იმ ქვეყნის ენაზე, სადაც იმყოფებით.</p>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>ტექნოლოგიური უპირატესობა</p>
          <p>ჩვენი სისტემა ეფუძნება თანამედროვე ვებ-დეველოპმენტის უახლეს სტანდარტებსა და საიმედო ღრუბლოვან (Cloud) ინფრასტრუქტურას, რაც უზრუნველყოფს პლატფორმის შეუფერხებელ, სწრაფ მუშაობასა და მონაცემთა მაქსიმალურ დაცვას. სისტემა აგებულია ყველაენოვანი მხარდაჭერით და სრულად მორგებულია როგორც ადგილობრივი, ისე საერთაშორისო მომხმარებლის მოთხოვნებს.</p>
        </div>
      ),
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია.",
      termsTitle: "წესები და პირობები",
      refundTitle: "გადახდა, გაუქმება და თანხის დაბრუნება",
      refundContent1: "სერვისის სპეციფიკიდან გამომდინარე (ციფრული პროდუქტის მყისიერი მიწოდება), მომხმარებლის მიერ სერვისის საფასურის გადახდის და დოკუმენტის (CV) ავტომატური გენერირების შემდეგ, გადახდილი თანხა უკან არ ბრუნდება.",
      refundContent2: "შეკვეთის გაუქმება შესაძლებელია მხოლოდ სერვისის საფასურის გადახდის პროცესის დასრულებამდე.",
      termsContent: "გთხოვთ გაეცნოთ პლატფორმის მუშაობის პრინციპებსა და უსაფრთხოების წესებს:"
    },
    EN: { 
      sloganPart1: "Stay Focused on ", 
      sloganPart2: "Your Business", 
      alert: "Personal data is deleted in 5 mins!", 
      cvBtn: "AI CV in 2 Mins, Any Language", 
      invoiceBtn: "Invoice (Soon)", 
      pricesTitle: "Pricing", 
      prices: [{ title: "CV Generation in Georgian", price: "10₾" }, { title: "CV Generation in Foreign Language", price: "15₾" }], 
      aboutTitle: "About Us", 
      aboutContent: (
        <div style={{ lineHeight: '1.6', fontSize: '15px' }}>
          <p style={{ marginBottom: '15px' }}>Geo Docs Service is the first fully automated Georgian platform. Our team works on high-precision artificial intelligence so that your documents are prepared in seconds.</p>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>Functionality and Purpose</p>
          <p style={{ marginBottom: '10px' }}>The platform is focused on simplifying business processes and fully automating document flow. With our service, you can easily generate:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
            <li><b style={{ color: '#FFB800' }}>Automated CVs (Resumes):</b> In accordance with international standards, in any language.</li>
            <li><b style={{ color: '#FFB800' }}>Invoices and Templates:</b> Fast management of financial and administrative documents.</li>
          </ul>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>Main Mission for Emigrants</p>
          <p style={{ marginBottom: '15px' }}>Our platform was specifically created for Georgian emigrants. It gives you the unique opportunity to easily fill out the questionnaire in your native (Georgian) language, while a high-quality professional document is generated in 2 minutes and sent to you in the exact language of your host country.</p>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>Technological Advantage</p>
          <p>Our system is based on the latest standards of modern web development and reliable Cloud infrastructure, ensuring uninterrupted, fast operation and maximum data protection. The system is built with multilingual support and is fully tailored to the needs of both local and international users.</p>
        </div>
      ),
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved.",
      termsTitle: "Terms and Conditions",
      refundTitle: "Payment, Cancellation, and Refund Policy",
      refundContent1: "Due to the nature of the service (instant delivery of a digital product), the paid amount is non-refundable once the user has paid the service fee and the document (CV) has been automatically generated.",
      refundContent2: "Order cancellation is only possible before the payment process is completed.",
      termsContent: "Please review our platform's operating rules and security guidelines:"
    },
    RU: { 
      sloganPart1: "Не отвлекайтесь ", 
      sloganPart2: "от дел", 
      alert: "Личные данные удаляются через 5 мин!", 
      cvBtn: "AI CV за 2 минуты, на любом языке", 
      invoiceBtn: "Инвойс (Скоро)", 
      pricesTitle: "Тарифы", 
      prices: [{ title: "Генерация резюме на грузинском", price: "10₾" }, { title: "Генерация резюме на иностранном языке", price: "15₾" }], 
      aboutTitle: "О нас", 
      aboutContent: (
        <div style={{ lineHeight: '1.6', fontSize: '15px' }}>
          <p style={{ marginBottom: '15px' }}>Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша команда работает над высокоточным искусственным интеллектом, чтобы ваши документы были готовы за считанные секунды.</p>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>Функциональность и Назначение</p>
          <p style={{ marginBottom: '10px' }}>Платформа ориентирована на упрощение бизнес-процессов и полную автоматизацию документооборота. С нашей помощью вы можете легко генерировать:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
            <li><b style={{ color: '#FFB800' }}>Автоматизированные резюме (CV):</b> В соответствии с международными стандартами, на любом языке.</li>
            <li><b style={{ color: '#FFB800' }}>Инвойсы и шаблоны:</b> Быстрое управление финансовыми и административными документами.</li>
          </ul>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>Главная миссия для эмигрантов</p>
          <p style={{ marginBottom: '15px' }}>Наша платформа была специально создана для грузинских эмигрантов. Она дает вам уникальную возможность легко заполнить анкету на родном (грузинском) языке, а высококачественный профессиональный документ будет сгенерирован за 2 минуты и отправлен вам именно на языке страны вашего пребывания.</p>
          <p style={{ color: '#FFB800', fontWeight: 'bold', marginBottom: '10px' }}>Технологическое Преимущество</p>
          <p>Наша система основана на новейших стандартах современной веб-разработки и надежной облачной (Cloud) инфраструктуре, что обеспечивает бесперебойную, быструю работу и максимальную защиту данных. Платформа создана с мультиязычной поддержкой и полностью адаптирована под потребности как местных, так и международных пользователей.</p>
        </div>
      ),
      rights: "© 2026 GEO DOCS SERVICE. Все права защищены.",
      termsTitle: "Правила и условия",
      refundTitle: "Оплата, отмена и возврат средств",
      refundContent1: "В связи со спецификой сервиса (мгновенная доставка цифрового продукта), уплаченная сумма возврату не подлежит после того, как пользователь оплатил стоимость услуги и документ (CV) был автоматически сгенерирован.",
      refundContent2: "Отмена заказа возможна только до завершения процесса оплаты.",
      termsContent: "Пожалуйста, ознакомьтесь с правилами работы нашей платформы и политикой безопасности:"
    }
  }[lang];

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' }}>
      
      <style>{`
        @keyframes blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>

      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => {setActiveTab('home'); window.scrollTo(0,0);}}>
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
            <h2 style={{ color: '#FFB800', marginBottom: '15px' }}>{t.aboutTitle}</h2>
            {t.aboutContent}
          </div>
        )}

        {/* Terms and Conditions Tab */}
        {activeTab === 'terms' && (
          <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2 style={{ color: '#FFB800', marginBottom: '15px' }}>{t.termsTitle}</h2>
            <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>{t.termsContent}</p>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><b style={{ color: '#FFB800' }}>{lang === 'GE' ? 'ტარიფები:' : lang === 'EN' ? 'Pricing:' : 'Тарифы:'}</b> {lang === 'GE' ? 'CV ქართულად - 10₾, უცხო ენაზე - 15₾.' : lang === 'EN' ? 'CV in Georgian - 10₾, Foreign language - 15₾.' : 'Резюме на грузинском - 10₾, на иностранном - 15₾.'}</li>
              <li><b style={{ color: '#FFB800' }}>{lang === 'GE' ? 'მონაცემთა დაცვა:' : lang === 'EN' ? 'Data Protection:' : 'Защита данных:'}</b> {lang === 'GE' ? 'ყველა პერსონალური მონაცემი ავტომატურად იშლება ბაზიდან საბუთის დამზადებიდან 5 წუთის შემდეგ.' : lang === 'EN' ? 'All personal data is automatically deleted from the database 5 minutes after document preparation.' : 'Все личные данные автоматически удаляются из базы через 5 минут после подготовки документа.'}</li>
              <li><b style={{ color: '#FFB800' }}>{lang === 'GE' ? 'მონაცემთა გამოყენება:' : lang === 'EN' ? 'Data Usage:' : 'Использование данных:'}</b> {lang === 'GE' ? 'თქვენგან მოწოდებული ინფორმაცია გამოყენებული იქნება ექსკლუზიურად მხოლოდ თქვენს მიერ შერჩეული დოკუმენტის მოსამზადებლად.' : lang === 'EN' ? 'The information provided by you will be used exclusively for preparing your selected document.' : 'Предоставленная вами информация будет использоваться исключительно для подготовки выбранного вами документа.'}</li>
              <li><b style={{ color: '#FFB800' }}>{lang === 'GE' ? 'მომსახურების უზრუნველყოფა:' : lang === 'EN' ? 'Service Provision:' : 'Обеспечение обслуживания:'}</b> {lang === 'GE' ? 'სისტემაში უსაფრთხოების მიზნით ინახება მხოლოდ შეკვეთის თარიღი, არჩეული ენა და თქვენი ელ-ფოსტა, რომლებიც ასევე წაიშლება ყოველ ღამის 12 საათზე.' : lang === 'EN' ? 'For security reasons, only the order date, chosen language, and your email are stored, which are also deleted every night at 12:00 AM.' : 'В целях безопасности сохраняются только дата заказа, выбранный язык и ваша электронная почта, которые также удаляются каждую ночь в 12 часов.'}</li>
              <li><b style={{ color: '#FFB800' }}>{lang === 'GE' ? 'ჩასწორება / განმეორებითი დოკუმენტი:' : lang === 'EN' ? 'Correction / Repeat Document:' : 'Исправление / Повторный документ:'}</b> {lang === 'GE' ? 'თუ დოკუმენტში შეცდომაა, გთხოვთ, კითხვარი შეავსოთ თავიდან. სისტემა ამოწმებს შენახულ სამ მონაცემს (თარიღი, ენა, ელ-ფოსტა). დამთხვევის შემთხვევაში, სისტემა ავტომატურად მოგცემთ კორექტირების საშუალებას და ახალი, ჩასწორებული დოკუმენტი სრულიად უფასოდ დაგიმზადდებათ.' : lang === 'EN' ? 'If there is an error in the document, please fill out the questionnaire again. The system checks the three stored data points (date, language, email). If they match, the system will automatically allow correction and a new, corrected document will be generated completely free of charge.' : 'Если в документе есть ошибка, пожалуйста, заполните анкету заново. Система проверяет три сохраненных параметра (дата, язык, email). При совпадении система автоматически разрешит корректировку и бесплатно создаст новый, исправленный документ.'}</li>
              <li><b style={{ color: '#FFB800' }}>{lang === 'GE' ? 'ფაილების შენახვა:' : lang === 'EN' ? 'File Storage:' : 'Хранение файлов:'}</b> {lang === 'GE' ? 'გენერირებული PDF დოკუმენტები PDF Drive-იდან იშლება ყოველ ღამის 12 საათზე.' : lang === 'EN' ? 'Generated PDF documents are deleted from PDF Drive every night at 12:00 AM.' : 'Сгенерированные PDF-документы удаляются из PDF Drive каждую ночь в 12 часов.'}</li>
            
            <h3 style={{ color: '#FFB800', marginTop: '20px', marginBottom: '10px', fontSize: '18px' }}>{t.refundTitle}</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>{t.refundContent1}</li>
              <li>{t.refundContent2}</li>
            </ul>
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
            onClick={() => {
              setActiveTab('terms');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            style={{ fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', marginBottom: '10px', color: '#FFB800', fontWeight: 'bold' }}>
            წესები და პირობები / Terms and Conditions
          </div>
          
          <div style={{ fontSize: '11px', lineHeight: '1.6', marginBottom: '15px' }}>
            <div>Geo Docs Service (ი.მ. მანანა შალვაშვილი)</div>
            <div>ს/კ: [შეცვალე პირადი ნომრით]</div>
            <div>მისამართი: [რეგისტრაციის მისამართი]</div>
            <div>ელ-ფოსტა: kaxa.chaduneli@gmail.com</div>
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
            
            {/* ანიმაცია */}
            {loading && (
              <div style={{ alignSelf: 'flex-start', backgroundColor: '#333', padding: '12px 16px', borderRadius: '15px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                <span style={{width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%', animation: 'blink 1.4s infinite both'}}></span>
                <span style={{width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.2s'}}></span>
                <span style={{width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.4s'}}></span>
              </div>
            )}
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
        <Home onClick={() => {setActiveTab('home'); window.scrollTo(0,0);}} style={{ color: activeTab === 'home' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <LayoutGrid 
          onClick={() => {
            setActiveTab('home');
            setTimeout(() => {
              document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} 
          style={{ cursor: 'pointer', color: 'white' }} 
        />
        <FileText onClick={() => {setActiveTab('terms'); window.scrollTo(0,0);}} style={{ color: activeTab === 'terms' ? '#007AFF' : 'white', cursor: 'pointer' }} />
        <Info onClick={() => {setActiveTab('about'); window.scrollTo(0,0);}} style={{ color: activeTab === 'about' ? '#007AFF' : 'white', cursor: 'pointer' }} />
      </nav>
      
    </div>
  );
}
