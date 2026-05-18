import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../../data/TesriminialsData'

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-white/3 to-transparent skew-x-12 transform translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header content */}
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-[#a48e60] uppercase tracking-[0.3em] text-xs font-bold">Testimonials</h3>
          <h2 className="text-5xl font-serif leading-tight">The Guest Experience</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/5 border border-white/10 p-10 flex flex-col hover:bg-white/8 transition-all duration-500 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#a48e60" className="text-[#a48e60]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg font-light leading-relaxed italic text-gray-300 mb-10 grow">
                {testimonial.content}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#a48e60]/30 group-hover:border-[#a48e60] transition-colors duration-300">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm tracking-wide">{testimonial.name}</h4>
                  <p className="text-xs text-[#a48e60] font-medium uppercase tracking-wider">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
