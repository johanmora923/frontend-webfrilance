import React, { useState, useEffect } from "react";

const CookieNotice = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const acceptedCookies = localStorage.getItem("acceptedCookies");
        if (!acceptedCookies) {
        setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("acceptedCookies", true);
        setIsVisible(false);
    };

    const rejectCookies = () => {
        alert("Debe aceptar las cookies para continuar navegando.");
        // Redirigir a una página externa si se rechaza.
        window.location.href = "https://google.com"; // Personaliza este enlace o la acción.
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black/80  flex justify-center items-center z-50"
            >
            <div className="bg-white text-black p-6 rounded shadow-md">
                <p className="text-sm mb-4">
                Este sitio utiliza cookies para mejorar tu experiencia. Por favor, acepta para seguir navegando.
                </p>
                <div className="flex gap-4">
                <button
                    onClick={acceptCookies}
                    className="bg-green-400 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Aceptar
                </button>
                <button
                    onClick={rejectCookies}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Rechazar
                </button>
                </div>
            </div>
            </div>
        );
    }

export default CookieNotice;
