import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">김민수</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">프론트엔드 개발자</p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            사용자 경험을 최우선으로 생각하며, 창의적이고 효율적인 웹 애플리케이션을 만듭니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="default" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                연락하기
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">
                <FileText className="mr-2 h-4 w-4" />
                프로젝트 보기
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
