export default function PricingSection() {
  const pricingCategories = [
    {
      title: 'Showman per serate ed eventi',
      services: [
        { name: 'Serata privata (compleanni, feste, ricorrenze)', price: 'da €250' },
        { name: 'Serata in locali, lidi, stabilimenti (2–3 ore)', price: 'da €500' },
        { name: 'Evento pubblico strutturato', price: 'da €900' },
        { name: 'Grandi eventi, piazze, festival', price: 'da €1.300' },
      ],
    },
    {
      title: 'Speaker per eventi e palchi',
      services: [
        { name: 'Intervento come speaker', price: 'da €500' },
        { name: 'Conduzione completa di eventi e palchi', price: 'da €800' },
        { name: 'Intervento personalizzato (motivazionale, comunicativo, tematico)', price: 'da €1.000' },
      ],
    },
    {
      title: 'Consulenza',
      services: [
        { name: 'Consulenza individuale (1 ora)', price: '€80' },
        { name: 'Consulenza su progetto o format (mezza giornata)', price: 'da €250' },
        { name: 'Consulenza su progetto o format (giornata intera)', price: 'da €500' },
      ],
    },
    {
      title: 'Servizi personalizzati',
      services: [
        { name: 'Format su misura (eventi, palco, comunicazione, intrattenimento)', price: 'preventivo personalizzato' },
        { name: 'Trasferte fuori provincia/regione', price: 'da concordare' },
      ],
    },
  ]

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {pricingCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-b-2 border-primary-600 pb-3">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-gray-200 last:border-b-0"
                  >
                    <p className="text-lg text-gray-700 mb-2 sm:mb-0 sm:flex-1">
                      {service.name}
                    </p>
                    <p className="text-xl font-bold text-primary-600 sm:ml-4 whitespace-nowrap">
                      {service.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Hai bisogno di un preventivo personalizzato?
          </h3>
          <p className="text-gray-700 mb-6">
            Contattami per discutere del tuo progetto e ricevere un preventivo su misura
          </p>
          <a
            href="#"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contattami
          </a>
        </div>
      </div>
    </section>
  )
}
