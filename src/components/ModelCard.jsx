import React from 'react';

const ModelCard = ({ imgSrc, altText, liveLink, buttonId, buttonData }) => {
    return (
    <div className="model-card bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105">
      {/* Image Section */}
        <div className="w-full h-48 md:h-64 overflow-hidden rounded-t-lg">
        <img
            src={imgSrc}
            alt={altText}
            className="w-full h-full object-cover transition-transform hover:scale-110"
        />
        </div>

      {/* Buttons */}
        <div className="btn__model flex justify-between items-center mt-4 gap-2">
        <button
            className="plantilla bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-blue-600 focus:ring focus:ring-blue-300 transition-all"
            onClick={() => window.location.href = liveLink}
        >
            Ver en vivo
        </button>
        <button
            id={buttonId}
            data-plantilla={buttonData}
            className="seleccionar bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 focus:ring focus:ring-green-300 transition-all"
        >
            Seleccionar
        </button>
        </div>
    </div>
    );
};

export default ModelCard;
