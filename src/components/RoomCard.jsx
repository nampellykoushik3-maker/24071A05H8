import { Link } from 'react-router-dom';
import { Wifi, Tv, Coffee, Wind, Car, Waves } from 'lucide-react';

const facilityIcons = {
  WiFi: <Wifi className="h-4 w-4" />,
  TV: <Tv className="h-4 w-4" />,
  Breakfast: <Coffee className="h-4 w-4" />,
  AC: <Wind className="h-4 w-4" />,
  Parking: <Car className="h-4 w-4" />,
  Pool: <Waves className="h-4 w-4" />,
};

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.type}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-hotel-dark text-hotel-gold px-4 py-1 rounded-full text-sm font-semibold shadow-md">
          ${room.price} <span className="text-xs font-normal text-gray-300">/ night</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.type}</h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">{room.description}</p>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Facilities</h4>
          <div className="flex flex-wrap gap-2">
            {room.facilities.map((facility, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-hotel-light px-3 py-1 rounded-full text-xs font-medium text-gray-600"
              >
                {facilityIcons[facility]}
                {facility}
              </span>
            ))}
          </div>
        </div>
        
        <Link
          to={`/booking?room=${room.id}`}
          className="block w-full text-center bg-hotel-dark text-hotel-gold hover:bg-gray-800 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
