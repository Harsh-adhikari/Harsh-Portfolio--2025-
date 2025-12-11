const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-20 px-5 md:px-12"
    >
      {/* Background Laser Image */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-50 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/laser.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          left: '470px',
          filter: 'brightness(1) contrast(1)',
        }}
      />

      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/profile-image.jpeg"
            alt="Harsh Adhikari"
            className="w-52 h-52 md:w-[335px] md:h-[335px] rounded-full border-4 border-[#eefd13] shadow-[0_0_40px_rgba(245,243,243,0.5)] object-cover transition-all duration-400 hover:shadow-[0_0_60px_rgba(18,50,255,0.8)] hover:scale-105 hover:rotate-[4deg] md:-translate-x-11"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <h2 className="text-4xl md:text-6xl uppercase tracking-[3px] mb-8 text-center md:text-left relative inline-block">
            About Me
            <span className="absolute bottom-[-15px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-gradient-to-r from-[#ecff1b] via-[#ecff1b] to-transparent" />
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-white mb-5">
            Hi, my name is Harsh, a BCA student. I am passionate about creating
            clean, responsive, user-friendly websites. Focused on modern web
            solutions and continuous learning.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-white mb-5">
            I believe in the power of technology to transform ideas into
            reality. With expertise in full-stack development, I bring creative
            solutions to complex problems.
          </p>

          
          <a
            href="/Harsh-Adhikari-(2025-Resume).pdf"
            download="Harsh_Adhikari_Resume.pdf"
            className="inline-flex items-center gap-2 mt-8 px-7 md:px-9 py-3 md:py-4 border-2 border-white text-white no-underline uppercase tracking-[2px] text-xs md:text-sm font-semibold transition-all duration-300 bg-transparent relative overflow-hidden group hover:border-[#4a9eff] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,158,255,0.3)]"
          >
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-br from-[#4a9eff] to-[#2d7acc] transition-all duration-400 -z-10 group-hover:left-0" />
            Download Resume
            <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;