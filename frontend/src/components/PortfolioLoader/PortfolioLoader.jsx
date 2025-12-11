import React, { useState, useEffect } from 'react';

const PortfolioLoader = ({ duration = 4000 }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    const incrementTime = duration / 100;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, incrementTime);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration]);

  if (!loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-gray-400 text-sm sm:text-base">Content loaded successfully!</p>
        </div>
      </div>
    );
  }

  const text = "Loading";

  // Generate particles
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: 3 + Math.random() * 4,
    animationDelay: Math.random() * 5,
    size: 2 + Math.random() * 3
  }));

  // Generate binary code particles (0s and 1s)
  const binaryParticles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    code: Math.random() > 0.5 ? '1' : '0',
    animationDuration: 8 + Math.random() * 6,
    animationDelay: Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes loaderRotate {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 30px 0 #ad5fff inset,
              0 60px 60px 0 #471eec inset;
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 10px 0 #d60a47 inset,
              0 40px 60px 0 #311e80 inset;
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 30px 0 #ad5fff inset,
              0 60px 60px 0 #471eec inset;
          }
        }

        @keyframes loaderLetterAnim {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes binaryFloat {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-20vh) translateX(30px);
            opacity: 0;
          }
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(139, 92, 246, 0.6);
          border-radius: 50%;
          animation: float linear infinite;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
        }

        .binary-particle {
          position: absolute;
          color: rgba(34, 197, 94, 0.5);
          font-family: monospace;
          font-size: 14px;
          font-weight: 300;
          animation: binaryFloat linear infinite;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .binary-particle {
            font-size: 12px;
          }
        }

        .loader-container {
          animation: fadeIn 0.5s ease-in;
        }

        .grid-background {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 2s linear infinite;
          mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 80%);
        }

        @media (max-width: 640px) {
          .grid-background {
            background-size: 30px 30px;
          }
        }

        .loader-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 380px;
          height: 380px;
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 2em;
          font-weight: 300;
          color: white;
          border-radius: 50%;
          background-color: transparent;
          user-select: none;
        }

        @media (max-width: 640px) {
          .loader-wrapper {
            width: 240px;
            height: 240px;
            font-size: 1.25em;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .loader-wrapper {
            width: 280px;
            height: 280px;
            font-size: 1.5em;
          }
        }

        .loader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background-color: transparent;
          animation: loaderRotate 2s linear infinite;
          z-index: 0;
        }

        .loader-letter {
          display: inline-block;
          opacity: 0.4;
          transform: translateY(0);
          animation: loaderLetterAnim 2s infinite;
          z-index: 1;
          border-radius: 50ch;
          border: none;
        }

        .loader-letter:nth-child(1) { animation-delay: 0s; }
        .loader-letter:nth-child(2) { animation-delay: 0.1s; }
        .loader-letter:nth-child(3) { animation-delay: 0.2s; }
        .loader-letter:nth-child(4) { animation-delay: 0.3s; }
        .loader-letter:nth-child(5) { animation-delay: 0.4s; }
        .loader-letter:nth-child(6) { animation-delay: 0.5s; }
        .loader-letter:nth-child(7) { animation-delay: 0.6s; }
        .loader-letter:nth-child(8) { animation-delay: 0.7s; }
        .loader-letter:nth-child(9) { animation-delay: 0.8s; }
        .loader-letter:nth-child(10) { animation-delay: 0.9s; }

        .dot {
          animation: pulse 1.5s ease-in-out infinite;
        }

        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.3s; }
        .dot:nth-child(3) { animation-delay: 0.6s; }
      `}</style>

      {/* Animated Grid Background */}
      <div className="grid-background"></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`
          }}
        ></div>
      ))}

      {/* Binary Code Particles (0s and 1s) */}
      {binaryParticles.map((binary) => (
        <div
          key={`binary-${binary.id}`}
          className="binary-particle"
          style={{
            left: `${binary.left}%`,
            animationDuration: `${binary.animationDuration}s`,
            animationDelay: `${binary.animationDelay}s`
          }}
        >
          {binary.code}
        </div>
      ))}

      <div className="loader-container flex flex-col items-center justify-center relative z-10 px-4">
        {/* Main Loader Sphere */}
        <div className="loader-wrapper mb-6 sm:mb-8">
          {text.split('').map((letter, index) => (
            <span key={index} className="loader-letter">
              {letter}
            </span>
          ))}
          <div className="loader"></div>
        </div>

        {/* Progress Percentage */}
        <div className="text-white text-xl sm:text-2xl font-light tracking-wider mb-3 sm:mb-4">
          {progress}%
        </div>

        {/* Sub Text */}
        <div className="text-gray-400 text-xs sm:text-sm tracking-widest uppercase flex items-center gap-1 mb-4 sm:mb-6">
          <span>Loading Portfolio</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>

        {/* Progress Bar */}
        <div className="w-48 sm:w-64 h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all ease-out"
            style={{ 
              width: `${progress}%`
            }}
          ></div>
        </div>

        {/* Copyright/Brand */}
        <div className="mt-8 sm:mt-12 text-violet-500 text-base sm:text-lg tracking-wider">
          HARSH ADHIKARI
        </div>
      </div>
    </div>
  );
};

export default PortfolioLoader;


