'use client'

export default function Hero() {
  return (
    <section id="home" className="pt-28 bg-gradient-to-br from-navy-50 via-primary-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            AI 기술로 당신의{' '}
            <span className="text-primary-600">문제를 해결</span>합니다
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-navy-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            다수의 장관상 수상으로 증명된 실력. 비전문가를 위한 맞춤형 강의, 멘토링, 프로젝트 개발을 제공하는
            인디개발자 <strong className="text-navy-800">'설코딩랩'</strong>입니다
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              문의하기
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              프로젝트 보기
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}