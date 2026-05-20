export default function Hero() {
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1722763529109-2bcb289a47c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWwlMjByb29tJTIwd2luZG93JTIwdmlld3xlbnwwfDB8MHx8fDA%3D" alt="Hero Image" className='w-full h-screen'/>
        <div className='bg-black/60 absolute inset-0 ' />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            Get In <span className="italic text-[#a48e60]">Touch</span>
          </p>
          <p className='text-gray-200 max-w-2xl mx-auto text-center italic text-lg '>We'd love to hear from you! Reach out to us with any questions or inquiries.</p>
        </div>
    </div>
  )
}
