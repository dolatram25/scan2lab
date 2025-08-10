import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import StartYourJourney from '@/components/StartYourJourney';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <StartYourJourney/>
      <HowItWorks/>
      <Testimonials/>
      <About/>
    </div>
  )
}
