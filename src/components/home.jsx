import React, { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";
import OfferCard from "./offerCard.jsx";
import ParticleCanvas from "./bg.jsx";
import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import { FaPhoneAlt, FaFileInvoice, FaRocket } from 'react-icons/fa';
import FeedbackComponent from "./commits.jsx";
import AuthComponent from "./authComponent.jsx";
import { Profile } from "./profile.jsx";
import CommentsList from "./CommentsList.jsx";
import { FcCopyright } from "react-icons/fc";
import { FaLaptop, FaBlog, FaRedoAlt, FaBrush, FaLink, FaDatabase, FaShieldAlt } from "react-icons/fa";
import CookiesPopup from "./cookie.jsx";

// Componente principal de la página de inicio
export const Home = ({ isLogin, setIsLogin }) => {
    // Estado para manejar el menú hamburguesa en dispositivos móviles
    const [menuOpen, setMenuOpen] = useState(false);
    // Estado para mostrar u ocultar el perfil del usuario
    const [viewProfile, setViewProfile] = useState(false);
    // Estado para mostrar mensajes al usuario
    const [Message, setMessage] = useState('');

    // Función para redirigir al formulario de contacto
    const ToContact = () => {
        window.location.href = "/contacto";
    };

    // Función para alternar la visibilidad del perfil del usuario
    const ViewProfile = () => {
        viewProfile ? setViewProfile(false) : setViewProfile(true);
    };

    // Función para cerrar sesión
    const handleLogout = async () => {
        try {
            const res = await fetch("http://localhost:3000/logout", {
                method: "POST",
                credentials: "include", // Incluye las cookies en la solicitud
            });

            if (res.ok) {
                setIsLogin(false); // Actualiza el estado de inicio de sesión
                setMessage("Sesión cerrada."); // Muestra un mensaje de éxito
                setViewProfile(false); // Oculta el perfil del usuario
            } else {
                setMessage("Error al cerrar sesión."); // Muestra un mensaje de error
            }
        } catch {
            setMessage("Error de red, intenta nuevamente."); // Muestra un mensaje de error de red
        }
    };

    // Obtiene el nombre del usuario almacenado en el localStorage
    const userName = window.localStorage.getItem('user');

    return (
        <div>
            {/* Componente para mostrar el aviso de cookies */}
            <CookiesPopup />
            <div className="relative bg-cover bg-center h-screen">
                {/* Fondo animado con partículas */}
                <ParticleCanvas />
                <header className="absolute top-0 left-0 w-full flex justify-between items-center text-white py-4 px-2 md:px-8 backdrop-blur-md">
                    {/* Título del sitio */}
                    <h2 className="text-3xl font-black text-green-400">{'Webfrilance'}</h2>
                    {/* Menú de navegación para dispositivos grandes */}
                    <nav className="hidden md:flex gap-4">
                        {["Servicios", "Portafolio", "Contacto", "Modelos"].map((link, index) => (
                            <a
                                key={index}
                                href={link === 'Servicios' ? '#offers' : link}
                                className="text-lg hover:text-green-400"
                            >
                                {link}
                            </a>
                        ))}
                        {/* Botón para mostrar el perfil del usuario si está logueado */}
                        <div className={`${isLogin ? 'flex ' : 'hidden'} items-center hover:bg-[#48e5] h-5 p-5 rounded-[10px]`} onClick={ViewProfile}>
                            <img className="w-[34px] h-[34] rounded-full" src="default.avif" alt="user profile" />
                            <h3 className="text-[#fcfcfc] ml-1">{userName}</h3>
                        </div>
                    </nav>
                    {/* Menú hamburguesa para dispositivos móviles */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-2xl focus:outline-none hover:text-green-400 transition-colors"
                        >
                            ☰
                        </button>
                    </div>
                    {/* Menú desplegable para móviles */}
                    {menuOpen && (
                        <div className="absolute top-16 left-0 bg-transparent w-full p-6 rounded-md text-center md:hidden">
                            {["Servicios", "Sobre mí", "Portafolio", "Contacto", "Modelos"].map((link, index) => (
                                <a
                                    key={index}
                                    href={link === 'Servicios' ? '#offers' : link}
                                    className="block text-lg text-white p-3 my-2 bg-gray-900 rounded-lg shadow-sm hover:bg-green-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    )}
                </header>

                {/* Sección principal con el mensaje de bienvenida */}
                <section className="flex flex-col justify-center items-center h-full text-white px-8">
                    {/* Muestra el perfil del usuario si está visible */}
                    {viewProfile &&
                        <Profile handleLogout={handleLogout} />
                    }
                    <h1 className="text-4xl md:text-6xl font-extrabold text-center">
                        ¿AÚN SIN WEB?
                    </h1>
                    <p className="text-2xl text-center mt-6">
                        Servicios web a medida: diseño, desarrollo, mantenimiento y optimización <br />para todo tipo de proyectos.
                    </p>
                    {/* Botón para redirigir al formulario de contacto */}
                    <button onClick={ToContact}
                        className="mt-8 px-6 py-3 bg-green-500 rounded-lg text-xl font-semibold shadow-lg hover:bg-green-400 transition-all">
                        ¡QUIERO UNA WEB!
                    </button>
                </section>
            </div>

            {/* Sección de introducción */}
            <section className="py-16 bg-gray-100">
                <header>
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        ¡HOY EN DÍA TU NEGOCIO NO PUEDE PERMITIRSE NO TENER UNA PÁGINA WEB!
                    </h2>
                </header>
                <div className="max-w-3xl mx-auto text-center text-gray-700">
                    <p className="text-lg mb-6">
                        Ya es hora de tener una web de la que te sientas orgulloso.
                    </p>
                    <p className="text-lg">
                        Acorde a ti y a las necesidades de tus clientes y tu negocio.
                    </p>
                    <button
                        className="mt-8 px-6 py-3 bg-green-500 rounded-lg text-lg font-semibold shadow hover:bg-green-400 transition-all">
                        <a href="#offers">Servicios</a>
                    </button>
                </div>
            </section>

            {/* Sección de servicios */}
            <section className="py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                    {/* Tarjetas de servicios */}
                    <ServiceCard
                        icon={<FaLaptop className="text-blue-500 text-4xl mx-auto mb-4" />}
                        title="Página web - Tienda online"
                        description="Crea una web o tienda online moderna y funcional que impulse tu negocio."
                        price="$500 - $1200"
                    />
                    <ServiceCard
                        icon={<FaBlog className="text-green-500 text-4xl mx-auto mb-4" />}
                        title="Blog"
                        description="Un blog elegante y gestionable para reforzar tu marca personal."
                        price="$300 - $800"
                    />
                    <ServiceCard
                        icon={<FaRedoAlt className="text-yellow-500 text-4xl mx-auto mb-4" />}
                        title="Rediseño web"
                        description="Renueva tu web con un diseño fresco y profesional."
                        price="$400 - $1000"
                    />
                    <ServiceCard
                        icon={<FaBrush className="text-red-500 text-4xl mx-auto mb-4" />}
                        title="Crea tu marca"
                        description="Diseña una web completamente personalizada desde cero."
                        price="$600 - $1500"
                    />
                    <ServiceCard
                        icon={<FaLink className="text-purple-500 text-4xl mx-auto mb-4" />}
                        title="Integración de APIs"
                        description="Conecta tu web con herramientas externas y automatiza procesos."
                        price="$500 - $1200"
                    />
                    <ServiceCard
                        icon={<FaRocket className="text-teal-500 text-4xl mx-auto mb-4" />}
                        title="Optimización de rendimiento"
                        description="Haz tu sitio más rápido y eficiente, listo para cualquier desafío."
                        price="$400 - $900"
                    />
                    <ServiceCard
                        icon={<FaDatabase className="text-indigo-500 text-4xl mx-auto mb-4" />}
                        title="Desarrollo backend"
                        description="Crea sistemas robustos para manejar bases de datos y autenticación."
                        price="$700 - $1800"
                    />
                    <ServiceCard
                        icon={<FaShieldAlt className="text-pink-500 text-4xl mx-auto mb-4" />}
                        title="Seguridad y encriptación"
                        description="Protege tu web con tecnologías avanzadas y encriptación segura."
                        price="$500 - $1200"
                    />
                </div>
            </section>

            {/* Sección de ofertas */}
            <section className="py-16 bg-gray-100" id="offers">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Dime lo que puedo hacer por ti
                </h2>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                    {/* Tarjetas de ofertas */}
                    <OfferCard
                        Icon={<CgWebsite className="text-blue-500 text-[3em] lg:text-[5em] md:text-[4em] m-auto hover:scale-110 transition-transform" />}
                        title="Web sencilla"
                        startingPrice="Desde $40"
                        maintenanceFee="Mantenimiento $15"
                        description="Elige la plantilla que más te guste, pásame las fotos y los textos que quieras incluir en tu web y en 10 días la tendrás online."
                        buttonText="¡QUIERO UNA!"
                        buttonId="web__sencilla"
                    />
                    <OfferCard
                        Icon={<FaLaptopCode className="text-green-500 text-[3em] lg:text-[5em] md:text-[4em] m-auto hover:scale-110 transition-transform" />}
                        title="App web"
                        startingPrice="Desde $120"
                        maintenanceFee="Mantenimiento $25"
                        description="Diseño de una página web con HTML, CSS y JavaScript totalmente personalizada, adaptada a ti y a tu negocio. Plazo de entrega de 15 días."
                        buttonText="QUIERO UNA!"
                        buttonId="pagina"
                        buttonData="aplicacion web"
                    />
                    <OfferCard
                        Icon={<AiTwotoneShop className="text-orange-500 text-[3em] lg:text-[5em] md:text-[4em] m-auto hover:scale-110 transition-transform" />}
                        title="E-commerce o sistema de gestión"
                        startingPrice="Desde $250"
                        maintenanceFee="Mantenimiento $50"
                        description="Fiel a tu marca y funcionando en piloto automático, ¡lista para empezar a vender! El plazo de entrega dependerá de la complejidad del proyecto, el precio también podría variar."
                        buttonText="¡QUIERO UNA!"
                        buttonId="tienda"
                        buttonData="tienda"
                    />
                    <OfferCard
                        Icon={<FaLink className="text-purple-500 text-[3em] lg:text-[5em] md:text-[4em] m-auto hover:scale-110 transition-transform" />}
                        title="Integración de APIs y Automatización"
                        startingPrice="Desde $100"
                        maintenanceFee="Variable"
                        description="Conecta tu web con servicios externos, como pasarelas de pago o chatbots, y automatiza procesos para optimizar tu negocio."
                        buttonText="¡LO NECESITO!"
                        buttonId="integracion_apis"
                    />
                    <OfferCard
                        Icon={<FaRocket className="text-teal-500 text-[3em] lg:text-[5em] md:text-[4em] m-auto hover:scale-110 transition-transform" />}
                        title="Optimización de rendimiento"
                        startingPrice="Desde $80"
                        maintenanceFee="Variable"
                        description="Mejora la velocidad y eficiencia de tu sitio web para garantizar una experiencia de usuario fluida y rápida, incluso con alto tráfico."
                        buttonText="OPTIMIZAR!"
                        buttonId="optimizacion_rendimiento"
                    />
                    <OfferCard
                        Icon={<FaDatabase className="text-indigo-500 text-[3em] lg:text-[5em] md:text-[4em] m-auto hover:scale-110 transition-transform" />}
                        title="Desarrollo backend"
                        startingPrice="Desde $200"
                        maintenanceFee="Variable"
                        description="Construcción de sistemas robustos para manejar datos, autenticación de usuarios y otras funciones personalizadas."
                        buttonText="¡QUIERO UN BACKEND!"
                        buttonId="desarrollo_backend"
                    />
                    <OfferCard
                        Icon={<FaShieldAlt className="text-pink-500 text-[3em] lg:text-[5em] md:text-[4em] m-auto hover:scale-110 transition-transform" />}
                        title="Seguridad y encriptación"
                        startingPrice="Desde $120"
                        maintenanceFee="Variable"
                        description="Protege tu web con tecnologías avanzadas de encriptación y medidas de seguridad para tus datos y usuarios."
                        buttonText="PROTEGE MI WEB!"
                        buttonId="seguridad_encriptacion"
                    />
                </div>
            </section>

            {/* Sección de comentarios */}
            <div>
                <CommentsList />
            </div>

            {/* Sección de feedback */}
            <div>
                <FeedbackComponent />
            </div>

            {/* Componente de autenticación */}
            <div>
                <AuthComponent isLogin={isLogin} setIsLogin={setIsLogin} />
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About</h3>
                        <p className="text-sm">
                            En Webfrilance, transformamos ideas en experiencias digitales. Nos especializamos en diseño web creativo, desarrollo a medida, SEO y soporte continuo.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <p className="text-sm">Webfrilance@gmail.com</p>
                        <p className="text-sm">+58 424-207-9712</p>
                    </div>
                    <div>
                        <a href="terminos.html" className="text-sm hover:text-green-400 transition-all">
                            Términos y condiciones
                        </a>
                        <p className="text-sm mt-4 flex items-center">
                            <FcCopyright className="text-[3em] mr-2" />
                            Copyright(2024.JohanMora.Todos los derechos reservados.)
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;