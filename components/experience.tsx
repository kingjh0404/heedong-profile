import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "2023 - 현재",
    company: "테크 스타트업",
    position: "시니어 프론트엔드 개발자",
    description:
      "웹 애플리케이션 아키텍처 설계 및 개발을 주도하고 있습니다. React와 Next.js를 활용한 대규모 프로젝트를 성공적으로 런칭했습니다.",
    achievements: ["페이지 로딩 속도 40% 개선", "5명의 개발팀 리딩", "CI/CD 파이프라인 구축"],
  },
  {
    period: "2022 - 2023",
    company: "이커머스 기업",
    position: "프론트엔드 개발자",
    description: "쇼핑몰 플랫폼의 사용자 경험을 개선하고 새로운 기능을 개발했습니다.",
    achievements: ["전환율 25% 증가", "반응형 디자인 시스템 구축", "웹 접근성 AA 등급 달성"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">경력</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>

                <p className="leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-medium mb-2">주요 성과</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
