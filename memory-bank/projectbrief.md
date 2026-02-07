# 高效慢活學官方網站專案說明

## 專案概述

本專案為「高效慢活學」品牌的官方網站，基於 **Next.js 15** 構建，採用單頁式設計，展示職涯諮詢服務。

## 專案目標

建立一個專業、溫暖且具有國際視野的品牌網站，傳達「高效慢活」的理念，吸引需要職涯諮詢服務的目標客群。

---

## 視覺風格指南

### 色彩配置

- **主背景色**：淡黃色 `#FFFBE0`
- **強調背景色**：溫潤大地色 `#e7b08e`
- **主文字色**：深灰色 `#333333`
- **次要文字色**：`#666666`
- **淺色文字**：`#999999`

### 設計原則

✅ **必須遵循**：
- 使用 Inter 無襯線字體
- 加大行距（1.7-1.9）與字距
- 保持大量留白
- 模仿 Canva 的滿版區塊感
- 簡約專業風格

❌ **絕對禁止**：
- 水彩風格
- 狐狸圖案
- 鮮艷色彩

### 排版系統

- **標題字體**：600-700 字重
- **內文字體**：300-500 字重
- **字距**：標題 -0.01em，內文 0，按鈕 0.02em
- **行距**：標題 1.4，內文 1.7，放鬆 1.9

---

## 網站結構

### 單頁佈局順序

1. **Sticky Navigation** - 固定導航欄
2. **Hero Section** - 英雄區（2欄佈局）
3. **About Section** - 簡介區塊
4. **Testimonials** - 客戶見證（滑動組件，5個見證）
5. **Services** - 核心服務（滑動組件，4個服務）
6. **About Me** - 關於我
7. **Footer** - 頁尾

### 導航功能

- ✅ 所有導航按鈕使用錨點連結
- ✅ 平滑滾動效果
- ✅ 手機版漢堡選單
- ✅ 外部連結：電子報、部落格 → `https://www.mankind01.com/`

---

## 主人身分資訊

### 專業認證
- **CNC 認證職涯諮詢師**

### 工作經歷
- 非營利組織
- 外商公司
- 幼教產業
- 自由工作者

### 現況
- 📍 **現居地**：盧森堡
- 🌍 **服務範圍**：全球華人

### 核心理念
> 高效不代表忙碌，而是找到最適合自己的節奏；慢活不是消極，而是有意識地選擇生活方式。

---

## 技術堆疊

### 核心技術
- **框架**：Next.js 15 (App Router)
- **語言**：TypeScript
- **樣式**：CSS Modules + Vanilla CSS
- **字體**：Google Fonts - Inter

### 專案結構

```
Official Web_Slowliving/
├── app/
│   ├── layout.tsx           # Root Layout + SEO
│   ├── page.tsx             # 主頁面
│   ├── globals.css          # 全域樣式 + 設計系統
│   ├── sitemap.ts           # Sitemap 生成
│   └── robots.ts            # Robots.txt
├── components/
│   ├── Navigation.tsx       # 導航欄
│   ├── Hero.tsx             # 英雄區
│   ├── About.tsx            # 簡介
│   ├── Testimonials.tsx     # 客戶見證滑動組件
│   ├── Services.tsx         # 核心服務滑動組件
│   ├── AboutMe.tsx          # 關於我
│   └── Footer.tsx           # 頁尾
├── memory-bank/
│   └── projectbrief.md      # 本文件
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 響應式設計 (RWD)

### 斷點設定
- **桌面版**：> 768px
- **手機版**：≤ 768px
- **小螢幕**：≤ 480px

### 佈局轉換
- ✅ Hero 區塊：桌面 2 欄 → 手機 1 欄
- ✅ About 卡片：桌面 3 欄 → 手機 1 欄
- ✅ AboutMe：桌面 1:2 網格 → 手機 1 欄
- ✅ Footer：桌面 4 欄 → 手機 1 欄
- ✅ 導航：桌面橫向 → 手機漢堡選單

---

## SEO 優化配置

### Metadata
- ✅ 標題、描述、關鍵字
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Card
- ✅ 多語言支援（zh-TW）

### 結構化資料
```json
{
  "@type": "ProfessionalService",
  "name": "高效慢活學",
  "serviceType": ["職涯諮詢", "職業生涯規劃", "職涯發展"],
  "provider": {
    "@type": "Person",
    "jobTitle": "CNC 認證職涯諮詢師"
  }
}
```

### 檔案
- ✅ `/sitemap.xml` - 自動生成
- ✅ `/robots.txt` - 允許所有爬蟲

---

## 核心功能

### 1. 客戶見證滑動組件
- 5 個真實見證
- 左右導航按鈕
- 指示點 (dots)
- 自動適應手機版

### 2. 核心服務滑動組件
- 4 種服務類型
- 點擊展開/收起細節
- 滑動切換
- 漸入動畫

### 3. 平滑滾動
- 點擊導航自動滾動至對應區塊
- 考慮 Sticky Navigation 高度偏移

---

## 開發指令

```bash
# 安裝依賴
npm install

# 開發伺服器
npm run dev

# 建置生產版本
npm run build

# 啟動生產伺服器
npm start

# 程式碼檢查
npm run lint
```

---

## 外部連結

所有「電子報」和「部落格」按鈕皆連結至：
🔗 **https://www.mankind01.com/**

---

## 專案特色

✨ **完全符合需求**：
- ✅ Next.js 15 最新版本
- ✅ 單頁式佈局
- ✅ 溫潤色調（淡黃 + 大地色）
- ✅ RWD 響應式設計
- ✅ 專業 SEO 配置
- ✅ 互動式滑動組件
- ✅ 完整的 memory-bank 記錄

---

## 維護與更新

### 內容更新
- 見證內容：`components/Testimonials.tsx`
- 服務項目：`components/Services.tsx`
- 個人簡介：`components/AboutMe.tsx`

### 樣式調整
- 色彩變數：`app/globals.css` (`:root` 區塊)
- 組件樣式：各組件的 `.module.css` 檔案

### SEO 調整
- Metadata：`app/layout.tsx`
- Sitemap：`app/sitemap.ts`

---

**最後更新**：2026-02-07  
**版本**：1.0.0  
**狀態**：✅ 開發完成
