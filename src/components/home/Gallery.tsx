import room from '../../assets/view.jpg'
import { Link } from 'react-router-dom'

export default function Gallery() {

  return (
    <section className="py-24 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            <h3 className="text-[#a48e60] uppercase tracking-[0.3em] text-xs font-bold">Visual Journey</h3>
            <h2 className="text-5xl font-serif text-gray-900">Life at the Resort</h2>
          </div>
          <div>
            <Link 
              to="/gallery" 
              className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-[#a48e60] hover:border-[#a48e60] transition-colors duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-150 md:h-175">
          {/* Main Large Image (Sunset/Infinity Pool) */}
          <div className="md:col-span-2 md:row-span-2 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHwxfDB8fHww" 
              alt="Infinity Pool Sunset" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Top Middle (Dining) */}
          <div className="md:col-span-1 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHwxfDB8fHww"
              alt="Fine Dining" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Right Portrait (Spa/Wellness) */}
          <div className="md:col-span-1 md:row-span-2 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1639162942250-db60399fafde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsJTIwc3BhJTIwd2VsbG5lc3N8ZW58MHwxfDB8fHww"
              alt="Spa Treatment" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Bottom Middle (Architecture) */}
          <div className="md:col-span-1 overflow-hidden group">
            <img 
              src={room} 
              alt="Resort Architecture" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
