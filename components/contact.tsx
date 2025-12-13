"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직을 여기에 추가하세요
    console.log("Form submitted:", formData)
    alert("메시지가 전송되었습니다!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="px-4 py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">연락처</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">연락 정보</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>010-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>서울특별시, 대한민국</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-3">자기소개서</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                저는 새로운 기술을 배우고 도전하는 것을 즐기는 개발자입니다. 팀과 협력하여 문제를 해결하고, 사용자에게
                가치 있는 서비스를 제공하는 것을 목표로 하고 있습니다.
              </p>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  이력서 다운로드
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">메시지 보내기</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  이름
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  이메일
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  메시지
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                전송하기
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
