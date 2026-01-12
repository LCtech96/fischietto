import PricingSection from '@/components/PricingSection'

export default function ServiziPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Servizi & Prezzi
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Scopri i miei servizi e le tariffe
        </p>
        <PricingSection />
      </div>
    </div>
  )
}
