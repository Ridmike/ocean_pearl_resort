
import RoomCard from '../cards/RoomCard'
import { ROOMS_DATA } from '../../data/RoomsData'

export default function RoomdSec() {
  return (
    <section className="py-20 px-4 md:px-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room) => (
            <RoomCard 
              key={room.id}
              image={room.image}
              title={room.title}
              price={room.price}
              description={room.description}
              rating={room.rating}
              amenities={room.amenities}
              onReserve={() => console.log(`Reserving ${room.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
