'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-900 via-primary-800 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            아이디어를 현실로 만들 준비가 되셨나요?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            강의, 프로젝트, 멘토링 등 어떤 형태의 협업이든 환영합니다.<br />
            아래 버튼을 눌러 편하게 문의 내용을 남겨주세요
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-primary-300 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">이메일</h3>
              <p className="text-gray-300 mb-4">빠른 답변을 원하시면</p>
              <a
                href="mailto:ssalssi1@gmail.com"
                className="text-primary-300 hover:text-primary-200 font-medium transition-colors"
              >
                ssalssi1@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-primary-300 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">카카오톡</h3>
              <p className="text-gray-300 mb-4">편하게 대화하고 싶다면</p>
              <button className="text-primary-300 hover:text-primary-200 font-medium transition-colors">
                카카오톡 문의
              </button>
            </div>

            {/* Schedule */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-primary-300 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">일정 예약</h3>
              <p className="text-gray-300 mb-4">직접 상담을 받고 싶다면</p>
              <button className="text-primary-300 hover:text-primary-200 font-medium transition-colors">
                상담 일정 예약
              </button>
            </div>
          </div>

          {/* Main CTA */}
          <div className="max-w-md mx-auto">
            <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              문의 양식 작성하기
            </button>
          </div>

          {/* Quick Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="text-gray-300">
              <div className="font-semibold text-white mb-1">응답 시간</div>
              <div>보통 24시간 이내</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-white mb-1">상담 방식</div>
              <div>온라인/오프라인 모두 가능</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-white mb-1">비용</div>
              <div>초기 상담 무료</div>
            </div>
          </div>

          {/* Blog Link */}
          <div className="mt-16 pt-8 border-t border-gray-600">
            <p className="text-gray-300 mb-4">
              더 많은 개발 이야기와 인사이트가 궁금하다면
            </p>
            <a
              href="/blog/"
              className="inline-flex items-center text-primary-300 hover:text-primary-200 font-medium transition-colors"
            >
              기술 블로그 보러가기
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}