import { useState } from 'react';
import {
  Scissors, Palette, Sparkles, Flower2, User, Crown,
  ChevronLeft, ChevronRight, Clock, Tag,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { SALON, SERVICE_CATEGORIES, type ServiceCategory } from '@/data';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors, Palette, Sparkles, Flower2, User, Crown,
};

export default function ServiceBook() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });
  const [currentSpread, setCurrentSpread] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  // Each spread shows 2 categories (left page + right page)
  const totalSpreads = Math.ceil(SERVICE_CATEGORIES.length / 2);

  const handleNext = () => {
    if (flipping || currentSpread >= totalSpreads - 1) return;
    setFlipDirection('next');
    setFlipping(true);
    setTimeout(() => {
      setCurrentSpread((p) => p + 1);
      setFlipping(false);
    }, 600);
  };

  const handlePrev = () => {
    if (flipping || currentSpread <= 0) return;
    setFlipDirection('prev');
    setFlipping(true);
    setTimeout(() => {
      setCurrentSpread((p) => p - 1);
      setFlipping(false);
    }, 600);
  };

  const handleBookNow = (categoryTitle: string, serviceName: string) => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const serviceSelect = document.getElementById('service-select') as HTMLSelectElement | null;
        if (serviceSelect) {
          for (const option of serviceSelect.options) {
            if (option.value === serviceName) {
              option.selected = true;
              serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
              break;
            }
          }
        }
      }, 800);
    }
  };

  const renderServicePage = (category: ServiceCategory | undefined, side: 'left' | 'right') => {
    if (!category) {
      return (
        <div className={`h-full flex items-center justify-center ${side === 'left' ? 'bg-gradient-to-br from-cream to-sand-light/50' : 'bg-gradient-to-bl from-sand-light/30 to-cream'}`}>
          <div className="text-center">
            <Crown className="w-16 h-16 text-taupe/30 mx-auto mb-4" />
            <p className="font-serif text-2xl text-taupe/50 italic">{SALON.name}</p>
            <p className="text-sm text-taupe/40 mt-2">Your beauty journey continues...</p>
          </div>
        </div>
      );
    }

    const Icon = ICONS[category.icon] ?? Scissors;

    return (
      <div
        className={`h-full p-6 lg:p-8 flex flex-col ${
          side === 'left'
            ? 'bg-gradient-to-br from-cream via-cream to-sand-light/40'
            : 'bg-gradient-to-bl from-sand-light/30 via-cream to-cream'
        }`}
      >
        {/* Page header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-terracotta" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-charcoal leading-tight">
              {category.title}
            </h3>
            <p className="text-xs text-charcoal-soft mt-0.5">{category.description}</p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-24 lg:h-32 rounded-xl overflow-hidden mb-4 group">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
        </div>

        {/* Services list */}
        <div className="flex-1 space-y-2 overflow-y-auto">
          {category.services.map((service, i) => (
            <div
              key={service.name}
              className="flex items-center justify-between p-2.5 rounded-lg bg-white/60 border border-sand/20 hover:border-terracotta/30 hover:bg-white hover:shadow-sm transition-all duration-200 group cursor-pointer"
              onClick={() => handleBookNow(category.title, service.name)}
            >
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-charcoal group-hover:text-terracotta transition-colors truncate">
                  {service.name}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] text-charcoal-soft flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <span className="text-sm font-bold text-terracotta whitespace-nowrap">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Page number */}
        <div className="text-center mt-4 text-xs text-taupe/60">
          — {(currentSpread * 2) + (side === 'left' ? 1 : 2)} —
        </div>
      </div>
    );
  };

  const leftCategory = SERVICE_CATEGORIES[currentSpread * 2];
  const rightCategory = SERVICE_CATEGORIES[currentSpread * 2 + 1];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-cream via-sand-light/20 to-cream">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-terracotta/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-sand/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-terracotta" />
            <span className="text-sm font-semibold text-terracotta tracking-widest uppercase">
              Our Menu
            </span>
            <div className="w-12 h-px bg-terracotta" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Flip Through Our
            <span className="italic text-terracotta"> Service Book</span>
          </h2>
          <p className="text-charcoal-soft text-lg max-w-2xl mx-auto">
            Browse our complete menu of services — each crafted with care and
            expertise. Tap any service to book it instantly.
          </p>
        </div>

        {/* The Book */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="book-spread mx-auto max-w-5xl">
            <div
              className={`book-3d relative ${
                flipping
                  ? flipDirection === 'next'
                    ? 'rotate-[0deg]'
                    : 'rotate-[0deg]'
                  : ''
              }`}
            >
              {/* Book spine shadow */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-charcoal/15 to-transparent z-30" />

              {/* Book cover / pages */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-sand/30">
                <div className="grid grid-cols-2 min-h-[500px] lg:min-h-[560px]">
                  {/* Left page */}
                  <div className="relative border-r border-sand/20">
                    {renderServicePage(leftCategory, 'left')}
                    {/* Page curl effect on right edge */}
                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-charcoal/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Right page */}
                  <div className="relative">
                    {renderServicePage(rightCategory, 'right')}
                    {/* Page flip overlay */}
                    <div
                      className={`absolute inset-0 z-20 transition-all duration-600 ${
                        flipping && flipDirection === 'next'
                          ? 'origin-left animate-[pageFlip_0.6s_ease-in-out]'
                          : 'opacity-0 pointer-events-none'
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(249,246,240,0.95), rgba(209,187,158,0.6))',
                      }}
                    />
                    {/* Page curl effect on left edge */}
                    <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-charcoal/10 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Spine highlight */}
              <div className="absolute top-2 bottom-2 left-1/2 w-1 -translate-x-1/2 bg-gradient-to-b from-sand/50 via-taupe/30 to-sand/50 rounded-full pointer-events-none" />
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentSpread === 0 || flipping}
                className="w-12 h-12 rounded-full border-2 border-terracotta/30 text-terracotta flex items-center justify-center hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-terracotta/30 disabled:hover:scale-100 hover:scale-110"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSpreads }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (flipping) return;
                      setFlipDirection(i > currentSpread ? 'next' : 'prev');
                      setFlipping(true);
                      setTimeout(() => {
                        setCurrentSpread(i);
                        setFlipping(false);
                      }, 600);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentSpread
                        ? 'w-8 bg-terracotta'
                        : 'w-2 bg-sand hover:bg-taupe'
                    }`}
                    aria-label={`Go to spread ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentSpread >= totalSpreads - 1 || flipping}
                className="w-12 h-12 rounded-full border-2 border-terracotta/30 text-terracotta flex items-center justify-center hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-terracotta/30 disabled:hover:scale-100 hover:scale-110"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Quick category tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {SERVICE_CATEGORIES.map((cat, i) => {
                const Icon = ICONS[cat.icon] ?? Scissors;
                const isActive =
                  i === currentSpread * 2 || i === currentSpread * 2 + 1;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      const spreadIndex = Math.floor(i / 2);
                      if (spreadIndex === currentSpread || flipping) return;
                      setFlipDirection(spreadIndex > currentSpread ? 'next' : 'prev');
                      setFlipping(true);
                      setTimeout(() => {
                        setCurrentSpread(spreadIndex);
                        setFlipping(false);
                      }, 600);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-terracotta text-cream shadow-md'
                        : 'bg-white/60 text-charcoal-soft border border-sand/30 hover:border-terracotta/30 hover:text-terracotta'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.title}
                  </button>
                );
              })}
            </div>

            <p className="text-center mt-6 text-sm text-charcoal-soft flex items-center justify-center gap-2">
              <Tag className="w-4 h-4 text-terracotta" />
              Prices are starting from. Final pricing may vary based on hair length and consultation.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pageFlip {
          0% { transform: rotateY(0deg); opacity: 0; }
          50% { transform: rotateY(-90deg); opacity: 0.8; }
          100% { transform: rotateY(-180deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
