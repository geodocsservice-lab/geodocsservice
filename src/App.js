import React, { useState } from 'react';
import { Home, User, Upload, LogOut, FileText, Download, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', password: '' });
  
  // ისტორიის მონაცემები
  const history = [
    { id: 1, name: "CV_Geo_2026.pdf", date: "2026-06-10" },
    { id: 2, name: "Invoice_Final.pdf", date: "2026-06-09" }
  ];

  const handleInputChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  
  const handleRegister = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(x => x.trim() !== '')) {
      setIsLoggedIn(true);
      setActiveTab('dashboard');
    } else { alert("გთხოვთ შეავსოთ ყველა ველი!"); }
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', fontFamily: 'Arial' }}>
      <header style={{ padding: '20px', background: '#1A1A1A', textAlign: 'center' }}>
        <h1>GEO DOCS SERVICE</h1>
      </header>

      <main style={{ padding: '20px', paddingBottom: '100px' }}>
        
        {/* მთავარი გვერდი */}
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h2>მოგესალმებით</h2>
            <button onClick={() => setActiveTab('register')} style={btnStyle}>რეგისტრაცია</button>
          </div>
        )}

        {/* რეგისტრაციის ფორმა */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={{ background: '#1A1A1A', padding: '20px', borderRadius: '15px' }}>
            {['name', 'surname', 'email', 'phone', 'password'].map(f => (
              <input key={f} name={f} placeholder={f} onChange={handleInputChange} style={inputStyle} type={f === 'password' ? 'password' : 'text'} />
            ))}
            <button type="submit" style={btnStyle}>დარეგისტრირება</button>
          </form>
        )}

        {/* დაცული პირადი კაბინეტი */}
        {activeTab === 'dashboard' && (
          isLoggedIn ? (
            <div>
              <h2>პირადი კაბინეტი</h2>
              <div style={{ background: '#2A2A2A', padding: '20px', borderRadius: '15px', marginBottom: '20px', textAlign: 'center', border: '2px dashed #FFB800' }}>
                <Upload size={40} />
                <p>დოკუმენტების ატვირთვა</p>
              </div>
              
              <h3>ისტორია</h3>
              {history.map(h => (
                <div key={h.id} style={{ background: '#1A1A1A', padding: '15px', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  <span><FileText size={16} /> {h.name}</span>
                  <Download size={16} style={{ cursor: 'pointer' }} />
                </div>
              ))}
              
              <button onClick={() => {setIsLoggedIn(false); setActiveTab('home');}} style={{ marginTop: '20px', background: '#ff4444', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}><LogOut /> გასვლა</button>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <p>თქვენ არ ხართ ავტორიზებული!</p>
              <button onClick={() => setActiveTab('register')} style={btnStyle}>რეგისტრაციაზე გადასვლა</button>
            </div>
          )
        )}
      </main>

      {/* ნავიგაცია */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#1A1A1A', display: 'flex', justifyContent: 'space-around', padding: '15px' }}>
        <Home onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <User onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }} />
      </nav>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', boxSizing: 'border-box', borderRadius: '5px', border: 'none' };
const btnStyle = { width: '100%', padding: '15px', background: '#FFB800', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' };
