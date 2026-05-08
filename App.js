import React, { useState, useEffect } from 'react';
import { 
  Zap, ShieldAlert, Clock, Bell, LayoutGrid, MessageSquare, 
  Instagram, Facebook, Send, Phone, Home, Mail, FileText, 
  Info, ShieldCheck, Globe, X
} from 'lucide-react';

export default function GeoDocsService() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showPrivacy, setShowPrivacy] = useState(false);

  const content = {
    GE: {
      brand: "GEO DOCS SERVICE",
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      deleteBtn: "მყისიერი წაშლა პირადი ინფორმაციის",
      aboutTitle: "რატომ GEO DOCS SERVICE?",
      aboutDesc: "ჩვენი პლატფორმა შეიქმნა იმისათვის, რომ დაგიზოგოთ ყველაზე ძვირფასი — დრო. ჩვენ გეხმარებით შექმნათ პროფესიონალური დოკუმენტები ზედმეტი ძალისხმევის გარეშე.",
      features: [
        { icon: Zap, title: "სისწრაფე", text: "მზა დოკუმენტი სულ რაღაც 2 წუთში" },
        { icon: ShieldCheck, title: "კონფიდენციალურობა", text: "მონაცემები 100%-ით დაცულია და მაშინვე იშლება" },
        { icon: Globe, title: "30+ ენა", text: "გენერაცია მსოფლიოს წამყვან ენებზე" }
      ],
      prices: [
        { title: "სივის ქართულად გენერირება", price: "20₾" },
        { title: "სივის უცხო ენაზე გენერირება", price: "35₾" },
        { title: "სივის გენერირება 5 ენაზე", price: "55₾" },
        { title: "სივის გენერირება ულიმიტოდ", price: "75₾" }
      ],
      privacyTitle: "კონფიდენციალურობის პოლიტიკა",
      privacyText: "Geo Docs Service-ზე შეყვანილი ყველა პერსონალური მონაცემი გამოიყენება მხოლოდ თქვენი დოკუმენტის გენერირებისთვის. პროცესის დასრულებისთანავე თქვენი მონაცემები სრულად და შეუქცევადად იშლება ჩვენი სისტემიდან მაქსიმუმ 2 წუთში.",
      rights: "ყველა უფლება დაცულია"
    },
    EN: {
      brand: "GEO DOCS SERVICE",
      slogan: "Don't get distracted from your work",
      alert: "Information is deleted automatically in 2 min!",
      cvBtn: "AI CV in 2 min",
      invoiceBtn: "Invoice (Soon)",
      deleteBtn: "Instant deletion of personal info",
      aboutTitle: "Why GEO DOCS SERVICE?",
      aboutDesc: "Our platform saves you your most valuable asset — time. We help you generate professional documents effortlessly.",
      features: [
        { icon: Zap, title: "Speed", text: "Ready in just 2 minutes" },
        { icon: ShieldCheck, title: "Privacy", text: "100% secure and instantly deleted" },
        { icon: Globe, title: "30+ Languages", text: "Global language support" }
      ],
      prices: [
        { title: "Georgian CV Generation", price: "20₾" },
        { title: "Foreign Language CV", price: "35₾" },
        { title: "CV in 5 Languages", price: "55₾" },
        { title: "Unlimited Generation", price: "75₾" }
      ],
      privacyTitle: "Privacy Policy",
      privacyText: "All personal data entered on Geo Docs Service is used exclusively for generating your document and is irreversibly deleted within 2 minutes.",
      rights: "All rights reserved"
    },
    RU: {
      brand: "GEO DOCS SERVICE",
      slogan: "Не отвлекайтесь от своих дел",
      alert: "Информация удаляется через 2 минуты!",
      cvBtn: "AI CV за 2 мин",
      invoiceBtn: "Инвойс (Скоро)",
      deleteBtn: "Мгновенное удаление данных",
      aboutTitle: "Почему GEO DOCS SERVICE?",
      aboutDesc: "Наша платформа экономит ваше время, помогая создавать профессиональные документы без лишних усилий.",
      features: [
        { icon: Zap, title: "Скорость", text: "Готово за 2 минуты" },
        { icon: ShieldCheck, title: "Приватность", text: "Данные защищены на 100%" },
        { icon: Globe, title: "30+ Языков", text: "Поддержка мировых языков" }
      ],
      prices: [
        { title: "CV на грузинском", price: "20₾" },
        { title: "CV на ин. языках", price: "35₾" },
        { title: "CV на 5 языках", price: "55₾" },
        { title: "Безлимит", price: "75₾" }
      ],
      privacyTitle: "Политика конфиденциальности",
      privacyText: "Все персональные данные используются только для создания вашего документа и полностью удаляются из системы в течение 2 минут.",
      rights: "Все права защищены"
    }
  };

  const cur = content[lang];

  return (
    <div className="min-h-screen bg-[#6D757D] font-sans text-white pb-32">
      {/* Navbar */}
      <nav className="bg-[#1A1A1A] p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-black text-[10px]">LOGO</div>
          <span className="font-black text-xl italic uppercase tracking-tighter">{cur.brand}</span>
        </div>
        <div className="flex gap-1 bg-black p-1 rounded-xl border border-white/10">
          {['GE', 'EN', 'RU'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-3 py-1.5 rounded-lg text-[10px] font
