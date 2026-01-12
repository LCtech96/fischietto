import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import FormationSection from '@/components/FormationSection'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <FormationSection />
      <ServicesSection />
      <VideoSection />
    </div>
  )
}
