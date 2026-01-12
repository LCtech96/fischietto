import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fischietto</h3>
            <p className="text-gray-400">
              Speaker, Showman, Consulente
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigazione</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sport" className="hover:text-white transition">
                  Sport
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="hover:text-white transition">
                  Servizi & Prezzi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <p className="text-gray-400">
              Per informazioni e preventivi personalizzati
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fischietto. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
