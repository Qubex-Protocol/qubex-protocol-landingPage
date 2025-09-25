import { useEffect, useState } from 'react';

const AnimatedCube = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll position to hide in footer
  const footerStart = window.innerHeight * 2; // Approximate footer start
  const opacity = scrollY > footerStart ? Math.max(0, 1 - (scrollY - footerStart) / 50) : 1;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-300"
      style={{ opacity }}
    >
      {/* Main Cube Only */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(-50%, -50%) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.2}deg) rotateZ(${scrollY * 0.05}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="cube-container">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCube;