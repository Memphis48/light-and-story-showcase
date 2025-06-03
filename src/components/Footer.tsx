import { Camera, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera size={24} />
              <span className="font-serif text-xl font-bold">Elena Rodriguez</span>
            </div>
            <p className="text-gray-400">
              Capturing stories through light, one frame at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>elena@elenarodriguezphotography.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram size={16} />
                <span>@elenarod_photography</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Elena Rodriguez Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;