import { Card } from "@/components/ui/card"
import { FileText, Briefcase, Pen, Target, Mail, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThreeDBackground } from "@/components/3d-background"
import { BASE_PATH } from "@/lib/constants"

export default function Page() {
  return (
    <div className="min-h-screen">
      <ThreeDBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 md:py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl w-full">
          {/* Left: Text Content */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    강정희
                  </span>
                </h1>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-primary to-primary"></div>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    3D Web Developer
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed break-keep whitespace-pre-line">
                {`사용자의 흐름과 경험을 깊이 고민하며 웹을 설계하고,
3D 기술과 최신 웹 스택을 활용해
완성도 높은 인터랙션과 효율적인 사용자 경험을 제공하는 것,
그리고 지속적인 학습을 통해 더 나은 웹을 만들어가는 것이 제 목표입니다.`}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-1.5 sm:gap-2 pt-2 sm:pt-4 text-sm sm:text-base text-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="break-all">xhakxh147@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span>010-4793-9109</span>
                </div>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="flex justify-center md:justify-end md:pr-8 order-first md:order-last">
              <div className="relative w-40 h-52 sm:w-48 sm:h-64 md:w-56 md:h-72 overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <Image
                  src={`${BASE_PATH}/jh.png`}
                  alt="프로필 사진"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-8 sm:pt-12 md:pt-20">
            <Link href="/resume" className="group">
              <Card className="p-4 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer h-full border-2 hover:border-primary/50 hover:-translate-y-1">
                <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center">
                  <div className="p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <FileText className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">이력서</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">경력, 학력, 기술 스택</p>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-1 sm:mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/projects" className="group">
              <Card className="p-4 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 cursor-pointer h-full border-2 hover:border-secondary/50 hover:-translate-y-1">
                <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center">
                  <div className="p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300">
                    <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">프로젝트</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">주요 프로젝트 목록</p>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-secondary mt-1 sm:mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/cover-letter" className="group">
              <Card className="p-4 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer h-full border-2 hover:border-primary/50 hover:-translate-y-1">
                <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center">
                  <div className="p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <Pen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">자기소개서</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">저를 소개합니다</p>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-1 sm:mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/goals" className="group">
              <Card className="p-4 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 cursor-pointer h-full border-2 hover:border-secondary/50 hover:-translate-y-1">
                <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center">
                  <div className="p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300">
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">앞으로의 포부</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">비전과 목표</p>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-secondary mt-1 sm:mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
