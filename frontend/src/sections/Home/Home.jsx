import { useState, useEffect } from 'react';

const Home = () => {
  const [time, setTime] = useState('');
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const phrases = [
    "Passionate about creating clean, responsive websites.",
    "Building modern web solutions.",
    "Focused on continuous learning.",
    "Turning ideas into reality.",
  ];

  // Clock Effect
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typing Effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      id="frontpage"
      className="relative h-screen flex items-center justify-center text-center bg-black"

      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/images/earth.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-8xl font-bold mb-5 uppercase tracking-[5px] animate-fadeInUp">
          Harsh Adhikari
        </h1>
        <div className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeInUp delay-300">
          Web Developer
        </div>
        <div className="text-lg md:text-xl text-[#fff538] min-h-[30px] inline-block border-r-2 border-white pr-1 animate-fadeInUp delay-500">
          {text}
        </div>
        <br />
        <a
          href="#about"
          className="inline-block mt-8 px-10 py-4 border-2 border-white text-white no-underline uppercase tracking-[2px] transition-all duration-750 bg-transparent font-semibold text-base hover:bg-white hover:text-black animate-fadeInUp delay-750"
        >
          Explore
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <span className="block w-[35px] h-[55px] border-2 border-[#f9f902] rounded-[25px] relative shadow-[0_0_25px_rgba(5,5,5,0.9)]">
          <span className="absolute top-3 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 animate-scroll shadow-[0_0_17px_#0b0b0b]" />
        </span>
      </div>

      {/* Aesthetic Clock */}
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-lg md:text-2xl font-light text-white tracking-[6px] font-mono opacity-100 px-4 md:px-6 py-2 md:py-3 border border-white/20 rounded-sm backdrop-blur-md bg-gradient-to-br from-white/[0.03] to-white/[0.01] shadow-[0_0_20px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)] z-[100] transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.2),inset_0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 overflow-hidden">
        {time}
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-clockShine" />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
        }

        @keyframes clockShine {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 100%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }

        .animate-scroll {
          animation: scroll 2s infinite;
        }

        .animate-clockShine {
          animation: clockShine 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;