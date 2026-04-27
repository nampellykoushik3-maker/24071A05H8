import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-hotel-light min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c53cd453f562?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Experience <span className="text-hotel-gold italic">Unparalleled</span> Luxury
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light drop-shadow-md">
            Discover a world of comfort, elegance, and impeccable service at LuxeStay.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/rooms" 
              className="bg-hotel-gold text-hotel-dark hover:bg-yellow-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2"
            >
              View Our Rooms <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-hotel-dark px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hotel-dark mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-hotel-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center border border-gray-100">
            <div className="bg-hotel-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Star className="h-8 w-8 text-hotel-gold" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5-Star Quality</h3>
            <p className="text-gray-600">Enjoy world-class amenities and premium services designed for your ultimate comfort.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center border border-gray-100">
            <div className="bg-hotel-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="h-8 w-8 text-hotel-gold" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
            <p className="text-gray-600">Your safety is our priority with 24/7 security and top-notch privacy protocols.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center border border-gray-100">
            <div className="bg-hotel-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Clock className="h-8 w-8 text-hotel-gold" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-600">Our dedicated staff is always available to assist you with any needs or inquiries.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
