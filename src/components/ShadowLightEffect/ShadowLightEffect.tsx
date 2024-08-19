'use client';

import { useEffect, useState } from 'react';

const ShadowLightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use pageX and pageY to make the shadow move relative to the document
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 w-full h-full z-30 transition duration-300"
      style={{
        background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></div>
  );
};

export default ShadowLightEffect;
