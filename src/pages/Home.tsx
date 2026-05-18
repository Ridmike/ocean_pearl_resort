import Hero from '../components/home/Hero'
import About from '../components/home/About'
import FeaturedSec from '../components/home/FeaturedSec'
import Facilities from '../components/home/Facilities'
import Testimonials from '../components/home/Testimonials'
import Gallery from '../components/home/Gallery'

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <FeaturedSec/>
      <Facilities/>
      <Testimonials/>
      <Gallery/>
    </>
  )
}
