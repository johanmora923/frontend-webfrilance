import { useState, useEffect } from "react";

const AuthComponent = ({ isLogin, setIsLogin }) => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const res = await fetch(`https://backend-webilance.onrender.com/${isRegistering ? "register" : "login"}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include", // Permitir envío y recepción de cookies
            });

            const data = await res.json();

            if (res.ok) {
                setMessage(isRegistering ? "Registro exitoso" : "Inicio de sesión exitoso");
                if (isRegistering) setIsRegistering(false);
                if (!isRegistering) {
                    window.scrollTo(0, 0);
                    window.localStorage.setItem('user', formData.name)
                    setIsLogin(true);
                }
            } else {
                setMessage(`Error: ${data.message || "Algo salió mal."}`);
            }
        } catch {
            setMessage("Error de red, intenta nuevamente.");
        } finally {
            setFormData({ name: "", email: "", password: "" });
        }
    };

    const checkSession = async () => {
        try {
            const res = await fetch("https://backend-webilance.onrender.com/session", {
                credentials: "include", // Incluye las cookies en la solicitud
            });

            if (res.ok) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        } catch {
            setIsLogin(false);
        }
    };

    const handleLogout = async () => {
        try {
            const res = await fetch("https://backend-webilance.onrender.com/logout", {
                method: "POST",
                credentials: "include", // Incluye las cookies
            });

            if (res.ok) {
                setIsLogin(false);
                setMessage("Sesión cerrada.");
            } else {
                setMessage("Error al cerrar sesión.");
            }
        } catch {
            setMessage("Error de red, intenta nuevamente.");
        }
    };

    useEffect(() => {
        checkSession(); // Verificar sesión al cargar el componente
}, []);

    return (
        <section className={`py-16 bg-gray-100 ${isLogin ? "hidden" : "block"}`}>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                {isRegistering ? "Regístrate" : "Inicia Sesión"}
            </h2>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                {message && <p className="text-center mb-4 font-semibold">{message}</p>}
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
                <div className="mt-6 text-center">
                    <button
                        type="button"
                        className="text-green-500 font-semibold hover:underline"
                        onClick={() => setIsRegistering(!isRegistering)}
                    >
                        {isRegistering ? "Inicia Sesión" : "Regístrate"}
                    </button>
                </div>
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
