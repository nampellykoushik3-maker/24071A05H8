import { Hotel, Link as LinkIcon, Share2, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hotel-dark text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Hotel className="h-6 w-6 text-hotel-gold" />
              <span className="font-bold text-xl tracking-wider uppercase text-hotel-gold">LuxeStay</span>
            </div>
            <p className="text-sm text-gray-400">
              Experience luxury and comfort at its finest. Your perfect getaway starts here.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/home" className="hover:text-hotel-gold transition-colors">Home</a></li>
              <li><a href="/rooms" className="hover:text-hotel-gold transition-colors">Rooms</a></li>
              <li><a href="/booking" className="hover:text-hotel-gold transition-colors">Booking</a></li>
              <li><a href="/contact" className="hover:text-hotel-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Luxury Avenue</li>
              <li>Paradise City, PC 90210</li>
              <li>+1 (555) 123-4567</li>
              <li>info@luxestay.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hotel-gold transition-colors"><LinkIcon className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-hotel-gold transition-colors"><Share2 className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-hotel-gold transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-hotel-gold transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LuxeStay Hotels. All rights reserved.</p>
          <p className="mt-2 text-xs">Copyright &copy; 24071A05H8</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
