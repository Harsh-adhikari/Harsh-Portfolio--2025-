// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Home from './sections/Home/Home';
// import About from './sections/About/About';
// import Skills from './sections/Skills/Skills';
// import Projects from './sections/Projects/Projects';
// import Experience from './sections/Experience/Experience';
// import Achievements from './sections/Achievements/Achievements';
// import Contact from './sections/Contact/Contact';
// import Footer from './components/Footer/Footer';
// import CustomCursor from './components/CustomCursor/CustomCursor';

// function App() {
//   return (
//     <div className="relative">
//       <CustomCursor />
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Achievements />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Achievements from './sections/Achievements/Achievements';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import PortfolioLoader from './components/PortfolioLoader/PortfolioLoader';

function App() {
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(4000);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // First visit - show loader for 4 seconds
      setLoadTime(6000);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      // Subsequent refreshes - show loader for 2 seconds
      setLoadTime(3000);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, loadTime);

    return () => clearTimeout(timer);
  }, [loadTime]);

  if (loading) {
    return <PortfolioLoader duration={loadTime} />;
  }

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;