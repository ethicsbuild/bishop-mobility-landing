import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import FounderStory from '@/components/FounderStory'
import ProductDetails from '@/components/ProductDetails'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <FounderStory />
      <ProductDetails />
      <LeadForm />
      <Footer />
    </main>
  )
}