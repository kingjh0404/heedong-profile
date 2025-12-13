import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">소개</h2>

        <Card className="p-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              안녕하세요. 3년차 프론트엔드 개발자 김민수입니다. 사용자 중심의 인터페이스 설계와 성능 최적화에 관심이
              많으며, 최신 웹 기술을 활용하여 혁신적인 서비스를 만드는 것을 즐깁니다.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">학력</h3>
              <div className="space-y-2">
                <p className="font-medium">서울대학교</p>
                <p className="text-muted-foreground">컴퓨터공학과 학사 • 2018 - 2022</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
