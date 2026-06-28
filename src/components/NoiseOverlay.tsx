import { useEffect, useRef } from 'react';

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Generate noise
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;     // R
        data[i + 1] = value; // G
        data[i + 2] = value; // B
        data[i + 3] = 15;     // A - very low opacity
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let animationFrame: number;
    const animate = () => {
      generateNoise();
      animationFrame = requestAnimationFrame(animate);
    };

    // Only animate occasionally for performance
    let frameCount = 0;
    const interval = setInterval(() => {
      if (frameCount % 3 === 0) {
        generateNoise();
      }
      frameCount++;
    }, 100);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015] mix-blend-overlay"
      style={{
        imageRendering: 'pixelated',
      }}
    />
  );
}
