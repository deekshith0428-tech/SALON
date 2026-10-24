import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { TRANSFORMATIONS } from '@/data';

export default function Transformations() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section id="transformations" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-terracotta" />
            <span className="text-sm font-semibold text-terracotta tracking-widest uppercase">
              Before & After
            </span>
            <div className="w-12 h-px bg-terracotta" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Stunning <span className="italic text-terracotta">Transformations</span>
          </h2>
          <p className="text-charcoal-soft text-lg max-w-2xl mx-auto">
            Real results from our chair. See the artistry that has earned us a
            loyal following.
          </p>
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal ${isVisible ? 'is-visible' : ''}`}>
          {TRANSFORMATIONS.map((t, i) => (
            <div
              key={t.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                <h3 className="font-serif text-lg font-bold mb-1">{t.title}</h3>
                <p className="text-sm text-cream/80">{t.subtitle}</p>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-terracotta/90 text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-4">
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Decorative border on hover */}
              <div className="absolute inset-2 rounded-xl border border-cream/0 group-hover:border-cream/30 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
