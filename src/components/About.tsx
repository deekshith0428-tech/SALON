import { Sparkles, Award, Heart, Leaf } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { IMAGES, SALON } from '@/data';

const FEATURES = [
  {
    icon: Award,
    title: 'Award-Winning Stylists',
    desc: 'Internationally trained artists with years of mastery.',
  },
  {
    icon: Leaf,
    title: 'Premium Products',
    desc: 'Only the finest, cruelty-free and ammonia-free products.',
  },
  {
    icon: Heart,
    title: 'Personalised Care',
    desc: 'Every service tailored to your unique style and needs.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Experience',
    desc: 'A warm, elegant space designed for total relaxation.',
  },
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sand-light/40 blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center reveal ${isVisible ? 'is-visible' : ''}`}>
          {/* Image collage */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={IMAGES.styling2}
                alt="Stylist at work"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 z-20 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-cream hidden md:block animate-float">
              <img
                src={IMAGES.salon1}
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 z-20 px-6 py-4 bg-terracotta text-cream rounded-2xl shadow-xl">
              <div className="font-serif text-3xl font-bold">15+</div>
              <div className="text-xs tracking-wide uppercase">Years of Trust</div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-terracotta" />
              <span className="text-sm font-semibold text-terracotta tracking-widest uppercase">
                About {SALON.name}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              A sanctuary for
              <br />
              <span className="italic text-terracotta">modern beauty</span>
            </h2>
            <p className="text-charcoal-soft leading-relaxed mb-6 text-lg">
              {SALON.name} was born from a simple belief — that everyone deserves to
              feel beautiful, confident and cared for. Our unisex salon brings
              together master stylists, premium products and a warm, luxurious
              atmosphere under one roof.
            </p>
            <p className="text-charcoal-soft leading-relaxed mb-8">
              From precision cuts and creative colour to bridal makeup and
              advanced skincare, every service is an experience crafted
              exclusively for you.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {FEATURES.map((feature, i) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-sand/30 hover:border-terracotta/30 hover:bg-white transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-charcoal-soft leading-snug">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
