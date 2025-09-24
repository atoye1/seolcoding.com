'use client'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">설코딩랩</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              AI 기술로 문제를 해결하고, 복잡한 기술을 누구나 쉽게 활용할 수 있도록 돕는 인디개발자입니다.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:ssalssi1@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="/blog/" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 011 1v1m0 0l4 4v10a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  프로젝트
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  문의하기
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block font-medium">이메일</span>
                <a href="mailto:ssalssi1@gmail.com" className="hover:text-primary-400 transition-colors">
                  ssalssi1@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block font-medium">블로그</span>
                <a href="/blog/" className="hover:text-primary-400 transition-colors">
                  seolcoding.com/blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 설코딩랩. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Built with</span>
            <div className="flex items-center space-x-2">
              <span className="text-primary-400 font-medium text-sm">Next.js</span>
              <span className="text-gray-500">•</span>
              <span className="text-primary-400 font-medium text-sm">Tailwind CSS</span>
              <span className="text-gray-500">•</span>
              <span className="text-primary-400 font-medium text-sm">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}