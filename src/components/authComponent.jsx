import { useState, useEffect } from "react";

// Componente funcional AuthComponent
// Este componente maneja el registro, inicio de sesión y cierre de sesión de los usuarios.
const AuthComponent = ({ isLogin, setIsLogin }) => {
    // Estado para alternar entre registro e inicio de sesión
    const [isRegistering, setIsRegistering] = useState(true);
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    // Estado para mostrar mensajes al usuario
    const [message, setMessage] = useState("");

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        console.log(formData); // Muestra los datos del formulario en la consola

        try {
            // Realiza una solicitud POST al backend para registrar o iniciar sesión
            const res = await fetch(`https://backend-webilance.onrender.com/${isRegistering ? "register" : "login"}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Envía los datos del formulario como JSON
                credentials: "include", // Permite el envío y recepción de cookies
            });

            const data = await res.json(); // Convierte la respuesta en JSON

            if (res.ok) {
                // Si la solicitud es exitosa, muestra un mensaje y actualiza el estado
                setMessage(isRegistering ? "Registro exitoso" : "Inicio de sesión exitoso");
                if (isRegistering) setIsRegistering(false); // Cambia a la vista de inicio de sesión tras registrarse
                if (!isRegistering) {
                    window.scrollTo(0, 0); // Desplaza la página al inicio
                    window.localStorage.setItem('user', formData.name); // Guarda el nombre del usuario en localStorage
                    setIsLogin(true); // Actualiza el estado de inicio de sesión
                }
            } else {
                // Si hay un error, muestra el mensaje de error
                setMessage(`Error: ${data.message || "Algo salió mal."}`);
            }
        } catch {
            // Maneja errores de red
            setMessage("Error de red, intenta nuevamente.");
        } finally {
            // Limpia los campos del formulario
            setFormData({ name: "", email: "", password: "" });
        }
    };

    // Verifica si hay una sesión activa al cargar el componente
    const checkSession = async () => {
        try {
            const res = await fetch("https://backend-webilance.onrender.com/session", {
                credentials: "include", // Incluye las cookies en la solicitud
            });

            if (res.ok) {
                setIsLogin(true); // Si hay una sesión activa, actualiza el estado
            } else {
                setIsLogin(false); // Si no hay sesión, actualiza el estado
            }
        } catch {
            setIsLogin(false); // Maneja errores de red
        }
    };

    // Maneja el cierre de sesión del usuario
    const handleLogout = async () => {
        try {
            const res = await fetch("https://backend-webilance.onrender.com/logout", {
                method: "POST",
                credentials: "include", // Incluye las cookies
            });

            if (res.ok) {
                setIsLogin(false); // Actualiza el estado de inicio de sesión
                setMessage("Sesión cerrada."); // Muestra un mensaje de éxito
            } else {
                setMessage("Error al cerrar sesión."); // Muestra un mensaje de error
            }
        } catch {
            setMessage("Error de red, intenta nuevamente."); // Maneja errores de red
        }
    };

    // Ejecuta la verificación de sesión al cargar el componente
    useEffect(() => {
        checkSession();
    }, []);

    return (
        <section className={`py-16 bg-gray-100 ${isLogin ? "hidden" : "block"}`}>
            {/* Título dinámico según el estado de registro o inicio de sesión */}
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                {isRegistering ? "Regístrate" : "Inicia Sesión"}
            </h2>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                {/* Mensaje de retroalimentación */}
                {message && <p className="text-center mb-4 font-semibold">{message}</p>}
                {/* Formulario de registro/inicio de sesión */}
                <form onSubmit={handleSubmit}>
                    {isRegistering && (
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-md p-3"
                                placeholder="Tu correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-300 rounded-md p-3"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md p-3"
                            placeholder="Tu contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-500 text-white font-semibold rounded-md"
                    >
                        {isRegistering ? "Registrarse" : "Iniciar Sesión"}
                    </button>
                </form>
                {/* Botón para alternar entre registro e inicio de sesión */}
                <div className="mt-6 text-center">
                    <button
                        type="button"
                        className="text-green-500 font-semibold hover:underline"
                        onClick={() => setIsRegistering(!isRegistering)}
                    >
                        {isRegistering ? "Inicia Sesión" : "Regístrate"}
                    </button>
                </div>
                {/* Botón para cerrar sesión si el usuario está logueado */}
                {isLogin && (
                    <div className="mt-6 text-center">
                        <button
                            type="button"
                            className="text-red-500 font-semibold hover:underline"
                            onClick={handleLogout}
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AuthComponent;