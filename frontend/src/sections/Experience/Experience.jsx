import { experienceData } from '../../data/experience';

const ExperienceItem = ({ exp, index }) => {
  const isEven = index % 2 === 1;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center opacity-0 animate-fadeInUp`}
      style={{
        animationDelay: `${index * 0.2}s`,
        direction: isEven ? 'rtl' : 'ltr',
      }}
    >
      {/* Content */}
      <div className="py-5" style={{ direction: 'ltr' }}>
        {/* Category Badge */}
        <div className="text-xs uppercase tracking-[3px] text-gray-500 mb-4">
          {exp.category}
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-[3px] mb-8 leading-tight">
          {exp.title}
        </h3>

        {/* Details */}
        <div className="flex flex-col gap-5 mb-8 pl-0 border-l-2 border-[#333]">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 pl-8 relative">
            <span className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
            <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold">
              {exp.category === 'Internship' ? 'Company' : 'Role'}
            </div>
            <div className="text-base text-white leading-relaxed">
              {exp.company}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 pl-8 relative">
            <span className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
            <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold">
              {exp.category === 'Internship' ? 'Duration' : 'Team Size'}
            </div>
            <div className="text-base text-white leading-relaxed">
              {exp.duration}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 pl-8 relative">
            <span className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
            <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold">
              {exp.category === 'Internship' ? 'Period' : 'Status'}
            </div>
            <div className="text-base text-white leading-relaxed">
              {exp.period}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-gray-300 mb-8">
          {exp.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {exp.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-white/10 border border-white/30 px-4 py-2 rounded text-xs text-white uppercase tracking-wider transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Button */}
        {exp.link !== '#' && (
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 px-9 py-4 border-2 border-white text-white no-underline uppercase tracking-[2px] text-xs font-semibold transition-all duration-300 bg-transparent hover:bg-white hover:text-black hover:translate-x-1"
          >
            View
          </a>
        )}
      </div>

      {/* Image */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden bg-[#202020] border border-[#ffe817]">
        <img
          src={exp.image}
          alt={exp.title}
          className="w-full h-full object-contain transition-transform duration-600 hover:scale-110 brightness-90 hover:brightness-100"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 px-5 md:px-12 bg-gradient-to-b from-black via-[#4f4f4f] to-black overflow-hidden"
    >
{/* Background Grid */}
<div
  className="absolute top-0 left-0 right-0 bottom-0 z-0"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    animation: 'gridMove 20s linear infinite',
  }}
/>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl uppercase tracking-[3px] mb-4 text-center relative">
          Experience
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#ecff1b] to-transparent" />
        </h2>

        <p className="text-center text-base text-gray-500 mb-20 uppercase tracking-[2px]">
          Professional Journey
        </p>

        {/* Experience Grid */}
        <div className="grid gap-20">
          {experienceData.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
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

export default Experience;