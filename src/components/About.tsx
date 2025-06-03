const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Elena</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
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
            </div>

            {/* Achievements */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/50">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Awards</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    International Photography Award 2023
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Nature Photographer of the Year 2022
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Portrait Excellence Award 2021
                  </li>
                </ul>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/50">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Publications</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    National Geographic
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Outdoor Magazine
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Photography Today
                  </li>
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