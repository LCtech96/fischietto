'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CategoryCards() {
  const categories = [
    { name: 'sport', image: '/images/Fischio-sport.png' },
    { name: 'moda', image: '/images/Fischio-moda.png' },
    { name: 'food', image: '/images/Fischio-food.png' },
    { name: 'tech', image: '/images/Fischio-tech.png' },
  ]

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (categoryName: string) => {
    setImageErrors((prev) => ({ ...prev, [categoryName]: true }))
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={`/categoria/${category.name}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-square relative bg-gray-800">
                {!imageErrors[category.name] ? (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    priority={index === 0}
                    className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-60"
                    onError={() => handleImageError(category.name)}
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="text-primary-400 text-4xl font-bold opacity-50">
                      {category.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 text-center py-4">
                <h3 className="text-xl font-bold capitalize text-primary-400">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
