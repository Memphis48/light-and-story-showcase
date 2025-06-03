import { useState } from 'react';
import { Calendar, Clock, Camera, Check } from 'lucide-react';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    location: '',
    details: ''
  });

  const services = [
    {
      id: 'portrait',
      title: 'Portrait Session',
      price: '$250',
      duration: '1-2 hours',
      description: 'Professional headshots and lifestyle portraits'
    },
    {
      id: 'event',
      title: 'Event Photography',
      price: '$500',
      duration: '4-8 hours',
      description: 'Weddings, corporate events, and celebrations'
    },
    {
      id: 'commercial',
      title: 'Commercial Shoot',
      price: '$750',
      duration: '2-4 hours',
      description: 'Brand photography and product shoots'
    },
    {
      id: 'fine-art',
      title: 'Fine Art Session',
      price: '$400',
      duration: '2-3 hours',
      description: 'Creative and artistic photography sessions'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setFormData({ ...formData, service: serviceId });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle booking submission here
    alert('Booking request submitted! I\'ll get back to you within 24 hours.');
    setFormData({
      name: '', email: '', phone: '', date: '', time: '',
      service: '', location: '', details: ''
    });
    setSelectedService('');
  };

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">Book Your Session</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to create something beautiful? Choose your photography session and let's capture your story together.
          </p>
        </div>

        {/* Service Selection */}
        <div className="mb-12 animate-fade-in">
          <h3 className="font-serif text-2xl font-semibold mb-8 text-center text-gray-900">Choose Your Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
                className={`cursor-pointer transition-all duration-300 rounded-xl p-6 border-2 ${
                  selectedService === service.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Camera className={`${selectedService === service.id ? 'text-blue-600' : 'text-gray-400'}`} size={24} />
                  {selectedService === service.id && <Check className="text-blue-600" size={20} />}
                </div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">{service.price}</span>
                  <span className="text-gray-500 text-sm">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Studio, outdoor, your venue..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline mr-2" size={16} />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline mr-2" size={16} />
                  Preferred Time *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me more about your vision, special requirements, or any questions you have..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={!selectedService}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed space-x-2"
              >
                <Camera size={20} />
                <span>Request Booking</span>
              </button>
              <p className="mt-4 text-sm text-gray-600">
                I'll respond to your booking request within 24 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;