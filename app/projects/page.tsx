"use client"

import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { ResumeBackground } from "@/components/resume-background"
import { BASE_PATH } from "@/lib/constants"

export default function ProjectsPage() {
  const projects = [
    {
      title: "RIST 본원 방문객을 위한 실내 3D 안내 솔루션",
      description: "드론 기반 3D 모델링과 WebGL을 활용한 실시간 인터랙티브 안내 시스템",
      image: `${BASE_PATH}/rist_tour.png`,
      tags: ["React", "JavaScript", "Three.js", "Node.js", "WebGL", "3DGS"],
      link: "https://example.com",
      github: "https://github.com",
      highlights: [
        "외부 3D 모델 기반 탐색",
        "실내 360° 로드뷰 탐험",
        "실시간 경로 안내 기능",
        "목적지 정보 및 편의시설 제공",
      ],
      details: {
        period: "2025.01 - 2025.03",
        team: "3명",
        role: "PM, 개발 및 3D 시각화",
        description:
          "본 프로젝트는 RIST 본원을 방문하는 사용자에게 더 정확하고 직관적인 안내 경험을 제공하기 위해 개발된 키오스크 기반 실내·외 통합 3D 안내 솔루션입니다. 기존 안내판이나 평면 지도보다 이해도가 높고, 사용자가 원하는 목적지까지 빠르게 이동할 수 있도록 3D 시각화·경로 탐색·시설 정보 제공을 하나의 시스템으로 통합한 것이 특징입니다.\n\n외부 공간은 드론 촬영 데이터로부터 Gaussian Splatting 기반의 3D 모델을 생성하여 실제와 가까운 환경을 구현하였으며, WebGL/Three.js를 활용해 키오스크에서도 부드럽게 렌더링되도록 최적화했습니다. 실내 공간은 네이버 로드뷰와 유사한 360° 가상 탐험 방식으로 구성하여, 층별·구역별 이동이 가능하고 사용자가 실내 구조를 직관적으로 파악할 수 있습니다.\n\n키오스크에서는 목적지를 선택하면 실시간 경로 안내 및 이동 시뮬레이션을 통해 실제 이동 루트를 미리 확인할 수 있으며, 건물 내 카페와 같은 편의시설의 위치, 메뉴판 등의 상세 정보도 함께 제공합니다. 이를 통해 방문객은 필요한 정보를 한 번에 얻고, 길찾기 과정에서도 자연스럽게 안내를 받을 수 있습니다.\n\n또한, 다양한 국가의 방문객을 고려하여 영어로도 시스템을 이용할 수 있도록 영어 지원 기능을 제공합니다.\n\n이번 프로젝트는 실내·외 공간을 하나의 3D 플랫폼으로 통합하고, 이를 키오스크 환경에서 누구나 쉽게 사용할 수 있도록 UI/UX를 구성했다는 점에서 의미가 크며, 공간 데이터 처리·3D 그래픽 기술·웹 최적화 등 다양한 기술요소가 적용된 종합적인 안내 시스템입니다.",
        features: [
          "외부 3D 모델 기반 탐색",
          "실내 360° 로드뷰 탐험",
          "실시간 경로 안내 기능",
          "목적지 정보 및 편의시설 제공",
        ],
        techStack: ["React", "JavaScript", "Three.js", "Node.js", "WebGL", "3DGS"],
        achievements: [],
      },
    },
    {
      title: "RIST 실험동 작업 안전 미리보기",
      description: "디지털 트윈 기반 작업 안전 교육 및 AI 안전 관리 시스템",
      image: `${BASE_PATH}/rist.png`,
      tags: ["React", "WebGL", "JavaScript", "Three.js", "Node.js", "3DGS"],
      link: "https://example.com",
      github: "https://github.com",
      highlights: [
        "3D 공간 내 길이 및 거리 측정",
        "작업자 위치 추정 및 시각화",
        "안전 콘텐츠 통합 저작 도구",
        "AI 기반 안전 크래딧 시스템",
      ],
      details: {
        period: "2025.03 - 2024.06",
        team: "3명",
        role: "프론트 엔드 및 3D 시각화 개발 리드",
        description:
          "본 프로젝트는 실험동 공장 작업 환경을 디지털 트윈으로 재현하고, 작업자가 사전에 안전 교육을 받고 작업 계획을 수립할 수 있도록 지원하는 시스템입니다. 드론으로 촬영한 현장 데이터를 3D Gaussian Splatting 기법으로 처리하여 고품질의 3D 모델을 구축하였으며, 주요 기능으로는 실험실 환경의 3D 디지털 트윈 구현, 3D 공간 내 길이 및 거리 측정 기능, 작업자 실시간 위치 정밀 추정 및 시각화 기능이 포함됩니다.\n\n또한, 위험 요소 시각화 및 안전 동선 시뮬레이션을 위해 관리자가 안전 표시, 위험 표시, 경고 메시지 등을 생성, 배치, 수정할 수 있는 저작 도구를 제공하며, 이 저작 도구에는 안전 교육 동영상을 업로드하여 배포할 수 있는 기능이 통합되어 있습니다. 특히, 3D 공간 내 특정 지점에 스티커 형태로 작업 현황이나 위험 사항을 직접 작성하고 부착하여 현장 정보를 직관적으로 공유하는 기능도 구현되었습니다.\n\n이 외에도 작업자가 가상 환경에서 실제 위험 요소를 체험하고 표준 안전 절차를 숙달할 수 있도록 몰입형 작업 시뮬레이션 콘텐츠 개발을 지원하며, 안전 강화를 위한 작업 안전 강화 및 피드백 시스템(안전 크래딧 기능)을 도입하여 TBM 작성 여부를 확인하고, AI 비전 기반으로 작업자의 안전모, 장화, 헬멧 등의 개인 보호 장비 착용 여부를 자동으로 검사하여 크래딧을 부여함으로써 교육생의 안전 의식을 실질적으로 향상시킵니다.",
        features: [
          "3D 공간 내 길이 및 거리 측정",
          "작업자 위치 추정 및 시각화",
          "안전 콘텐츠 통합 저작 도구",
          "AI 기반 안전 크래딧 시스템",
        ],
        techStack: ["React", "WebGL", "JavaScript", "Three.js", "Node.js", "3DGS"],
        achievements: [],
      },
    },
    {
      title: "포스코 포항제철소 3후판 설비 모니터링 시스템 개발",
      description: "제철소 설비의 실시간 상태를 모니터링하는 웹 기반 시스템",
      image: `${BASE_PATH}/industrial-monitoring-system.jpg`,
      tags: ["React", "JavaScript", "WebGL", "WebSocket", "3DGS", "Node.js", "RTSP"],
      link: "https://example.com",
      github: "https://github.com",
      highlights: ["실시간 설비 상태 데이터 시각화", "알람 및 이상 감지 시스템"],
      details: {
        period: "2025.08 - 2025.12",
        team: "2명",
        role: "PM (프론트엔드, 백엔드)\n클라이언트와 직접 소통하며 고객 니즈에 맞춘 개발 진행",
        description:
          "이 프로젝트는 AI 모델이 생성하는 3D 공간 데이터와 다양한 실시간 정보를 웹에서 시각화하는 3D 모니터링 솔루션입니다. 드론으로 촬영한 이미지·영상을 기반으로 구축한 3D 가우시안 스플래팅 모델을 사용하며, AI 모델이 출력하는 데이터는 TCP 기반 실시간 스트림 형태로 시스템에 전달됩니다.\n\n전달된 데이터는 즉시 처리되어 WebSocket을 통해 웹 애플리케이션으로 전송되고, WebGL 렌더링 엔진이 이를 반영해 사용자는 브라우저만으로도 고품질 3D 공간을 실시간 탐색할 수 있습니다.\n\n여기에 3D 데이터 외에도 다양한 실시간 정보가 통합되어 있습니다.\n- RTSP 기반 CCTV 실시간 영상 스트리밍\n- 환경 및 설비 관련 실시간 센서 데이터 표시\n- 위험 상황 발생 시 경보 및 알림 제공\n\n이 모든 요소를 하나의 3D UI에서 확인할 수 있어, 공간 정보가 시간 정보와 결합된 실시간 디지털 트윈 모니터링 환경을 제공합니다.\n\n프로젝트 전반을 통해 AI 모델에서 생성되는 데이터 흐름을 웹으로 자연스럽게 연결하고, WebSocket 기반 실시간 전달, WebGL 기반 고성능 3D 표현까지 구현해 현실 공간을 온라인에서 실시간으로 재현하고 이해할 수 있는 기술적 기반을 마련했습니다.",
        features: ["실시간 설비 상태 데이터 시각화", "알람 및 이상 감지 시스템", "대시보드 커스터마이징"],
        techStack: ["React", "JavaScript", "WebGL", "WebSocket", "3DGS", "Node.js", "RTSP"],
        achievements: [],
      },
    },
    {
      title: "포스코 포항제철소 로봇 관제 HMI 시스템 개발 (POSRX 관제)",
      description: "로봇 관제를 위한 HMI(Human-Machine Interface) 시스템",
      image: `${BASE_PATH}/robot-control-interface.jpg`,
      tags: ["React", "JavaScript", "Node.js", "MQTT", "WebRTC", "RTSP"],
      link: "https://example.com",
      github: "https://github.com",
      highlights: ["Spot (4족 보행 로봇) , 와이어볼 로봇 통합 관제 및 제어", "고도화된 설비 진단 및 데이터 시각화", "통합 HMI 인터페이스"],
      details: {
        period: "2025.7 - 2025.11",
        team: "3명",
        role: "HMI 인터페이스 개발",
        description:
          "본 프로젝트는 포스코 포항제철소의 현장 안전성 및 설비 점검 운영 효율 극대화를 핵심 목표로 하여, 로봇 플랫폼을 통합 관제하고 제어할 수 있는 고성능 웹 기반 HMI 시스템을 개발한 것입니다.\n\n시스템의 주요 성과는 보스턴 다이나믹스의 4족 보행 로봇 Spot의 기능을 웹 환경으로 완벽하게 통합한 데 있습니다. 개발된 웹페이지를 통해 작업자는 현장에 직접 가지 않고도 Spot 로봇을 정밀하게 원격 제어할 수 있으며, 직관적인 인터페이스 내에서 순찰 경로와 점검 항목을 설정하여 자율 미션을 생성하고 부여합니다. Spot 로봇은 미션 수행 중 탑재된 첨단 센서를 가동하여 핵심 설비의 상태를 진단합니다. 특히, 설비의 미세한 온도 변화를 감지하기 위해 설비 온도를 정확하게 측정하며, 이와 함께 열화상 카메라 및 고화질 일반 카메라를 통해 수집된 고품질 이미지와 데이터를 웹 인터페이스로 실시간 전송 및 시각화합니다. 관제 화면에서는 로봇의 현재 배터리 상태, 통신 상태, 그리고 임무 상태(충전 중, 미션 수행 중, 대기 중 등)를 명확하게 표시하여 운영자가 로봇 상태를 한눈에 파악하고 신속하게 대응할 수 있도록 관제 편의성을 극대화했습니다.\n\n또한, 이 HMI 시스템은 와이어볼(Wireball) 로봇까지 관제 대상을 확장하여 다종 로봇 운영의 효율을 높였습니다. 작업자는 웹 화면에서 와이어볼 로봇의 실시간 위치 정보를 정확하게 파악할 수 있으며, 상세한 운영 상태와 배터리 잔량을 포함한 핵심 데이터를 모니터링합니다. 와이어볼 로봇 역시 웹 기반으로 원격 제어가 가능하며, 정기적인 순찰이나 반복 작업을 위해 자동 이동 설정 기능을 제공하여 로봇이 자율적으로 임무를 수행하도록 프로그래밍할 수 있습니다. 궁극적으로 이 시스템은 제철소라는 복잡하고 위험한 환경에서 로봇의 안정적이고 효율적인 운용을 가능하게 하여, 인력의 안전 확보와 설비 예지 보전 역량을 크게 향상시키는 데 기여했습니다.",
        features: ["Spot (4족 보행 로봇) , 와이어볼 로봇 통합 관제 및 제어", "고도화된 설비 진단 및 데이터 시각화", "통합 HMI 인터페이스"],
        techStack: ["React", "JavaScript", "Node.js", "MQTT", "WebRTC", "RTSP"],
        achievements: [],
      },
    },
    {
      title: "사내 그룹웨어 차량 예약 시스템 개발",
      description: "사내 차량 예약 및 관리를 위한 그룹웨어 시스템",
      image: `${BASE_PATH}/vehicle-reservation-system.jpg`,
      tags: ["React", "JavaScript", "Node.js", "flask"],
      link: "https://example.com",
      github: "https://github.com",
      highlights: ["차량 운행 스케줄 조회", "차량 선택 후 목적, 사용 기간, 인원 등 입력하여 예약 및 취소", "로그인 기능", "예약 알림 기능"],
      details: {
        period: "2025.07 - 2025.08",
        team: "2명",
        role: "PM (프론트엔드)",
        description: "이 프로젝트는 사내 임직원들이 공용 차량을 웹에서 간편하게 예약·조회·관리할 수 있도록 만든 차량 예약 시스템입니다. 기존에는 메신저, 전화, 엑셀 등으로 예약으로 인해 중복 예약이나 스케줄 혼선이 자주 발생했지만, 이를 해결하기 위해 하나의 웹 서비스에서 차량 스케줄과 예약 현황을 한눈에 볼 수 있도록 하는 것을 목표로 했습니다.\n\n시스템은 React + Vite 기반의 프론트엔드, Flask 기반 REST API 백엔드, MySQL 데이터베이스로 구성된 전형적인 3계층 구조입니다. 프론트엔드는 캘린더·리스트 기반 UI를 제공하여 사용자가 회사 모든 차량의 전체 운행 스케줄을 직관적으로 확인할 수 있고, 원하는 날짜와 시간대를 선택해 예약을 생성하거나 취소할 수 있도록 구현했습니다. 백엔드는 예약 생성, 수정, 취소, 스케줄 조회, 운행 로그 조회 등의 기능을 RESTful API로 분리해 제공하며, SQLAlchemy ORM을 사용해 MySQL 연동을 모듈화하여 유지보수가 용이한 구조입니다.\n\n운영 기능으로는 각 차량별·기간별 운행 기록을 조회하고 A4 양식으로 출력할 수 있는 기능을 제공하여 총무·관리 부서가 실사용 데이터를 기반으로 차량 운영 현황을 관리할 수 있도록 했습니다. 또한 예약 시간 전에 사용자에게 알림을 보내는 예약 알림 기능(메일·메신저 등)을 확장 포인트로 고려하여 설계해 이후 기능 추가와 서비스 확장이 용이한 구조를 갖춘 시스템입니다.",
        features: ["차량 운행 스케줄 조회", "차량 선택 후 목적, 사용 기간, 인원 등 입력하여 예약 및 취소", "로그인 기능", "예약 알림 기능"],
        techStack: ["React", "JavaScript", "Node.js", "flask"],
        achievements: [],
      },
    },
    {
      title: "포스코 포항제철소 HUSKY 로봇과제 프로그램 개발",
      description: "HUSKY 로봇의 자동화 작업을 위한 제어 프로그램",
      image: `${BASE_PATH}/autonomous-robot-system.jpg`,
      tags: ["React", "JavaScript", "Node.js", "MQTT"],
      link: "https://example.com",
      github: "https://github.com",
      highlights: ["로봇 원격 제어 및 임무 관리", "실시간 위치 및 상황 인식"],
      details: {
        period: "2025.08 - 2025.11",
        team: "3명",
        role: "프론트엔드 개발",
        description: "본 프로젝트는 포스코 포항제철소 현장 점검 및 순찰 임무를 위해 투입된 HUSKY 무인 이동 로봇을 대상으로, 효율적인 운영과 관리를 위한 웹 기반 관제 프로그램을 개발한 것입니다.\n\n시스템의 핵심 기능은 웹을 통한 로봇의 원격 제어 및 자율 임무 설정에 있습니다. 작업자는 현장에 직접 가지 않고도 웹 인터페이스를 통해 HUSKY 로봇을 직접 조종할 수 있으며, 복잡한 순찰 경로 및 작업 지점을 지정하여 미션을 생성하고 로봇에게 부여할 수 있습니다. 로봇은 이 미션을 받아 자율적으로 이동 및 작업을 수행합니다.\n\n관제 시스템의 중요한 성과는 로봇의 실시간 위치 정보 시각화에 있습니다. HUSKY 로봇의 현재 위치는 제철소 현장 지도를 기반으로 하는 2D 환경 내에 정확하게 표시됩니다. 이를 통해 운영자는 로봇이 현장의 어느 지점에서 임무를 수행하고 있는지 한눈에 파악할 수 있어 관제 효율성을 높입니다.\n\n또한, 로봇의 현장 시야를 확보하기 위해 HUSKY 로봇에 탑재된 카메라의 실시간 영상 스트림을 처리했습니다. 이 영상은 카메라의 URL을 직접 받아 웹페이지에 표현함으로써, 운영자는 로봇의 시점에서 현장 상황을 실시간으로 확인하고 필요 시 즉각적인 제어 및 미션 수정이 가능하도록 시스템을 구축했습니다.\n\n궁극적으로 이 HUSKY 로봇 관제 프로그램은 제철소 현장 점검의 안전성과 신속성을 보장하며, 작업자의 현장 투입을 최소화하여 효율적인 무인 시스템 운영 환경을 제공합니다.",
        features: ["로봇 원격 제어 및 임무 관리", "실시간 위치 및 상황 인식"],
        techStack: ["React", "JavaScript", "Node.js", "MQTT"],
        achievements: [],
      },
    },
    {
      title: "포스코 포항제철소 철도 및 용선관제 프로그램 개발",
      description: "제철소 내 철도 및 용선 운행을 관제하는 시스템",
      image: `${BASE_PATH}/railway-control-system.jpg`,
      tags: [ "React","Node.js", "JavaScript", "Three.js"],
      link: "https://example.com",
      github: "https://github.com",
      highlights: ["3D 디지털 트윈 환경 구현 및 시각화", "실시간 데이터 통합", "통합 대시보드 및 실시간 UI 제공", "예측 모델 서빙", "물류 최적화 지원", "데이터 저장 및 관리", "실시간 알림 및 이상 탐지"],
      details: {
        period: "2025.06 - 2026.12",
        team: "5명",
        role: "프론트엔드 개발",
        description: "포스코 포항제철소의 용선(쇳물) 물류 환경을 디지털 트윈으로 재현하여, 열차 기반의 물류 운영을 최적화하고 효율성을 높이기 위한 프로젝트입니다. 실시간 데이터 기반의 열차 배차 최적화를 통해 물류 비용 절감을 목표로 하고 있습니다.\n\n이를 위해 드론으로 촬영한 현장 사진을 Gaussian Splatting 기법으로 처리해 고품질의 3D 모델을 구축하였고, 이를 three.js로 구현하여 실제 공정을 반영한 디지털 트윈 시각화 환경을 만들었습니다. 또한 포스코 사내 EAI 통신과 열차 GPS로부터 데이터를 취득해, 실제 열차의 움직임이 가상 공간에서 실시간으로 재현되도록 구성했습니다. 대시보드 UI는 물류 현황을 한눈에 파악할 수 있도록 설계되었으며, 프런트엔드와 백엔드는 모두 Node.js로 개발되었습니다.\n\n이 시스템은 단순한 시각화를 넘어 용선 생산량 예측 모델과 고로 출선 폐쇄 예측 모델을 서빙하고, 그 결과를 디지털 트윈 및 대시보드에 통합하여 운영 의사결정을 지원합니다. 열차 위치 재현, 모델 서빙, 시각적 UI 제공 기능이 결합되어 배차 최적화에 필요한 핵심 정보를 실시간으로 제공합니다.\n\n높은 실시간성과 대용량 데이터 처리 요구사항을 충족하기 위해, EAI로 수신한 데이터를 Kafka로 발행하여 실시간 스트리밍 처리하고, 원본 데이터는 MongoDB에 저장합니다. 대시보드 표시와 모델 서빙에 필요한 데이터는 MariaDB에 가공 저장하여 조회 효율을 높였습니다. 또한 RESTful API와 WebSocket 통신을 함께 활용해 시각화 화면에 실시간성이 유지되도록 구현했습니다.\n\n결과적으로 열차 기반 물류 운영을 최적화하고 비용을 절감하는 데 기여할 수 있는 디지털 물류 혁신 플랫폼을 구축했습니다.",
        features: ["3D 디지털 트윈 환경 구현 및 시각화", "실시간 데이터 통합", "통합 대시보드 및 실시간 UI 제공", "예측 모델 서빙", "물류 최적화 지원", "데이터 저장 및 관리", "실시간 알림 및 이상 탐지"],
        techStack: ["React", "Node.js", "JavaScript", "Three.js"],
        achievements: [],
      },
    },
    {
      title: "포스코 포항제철소 TLC기차 단열커버 프로그램 개발",
      description: "TLC기차 단열커버 관리 및 모니터링 프로그램",
      image: `${BASE_PATH}/train-insulation-cover.jpg`,
      tags: ["React", "JavaScript", "Node.js", "MongoDB"],
      link: "https://example.com",
      github: "https://github.com",
      highlights: ["실시간 기차 상태 모니터링", "명령 수행 결과 및 운영 시각화", "에러/이벤트 로그 관리", "수동 개폐 제어 기능(Fail-safe)", "날짜별 데이터 조회 기능"],
      details: {
        period: "2025.08 - 2025.12",
        team: "2명",
        role: "프론트엔드 개발",
        description: "본 프로젝트는 기차 단열커버 자동 개폐 시스템의 디지털 운영 환경을 구현하여, 현장 운영자의 업무 효율성과 안전성을 향상시키는 것을 목표로 진행되었습니다. Kafka 기반 실시간 데이터 스트리밍을 통해 기차 위치, 배터리 상태, 통신 품질, 명령 수행 결과 등의 데이터를 수집하고, Node.js 백엔드에서 이를 처리하여 운영에 필요한 정제된 정보를 제공합니다.\n\n프론트엔드는 이러한 데이터를 WebSocket 및 REST API를 통해 수신하여 실시간으로 시각화하는 대시보드를 구축해, 기차 상태를 직관적으로 확인하고 장애를 사전에 예방할 수 있는 사용자 경험을 제공했습니다. 또한 명령 이력 및 이벤트 로그 관리 기능을 포함하여 운영자가 특정 시점의 자동화 결정 과정을 추적하고 검증할 수 있도록 설계되었습니다.\n\n비상 상황 발생 시 자동 제어를 일시 중지하고 운영자가 수동으로 개폐 명령을 내릴 수 있는 Fail-safe 기능을 포함해, 자동화 시스템의 안정성과 신뢰성을 강화했습니다. 더불어 사용자 권한 기반의 설정 기능을 제공하여 보안과 운영 통제를 확보했습니다.\n\n프론트엔드와 백엔드의 안정적인 통합을 통해 운영자는 복잡한 자동 개폐 시스템을 실시간으로 모니터링하고 정확하게 제어할 수 있게 되었으며, 결과적으로 물류 운영 품질 개선과 현장 대응 속도 향상에 기여하는 시스템을 완성했습니다.",
        features: ["실시간 기차 상태 모니터링", "명령 수행 결과 및 운영 시각화", "에러/이벤트 로그 관리", "수동 개폐 제어 기능(Fail-safe)", "날짜별 데이터 조회 기능"],
        techStack: ["React", "JavaScript", "Node.js", "MongoDB"],
        achievements: [],
      },
    },
  ]

  return (
    <div className="flex min-h-screen relative">
      <ResumeBackground />

      <PortfolioSidebar />

      <main className="flex-1 px-3 sm:px-4 py-6 sm:py-8 md:py-12 overflow-y-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">프로젝트</h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">제가 진행한 주요 프로젝트들을 소개합니다.</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(135,206,235,0.6)] hover:border-primary cursor-pointer py-0">
                    {/* Project Image */}
                    <div className="relative h-48 bg-muted">
                      <Image
                        src={project.image || `${BASE_PATH}/placeholder.svg`}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="p-3 flex flex-col flex-1">
                      <h2 className="text-base font-bold mb-1 break-keep">{project.title}</h2>
                      <p className="text-xs text-muted-foreground mb-1.5 break-keep">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2 mb-1.5">
                        {project.tags.slice(0, 5).map((tag) => {
                          return (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            >
                              {tag}
                            </span>
                          )
                        })}
                      </div>

                      {/* Highlights */}
                      <div className="flex-1 mt-2">
                        <h3 className="font-semibold text-sm mb-1">주요 기능</h3>
                        <ul className="space-y-0.5 text-xs text-muted-foreground list-disc list-inside">
                          {project.highlights.slice(0, 2).map((highlight, i) => (
                            <li key={i} className="break-keep">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-[1100px] w-[95vw] sm:w-[90vw] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto custom-scrollbar border-none rounded-sm break-keep p-4 sm:p-6 md:p-10">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {/* 왼쪽: 사진, 기간, 팀 구성, 역할, 주요 기능, 기술 스택 */}
                    <div className="space-y-6">
                      {/* Project Image */}
                      <div className="relative h-48 sm:h-64 md:h-72 bg-muted rounded-lg overflow-hidden">
                        <Image
                          src={project.image || `${BASE_PATH}/placeholder.svg`}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-primary">기간:</span>
                            <span className="break-all">{project.details.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-primary">팀 구성:</span>
                            <span>{project.details.team}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <span className="font-semibold text-primary shrink-0">역할:</span>
                          <span className="whitespace-pre-line break-keep">{project.details.role}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-primary">주요 기능</h3>
                        <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm list-disc list-inside">
                          {project.details.features.map((feature, i) => (
                            <li key={i} className="break-keep">{feature}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-primary">기술 스택</h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.details.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 오른쪽: 프로젝트 제목, 설명, 성과 */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold break-keep">{project.title}</h2>

                      {/* Description */}
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-primary">프로젝트 설명</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line break-keep">{project.details.description}</p>
                      </div>

                      {/* Achievements */}
                      {project.details.achievements.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-primary">성과</h3>
                          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                            {project.details.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
