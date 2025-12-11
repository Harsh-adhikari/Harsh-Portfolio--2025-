import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollower = (e) => {
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', updateFollower);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', updateFollower);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-5 h-5 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-100 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        className="fixed w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 hidden md:block"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;