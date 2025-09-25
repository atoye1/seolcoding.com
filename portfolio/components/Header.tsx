'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo-removebg.png"
              alt="설코딩랩"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                홈
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                소개
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                서비스
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                프로젝트
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                이력서
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
              >
                문의하기
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy-700 hover:text-primary-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-navy-700 hover:text-primary-600 transition-colors text-base font-medium"
              >
                홈
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-navy-700 hover:text-primary-600 transition-colors text-base font-medium"
              >
                소개
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-navy-700 hover:text-primary-600 transition-colors text-base font-medium"
              >
                서비스
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-navy-700 hover:text-primary-600 transition-colors text-base font-medium"
              >
                프로젝트
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="block w-full text-left px-3 py-2 text-navy-700 hover:text-primary-600 transition-colors text-base font-medium"
              >
                이력서
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-medium mt-2"
              >
                문의하기
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}