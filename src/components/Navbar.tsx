import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      id: 'about',
      label: 'About Me'
    },
    {
      id: 'education',
      label: 'Education'
    },
    {
      id: 'experience',
      label: 'Experience'
    },
    {
      id: 'projects',
      label: 'Projects'
    },
    {
      id: 'certifications',
      label: 'Certifications'
    },
    {
      id: 'contact',
      label: 'Contact Me'
    }
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 20);

    // Determine active section based on scroll position
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionId = section.getAttribute('id');
      if (sectionTop < window.innerHeight / 2 && sectionId) {
        setActiveSection(sectionId);
      }
    });
  };

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Sidebar Navigation - Now on the right side */}
      <nav className={`fixed right-0 top-0 h-screen w-20 md:w-24 flex-col items-center bg-navy-dark border-l border-navy-light hidden lg:flex transition-all duration-300 ${scrolled ? 'border-opacity-50' : 'border-opacity-0'}`}>
        <div className="w-full h-24 flex items-center justify-center">
          <a href="#top" className="text-teal font-heading font-semibold text-2xl" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            NP
          </a>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full my-0 py-[26px]">
          <div className="h-32 w-[1px] bg-slate opacity-30 mb-8"></div>
          
          <div className="flex flex-col items-center space-y-16">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`group flex flex-col items-center`}
              >
                <span className={`text-sm vertical-text transform rotate-90 origin-center transition-colors duration-300 ${activeSection === link.id ? 'text-teal' : 'text-slate-light group-hover:text-slate-lighter'}`}>
                  {link.label}
                </span>
              </button>
            ))}
          </div>
          
          <div className="h-32 w-[1px] bg-slate opacity-30 mt-8"></div>
        </div>
      </nav>

      {/* Mobile Navigation - Stays at the top */}
      <div className="fixed top-0 left-0 w-full z-50 lg:hidden">
        <div className={`p-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-navy-dark bg-opacity-90 shadow-md' : 'bg-transparent'}`}>
          <a href="#top" className="text-teal font-heading font-bold text-xl">
            Neeraj Prasad
          </a>
          
          <button
            className="text-slate-lighter hover:text-teal focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-navy-dark bg-opacity-95 flex flex-col items-center justify-center z-40">
            <div className="flex flex-col items-center space-y-16">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-3xl font-heading transition-colors duration-300 ${activeSection === link.id ? 'text-teal' : 'text-slate-lighter hover:text-teal'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;