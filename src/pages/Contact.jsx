import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
  };

  return (
    <div className="bg-hotel-light min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-hotel-dark mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-hotel-gold mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or special requests? We are here to help make your stay perfect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-hotel-dark mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-dark p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-hotel-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Our Address</h4>
                    <p className="text-gray-600 mt-1">123 Luxury Avenue<br/>Paradise City, PC 90210<br/>United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-hotel-dark p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-hotel-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Number</h4>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-hotel-dark p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-hotel-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Address</h4>
                    <p className="text-gray-600 mt-1">info@luxestay.com<br/>reservations@luxestay.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 h-64 overflow-hidden relative">
              {/* Optional Embedded Map placeholder - using a stylised div for now */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 font-medium">[ Interactive Map Embedded Here ]</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-hotel-dark mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotel-gold focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotel-gold focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotel-gold focus:border-transparent transition-all outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotel-gold focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-hotel-dark text-hotel-gold hover:bg-gray-800 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
