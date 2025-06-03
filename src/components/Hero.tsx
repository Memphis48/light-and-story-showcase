import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Elena Rodriguez
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Capturing Stories Through Light
          </p>
          <button
            onClick={scrollToPortfolio}
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide"
          >
            Enter Portfolio
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white" size={24} />
      </div>
    </section>
  );
};

export default Hero;