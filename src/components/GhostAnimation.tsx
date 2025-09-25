import { useEffect, useState } from 'react';

const GhostAnimation = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position
  const opacity = Math.max(0, 1 - scrollY / 400);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden transition-opacity duration-300"
      style={{ opacity }}
    >
      {/* Main Ghost */}
      <div
        className="absolute ghost-main"
        style={{
          left: '20%',
          top: '30%',
          transform: `translate(${mouseX * 0.02}px, ${mouseY * 0.015}px)`
        }}
      >
        <div className="ghost-body">
          {/* Eyes */}
          <div className="ghost-eyes">
            <div className="ghost-eye left"></div>
            <div className="ghost-eye right"></div>
          </div>
        </div>
      </div>

      {/* Small Ghost 1 */}
      <div
        className="absolute ghost-small"
        style={{
          right: '15%',
          top: '60%',
          transform: `translate(${mouseX * -0.01}px, ${mouseY * 0.01}px)`
        }}
      >
        <div className="ghost-body small">
          <div className="ghost-eyes">
            <div className="ghost-eye left small"></div>
            <div className="ghost-eye right small"></div>
          </div>
        </div>
      </div>

      {/* Small Ghost 2 */}
      <div
        className="absolute ghost-small"
        style={{
          left: '70%',
          bottom: '20%',
          transform: `translate(${mouseX * 0.008}px, ${mouseY * -0.012}px)`
        }}
      >
        <div className="ghost-body small">
          <div className="ghost-eyes">
            <div className="ghost-eye left small"></div>
            <div className="ghost-eye right small"></div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="ghost-particles">
        <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ left: '25%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ left: '40%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ left: '60%', animationDelay: '0.5s' }}></div>
        <div className="particle" style={{ left: '80%', animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default GhostAnimation;