'use client'

export default function Contact() {
  const handleCopyClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    alert('링크가 복사되었습니다!');
  };

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
            아래 버튼을 눌러 편한 방식으로 연락주세요
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
            {/* Form Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 relative">
              {/* Copy Icon - Top Right */}
              <div
                className="absolute top-3 right-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer p-2 rounded-full hover:bg-white/10"
                onClick={(e) => handleCopyClick(e, 'https://forms.gle/YOUR_FORM_ID')}
                title="링크 복사"
              >
                <i className="fas fa-copy text-white/70 text-xl"></i>
              </div>

              <div className="text-center mb-6">
                <div className="text-primary-300 mb-4">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">문의양식 작성하기</h3>
                <p className="text-gray-300 mb-6">상세한 문의 내용을 📝 구글 폼으로 전달해주세요</p>
              </div>

              {/* Google Form QR Code */}
              <div className="bg-white/20 rounded-lg p-3 mb-4 mx-auto w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center overflow-hidden">
                <img
                  src="/google_form_qr.png"
                  alt="구글 폼 QR 코드"
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <a
                href="https://forms.gle/YOUR_FORM_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all duration-300 text-center"
              >
                구글 폼 작성하기
              </a>
            </div>

            {/* KakaoTalk Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 relative">
              {/* Copy Icon - Top Right */}
              <div
                className="absolute top-3 right-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer p-2 rounded-full hover:bg-white/10"
                onClick={(e) => handleCopyClick(e, 'https://open.kakao.com/o/YOUR_CHAT_ID')}
                title="링크 복사"
              >
                <i className="fas fa-copy text-white/70 text-xl"></i>
              </div>

              <div className="text-center mb-6">
                <div className="text-yellow-300 mb-4">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c5.8 0 10.5 3.7 10.5 8.3 0 4.6-4.7 8.3-10.5 8.3-.6 0-1.2 0-1.8-.1-1.1.7-3.5 2.4-5.6 3.1-.3.1-.6-.1-.6-.4 0-.2 0-.4.1-.5.2-.7.8-2.9.9-3.4C2.3 16.5 1.5 14.5 1.5 11.3 1.5 6.7 6.2 3 12 3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">가볍게 대화 나누기</h3>
                <p className="text-gray-300 mb-6">카카오톡으로 ☕ 가벼운 대화도 환영입니다.</p>
              </div>

              {/* KakaoTalk QR Code */}
              <div className="bg-white rounded-lg p-3 mb-4 mx-auto w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center overflow-hidden">
                <img
                  src="/kakaotalk_qr.png"
                  alt="카카오톡 오픈채팅 QR 코드"
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <a
                href="https://open.kakao.com/o/YOUR_CHAT_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300 text-center"
              >
                카카오톡으로 연락하기
              </a>
            </div>
          </div>

          {/* Email CTA */}
          <div className="max-w-md mx-auto">
            <a
              href="mailto:ssalssi1@gmail.com"
              className="block w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-center"
            >
              <div>이메일 보내기 💌</div>
              <div className="text-sm font-normal opacity-90">(ssalssi1@gmail.com)</div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}