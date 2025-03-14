import React, { useEffect } from 'react';
import ModelCard from './ModelCard';

const Models = () => {
    useEffect(() => {
        const buttons = document.querySelectorAll('.seleccionar');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
            const plantilla = e.target.getAttribute('data-plantilla');
            window.location.href = `contact.html?plantilla=${encodeURIComponent(plantilla)}`;
        });
    });     
    }, []);

    return (
    <div className="p-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        RESTAURANTES - CAFETERÍAS - PANADERÍAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ModelCard
                imgSrc="cocina/plantilla1.PNG"
                altText="plantilla1"
                liveLink="https://joyful-kitsune-4033ac.netlify.app"
                buttonId="plantilla1"
                uttonData="plantilla1"
            />
            <ModelCard
                imgSrc="cocina/plantilla2.PNG"
                altText="plantilla2"
                liveLink="https://thriving-buttercream-f96cba.netlify.app"
                buttonId="plantilla2"
                buttonData="plantilla2"
            />
            <ModelCard
                imgSrc="cocina/plantilla3.PNG"
                altText="plantilla3"
                liveLink="https://papaya-sawine-ca340b.netlify.app"
                buttonId="plantilla3"
                buttonData="plantilla3"
            />
            <ModelCard
                imgSrc="cocina/plantilla4.PNG"
                altText="plantilla4"
                liveLink="https://astounding-crostata-0ad391.netlify.app"
                buttonId="plantilla4"
                buttonData="plantilla4"
            />
            <ModelCard
                imgSrc="cocina/plantilla5.PNG"
                altText="plantilla5"
                liveLink="https://courageous-maamoul-221fee.netlify.app"
                buttonId="plantilla5"
                buttonData="plantilla5"
            />
            <ModelCard
                imgSrc="cocina/plantilla6.PNG"
                altText="plantilla6"
                liveLink="https://mellifluous-raindrop-361e61.netlify.app"
                buttonId="plantilla6"
                buttonData="plantilla6"
            />
            <ModelCard
                imgSrc="cocina/plantilla7.PNG"
                altText="plantilla7"
                liveLink="https://lucky-sherbet-92a9a4.netlify.app"
                buttonId="plantilla7"
                buttonData="plantilla7"
            />
            <ModelCard
                imgSrc="cocina/plantilla8.PNG"
                altText="plantilla8"
                liveLink="https://dulcet-tapioca-0826b3.netlify.app"
                buttonId="plantilla8"
                buttonData="plantilla8"
            />
            <ModelCard
                imgSrc="cocina/plantilla9.PNG"
                altText="plantilla9"
                liveLink="https://tubular-quokka-2cad86.netlify.app"
                buttonId="plantilla9"
                buttonData="plantilla9"
            />
            <ModelCard
                imgSrc="cocina/plantilla10.PNG"
                altText="plantilla10"
                liveLink="https://loquacious-faun-2cc487.netlify.app"
                buttonId="plantilla10"
                buttonData="plantilla10"
            />
            <ModelCard
                imgSrc="cocina/plantilla11.PNG"
                altText="plantilla11"
                liveLink="https://fastidious-baklava-54da77.netlify.app"
                buttonId="plantilla11"
                buttonData="plantilla11"
            />
            <ModelCard
                imgSrc="cocina/plantilla12.PNG"
                altText="plantilla12"
                liveLink="https://stunning-unicorn-17c7a7.netlify.app"
                buttonId="plantilla12"
                buttonData="plantilla12"
            />
            <ModelCard
                imgSrc="cocina/plantilla13.PNG"
                altText="plantilla13"
                liveLink="https://glittering-begonia-517b7e.netlify.app"
                buttonId="plantilla13"
                buttonData="plantilla13"
            />
            <ModelCard
                imgSrc="cocina/plantilla14.PNG"
                altText="plantilla14"
                liveLink="https://coruscating-crumble-219a85.netlify.app"
                buttonId="plantilla14"
                buttonData="plantilla14"
            />
            <ModelCard
                imgSrc="cocina/plantilla15.PNG"
                altText="plantilla15"
                liveLink="https://heartfelt-conkies-c8924a.netlify.app"
                buttonId="plantilla15"
                buttonData="plantilla15"
            />
            <ModelCard
                imgSrc="cocina/plantilla16.PNG"
                altText="plantilla16"
                liveLink="https://reliable-dolphin-b6a7b8.netlify.app"
                buttonId="plantilla16"
                buttonData="plantilla16"
            />
            <ModelCard
                imgSrc="cocina/plantilla17.PNG"
                altText="plantilla17"
                liveLink="https://golden-fenglisu-42fbb2.netlify.app"
                buttonId="plantilla17"
                buttonData="plantilla17"
            />
            <ModelCard
                imgSrc="cocina/plantilla18.PNG"
                altText="plantilla18"
                liveLink="https://gilded-dasik-615b35.netlify.app"
                buttonId="plantilla18"
                buttonData="plantilla18"
            />
            <ModelCard
                imgSrc="cocina/plantilla19.PNG"
                altText="plantilla19"
                liveLink="https://lively-fenglisu-dc2f97.netlify.app"
                buttonId="plantilla19"
                buttonData="plantilla19"
            />
            <ModelCard
                imgSrc="cocina/plantilla20.PNG"
                altText="plantilla20"
                liveLink="https://lucky-sherbet-92a9a4.netlify.app"
                buttonId="plantilla20"
                buttonData="plantilla20"
            />
        </div>
    </div>
    );
};

export default Models;