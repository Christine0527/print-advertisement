# 🏢 台灣廣告看板租賃平台

一個現代化的廣告看板展示網站，使用 React + Vite + Styled Components 打造。

## ✨ 功能特色

-   📍 依台灣縣市分區展示（北中南東離島）
-   🖼️ 圖片展示廣告看板
-   📱 完整 RWD 響應式設計（手機/平板/電腦）
-   🎨 現代化 UI/UX 設計
-   ⚡ 快速載入與流暢動畫

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 放置圖片

將廣告看板圖片（.jpg）放到 `public/images/` 資料夾：

```
public/images/
├── taipei-1.jpg
├── taipei-2.jpg
├── newtaipei-1.jpg
├── taichung-1.jpg
└── ...
```

**圖片命名建議：** `{城市拼音}-{編號}.jpg`

縣市拼音對照表請參考：`public/images/README.md`

### 3. 更新資料

編輯 `src/data/billboards.js`，新增你的看板資料：

```javascript
{
  id: 1,
  city: '臺北市',
  region: 'north',
  image: '/images/taipei-1.jpg',
  status: 'available' // 'available' 可租 / 'rented' 已租
}
```

### 4. 啟動開發伺服器

```bash
npm run dev
```

瀏覽器開啟 http://localhost:5173

### 5. 建置正式版

```bash
npm run build
```

建置完成的檔案會在 `dist/` 資料夾。

## 📁 專案結構

```
print-advertisement/
├── public/
│   └── images/              # 廣告看板圖片
├── src/
│   ├── components/          # React 元件
│   │   ├── Header.jsx
│   │   ├── RegionSelector.jsx
│   │   ├── CityCard.jsx
│   │   ├── BillboardGrid.jsx
│   │   └── BillboardCard.jsx
│   ├── data/
│   │   └── billboards.js    # 看板資料
│   ├── styles/
│   │   ├── theme.js         # 主題配置
│   │   └── GlobalStyles.js  # 全域樣式
│   ├── App.jsx              # 主應用程式
│   └── main.jsx             # 進入點
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 自訂樣式

修改 `src/styles/theme.js` 可以調整：

-   顏色配置
-   間距大小
-   圓角半徑
-   陰影效果
-   斷點設定

## 📱 響應式設計

-   **手機**：< 640px
-   **平板**：640px - 1024px
-   **電腦**：> 1024px

## 🛠️ 技術棧

-   **React 18** - UI 框架
-   **Vite** - 建置工具
-   **Styled Components** - CSS-in-JS
-   **純前端** - 無需後端

## 📝 授權

MIT License

---

**需要協助？** 請檢查：

1. 圖片路徑是否正確
2. `billboards.js` 資料格式是否正確
3. 執行 `npm install` 安裝所有依賴
