export default function Resume() {
  const education = [
    '부경대학교 정보통신공학전공 석사과정 (재학 중)',
    'ㅇㅇ공사 (2016 - 현재)',
    '해운대구 청년 JOB 카페 파트너 강사 (현직)'
  ]

  const awards = [
    '2024 디지털플랫폼정부 위원회 AI 해커톤 1위 (과학기술정보통신부 장관상)',
    '2024 부산광역시 공공 빅데이터 창업경진대회 (부산광역시장상)',
    '2023 공공기관 AI 활용사례 경진대회 1위 (행정안전부 장관상)',
    '제 12회 산업통상자원부 공공데이터 공모전 (장려상)',
    '제 2회 국회 공공 데이터 경진대회 (장려상)'
  ]

  const certifications = [
    'AWS Solutions Architect Associate',
    'Google Certified Educator Lv2',
    '정보처리기사',
    'SQL 개발자 (SQLD)',
    '데이터분석 준전문가 (ADsP)'
  ]

  const skills = {
    'Languages': ['Python', 'JavaScript', 'SQL'],
    'Infra & DevOps': ['AWS', 'Docker', 'Linux', 'n8n'],
    'Frameworks & Libraries': ['React', 'FastAPI', 'Langchain'],
    'Tools': ['Cursor', 'Gemini CLI', 'Obsidian', 'Claude Code']
  }

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Detailed Resume
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            저의 성장 과정과 역량을 더 자세히 확인해 보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education & Career */}
            <div className="bg-gradient-to-br from-primary-50 to-navy-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                학력 및 경력
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-navy-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                수상 경력
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-yellow-500 mr-3 flex-shrink-0 mt-1">🏆</div>
                    <p className="text-navy-700 text-sm leading-relaxed">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Certifications */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                자격 사항
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-navy-700 font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                기술 스택
              </h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-navy-800 mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white text-navy-700 text-sm font-medium rounded-full shadow-sm border border-navy-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-3 bg-navy-800 text-white rounded-lg font-semibold hover:bg-navy-900 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            상세 이력서 다운로드
          </button>
        </div>
      </div>
    </section>
  )
}