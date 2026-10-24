import { Star, Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { REVIEWS } from '@/data';

export default function Reviews() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section id="reviews" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sand-light/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-terracotta" />
            <span className="text-sm font-semibold text-terracotta tracking-widest uppercase">
              Testimonials
            </span>
            <div className="w-12 h-px bg-terracotta" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            What Our <span className="italic text-terracotta">Clients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
              ))}
            </div>
            <span className="text-charcoal-soft text-sm font-medium">
              4.9 / 5 from 500+ reviews
            </span>
          </div>
        </div>

        <div
          ref={ref}
          className={`reviews-marquee overflow-hidden reveal ${isVisible ? 'is-visible' : ''}`}
          aria-label="Client reviews scrolling from right to left"
          role="region"
          tabIndex={0}
        >
          <div className="reviews-marquee-track flex w-max">
            {[false, true].map((duplicate) => (
              <div
                key={duplicate ? 'duplicate' : 'reviews'}
                className="flex shrink-0 gap-6 pr-6"
                aria-hidden={duplicate}
              >
                {REVIEWS.map((review) => (
                  <article
                    key={review.name}
                    className="group relative w-[min(85vw,22rem)] shrink-0 rounded-2xl border border-sand/30 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-xl"
                  >
                    <Quote className="absolute right-4 top-4 h-8 w-8 text-sand/40 transition-colors group-hover:text-terracotta/20" />

                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-sand">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal">{review.name}</h4>
                        <span className="text-xs text-charcoal-soft">{review.service}</span>
                      </div>
                    </div>

                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-terracotta text-terracotta" />
                      ))}
                    </div>

                    <p className="text-sm italic leading-relaxed text-charcoal-soft">
                      "{review.text}"
                    </p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
