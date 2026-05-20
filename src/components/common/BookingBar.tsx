import { useState, useEffect } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingBar() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(() => {
    const saved = localStorage.getItem('booking_checkIn');
    return saved ? new Date(saved) : new Date();
  });
  
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(() => {
    const saved = localStorage.getItem('booking_checkOut');
    return saved ? new Date(saved) : new Date(new Date().setDate(new Date().getDate() + 1));
  });

  const [hotel, setHotel] = useState(() => localStorage.getItem('booking_hotel') || 'OCEAN PEARL NEGAMBO');
  const [nationality, setNationality] = useState(() => localStorage.getItem('booking_nationality') || 'NATIONALITY');
  const [promoCode, setPromoCode] = useState(() => localStorage.getItem('booking_promo') || '');

  useEffect(() => {
    if (checkInDate) localStorage.setItem('booking_checkIn', checkInDate.toISOString());
    if (checkOutDate) localStorage.setItem('booking_checkOut', checkOutDate.toISOString());
    localStorage.setItem('booking_hotel', hotel);
    localStorage.setItem('booking_nationality', nationality);
    localStorage.setItem('booking_promo', promoCode);
  }, [checkInDate, checkOutDate, hotel, nationality, promoCode]);

  const handleCheckInChange = (date: Date | null) => {
    setCheckInDate(date);
    if (date) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);
      setCheckOutDate(nextDay);
    }
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 lg:bottom-30 lg:translate-y-1/2 w-full max-w-7xl px-4 z-30 -bottom-30 -translate-y-1/5">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-6 lg:p-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-15 gap-6 items-end">
          
          {/* Select a Hotel */}
          <div className="lg:col-span-3 space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Select a Hotel</label>
            <div className="relative group">
              <select 
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold appearance-none focus:outline-none focus:ring-2 focus:ring-[#a48e60]/20 focus:border-[#a48e60] transition-all cursor-pointer"
              >
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
                onChange={handleCheckInChange}
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
              <select 
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-semibold appearance-none focus:outline-none focus:ring-2 focus:ring-[#a48e60]/20 focus:border-[#a48e60] transition-all cursor-pointer"
              >
                <option>NATIONALITY</option>
                <option>SRI LANKAN</option>
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
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
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
