import { useState, useEffect } from "react";

const CommentsList = () => {
    const [comments, setComments] = useState([]); // Almacena los comentarios
    const [loading, setLoading] = useState(true); // Indicador de carga
    const [error, setError] = useState(null); // Almacena errores

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch("https://backend-webilance.onrender.com/comments"); // Ajusta la URL según tu backend
                if (!response.ok) {
                    throw new Error("Error al obtener los comentarios");
                }
                const data = await response.json();
                setComments(data); // Guarda los comentarios en el estado
            } catch (err) {
                setError(err.message); // Captura cualquier error
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchComments();
    }, []); // Se ejecuta una sola vez al montar el componente

    if (loading) {
        return <p className="text-center text-gray-700">Cargando comentarios...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Comentarios de Usuarios</h2>
            <div className="max-w-3xl mx-auto px-8 bg-white shadow-lg rounded-lg p-6">
                {comments.length > 0 ? (
                    <ul className="space-y-4">
                        {comments.map((comment, index) => (
                            <li
                                key={index}
                                className="border-b border-gray-300 pb-4"
                            >
                                <p className="text-gray-800">
                                    <strong>Usuario:</strong> {comment.user}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Comentario:</strong> {comment.comment}
                                </p>
                                <p className="text-yellow-500">
                                    <strong>Calificación:</strong> {"⭐".repeat(comment.rating)}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    <strong>Fecha:</strong> {new Date(comment.created_at).toLocaleString()}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">No hay comentarios disponibles.</p>
                )}
            </div>
        </section>
    );
};

export default CommentsList;
