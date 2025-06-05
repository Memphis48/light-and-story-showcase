import { useState } from 'react';
import { Mail, Phone, Instagram, Camera } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to capture your story? I'd love to hear about your vision and bring it to life through photography.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="font-serif text-2xl font-semibold mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 animate-fade-in-delayed hover:translate-x-2 transition-transform duration-300">
                <Mail className="text-gray-600 hover:text-blue-600 transition-colors duration-300" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">nexura@nexuraphotography.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 animate-fade-in-delayed-2 hover:translate-x-2 transition-transform duration-300">
                <Phone className="text-gray-600 hover:text-green-600 transition-colors duration-300" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 animate-fade-in-delayed-3 hover:translate-x-2 transition-transform duration-300">
                <Instagram className="text-gray-600 hover:text-pink-600 transition-colors duration-300" size={24} />
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-gray-600">@nexura_photography</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-12 animate-slide-up-delayed">
              <h3 className="font-serif text-2xl font-semibold mb-6">Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <h4 className="font-semibold mb-2">Portrait Sessions</h4>
                  <p className="text-gray-600 text-sm">Professional headshots and lifestyle portraits</p>
                </div>
                <div className="bg-gray-50 p-4 rounded hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <h4 className="font-semibold mb-2">Event Photography</h4>
                  <p className="text-gray-600 text-sm">Weddings, corporate events, and celebrations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <h4 className="font-semibold mb-2">Commercial Shoots</h4>
                  <p className="text-gray-600 text-sm">Brand photography and product shoots</p>
                </div>
                <div className="bg-gray-50 p-4 rounded hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <h4 className="font-semibold mb-2">Fine Art Prints</h4>
                  <p className="text-gray-600 text-sm">Limited edition prints for collectors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <Camera size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;