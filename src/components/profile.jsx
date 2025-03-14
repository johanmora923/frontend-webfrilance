import React from "react";
import { FiLogOut } from "react-icons/fi";


export const Profile = ({handleLogout}) => {
    return (
        <div className="absolute flex flex-col hover:bg-[#ededed5]   right-0 top-16 w-48 h-48 bg-white shadow-lg rounded-lg p-4 mt-2 ">
            <div className="mb-3 text-gray-800 font-semibold">Configuración</div>
            <div className="mb-3 text-gray-800 font-semibold">Soporte</div>
            <div className="text-gray-800 font-semibold mt-14 flex items-center" onClick={handleLogout}>Cerrar Sesión <FiLogOut className="ml-2 text-[1.5em] text-red-400" /> </div>
        </div>
    );
};
