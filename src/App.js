import React, { useState } from 'react';
import { 
  Zap, ShieldCheck, Globe, X, Home, Info, FileText, LayoutGrid 
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');

  const content = {
    GE: {
      brand: "GEO DOCS SERVICE",
      slogan: "ნუ მოწყდები შენს საქმეს",
      alert: "ინფორმაცია იშლება ავტომატურად 2 წუთში!",
      cvBtn: "AI CV 2 წუთში",
      aboutTitle: "რატომ GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "სისწრაფე", text: "მზა დოკუმენტი სულ რაღაც 2 წუთში" },
        { icon: ShieldCheck, title: "კონფიდენციალურობა", text: "მონაცემები 100%-ით დაცულია" },
        { icon: Globe, title: "30+ ენა", text: "გენერაცია მსოფლიოს წამყვან ენებზე" }
      ]
    },
    EN: {
      brand: "GEO DOCS SERVICE",
      slogan: "Don't get distracted from your work",
      alert: "Information is deleted automatically in 2 min!",
      cvBtn: "AI CV in 2 min",
      aboutTitle: "Why GEO DOCS SERVICE?",
      features: [
        { icon: Zap, title: "Speed", text: "Ready in just 2 minutes" },
        { icon: ShieldCheck, title: "Privacy", text: "100% secure" },
        { icon: Globe, title: "30+ Languages", text: "Global language support" }
      ]
    }
  };

  const cur = content[lang] || content.GE;

  return (
    <div className="min-h-screen bg-[#6D757D] font-sans text-white pb-32">
      {/* Navbar */}
      <nav className="bg-[#1A1A1A] p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-black text-[10px]">LOGO</div>
          <span className="font-black text-xl italic uppercase tracking-tighter">{cur.brand}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setLang('GE')} className="px-2 py-1 bg-black rounded border border-white/20 text-[10px]">GE</button>
          <button onClick={() => setLang('EN')} className="px-2 py-1 bg-black rounded border border-white/20 text-[10px]">EN</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="p-6 max-w-lg mx-auto text-center mt-10">
        <h2 className="text-3xl font-black mb-2 italic tracking-tighter uppercase leading-none">{cur.slogan}</h2>
        <div className="bg-red-500/20 border border-red-500 text-red-200 p-2 rounded-lg text-xs mb-8">
          ⚠️ {cur.alert}
        </div>

        <button className="w-full bg-white text-black font-black py-4 rounded-2xl text-xl shadow-xl active:scale-95 transition-transform mb-4">
          {cur.cvBtn}
        </button>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 mt-12">
          {cur.features.map((f, i) => (
            <div key={i} className="bg-black/20 p-4 rounded-xl border border-white/10 flex items-center gap-4 text-left">
              <f.icon className="w-8 h-8 text-white" />
              <div>
                <h4 className="font-bold">{f.title}</h4>
                <p className="text-xs opacity-70">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
