import { useEffect, useState } from 'react';
import { ChevronDown, Star, Scissors } from 'lucide-react';
import { SALON, IMAGES } from '@/data';

export default function Hero() {
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setParallaxY(window.scrollY * 0.4);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxY}px) scale(1.1)`,
        }}
      >
        <img
          src={IMAGES.heroSalon}
          alt="Luxury salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/40" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 right-20 w-32 h-32 rounded-full bg-terracotta/10 blur-2xl animate-float hidden md:block" />
      <div className="absolute bottom-1/4 right-40 w-24 h-24 rounded-full bg-sand/20 blur-xl animate-float hidden md:block" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 mb-6 animate-fade-down">
            <Star className="w-4 h-4 fill-terracotta text-terracotta" />
            <span className="text-sm font-medium text-terracotta">Rated 4.9 by 500+ happy clients</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.05] mb-6 animate-fade-up">
            Where Beauty
            <br />
            Meets <span className="text-terracotta italic">Artistry</span>
          </h1>

          <p className="text-lg text-charcoal-soft mb-8 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {SALON.tagline}. Master stylists, premium products and a luxurious
            experience designed to make you look and feel extraordinary.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-terracotta text-cream rounded-full font-semibold hover:bg-terracotta-dark transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/30 hover:-translate-y-1 flex items-center gap-2"
            >
              <Scissors className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" />
              Book Your Visit
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-charcoal/20 text-charcoal rounded-full font-semibold hover:border-terracotta hover:text-terracotta transition-all duration-300"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-charcoal/10 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '5000+', label: 'Happy Clients' },
              { value: '20+', label: 'Expert Stylists' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl md:text-4xl font-bold text-terracotta">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-charcoal-soft mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce-soft">
          <span className="text-xs text-charcoal-soft tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-charcoal-soft" />
        </div>
      </div>
    </section>
  );
}
