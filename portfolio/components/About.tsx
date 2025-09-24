export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-navy-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                About Me
              </h2>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-navy-800">
                  설코딩랩 (Seol Coding Lab)
                </h3>
                <p className="text-primary-600 font-medium">
                  IT 기술로 문제를 해결하는 인디개발자
                </p>
              </div>
            </div>

            <p className="text-navy-600 leading-relaxed text-lg">
              공공기관에서의 실무 경험을 통해 비효율적인 반복 업무가 얼마나 많은 시간을 빼앗는지 체감했습니다.
              저는 코딩이 단순히 어려운 기술이 아닌, 이러한 문제를 해결하고 더 가치 있는 일에 집중할 수 있도록
              돕는 강력한 <strong className="text-primary-700">'도구'</strong>라고 믿습니다.
            </p>

            <p className="text-navy-600 leading-relaxed text-lg">
              복잡한 기술을 누구나 쉽게 활용하여 각자의 자리에서 더 나은 변화를 만들 수 있도록 돕는 것이 저의 목표입니다.
            </p>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-navy-900 mb-1">문제 해결 중심</h4>
                <p className="text-navy-600 text-sm">실질적인 문제를 기술로 해결</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl mb-2">👥</div>
                <h4 className="font-semibold text-navy-900 mb-1">비전문가 친화</h4>
                <p className="text-navy-600 text-sm">누구나 이해할 수 있는 설명</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold text-navy-900 mb-1">효율성 극대화</h4>
                <p className="text-navy-600 text-sm">자동화로 업무 효율 개선</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-semibold text-navy-900 mb-1">지속가능 성장</h4>
                <p className="text-navy-600 text-sm">미래를 대비한 솔루션 제공</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="lg:order-first">
            <div className="relative">
              {/* Placeholder for profile image or illustration */}
              <div className="bg-gradient-to-br from-primary-400 to-navy-600 rounded-2xl aspect-square flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <div className="text-xl font-semibold">설코딩랩</div>
                  <div className="text-sm opacity-90">AI Solution Developer</div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-xs text-navy-600">현재 작업 중</div>
                <div className="font-semibold text-navy-900">AI 자동화 프로젝트</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-xs text-navy-600">전문 분야</div>
                <div className="font-semibold text-navy-900">Python • AI • 데이터분석</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">8+</div>
            <div className="text-navy-600">년 경력</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">20+</div>
            <div className="text-navy-600">완료 프로젝트</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">1000+</div>
            <div className="text-navy-600">교육 참여자</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">5</div>
            <div className="text-navy-600">정부 수상</div>
          </div>
        </div>
      </div>
    </section>
  )
}