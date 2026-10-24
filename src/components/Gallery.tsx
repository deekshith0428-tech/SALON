import { useReveal } from '@/hooks/useReveal';
import { GALLERY_IMAGES, SALON } from '@/data';

export default function Gallery() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-cream to-sand-light/20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-terracotta" />
            <span className="text-sm font-semibold text-terracotta tracking-widest uppercase">
              Our Work
            </span>
            <div className="w-12 h-px bg-terracotta" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            The <span className="italic text-terracotta">Gallery</span>
          </h2>
          <p className="text-charcoal-soft text-lg max-w-2xl mx-auto">
            A glimpse into the artistry and care that defines every visit to {SALON.name}.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 reveal ${isVisible ? 'is-visible' : ''}`}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                i % 5 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={`overflow-hidden ${i % 5 === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
