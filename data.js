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
    preview: "聚餐见，别紧张。",
    messages: [
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "哈哈没关系，你现在在哪栋楼附近？" },
      { from: "me", text: "好像在一棵很大的银杏树旁边" },
      { from: "them", text: "那我知道了，你往左手边那条路走，看到学生会馆就到了" },
      { from: "them", text: "迎新地点在学生会馆一楼，别走错啦" }
    ],
    replies: [
      { text: "找到了！谢谢你学长", next: [
        { from: "them", text: "不客气。我是经营学大三的朴成淏。" },
        { from: "them", text: "对了，周五晚上我们几个朋友要聚餐，你要一起来吗？宰铉他们都很随和。" },
        { from: "them", text: "如果觉得不自在也没关系，不用勉强。" }
      ]}
    ]
  },
  yujin: {
    name: "崔裕真 (同级)",
    avatar: "裕",
    color: "#ff9500",
    preview: "你报完到了吗？我在宿舍快无聊死了",
    messages: [
      { from: "them", text: "你报完到了吗？我在宿舍快无聊死了" },
      { from: "me", text: "刚弄完，迎新的时候差点迷路" },
      { from: "them", text: "笑死，校园太大了。不过我听说大三的学长们都很帅，你见到了吗？" }
    ],
    replies: []
  },
  group: {
    name: "延世街六人组",
    avatar: "群",
    color: "#8e8e93",
    preview: "宰铉：周五聚餐定啦，老地方！",
    messages: [
      { from: "them", sender: "明宰铉", text: "各位！周五晚上迎新结束，老地方聚餐，都给我空出时间！" },
      { from: "them", sender: "金云鹤", text: "我要吃炸猪排！！" },
      { from: "them", sender: "李常赫", text: "你上周才吃过" },
      { from: "them", sender: "金云鹤", text: "那不一样，食堂的炸猪排是信仰" },
      { from: "them", sender: "韩泰山", text: "知道了。" },
      { from: "them", sender: "金桐儇", text: "收到。" },
      { from: "them", sender: "朴成淏", text: "我带了个人来，刚在迎新认识的学妹。" },
      { from: "them", sender: "明宰铉", text: "？！成淏你居然会主动带学妹！太阳打西边出来了！" }
    ],
    replies: [
      { text: "学长学姐们好，我是大一新生，请多指教！", next: [
        { from: "them", sender: "明宰铉", text: "学妹好呀！欢迎加入我们！" },
        { from: "them", sender: "金云鹤", text: "学妹！周五请你吃炸猪排！" },
        { from: "them", sender: "朴成淏", text: "别吓到人家。" }
      ]}
    ]
  }
};

const INSTAGRAM = {
  sungho: { name: "朴成淏", handle: "@sungho_", avatar: "成", color: "#ff9f0a", bio: "经营学 3학년\n서린대학교 学生会", posts: [{ img: "#ff9f0a", caption: "迎新周。", meta: "3小时前" }] }
};

const PHOTOS = [{ color: "#ff9f0a", label: "学生会馆" }];
const CALENDAR = [{ date: "10/30 周五", title: "六人聚餐 · 老地方" }];
const MEMOS = [{ title: "新生待办", body: "· 周五聚餐" }];
const MAP_PLACES = [{ name: "学生会馆", desc: "迎新活动" }];
const WEATHER = { city: "서린대학교", temp: "18°", desc: "多云转晴", high: "21°", low: "12°" };