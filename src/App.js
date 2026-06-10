import React, { useState, useEffect } from 'react';
import { 
  Home, LayoutGrid, Info, User, Instagram, Facebook, Send, 
  Upload, FileText, Download, LogOut 
} from 'lucide-react';

export default function GeoDocsApp() {
  const [lang, setLang] = useState('GE');
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', password: '' });
  const [passwordLevel, setPasswordLevel] = useState(''); // სუსტი, საშუალო, ძლიერი

  // პაროლის სიძლიერის შემოწმება
  const checkPasswordStrength = (pwd) => {
    if (!pwd) return '';
    if (pwd.length < 6) return 'სუსტი';
    if (pwd.length < 10) return 'საშუალო';
    return 'ძლიერი';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'password') setPasswordLevel(checkPasswordStrength(value));
  };

  const isFormValid = Object.values(formData).every(val => val.trim() !== '');

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
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#1A1A1A', padding: '15px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between' }}>
        <div onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>GEO DOCS SERVICE</div>
      </header>

      <main style={{ padding: '80px 20px' }}>
        
        {/* რეგისტრაციის გვერდი */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={{ background: '#1A1A1A', padding: '20px', borderRadius: '20px' }}>
            <h2>რეგისტრაცია</h2>
            <input name="name" placeholder="სახელი" onChange={handleInputChange} style={inputStyle} />
            <input name="surname" placeholder="გვარი" onChange={handleInputChange} style={inputStyle} />
            <input name="email" type="email" placeholder="ელ-ფოსტა" onChange={handleInputChange} style={inputStyle} />
            <input name="phone" placeholder="ტელეფონი" onChange={handleInputChange} style={inputStyle} />
            <input name="password" type="password" placeholder="პაროლი" onChange={handleInputChange} style={inputStyle} />
            
            {/* პაროლის დონის ჩვენება */}
            <div style={{ margin: '10px 0', fontSize: '14px', color: passwordLevel === 'ძლიერი' ? '#4CAF50' : '#FF9800' }}>
              პაროლის დონე: {passwordLevel}
            </div>

            <button 
              type="submit" 
              disabled={!isFormValid} 
              style={{ ...buttonStyle, background: isFormValid ? '#FFB800' : '#555' }}
            >
              Submit
            </button>
          </form>
        )}

        {/* დაცული პირადი კაბინეტი */}
        {activeTab === 'dashboard' && (
          isLoggedIn ? (
            <div>
              <h2>პირადი კაბინეტი</h2>
              <button onClick={() => {setIsLoggedIn(false); setActiveTab('home');}} style={buttonStyle}><LogOut /> გასვლა</button>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <p>თქვენ არ ხართ ავტორიზებული!</p>
              <button onClick={() => setActiveTab('register')} style={buttonStyle}>გადადით რეგისტრაციაზე</button>
            </div>
          )
        )}
      </main>
    </div>
  );
}

// სტილები მარტივად
const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', borderRadius: '10px', border: 'none', boxSizing: 'border-box' };
const buttonStyle = { width: '100%', padding: '15px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold' };
