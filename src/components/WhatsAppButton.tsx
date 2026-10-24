import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SALON } from '@/data';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultMessage = encodeURIComponent(
    `Hi! I'd like to book an appointment at ${SALON.name}.`
  );

  return (
    <a
      href={`https://wa.me/${SALON.whatsapp}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-green-500/40 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white/20" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[140px]">
        Chat with us
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
