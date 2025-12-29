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
                    프론트엔드와 백엔드를 모두 다루며 현장의 문제를 끝단까지 해결했습니다. POSRX 로봇 관제 시스템에서는 Spot·와이어볼 로봇과 직접 통신해 원격 제어·관제를 구현하고, 반응형 웹 UI/UX를 설계·구현해 어떤 디바이스에서도 제어 동작이 직관적으로 이뤄지도록 만들었습니다. 3후판 설비 모니터링에서는 AI 모델이 생성한 TCP 스트림을 WebSocket으로 전달하는 실시간 파이프라인을 설계했고, RTSP CCTV·센서·알람 등 이종 실시간 데이터를 하나의 3D UI에 통합해 프론트엔드와 백엔드 전 구간에서 안정성과 성능을 검증했습니다.
                  </p>
                  <p>
                    프론트엔드·백엔드 최적화를 병행해 초저지연 제어 환경을 만들었습니다. 특히 프론트엔드 개발자로서, Zustand를 활용한 효율적인 전역 상태 관리와 React 기반 UI 이벤트 루프 및 WebSocket 수신 상태 관리를 세심하게 다듬어 사용자 명령이 즉각적으로 반영되는 제어 환경에 집중했습니다. Vite와 Webpack 경험을 바탕으로 프론트엔드 성능을 주도적으로 최적화했고, RTSP와 WebRTC를 도입해 브라우저에서도 영상의 실시간성을 확보했습니다. 플레이어 버퍼링 정책과 미디어 서버 통신 규격을 세밀히 조정하며 프론트엔드 단 지연을 줄였고, 백엔드 팀과 협업해 명령 처리 파이프라인을 다중 스레드·큐 구조로 재구성하여 시스템 전체 지연을 최소화했습니다.
                  </p>
                  <p>
                    모르는 프로토콜과 그래픽·네트워크 기술을 끝까지 파고들며 사용자 경험에 최적화된 프론트엔드 설계 역량을 키웠습니다. Three.js를 활용한 3D 지도·데이터 시각화로 복잡한 정보를 직관적으로 표현했고, 하드웨어 엔지니어와 협업해 임베디드 특성을 이해한 뒤 React UI에 효율적으로 반영했습니다. 또한 RESTful API 설계와 DB 스키마·쿼리 최적화에도 적극 참여해 프론트엔드 개발자로서 시스템 전반을 이해하고 성능을 개선했으며, 프론트엔드와 백엔드를 모두 아우르는 시야로 러닝 커브를 돌파한 경험이 제 성장의 가장 큰 원동력입니다.
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
