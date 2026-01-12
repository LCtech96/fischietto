export default function PodcastSection() {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              DDA&apos;ZUONA
            </h2>
            <p className="text-xl text-gray-600">
              Il podcast dedicato al mondo dello sport
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DDA&apos;ZUONA è il mio podcast dove esploro il mondo dello sport, 
              con interviste, approfondimenti e analisi. Un format dedicato agli 
              appassionati di sport che vogliono andare oltre le notizie.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Prossimamente
              </h3>
              <p className="text-gray-700">
                I contenuti del podcast saranno disponibili a breve. 
                Resta sintonizzato per non perdere gli episodi!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Ascolta su Spotify
              </a>
              <a
                href="#"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Ascolta su Apple Podcasts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
