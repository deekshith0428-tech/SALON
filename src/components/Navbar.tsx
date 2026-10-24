import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SALON } from '@/data';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(184,92,56,0.1)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-sand flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="font-serif text-lg font-bold text-cream">S</span>
            </div>
            <div className="text-left">
              <span className={`font-serif text-xl font-bold block leading-none ${scrolled ? 'text-charcoal' : 'text-charcoal'}`}>
                {SALON.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-taupe">
                Salon & Beauty
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-terracotta'
                    : 'text-charcoal hover:text-terracotta'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-terracotta transition-all duration-300 -translate-x-1/2 ${
                    activeSection === link.href.replace('#', '')
                      ? 'w-6'
                      : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SALON.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-charcoal text-sm font-medium hover:text-terracotta transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SALON.phone}
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-5 py-2.5 bg-terracotta text-cream rounded-full text-sm font-semibold hover:bg-terracotta-dark transition-all duration-300 hover:shadow-lg hover:shadow-terracotta/30 hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-cream shadow-2xl transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-24 px-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-terracotta text-cream'
                    : 'text-charcoal hover:bg-sand-light'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${SALON.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-4 py-3 text-charcoal font-medium"
            >
              <Phone className="w-4 h-4" />
              {SALON.phone}
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-4 px-5 py-3 bg-terracotta text-cream rounded-full text-base font-semibold text-center"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
