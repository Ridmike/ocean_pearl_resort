import { motion } from 'framer-motion';

const Form = () => {
  return (
    <section className="py-20 bg-[#F9F9FB]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-16 shadow-[0_10px_50px_rgba(0,0,0,0.03)] border border-gray-100"
        >
          <p className="text-3xl font-serif text-gray-900 mb-12">Send a Message</p>
          
          <form className="space-y-10">
            {/* First Name, Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-200 py-2 focus:border-[#B8946E] outline-none transition-colors bg-transparent"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-200 py-2 focus:border-[#B8946E] outline-none transition-colors bg-transparent"
                    placeholder="Enter last name"
                  />
                </div>
            </div>

            {/* Phone, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full border-b border-gray-200 py-2 focus:border-[#B8946E] outline-none transition-colors bg-transparent"
                    placeholder="Enter email"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full border-b border-gray-200 py-2 focus:border-[#B8946E] outline-none transition-colors bg-transparent"
                    placeholder="Enter phone"
                  />
                </div>
            </div>

            {/* Subject */}
            <div className="relative">
                <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-200 py-2 focus:border-[#B8946E] outline-none transition-colors bg-transparent"
                    placeholder="Enter subject"
                  />
                </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase mb-2">
                Message
              </label>
              <textarea
                placeholder='Tell Us ' 
                rows={4}
                className="w-full border-b border-gray-200 py-2 focus:border-[#B8946E] outline-none transition-colors bg-transparent resize-none"
              ></textarea>
            </div>

            <div className="pt-4 mx-auto w-max">
              <button 
                type="submit"
                className="bg-black text-white text-[12px] tracking-[0.2em] font-bold py-5 px-14 hover:bg-[#B8946E] transition-colors duration-300 uppercase"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;
