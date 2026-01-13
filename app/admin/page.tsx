'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Richiesta {
  id: number
  categoria: string
  whatsapp: string
  created_at: string
}

const ADMIN_EMAIL = 'luca@facevoice.ai'
const ADMIN_EMAIL_2 = 'Umberto.fischietto@gmail.com'
const ADMIN_PASSWORD = '123456789Lucailgrande'

export default function AdminPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [richieste, setRichieste] = useState<Richiesta[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    // Verifica se l'utente è già autenticato
    const auth = localStorage.getItem('admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      fetchRichieste()
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (
      (email === ADMIN_EMAIL || email === ADMIN_EMAIL_2) &&
      password === ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true)
      localStorage.setItem('admin_auth', 'true')
      fetchRichieste()
    } else {
      setError('Email o password non corretti')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin_auth')
    setRichieste([])
    setFilter('all')
  }

  const fetchRichieste = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/richieste')
      const data = await response.json()

      if (!response.ok) {
        const errorMsg = data.details || data.error || 'Errore nel caricamento delle richieste'
        throw new Error(errorMsg)
      }

      setRichieste(data.richieste || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nel caricamento')
    } finally {
      setLoading(false)
    }
  }

  const filteredRichieste = filter === 'all' 
    ? richieste 
    : richieste.filter(r => r.categoria === filter)

  const categories = [
    { value: 'all', label: 'Tutte' },
    { value: 'sport', label: 'Sport' },
    { value: 'moda', label: 'Moda' },
    { value: 'food', label: 'Food' },
    { value: 'tech', label: 'Tech' },
  ]

  const categoryCounts = {
    all: richieste.length,
    sport: richieste.filter(r => r.categoria === 'sport').length,
    moda: richieste.filter(r => r.categoria === 'moda').length,
    food: richieste.filter(r => r.categoria === 'food').length,
    tech: richieste.filter(r => r.categoria === 'tech').length,
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Admin Login
            </h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
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
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Accedi
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard Admin - Richieste
              </h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>

            <div className="mb-6 flex gap-4 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    filter === cat.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat.label} ({categoryCounts[cat.value as keyof typeof categoryCounts]})
                </button>
              ))}
            </div>

            <div className="mb-4">
              <button
                onClick={fetchRichieste}
                disabled={loading}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Caricamento...' : 'Aggiorna'}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {loading && richieste.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Caricamento richieste...</p>
              </div>
            ) : filteredRichieste.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Nessuna richiesta trovata</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                        ID
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                        Categoria
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                        WhatsApp
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                        Data
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRichieste.map((richiesta) => (
                      <tr key={richiesta.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {richiesta.id}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <span className="capitalize font-semibold text-primary-600">
                            {richiesta.categoria}
                          </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          <a
                            href={`https://wa.me/${richiesta.whatsapp.replace(/[^0-9+]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:underline"
                          >
                            {richiesta.whatsapp}
                          </a>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {new Date(richiesta.created_at).toLocaleString('it-IT')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
