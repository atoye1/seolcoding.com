'use client'

export default function Services() {
  const services = [
    {
      title: '강의 / 워크숍',
      description: 'AI, 데이터 분석 등 복잡한 IT 개념을 비전공자의 눈높이에 맞춰 기관 및 단체를 대상으로 쉽고 재미있게 전달합니다.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: '프로젝트 개발 / 자문',
      description: '반복적인 수작업 업무, 흩어져 있는 데이터 등 기관의 비효율을 해결하는 맞춤형 프로그램을 직접 개발하고 자문합니다.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: '멘토링 / 컨설팅',
      description: 'IT 기술을 업무에 적용하고 싶지만 막막한 개인 또는 팀에게 실질적인 방향과 해결책을 제시하는 1:1 맞춤형 멘토링을 제공합니다.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            다음과 같은 도움을 드릴 수 있습니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                {service.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              프로젝트 진행 프로세스
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '상담', desc: '문제 파악 및 요구사항 분석' },
              { step: '02', title: '제안', desc: '맞춤형 솔루션 제안서 작성' },
              { step: '03', title: '개발', desc: '프로토타입 개발 및 검증' },
              { step: '04', title: '완성', desc: '최종 완성 및 유지보수' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h4>
                <p className="text-navy-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}