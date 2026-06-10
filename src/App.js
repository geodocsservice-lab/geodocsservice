import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'; // აუცილებელია მეილისთვის
import { 
  Home, LayoutGrid, Info, User, Instagram, Facebook, Send, 
  Upload, History, FileText, Download, LogOut
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '' });

  const logoUrl = "/Screenshot_20260326_020239_Facebook.jpg";
  const robotUrl = "/robot.png";

  // რეგისტრაციის ვალიდაცია და მეილის გაგზავნა
  const handleRegister = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(val => val !== '')) {
      setIsLoggedIn(true);
      setActiveTab('dashboard');
      
      // EmailJS ინტეგრაცია (ჩასვით თქვენი ID-ები)
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_email: formData.email,
        user_name: formData.name
      }, 'YOUR_PUBLIC_KEY');
    } else {
      alert("გთხოვთ შეავსოთ ყველა ველი!");
    }
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      
      {/* HEADER: ლოგო აბრუნებს მთავარ გვერდზე */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
            <img src={logoUrl} alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        </div>
        {/* ენების გადამრთველი... */}
      </header>

      <main style={{ padding: '80px 20px 100px 20px' }}>
        
        {/* რეგისტრაციის ფორმა ვალიდაციით */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px' }}>
            <h2>რეგისტრაცია</h2>
            {['name', 'surname', 'email', 'phone'].map(field => (
              <input 
                key={field} 
                placeholder={field} 
                onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none' }} 
              />
            ))}
            <button type="submit" style={{ width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '10px', marginTop: '10px', fontWeight: 'bold' }}>Submit</button>
          </form>
        )}

        {/* დანარჩენი სექციები (Dashboard, Home, About)... */}
      </main>

      {/* ქვედა მენიუ... */}
    </div>
  );
}
