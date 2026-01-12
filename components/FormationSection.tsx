export default function FormationSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            La Mia Formazione
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La mia formazione si basa su anni di esperienza pratica nel campo 
                dell&apos;intrattenimento e della comunicazione. Ho sviluppato le mie 
                competenze attraverso:
              </p>
              
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li>
                  <strong>Esperienza radiofonica:</strong> Speaker professionista con 
                  anni di esperienza nel settore radiofonico, sviluppando capacità 
                  comunicative e di intrattenimento.
                </li>
                <li>
                  <strong>Eventi e spettacoli:</strong> Presentazione e conduzione di 
                  centinaia di eventi, da serate private a grandi manifestazioni pubbliche.
                </li>
                <li>
                  <strong>Formazione continua:</strong> Aggiornamento costante sulle 
                  tecniche di comunicazione, public speaking e intrattenimento.
                </li>
                <li>
                  <strong>Coaching e consulenza:</strong> Supporto a privati e aziende 
                  per progetti di comunicazione e format personalizzati.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
