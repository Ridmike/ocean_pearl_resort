import Hero from '../components/facilities/Hero';
import FacilityList from '../components/facilities/FacilityList';

export default function Facilities() {
  return (
    <div className="">
      <Hero />
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-[0.4em] font-bold text-[#a48e60] mb-4 uppercase">The Experience</p>
          <p className="text-3xl md:text-4xl font-serif text-gray-900 max-w-2xl mx-auto italic">
            "We provide the finest amenities and services to ensure your stay with us is nothing short of perfect."
          </p>
        </div>
      </div>
      <FacilityList />
    </div>
  );
}
