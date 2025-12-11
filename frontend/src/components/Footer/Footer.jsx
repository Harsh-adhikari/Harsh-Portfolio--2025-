const Footer = () => {
  const socialLinks = [

    { href: 'https://github.com/Harsh-adhikari', icon: 'G', label: 'GitHub' },
    { href: 'https://x.com/HarshAdhik16222', icon: 'X', label: 'Twitter' },
    { href: 'https://www.instagram.com/harsh_adhikari010/', icon: 'I', label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/harsh-adhikari1001/', icon: 'In', label: 'LinkedIn' },

  ];

  return (
    <footer className="bg-black py-5 px-12 border-t border-blue-700">
      <div className="flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-7">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:text-secondary"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500 text-xs tracking-wider">
          <p>
            © 2024 Harsh Adhikari. Built with <span className="text-secondary">passion</span> and{' '}
            <span className="text-secondary">code</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;