import { projectsData } from '../../data/projects';

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`flex flex-col ${
        project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-10 md:gap-16 bg-transparent p-0 border-none`}
    >
      {/* Project Image */}
      <div className="flex-1 min-w-full md:min-w-[400px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="flex-1">
        <h3 className="text-3xl md:text-4xl font-bold mb-5 uppercase tracking-[2px] leading-tight">
          {project.title}
          <br />
          <span className="text-2xl md:text-3xl">({project.subtitle})</span>
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8">
          {project.description}
        </p>

        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border-2 border-white text-white no-underline uppercase tracking-wider text-sm transition-all duration-300 bg-transparent hover:bg-white hover:text-black"
        >
          View Demo
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-black py-20 px-5 md:px-12 pb-[590px]"
    >
      {/* Background Image */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[400px] z-0"
        style={{
          backgroundImage: 'url(/images/skills.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl uppercase tracking-[3px] mb-12 text-center relative">
          Projects
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#ecff1b] to-transparent" />
        </h2>

        {/* Projects Grid */}
        <div className="flex flex-col gap-20 md:gap-28 mt-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;