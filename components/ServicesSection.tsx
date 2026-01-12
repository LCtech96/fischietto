import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      title: 'Showman per Eventi',
      description: 'Intrattenimento per serate private, locali, eventi pubblici e festival',
      icon: '🎤',
    },
    {
      title: 'Speaker e Presentatore',
      description: 'Conduzione di eventi, palchi e interventi motivazionali personalizzati',
      icon: '📢',
    },
    {
      title: 'Consulenza e Coaching',
      description: 'Supporto per progetti, format e strategie di comunicazione',
      icon: '💼',
    },
    {
      title: 'Format Personalizzati',
      description: 'Creazione di format su misura per eventi, palco e comunicazione',
      icon: '✨',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          I Miei Servizi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/servizi"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Vedi Prezzi e Dettagli
          </Link>
        </div>
      </div>
    </section>
  )
}
