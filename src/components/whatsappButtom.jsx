import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícono de WhatsApp

const WhatsAppButton = () => {
    const handleClick = () => {
        const phoneNumber = '+58 424-2079712'; // Reemplaza con tu número de WhatsApp
        const message = '¡Hola! quiero atencion personalizada.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
        onClick={handleClick}
        className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 animate-bounce"
        aria-label="Contactar por WhatsApp"
        >
        <FaWhatsapp className="w-8 h-8" />
        </button>
    );
};

export default WhatsAppButton;
