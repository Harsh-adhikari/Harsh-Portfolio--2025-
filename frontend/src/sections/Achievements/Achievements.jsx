import { useState, useEffect, useRef } from 'react';
import { achievementsData, statsData } from '../../data/achievements';

const AchievementCard = ({ achievement }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#222] rounded-[20px] p-[40px] relative overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url('${achievement.image}')`,
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(255, 255, 19, 0.3)' : '#222',
        boxShadow: isHovered ? '0 25px 50px rgba(137, 137, 137, 0.5)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 z-[1]"
        style={{
          background: isHovered
            ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95))'
            : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9))',
        }}
      />

      {/* Shine Effect */}
      <div
        className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-zinc-50/10 to-transparent transition-all duration-600"
        style={{
          left: isHovered ? '100%' : '-100%',
        }}
      />

      {/* Content Container */}
      <div className="relative z-[2] h-full flex flex-col">
        {/* Year Badge */}
        <div
          className="absolute text-white font-bold tracking-[2px] transition-all duration-400"
          style={{
            top: '0px',
            left: '0px',
            fontSize: isHovered ? '36px' : '48px',
            opacity: 1,
          }}
        >
          {achievement.year}
        </div>

        {/* Bottom Content Area */}
        <div className="mt-auto">
          {/* Title */}
          <h3 className="text-[28px] font-bold leading-[1.3] text-left mb-[15px]">
            {achievement.title}
            {achievement.subtitle && (
              <>
                <br />
                <span className="text-[28px]">{achievement.subtitle}</span>
              </>
            )}
          </h3>

          {/* Issuer */}
          {achievement.issuer && (
            <p
              className="text-[13px] text-[#ccc] uppercase tracking-[1.5px] mb-[15px] transition-all duration-400"
              style={{
                opacity: isHovered ? 1 : 0,
                maxHeight: isHovered ? '100px' : '0',
                overflow: 'hidden',
              }}
            >
              {achievement.issuer}
            </p>
          )}

          {/* Description */}
          <p
            className="text-[14px] leading-[1.6] text-[#ccc] mb-[20px] transition-all duration-400"
            style={{
              opacity: isHovered ? 1 : 0,
              maxHeight: isHovered ? '150px' : '0',
              overflow: 'hidden',
            }}
          >
            {achievement.description}
          </p>

          {/* View Certificate Button */}
          <a
            href={achievement.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] px-[20px] py-[10px] border-2 border-white text-white no-underline uppercase tracking-[1px] text-[11px] font-semibold transition-all duration-300 bg-transparent hover:bg-white hover:text-black"
            style={{
              opacity: isHovered ? 1 : 0,
              maxHeight: isHovered ? '100px' : '0',
              overflow: 'hidden',
            }}
          >
            View Certificate →
          </a>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ stat }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let current = 0;
      const increment = stat.number / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCount(stat.number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.number]);

  return (
    <div
      ref={ref}
      className="text-center p-[60px] bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#222] rounded-[20px] transition-all duration-400 hover:border-white hover:-translate-y-[10px] hover:shadow-[0_50px_40px_rgba(255,255,255,0.1)]"
    >
      <div
        className="text-[72px] font-bold text-white mb-[15px]"
        style={{
          background: 'linear-gradient(135deg, #fff, #888)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}+
      </div>
      <div className="text-[13px] text-[#888] uppercase tracking-[2px] font-medium">
        {stat.label}
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative min-h-screen py-[100px] px-[50px] bg-black overflow-hidden"
    >
      {/* Background Grid */}
      {/* Animated Diagonal Lines Pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
        {/* Moving diagonal lines */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 50px,
        rgba(255, 232, 23, 0.03) 50px,
        rgba(255, 232, 23, 0.03) 51px
      )`,
            animation: 'diagonalMove 30s linear infinite',
          }}
        />
        {/* Dots pattern overlay */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 232, 23, 0.05) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            animation: 'dotFloat 20s ease-in-out infinite',
          }}
        />
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#ffe817]/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#ffe817]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Floating Particles */}
      {[
        { top: '10%', left: '10%', delay: '0s' },
        { top: '20%', left: '80%', delay: '2s' },
        { top: '50%', left: '70%', delay: '3s' },
        { top: '50%', left: '70%', delay: '3s' },


        { top: '60%', left: '20%', delay: '4s' },
        { top: '80%', left: '70%', delay: '6s' },
        { top: '40%', left: '90%', delay: '8s' },
        { top: '30%', left: '30%', delay: '8s' },
        { top: '20%', left: '50%', delay: '5s' },



      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-[16px] h-[16px] bg-red-600 rounded-full opacity-30"
          style={{
            top: pos.top,
            left: pos.left,
            animationDelay: pos.delay,
            animation: 'float 15s infinite',
          }}
        />
      ))}

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-[60px] uppercase tracking-[3px] mb-[50px] text-center relative">
          Achievements
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-gradient-to-r from-transparent via-[#ecff1b] to-transparent" />
        </h2>

        <br />
        <p className="text-center text-[16px] text-[#616161] mb-[80px] uppercase tracking-[2px]">
          Milestones & Recognition
        </p>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-[1200px] mx-auto">
          {achievementsData.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[80px] pt-[80px] border-t border-[#222]">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
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

  @keyframes diagonalMove {
    0% {
      transform: translateX(-50px) translateY(-50px);
    }
    100% {
      transform: translateX(50px) translateY(50px);
    }
  }

  @keyframes dotFloat {
    0%, 100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateY(-20px) scale(1.05);
      opacity: 0.8;
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 1s ease forwards;
  }
`}</style>
    </section>
  );
};

export default Achievements;