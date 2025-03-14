import React from 'react';

export const ServiceCard = ({ icon, title, description }) => {
    return (
    <div className="bg-white p-4 rounded shadow">
        <ion-icon className="text-4xl" name={icon}></ion-icon>
        <h3 className="text-xl mt-2">{title}</h3>
        <p className="mt-2">{description}</p>
    </div>
    );
};

export default ServiceCard;