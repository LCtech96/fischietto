'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CategoriaPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string
  const categoryName = slug || ''

  const [whatsapp, setWhatsapp] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const categories: Record<string, string> = {
    sport: 'Sport',
    moda: 'Moda',
    food: 'Food',
    tech: 'Tech',
  }

  const displayName = categories[categoryName] || categoryName

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validazione numero WhatsApp
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
    if (!whatsapp.trim()) {
      setError('Inserisci il tuo numero WhatsApp')
      setLoading(false)
      return
    }

    if (!phoneRegex.test(whatsapp.replace(/\s/g, ''))) {
      setError('Inserisci un numero WhatsApp valido')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/richieste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoria: categoryName,
          whatsapp: whatsapp.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Errore nell\'invio della richiesta')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nell\'invio della richiesta')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Richiesta Inviata!</h2>
              <p className="text-gray-600">
                Ti contatteremo presto tramite WhatsApp.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Torna alla Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
              {displayName}
            </h1>
            <p className="text-gray-600">
              Inserisci il tuo numero WhatsApp per ricevere maggiori informazioni
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                Numero WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+39 123 456 7890"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Invio in corso...' : 'Invia richiesta di maggiori info'}
            </button>

            <Link
              href="/"
              className="block text-center text-gray-600 hover:text-primary-600 transition text-sm"
            >
              ← Torna alla Home
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
