import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "실시간 협업 도구",
    description: "WebSocket을 활용한 실시간 문서 편집 및 협업 플랫폼. 다중 사용자가 동시에 문서를 편집할 수 있습니다.",
    image: "/collaboration-tool-interface.png",
    tags: ["React", "Next.js", "WebSocket", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI 기반 이미지 에디터",
    description: "머신러닝을 활용한 스마트 이미지 편집 도구. 사용자 친화적인 인터페이스로 전문적인 편집이 가능합니다.",
    image: "/ai-image-editor-interface.jpg",
    tags: ["Next.js", "TensorFlow.js", "Canvas API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "개인 금융 관리 앱",
    description: "수입과 지출을 한눈에 관리할 수 있는 PWA 애플리케이션. 데이터 시각화와 예산 관리 기능을 제공합니다.",
    image: "/finance-management-dashboard.jpg",
    tags: ["React", "PWA", "Chart.js", "IndexedDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">프로젝트</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      코드
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      데모
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
