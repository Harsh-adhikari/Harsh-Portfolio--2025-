import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      // Prepare data for Web3Forms
      const formDataToSend = {
        access_key: "793e032c-cd3d-4a21-acd9-c5a537da17fd", // Your Web3Forms access key
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        projectType: formData.projectType,
        budget: formData.budget || 'Not specified',
        message: formData.message,
        subject: `New Hire Request from ${formData.firstName} ${formData.lastName}`,
        from_name: `${formData.firstName} ${formData.lastName}`,
      };

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        });
      } else {
        setShowError(true);
        console.error('Form submission failed:', result);
      }
    } catch (error) {
      setShowError(true);
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    // { href: 'https://github.com/Harsh-adhikari', label: 'G', name: 'GitHub' },
    { href: 'https://www.instagram.com/harsh_adhikari010/', label: 'I', name: 'Instagram' },

    { href: 'https://x.com/HarshAdhik16222', label: 'X', name: 'Twitter' },
    // { href: 'https://www.linkedin.com/in/harsh-adhikari1001/', label: 'in', name: 'LinkedIn' },
  ];

  return (
    <section
      id="contact-us"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-screen"
    >
      {/* Left Section */}
      <div
        className="relative py-16 px-8 md:px-12 flex flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.0)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200)',
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[rgba(74,158,255,0.1)] to-black/80" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-[2px] leading-tight">
            Get In Touch
          </h1>
          <p className="text-base text-gray-300 mb-9 leading-relaxed">
            Let's collaborate and create something amazing together. I'm always
            open to discussing new projects and opportunities.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold">
                Location
              </div>
              <div className="text-lg font-light text-white">
                Jaipur, Rajasthan
                <br />
                India
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold">
                Phone
              </div>
              <div className="text-lg font-light text-white">
                <a
                  href="tel:+916375951173"
                  className="text-white no-underline transition-colors duration-300 hover:text-[#4a9eff]"
                >
                  +91 6375951173
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold">
                Email
              </div>
              <div className="text-lg font-light text-white">
                <a
                  href="mailto:harshadhikari1001@gmail.com"
                  className="text-white no-underline transition-colors duration-300 hover:text-[#4a9eff]"
                >
                  harshadhikari1001@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold">
                Follow Me
              </div>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border-2 border-white rounded-full flex items-center justify-center no-underline text-white text-base transition-all duration-300 hover:bg-[#4a9eff] hover:border-[#4a9eff] hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="bg-[#0a0a0a] py-12 px-8 md:px-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase tracking-[2px]">
          Hire Me
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mb-5">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-600 outline-none py-2"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-600 outline-none py-2"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-600 outline-none py-2"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-600 outline-none py-2"
              />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold">
              Company / Organization
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-600 focus:border-blue-600 outline-none py-2"
            />
          </div>

          {/* Project Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold">
              Project Type *
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-600 focus:border-blue-600 outline-none py-2"
            >
              <option value="" className="bg-[#0a0a0a]">Select a project type</option>
              <option value="web-development" className="bg-[#0a0a0a]">Web Development</option>
              <option value="frontend" className="bg-[#0a0a0a]">Frontend Development</option>
              <option value="backend" className="bg-[#0a0a0a]">Backend Development</option>
              <option value="fullstack" className="bg-[#0a0a0a]">Full Stack Development</option>
              <option value="consulting" className="bg-[#0a0a0a]">Consulting</option>
              <option value="other" className="bg-[#0a0a0a]">Other</option>
            </select>
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-600 focus:border-blue-600 outline-none py-2"
            >
              <option value="" className="bg-[#0a0a0a]">Select budget range</option>
              <option value="under-50000" className="bg-[#0a0a0a]">Under ₹50,000</option>
              <option value="50000-100000" className="bg-[#0a0a0a]">₹50,000 - ₹1,00,000</option>
              <option value="100000-300000" className="bg-[#0a0a0a]">₹1,00,000 - ₹3,00,000</option>
              <option value="300000-500000" className="bg-[#0a0a0a]">₹3,00,000 - ₹5,00,000</option>
              <option value="500000-plus" className="bg-[#0a0a0a]">₹5,00,000+</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold">
              Project Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-600 outline-none py-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-transparent border-2 border-white text-white px-9 py-3 text-xs uppercase tracking-[2px] cursor-pointer transition-all duration-300 self-start mt-1 font-semibold hover:bg-[#4a9eff] hover:border-[#4a9eff] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,158,255,0.3)] active:-translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-[rgba(74,158,255,0.2)] border border-[#4a9eff] text-[#4a9eff] py-2.5 px-4 rounded-md mt-2 text-center text-xs">
              Thank you! Your message has been sent successfully. I'll get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {showError && (
            <div className="bg-[rgba(255,74,74,0.2)] border border-[#ff4a4a] text-[#ff4a4a] py-2.5 px-4 rounded-md mt-2 text-center text-xs">
              Oops! Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;