import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#frontpage');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Get all sections
      const sections = [
        'frontpage',
        'about',
        'skills',
        'projects',
        'experience',
        'achievements',
        'contact-us',
      ];

      // Find which section is currently in view
      let current = '#frontpage';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `#${sectionId}`;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#frontpage', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact-us', label: 'Contact Us' },
  ];

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setActiveSection(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full px-5 md:px-12 py-5 flex justify-between items-center z-[1000] transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      {/* Hamburger Menu */}
      <button
        className="flex flex-col gap-1.5 cursor-pointer z-[1001] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''
            }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
        />
      </button>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-12 list-none mx-auto">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`relative text-white no-underline text-sm uppercase tracking-wider transition-opacity duration-300 hover:opacity-70 ${activeSection === link.href ? 'opacity-100' : ''
                }`}
            >
              {link.label}
              {/* Active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-amber-300 transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0'
                  }`}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav Links */}
      <ul
        className={`fixed top-0 pt-20 h-screen w-64 bg-black flex flex-col items-center gap-8 list-none transition-all duration-300 shadow-2xl md:hidden z-[1001] ${isOpen ? 'right-0' : '-right-full'
          }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`relative text-white no-underline text-lg uppercase tracking-wider transition-opacity duration-300 hover:opacity-70 ${activeSection === link.href ? 'opacity-100' : ''
                }`}
            >
              {link.label}
              {/* Active underline for mobile */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-300 transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0'
                  }`}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;