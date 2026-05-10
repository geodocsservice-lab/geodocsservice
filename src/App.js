import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, Home, LayoutGrid, Info, Bell, FileText,
  Instagram, Facebook, Send, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const pricingRef = useRef(null);

  // ნავიგაციის გამოჩენა/დამალვის ლოგიკა სქროლვისას
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { 
        setShowNav(false); // მაღლა აწევისას ქრება
      } else { 
        setShowNav(true);  // დაბლა ჩამოსვლისას ჩნდება
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVAyKyk8Wbe1H4y_UutBsRwrDpbsUNpWI7Z3ZeTV4rrP4SQg/viewform?usp=header";
  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg"; 

  const translations = {
    GE: {
      slogan: "ნუ მოწყდები შენს საქმეს",
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
      rights: "© 2026 GEO DOCS SERVICE. ყველა უფლება დაცულია."
    },
    EN: {
      slogan: "Stay Focused on Your Business",
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
      aboutContent: "Geo Docs Service is the first fully automated Georgian platform. Our goal is to simplify the document preparation process using artificial intelligence, allowing you to save time and get professional results in seconds.",
      privacyTitle: "Privacy Policy",
      privacyContent: "Your anonymity is our priority. Information entered into the system is used only for document generation and is completely deleted from the database exactly 2 minutes after generation. We do not store your personal data long-term.",
      rights: "© 2026 GEO DOCS SERVICE. All rights reserved."
    },
    RU: {
      slogan: "Не отвлекайтесь от дел",
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
      aboutContent: "Geo Docs Service — первая полностью автоматизированная грузинская платформа. Наша цель — максимально упростить процесс подготовки документов с помощью искусственного интеллекта, позволяя вам экономить время и получать профессиональные результаты за считанные секунды.",
      privacyTitle: "Конфиденциальность",
      privacyContent: "Ваша анонимность — наш приоритет. Информация, вводимая в систему, используется только для создания документа и полностью удаляется из базы данных ровно через 2 минуты после генерации. Мы не храним ваши персональные данные в долгосрочной перспект
