import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import LabTests from '@/components/LabTests';
import StartYourJourney from '@/components/StartYourJourney';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <LabTests/>
      <HowItWorks/>
      <Testimonials/>
      <About/>
    </div>
  )
}
