import React, { useState } from 'react';
import { Home, LayoutGrid, Info, User, Instagram, Facebook, Send, Upload, FileText, Download, LogOut } from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', password: '' });
  const [passwordStrength, setPasswordStrength] = useState('');

  // ვალიდაციის შემოწმება: ყველა ველი შევსებულია თუ არა
  const isFormValid = Object.values(formData).every(val => val !== '');

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setFormData({...formData, password: val});
    if (!val) setPasswordStrength('');
    else if (val.length < 6) setPasswordStrength('სუსტი');
    else if (val.length < 10) setPasswordStrength('საშუალო');
    else setPasswordStrength('ძლიერი');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsLoggedIn(true);
      setActiveTab('dashboard');
      alert("რეგისტრაცია წარმატებით დასრულდა!");
    }
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      
      {/* HEADER: ლოგო აბრუნებს მთავარზე */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
            <img src="/logo.png" alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <div style={{ fontWeight: '900', fontStyle: 'italic' }}>GEO DOCS SERVICE</div>
        </div>
      </header>

      <main style={{ padding: '80px 20px 100px 20px' }}>
        
        {/* რეგისტრაციის ფორმა */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <h2>რეგისტრაცია</h2>
            <input placeholder="სახელი" onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <input placeholder="გვარი" onChange={(e) => setFormData({...formData, surname: e.target.value})} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <input type="email" placeholder="ელ-ფოსტა" onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <input placeholder="ტელეფონის ნომერი" onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            <input type="password" placeholder="პაროლი" onChange={handlePasswordChange} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', display: 'block' }} />
            
            <div style={{ fontSize: '12px', color: passwordStrength === 'ძლიერი' ? '#4CAF50' : '#FF5252', marginBottom: '10px' }}>
              {passwordStrength && `პაროლის დონე: ${passwordStrength}`}
            </div>

            <button 
              type="submit" 
              disabled={!isFormValid}
              style={{ 
                width: '100%', padding: '15px', 
                background: isFormValid ? '#FFB800' : '#555', 
                border: 'none', borderRadius: '10px', marginTop: '10px', fontWeight: 'bold', 
                cursor: isFormValid ? 'pointer' : 'not-allowed' 
              }}
            >
              Submit
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
