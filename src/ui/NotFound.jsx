'use client'

import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Сторінку не знайдено</h2>
        <p className="text-gray-600 mb-8">
          Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>
        <Link 
          href="/" 
          className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/80 transition-colors"
        >
          Повернутися на головну
        </Link>
      </div>
    </div>
  )
}

export default NotFound 