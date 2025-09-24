export default function WhyMe() {
  const achievements = [
    {
      title: '과학기술정보통신부 장관상',
      description: '2024 디지털플랫폼정부위원회 AI 해커톤 1위',
      icon: '🏆'
    },
    {
      title: '부산광역시장상',
      description: '2024 공공 빅데이터 창업경진대회 수상',
      icon: '🥇'
    },
    {
      title: '구글 공인 교육전문가',
      description: 'Google Certified Educator (Level 2)',
      icon: '📚'
    }
  ]

  return (
    <section id="why-me" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Why Me?
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            객관적인 성과로 신뢰를 증명합니다
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-navy-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-navy-600">수상 경력</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-navy-600">교육 수료생</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
            <div className="text-navy-600">프로젝트 완료</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-navy-600">고객 만족도</div>
          </div>
        </div>
      </div>
    </section>
  )
}