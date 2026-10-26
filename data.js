const APPS = [
  { id: "kakao", name: "KakaoTalk", glyph: "💬", color: "#fee500", text: "#3c1e1e" },
  { id: "instagram", name: "Instagram", glyph: "📷", color: "#e1306c", text: "#fff" },
  { id: "photos", name: "相册", glyph: "🖼️", color: "#ff9500", text: "#fff" },
  { id: "calendar", name: "日历", glyph: "📅", color: "#ff3b30", text: "#fff" },
  { id: "memo", name: "备忘录", glyph: "📝", color: "#ffcc00", text: "#3c1e1e" },
  { id: "map", name: "校园地图", glyph: "🗺️", color: "#34c759", text: "#fff" },
  { id: "clock", name: "时钟", glyph: "🕐", color: "#1c1c1e", text: "#fff" },
  { id: "weather", name: "天气", glyph: "☀️", color: "#5ac8fa", text: "#fff" },
  { id: "x", name: "X", glyph: "✕", color: "#000", text: "#fff" },
  { id: "community", name: "校园社区", glyph: "🏫", color: "#5856d6", text: "#fff" },
  { id: "phone", name: "电话", glyph: "📞", color: "#34c759", text: "#fff" },
  { id: "settings", name: "设置", glyph: "⚙️", color: "#8e8e93", text: "#fff" }
];

const CHATS = {
  sungho: {
    name: "朴成淏", avatar: "成", color: "#ff9f0a",
    messages: [
      { type: "time", text: "上午 09:30" },
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "往左手边那条路走，看到学生会馆就到了。" }
    ],
    replies: [
      { text: "找到了！谢谢你学长", next: [
        { from: "them", text: "不客气。对了，周五晚上我们有个聚餐，你要一起来吗？" }
      ]}
    ]
  },
  jaehyun: {
    name: "明宰铉", avatar: "宰", color: "#ff375f",
    messages: [{ type: "time", text: "下午 14:00" }, { from: "them", text: "学妹好呀！我是明宰铉，成淏那个闷葫芦居然会主动带学妹！" }],
    replies: [{ text: "宰铉学长好", next: [{ from: "them", text: "哈哈，周五聚餐一定要来哦！" }] }]
  },
  group: {
    name: "延世街六人组", avatar: "群", color: "#8e8e93",
    messages: [
      { type: "time", text: "下午 14:30" },
      { from: "them", sender: "明宰铉", text: "各位！周五晚上聚餐，老地方！" },
      { from: "them", sender: "金云鹤", text: "学妹学妹！我是云鹤，周五我请你吃炸猪排！" },
      { from: "them", sender: "朴成淏", text: "别吓到人家。" }
    ],
    replies: [{ text: "好呀，谢谢大家！", isGroupDone: true, next: [{ from: "them", sender: "韩泰山", text: "那周五见。" }] }]
  },
  riwoo: {
    name: "李常赫", avatar: "常", color: "#30d158",
    messages: [{ type: "time", text: "下午 15:00" }, { from: "them", text: "我是李常赫。听说成淏带你认识了大家。" }],
    replies: [{ text: "常赫学长好！", next: [{ from: "them", text: "嗯，他人挺好的。舞蹈社开放练习的话可以来看看。" }] }]
  },
  taesan: {
    name: "韩泰山", avatar: "泰", color: "#5e5ce6",
    messages: [{ type: "time", text: "下午 15:10" }, { from: "them", text: "我是泰山。刚才在群里听宰铉说了。" }],
    replies: [{ text: "泰山学长好", next: [{ from: "them", text: "嗯，有空可以来音乐楼听我写的新歌。" }] }]
  },
  leehan: {
    name: "金桐儇", avatar: "桐", color: "#64d2ff",
    messages: [{ type: "time", text: "下午 15:20" }, { from: "them", text: "我是桐儇。欢迎来到西凛大。" }],
    replies: [{ text: "桐儇学长好", next: [{ from: "them", text: "图书馆三楼靠窗位置光线很好，推荐给你。" }] }]
  },
  woonhak: {
    name: "金云鹤", avatar: "云", color: "#bf5af2",
    messages: [{ type: "time", text: "下午 15:30" }, { from: "them", text: "学妹！食堂炸猪排真的超好吃！！" }],
    replies: [{ text: "好，我中午去尝尝", next: [{ from: "them", text: "记得叫上成淏哥，他老不吃饭！" }] }]
  },
  yujin: {
    name: "崔裕真 (同级)", avatar: "裕", color: "#ff9500",
    messages: [{ type: "time", text: "晚上 18:00" }, { from: "them", text: "天呐，你认识大三那几个帅哥？特别是那个朴成淏，好像对你很特殊哦！" }],
    replies: [{ text: "没有啦，只是刚认识的学长", next: [{ from: "them", text: "相信我女生的直觉，他绝对对你有意思！" }] }]
  }
};

const MEMOS = [
  { title: "选课笔记", body: "周一上午有经营学，记得带计算器。\n周三去图书馆借两本全英教材。" },
  { title: "待办事项", body: "· 周五晚上参加六人聚餐" },
  { title: "剧情提示 (密码: 0530)", isLocked: true, body: "【剧本杀探索指南】\n\n1. 目前主线卡在：需要在群里回复大家。\n2. 聚会需要在 【校园地图】 点击『老地方烤肉店』打卡，后续聊天才会触发。\n3. 暧昧期如果不知道怎么推进，记得去翻看成淏的 Instagram 动态。" }
];

// 用于地图打卡联动
const MAP_PLACES = [
  { id: "student_hall", name: "学生会馆", desc: "迎新活动地。" },
  { id: "restaurant", name: "老地方烤肉店", desc: "聚餐定在这里。 (点击打卡)" }
];

// 高仿 Instagram 数据
const INSTAGRAM_FEED = [
  { user: "sungho_", avatar: "成", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600", caption: "coffee." },
  { user: "taesan_music", avatar: "泰", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600", caption: "新demo." },
  { user: "jaehyun_m", avatar: "宰", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600", caption: "周五聚餐！" }
];