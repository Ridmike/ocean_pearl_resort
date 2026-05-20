import { FACILITIES_DATA } from '../../data/FacilitiesData';

export default function FacilityList() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-24">
          {FACILITIES_DATA.map((facility, index) => (
            <div 
              key={facility.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Content */}
              <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6 px-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#a48e60]/10 rounded-xl text-[#a48e60]">
                    {facility.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900">{facility.title}</h2>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  {facility.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#a48e60] rounded-full" />
                      <span className="text-sm tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <button className="border-b-2 border-[#a48e60] text-gray-900 font-bold text-xs tracking-[0.2em] pb-1 hover:text-[#a48e60] transition-colors uppercase">
                    Explore Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
