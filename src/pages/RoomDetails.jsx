import RoomCard from '../components/RoomCard';

const mockRooms = [
  {
    id: 'Single',
    type: 'Single Room',
    price: 150,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A cozy and modern room perfect for solo travelers. Features a comfortable queen-size bed and city views.',
    facilities: ['WiFi', 'TV', 'AC']
  },
  {
    id: 'Double',
    type: 'Double Room',
    price: 250,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Spacious room ideal for couples or friends. Includes a king-size bed, a small seating area, and elegant decor.',
    facilities: ['WiFi', 'TV', 'AC', 'Breakfast']
  },
  {
    id: 'Deluxe',
    type: 'Deluxe Room',
    price: 350,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Experience premium comfort with our Deluxe room. Features panoramic views, a mini-bar, and a luxurious bathtub.',
    facilities: ['WiFi', 'TV', 'AC', 'Breakfast', 'Parking']
  },
  {
    id: 'Suite',
    type: 'Luxury Suite',
    price: 500,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Our top-tier suite offering ultimate luxury. Includes a separate living area, private balcony, and exclusive lounge access.',
    facilities: ['WiFi', 'TV', 'AC', 'Breakfast', 'Parking', 'Pool']
  }
];

const RoomDetails = () => {
  return (
    <div className="bg-hotel-light min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-hotel-dark mb-4">Our Rooms & Suites</h1>
          <div className="w-24 h-1 bg-hotel-gold mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our selection of premium accommodations, each designed to provide an unforgettable stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
