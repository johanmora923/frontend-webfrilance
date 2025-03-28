import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa las herramientas de enrutamiento
import Home from './components/home.jsx'; // Componente de la página principal
import Contact from './components/contact.jsx'; // Componente de la página de contacto
import Modelos from './components/Models.jsx'; // Componente de la página de modelos
import { useState } from 'react'; // Hook para manejar el estado
import { Navigate } from 'react-router-dom'; // Componente para redirecciones
import { ExternalRedirect } from './components/ExternalRedirect.jsx'; // Componente para redirecciones externas
import WhatsAppButton from './components/whatsappButtom.jsx'; // Botón flotante de WhatsApp

function App() {
  // Estado para manejar si el usuario está logueado o no
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Define las rutas de la aplicación */}
        <Routes>
          {/* Ruta para la página principal */}
          <Route 
            exact 
            path="/" 
            element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />} 
          />
          {/* Ruta para la página de contacto */}
          <Route 
            path="/Contacto" 
            element={<Contact />} 
          />
          {/* Ruta para la página de modelos */}
          <Route 
            path="/Modelos" 
            element={<Modelos />} 
          />
          {/* Ruta para redirigir al portafolio externo */}
          <Route 
            path="/Portafolio" 
            element={<ExternalRedirect to="https://portafolio-six-sage.vercel.app" />} 
          />
        </Routes>
      </div>
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;