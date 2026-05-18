import { Waves, Wifi, Leaf, Utensils, Dumbbell, Car } from 'lucide-react'

const FACILITIES = [
  { id: 1, name: 'Swimming Pool', icon: Waves },
  { id: 2, name: 'Free WiFi', icon: Wifi },
  { id: 3, name: 'Spa & Wellness', icon: Leaf },
  { id: 4, name: 'Restaurant', icon: Utensils },
  { id: 5, name: 'Gym', icon: Dumbbell },
  { id: 6, name: 'Airport Pickup', icon: Car },
]

export default function Facilities() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-2">
            <h3 className="text-[#a48e60] uppercase tracking-widest text-sm font-semibold">World Class</h3>
            <h2 className="text-5xl font-serif text-gray-900 leading-tight">Unrivaled Facilities</h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 font-light leading-relaxed">
              Experience a sanctuary of leisure and productivity, designed to cater to 
              your every desire with seamless attention to detail.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {FACILITIES.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col rounded-lg items-center justify-center p-10 border border-gray-100 hover:bg-gray-50/50 hover:border-gray-500 transition-colors duration-300 group"
            >
              <div className="mb-6">
                <item.icon 
                  size={40} 
                  strokeWidth={1} 
                  className="text-[#a48e60] group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-center text-gray-800 leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
