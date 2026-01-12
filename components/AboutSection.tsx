export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Chi Sono
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sono un personaggio pubblico con una passione per l&apos;intrattenimento, 
              la comunicazione e la formazione. La mia esperienza come speaker radiofonico 
              mi ha permesso di sviluppare competenze uniche nel campo della comunicazione 
              e dell&apos;intrattenimento.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Di Cosa Mi Occupo
            </h3>
            
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
              <li>
                <strong>Intrattenimento:</strong> Showman per serate private, eventi pubblici, 
                locali e festival. Creo atmosfere coinvolgenti e memorabili.
              </li>
              <li>
                <strong>Speaker e Presentatore:</strong> Conduzione di eventi, palchi e manifestazioni. 
                Interventi motivazionali e comunicativi su misura.
              </li>
              <li>
                <strong>Consulenza e Coaching:</strong> Supporto per progetti, format e strategie 
                di comunicazione personalizzate.
              </li>
              <li>
                <strong>Podcast:</strong> Creatore e conduttore del podcast DDA&apos;ZUONA, 
                dedicato al mondo dello sport.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
