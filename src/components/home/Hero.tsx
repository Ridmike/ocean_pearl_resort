import hero from '../../assets/hero_img.jpg'
import Buttons from '../buttons/Buttons'

export default function Hero() {
  return (
    <div>
        <img src={hero} alt="Hero Image" className='w-full h-screen'/>
        <div className='bg-black/40 absolute inset-0 ' />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
            <h1 className='text-5xl font-bold mb-4'>Experience Unmatched Luxury</h1>
            <p className='text-lg mb-8'>Where timeless elegance meets modern comfort in the heart of our historic estate</p>
            <div className='flex space-x-4'>
                <Buttons text="Book Now" onClick={() => alert('Booking functionality coming soon!')} variant="primary" />
                <Buttons text="Explore More" onClick={() => alert('Exploration functionality coming soon!')} variant="secondary" />
            </div>
            
        </div>
    </div>
  )
}
