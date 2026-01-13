import Link from 'next/link'

export default function SportPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Pagina Non Disponibile
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Questa pagina è temporaneamente non disponibile.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  )
}
