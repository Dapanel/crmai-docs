import type { Locale } from "@/locales";

type SeoCopy = { title: string; description: string };

export const homeSeoCopy: Record<Locale, SeoCopy> = {
  en: {
    title: "CRMAI Help Center | Setup and Usage Guide",
    description:
      "Find CRMAI guides for AI agents, customer conversations, channel connections, billing, and workspace settings.",
  },
  id: {
    title: "Pusat Bantuan CRMAI | Panduan Pengaturan dan Penggunaan",
    description:
      "Temukan panduan CRMAI untuk menyiapkan workspace, mengelola percakapan, menghubungkan kanal, dan menggunakan fitur AI.",
  },
  ja: {
    title: "CRMAIヘルプセンター｜設定・利用ガイド",
    description:
      "CRMAIのAIエージェント、顧客との会話、チャネル接続、請求、ワークスペース設定に関するガイドを確認できます。",
  },
  ko: {
    title: "CRMAI 도움말 센터 | 설정 및 사용 가이드",
    description:
      "CRMAI의 AI 에이전트, 고객 대화, 채널 연결, 요금 및 워크스페이스 설정 가이드를 확인하세요.",
  },
};

export const articleSeoCopy: Record<string, Partial<Record<Locale, SeoCopy>>> = {
  "facebook-messenger": {
    en: {
      title: "Facebook Messenger - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to connect Facebook Messenger for customer conversations with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Facebook Messenger - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Pelajari cara menghubungkan Facebook Messenger untuk layanan pelanggan menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "Facebook Messenger｜CRMAI公式ガイド",
      description:
        "Facebook Messengerについて、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "Facebook Messenger | CRMAI 사용 가이드",
      description:
        "CRMAI의 Facebook Messenger 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  notifications: {
    en: {
      title: "Notifications - Setup and Usage Guide | CRMAI",
      description:
        "Need to adjust alerts so important customer messages are not missed? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Notifikasi - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Notifikasi? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "通知｜CRMAI公式ガイド",
      description:
        "CRMAIの通知を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "알림 | CRMAI 사용 가이드",
      description:
        "알림 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "language-and-appearance": {
    en: {
      title: "Language and Appearance - Setup and Usage Guide | CRMAI",
      description:
        "Working with Language and Appearance in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Bahasa dan Tampilan - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Bahasa dan Tampilan. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "言語と表示設定｜CRMAI公式ガイド",
      description:
        "言語と表示設定を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "언어 및 화면 설정 | CRMAI 사용 가이드",
      description:
        "언어 및 화면 설정 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "profile-and-password": {
    en: {
      title: "Profile and Password - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on Profile and Password? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Profil dan Kata Sandi | Panduan CRMAI",
      description:
        "Kelola Profil dan Kata Sandi dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "プロフィールとパスワード｜CRMAI公式ガイド",
      description:
        "プロフィールとパスワードの設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "프로필 및 비밀번호 | CRMAI 사용 가이드",
      description:
        "프로필 및 비밀번호 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  stories: {
    en: {
      title: "WhatsApp Stories - Setup and Usage Guide | CRMAI",
      description:
        "Need to prepare and manage WhatsApp Stories for customer engagement? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "WhatsApp Stories - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur WhatsApp Stories? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "WhatsAppストーリー｜CRMAI公式ガイド",
      description:
        "WhatsAppストーリーについて、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "WhatsApp 스토리 | CRMAI 사용 가이드",
      description:
        "CRMAI의 WhatsApp 스토리 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "agent-tools": {
    en: {
      title: "AI Agent Tools - Setup and Usage Guide | CRMAI",
      description:
        "Working with AI Agent Tools in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Alat AI Agent - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Alat AI Agent. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "AIエージェントツール｜CRMAI公式ガイド",
      description:
        "CRMAIのAIエージェントツールを使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "AI 에이전트 도구 | CRMAI 사용 가이드",
      description:
        "AI 에이전트 도구 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  snapshots: {
    en: {
      title: "Agent Snapshots - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on Agent Snapshots? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Snapshot Agen - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola Snapshot Agen dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "エージェントのスナップショット｜CRMAI公式ガイド",
      description:
        "エージェントのスナップショットを正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "에이전트 스냅샷 | CRMAI 사용 가이드",
      description:
        "에이전트 스냅샷 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "emotion-matrix": {
    en: {
      title: "Emotion Matrix - Setup and Usage Guide | CRMAI",
      description:
        "Need to understand how emotion settings affect AI conversations? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Matriks Emosi - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Matriks Emosi? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "感情マトリクス｜CRMAI公式ガイド",
      description:
        "感情マトリクスの設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "감정 매트릭스 | CRMAI 사용 가이드",
      description:
        "감정 매트릭스 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "channel-behaviours": {
    en: {
      title: "Channel Behaviours - Setup and Usage Guide | CRMAI",
      description:
        "Working with Channel Behaviours in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Perilaku Kanal - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Perilaku Kanal. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "チャネル別の動作｜CRMAI公式ガイド",
      description:
        "チャネル別の動作について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "채널별 동작 | CRMAI 사용 가이드",
      description:
        "CRMAI의 채널별 동작 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "setting-and-escalation": {
    en: {
      title: "Agent Settings and Escalation | CRMAI Help Center",
      description:
        "Looking for guidance on Agent Settings and Escalation? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Pengaturan dan Eskalasi | Panduan CRMAI",
      description:
        "Kelola Pengaturan dan Eskalasi dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "設定とエスカレーション｜CRMAI公式ガイド",
      description:
        "CRMAIの設定とエスカレーションを使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "설정 및 에스컬레이션 | CRMAI 사용 가이드",
      description:
        "설정 및 에스컬레이션 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "plans-billing-and-ai-tokens": {
    en: {
      title: "Plans Billing and AI Tokens | CRMAI Help Center",
      description:
        "Need to understand subscriptions, billing and AI token usage? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Paket Tagihan dan Token AI | Panduan CRMAI",
      description:
        "Sedang mengatur Paket Tagihan dan Token AI? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "プラン・請求・AIトークン｜CRMAI公式ガイド",
      description:
        "プラン・請求・AIトークンを正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "요금제·결제·AI 토큰 | CRMAI 사용 가이드",
      description:
        "요금제·결제·AI 토큰 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "cs-support-and-technical-assistance": {
    en: {
      title: "Customer and Technical Support | CRMAI Help Center",
      description:
        "Working with Customer and Technical Support in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Bantuan Pelanggan dan Teknis | Panduan CRMAI",
      description:
        "Mulai dari kebutuhan Bantuan Pelanggan dan Teknis. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "カスタマー・技術サポート｜CRMAI公式ガイド",
      description:
        "カスタマー・技術サポートの設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "고객 및 기술 지원 | CRMAI 사용 가이드",
      description:
        "고객 및 기술 지원 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  analytics: {
    en: {
      title: "Analytics - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to interpret conversation data and team performance with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Analitik - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Pelajari cara membaca data percakapan dan kinerja tim menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "分析機能｜CRMAI公式ガイド",
      description:
        "分析機能について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "분석 | CRMAI 사용 가이드",
      description:
        "CRMAI의 분석 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  reporting: {
    en: {
      title: "Reporting - Setup and Usage Guide | CRMAI",
      description:
        "Need to prepare reports from your team's customer service activity? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Laporan - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Laporan? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "レポート｜CRMAI公式ガイド",
      description:
        "CRMAIのレポートを使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "보고서 | CRMAI 사용 가이드",
      description:
        "보고서 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "division-setup": {
    en: {
      title: "Division Setup - Setup and Usage Guide | CRMAI",
      description:
        "Working with Division Setup in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Pengaturan Divisi - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Pengaturan Divisi. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "部門の設定｜CRMAI公式ガイド",
      description:
        "部門の設定を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "부서 설정 | CRMAI 사용 가이드",
      description:
        "부서 설정 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "user-roles-and-permissions": {
    en: {
      title: "User Roles and Permissions | CRMAI Help Center",
      description:
        "Looking for guidance on User Roles and Permissions? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Peran dan Hak Akses - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola Peran dan Hak Akses dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "ユーザー権限と役割｜CRMAI公式ガイド",
      description:
        "ユーザー権限と役割の設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "사용자 역할 및 권한 | CRMAI 사용 가이드",
      description:
        "사용자 역할 및 권한 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "team-and-division-management": {
    en: {
      title: "Team and Division Management | CRMAI Help Center",
      description:
        "Need to organise members and divisions as your support team grows? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Manajemen Tim dan Divisi | Panduan CRMAI",
      description:
        "Sedang mengatur Manajemen Tim dan Divisi? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "チームと部門の管理｜CRMAI公式ガイド",
      description:
        "チームと部門の管理について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "팀 및 부서 관리 | CRMAI 사용 가이드",
      description:
        "CRMAI의 팀 및 부서 관리 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "team-and-access": {
    en: {
      title: "Team and Access - Setup and Usage Guide | CRMAI",
      description:
        "Working with Team and Access in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Tim dan Hak Akses - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Tim dan Hak Akses. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "チームとアクセス権｜CRMAI公式ガイド",
      description:
        "CRMAIのチームとアクセス権を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "팀 및 접근 권한 | CRMAI 사용 가이드",
      description:
        "팀 및 접근 권한 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "contact-management": {
    en: {
      title: "Contact Management - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on Contact Management? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Manajemen Kontak - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola Manajemen Kontak dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "連絡先の管理｜CRMAI公式ガイド",
      description:
        "連絡先の管理を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "연락처 관리 | CRMAI 사용 가이드",
      description:
        "연락처 관리 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "smart-forms": {
    en: {
      title: "Smart Forms - Setup and Usage Guide | CRMAI",
      description:
        "Need to collect customer details through structured forms? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Formulir Pintar - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Formulir Pintar? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "スマートフォーム｜CRMAI公式ガイド",
      description:
        "スマートフォームの設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "스마트 양식 | CRMAI 사용 가이드",
      description:
        "스마트 양식 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "customer-data": {
    en: {
      title: "Customer Data - Setup and Usage Guide | CRMAI",
      description:
        "Working with Customer Data in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Data Pelanggan - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Data Pelanggan. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "顧客データ｜CRMAI公式ガイド",
      description:
        "顧客データについて、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "고객 데이터 | CRMAI 사용 가이드",
      description:
        "CRMAI의 고객 데이터 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "inbox-tabs-and-ticket-lifecycle": {
    en: {
      title: "Inbox Tabs and Ticket Lifecycle | CRMAI Help Center",
      description:
        "Looking for guidance on Inbox Tabs and Ticket Lifecycle? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Tab Inbox dan Siklus Tiket | Panduan CRMAI",
      description:
        "Kelola Tab Inbox dan Siklus Tiket dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "受信箱タブとチケット管理｜CRMAI公式ガイド",
      description:
        "CRMAIの受信箱タブとチケット管理を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "받은편지함 탭 및 티켓 흐름 | CRMAI 사용 가이드",
      description:
        "받은편지함 탭 및 티켓 흐름 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "ticket-options-header-chat": {
    en: {
      title: "Ticket Options and Chat Header | CRMAI Help Center",
      description:
        "Need to use ticket controls and chat details during support work? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Opsi Tiket dan Header Chat | Panduan CRMAI",
      description:
        "Sedang mengatur Opsi Tiket dan Header Chat? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "チケット設定とチャット画面｜CRMAI公式ガイド",
      description:
        "チケット設定とチャット画面を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "티켓 옵션 및 채팅 헤더 | CRMAI 사용 가이드",
      description:
        "티켓 옵션 및 채팅 헤더 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  settings: {
    en: {
      title: "Settings - Setup and Usage Guide | CRMAI",
      description:
        "Working with Settings in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Pengaturan - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Pengaturan. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "設定｜CRMAI公式ガイド",
      description:
        "設定の設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "설정 | CRMAI 사용 가이드",
      description:
        "설정 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "message-management-and-composer-bar": {
    en: {
      title: "Message Management and Composer | CRMAI Help Center",
      description:
        "Looking for guidance on Message Management and Composer? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Manajemen Pesan dan Kolom Chat | Panduan CRMAI",
      description:
        "Kelola Manajemen Pesan dan Kolom Chat dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "メッセージ管理と入力欄｜CRMAI公式ガイド",
      description:
        "メッセージ管理と入力欄について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "메시지 관리 및 작성창 | CRMAI 사용 가이드",
      description:
        "CRMAI의 메시지 관리 및 작성창 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "shared-inbox": {
    en: {
      title: "Shared Inbox - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to share incoming customer chats across your support team with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Kotak Masuk Bersama - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Pelajari cara membagi percakapan masuk antaranggota tim menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "共有受信箱｜CRMAI公式ガイド",
      description:
        "CRMAIの共有受信箱を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "공유 받은편지함 | CRMAI 사용 가이드",
      description:
        "공유 받은편지함 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "governance-and-autonomy": {
    en: {
      title: "AI Governance and Autonomy | CRMAI Help Center",
      description:
        "Working with AI Governance and Autonomy in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Tata Kelola dan Otonomi AI | Panduan CRMAI",
      description:
        "Mulai dari kebutuhan Tata Kelola dan Otonomi AI. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "AIの管理と自律性｜CRMAI公式ガイド",
      description:
        "AIの管理と自律性を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "AI 거버넌스 및 자율성 | CRMAI 사용 가이드",
      description:
        "AI 거버넌스 및 자율성 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "inbox-and-conversations": {
    en: {
      title: "Inbox and Conversations - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on Inbox and Conversations? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Inbox dan Percakapan - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola Inbox dan Percakapan dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "受信箱と会話｜CRMAI公式ガイド",
      description:
        "受信箱と会話の設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "받은편지함 및 대화 | CRMAI 사용 가이드",
      description:
        "받은편지함 및 대화 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "override-config": {
    en: {
      title: "Override Configuration - Setup and Usage Guide | CRMAI",
      description:
        "Need to understand when and how to override agent settings? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Pengaturan Override - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Pengaturan Override? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "上書き設定｜CRMAI公式ガイド",
      description:
        "上書き設定について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "재정의 설정 | CRMAI 사용 가이드",
      description:
        "CRMAI의 재정의 설정 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "birthday-automation": {
    en: {
      title: "Birthday Automation - Setup and Usage Guide | CRMAI",
      description:
        "Working with Birthday Automation in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Otomatisasi Ulang Tahun | Panduan CRMAI",
      description:
        "Mulai dari kebutuhan Otomatisasi Ulang Tahun. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "誕生日メッセージの自動化｜CRMAI公式ガイド",
      description:
        "CRMAIの誕生日メッセージの自動化を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "생일 자동화 | CRMAI 사용 가이드",
      description:
        "생일 자동화 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  brodcast: {
    en: {
      title: "Broadcast Messaging - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to prepare broadcast messages for your customer audience with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Pesan Broadcast - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Pelajari cara menyiapkan pesan broadcast untuk pelanggan menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "メッセージ一斉配信｜CRMAI公式ガイド",
      description:
        "メッセージ一斉配信を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "메시지 일괄 발송 | CRMAI 사용 가이드",
      description:
        "메시지 일괄 발송 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "scheduled-messages": {
    en: {
      title: "Scheduled Messages - Setup and Usage Guide | CRMAI",
      description:
        "Need to send messages at planned times instead of manually? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Pesan Terjadwal - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Pesan Terjadwal? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "予約メッセージ｜CRMAI公式ガイド",
      description:
        "予約メッセージの設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "예약 메시지 | CRMAI 사용 가이드",
      description:
        "예약 메시지 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "interactive-messages": {
    en: {
      title: "Interactive Messages - Setup and Usage Guide | CRMAI",
      description:
        "Working with Interactive Messages in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Pesan Interaktif - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Pesan Interaktif. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "対話型メッセージ｜CRMAI公式ガイド",
      description:
        "対話型メッセージについて、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "대화형 메시지 | CRMAI 사용 가이드",
      description:
        "CRMAI의 대화형 메시지 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "quick-reply": {
    en: {
      title: "Quick Reply - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to save reusable answers for common customer questions with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Balasan Cepat - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Pelajari cara menyimpan jawaban cepat untuk pertanyaan pelanggan menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "クイック返信｜CRMAI公式ガイド",
      description:
        "CRMAIのクイック返信を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "빠른 답장 | CRMAI 사용 가이드",
      description:
        "빠른 답장 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "messaging-tools": {
    en: {
      title: "Messaging Tools - Setup and Usage Guide | CRMAI",
      description:
        "Need to choose the right messaging tools for daily support tasks? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Peralatan Pesan - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Peralatan Pesan? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "メッセージツール｜CRMAI公式ガイド",
      description:
        "メッセージツールを正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "메시지 도구 | CRMAI 사용 가이드",
      description:
        "메시지 도구 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "ai-blacklist": {
    en: {
      title: "AI Blacklist - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to manage blocked contacts and AI interaction limits with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Daftar Blokir AI - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Pelajari cara mengelola kontak terblokir dan batas interaksi AI menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "AIブラックリスト｜CRMAI公式ガイド",
      description:
        "AIブラックリストの設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "AI 차단 목록 | CRMAI 사용 가이드",
      description:
        "AI 차단 목록 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "ai-audit": {
    en: {
      title: "AI Audit - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to review AI replies and identify conversations needing review with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Audit AI - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Pelajari cara meninjau balasan AI dan percakapan yang perlu diperiksa menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "AI監査｜CRMAI公式ガイド",
      description:
        "AI監査について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "AI 감사 | CRMAI 사용 가이드",
      description:
        "CRMAI의 AI 감사 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "identity-and-linking": {
    en: {
      title: "Identity and Linking - Setup and Usage Guide | CRMAI",
      description:
        "Need to understand how agent identity and channel links work? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Identitas dan Penautan | Panduan CRMAI",
      description:
        "Sedang mengatur Identitas dan Penautan? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "IDと連携設定｜CRMAI公式ガイド",
      description:
        "CRMAIのIDと連携設定を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "ID 및 연결 | CRMAI 사용 가이드",
      description:
        "ID 및 연결 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "behaviour-agent-personality": {
    en: {
      title: "Agent Behaviour and Personality | CRMAI Help Center",
      description:
        "Working with Agent Behaviour and Personality in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Perilaku dan Kepribadian AI Agent | Panduan CRMAI",
      description:
        "Mulai dari kebutuhan Perilaku dan Kepribadian AI Agent. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "エージェントの動作と性格｜CRMAI公式ガイド",
      description:
        "エージェントの動作と性格を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "에이전트 행동 및 성격 | CRMAI 사용 가이드",
      description:
        "에이전트 행동 및 성격 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "knowledge-base": {
    en: {
      title: "Knowledge Base - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on Knowledge Base? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Basis Pengetahuan - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola Basis Pengetahuan dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "ナレッジベース｜CRMAI公式ガイド",
      description:
        "ナレッジベースの設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "지식 베이스 | CRMAI 사용 가이드",
      description:
        "지식 베이스 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "model-profiles-and-agent-templates": {
    en: {
      title: "AI Model Profiles and Templates | CRMAI Help Center",
      description:
        "Need to select model profiles and reuse agent configurations? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Profil Model dan Template AI | Panduan CRMAI",
      description:
        "Sedang mengatur Profil Model dan Template AI? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "AIモデル設定とテンプレート｜CRMAI公式ガイド",
      description:
        "AIモデル設定とテンプレートについて、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "AI 모델 프로필 및 템플릿 | CRMAI 사용 가이드",
      description:
        "CRMAI의 AI 모델 프로필 및 템플릿 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "ai-agent": {
    en: {
      title: "AI Agent - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to configure an AI agent to respond to customers with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "AI Agent - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Pelajari cara mengatur AI Agent untuk membantu menjawab pelanggan menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "AIエージェント｜CRMAI公式ガイド",
      description:
        "CRMAIのAIエージェントを使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "AI 에이전트 | CRMAI 사용 가이드",
      description:
        "AI 에이전트 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "ai-and-automation": {
    en: {
      title: "AI and Automation - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on AI and Automation? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "AI dan Otomatisasi - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola AI dan Otomatisasi dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "AIと自動化｜CRMAI公式ガイド",
      description:
        "AIと自動化を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "AI 및 자동화 | CRMAI 사용 가이드",
      description:
        "AI 및 자동화 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "automated-messages": {
    en: {
      title: "Automated Messages - Setup and Usage Guide | CRMAI",
      description:
        "Need to set up automatic responses for recurring situations? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Pesan Otomatis - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Pesan Otomatis? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "自動メッセージ｜CRMAI公式ガイド",
      description:
        "自動メッセージの設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "자동 메시지 | CRMAI 사용 가이드",
      description:
        "자동 메시지 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "instagram-setup": {
    en: {
      title: "Instagram Setup - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to connect Instagram messages to your team's workflow with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Panduan Koneksi Instagram | Panduan CRMAI",
      description:
        "Pelajari cara menghubungkan pesan Instagram ke alur kerja tim menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "Instagramの接続設定｜CRMAI公式ガイド",
      description:
        "Instagramの接続設定について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "Instagram 연결 설정 | CRMAI 사용 가이드",
      description:
        "CRMAI의 Instagram 연결 설정 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "telegram-setup": {
    en: {
      title: "Telegram Setup - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to connect Telegram and handle customer conversations with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Panduan Koneksi Telegram | Panduan CRMAI",
      description:
        "Pelajari cara menghubungkan Telegram dan menangani percakapan menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "Telegramの接続設定｜CRMAI公式ガイド",
      description:
        "CRMAIのTelegramの接続設定を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "Telegram 연결 설정 | CRMAI 사용 가이드",
      description:
        "Telegram 연결 설정 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "whatsapp-setup": {
    en: {
      title: "WhatsApp Setup - Setup and Usage Guide | CRMAI",
      description:
        "Learn how to connect WhatsApp to your customer support workspace with CRMAI. Understand the available controls, common use cases and what to check before putting this workflow into practice.",
    },
    id: {
      title: "Panduan Koneksi WhatsApp | Panduan CRMAI",
      description:
        "Pelajari cara menghubungkan WhatsApp ke workspace layanan pelanggan menggunakan CRMAI. Pahami pilihan pengaturan, contoh penerapan, dan hal yang perlu diperhatikan sebelum digunakan oleh tim.",
    },
    ja: {
      title: "WhatsAppの接続設定｜CRMAI公式ガイド",
      description:
        "WhatsAppの接続設定を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "WhatsApp 연결 설정 | CRMAI 사용 가이드",
      description:
        "WhatsApp 연결 설정 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "invitation-code-management": {
    en: {
      title: "Invitation Code Management | CRMAI Help Center",
      description:
        "Working with Invitation Code Management in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Manajemen Kode Undangan | Panduan CRMAI",
      description:
        "Mulai dari kebutuhan Manajemen Kode Undangan. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "招待コードの管理｜CRMAI公式ガイド",
      description:
        "招待コードの管理の設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "초대 코드 관리 | CRMAI 사용 가이드",
      description:
        "초대 코드 관리 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "workspace-switcher": {
    en: {
      title: "Switching Workspaces - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on Switching Workspaces? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Beralih Workspace - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola Beralih Workspace dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "ワークスペースの切り替え｜CRMAI公式ガイド",
      description:
        "ワークスペースの切り替えについて、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "워크스페이스 전환 | CRMAI 사용 가이드",
      description:
        "CRMAI의 워크스페이스 전환 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "try-free-demo": {
    en: {
      title: "Try a Free Demo - Setup and Usage Guide | CRMAI",
      description:
        "Need to explore the CRMAI demo before choosing how to proceed? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Mencoba Demo Gratis - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Mencoba Demo Gratis? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "無料デモを試す｜CRMAI公式ガイド",
      description:
        "CRMAIの無料デモを試すを使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "무료 데모 체험 | CRMAI 사용 가이드",
      description:
        "무료 데모 체험 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  login: {
    en: {
      title: "Login Guide - Setup and Usage Guide | CRMAI",
      description:
        "Working with Login Guide in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Panduan Login - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Panduan Login. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "ログイン方法｜CRMAI公式ガイド",
      description:
        "ログイン方法を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "로그인 안내 | CRMAI 사용 가이드",
      description:
        "로그인 안내 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  "connections-overview": {
    en: {
      title: "Connection Overview - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on Connection Overview? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Ringkasan Koneksi - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola Ringkasan Koneksi dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "接続機能の概要｜CRMAI公式ガイド",
      description:
        "接続機能の概要の設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "채널 연결 개요 | CRMAI 사용 가이드",
      description:
        "채널 연결 개요 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "channel-connections": {
    en: {
      title: "Channel Connections - Setup and Usage Guide | CRMAI",
      description:
        "Need to add and manage customer communication channels? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Koneksi Kanal Komunikasi | Panduan CRMAI",
      description:
        "Sedang mengatur Koneksi Kanal Komunikasi? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "チャネルの接続｜CRMAI公式ガイド",
      description:
        "チャネルの接続について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "채널 연결 | CRMAI 사용 가이드",
      description:
        "CRMAI의 채널 연결 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "onboarding-and-workspace-creation": {
    en: {
      title: "Onboarding and Workspace Creation | CRMAI Help Center",
      description:
        "Working with Onboarding and Workspace Creation in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Onboarding dan Membuat Workspace | Panduan CRMAI",
      description:
        "Mulai dari kebutuhan Onboarding dan Membuat Workspace. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "初期設定とワークスペース作成｜CRMAI公式ガイド",
      description:
        "CRMAIの初期設定とワークスペース作成を使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "시작 안내 및 워크스페이스 생성 | CRMAI 사용 가이드",
      description:
        "시작 안내 및 워크스페이스 생성 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
  "workspace-management": {
    en: {
      title: "Workspace Management - Setup and Usage Guide | CRMAI",
      description:
        "Looking for guidance on Workspace Management? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Manajemen Workspace - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Kelola Manajemen Workspace dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "ワークスペース管理｜CRMAI公式ガイド",
      description:
        "ワークスペース管理を正しく扱うためのガイドです。設定項目の意味や確認する順序を押さえ、実際の業務で利用する前に必要な準備を進めましょう。",
    },
    ko: {
      title: "워크스페이스 관리 | CRMAI 사용 가이드",
      description:
        "워크스페이스 관리 기능을 어떻게 설정하고 활용할 수 있을까요? CRMAI에서 확인해야 할 항목과 작업 순서를 살펴보고 고객 응대에 적용하는 방법을 알아보세요.",
    },
  },
  registration: {
    en: {
      title: "Account Registration - Setup and Usage Guide | CRMAI",
      description:
        "Need to create a CRMAI account and prepare for first access? This CRMAI guide explains the relevant steps, options and points to check before you begin.",
    },
    id: {
      title: "Pendaftaran Akun - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Sedang mengatur Pendaftaran Akun? Temukan pengaturan yang relevan agar pekerjaan tim berjalan lebih terarah.",
    },
    ja: {
      title: "アカウント登録｜CRMAI公式ガイド",
      description:
        "アカウント登録の設定や使い方を知りたい方へ。CRMAIで確認すべき項目と操作の流れを整理し、日々の顧客対応にどう役立つかを説明します。",
    },
    ko: {
      title: "계정 등록 | CRMAI 사용 가이드",
      description:
        "계정 등록 사용 전에 필요한 설정을 확인하세요. 담당자가 알아야 할 주요 단계와 주의 사항을 정리해 팀 업무에 맞게 준비할 수 있습니다.",
    },
  },
  "account-and-access": {
    en: {
      title: "Accounts and Access - Setup and Usage Guide | CRMAI",
      description:
        "Working with Accounts and Access in CRMAI? See which controls matter and how the workflow fits everyday customer support.",
    },
    id: {
      title: "Akun dan Hak Akses - Cara Menggunakan dan Mengatur | CRMAI",
      description:
        "Mulai dari kebutuhan Akun dan Hak Akses. Gunakan panduan ini untuk memahami langkah kerja dan pilihan yang tersedia.",
    },
    ja: {
      title: "アカウントとアクセス権｜CRMAI公式ガイド",
      description:
        "アカウントとアクセス権について、利用前に知っておきたい設定と操作を紹介します。担当者が迷いやすいポイントを確認し、チームでの運用に備えましょう。",
    },
    ko: {
      title: "계정 및 접근 권한 | CRMAI 사용 가이드",
      description:
        "CRMAI의 계정 및 접근 권한 기능을 이용하는 방법을 안내합니다. 필요한 설정을 살펴보고 고객 대화와 팀 업무에 맞는 절차를 확인하세요.",
    },
  },
  "getting-started": {
    en: {
      title: "Getting Started with CRMAI | CRMAI Help Center",
      description:
        "Looking for guidance on Getting Started with CRMAI? Review the setup process and understand what to check when using this feature.",
    },
    id: {
      title: "Mulai Menggunakan CRMAI | Panduan CRMAI",
      description:
        "Kelola Mulai Menggunakan CRMAI dengan lebih terarah. Simak petunjuk praktis agar proses kerja tidak terhambat kesalahan konfigurasi.",
    },
    ja: {
      title: "CRMAIの使い方・はじめに｜CRMAI公式ガイド",
      description:
        "CRMAIのCRMAIの使い方・はじめにを使う際の手順を確認できます。必要な設定を把握し、顧客とのやり取りやチーム内の作業に適した方法を見つけてください。",
    },
    ko: {
      title: "CRMAI 시작하기 | CRMAI 사용 가이드",
      description:
        "CRMAI 시작하기 관련 작업이 막막하다면 이 안내를 참고하세요. 설정 항목과 진행 순서를 파악하고 실제 업무에 적용할 때 확인할 사항을 살펴보세요.",
    },
  },
};
