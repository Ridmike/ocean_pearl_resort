import Buttons from '../buttons/Buttons'

export default function Hero() {
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1605378258068-ed078aa26b6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tJTIwd2luZG93JTIwdmlld3xlbnwwfDB8MHx8fDA%3D" alt="Hero Image" className='w-full h-screen'/>
        <div className='bg-black/40 absolute inset-0 ' />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Our <span className="italic text-[#a48e60]">Rooms & Suites</span>
          </p>
          <p className="text-gray-200 max-w-2xl mx-auto text-center italic">
            Experience the pinnacle of luxury with our carefully curated selection of rooms, 
            each designed to provide an unforgettable stay.
          </p> 
        </div>
    </div>
  )
}
