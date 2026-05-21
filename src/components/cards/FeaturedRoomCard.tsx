import Buttons from "../buttons/Buttons";

interface FeaturedRoomCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onViewDetails?: () => void;
}

export default function FeaturedRoomCard({ image, title, description, price }: FeaturedRoomCardProps) {
  return (
    <div className="bg-white group shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Price Tag */}
        <div className="absolute top-4 right-0 bg-white/90 px-4 py-1 text-sm font-medium text-gray-700 shadow-sm">
          {price} / Night
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col grow text-center">
        <h3 className="text-2xl font-serif text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 font-light leading-relaxed mb-8 grow">
          {description}
        </p>
        
        {/* Outline Button */}
        <Buttons text="View Details" variant="cardbtn" />
      </div>
    </div>
  )
}
