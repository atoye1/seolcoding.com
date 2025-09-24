export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">설코딩랩</h1>
          <p className="text-xl text-purple-200 mb-8">AI와 함께하는 미래</p>
          <nav className="flex justify-center space-x-8">
            <a href="/blog/" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </a>
            <a href="/deprecated/" className="text-gray-300 hover:text-white transition-colors">
              Previous Version
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              인공지능 솔루션으로 비즈니스를 혁신합니다
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              데이터 기반의 인사이트와 맞춤형 AI 솔루션을 통해
              여러분의 비즈니스가 한 단계 더 발전할 수 있도록 돕겠습니다.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                프로젝트 문의
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                포트폴리오 보기
              </button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">주요 서비스</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI 솔루션 개발</h3>
              <p className="text-gray-300">비즈니스에 특화된 맞춤형 AI 모델 개발</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">데이터 분석</h3>
              <p className="text-gray-300">데이터 기반 인사이트 도출 및 시각화</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">프로세스 자동화</h3>
              <p className="text-gray-300">반복 업무 자동화를 통한 효율성 향상</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400">
          <p>© 2024 설코딩랩. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}