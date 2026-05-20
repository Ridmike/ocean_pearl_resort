import hero from '../../assets/hero_img.jpg'
import Buttons from '../buttons/Buttons'

export default function Hero() {
  return (
    <div>
        <img src={hero} alt="Hero Image" className='w-full h-screen'/>
        <div className='bg-black/40 absolute inset-0 ' />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            Experience Unmatched <span className="italic text-[#a48e60]">Luxury</span>
          </p>
            <p className='text-gray-200 text-lg mx-auto text-center italic mb-8'>Where timeless elegance meets modern comfort in the heart of our historic estate</p>
            <div className='flex space-x-4'>
                <Buttons text="Book Now" onClick={() => alert('Booking functionality coming soon!')} variant="primary" />
                <Buttons text="Explore More" onClick={() => navigation.navigate('/facilities')} variant="secondary" />
            </div>
            
        </div>
    </div>
  )
}
