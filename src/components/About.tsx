const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">About Elena</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm Elena Rodriguez, a passionate photographer based in California with over a decade 
                of experience capturing the beauty of our world through my lens. My journey began with 
                a simple camera and an insatiable curiosity about the stories that light can tell.
              </p>
              <p>
                Specializing in nature, portrait, and urban photography, I believe every moment 
                holds a unique narrative waiting to be discovered. My work has been featured in 
                National Geographic, Outdoor Magazine, and various international exhibitions.
              </p>
              <p>
                When I'm not behind the camera, you'll find me hiking mountain trails, exploring 
                hidden urban corners, or planning my next adventure. I believe that the best 
                photographs come from genuine connections—with people, places, and the fleeting 
                moments that make life extraordinary.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Awards</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>International Photography Award 2023</li>
                  <li>Nature Photographer of the Year 2022</li>
                  <li>Portrait Excellence Award 2021</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Publications</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>National Geographic</li>
                  <li>Outdoor Magazine</li>
                  <li>Photography Today</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="animate-zoom-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Elena Rodriguez Portrait"
                className="w-full h-[600px] object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;