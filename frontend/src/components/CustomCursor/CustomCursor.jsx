import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth cursor movement with lerp (linear interpolation)
      const lerp = (start, end, factor) => start + (end - start) * factor;

      // Main cursor - fast follow (0.3 = 30% of distance per frame)
      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.3);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.3);

      // Follower cursor - slower follow (0.15 = 15% of distance per frame)
      followerPos.current.x = lerp(followerPos.current.x, mousePos.current.x, 0.15);
      followerPos.current.y = lerp(followerPos.current.y, mousePos.current.y, 0.15);

      // Update DOM using hardware-accelerated transform
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateMousePosition);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          left: 0,
          top: 0,
          willChange: 'transform'
        }}
      />
      {/* Follower cursor ring */}
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        style={{
          left: 0,
          top: 0,
          willChange: 'transform'
        }}
      />
    </>
  );
};

export default CustomCursor;