import { Star, Bed, Wind, Wine, Wifi, Mountain, Bath, Utensils } from 'lucide-react'

interface RoomCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  amenities: string[];
  onReserve?: () => void;
}

// Map amenity strings to icons
const AMENITY_ICONS: Record<string, any> = {
  'King Bed': Bed,
  'Twin Beds': Bed,
  'Balcony': Wind,
  'Mini Bar': Wine,
  'Fiber WiFi': Wifi,
  'WiFi': Wifi,
  'Ocean View': Mountain,
  'City View': Mountain,
  'Jacuzzi': Bath,
  'Rain Shower': Bath,
  'Butler': Utensils,
  'Nespresso': Utensils,
  'Private Bar': Wine,
}

export default function RoomCard({ image, title, price, description, rating, amenities, onReserve }: RoomCardProps) {
  return (
    <div className="bg-white group shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden h-72">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Price Tag */}
        <div className="absolute top-6 left-6 bg-white/95 px-5 py-2 text-[11px] uppercase tracking-widest font-bold text-gray-800 shadow-lg">
          Starting from ${price}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col grow">
        {/* Title and Rating Row */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-serif text-gray-900 leading-tight">{title}</h3>
          <div className="flex gap-0.5 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < rating ? "#a48e60" : "none"} 
                className={i < rating ? "text-[#a48e60]" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 font-light leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>

        {/* Amenities Row */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 border-t border-gray-100 pt-6">
          {amenities.map((amenity) => {
            const Icon = AMENITY_ICONS[amenity] || Wind;
            return (
              <div key={amenity} className="flex items-center gap-2 text-gray-600">
                <Icon size={16} strokeWidth={1.5} />
                <span className="text-[11px] font-medium tracking-wide">{amenity}</span>
              </div>
            )
          })}
        </div>
        
        {/* Reserve Button */}
        <button 
          onClick={onReserve}
          className="w-full py-4 border border-[#a48e60] text-[#a48e60] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#a48e60] hover:text-white transition-all duration-300 transform active:scale-[0.98]"
        >
          Reserve Now
        </button>
      </div>
    </div>
  )
}
