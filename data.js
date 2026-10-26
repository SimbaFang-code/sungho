const APPS = [
  { id: "kakao", name: "KakaoTalk", color: "#fee500", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" },
  { id: "instagram", name: "Instagram", color: "#fff", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
  { id: "photos", name: "相册", color: "#fff", icon: "https://help.apple.com/assets/63D35D3B2B79E30E5F0B4510/en_US/8e1f2b743368e1cb05765b62a2b3b9c5.png" },
  { id: "calendar", name: "日历", color: "#fff", icon: "https://help.apple.com/assets/63D35D3B2B79E30E5F0B4510/en_US/5cc3c9c84e4e22c1282e6e97a1a8c6c0.png" },
  { id: "memo", name: "备忘录", color: "#fff", icon: "https://help.apple.com/assets/63D35D3B2B79E30E5F0B4510/en_US/e1c3e8c14c8a30f81b581f351b717f7d.png" },
  { id: "map", name: "地图", color: "#fff", icon: "https://help.apple.com/assets/63D35D3B2B79E30E5F0B4510/en_US/4d188f386c10c22cc12963806a36e2f8.png" },
  { id: "clock", name: "时钟", color: "#000", icon: "https://help.apple.com/assets/63D35D3B2B79E30E5F0B4510/en_US/5baf6089c71b23f04f7a2f7e7e9b49be.png" },
  { id: "weather", name: "天气", color: "#5ac8fa", icon: "https://help.apple.com/assets/63D35D3B2B79E30E5F0B4510/en_US/8e1f2b743368e1cb05765b62a2b3b9c5.png" },
  { id: "settings", name: "设置", color: "#8e8e93", icon: "https://help.apple.com/assets/63D35D3B2B79E30E5F0B4510/en_US/b3c7780ed4edfbd0cb2a3555d50d09c7.png" },
  { id: "phone", name: "电话", color: "#34c759", icon: "https://help.apple.com/assets/63D35D3B2B79E30E5F0B4510/en_US/7cfe74b2eb8e5153d59a4d3b271bb2f2.png" }
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
      ]},
      { text: "好呀，那我去凑个热闹", require: "groupDone", next: [
        { from: "them", text: "嗯，那聚餐见。别紧张。" },
        { type: "time", text: "周五 21:30 (聚餐后)" },
        { from: "them", text: "今晚云鹤一直找你说话，他是不是有点太热情了？" },
        { from: "me", text: "哈哈，云鹤真的很活泼，还一直给我夹肉。" },
        { from: "them", text: "……" },
        { from: "them", text: "早知道我就不让他坐你旁边了。" },
        { from: "me", text: "诶？学长这是吃醋了吗？" },
        { from: "them", text: "没有。只是觉得你刚来，怕你不习惯。" },
        { from: "them", text: "（过了好一会）其实，是有一点。" },
        { from: "them", text: "刚才看你回消息好慢，是不是在和他们聊天？" },
        { from: "me", text: "没有啦，我在看学长的IG动态。" },
        { from: "them", text: "那个咖啡照片吗？" },
        { from: "me", text: "嗯，看起来很好喝。" },
        { from: "them", text: "那家店就在音乐楼旁边。明天下午没课的话，要不要去？我请你。" },
        { from: "them", text: "只有我们两个。" }
      ]},
      { text: "好呀，明天见", require: "dateAccepted", next: [
        { type: "time", text: "周六 15:00" },
        { from: "them", text: "我到了。你从宿舍出来没？" },
        { from: "me", text: "马上马上！" },
        { from: "them", text: "不急，我在门口等你。今天风有点大，记得穿件外套。" }
      ]}
    ]
  },
  yujin: {
    name: "崔裕真 (同级)", avatar: "裕", color: "#ff9500",
    messages: [
      { type: "time", text: "晚上 20:00" },
      { from: "them", text: "天呐，你认识大三那几个帅哥？特别是那个朴成淏！" }
    ],
    replies: [
      { text: "没有啦，就是迎新认识的", next: [
        { from: "them", text: "女生的直觉告诉我，他绝对对你有意思！" },
        { from: "them", text: "你看群里那个云鹤，一看就是个直男，就想和你搭话。" },
        { from: "them", text: "不过成淏学长那种沉稳型的，吃起醋来一定很可怕哈哈哈哈。" },
        { from: "me", text: "你别瞎说啦！" }
      ]}
    ]
  },
  woonhak: {
    name: "金云鹤", avatar: "云", color: "#bf5af2",
    messages: [
      { type: "time", text: "周五 22:00" },
      { from: "them", text: "学妹！今晚聚餐开心吗！我推荐的炸猪排不错吧！" }
    ],
    replies: [
      { text: "超级好吃！谢谢云鹤学长", next: [
        { from: "them", text: "嘿嘿，下次我再带你去吃更好吃的！" },
        { from: "them", text: "对了，成淏哥刚才跟我说话，感觉语气有点酸酸的，他怎么了？" },
        { from: "me", text: "我也不知道耶……" },
        { from: "them", text: "不管他！学妹你明天有空吗？要不要去看社团招新！" },
        { from: "me", text: "我明天好像有点事，下次吧。" }
      ]}
    ]
  },
  jaehyun: {
    name: "明宰铉", avatar: "宰", color: "#ff375f",
    messages: [{ type: "time", text: "下午 14:00" }, { from: "them", text: "学妹好呀！周五聚餐一定要来哦！" }],
    replies: [
      { text: "好呀，一定去", next: [{ from: "them", text: "成淏可是难得带人来，我们得好好把把关！" }] }
    ]
  },
  group: {
    name: "延世街六人组", avatar: "群", color: "#8e8e93",
    messages: [
      { type: "time", text: "下午 14:30" },
      { from: "them", sender: "明宰铉", text: "各位！周五晚上聚餐，老地方！" },
      { from: "them", sender: "金云鹤", text: "学妹学妹！我是云鹤，周五我请你吃炸猪排！" },
      { from: "them", sender: "朴成淏", text: "别吓到人家。" }
    ],
    replies: [
      { text: "好呀，谢谢大家！", isGroupDone: true, next: [
        { from: "them", sender: "韩泰山", text: "那周五见。" },
        { type: "time", text: "周五 22:30" },
        { from: "them", sender: "金云鹤", text: "今晚学妹超级可爱！" },
        { from: "them", sender: "朴成淏", text: "……" },
        { from: "them", sender: "明宰铉", text: "成淏怎么不说话了？" },
        { from: "them", sender: "李常赫", text: "他可能吃醋了。" }
      ]}
    ]
  },
  riwoo: { name: "李常赫", avatar: "常", color: "#30d158", messages: [{ type: "time", text: "昨天" }, { from: "them", text: "舞蹈社这周有开放练习。" }], replies: [] },
  taesan: { name: "韩泰山", avatar: "泰", color: "#5e5ce6", messages: [{ type: "time", text: "昨天" }, { from: "them", text: "新歌 demo 发在 IG 了，有空听。" }], replies: [] },
  leehan: { name: "金桐儇", avatar: "桐", color: "#64d2ff", messages: [{ type: "time", text: "昨天" }, { from: "them", text: "图书馆三楼靠窗位置很好。" }], replies: [] }
};

const MEMOS = [
  { title: "选课笔记", body: "周一上午有经营学。\n周三去图书馆。" },
  { title: "剧情提示 (密码: 0530)", isLocked: true, body: "【剧本杀指南】\n\n1. 主线推进：去群聊回复大家，然后回成淏私聊。\n2. 待解锁：成淏约你明天去咖啡店（需在 IG 确认他的动态，或在私聊中答应）。\n3. 八卦：看看同级好友裕真怎么说。" }
];

const MAP_PLACES = [
  { id: "student_hall", name: "学生会馆", desc: "迎新活动地。" },
  { id: "restaurant", name: "老地方烤肉店", desc: "聚餐定在这里。" },
  { id: "cafe", name: "音乐楼旁咖啡店", desc: "成淏推荐的店。" }
];

const INSTAGRAM_FEED = [
  { id: "post_1", user: "taesan_music", avatar: "泰", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600", caption: "新demo. 快来听。" },
  { id: "post_2", user: "sungho_", avatar: "成", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600", caption: "coffee. 明天下午会再来。" }
];