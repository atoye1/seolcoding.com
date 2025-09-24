'use client'

export default function Projects() {
  const projects = [
    {
      title: 'AI 비서관들',
      problem: '매일 수십 건의 동일한 민원 전화를 응대하느라 핵심 업무에 집중하기 어려웠습니다.',
      solution: '자주 묻는 질문 100가지를 학습한 AI 챗봇을 개발하여 24시간 자동으로 답변하는 시스템을 구축했습니다.',
      result: '단순 문의 응대 시간이 80% 감소했으며, 직원들은 고차원적인 문제 해결에 더 집중할 수 있게 되었습니다.',
      tags: ['AI 챗봇', '자연어처리', '업무 자동화'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: '부산 AI AUDIO',
      problem: '부산의 주요 관광지에 대한 음성 안내가 부족하여 외국인 관광객들의 불편함이 컸습니다.',
      solution: 'AI 음성 합성 기술을 활용해 주요 관광 명소 50곳의 안내 콘텐츠를 다국어로 자동 생성하고, 스마트폰으로 들을 수 있는 서비스를 만들었습니다.',
      result: '별도 장비 없이 누구나 고품질의 관광 안내를 받을 수 있게 되었고, 관광 편의성이 크게 증대되었습니다.',
      tags: ['AI 음성합성', '관광', '다국어 지원'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: '데이터 도깨비',
      problem: '여러 부서에 흩어져 있는 엑셀 데이터를 매번 취합하고 보고서를 만드는 데 하루 평균 2시간 이상이 소요되었습니다.',
      solution: '각 부서의 데이터를 자동으로 취합하여 보고서 양식에 맞춰 시각화해주는 자동화 대시보드를 구축했습니다.',
      result: '버튼 클릭 한 번으로 1분 안에 보고서가 완성되어, 월 40시간 이상의 업무 시간을 절약했습니다.',
      tags: ['데이터 자동화', '대시보드', '업무 효율화'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'AI 컴쌤',
      problem: '디지털 기기 사용에 어려움을 겪는 어르신들을 위한 쉽고 직관적인 교육 자료가 부족했습니다.',
      solution: '어르신들의 질문에 음성으로 답해주고, 스마트폰 화면에 사용법을 시각적으로 안내해주는 AI 컴퓨터 선생님 앱을 개발했습니다.',
      result: '디지털 정보 격차 해소에 기여하여, 500명 이상의 어르신이 성공적으로 스마트폰 활용법을 익혔습니다.',
      tags: ['디지털 교육', '음성 인식', '시니어 친화'],
      color: 'from-pink-500 to-rose-600'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            문제 해결 사례
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            기술로 만들어낸 실질적인 변화들입니다
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${project.color} p-1 hover:shadow-2xl transition-all duration-300`}
            >
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-2/3 space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-navy-900 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                          문제
                        </h4>
                        <p className="text-navy-600 text-sm leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-navy-900 flex items-center">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          해결
                        </h4>
                        <p className="text-navy-600 text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-navy-900 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          결과
                        </h4>
                        <p className="text-navy-600 text-sm leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-navy-600 mb-6">
            더 많은 프로젝트 사례와 상세 내용이 궁금하시다면
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            포트폴리오 문의하기
          </button>
        </div>
      </div>
    </section>
  )
}