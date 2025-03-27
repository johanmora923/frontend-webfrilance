import React, { useState } from 'react';

export const CookiesPopup = () => {
    const cookies = localStorage.getItem('cookies');
    const [isVisible, setIsVisible] = useState(cookies !== 'accepted' ? true : false);

    const handleClose = () => {
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false);
        localStorage.setItem('cookies', 'accepted');
    }
    return (
        isVisible && (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="cookiesContent bg-white text-black text-center rounded-2xl p-8 shadow-lg w-80 flex flex-col items-center">
            <button
                className="close text-gray-400 self-end text-xl border-none bg-transparent mb-2 focus:outline-none"
                onClick={handleClose}
            >
                ✖
            </button>
            <img
                src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
                alt="cookies-img"
                className="w-20 mb-4"
            />
            <p className="text-lg mb-6">
                We use cookies for improving user experience, analytics and marketing.
            </p>
            <button onClick={closeModal} className="accept bg-red-500 text-white rounded-md w-48 py-3 text-lg shadow-md hover:bg-red-600 transition duration-300">
                That's fine!
            </button>
            </div>
        </div>
        )
    );
};

export default CookiesPopup;
