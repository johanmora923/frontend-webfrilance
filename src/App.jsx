import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home.jsx';
import Contact from './components/contact.jsx';
import Modelos from './components/Models.jsx';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ExternalRedirect } from './components/ExternalRedirect.jsx';
import  WhatsAppButton  from './components/whatsappButtom.jsx';
import { CookiesPopup } from './components/cookie.jsx';

function App() {
  const [isLogin, setIsLogin] = useState(false)


  return (
    <Router>
      <div className="App">
        <CookiesPopup />
        <Routes>
          <Route exact path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path='/Modelos' element={<Modelos />} />
          <Route path='/Portafolio' element={<ExternalRedirect to="https://portafolio-six-sage.vercel.app" />} />
        </Routes>
      </div>
      <WhatsAppButton />
    </Router>
  );
}

export default App;