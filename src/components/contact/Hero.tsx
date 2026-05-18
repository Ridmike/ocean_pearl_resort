import Buttons from '../buttons/Buttons'

export default function Hero() {
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1722763529109-2bcb289a47c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWwlMjByb29tJTIwd2luZG93JTIwdmlld3xlbnwwfDB8MHx8fDA%3D" alt="Hero Image" className='w-full h-screen'/>
        <div className='bg-black/40 absolute inset-0 ' />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
            <h1 className='text-5xl font-bold mb-4'>Get In Touch</h1>
            <p className='text-lg mb-8'>We'd love to hear from you! Reach out to us with any questions or inquiries.</p>
        </div>
    </div>
  )
}
