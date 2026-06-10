import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Home, LayoutGrid, Info, User, Instagram, Facebook, Send, 
  Upload, FileText, Download, LogOut 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', password: '' });
  const [passwordStrength, setPasswordStrength] = useState('');

  const logoUrl = "/logo.png"; 
  const robotUrl = "/robot.png";

  // პაროლის სიძლიერის ლოგიკა
  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setFormData({...formData, password: val});
    if (!val) setPasswordStrength('');
    else if (val.length < 6) setPasswordStrength('სუსტი');
    else if (val.length < 10) setPasswordStrength('საშუალო');
    else setPasswordStrength('ძლიერი');
  };

  // რეგისტრაციის ვალიდაცია და იმეილის გაგზავნა
  const handleRegister = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(val => val !== '')) {
      // აქ შეგიძლიათ გამოიძახოთ emailjs.send(...)
      alert("რეგისტრაცია წარმატებით დასრულდა! იმეილი გაიგზავნა.");
      setIsLoggedIn(true);
      setActiveTab('dashboard');
    } else {
      alert("გთხოვთ შეავსოთ ყველა ველი!");
    }
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
            <img src={logoUrl} alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        </div>
        <div style={{ backgroundColor: '#000', borderRadius: '8px', padding: '2px' }}>
          {['GE', 'EN', 'RU'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ backgroundColor: lang === l ? '#007AFF' : 'transparent', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px' }}>
        
        {/* რეგისტრაციის გვერდი */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2>რეგისტრაცია</h2>
            <input placeholder="სახელი" onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <input placeholder="გვარი" onChange={(e) => setFormData({...formData, surname: e.target.value})} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <input type="email" placeholder="ელ-ფოსტა" onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <input placeholder="ტელეფონის ნომერი" onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <input type="password" placeholder="პაროლი" onChange={handlePasswordChange} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <div style={{ fontSize: '12px', color: passwordStrength === 'ძლიერი' ? '#4CAF50' : '#FF5252' }}>{passwordStrength}</div>
            <button type="submit" style={{ width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '10px', marginTop: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Submit</button>
          </form>
        )}

        {/* დანარჩენი სექციები (Home, Dashboard, About)... */}
      </main>

      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', bottom: '15px', left: '5%', width: '90%', backgroundColor: '#1A1A1A', 
        padding: '15px', borderRadius: '40px', display: 'flex', justifyContent: 'space-around', 
        zIndex: 1000, transition: 'transform 0.3s',
        transform: showNav ? 'translateY(0)' : 'translateY(100px)'
      }}>
        <Home onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <LayoutGrid onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ cursor: 'pointer' }} />
        <User onClick={() => isLoggedIn ? setActiveTab('dashboard') : setActiveTab('profile')} style={{ cursor: 'pointer' }} />
      </nav>
    </div>
  );
}
