import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { SALON } from '@/data';

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-charcoal text-cream/80 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta via-sand to-terracotta" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-sand flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-cream">S</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-cream block leading-none">
                  {SALON.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-cream/50">
                  Salon & Beauty
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/60 mb-4">
              Premium unisex salon and beauty parlour. Where beauty meets
              artistry, every single day.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: SALON.social.instagram },
                { Icon: Facebook, href: SALON.social.facebook },
                { Icon: Youtube, href: SALON.social.youtube },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4 text-cream" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <div className="space-y-2.5 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Transformations', href: '#transformations' },
                { label: 'Our Team', href: '#team' },
                { label: 'Reviews', href: '#reviews' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream/60 hover:text-terracotta transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">Our Services</h4>
            <div className="space-y-2.5 text-sm">
              {[
                'Hair Cut & Style',
                'Colour & Highlights',
                'Bridal Makeup',
                'Facials & Skin Care',
                "Men's Grooming",
              ].map((s) => (
                <a
                  key={s}
                  href="#services"
                  className="block text-cream/60 hover:text-terracotta transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">Reach Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-cream/60">{SALON.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta flex-shrink-0" />
                <a href={`tel:${SALON.phone.replace(/\s/g, '')}`} className="text-cream/60 hover:text-terracotta transition-colors">
                  {SALON.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta flex-shrink-0" />
                <a href={`mailto:${SALON.email}`} className="text-cream/60 hover:text-terracotta transition-colors">
                  {SALON.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} {SALON.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-cream/40">Crafted with care.</p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-terracotta/20 hover:bg-terracotta text-cream flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
