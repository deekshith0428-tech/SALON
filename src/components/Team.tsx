import { Instagram } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { TEAM } from '@/data';

export default function Team() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-cream via-sand-light/20 to-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-terracotta" />
            <span className="text-sm font-semibold text-terracotta tracking-widest uppercase">
              Meet the Artists
            </span>
            <div className="w-12 h-px bg-terracotta" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Our <span className="italic text-terracotta">Expert Team</span>
          </h2>
          <p className="text-charcoal-soft text-lg max-w-2xl mx-auto">
            Talented, passionate and dedicated to making you look your absolute best.
          </p>
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal ${isVisible ? 'is-visible' : ''}`}>
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Specialties overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] px-2 py-1 rounded-full bg-terracotta/80 text-cream backdrop-blur-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-terracotta mb-2">
                {member.role}
              </p>
              <p className="text-sm text-charcoal-soft leading-snug mb-3">
                {member.bio}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-sand/30 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-cream transition-all duration-300 hover:scale-110"
                  aria-label={`${member.name} on Instagram`}
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
