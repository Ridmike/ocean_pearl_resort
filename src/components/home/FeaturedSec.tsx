import FeaturedRoomCard from '../cards/FeaturedRoomCard'
import ROOMS from '../../data/FeaturedData'

export default function FeaturedSec() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h3 className="text-[#a48e60] uppercase tracking-widest text-sm font-semibold">Exquisite Stay</h3>
          <h2 className="text-5xl font-serif text-gray-900">Featured Accommodations</h2>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <FeaturedRoomCard 
              key={room.id}
              image={room.image}
              title={room.title}
              description={room.description}
              price={room.price}
              onViewDetails={() => console.log(`Viewing ${room.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
