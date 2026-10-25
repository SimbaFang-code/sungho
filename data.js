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
    preview: "对了，周五晚上我们几个要聚餐，你也来吧？",
    messages: [
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "哈哈没关系，你现在在哪栋楼附近？" },
      { from: "me", text: "好像在一棵很大的银杏树旁边" },
      { from: "them", text: "那我知道了，你往左手边那条路走，看到学生会馆就到了" },
      { from: "them", text: "迎新地点在学生会馆一楼，别走错啦" }
    ],
    // 预设的固定回复选项
    replies: [
      { text: "找到了！谢谢你学长", next: [
        { from: "them", text: "不客气，我是经营学大三的朴成淏，以后有事可以问我" },
        { from: "them", text: "对了，周五晚上我们几个要聚餐，你也来吧？" }
      ]}
    ]
  },
  jaehyun: {
    name: "明宰铉",
    avatar: "宰",
    color: "#ff375f",
    preview: "学妹好呀！欢迎加入我们的群聊哈哈",
    messages: [
      { from: "them", text: "学妹好呀！我是传媒系的明宰铉" },
      { from: "them", text: "成淏那个闷葫芦居然会主动带学妹，稀奇" },
      { from: "me", text: "宰铉学长好，迎新那天多亏了成淏学长" },
      { from: "them", text: "哈哈他平时就是热心肠。欢迎加入我们的群聊！" }
    ],
    replies: []
  },
  yujin: {
    name: "崔裕真 (同级)",
    avatar: "裕",
    color: "#ff9500",
    preview: "天呐你认识大三的学长？太厉害了吧",
    messages: [
      { from: "them", text: "你报到弄完了吗？" },
      { from: "them", text: "天呐你认识大三的学长？太厉害了吧" },
      { from: "me", text: "迎新的时候迷路碰到的，人很好" },
      { from: "them", text: "呜呜我也想认识学长，下次聚餐带带我！" }
    ],
    replies: []
  },
  minji: {
    name: "姜敏智 (同级)",
    avatar: "智",
    color: "#af52de",
    preview: "明天的课在哪个教学楼呀？",
    messages: [
      { from: "them", text: "明天的课在哪个教学楼呀？" },
      { from: "me", text: "我看一下课表，好像在人文楼" },
      { from: "them", text: "好，那我们明天早上一起去吧！" }
    ],
    replies: []
  },
  group: {
    name: "延世街六人组",
    avatar: "群",
    color: "#8e8e93",
    preview: "宰铉：周五聚餐定啦，老地方！",
    messages: [
      { from: "them", sender: "明宰铉", text: "周五晚上聚餐定啦，老地方！" },
      { from: "them", sender: "金云鹤", text: "我要吃炸猪排！！" },
      { from: "them", sender: "李常赫", text: "你上周才吃过" },
      { from: "them", sender: "金云鹤", text: "那不一样，食堂的炸猪排是信仰" },
      { from: "them", sender: "朴成淏", text: "学妹也一起来吧" }
    ],
    replies: [
      { text: "好呀，谢谢学长们带我！", next: [
        { from: "them", sender: "韩泰山", text: "人多热闹。正好最近写了首新歌，到时候放给你们听" },
        { from: "them", sender: "金桐儇", text: "期待泰山的自作曲" }
      ]}
    ]
  },
  class: {
    name: "大一经营学 01班",
    avatar: "课",
    color: "#34c759",
    preview: "教授说下周有小测验",
    messages: [
      { from: "them", sender: "助教", text: "各位同学，下周本课程有一次随堂小测验，请大家做好准备。" },
      { from: "them", sender: "崔裕真", text: "天呐，刚开学就测验……" }
    ],
    replies: []
  }
};

const INSTAGRAM = {
  sungho: { name: "朴成淏", handle: "@sungho_", avatar: "成", color: "#ff9f0a", bio: "经营学 3학년\n서린대학교 学生会", posts: [{ img: "#ff9f0a", caption: "迎新周终于结束了，大家辛苦了。", meta: "3小时前" }] },
  taesan: { name: "韩泰山", handle: "@taesan_music", avatar: "泰", color: "#5e5ce6", bio: "音乐 · 3학년", posts: [{ img: "#5e5ce6", caption: "《네가 생각난단 말이야》 demo 完成。", meta: "8小时前" }] }
};

const PHOTOS = [{ color: "#ff9f0a", label: "迎新周" }];
const CALENDAR = [{ date: "10/26 周一", title: "迎新周" }];
const MEMOS = [{ title: "新生待办", body: "· 去学生会馆领材料" }];
const MAP_PLACES = [{ name: "学生会馆", desc: "迎新活动" }];
const WEATHER = { city: "서린대학교", temp: "18°", desc: "多云转晴", high: "21°", low: "12°" };