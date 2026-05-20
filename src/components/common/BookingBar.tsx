import { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingBar() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 1)));

  return (
    <div className="w-full max-w-7xl mx-auto px-4 -mt-16 relative z-30">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-6 lg:p-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-15 gap-6 items-end">
          
          {/* Select a Hotel */}
          <div className="lg:col-span-3 space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Select a Hotel</label>
            <div className="relative group">
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold appearance-none focus:outline-none focus:ring-2 focus:ring-[#a48e60]/20 focus:border-[#a48e60] transition-all cursor-pointer">
                <option>OCEAN PEARL NEGAMBO</option>
                <option>OCEAN PEARL GALLE</option>
                <option>OCEAN PEARL COLOMBO</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-[#a48e60] transition-colors" />
            </div>
          </div>

          {/* Check-In Date */}
          <div className="lg:col-span-3 space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Check-In Date</label>
            <div className="relative group custom-datepicker-wrapper">
              <DatePicker
                selected={checkInDate}
                onChange={(date: Date | null) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a48e60]/20 focus:border-[#a48e60] transition-all cursor-pointer"
                dateFormat="dd MMM yyyy"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-[#a48e60] transition-colors z-10" />
            </div>
          </div>

          {/* Check-Out Date */}
          <div className="lg:col-span-3 space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Check-Out Date</label>
            <div className="relative group custom-datepicker-wrapper">
              <DatePicker
                selected={checkOutDate}
                onChange={(date: Date | null) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate || new Date()}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a48e60]/20 focus:border-[#a48e60] transition-all cursor-pointer"
                dateFormat="dd MMM yyyy"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-[#a48e60] transition-colors z-10" />
            </div>
          </div>

          {/* Nationality */}
          <div className="lg:col-span-2 space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Nationality</label>
            <div className="relative group">
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold appearance-none focus:outline-none focus:ring-2 focus:ring-[#a48e60]/20 focus:border-[#a48e60] transition-all cursor-pointer">
                <option>NATIONALITY</option>
                <option>SRI LANKAN</option>
                <option>INDIAN</option>
                <option>OTHER</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-[#a48e60] transition-colors" />
            </div>
          </div>

          {/* Promo Code */}
          <div className="lg:col-span-2 space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Promo Code</label>
            <input 
              type="text" 
              placeholder="CODE"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a48e60]/20 focus:border-[#a48e60] transition-all"
            />
          </div>

          {/* Book Now Button */}
          <div className="lg:col-span-2 pt-2 lg:pt-0">
            <button className="w-full bg-[#c2a272] hover:bg-[#a48e60] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-[#c2a272]/20 text-xs tracking-[0.2em] transform hover:-translate-y-0.5 active:translate-y-0 uppercase">
              Book Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
