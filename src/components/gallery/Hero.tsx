export default function Hero() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621293954908-907159247fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl">
          <span className="text-[#a48e60] tracking-[0.5em] font-bold text-xs mb-4 block">Capturing Moments</span>
          <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Our <span className="italic text-[#a48e60]">Gallery</span>
          </p>
          <p className="text-gray-200 max-w-2xl mx-auto text-center italic text-lg font-light leading-relaxed">
            Take a visual tour through the luxurious spaces, exquisite dining experiences, 
            and serene surroundings of Ocean Pearl.
          </p>
        </div>
      </div>
    </div>
  )
}
