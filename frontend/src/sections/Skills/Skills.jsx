import { useState } from 'react';
import { skillsData } from '../../data/skills';

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#222] rounded-2xl p-4 flex flex-col items-center gap-1 cursor-pointer transition-all duration-[400ms] relative overflow-hidden hover:-translate-y-2 hover:scale-105 hover:border-white hover:shadow-[0_20px_40px_rgba(255,255,255,0.1),0_0_30px_rgba(255,255,255,0.05)]"
      style={{ animationDelay: `${(index % 8) * 0.05}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity duration-400 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Icon Container */}
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-xl bg-black border-2 border-[#333] transition-all duration-400 relative ${
          isHovered ? 'border-white rotate-[360deg]' : ''
        }`}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className={`w-9 h-9 object-contain transition-all duration-400 ${
            isHovered ? 'grayscale-0' : 'grayscale'
          }`}
          style={skill.name === 'Express' ? { filter: isHovered ? 'invert(1) grayscale(0)' : 'invert(1) grayscale(100%)' } : {}}
        />
      </div>

      {/* Skill Name */}
      <span className="text-sm font-semibold tracking-wider text-white uppercase text-center mt-2">
        {skill.name}
      </span>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-[#222] rounded-sm overflow-hidden relative mt-1">
        <div
          className="h-full bg-gradient-to-r from-white to-gray-500 rounded-sm transition-all duration-1000 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
          style={{ width: isHovered ? `${skill.progress}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-5 md:px-12 bg-black"
    >
      {/* Background Grid & Image */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundColor: '#000',
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(4, 4, 4, 0.03) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px),
            repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 255, 255, 0.05) 50px, rgba(255, 255, 255, 0.05) 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 255, 255, 0.05) 50px, rgba(255, 255, 255, 0.05) 51px),
            url(/images/)
          `,
          backgroundSize: 'auto, auto, auto, auto, 1520px auto',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0, center',
          backgroundRepeat: 'repeat, repeat, repeat, repeat, no-repeat',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Floating Particles */}
      {[
        { top: '10%', left: '10%', delay: '0s' },
        { top: '20%', left: '80%', delay: '2s' },
        { top: '60%', left: '20%', delay: '4s' },
        { top: '80%', left: '70%', delay: '6s' },
        { top: '40%', left: '90%', delay: '8s' },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            top: pos.top,
            left: pos.left,
            animationDelay: pos.delay,
            animation: 'float 15s infinite',
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl uppercase tracking-[3px] mb-12 text-center relative">
          Skills
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#ecff1b] to-transparent" />
        </h2>

        <p className="text-center text-base text-gray-500 mb-20 uppercase tracking-[2px]">
          Technologies & Expertise
        </p>

        {/* Programming Languages */}
        <div className="mb-20">
          <div className="flex items-center mb-10 gap-5">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <h3 className="text-2xl uppercase tracking-[3px] text-white whitespace-nowrap">
              Programming Languages
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {skillsData.programmingLanguages.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <div className="flex items-center mb-10 gap-5">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <h3 className="text-2xl uppercase tracking-[3px] text-white whitespace-nowrap">
              Tools & Platforms
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {skillsData.toolsPlatforms.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-100px) translateX(50px);
          }
          50% {
            transform: translateY(-200px) translateX(-50px);
          }
          75% {
            transform: translateY(-100px) translateX(100px);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;