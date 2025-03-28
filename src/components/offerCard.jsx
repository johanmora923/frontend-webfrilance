import React from 'react';

// Componente funcional OfferCard
// Este componente representa una tarjeta de oferta con información sobre un servicio o producto.
export const OfferCard = ({ 
    Icon, // Icono que se muestra en la tarjeta
    title, // Título de la oferta
    startingPrice, // Precio inicial del servicio
    maintenanceFee, // Cuota de mantenimiento
    description, // Descripción del servicio
    buttonText, // Texto del botón
    buttonId, // ID del botón
    buttonData // Datos adicionales para el botón
}) => {
    // Función para redirigir al formulario de contacto
    const ToContact = () => {
        window.location.href = "/contacto"; // Redirige al usuario a la página de contacto
    };
    
    return (
        <div className="ofert__container bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
            {/* Contenedor principal de la tarjeta */}
            <div className='flex flex-col'>
                {/* Contenedor del icono */}
                <div className="icon-container flex justify-center mb-4">
                    {Icon} {/* Renderiza el icono pasado como prop */}
                </div>
                {/* Título de la oferta */}
                <h3 className="h3__ofert text-xl font-bold text-gray-800 text-center mb-4">
                    {title}
                </h3>
                {/* Contenedor del precio inicial */}
                <div className="price-container text-center mb-4">
                    <span className="price text-3xl font-extrabold text-blue-500">
                        {startingPrice}
                    </span>
                </div>
                {/* Contenedor de la cuota de mantenimiento */}
                <div className="maintenance-container text-center mb-4">
                    <h3 className="cuota text-lg font-semibold text-gray-700 mb-1">
                        ¡Cuota de Mantenimiento!
                    </h3>
                    <span className="maintenance-price text-xl font-bold text-green-500">
                        {maintenanceFee}
                    </span>
                </div>
                {/* Descripción del servicio */}
                <p className="text-gray-600 text-center mb-6">
                    {description}
                </p>
            </div>
            {/* Botón para redirigir al formulario de contacto */}
            <button
                id={buttonId} // Asigna el ID al botón
                data-servic={buttonData} // Asigna datos adicionales al botón
                onClick={ToContact} // Llama a la función ToContact al hacer clic
                className="mt-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium p-3 rounded-lg w-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
                {buttonText} {/* Texto del botón */}
            </button>
            {/* Nota adicional sobre los servicios no incluidos */}
            <span className='text-red-500 m-auto text-[0.8rem] mb-5 mt-5'>
                No incluye servicios de Hosting, ni dominio personalizado
            </span>
        </div>
    );
};

export default OfferCard;