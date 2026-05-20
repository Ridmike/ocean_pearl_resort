export default function Hero() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl">
          <span className="text-[#a48e60] tracking-[0.5em] font-bold text-xs mb-4 block">EXCELLENCE AT YOUR SERVICE</span>
          <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            WorldClass <span className="italic">Facilities</span>
          </p>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            From our serene infinity pool to our award-winning spa, we offer a sanctuary 
            where every detail is designed for your ultimate relaxation.
          </p>
        </div>
      </div>
    </div>
  )
}
