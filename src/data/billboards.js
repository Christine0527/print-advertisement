// 台灣縣市廣告看板資料
// 圖片請放在 public/images/ 資料夾下

export const regions = {
    north: {
        name: "北部地區",
        color: "#3B82F6", // 藍色
        cities: ["臺北市", "新北市", "基隆市", "桃園市", "新竹縣", "新竹市", "宜蘭縣"],
    },
    central: {
        name: "中部地區",
        color: "#EAB308", // 黃色
        cities: ["臺中市", "苗栗縣", "彰化縣", "南投縣", "雲林縣"],
    },
    south: {
        name: "南部地區",
        color: "#EF4444", // 紅色
        cities: ["嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣"],
    },
    east: {
        name: "東部地區",
        color: "#10B981", // 綠色
        cities: ["花蓮縣", "臺東縣"],
    },
    islands: {
        name: "離島地區",
        color: "#6B7280", // 灰色
        cities: ["澎湖縣", "金門縣", "連江縣"],
    },
};

// 看板資料
// 請根據實際圖片修改這個陣列
export const billboards = [
    // ========== 臺北市 ==========
    {
        id: 1,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JS006_0.jpg",
        status: "available", // available 可租 / rented 已租
    },
    {
        id: 2,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JS061c嘉義市東區文化路147號之1(三角窗).jpg",
        status: "available",
    },
    {
        id: 3,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JS117嘉義市西區中興路49號(後火車站)上方整面_0_0.jpg",
        status: "available",
    },
    {
        id: 4,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JS185嘉義市西區高鐵大道395-1號(最右邊)_0.jpg",
        status: "available",
    },
    {
        id: 5,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JS277嘉義市湖子內段新小段166地號(健康十街_湖美六街)(30x17臺尺)_工作區域 1_0.jpg",
        status: "available",
    },
    {
        id: 6,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JX007嘉義縣布袋鎮東港里埔仔厝239號(英賓餐廳對面)_0_0.jpg",
        status: "available",
    },
    {
        id: 7,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JX031嘉義縣大林鎮坪林里下潭底23-5號(大林慈濟)右面_0_0.jpg",
        status: "available",
    },
    {
        id: 8,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JX123嘉義縣大林鎮排子路4之6號(大林交流道)(32x19.5臺尺)_工作區域 1_0.jpg",
        status: "available",
    },
    {
        id: 9,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JX170嘉義縣大林鎮中正路326巷22號(大林榮林陸橋旁)整面-下橋方向-01_0.jpg",
        status: "available",
    },
    {
        id: 10,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JX188嘉義縣民雄鄉建國路二段78號_0.jpg",
        status: "available",
    },
    {
        id: 11,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JX190嘉義縣朴子市學府路二段51號稻江技術學院旁(B)_0.jpg",
        status: "available",
    },
    {
        id: 12,
        city: "嘉義市",
        region: "south",
        image: "/print-advertisement/images/JX270嘉義縣義竹鄉義竹村4之6號(義竹橋頭-整大面)-1_0_0.jpg",
        status: "available",
    },
    {
        id: 13,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN006a_0.jpg",
        status: "available",
    },
    {
        id: 14,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN008c台南市新營區延平路65號(右邊)_0.jpg",
        status: "available",
    },
    {
        id: 15,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN038台南市仁德區中山路683號2F(仁德交流道)下方小面_0_0_0.jpg",
        status: "available",
    },
    {
        id: 16,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN057台南市白河區康樂路53號(東面)_0_0.jpg",
        status: "available",
    },
    {
        id: 17,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN058台南市新營區新進路一段258號之5號_0_0_0.jpg", // 你的範例圖片
        status: "available",
    },
    {
        id: 18,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN066台南市學甲區中正路99號(整面)_0_0.jpg",
        status: "available",
    },
    {
        id: 19,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN105台南市官田區南部地號1616號檳榔攤(南部加油站前)_0.jpg",
        status: "available",
    },
    {
        id: 20,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN109台南市後壁鄉後壁村95-5(近後壁火車站)_0.jpg",
        status: "available",
    },
    {
        id: 21,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN111台南市鹽水區朝琴路188號(南榮技術學院旁)_0.jpg",
        status: "available",
    },
    {
        id: 22,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN126台南市新市區社內里77之8號_0.jpg",
        status: "available",
    },
    {
        id: 23,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN162台南市新營區民治路41號(面派出所)_0.jpg",
        status: "available",
    },
    {
        id: 24,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN167台南市新營區民治路146-8號(南新國中對面)_0_0.jpg",
        status: "available",
    },
    {
        id: 25,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN179台南市新營區健康路19號(左邊)_0_0.jpg",
        status: "available",
    },
    {
        id: 26,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN236台南市新營區開元路民治陸橋(側面)_0_0.jpg",
        status: "available",
    },
    {
        id: 27,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN252.台南市新營區民治路8-7號(同濟街口)A面_0_0_0_0_0.jpg",
        status: "available",
    },
    {
        id: 28,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN299台南市後壁崁頂南84鄉道(往後壁方向)-01_0_0_0_0.jpg",
        status: "available",
    },
    {
        id: 29,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN301台南市善化區大成路70號_0.jpg",
        status: "available",
    },
    {
        id: 30,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN515台南市新營區復興路307號(甲一飯包上方)_0.jpg",
        status: "available",
    },
    {
        id: 31,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN518台南市新營區太子路72號_0.jpg",
        status: "available",
    },
    {
        id: 32,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN522台南市安南區安明路四段735號_0.jpg",
        status: "available",
    },
    {
        id: 33,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN523台南市善化區進學路846號_0.jpg",
        status: "available",
    },
    {
        id: 34,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN527台南市麻豆區新生南路6號_0.jpg",
        status: "available",
    },
    {
        id: 35,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN532台南市永康區復國路88號_0.jpg",
        status: "available",
    },
    {
        id: 36,
        city: "臺南市",
        region: "south",
        image: "/print-advertisement/images/TN535台南市鹽水區忠孝路221號(整面)_0.jpg",
        status: "available",
    },
    {
        id: 37,
        city: "臺中市",
        region: "central",
        image: "/print-advertisement/images/TZ002_0.jpg",
        status: "available",
    },
    {
        id: 38,
        city: "臺中市",
        region: "central",
        image: "/print-advertisement/images/TZ003台中市南屯區忠勇路10-75號(20x38臺尺)_工作區域 1_0.jpg",
        status: "available",
    },
    {
        id: 39,
        city: "雲林縣",
        region: "central",
        image: "/print-advertisement/images/YL007雲林縣北港鎮華勝路130號_0_0.jpg",
        status: "available",
    },
    {
        id: 40,
        city: "雲林縣",
        region: "central",
        image: "/print-advertisement/images/YL028雲林縣虎尾鎮中正路15號9樓(虎尾中正圓環停車場)_工作區域 1_0_0.jpg",
        status: "available",
    },
    {
        id: 41,
        city: "雲林縣",
        region: "central",
        image: "/print-advertisement/images/YL012雲林縣虎尾鎮林森路一段439號(光復路口)_0_0.jpg",
        status: "available",
    },

    // 繼續新增更多看板...
    // 如果同一個縣市有多個看板，繼續複製格式並修改 id 和 image
];

// 輔助函數：取得特定縣市的看板
export const getBillboardsByCity = (city) => {
    return billboards.filter((b) => b.city === city);
};

// 輔助函數：取得特定縣市的可租看板數量
export const getAvailableCount = (city) => {
    return billboards.filter((b) => b.city === city && b.status === "available").length;
};

// 輔助函數：取得所有縣市及其看板數量
export const getCitiesWithCount = () => {
    const citiesMap = new Map();

    billboards.forEach((billboard) => {
        const count = citiesMap.get(billboard.city) || 0;
        citiesMap.set(billboard.city, count + 1);
    });

    return citiesMap;
};
