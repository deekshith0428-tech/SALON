import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceBook from '@/components/ServiceBook';
import Transformations from '@/components/Transformations';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceBook />
        <Transformations />
        <Gallery />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
