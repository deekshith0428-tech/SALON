import { useState, type FormEvent } from 'react';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  Calendar, User, MessageSquare,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { SALON, SERVICE_CATEGORIES } from '@/data';

const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) =>
  c.services.map((s) => s.name)
);

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM',
];

export default function Contact() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `*New Appointment Request — ${SALON.name}*%0A%0A`
      + `*Name:* ${form.name}%0A`
      + `*Phone:* ${form.phone}%0A`
      + `*Email:* ${form.email || 'N/A'}%0A`
      + `*Service:* ${form.service}%0A`
      + `*Date:* ${form.date}%0A`
      + `*Time:* ${form.time}%0A`
      + `*Notes:* ${form.notes || 'N/A'}%0A`;

    window.open(
      `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(message).replace(/%2520/g, '%20')}`,
      '_blank'
    );

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '', phone: '', email: '', service: '', date: '', time: '', notes: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-sand-light/20 via-cream to-cream">
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-terracotta/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-terracotta" />
            <span className="text-sm font-semibold text-terracotta tracking-widest uppercase">
              Get in Touch
            </span>
            <div className="w-12 h-px bg-terracotta" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Book Your <span className="italic text-terracotta">Appointment</span>
          </h2>
          <p className="text-charcoal-soft text-lg max-w-2xl mx-auto">
            Schedule your visit in seconds. We'll confirm via WhatsApp and
            take care of the rest.
          </p>
        </div>

        <div ref={ref} className={`grid lg:grid-cols-5 gap-8 reveal ${isVisible ? 'is-visible' : ''}`}>
          {/* Contact info card */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-terracotta to-terracotta-dark text-cream">
              <h3 className="font-serif text-2xl font-bold mb-2">Visit Our Salon</h3>
              <p className="text-cream/80 mb-6 leading-relaxed">
                Walk into a world of warmth and luxury. We can't wait to
                pamper you.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cream/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-cream/60 mb-0.5">Address</div>
                    <div className="text-sm leading-snug">{SALON.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cream/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-cream/60 mb-0.5">Phone</div>
                    <a href={`tel:${SALON.phone.replace(/\s/g, '')}`} className="text-sm hover:underline">
                      {SALON.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cream/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-cream/60 mb-0.5">Email</div>
                    <a href={`mailto:${SALON.email}`} className="text-sm hover:underline">
                      {SALON.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="p-6 rounded-2xl bg-white/60 border border-sand/30">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-terracotta" />
                <h3 className="font-serif text-lg font-bold text-charcoal">Opening Hours</h3>
              </div>
              <div className="space-y-2.5">
                {SALON.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-soft font-medium">{h.day}</span>
                    <span className="text-charcoal">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3">
            <div className="p-6 lg:p-8 rounded-2xl bg-white/70 border border-sand/30 shadow-lg">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-terracotta/10 flex items-center justify-center mb-6 animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-terracotta" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                    Opening WhatsApp...
                  </h3>
                  <p className="text-charcoal-soft">
                    Your appointment request is ready to send. We'll confirm
                    your booking shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream/60 border border-sand/40 text-charcoal placeholder-charcoal-soft/50 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Phone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="Your phone"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream/60 border border-sand/40 text-charcoal placeholder-charcoal-soft/50 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Email (optional)
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream/60 border border-sand/40 text-charcoal placeholder-charcoal-soft/50 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Service *
                    </label>
                    <select
                      id="service-select"
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-sand/40 text-charcoal focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {SERVICE_CATEGORIES.map((cat) => (
                        <optgroup key={cat.id} label={cat.title}>
                          {cat.services.map((s) => (
                            <option key={s.name} value={s.name}>
                              {s.name} — {s.price}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe z-10" />
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream/60 border border-sand/40 text-charcoal focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Preferred Time *
                      </label>
                      <select
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-sand/40 text-charcoal focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select time</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-taupe" />
                      <textarea
                        rows={3}
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        placeholder="Tell us about your hair type, preferences, allergies..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream/60 border border-sand/40 text-charcoal placeholder-charcoal-soft/50 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-terracotta text-cream rounded-xl font-semibold hover:bg-terracotta-dark transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    Send via WhatsApp
                  </button>

                  <p className="text-center text-xs text-charcoal-soft">
                    Your details are sent securely via WhatsApp. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
