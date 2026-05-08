import React, { useState } from 'react';
import { 
  Zap, ShieldAlert, Clock, LayoutGrid, FileText, 
  ShieldCheck, Globe, ChevronRight
} from 'lucide-react';

export default function GeoDocsService() {
  const [lang, setLang] = useState('GE');

  const content = {
    GE: {
      brand: "GEO DOCS SERVICE",
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      invoiceBtn: "ინვოისი (მალე)",
      aboutTitle: "რატომ GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "სისწრაფე", text: "მზა დოკუმენტი სულ რაღაც 2 წუთში" },
        { icon: ShieldCheck, title: "კონფიდენციალურობა", text: "მონაცემები 100%-ით დაცულია და მაშინვე იშლება" },
        { icon: Globe, title: "30+ ენა", text: "გენერაცია მსოფლიოს წამყვან ენებზე" }
      ],
      rights: "ყველა უფლება დაცულია"
    },
    EN: {
      brand: "GEO DOCS SERVICE",
      slogan: "Don't get distracted from your work",
      alert: "Information is deleted automatically in 2 min!",
      cvBtn: "AI CV in 2 min",
      invoiceBtn: "Invoice (Soon)",
      aboutTitle: "Why GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "Speed", text: "Ready in just 2 minutes" },
        { icon: ShieldCheck, title: "Privacy", text: "100% secure and instantly deleted" },
        { icon: Globe, title: "30+ Languages", text: "Global language support" }
      ],
      rights: "All rights reserved"
    },
    RU: {
      brand: "GEO DOCS SERVICE",
      slogan: "Не отвлекайтесь от своих дел",
      alert: "Информация удаляется через 2 минуты!",
      cvBtn: "AI CV за 2 мин",
      invoiceBtn: "Инвойс (Скоро)",
      aboutTitle: "Почему GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "Скорость", text: "Готово за 2 минуты" },
        { icon: ShieldCheck, title: "Приватность", text: "Данные защищены на 100%" },
        { icon: Globe, title: "30+ Языков", text: "Поддержка мировых языков" }
      ],
      rights: "Все права защищены"
    }
  };

  const cur = content[lang];

  return (
    <div className="min-h-screen bg-[#6D757D] font-sans text-white pb-10">
      {/* Navbar */}
      <nav className="bg-[#1A1A1A] p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-black text-[10px]">LOGO</div>
          <span className="font-black text-xl italic uppercase tracking-tighter">{cur.brand}</span>
        </div>
        <div className="flex gap-2 bg-black/40 p-1 rounded-lg border border-white/10">
          {['GE', 'EN', 'RU'].map((l) => (
            <button 
              key={l} 
              onClick={() => setLang(l)} 
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${lang === l ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="p-6 max-w-4xl mx-auto text-center">
        <div className="mt-12 mb-4 inline-block bg-white/10 px-4 py-1 rounded-full text-xs tracking-widest uppercase font-medium border border-white/10">
          Digital Automation
        </div>
        <h1 className="text-5xl font-black mb-4 tracking-tighter italic">{cur.brand}</h1>
        <p className="text-xl opacity-80 mb-10 font-light">{cur.slogan}</p>
        
        {/* Deletion Alert */}
        <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-2xl mb-10 flex items-center justify-center gap-3 backdrop-blur-sm">
          <ShieldAlert className="text-red-500 animate-pulse" size={20} />
          <span className="text-sm font-bold text-red-200">{cur.alert}</span>
        </div>

        {/* Action Buttons */}
        <div className="grid gap-4 mb-16">
          <button className="group bg-white text-black py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all transform hover:scale-[1.02] shadow-xl">
            <FileText size={24} /> {cur.cvBtn}
            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
          </button>
          <button className="bg-black/20 border border-white/10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 opacity-50 cursor-not-allowed">
            <Clock size={24} /> {cur.invoiceBtn}
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cur.features.map((f, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md hover:border-white/30 transition-all">
              <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <f.icon className="text-white" size={28} />
              </div>
              <h3 className="font-black text-lg mb-3 italic">{f.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-10 opacity-40 border-t border-white/5 mx-6">
        <p className="text-xs tracking-widest uppercase font-bold">
          © 2026 {cur.brand} • {cur.rights}
        </p>
      </footer>
    </div>
  );
}
