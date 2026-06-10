import React, { useState } from 'react';
import { Home, LayoutGrid, Info, User, LogOut, Upload, FileText, Download } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.name && formData.surname && formData.email && formData.phone && formData.password;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsLoggedIn(true);
      setActiveTab('dashboard');
    } else {
      alert("გთხოვთ, შეავსოთ ყველა ველი!");
    }
  };

  return (
    <div style={{ backgroundColor: '#6D757D', minHeight: '100vh', color: 'white', paddingBottom: '80px' }}>
      <header style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1A1A1A' }}>
        <h1>GEO DOCS SERVICE</h1>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h2>მოგესალმებით</h2>
            <button onClick={() => setActiveTab('register')} style={{ padding: '15px 30px', backgroundColor: '#FFB800', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>რეგისტრაცია</button>
          </div>
        )}

        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={{ backgroundColor: '#1A1A1A', padding: '20px', borderRadius: '20px' }}>
            <h3>რეგისტრაცია</h3>
            <input name="name" placeholder="სახელი" onChange={handleInputChange} style={inputStyle} />
            <input name="surname" placeholder="გვარი" onChange={handleInputChange} style={inputStyle} />
            <input name="email" type="email" placeholder="ელ-ფოსტა" onChange={handleInputChange} style={inputStyle} />
            <input name="phone" placeholder="ტელეფონი" onChange={handleInputChange} style={inputStyle} />
            <input name="password" type="password" placeholder="პაროლი" onChange={handleInputChange} style={inputStyle} />
            <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: isFormValid ? '#FFB800' : '#444', border: 'none', borderRadius: '10px', marginTop: '10px' }}>Submit</button>
          </form>
        )}

        {activeTab === 'dashboard' && (
          isLoggedIn ? (
            <div>
              <h2>პირადი კაბინეტი</h2>
              <button onClick={() => {setIsLoggedIn(false); setActiveTab('home');}}><LogOut /> გასვლა</button>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <p>გთხოვთ, გაიაროთ რეგისტრაცია.</p>
              <button onClick={() => setActiveTab('register')}>რეგისტრაციაზე გადასვლა</button>
            </div>
          )
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#1A1A1A', display: 'flex', justifyContent: 'space-around', padding: '15px' }}>
        <Home onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }} />
        <Info onClick={() => setActiveTab('about')} style={{ cursor: 'pointer' }} />
        <User onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }} />
      </nav>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', boxSizing: 'border-box', borderRadius: '5px', border: 'none' };
