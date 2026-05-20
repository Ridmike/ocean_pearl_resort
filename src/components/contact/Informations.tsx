import { MapPin, Phone, Mail } from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: <MapPin className="text-[#a48e60]" size={24} />,
    title: 'OUR ADDRESS',
    details: [
      '124 Heritage Estate Road',
      'Galle, Sri Lanka',
    ]
  },
  {
    icon: <Phone className="text-[#a48e60]" size={24} />,
    title: 'RESERVATIONS',
    details: [
      '+91 413 234 5678',
      '+91 987 654 3210'
    ]
  },
  {
    icon: <Mail className="text-[#a48e60]" size={24} />,
    title: 'EMAIL US',
    details: [
      'concierge@luxeheritage.com',
      'events@luxeheritage.com'
    ]
  }
]

export default function Informations() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {CONTACT_INFO.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col py-8 px-6 rounded-xl items-center transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-100"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 border border-gray-100 rounded-xl flex items-center justify-center mb-6 bg-gray-50/50 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110 group-hover:border-[#a48e60]/30">
                {item.icon}
              </div>
              
              {/* Title */}
              <p className="text-xl font-serif font-medium tracking-widest text-gray-900 mb-6 uppercase">
                {item.title}
              </p>
              
              {/* Details */}
              <div className="space-y-1">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-500 font-light tracking-wide leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
