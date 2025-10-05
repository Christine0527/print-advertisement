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
        city: "臺北市",
        region: "north",
        image: "/images/taipei-1.jpg",
        status: "available", // available 可租 / rented 已租
    },
    {
        id: 2,
        city: "臺北市",
        region: "north",
        image: "/images/taipei-2.jpg",
        status: "available",
    },

    // ========== 新北市 ==========
    {
        id: 3,
        city: "新北市",
        region: "north",
        image: "/images/newtaipei-1.jpg",
        status: "available",
    },

    // ========== 基隆市 ==========
    {
        id: 4,
        city: "基隆市",
        region: "north",
        image: "/images/keelung-1.jpg",
        status: "available",
    },

    // ========== 桃園市 ==========
    {
        id: 5,
        city: "桃園市",
        region: "north",
        image: "/images/taoyuan-1.jpg",
        status: "available",
    },

    // ========== 新竹縣 ==========
    {
        id: 6,
        city: "新竹縣",
        region: "north",
        image: "/images/hsinchu-county-1.jpg",
        status: "available",
    },

    // ========== 新竹市 ==========
    {
        id: 7,
        city: "新竹市",
        region: "north",
        image: "/images/hsinchu-city-1.jpg",
        status: "available",
    },

    // ========== 宜蘭縣 ==========
    {
        id: 8,
        city: "宜蘭縣",
        region: "north",
        image: "/images/yilan-1.jpg",
        status: "available",
    },

    // ========== 臺中市 ==========
    {
        id: 9,
        city: "臺中市",
        region: "central",
        image: "/images/taichung-1.jpg",
        status: "available",
    },

    // ========== 苗栗縣 ==========
    {
        id: 10,
        city: "苗栗縣",
        region: "central",
        image: "/images/miaoli-1.jpg",
        status: "available",
    },

    // ========== 彰化縣 ==========
    {
        id: 11,
        city: "彰化縣",
        region: "central",
        image: "/images/changhua-1.jpg",
        status: "available",
    },

    // ========== 南投縣 ==========
    {
        id: 12,
        city: "南投縣",
        region: "central",
        image: "/images/nantou-1.jpg",
        status: "available",
    },

    // ========== 雲林縣 ==========
    {
        id: 13,
        city: "雲林縣",
        region: "central",
        image: "/images/yunlin-1.jpg",
        status: "available",
    },

    // ========== 嘉義市 ==========
    {
        id: 14,
        city: "嘉義市",
        region: "south",
        image: "/images/chiayi-city-1.jpg",
        status: "available",
    },

    // ========== 嘉義縣 ==========
    {
        id: 15,
        city: "嘉義縣",
        region: "south",
        image: "/images/chiayi-county-1.jpg",
        status: "available",
    },

    // ========== 臺南市 ==========
    {
        id: 16,
        city: "臺南市",
        region: "south",
        image: "/images/tainan-1.jpg",
        status: "available",
    },
    {
        id: 17,
        city: "臺南市",
        region: "south",
        image: "/images/JS006.jpg", // 你的範例圖片
        status: "available",
    },

    // ========== 高雄市 ==========
    {
        id: 18,
        city: "高雄市",
        region: "south",
        image: "/images/kaohsiung-1.jpg",
        status: "available",
    },

    // ========== 屏東縣 ==========
    {
        id: 19,
        city: "屏東縣",
        region: "south",
        image: "/images/pingtung-1.jpg",
        status: "available",
    },

    // ========== 花蓮縣 ==========
    {
        id: 20,
        city: "花蓮縣",
        region: "east",
        image: "/images/hualien-1.jpg",
        status: "available",
    },

    // ========== 臺東縣 ==========
    {
        id: 21,
        city: "臺東縣",
        region: "east",
        image: "/images/taitung-1.jpg",
        status: "available",
    },

    // ========== 澎湖縣 ==========
    {
        id: 22,
        city: "澎湖縣",
        region: "islands",
        image: "/images/penghu-1.jpg",
        status: "available",
    },

    // ========== 金門縣 ==========
    {
        id: 23,
        city: "金門縣",
        region: "islands",
        image: "/images/kinmen-1.jpg",
        status: "available",
    },

    // ========== 連江縣 ==========
    {
        id: 24,
        city: "連江縣",
        region: "islands",
        image: "/images/lienchiang-1.jpg",
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
