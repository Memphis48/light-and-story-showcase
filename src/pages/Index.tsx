import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Booking from '../components/Booking';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
