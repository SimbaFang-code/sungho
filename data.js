const APPS = [
  { id: "kakao", name: "KakaoTalk", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" },
  { id: "instagram", name: "Instagram", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
  { id: "photos", name: "相册", customClass: "icon-photos" },
  { id: "calendar", name: "日历", customClass: "icon-calendar" },
  { id: "memo", name: "备忘录", customClass: "icon-notes" },
  { id: "map", name: "地图", customClass: "icon-maps" },
  { id: "clock", name: "时钟", customClass: "icon-clock" },
  { id: "weather", name: "天气", customClass: "icon-weather" },
  { id: "settings", name: "设置", customClass: "icon-settings" },
  { id: "phone", name: "电话", customClass: "icon-phone" }
];

const MEMOS = [
  { id: "m1", title: "选课笔记", date: "今天 09:00", content: "周一上午有经营学，记得带计算器。\n周三去图书馆借两本全英教材。" },
  { id: "m2", title: "聚餐记录", date: "昨天 22:00", content: "周五晚上六人聚餐，老地方烤肉店。\n宰铉学长请客，大家都很照顾我。" },
  { id: "m3", title: "绝密剧情提示", date: "现在", isLocked: true, content: "【剧本杀防卡关指南】\n\n1. 主线推进：去群聊回复宰铉，然后回成淏私聊触发吃醋。\n2. 线下解锁：去地图打卡『老地方烤肉店』。\n3. IG联动：去 IG 给成淏点赞，会触发新的心跳私信。" }
];

const CHATS = {
  sungho: {
    name: "朴成淏", avatar: "成", color: "#ff9f0a",
    messages: [
      { type: "time", text: "9月2日 迎新日 上午 09:30" },
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "往左手边那条路走，看到学生会馆就到了。" },
      { type: "time", text: "9月2日 迎新日 晚上 21:00" },
      { from: "them", text: "今天带你办完手续，看你好像还是有点晕头转向的。" },
      { from: "me", text: "哈哈，西凛大真的太大了。" },
      { type: "time", text: "10月15日 晚上 23:15" },
      { from: "them", text: "今天社团开会累不累？" },
      { from: "me", text: "有点，不过学长你今天怎么也这么晚？" },
      { from: "them", text: "在看点资料。早点休息吧，晚安。" },
      { type: "time", text: "今天 下午 16:00" },
      { from: "them", text: "宰铉在群里说周五聚餐，你看到了吗？" }
    ],
    replies: [
      { text: "看到啦，我一定会去的", next: [
        { from: "them", text: "嗯，去吧，大家都很想见你。" },
        { type: "time", text: "今天 晚上 22:30" },
        { from: "them", text: "今晚云鹤一直找你说话，他是不是有点太热情了？" },
        { from: "me", text: "哈哈，云鹤真的很活泼，还一直给我发搞笑视频。" },
        { from: "them", text: "……" },
        { from: "them", text: "早知道我就不让他加你了。" },
        { from: "me", text: "诶？学长这是吃醋了吗？" },
        { from: "them", text: "没有。只是觉得你刚来，怕你不习惯。" },
        { from: "them", text: "（过了好一会）其实，是有一点。" },
        { from: "them", text: "看你回我消息好慢，是不是在和别人聊天？" },
        { from: "me", text: "没有啦，我在看学长的 IG 动态。" },
        { from: "them", text: "那个咖啡照片吗？" },
        { from: "me", text: "嗯，看起来很好喝。" },
        { from: "them", text: "那家店就在音乐楼旁边。明天下午没课的话，要不要去？我请你。" },
        { from: "them", text: "只有我们两个。" }
      ]}
    ]
  },
  riwoo: {
    name: "李常赫", avatar: "常", color: "#30d158",
    messages: [{ type: "time", text: "昨天 18:00" }, { from: "them", text: "舞蹈社这周有开放练习，你要来看吗？" }],
    replies: [{ text: "好呀，常赫学长", next: [{ from: "them", text: "嗯，成淏也会来。" }] }]
  },
  jaehyun: {
    name: "明宰铉", avatar: "宰", color: "#ff375f",
    messages: [{ type: "time", text: "昨天 19:00" }, { from: "them", text: "学妹！周五聚餐一定要来啊！" }],
    replies: [{ text: "好呀，一定去", next: [{ from: "them", text: "成淏可是难得带人来，我们得好好把把关！" }] }]
  },
  taesan: {
    name: "韩泰山", avatar: "泰", color: "#5e5ce6",
    messages: [{ type: "time", text: "昨天 20:00" }, { from: "them", text: "新歌 demo 发在 IG 了，有空听。" }],
    replies: [{ text: "现在就去听！", next: [{ from: "them", text: "听完给点意见。" }] }]
  },
  leehan: {
    name: "金桐儇", avatar: "桐", color: "#64d2ff",
    messages: [{ type: "time", text: "昨天 20:30" }, { from: "them", text: "图书馆三楼靠窗位置很好，推荐给你。" }],
    replies: [{ text: "谢谢桐儇学长，我明天去试试", next: [{ from: "them", text: "嗯，光线很好，适合看书。" }] }]
  },
  woonhak: {
    name: "金云鹤", avatar: "云", color: "#bf5af2",
    messages: [{ type: "time", text: "昨天 22:00" }, { from: "them", text: "学妹！昨晚聚餐开心吗！我推荐的炸猪排不错吧！" }],
    replies: [{ text: "超级好吃！谢谢云鹤学长", next: [{ from: "them", text: "嘿嘿，下次我再带你去吃更好吃的！" }] }]
  },
  group: {
    name: "延世街六人组", avatar: "群", color: "#8e8e93",
    messages: [
      { type: "time", text: "今天 下午 14:30" },
      { from: "them", sender: "明宰铉", text: "各位！这周五晚上聚餐，老地方！" },
      { from: "them", sender: "金云鹤", text: "学妹学妹！周五我请你吃炸猪排！" },
      { from: "them", sender: "朴成淏", text: "别吓到人家。" }
    ],
    replies: [
      { text: "好呀，谢谢大家！", isGroupDone: true, next: [
        { from: "them", sender: "韩泰山", text: "那周五见。" },
        { from: "them", sender: "李常赫", text: "收到。" },
        { type: "time", text: "今天 晚上 19:30" },
        { from: "them", sender: "金云鹤", text: "学妹今晚没怎么说话，是不是累了？" },
        { from: "them", sender: "朴成淏", text: "……" },
        { from: "them", sender: "明宰铉", text: "成淏怎么不说话了？" },
        { from: "them", sender: "李常赫", text: "他可能吃醋了。" }
      ]}
    ]
  },
  yujin: {
    name: "崔裕真 (同级)", avatar: "裕", color: "#ff9500",
    messages: [{ type: "time", text: "昨天 21:00" }, { from: "them", text: "天呐，你认识大三那几个帅哥？那个朴成淏好像对你很特殊哦！" }],
    replies: []
  }
};

const MAP_PLACES = [
  { id: "restaurant", name: "老地方烤肉店", desc: "聚餐定在这里。" },
  { id: "cafe_date", name: "音乐楼旁咖啡店", desc: "成淏推荐的店。" }
];

const INSTAGRAM_FEED = [
  { id: "post_1", user: "taesan_music", avatar: "泰", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600", caption: "新demo. 快来听。" },
  { id: "post_2", user: "sungho_", avatar: "成", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600", caption: "coffee. 明天下午会再来。" }
];