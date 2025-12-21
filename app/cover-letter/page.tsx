"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { ResumeBackground } from "@/components/resume-background"

export default function CoverLetterPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex min-h-screen relative">
      <ResumeBackground />

      <PortfolioSidebar />

      <main className="flex-1 px-4 py-12 overflow-y-auto relative z-10">
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Header */}
          <div className={`mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">자기소개서</h1>
          </div>

          {/* Cover Letter Content */}
          <Card className={`p-8 md:p-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="space-y-8">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground break-keep">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground mb-2">산업 현장에서 확립한 개발 철학</h2>
                  <p>
                    고위험 장비와 작업자가 공존하는 산업 현장에서 소프트웨어는 사람의 안전을 지키고 설비의 효율을 좌우하는 핵심 인터페이스입니다. 지난 1년간 대규모 제철소와 연구소의 산업 현장 프로젝트를 주도하며 이를 현장에서 직접 체감했고, 복잡한 데이터 이면에 담긴 현장의 맥락을 읽어내고 이를 가장 직관적인 형태로 시각화함으로써 사용자가 신뢰할 수 있는 시스템을 만들어가는 개발자로 성장해 왔습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground mb-2">공간적 맥락을 전달하는 3D 시각화</h2>
                  <p>
                    산업 현장의 방대하고 난해한 데이터를 '공간적 맥락'을 직관적으로 전달하는 3D 시각화로 구현했습니다. 3후판 공정 관제 시스템 개발에서 단순 수치 나열이 아닌 3D 공간을 통해 현장의 상황을 즉각적으로 파악할 수 있도록 설계했습니다. 수많은 센서 값과 좌표 데이터가 실시간으로 쏟아지는 환경에서, 2차원적 정보 전달을 넘어 3D 가상 공간 내 객체와 실제 설비 좌표를 정밀하게 동기화하여 현장의 리얼리티를 극대화했고, 실제 설비의 좌표계와 웹 기반 3D 월드 좌표를 오차 없이 매핑했습니다. 또한 데이터 수신 주기로 인한 움직임의 끊김을 보간 애니메이션으로 해소하여 설비 위를 이동하는 자재의 흐름을 자연스럽게 표현했습니다. 그 결과 관리자는 복잡한 수치를 해석하지 않아도 화면만으로 현장의 상태를 직관적으로 파악할 수 있었고, 기술적 완성도가 곧 사용자 편의성으로 이어지는 성과를 만들어낼 수 있었습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground mb-2">프론트엔드를 넘어선 풀스택 개발 경험</h2>
                  <p>
                    시스템 전반의 기술적 난제를 해결하는 과정에 주도적으로 참여하며 프론트엔드를 넘어 풀스택 개발자로 성장했습니다. 비록 1년 차 개발자였지만 단순 유지보수에 머무르지 않고, POSRX 로봇 관제 시스템에서 Spot 로봇과 와이어볼 로봇을 하드웨어와 직접 통신하여 원격 제어 및 관제 기능을 구현했고, 3후판 설비 모니터링 시스템에서는 AI 모델에서 생성되는 TCP 스트림 데이터를 WebSocket을 통해 실시간으로 전달하는 데이터 파이프라인을 설계했습니다. 또한 RTSP CCTV, 센서, 알람 등 이종 실시간 데이터를 하나의 3D UI로 통합하는 구조를 설계하고, 실시간 데이터 처리와 대용량 트래픽을 효율적으로 관리하기 위해 서버 사이드 로직을 설계하고 데이터베이스 쿼리 최적화를 통해 시스템의 전반적인 성능을 개선하는 경험을 쌓았습니다.
                  </p>
                  <p>
                    초저지연 영상 스트리밍 환경을 구축하여 원격 제어의 안전성을 확보했습니다. 원격 제어 환경에서 영상 지연은 곧 안전사고로 이어질 수 있는 치명적인 요소이므로, 일반적인 스트리밍 방식 대신 RTSP(Real-Time Streaming Protocol)와 WebRTC 기술을 도입했습니다. 브라우저 환경에서도 실시간성을 확보할 수 있도록 미디어 서버와의 통신 규격을 최적화하고, 플레이어의 버퍼링 정책을 세밀하게 조정했습니다. 더불어 로봇 상태 제어 명령이 즉각적으로 반영되도록 프론트엔드 UI 이벤트 루프와 백엔드 API 응답 시간을 최적화하여, 사용자가 이질감 없이 장비를 원격으로 제어할 수 있는 시스템을 완성했습니다. 백엔드에서는 WebSocket을 활용한 양방향 통신을 구현하고, 명령 처리 파이프라인을 최적화하여 지연 시간을 최소화했습니다.
                  </p>
                  <p>
                    풀스택 관점에서 시스템을 이해하고 개선해 나가며 지속적으로 성장했습니다. 낯선 통신 프로토콜과 그래픽 기술을 익히기 위해 기술 문서를 깊이 파고들었고, 하드웨어 엔지니어들과의 지속적인 협업을 통해 임베디드 시스템의 특성을 이해하고자 노력했습니다. 프론트엔드뿐만 아니라 백엔드 영역에서도 RESTful API 설계, 데이터베이스 스키마 최적화 등 풀스택 관점에서 시스템을 이해하고 개선해 나갔습니다. 저에게 '모르는 기술'은 두려움의 대상이 아니라 반드시 해결해야 할 과제였으며, 이러한 가파른 러닝 커브는 제 성장의 가장 큰 원동력이 되었습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground mb-2">프로젝트 관리와 클라이언트 소통</h2>
                  <p>
                    단순 개발자로서가 아닌 PM으로서 클라이언트와 직접 소통하며 프로젝트를 주도적으로 관리했습니다. 3후판 설비 모니터링 시스템과 RIST 본원 3D 안내 솔루션 등 여러 프로젝트에서 PM 역할을 수행하며, 클라이언트의 니즈를 정확히 파악하고 이를 기술적 솔루션으로 전환하는 과정을 경험했습니다. 고객과의 정기적인 미팅을 통해 요구사항을 수집하고 우선순위를 설정했으며, 개발 일정을 계획하고 팀원들과 협업하여 프로젝트를 성공적으로 완수했습니다. 특히 현장의 복잡한 요구사항을 명확한 개발 계획으로 정리하고, 기술적 제약사항과 일정을 고려한 현실적인 솔루션을 제시하여 클라이언트의 신뢰를 얻었습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground mb-2">안전과 신뢰를 우선하는 개발 철학과 포부</h2>
                  <p>
                    개발자가 작성하는 코드 한 줄 한 줄이 현장에서는 작업자의 안전과 직결된다는 책임감을 항상 마음에 새기고 있습니다. 그렇기에 단순히 기능이 동작하는 것에 만족하지 않고, 데이터 흐름의 안정성, 복잡한 정보를 명확히 전달하는 직관성, 그리고 돌발 상황에서도 흔들리지 않는 견고함을 갖춘 소프트웨어를 지향합니다.
                  </p>
                  <p>
                    현장에서 가장 신뢰받는 모니터링 플랫폼을 구축하는 데 기여하고자 합니다. 입사 후에도 사용자의 목소리에 귀 기울이며 기술적 깊이와 사용자 경험의 폭을 동시에 확장해 나가겠습니다. 프론트엔드와 백엔드를 아우르는 풀스택 개발자로서, 방대한 산업 데이터를 의미 있는 정보로 재구성하고, 이를 직관적인 시각화로 구현하며, 동시에 안정적이고 확장 가능한 서버 아키텍처를 설계하겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
