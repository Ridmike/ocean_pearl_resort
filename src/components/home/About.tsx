import hero from '../../assets/hero_img.jpg'
import room from '../../assets/view.jpg'
import Buttons from '../buttons/Buttons'

export default function About() {
  return (
    <div id='about' className="py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-[#a48e60] uppercase tracking-widest text-sm font-semibold">Our Heritage</h3>
            <h2 className="text-5xl font-serif text-gray-900 leading-tight">A Legacy of Excellence</h2>
          </div>
          
          <div className="space-y-4 text-gray-600 leading-relaxed font-light">
            <p>
              Founded on the principles of refined hospitality and architectural
              grandeur, Ocean Pearl Resort has been a beacon of
              sophistication for over a century. Our storied halls have hosted
              royalty, visionaries, and those who seek the extraordinary.
            </p>
            <p>
              Every detail, from the hand-carved mahogany panels to the
              curated contemporary art collection, tells a story of a legacy
              preserved and a future reimagined. We invite you to become
              part of our continuing history.
            </p>
          </div>

          <div className="pt-4">
            <Buttons href="#" text="Learn More" variant="navtext" />
          </div>
        </div>

        {/* Right Side: Image Composition */}
        <div className="relative flex justify-center items-center h-125 md:h-150">
          {/* Main Large Image */}
          <div className="w-2/3 h-full overflow-hidden shadow-2xl rounded-sm">
            <img 
              src={room} 
              alt="Luxury Room" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top Right Smaller Image */}
          <div className="absolute top-10 -right-4 w-50 h-37 shadow-xl border-2 border-white rounded-sm overflow-hidden hidden md:block">
            <img 
              src={hero} 
              alt="Interior Detail" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom Right Overlapping Image */}
          <div className="absolute bottom-10 right-4 w-62 h-45 shadow-xl border-2 border-white rounded-sm overflow-hidden">
            <img 
              src={hero} 
              alt="Hotel Balcony" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
