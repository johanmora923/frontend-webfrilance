import { useEffect, useRef } from 'react';

const SBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let offset = 0; // Control del desplazamiento de las líneas

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    const drawBackground = () => {
      // Limpia el lienzo
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Crear un degradado que termine en blanco más temprano
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#4F46E5'); // Azul vibrante
      gradient.addColorStop(0.4, '#9333EA'); // Morado
      gradient.addColorStop(0.9, '#fcfcfc'); // Blanco más pronunciado
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar líneas diagonales animadas
      const lineSpacing = 80; // Espaciado entre líneas
      for (let i = -canvas.height + offset; i < canvas.width + canvas.height; i += lineSpacing) {
        const lineGradient = ctx.createLinearGradient(i, 0, i + 200, canvas.height);
        lineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        lineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + canvas.height, canvas.height);
        ctx.stroke();
      }

      // Actualizar el desplazamiento para animación suave
      offset -= 0.5; // Ajusta la velocidad del movimiento aquí
      if (offset <= -lineSpacing) offset = 0; // Reiniciar el desplazamiento
    };

    const animate = () => {
      drawBackground();
      requestAnimationFrame(animate); // Llamar constantemente para la animación
    };

    // Ajustar y dibujar el canvas
    resizeCanvas();
    animate(); // Iniciar la animación
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas); // Limpieza
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '',
      }}
    />
  );
};

export default SBackground;
