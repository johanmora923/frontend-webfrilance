import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackComponent = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');
    const user = window.localStorage.getItem('user');

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rating, comment,user }), // Enviar datos al backend
                credentials: 'include', // Si necesitas manejar cookies o autenticación con tu backend
            });

            if (response.ok) {
                setMessage(`¡Gracias por tu valoración! Estrellas: ${rating}`);
                setRating(0);
                setComment('');
            } else {
                const errorData = await response.json();
                console.error('Error al enviar la opinión:', errorData);
                setMessage(`Error: ${errorData.message || 'Algo salió mal'}`);
            }
        } catch (error) {
            console.error('Error al enviar la opinión:', error);
            setMessage('Hubo un error al enviar tu opinión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Comentarios y Opiniones</h2>
            <div className="max-w-3xl mx-auto px-8 bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-500 mb-4">Déjanos tu opinión</h3>
                
                {/* Mostrar mensaje de estado */}
                {message && <p className="text-center mb-4 text-green-700 font-semibold">{message}</p>}

                {/* Estrellas */}
                <div className="flex justify-center mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            size={32}
                            className={`cursor-pointer ${
                                (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(star)}
                        />
                    ))}
                </div>

                {/* Comentario */}
                <textarea
                    className="w-full border border-gray-300 rounded-md p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Escribe tu comentario aquí..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                {/* Botón Enviar */}
                <button
                    className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
                    onClick={handleSubmit}
                    disabled={!rating || !comment.trim()}
                >
                    Enviar Opinión
                </button>
            </div>
        </section>
    );
};

export default FeedbackComponent;
