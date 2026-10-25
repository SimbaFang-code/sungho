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
    name: "朴成淏",
    avatar: "成",
    color: "#ff9f0a",
    preview: "迎新地点在学生会馆一楼，别走错啦",
    messages: [
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "哈哈没关系，你现在在哪栋楼附近？" },
      { from: "me", text: "好像在一棵很大的银杏树旁边" },
      { from: "them", text: "那我知道了，你往左手边那条路走，看到学生会馆就到了" },
      { from: "them", text: "迎新地点在学生会馆一楼，别走错啦" },
      { from: "me", text: "找到了！谢谢你学长" },
      { from: "them", text: "不客气，我是经营学大三的朴成淏，以后有事可以问我" }
    ]
  },
  riwoo: {
    name: "李常赫",
    avatar: "常",
    color: "#30d158",
    preview: "舞蹈社这周有开放练习，想来可以看看",
    messages: [
      { from: "them", text: "听说你是成淏带过来的学妹？" },
      { from: "me", text: "是的，迎新那天他帮我指了路" },
      { from: "them", text: "他人很好的，就是有时候话不多" },
      { from: "them", text: "舞蹈社这周有开放练习，想来可以看看" }
    ]
  },
  jaehyun: {
    name: "明宰铉",
    avatar: "宰",
    color: "#ff375f",
    preview: "周五晚上聚餐！你一定要来啊",
    messages: [
      { from: "them", text: "学妹学妹！周五晚上我们几个要聚餐" },
      { from: "them", text: "周五晚上聚餐！你一定要来啊" },
      { from: "me", text: "我可以吗？会不会不太熟" },
      { from: "them", text: "怎么会，来了就熟了，成淏也去" }
    ]
  },
  taesan: {
    name: "韩泰山",
    avatar: "泰",
    color: "#5e5ce6",
    preview: "最近在写一首新歌，有空可以来音乐楼听",
    messages: [
      { from: "them", text: "你是那个迎新时迷路的新生吧" },
      { from: "me", text: "……这么快就传开了吗" },
      { from: "them", text: "哈哈，成淏说的" },
      { from: "them", text: "最近在写一首新歌，有空可以来音乐楼听" }
    ]
  },
  leehan: {
    name: "金桐儇",
    avatar: "桐",
    color: "#64d2ff",
    preview: "图书馆三楼靠窗的位置光线很好",
    messages: [
      { from: "them", text: "你平时喜欢去图书馆吗" },
      { from: "me", text: "还不熟，正在探索中" },
      { from: "them", text: "图书馆三楼靠窗的位置光线很好，推荐" }
    ]
  },
  woonhak: {
    name: "金云鹤",
    avatar: "云",
    color: "#bf5af2",
    preview: "食堂今天的炸猪排超级好吃！！",
    messages: [
      { from: "them", text: "学妹！！食堂今天的炸猪排超级好吃！！" },
      { from: "them", text: "真的，趁热去吃" },
      { from: "me", text: "好，我中午去看看" },
      { from: "them", text: "记得叫上成淏哥，他老是忘记吃饭" }
    ]
  },
  group: {
    name: "六人朋友圈",
    avatar: "群",
    color: "#8e8e93",
    preview: "宰铉：周五聚餐定啦",
    messages: [
      { from: "them", sender: "明宰铉", text: "周五晚上聚餐定啦，老地方" },
      { from: "them", sender: "金云鹤", text: "我要吃炸猪排！！" },
      { from: "them", sender: "李常赫", text: "你上周才吃过" },
      { from: "them", sender: "金云鹤", text: "那不一样" },
      { from: "them", sender: "朴成淏", text: "学妹也一起来吧" },
      { from: "me", text: "好呀，谢谢学长们" },
      { from: "them", sender: "韩泰山", text: "人多热闹" }
    ]
  }
};

const INSTAGRAM = {
  sungho: {
    name: "朴成淏",
    handle: "@sungho_",
    avatar: "成",
    color: "#ff9f0a",
    bio: "经营学 3학년\n서린대학교",
    posts: [
      { img: "#ff9f0a", caption: "迎新周结束，累但值得。", meta: "3小时前 · 12赞" },
      { img: "#ffb340", caption: "学生会馆楼下的咖啡，还不错。", meta: "昨天 · 20赞" }
    ]
  },
  riwoo: {
    name: "李常赫",
    handle: "@riwoo_dance",
    avatar: "常",
    color: "#30d158",
    bio: "舞蹈 · 3학년\n练习室常驻",
    posts: [
      { img: "#30d158", caption: "今晚练到很晚。", meta: "5小时前 · 18赞" }
    ]
  },
  jaehyun: {
    name: "明宰铉",
    handle: "@jaehyun_m",
    avatar: "宰",
    color: "#ff375f",
    bio: "传媒 · 3학년\n聚餐发起人",
    posts: [
      { img: "#ff375f", caption: "周五聚餐！都给我来！", meta: "1小时前 · 31赞" }
    ]
  },
  taesan: {
    name: "韩泰山",
    handle: "@taesan_music",
    avatar: "泰",
    color: "#5e5ce6",
    bio: "音乐 · 3학년\n写歌中",
    posts: [
      { img: "#5e5ce6", caption: "《네가 생각난단 말이야》 demo 完成。", meta: "8小时前 · 25赞" }
    ]
  },
  leehan: {
    name: "金桐儇",
    handle: "@leehan_bio",
    avatar: "桐",
    color: "#64d2ff",
    bio: "生物 · 3학년\n观察生活",
    posts: [
      { img: "#64d2ff", caption: "图书馆三楼的窗。", meta: "昨天 · 15赞" }
    ]
  },
  woonhak: {
    name: "金云鹤",
    handle: "@woonhak_",
    avatar: "云",
    color: "#bf5af2",
    bio: "3학년\n今天也很开心",
    posts: [
      { img: "#bf5af2", caption: "炸猪排！！", meta: "2小时前 · 22赞" }
    ]
  }
};

const PHOTOS = [
  { color: "#ff9f0a", label: "迎新周 · 学生会馆" },
  { color: "#30d158", label: "银杏树" },
  { color: "#5e5ce6", label: "音乐楼排练室" },
  { color: "#64d2ff", label: "图书馆三楼" },
  { color: "#bf5af2", label: "食堂炸猪排" }
];

const CALENDAR = [
  { date: "10/26 周一", title: "迎新周 · 校园导览" },
  { date: "10/28 周三", title: "舞蹈社开放练习" },
  { date: "10/30 周五", title: "六人聚餐 · 老地方" }
];

const MEMOS = [
  { title: "待办", body: "· 去学生会馆领新生材料\n· 周五聚餐前问成淏学长地点\n· 图书馆办借书卡" },
  { title: "随手记", body: "成淏学长说学生会馆楼下咖啡不错。\n泰山的歌好像很好听。" }
];

const MAP_PLACES = [
  { name: "学生会馆", desc: "迎新活动、社团招新的主要场所。" },
  { name: "中央图书馆", desc: "三楼靠窗光线最好。" },
  { name: "食堂", desc: "炸猪排是招牌。" },
  { name: "音乐楼", desc: "排练室和琴房，泰山常在这里。" },
  { name: "咖啡店", desc: "学生会馆楼下，成淏推荐。" },
  { name: "宿舍区", desc: "新生宿舍在这边。" }
];

const WEATHER = { city: "서린대학교", temp: "18°", desc: "多云转晴", high: "21°", low: "12°" };