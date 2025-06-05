import { Camera, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Camera size={24} className="hover:rotate-12 transition-transform duration-300" />
              <span className="font-serif text-xl font-bold">Nexura</span>
            </div>
            <p className="text-gray-400">
              Capturing stories through light, one frame at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-delayed">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="animate-fade-in-delayed-2">
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <Mail size={16} />
                <span>nexura@nexuraphotography.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <Instagram size={16} />
                <span>@nexura_photography</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Nexura Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;