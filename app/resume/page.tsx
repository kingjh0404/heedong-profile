"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { ResumeBackground } from "@/components/resume-background"
import Image from "next/image"
import { BASE_PATH } from "@/lib/constants"

export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex min-h-screen">
      <ResumeBackground />
      <PortfolioSidebar />

      <main className="flex-1 px-3 sm:px-4 py-6 sm:py-8 md:py-12 overflow-y-auto">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Header 간소화 */}
          <div className="mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">이력서</h1>
          </div>

          <section className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">프로필</h2>
            <Card className="p-4 sm:p-5 md:p-6">
              {/* 변경: 그리드 비율을 1fr_400px에서 1fr_300px로 변경하여 3D 모델 영역을 조금 줄임 */}
              <div className="grid md:grid-cols-[1fr_300px] gap-4 sm:gap-5 md:gap-6 items-start">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed break-keep whitespace-pre-line">
                    {`저는 프론트엔드 중심의 풀스택 개발자로,

React, Node.js, TypeScript, JavaScript를 기반으로 산업 현장의 니즈를 반영한 웹 애플리케이션을 개발해왔습니다.

특히 Three.js(WebGL)·Babylon.js를 활용한 고성능 3D 웹 프론트엔드에 강점을 가지고 있으며,

NeRF·3D Gaussian Splatting으로 생성된 대규모 3D 모델을 웹에 통합해 몰입감 있는 인터랙션을 구현했습니다.

또한 3D 렌더링 최적화(LOD, 메쉬·텍스처 최적화)와

WebSocket·WebRTC 기반 실시간 데이터 및 영상 스트리밍을 3D 환경에 결합하여

디지털 트윈 기반의 실시간 시각화 경험을 제공했습니다.`}
                  </p>
                </div>
                <div className="flex justify-center md:justify-end h-[250px] sm:h-[300px] md:h-[380px] order-first md:order-last">
                  <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-none h-full rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src={`${BASE_PATH}/jh2.png`}
                      alt="프로필 사진"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">경력</h2>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="border-l-4 border-primary pl-3 sm:pl-4 md:pl-6 py-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 break-keep">센싱플러스 솔루션 사업부 3D 웹 개발자 및 로봇 관제 웹 개발자</h3>
                <p className="text-xs sm:text-sm text-primary mb-1 sm:mb-2">2025.6 - 현재</p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-keep">
                  드론 기반 3D 모델링을 바탕으로 관제소 모델 내에 실시간 데이터 시각화 및 로봇 관제 시스템 개발
                </p>
              </div>

              <div className="border-l-4 border-primary pl-3 sm:pl-4 md:pl-6 py-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 break-keep">센싱플러스 디지털트윈팀 3D 웹 개발자</h3>
                <p className="text-xs sm:text-sm text-primary mb-1 sm:mb-2">2025.03 - 2025.6</p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-keep">Three.js/WebGL 기반 3D 시각화 개발, 디지털 트윈 플랫폼 구축</p>
              </div>

              <div className="border-l-4 border-primary pl-3 sm:pl-4 md:pl-6 py-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 break-keep">센싱플러스 디지털트윈팀 인턴십</h3>
                <p className="text-xs sm:text-sm text-primary mb-1 sm:mb-2">2024.12 - 2025.02</p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-keep">3D 웹 개발 및 프로토타입 구현</p>
              </div>
            </div>
          </section>

          <section className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">학력</h2>
            <div className="border-l-4 border-primary pl-3 sm:pl-4 md:pl-6 py-2">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 break-keep">한동대학교 (Handong Global University)</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-1 sm:mb-2">2021 - 2025 (졸업)</p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-keep">전산전자공학부 (AI · 컴퓨터공학 심화전공)</p>
            </div>
          </section>

          <section className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center">
              Skills
              <div className="h-1 w-12 sm:w-16 md:w-20 bg-primary ml-2 sm:ml-3 md:ml-4 rounded-full"></div>
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Language */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 border-l-4 border-primary pl-2 sm:pl-3">Language</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Javascript</span>
                    <span className="ml-2 sm:ml-3 text-xs">상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Python</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>TypeScript</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>C</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>C++</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                </div>
              </div>

              {/* Library */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 border-l-4 border-primary pl-2 sm:pl-3">Library</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>React</span>
                    <span className="ml-2 sm:ml-3 text-xs">상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>zustand</span>
                    <span className="ml-2 sm:ml-3 text-xs">상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>three.js</span>
                    <span className="ml-2 sm:ml-3 text-xs">상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>OpenCV</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>scss</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                </div>
              </div>

              {/* Framework */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 border-l-4 border-primary pl-2 sm:pl-3">Framework</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Node.js</span>
                    <span className="ml-2 sm:ml-3 text-xs">상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Express.js</span>
                    <span className="ml-2 sm:ml-3 text-xs">중상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>REST API</span>
                    <span className="ml-2 sm:ml-3 text-xs">중상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Next.js</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>flask</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 border-l-4 border-primary pl-2 sm:pl-3">Tools</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Cursor</span>
                    <span className="ml-2 sm:ml-3 text-xs">상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Jira</span>
                    <span className="ml-2 sm:ml-3 text-xs">상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[110px] sm:min-w-[140px]">
                    <span>Confluence</span>
                    <span className="ml-2 sm:ml-3 text-xs">상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Git</span>
                    <span className="ml-2 sm:ml-3 text-xs">중상</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[110px] sm:min-w-[140px]">
                    <span>Notion</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>Figma</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs sm:text-sm font-medium flex items-center justify-between min-w-[100px] sm:min-w-[120px]">
                    <span>GitLab</span>
                    <span className="ml-2 sm:ml-3 text-xs">중</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">자격증</h2>
            <Card className="p-4 sm:p-5 md:p-6">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-sm sm:text-base font-medium">오픽 (OPIc) IM2</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">2025.01</span>
                </li>
              </ul>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
