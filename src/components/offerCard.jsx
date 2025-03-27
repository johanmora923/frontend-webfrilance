import React from 'react';

export const OfferCard = ({ Icon, title, startingPrice, maintenanceFee, description, buttonText, buttonId, buttonData }) => {
    const ToContact = () => {
        window.location.href = "/contacto";
    };
    
        return (
            <div className="ofert__container bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
                <div className='flex flex-col'>
                    <div className="icon-container flex justify-center mb-4">
                        {Icon}
                    </div>
                    <h3 className="h3__ofert text-xl font-bold text-gray-800 text-center mb-4">{title}</h3>
                    <div className="price-container text-center mb-4">
                        <span className="price text-3xl font-extrabold text-blue-500">{startingPrice}</span>
                    </div>
                    <div className="maintenance-container text-center mb-4">
                        <h3 className="cuota text-lg font-semibold text-gray-700 mb-1">¡Cuota de Mantenimiento!</h3>
                        <span className="maintenance-price text-xl font-bold text-green-500">{maintenanceFee}</span>
                    </div>
                    <p className="text-gray-600 text-center mb-6">{description}</p>
                </div>
                <button
                    id={buttonId}
                    data-servic={buttonData}
                    onClick={ToContact}
                    className="mt-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium p-3 rounded-lg w-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                    {buttonText}
                </button>
                <span className='text-red-500 m-auto text-[0.8rem] mb-5 mt-5'>No incluye servicios de Hosting, ni dominio personalizado</span>
            </div>
        );
};

export default OfferCard;
