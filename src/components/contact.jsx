import React, { useEffect } from "react";

const Contact = () => {
  // Hook de efecto para manejar la lógica al cargar el componente
  useEffect(() => {
    // Obtiene los parámetros de la URL
    const url = new URLSearchParams(window.location.search);
    const servic = url.get("servic"); // Obtiene el valor del parámetro "servic"
    if (servic) {
      // Si el parámetro "servic" existe, muestra el contenedor correspondiente
      const servicCont = document.getElementById("servic__container");
      servicCont.classList.remove("hidden");
      document.getElementById("servic").value = servic; // Asigna el valor al input
    } else {
      const plantilla = url.get("plantilla"); // Obtiene el valor del parámetro "plantilla"
      if (plantilla) {
        // Si el parámetro "plantilla" existe, muestra el contenedor correspondiente
        const contPlantilla = document.getElementById("plantilla__container");
        contPlantilla.classList.remove("hidden");
        document.getElementById("namePlantilla").value = plantilla; // Asigna el valor al input
      }
    }

    // Agrega un evento al botón de cancelar para redirigir al usuario
    document.getElementById("cancel")?.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html"; // Redirige al usuario a la página principal
    });

    // Agrega un evento al botón de WhatsApp para abrir el enlace
    document.querySelector(".Whatsapp")?.addEventListener("click", (e) => {
      e.preventDefault();
      const num = "+58 424-2079712"; // Número de WhatsApp
      const Whatsapp = `https://wa.me/${num}`; // Enlace de WhatsApp
      window.open(Whatsapp, "__blank"); // Abre el enlace en una nueva pestaña
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center px-4">
      {/* Formulario de contacto */}
      <form
        action="https://formsubmit.co/mrjdev90@gmail.com" // URL para enviar el formulario
        method="POST"
        className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8 space-y-8 transition-transform hover:scale-105"
      >
        {/* Título del formulario */}
        <h1 className="text-4xl font-extrabold text-center text-blue-600">
          ¡Formulario de Contacto!
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Llena este formulario y nos pondremos en contacto contigo muy pronto.
        </p>

        {/* Campo para el servicio seleccionado */}
        <div id="servic__container" className="hidden">
          <label htmlFor="servic" className="block font-semibold mb-2">
            Servicio
          </label>
          <input
            name="servicio"
            type="text"
            className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-green-400"
            id="servic"
          />
        </div>

        {/* Campo para la plantilla seleccionada */}
        <div id="plantilla__container" className="hidden">
          <label htmlFor="namePlantilla" className="block font-semibold mb-2">
            Modelo
          </label>
          <input
            name="template"
            type="text"
            className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-green-400"
            id="namePlantilla"
          />
        </div>

        {/* Información del cliente */}
        <div id="section__information">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Información del Cliente
          </h3>
          <div className="space-y-4">
            {/* Campo para el nombre de la empresa */}
            <div>
              <label
                htmlFor="nombre__empresa"
                className="block font-medium text-gray-700 mb-2"
              >
                Nombre de la empresa
              </label>
              <input
                required
                name="nombre de la empresa"
                id="nombre__empresa"
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
              />
            </div>

            {/* Campo para la descripción de la actividad */}
            <div>
              <label
                htmlFor="actividad"
                className="block font-medium text-gray-700 mb-2"
              >
                Descripción de su actividad
              </label>
              <textarea
                required
                name="actividad"
                id="actividad"
                rows="4"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
              ></textarea>
            </div>

            {/* Campo para el email */}
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
              />
            </div>

            {/* Campo para el número de celular */}
            <div>
              <label
                htmlFor="contact"
                className="block font-medium text-gray-700 mb-2"
              >
                Número de celular
              </label>
              <input
                required
                name="contact"
                id="contact"
                type="number"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>

        {/* Objetivos del proyecto */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Objetivos del Proyecto
          </h3>
          <div className="gap-4">
            {/* Opciones de objetivos */}
            <div>
              <input
                type="checkbox"
                id="checkbox+ventas"
                name="+ventas"
                className="w-6 h-6 rounded text-blue-500 focus:ring-blue-300"
              />
              <label htmlFor="checkbox+ventas" className="ml-2 text-gray-800">
                Aumentar ventas
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="checkbox+vistas"
                name="+vistas"
                className="w-6 h-6 rounded text-blue-500 focus:ring-blue-300"
              />
              <label htmlFor="checkbox+vistas" className="ml-2 text-gray-800">
                Mejorar la visibilidad
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="checkbox__informacion"
                name="Informacion"
                className="w-6 h-6 rounded text-blue-500 focus:ring-blue-300"
              />
              <label
                htmlFor="checkbox__informacion"
                className="ml-2 text-gray-800"
              >
                Ofrecer Información
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="otros"
                name="otros__objetivos"
                className="w-6 h-6 rounded text-blue-500 focus:ring-blue-300"
              />
              <label htmlFor="otros" className="ml-2 text-gray-800">
                Otros objetivos
              </label>
            </div>
            {/* Campo para otros objetivos */}
            <div className="col-span-2">
              <label
                htmlFor="otros__objetivos"
                className="block font-medium text-gray-700 mb-2"
              >
                Otros
              </label>
              <input
                id="otros__objetivos"
                name="otros objetivos"
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>

        {/* Estilo y diseño */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Estilo y Diseño
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Preferencias estéticas */}
            <div>
              <label
                htmlFor="estetica"
                className="block font-medium text-gray-700 mb-2"
              >
                Preferencias estéticas
              </label>
              <input
                id="estetica"
                name="estetica"
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
              />
            </div>
            {/* Paleta de colores */}
            <div>
              <label
                htmlFor="colores"
                className="block font-medium text-gray-700 mb-2"
              >
                Paleta de colores
              </label>
              <input
                id="colores"
                name="colores"
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
                placeholder="Opcional"
              />
            </div>
            {/* Tipografía */}
            <div>
              <label
                htmlFor="typografia"
                className="block font-medium text-gray-700 mb-2"
              >
                Tipografía
              </label>
              <input
                id="typografia"
                name="typografia"
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
                placeholder="Opcional"
              />
            </div>
            {/* Referencias */}
            <div>
              <label
                htmlFor="referencias"
                className="block font-medium text-gray-700 mb-2"
              >
                Referencias a otros sitios web
              </label>
              <input
                id="referencias"
                name="referencias"
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-4 focus:ring-blue-300"
                placeholder="URL"
              />
            </div>
          </div>
        </div>

        {/* Información de WhatsApp */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Contacta por WhatsApp
          </h3>
          <p className="text-gray-600 mb-4">
            Puedes enviar tus fotos y videos o cualquier contenido que quieras
            mostrar en tu página a nuestro WhatsApp.
          </p>
          <button className="Whatsapp bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all">
            <ion-icon name="logo-whatsapp" className="mr-2"></ion-icon>
            Contactar por WhatsApp
          </button>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Checkbox para aceptar términos */}
          <div className="flex items-center space-x-2">
            <input
              required
              type="checkbox"
              name="terminos"
              id="terminos"
              className="w-6 h-6 rounded border-gray-300 text-blue-500 focus:ring-blue-300"
            />
            <label htmlFor="terminos" className="font-medium text-gray-800">
              Acepto los{" "}
              <a href="terminos.html" className="text-blue-500 hover:underline">
                Términos y Condiciones
              </a>
            </label>
          </div>
          {/* Botones de cancelar y enviar */}
          <div className="flex space-x-4 mt-10 md:mt-0">
            <button
              id="cancel"
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              Cancelar
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;