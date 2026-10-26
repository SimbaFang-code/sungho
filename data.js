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
    preview: "其实，那天迎新看到你，我就觉得你像迷路的小鹿。",
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
        { from: "them", text: "不客气，我是经营学大三的朴成淏，以后有事可以问我。" },
        { from: "them", text: "对了，周五晚上我们几个朋友要聚餐，你要一起来吗？宰铉他们都很随和。" },
        { from: "them", text: "如果觉得不自在也没关系，不用勉强。" }
      ]},
      { text: "好呀，那我去凑个热闹", next: [
        { from: "them", text: "嗯，那周五见。别紧张，有我在。" },
        { from: "them", text: "（过了一周，聚餐结束后）" },
        { from: "them", text: "今天聚餐，你没被宰铉和云鹤吓到吧？" },
        { from: "me", text: "没有啦，大家都很好，特别感谢学长一直照顾我。" },
        { from: "them", text: "那就好。其实……我挺怕你觉得我们太吵的。" },
        { from: "them", text: "（又过了一个月，天气转凉了）" },
        { from: "them", text: "今天在图书馆看到你睡着了，给你披了件外套。" },
        { from: "me", text: "啊！我都没发现，谢谢学长，外套我洗好还你。" },
        { from: "them", text: "不急，你穿着吧，最近降温了。" },
        { from: "them", text: "其实，那天迎新看到你，我就觉得你像迷路的小鹿。" },
        { from: "them", text: "我本来想准备得更完美一点再说，但我等不及了。" },
        { from: "them", text: "可以做我女朋友吗？" }
      ]},
      { text: "可以，我也喜欢成淏学长", next: [
        { from: "them", text: "真的吗？太好了。" },
        { from: "them", text: "我现在就在你宿舍楼下，你能下来一下吗？" },
        { from: "me", text: "诶？我马上下来！" },
        { from: "them", text: "（十分钟后）" },
        { from: "them", text: "以后，你就是我的小鹿了。" }
      ]}
    ]
  },
  riwoo: {
    name: "李常赫",
    avatar: "常",
    color: "#30d158",
    preview: "舞蹈社这周有开放练习，想来可以看看",
    messages: [
      { from: "them", text: "听说你是成淏带过来的学妹？" }
    ],
    replies: [
      { text: "常赫学长好！", next: [
        { from: "them", text: "嗯，他挺好的。" },
        { from: "them", text: "舞蹈社这周有开放练习，想来可以看看。" }
      ]}
    ]
  },
  taesan: {
    name: "韩泰山",
    avatar: "泰",
    color: "#5e5ce6",
    preview: "有空可以来音乐楼听",
    messages: [
      { from: "them", text: "你是那个迎新时迷路的新生吧" }
    ],
    replies: [
      { text: "……这么快就传开了吗", next: [
        { from: "them", text: "哈哈，成淏说的。" },
        { from: "them", text: "最近在写一首新歌，有空可以来音乐楼听。" }
      ]}
    ]
  },
  leehan: {
    name: "金桐儇",
    avatar: "桐",
    color: "#64d2ff",
    preview: "图书馆三楼靠窗的位置光线很好",
    messages: [
      { from: "them", text: "你好呀，我是生物系的桐儇。" }
    ],
    replies: [
      { text: "桐儇学长好，请多指教", next: [
        { from: "them", text: "你平时喜欢去图书馆吗" },
        { from: "them", text: "图书馆三楼靠窗的位置光线很好，推荐" }
      ]}
    ]
  },
  woonhak: {
    name: "金云鹤",
    avatar: "云",
    color: "#bf5af2",
    preview: "食堂今天的炸猪排超级好吃！！",
    messages: [
      { from: "them", text: "学妹！！食堂今天的炸猪排超级好吃！！" }
    ],
    replies: [
      { text: "好，我中午去看看", next: [
        { from: "them", text: "记得叫上成淏哥，他老是忘记吃饭" }
      ]}
    ]
  },
  jaehyun: {
    name: "明宰铉",
    avatar: "宰",
    color: "#ff375f",
    preview: "成淏你居然会主动带学妹！",
    messages: [
      { from: "them", text: "学妹好呀！我是传媒系的明宰铉" }
    ],
    replies: [
      { text: "宰铉学长好", next: [
        { from: "them", text: "哈哈，成淏你居然会主动带学妹！太阳打西边出来了" }
      ]}
    ]
  },
  yujin: {
    name: "崔裕真 (同级)",
    avatar: "裕",
    color: "#ff9500",
    preview: "明天一起去上课吧",
    messages: [
      { from: "them", text: "你报完到了吗？" },
      { from: "them", text: "明天一起去上课吧！" }
    ],
    replies: []
  },
  group: {
    name: "延世街六人组",
    avatar: "群",
    color: "#8e8e93",
    preview: "宰铉：恭喜成淏脱单！",
    messages: [
      { from: "them", sender: "明宰铉", text: "各位！周五晚上聚餐定啦，老地方！" },
      { from: "them", sender: "金云鹤", text: "我要吃炸猪排！！" },
      { from: "them", sender: "朴成淏", text: "我带了个人来，刚在迎新认识的学妹。" }
    ],
    replies: [
      { text: "学长学姐们好，我是大一新生！", next: [
        { from: "them", sender: "明宰铉", text: "学妹好呀！欢迎加入我们！" },
        { from: "them", sender: "金云鹤", text: "学妹！周五请你吃炸猪排！" },
        { from: "them", sender: "朴成淏", text: "别吓到人家。" },
        { from: "them", sender: "金云鹤", text: "（几个月后）" },
        { from: "them", sender: "明宰铉", text: "重磅消息！成淏和学妹在楼下抱在一起了！" },
        { from: "them", sender: "韩泰山", text: "意料之中。" },
        { from: "them", sender: "李常赫", text: "恭喜。" },
        { from: "them", sender: "金桐儇", text: "终于。" },
        { from: "them", sender: "金云鹤", text: "啊啊啊啊啊成淏哥请客！！" }
      ]}
    ]
  }
};

const INSTAGRAM = {
  sungho: { name: "朴成淏", handle: "@sungho_", avatar: "成", color: "#ff9f0a", bio: "经营学 3학년", posts: [{ img: "#ff9f0a", caption: "我的小鹿。", meta: "刚刚" }] }
};
const PHOTOS = [{ color: "#ff9f0a", label: "学生会馆" }];
const CALENDAR = [{ date: "今天", title: "和成淏约会" }];
const MEMOS = [{ title: "日记", body: "今天，我们正式在一起了。" }];
const MAP_PLACES = [{ name: "宿舍楼下", desc: "刚刚在这里告白" }];
const WEATHER = { city: "서린대학교", temp: "15°", desc: "下着小雨", high: "18°", low: "10°" };