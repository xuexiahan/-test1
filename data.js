// 这里先作为前端模拟数据使用。
// 后期连接数据库时，后端可以返回同样结构的 JSON。
const bookingData = {
  food: [
    {
      id: "food-001",
      category: "food",
      name: "乡城风味双人餐",
      detail: "招牌小吃 + 热菜 + 饮品",
      price: 88,
      type: "美食"
    },
    {
      id: "food-002",
      category: "food",
      name: "古镇夜市尝鲜券",
      detail: "适合晚间游玩路线",
      price: 56,
      type: "美食"
    },
    {
      id: "food-003",
      category: "food",
      name: "非遗小吃体验套餐",
      detail: "手作点心 + 当地茶饮",
      price: 68,
      type: "美食"
    },
    {
      id: "food-004",
      category: "food",
      name: "家庭围炉套餐",
      detail: "3-4人共享，含特色热菜",
      price: 168,
      type: "美食"
    }
  ],
  traffic: [
    {
      id: "traffic-001",
      category: "traffic",
      name: "景区接驳车往返票",
      detail: "游客中心至主景区",
      price: 36,
      type: "交通"
    },
    {
      id: "traffic-002",
      category: "traffic",
      name: "古镇公交一日通",
      detail: "当日不限次数乘坐",
      price: 18,
      type: "交通"
    },
    {
      id: "traffic-003",
      category: "traffic",
      name: "高铁站直达专线",
      detail: "高铁站至古镇入口",
      price: 42,
      type: "交通"
    },
    {
      id: "traffic-004",
      category: "traffic",
      name: "夜游返程巴士",
      detail: "21:30 统一发车",
      price: 25,
      type: "交通"
    }
  ],
  hotel: [
    {
      id: "hotel-001",
      category: "hotel",
      name: "山景民宿大床房",
      detail: "评分 4.8 · 距景区 800m",
      price: 238,
      type: "住宿"
    },
    {
      id: "hotel-002",
      category: "hotel",
      name: "古镇轻奢酒店标间",
      detail: "评分 4.7 · 含早餐",
      price: 298,
      type: "住宿"
    },
    {
      id: "hotel-003",
      category: "hotel",
      name: "溪畔亲子民宿",
      detail: "评分 4.9 · 可住 3 人",
      price: 358,
      type: "住宿"
    },
    {
      id: "hotel-004",
      category: "hotel",
      name: "青年旅舍床位",
      detail: "评分 4.6 · 适合学生出行",
      price: 78,
      type: "住宿"
    }
  ],
  ticket: [
    {
      id: "ticket-001",
      category: "ticket",
      name: "古镇核心景区门票",
      detail: "08:30-18:00 · 余票充足",
      price: 68,
      type: "景点"
    },
    {
      id: "ticket-002",
      category: "ticket",
      name: "民俗展馆联票",
      detail: "含三处展馆参观",
      price: 45,
      type: "景点"
    },
    {
      id: "ticket-003",
      category: "ticket",
      name: "夜游灯会门票",
      detail: "19:00-22:00 · 限时开放",
      price: 58,
      type: "景点"
    },
    {
      id: "ticket-004",
      category: "ticket",
      name: "观景台套票",
      detail: "含登台票和讲解服务",
      price: 52,
      type: "景点"
    }
  ]
};
