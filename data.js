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
    preview: "你好，请问是来参加迎新的新生吗？",
    // locked 为 true 表示需要先完成其他前置任务才能解锁新回复
    locked: false, 
    messages: [
      { type: "time", text: "上午 09:30" },
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "哈哈没关系，你现在在哪栋楼附近？" },
      { from: "me", text: "好像在一棵很大的银杏树旁边" },
      { from: "them", text: "那我知道了，你往左手边那条路走，看到学生会馆就到了" }
    ],
    replies: [
      { text: "找到了！谢谢你学长", next: [
        { from: "them", text: "不客气，我是经营学大三的朴成淏。" },
        { from: "them", text: "对了，迎新结束后有个聚餐，你要一起来吗？" }
      ]},
      { text: "好呀，那我去凑个热闹", require: "groupDone", next: [
        { from: "them", text: "嗯，那聚餐见。别紧张，有我在。" },
        { type: "time", text: "晚上 20:15" },
        { from: "them", text: "聚餐结束啦，你安全到宿舍了吗？" },
        { from: "me", text: "刚到！今天谢谢学长一直照顾我" },
        { from: "them", text: "应该的。那个……其实今天一直想和你多说话，但人太多了。" },
        { from: "them", text: "早点休息，明天见。" }
      ]}
    ]
  },
  jaehyun: {
    name: "明宰铉",
    avatar: "宰",
    color: "#ff375f",
    preview: "学妹好呀！欢迎加入我们！",
    locked: false,
    messages: [
      { type: "time", text: "下午 14:00" },
      { from: "them", text: "学妹好呀！我是传媒系的明宰铉" },
      { from: "them", text: "成淏那个闷葫芦居然会主动带学妹，稀奇" }
    ],
    replies: [
      { text: "宰铉学长好", next: [
        { from: "them", text: "哈哈他平时就是热心肠。周五晚上我们聚餐，你一定要来啊！" }
      ]}
    ]
  },
  group: {
    name: "延世街六人组",
    avatar: "群",
    color: "#8e8e93",
    preview: "宰铉：周五聚餐定啦，老地方！",
    locked: false,
    messages: [
      { type: "time", text: "下午 14:30" },
      { from: "them", sender: "明宰铉", text: "各位！周五晚上迎新结束，老地方聚餐，都给我空出时间！" },
      { from: "them", sender: "金云鹤", text: "我要吃炸猪排！！" },
      { from: "them", sender: "李常赫", text: "你上周才吃过" },
      { from: "them", sender: "朴成淏", text: "我带了个人来，刚在迎新认识的学妹。" },
      { from: "them", sender: "明宰铉", text: "？！成淏你居然会主动带学妹！" }
    ],
    replies: [
      { text: "学长学姐们好！", isGroupDone: true, next: [
        { from: "them", sender: "明宰铉", text: "学妹好呀！欢迎加入我们！" },
        { from: "them", sender: "金云鹤", text: "学妹！周五请你吃炸猪排！" },
        { from: "them", sender: "朴成淏", text: "别吓到人家。" }
      ]}
    ]
  },
  // 其他工具人，暂时不推进剧情
  riwoo: { name: "李常赫", avatar: "常", color: "#30d158", preview: "舞蹈社欢迎你", messages: [{ type: "time", text: "昨天" }, { from: "them", text: "舞蹈社这周有开放练习。" }], replies: [] },
  taesan: { name: "韩泰山", avatar: "泰", color: "#5e5ce6", preview: "新歌写好了", messages: [{ type: "time", text: "昨天" }, { from: "them", text: "新歌 demo 发你了，有空听。" }], replies: [] }
};

const INSTAGRAM = { sungho: { name: "朴成淏", handle: "@sungho_", avatar: "成", color: "#ff9f0a", bio: "经营学 3학년", posts: [{ img: "#ff9f0a", caption: "迎新。", meta: "刚刚" }] } };
const PHOTOS = [{ color: "#ff9f0a", label: "学生会馆" }];
const CALENDAR = [{ date: "10/30 周五", title: "六人聚餐" }];
const MEMOS = [{ title: "待办", body: "· 参加迎新" }];
const MAP_PLACES = [{ name: "学生会馆", desc: "迎新活动" }];
const WEATHER = { city: "서린대학교", temp: "18°", desc: "多云转晴", high: "21°", low: "12°" };