"use client"

import { Suspense, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Code, Users, Rocket, TrendingUp, Lightbulb, Globe, Network } from "lucide-react"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { ResumeBackground } from "@/components/resume-background"
import { Globe3D } from "@/components/3d-globe"

export default function GoalsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const emphasisPoints = [
    {
      icon: Globe,
      title: "글로벌 확장성",
      description:
        "궁극적으로 제가 배운 기술이 언어와 국경을 넘어, 전 세계 수많은 사용자들의 삶에 긍정적인 변화를 가져오는 것을 목표로 합니다.",
      color: "primary",
    },
    {
      icon: Network,
      title: "국제적 기여",
      description:
        "국제적인 협업과 오픈 소스 활동을 통해 전 세계 개발자 커뮤니티에 기여하고, 기술로 세계의 경계를 허무는 데 동참하겠습니다.",
      color: "secondary",
    },
  ]

  const goals = [
    {
      icon: Code,
      title: "기술적 성장",
      description:
        "최신 프론트엔드 기술과 아키텍처 패턴을 지속적으로 학습하고, 실무에 적용하여 더 나은 개발자로 성장하고자 합니다.",
      timeline: "단기 목표 (6개월-1년)",
      color: "primary",
    },
    {
      icon: Users,
      title: "팀 리더십",
      description:
        "효과적인 커뮤니케이션과 협업을 통해 팀의 생산성을 높이고, 시니어 개발자로서 팀원들의 성장을 돕고 싶습니다.",
      timeline: "중기 목표 (1-3년)",
      color: "secondary",
    },
    {
      icon: Rocket,
      title: "프로덕트 오너십",
      description:
        "사용자 중심의 프로덕트를 설계하고 개발하여, 실질적인 가치를 제공하는 서비스를 만들어내는 것이 목표입니다.",
      timeline: "중기 목표 (1-3년)",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "오픈소스 기여",
      description:
        "개발 커뮤니티에 적극적으로 참여하고, 오픈소스 프로젝트에 기여하여 더 넓은 영향력을 만들고 싶습니다.",
      timeline: "장기 목표 (3-5년)",
      color: "secondary",
    },
    {
      icon: Lightbulb,
      title: "기술 전문가",
      description: "웹 기술의 전문가로 성장하여, 컨퍼런스 발표와 기술 블로그를 통해 지식을 공유하고 싶습니다.",
      timeline: "장기 목표 (3-5년)",
      color: "primary",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <PortfolioSidebar />

      <main className="flex-1 px-4 py-12 overflow-y-auto relative">
        <div className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Page Title */}
          <div className={`mt-6 mb-8 text-center lg:text-left transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">앞으로의 포부</h1>
          </div>

          {/* Header with Globe and Content */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 lg:mb-16 items-start transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* 왼쪽: 지구본 (모바일에서는 제목 다음, 데스크톱에서는 왼쪽) */}
            <div className="w-full h-[280px] md:h-[420px] lg:h-[500px] lg:sticky lg:top-20 order-1 lg:order-1">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-b from-slate-950 to-slate-900 border border-border">
                    <p className="text-muted-foreground">지구본 로딩 중...</p>
                  </div>
                }
              >
                <Globe3D />
              </Suspense>
            </div>

            {/* 오른쪽: 헤더 텍스트 (모바일에서는 지구본 다음, 데스크톱에서는 오른쪽) */}
            <div className="space-y-6 flex flex-col justify-center order-2 lg:order-2 mt-52 lg:mt-0">
              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  저는 끊임없이 배우고 성장하는 개발자로서, 더 나은 사용자 경험을 만들기 위해 계속해서 도전하고 싶습니다. 단순히 코드를 작성하는 데 그치는 것이 아니라, 사용자가 어떤 문제를 겪고 있는지 깊이 이해하고 그 문제를 효과적으로 해결할 수 있는 방법을 찾는 개발자가 되고자 합니다. 이를 위해 최신 기술 트렌드를 꾸준히 연구하고, 실제 프로젝트에 적용하면서 기술적 역량을 넓혀가고 있습니다.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  협업 또한 제가 중요하게 생각하는 가치입니다. 다양한 관점과 아이디어가 모일 때 더 완성도 높은 결과물이 나온다고 믿기 때문에, 팀원들과 소통하고 함께 성장하는 개발자로 발전하고 싶습니다. 기술적인 의견을 나누고, 함께 고민하며, 더 나은 방향을 만들어가는 과정 자체가 개발자로서의 큰 즐거움이기도 합니다.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  또한 저는 커뮤니티와의 연결도 중요하게 생각합니다. 개발자로 성장하는 과정에서 많은 도움을 받은 만큼, 제가 배운 지식과 경험을 다시 공유하고 싶습니다. 오픈소스 프로젝트에 기여하거나, 기술 관련 글과 콘텐츠를 통해 다른 개발자들에게 도움을 줄 수 있다면 큰 의미가 있을 것이라 생각합니다.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  궁극적으로는 기술을 통해 사람들의 삶을 조금이라도 더 편리하고 풍요롭게 만드는 것을 목표로 하고 있습니다. 제가 만든 서비스나 기능이 누군가에게 실제로 도움이 되고, 긍정적인 사용자 경험을 제공할 수 있는 개발자가 되기 위해 앞으로도 꾸준히 배우고 성장해 나가겠습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 세계를 향한 목표 */}
          <div className={`space-y-6 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-bold mb-8">세계를 향한 목표</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {emphasisPoints.map((point, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
                >
                  <div className="flex gap-4">
                    <div
                      className={`p-3 rounded-xl h-fit bg-gradient-to-br ${
                        point.color === "primary"
                          ? "from-primary/20 to-primary/10"
                          : "from-secondary/20 to-secondary/10"
                      }`}
                    >
                      <point.icon
                        className={`h-6 w-6 ${point.color === "primary" ? "text-primary" : "text-secondary"}`}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-bold">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <ResumeBackground />
      </main>
    </div>
  )
}
