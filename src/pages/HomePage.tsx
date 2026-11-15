import { Seo } from '@/head/Seo'
import { Hero } from '@/features/home/Hero'
import { Intro } from '@/features/home/Intro'
import { ServicesOverview } from '@/features/home/ServicesOverview'
import { SelectedProjects } from '@/features/home/SelectedProjects'
import { WhyChooseUs } from '@/features/home/WhyChooseUs'
import { Process } from '@/features/home/Process'
import { Insights } from '@/features/home/Insights'
import { ContactCTA } from '@/components/common/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Talentix Labs — Software Development & Intelligent Automation"
        description="Talentix Labs builds web applications on the MERN stack, cross-platform mobile apps with Flutter and Firebase, and AI-powered automation — as a technology partner for growing businesses."
        path="/"
      />
      <Hero />
      <Intro />
      <ServicesOverview />
      <SelectedProjects />
      <WhyChooseUs />
      <Process />
      <Insights />
      <ContactCTA />
    </>
  )
}
