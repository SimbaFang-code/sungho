var APPS = [
  { id: "kakao", name: "KakaoTalk", iconClass: "icon-kakao" },
  { id: "instagram", name: "Instagram", iconClass: "icon-ig" },
  { id: "photos", name: "相册", iconClass: "icon-photos" },
  { id: "calendar", name: "日历", iconClass: "icon-calendar" },
  { id: "memo", name: "备忘录", iconClass: "icon-notes" },
  { id: "map", name: "地图", iconClass: "icon-maps" },
  { id: "clock", name: "时钟", iconClass: "icon-clock" },
  { id: "weather", name: "天气", iconClass: "icon-weather" },
  { id: "settings", name: "设置", iconClass: "icon-settings" },
  { id: "x", name: "X", iconClass: "icon-x" }
];

var MEMOS = [
  { id: "m1", title: "选课笔记", date: "今天 09:00", content: "周一上午有经营学，记得带计算器。\n周三去图书馆借两本全英教材。" },
  { id: "m2", title: "绝密剧情提示", date: "现在", isLocked: true, content: "【剧本杀防卡关指南】\n\n1. 聊天触发：去 KakaoTalk 找成淏聊天，点击输入框触发大事件！\n2. 线下事件：大事件聊完后，必须去【地图】点击指定地点打卡。\n3. 备忘录密码是 0904，解锁后看这里。" }
];

var CHATS = {
  sungho: { 
    name: "朴成淏", avatarClass: "avatar-sh", color: "#ff9f0a", time: "刚刚", preview: "明天见。",
    history: [
      { type: "time", text: "9月2日 迎新日" },
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准。" },
      { from: "them", text: "你现在在哪栋楼附近？" },
      { from: "me", text: "好像在一棵很大的银杏树旁边" },
      { from: "them", text: "那我知道了，你往左手边那条路走，看到学生会馆就到了。" },
      { from: "me", text: "找到了！谢谢学长！" },
      { type: "time", text: "今天 下午 16:00" },
      { from: "them", text: "周五晚上聚餐，老地方烤肉店，你一定要来哦。" }
    ],
    story: [
      { me: "好呀，我一定去！", them: "嗯。对了，记得穿得好看点，我想和你拍照。" },
      { me: "学长，最近期中考试你能教教我吗？", them: "当然。那这周末去咖啡店吧，我帮你辅导。" },
      { me: "听说要降温了，我没带厚衣服。", them: "怎么这么粗心？没事，明天上课我帮你想想办法。" },
      { me: "体测快来了，800米好可怕。", them: "别怕，到时候我会在终点守着你的。" },
      { me: "学校有服装设计大赛，你要参加吗？", them: "嗯，被拉去当模特了。缺个女伴，你要不要和我搭档？" }
    ]
  },
  riwoo: { 
    name: "李常赫", avatarClass: "avatar-rw", color: "#30d158", time: "昨天", preview: "舞蹈社的日常。",
    history: [
      { type: "time", text: "9月10日" },
      { from: "them", text: "我是李常赫。听说成淏带你来舞蹈室了。" },
      { from: "me", text: "啊，是的常赫学长！学长跳舞超帅的！" },
      { from: "them", text: "谢谢。如果觉得经营学无聊，可以来舞蹈社看看。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "成淏最近很奇怪，老往舞蹈室跑。他以前可不这样。" },
      { from: "me", text: "诶？为什么呀？" },
      { from: "them", text: "你猜。他说是为了锻炼身体，但我看他一直盯着手机等消息。" }
    ],
    story: [
      { me: "常赫学长，明天舞蹈社有活动吗？", them: "有。不过成淏也会来，他最近练得很勤。" },
      { me: "诶？他练什么？", them: "不知道。不过他老是偷看你，我都看到了。" }
    ]
  },
  jaehyun: { 
    name: "明宰铉", avatarClass: "avatar-jh", color: "#ff375f", time: "昨天", preview: "聚餐定啦！",
    history: [
      { type: "time", text: "9月12日" },
      { from: "them", text: "学妹好呀！我是传媒系的明宰铉！" },
      { from: "me", text: "宰铉学长好！" },
      { from: "them", text: "周五聚餐一定要来啊！成淏可是难得带人来！" },
      { type: "time", text: "昨天" },
      { from: "them", text: "学妹，你觉得成淏怎么样？他这个人啊，虽然闷，但很靠谱的。" }
    ],
    story: [
      { me: "我觉得他挺好的。", them: "好就行！我跟你说，他可是我们几个里最纯情的。每次提到你，耳朵都红了。" },
      { me: "真的吗？", them: "我发誓！我赌一百块，他绝对喜欢你！" }
    ]
  },
  taesan: { 
    name: "韩泰山", avatarClass: "avatar-ts", color: "#5e5ce6", time: "昨天", preview: "新歌demo。",
    history: [
      { type: "time", text: "9月20日" },
      { from: "them", text: "我是韩泰山。新歌发了，有空听。" },
      { from: "me", text: "好！我很期待！" },
      { type: "time", text: "昨天" },
      { from: "them", text: "歌听了吗？副歌那段，其实是看着你和成淏打闹写的。" }
    ],
    story: [
      { me: "泰山学长，新歌很好听！", them: "谢谢。其实副歌那段旋律，是看着你和成淏打闹的时候写的。" },
      { me: "啊？我们的打闹？", them: "嗯，很有生命力。别告诉成淏，他会脸红的。" }
    ]
  },
  leehan: { 
    name: "金桐儇", avatarClass: "avatar-lh", color: "#64d2ff", time: "昨天", preview: "图书馆见。",
    history: [
      { type: "time", text: "10月1日" },
      { from: "them", text: "你好，我是金桐儇。三楼靠窗位置很好。" },
      { from: "me", text: "谢谢学长！我明天去看看。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "图书馆三楼，成淏占了个双人座。他在等你。" }
    ],
    story: [
      { me: "桐儇学长，你在图书馆吗？", them: "在。成淏也在，他占了个双人座，说在等人。" },
      { me: "等人？等谁？", them: "你觉得呢？他已经在往门口看了十分钟了。" }
    ]
  },
  woonhak: { 
    name: "金云鹤", avatarClass: "avatar-wh", color: "#bf5af2", time: "昨天", preview: "学妹好！",
    history: [
      { type: "time", text: "9月5日" },
      { from: "them", text: "学妹好！我是云鹤！食堂炸猪排超好吃！" },
      { from: "me", text: "云鹤学长好！我改天去尝尝。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "学妹学妹！我听说成淏哥手机壁纸换成你的照片了！" }
    ],
    story: [
      { me: "云鹤学长，最近有什么好玩的事吗？", them: "有！我听说成淏哥手机壁纸换成你的照片了！他没告诉你吗？" },
      { me: "真的假的？", them: "真的！那天他手机亮了，我刚好看到了。不过你别告诉他是我说的！" }
    ]
  },
  group: {
    name: "6+1小分队", avatarClass: "avatar-group", color: "#8e8e93", time: "下午 14:30", preview: "朴成淏：我带学妹来。",
    history: [
      { type: "time", text: "今天 14:30" },
      { from: "them", sender: "明宰铉", text: "各位！周五晚上聚餐，老地方！" },
      { from: "me", text: "收到！" },
      { from: "them", sender: "金云鹤", text: "好耶！有新开的店！" },
      { from: "them", sender: "李常赫", text: "你上周不是才去过吗？" },
      { from: "them", sender: "金云鹤", text: "那不一样！" },
      { from: "them", sender: "朴成淏", text: "我带学妹来。" },
      { from: "them", sender: "明宰铉", text: "？！成淏你居然会主动带人！" },
      { from: "them", sender: "韩泰山", text: "他哪天不主动？" },
      { from: "them", sender: "金桐儇", text: "就是，每天抱着手机傻笑。" }
    ],
    story: [
      { me: "学长们好！我会准时到的！", them: "欢迎欢迎！", sender: "明宰铉" },
      { me: "成淏学长也会去吗？", them: "他当然去啦！为了和你坐一起，他刚才还特意找老板换了位置。", sender: "金云鹤" },
      { me: "听说要期中考试了，好焦虑。", them: "没事！我们周末一起去寺庙拜拜吧！顺便爬山！", sender: "金云鹤" }
    ]
  }
};

var MAP_PLACES = [
  { 
    id: "p1", name: "老地方烤肉店", x: 50, y: 45, clickCount: 0, isBigEvent: true,
    events: [
      { text: "你到了聚餐地点，大家已经坐好了。成淏旁边空了一个位置。", choices: ["坐在他旁边", "坐在云鹤旁边"], reply: "【朴成淏】刚刚聚餐，云鹤一直给你夹肉，我有点不舒服。下次我给你夹，你只能吃我夹的。" },
      { text: "聚餐结束，大家在门口告别。", choices: ["等成淏一起走", "跟闺蜜先走"], reply: "【朴成淏】刚刚以为你丢下我先走了，结果看到你在门口等我。走吧，今晚这路，希望它再长一点。" },
      { text: "第二次聚餐，大家都在玩游戏。", choices: ["帮成淏挡酒", "自己喝掉"], reply: "【朴成淏】你干嘛替我挡酒？不过刚刚你脸红的样子，真的很好看。他们都在起哄，我居然有点开心。" }
    ]
  },
  { 
    id: "p2", name: "中央图书馆", x: 25, y: 30, clickCount: 0, isBigEvent: true,
    events: [
      { text: "你在书架旁遇到成淏，他正踮脚找一本高处的书。", choices: ["帮他拿下来", "假装没看见"], reply: "【朴成淏】刚刚看到你踮脚的样子，像只小兔子。书拿到了，不过下次这种事，我帮你做就好。" },
      { text: "成淏趴在桌上睡着了，旁边还有没写完的报告。", choices: ["给他披件外套", "叫醒他"], reply: "【朴成淏】醒来看到你的外套了，没压坏你的衣服吧？刚刚醒来第一眼看到是你，感觉很好。" },
      { text: "期末周，你为了占座起得很早。推开门，成淏已经在那儿了，旁边放着一杯热咖啡。", choices: ["坐下喝咖啡", "去外面买"], reply: "【朴成淏】咖啡是给你的。我知道你怕苦，加了两块糖。" }
    ]
  },
  { 
    id: "p3", name: "篮球场", x: 75, y: 20, clickCount: 0, isBigEvent: true,
    events: [
      { text: "成淏刚打完一场比赛，满头大汗地坐在场边。", choices: ["跑过去给他送水", "站在远处看"], reply: "【朴成淏】刚刚的水，谢谢。我投进三分球的时候，余光看到你在欢呼，就那一瞬间，我特别想跑过去抱你。" },
      { text: "篮球滚到了你脚边，成淏跑过来捡。", choices: ["把球扔回给他", "抱在怀里逗他"], reply: "【朴成淏】刚才故意不给我球是吧？不乖。下次见面我可要抓着你胳膊不放了。" },
      { text: "比赛结束，他正被一群女生围着。", choices: ["转身走开", "在操场门口等他"], reply: "【朴成淏】刚才去哪了？我一眼都没看她们，一直在找你。" }
    ]
  },
  { 
    id: "p4", name: "音乐楼", x: 80, y: 65, clickCount: 0, isBigEvent: true,
    events: [
      { text: "经过琴房，听到里面传出好听的吉他声，是成淏在弹。", choices: ["推门进去听", "在门外安静听完"], reply: "【朴成淏】刚刚门外是你吧？这首曲子刚写好，我想第一个弹给你听。想不想坐近一点？" },
      { text: "成淏在练吉他，手指磨破了。", choices: ["拿创可贴给他", "让他自己处理"], reply: "【朴成淏】谢谢。其实一点都不疼，但你给我贴创可贴的时候，心跳有点快。" },
      { text: "社团招新，成淏坐在那里发传单。", choices: ["帮他一起发", "给他买杯咖啡"], reply: "【朴成淏】咖啡很好喝。不过刚刚好多男生都在看你，我有点后悔让你来帮忙了。" }
    ]
  },
  { 
    id: "p5", name: "校园咖啡店", x: 20, y: 60, clickCount: 0, isBigEvent: true,
    events: [
      { text: "成淏一个人在喝咖啡，看起来在发呆。", choices: ["坐过去", "给他发消息"], reply: "【朴成淏】刚看到你了，怎么不坐过来？我想和你一起喝，顺便聊聊关于我们的事。" },
      { text: "下雨了，他站在店门口没带伞。", choices: ["走过去共伞", "把伞留给他"], reply: "【朴成淏】你把伞给我了？刚刚我们在伞下，距离近到我差点没忍住。" },
      { text: "你在点单，他站在你后面。", choices: ["帮他买单", "AA制"], reply: "【朴成淏】怎么偷偷帮我买单了？下次必须让我请回来，我还想让店员误会一下我们是一对。" }
    ]
  },
  { 
    id: "p6", name: "银杏大道", x: 65, y: 80, clickCount: 0, isBigEvent: true,
    events: [
      { text: "银杏叶落满一地，他在拍照。", choices: ["偷偷走进他镜头", "在旁边静静看"], reply: "【朴成淏】刚才那张照片拍到了你的背影。很好看，我已经设成屏保了，别笑我。" },
      { text: "冷风吹过，你打了一个喷嚏。", choices: ["抱怨天气", "缩缩脖子"], reply: "【朴成淏】天冷了，下次出门记得多穿点。刚刚看你发抖，好想把你抱进怀里。" },
      { text: "成淏在捡地上的银杏叶。", choices: ["凑过去看", "帮他一起捡"], reply: "【朴成淏】我想挑一片最好看的夹在书里。你想选哪片？我们一起选。" }
    ]
  },
  { 
    id: "p7", name: "操场看台", x: 15, y: 25, clickCount: 0, isBigEvent: true,
    events: [
      { text: "晚上操场很安静，你来看星星。", choices: ["给成淏发消息", "一个人坐着"], reply: "【朴成淏】看到消息我就跑下来了。你一个人坐在这，也不怕冷。披上我的外套。" },
      { text: "他在看台上听歌。", choices: ["拿走他一只耳机", "不打扰他"], reply: "【朴成淏】分你一只耳机。这首歌的歌词，挺像我们现在的。" },
      { text: "体育课测试跑步，你跑完后气喘吁吁。", choices: ["去他旁边休息", "自己走开"], reply: "【朴成淏】刚刚跑步的样子很可爱。不过下次别那么拼，我会心疼的，现在别人都在看我。" }
    ]
  },
  { 
    id: "p8", name: "学生会馆", x: 35, y: 50, clickCount: 0, isBigEvent: true,
    events: [
      { text: "你去交材料，碰到正在开会的成淏。", choices: ["对他笑笑", "假装没看到"], reply: "【朴成淏】刚刚对我笑的时候，我差点忘了自己在开会。等下我去找你。" },
      { text: "他在整理资料，看起来很累。", choices: ["给他泡咖啡", "帮他整理"], reply: "【朴成淏】你怎么来了？谢谢，有你在我感觉轻松多了。等我一下，马上弄完，我们一起去吃饭。" },
      { text: "学生会聚餐，他旁边依然给你留着位置。", choices: ["坐下来", "坐在对面"], reply: "【朴成淏】坐对面我也能一直看着你。不过还是想离你近一点。" }
    ]
  },
  { 
    id: "p9", name: "图书馆三楼", x: 35, y: 65, clickCount: 0, isBigEvent: true,
    events: [
      { text: "你复习到很晚，困得不行。", choices: ["趴在桌上睡", "去洗把脸"], reply: "【朴成淏】看你趴着睡着了，帮你把灯挡上了。刚刚看着你睡颜，我好想时间停在这一刻。" },
      { text: "遇到桐儇，他指了指角落里的空位。", choices: ["坐过去", "自己找位置"], reply: "【金桐儇】那个位置成淏天天坐，给你留的。他刚去吃饭了，你在这等他吧。" },
      { text: "你在借阅台遇到他。", choices: ["帮他拿书", "自己借书"], reply: "【朴成淏】刚刚你帮我拿书的时候，手指碰到了。我心跳有点快，你感觉到了吗？" }
    ]
  },
  { 
    id: "p10", name: "校门口夜市", x: 85, y: 40, clickCount: 0, isBigEvent: true,
    events: [
      { text: "夜市上人很多，你差点被挤散。", choices: ["抓住他的衣角", "自己走开"], reply: "【朴成淏】刚刚你抓着我衣角，我真的好想直接牵你的手。下次不要躲开了，好吗？" },
      { text: "他在买糖葫芦。", choices: ["凑过去看", "站在旁边等"], reply: "【朴成淏】给你买了一串。刚刚你盯着看的样子，像只馋猫。真想把最好的都给你。" },
      { text: "准备回学校了。", choices: ["让他送你回宿舍", "自己回去"], reply: "【朴成淏】我送你回去吧。这么晚了，我不放心。刚刚你走在我身边，希望这条路再长一点。" }
    ]
  },
  { 
    id: "p11", name: "咖啡店", x: 25, y: 55, clickCount: 0, isBigEvent: true,
    events: [
      { text: "你带着课本约成淏在咖啡店请教经营学问题。他讲得很认真，你却盯着他发呆。", choices: ["夸他讲得好", "假装在听"], reply: "【朴成淏】刚刚看你盯着我看，书都拿倒了。其实你一直看我的话，我完全讲不下去的。" },
      { text: "遇到一道超难的宏观经济学题，你抓着头发发愁。成淏凑过来看。", choices: ["把笔递给他", "自己死磕"], reply: "【朴成淏】别死磕了，我教你。不过讲完这道题，你要请我喝咖啡。" },
      { text: "咖啡店快打烊了，你们还在讨论小组作业。", choices: ["提醒他时间", "假装不知道"], reply: "【朴成淏】已经这么晚了？那我送你回宿舍。正好，我也想和你多待一会儿。" }
    ]
  },
  { 
    id: "p12", name: "校外智多寺", x: 10, y: 15, clickCount: 0, isBigEvent: true,
    events: [
      { text: "期中考试前，你们七个人一起去爬山烧香。你爬不动了，在台阶上喘气。", choices: ["让成淏拉你一把", "自己慢慢爬"], reply: "【朴成淏】手给我。刚刚你抓着我手的时候，突然觉得这山也不算陡了。" },
      { text: "在寺庙许愿树下，成淏写了块许愿牌。你偷看。", choices: ["凑近去看", "装作不看"], reply: "【朴成淏】不许偷看。不过如果你想知道，我可以直接告诉你。" },
      { text: "下山的时候，云鹤他们在前面打闹，你和成淏走在后面。", choices: ["说点浪漫的话", "安静走着"], reply: "【朴成淏】刚刚后面安静的那段路，我其实很想牵你的手。下次，我就直接牵了。" }
    ]
  },
  { 
    id: "p13", name: "教学楼", x: 65, y: 30, clickCount: 0, isBigEvent: true,
    events: [
      { text: "一夜之间大降温，你穿着单衣在教室冻得发抖。成淏脱下了自己的大衣。", choices: ["乖乖让他披上", "拒绝说自己不冷"], reply: "【朴成淏】不许拒绝。大衣很暖和，还带着我的体温。你要是感冒了，我会心疼的。" },
      { text: "下课了，外面下起大雪，你站在门口没带伞。", choices: ["等雪停", "冲进雪里"], reply: "【朴成淏】冲进雪里干嘛？过来，我们打一把伞。靠我近一点，别淋湿了。" },
      { text: "你在暖气片旁边搓手，成淏递过来一个暖宝宝。", choices: ["道谢收下", "问他哪来的"], reply: "【朴成淏】特意给你买的。刚刚看你冻得缩成一团，我恨不得把外套也给你。" }
    ]
  },
  { 
    id: "p14", name: "操场跑道", x: 45, y: 25, clickCount: 0, isBigEvent: true,
    events: [
      { text: "大学体测女子800米，你跑完虚脱了，差点摔倒。成淏冲过来一把扶住你。", choices: ["靠在他怀里", "推开他自己走"], reply: "【朴成淏】别动，靠着我。刚刚看你跑完脸都白了，我差点冲进跑道去拉你。" },
      { text: "你在跑道边狂喘气，成淏递来一瓶水，还帮你顺背。", choices: ["对他笑一下", "继续喘气"], reply: "【朴成淏】先喝口水。刚刚你的心跳好快，不知道是跑步跑的，还是因为我的原因。" },
      { text: "体测结束，成淏一直扶着你慢慢走，帮你放松。", choices: ["说你很累", "向他道谢"], reply: "【朴成淏】累了就靠着我。其实我很庆幸是我在你旁边，不然别人扶你，我肯定会吃醋的。" }
    ]
  },
  { 
    id: "p15", name: "体育馆", x: 30, y: 60, clickCount: 0, isBigEvent: true,
    events: [
      { text: "服装设计大赛，你和成淏被选为模特搭档走秀。彩排时，他穿着西装看着你发呆。", choices: ["夸他西装好看", "害羞低头"], reply: "【朴成淏】很好看吧？不过你看我走神了。刚刚在台上，我只盯着你一个人看。" },
      { text: "走秀快上场了，你有点紧张，手冰凉。", choices: ["拉住他的衣角", "深呼吸"], reply: "【朴成淏】别怕，有我在。上场后看着我，就当台下没有别人。" },
      { text: "走秀非常成功，大家都在鼓掌，成淏突然靠近你耳边说话。", choices: ["听他说什么", "躲开"], reply: "【朴成淏】刚刚我在台上对你说，你今天漂亮极了，全世界只有你最好看。" }
    ]
  }
];

var currentChat = null;
var currentMemo = null;
var gameState = { memoUnlocked: false, likedSunghoPost: false };

function updateClock() {
  var now = new Date();
  var timeStr = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  if(document.getElementById("clock")) document.getElementById("clock").textContent = timeStr;
}
setInterval(updateClock, 1000); updateClock();

function renderApps() {
  var grid = document.getElementById("app-grid"); 
  if (!grid) return;
  grid.innerHTML = "";
  
  var dockApps = ["phone", "map", "kakao", "instagram"];
  var mainApps = APPS.filter(function(app) { return !dockApps.includes(app.id); });
  
  var createIconHTML = function(app) {
    if (app.id === "x") return '<div class="icon-box icon-x">X</div>';
    return '<div class="icon-box ' + app.iconClass + '"></div>';
  };

  mainApps.forEach(function(app) {
    var el = document.createElement("div"); el.className = "app-icon";
    el.innerHTML = createIconHTML(app) + '<span class="icon-label">' + app.name + '</span>';
    el.onclick = function(e) { e.stopPropagation(); openApp(app.id, app.name); };
    grid.appendChild(el);
  });
  
  var dock = document.getElementById("dock"); 
  if(dock) {
    dock.innerHTML = "";
    dockApps.forEach(function(id) {
      var app = APPS.find(function(a) { return a.id === id; });
      if (!app) app = { id: "phone", name: "电话", iconClass: "icon-phone" };
      
      var el = document.createElement("div"); el.className = "app-icon";
      el.innerHTML = createIconHTML(app);
      el.onclick = function(e) { e.stopPropagation(); openApp(app.id, app.name); };
      dock.appendChild(el);
    });
  }
}

function openApp(id, name) {
  document.getElementById("home").classList.remove("active");
  document.getElementById("app-view").classList.add("active");
  document.getElementById("app-title").textContent = name;
  var dock = document.querySelector(".dock");
  if(dock) dock.classList.add("hidden-dock");
  
  var c = document.getElementById("app-content");
  c.classList.remove("no-padding");
  c.innerHTML = "<div style='text-align:center;padding:80px 20px;color:#8e8e93;font-size:16px;'>功能开发中...</div>";
  
  if (id === "kakao") {
    renderKakao(c);
  } else if (id === "map") {
    renderMap(c);
  } else if (id === "memo") {
    renderMemo(c);
  } else if (id === "instagram") {
    renderInstagram(c);
  }
  c.scrollTop = 0;
}

function goHome() {
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("home").classList.add("active");
  var dock = document.querySelector(".dock");
  if(dock) dock.classList.remove("hidden-dock");
  currentChat = null;
  currentMemo = null;
}

function goBack() { 
  if (currentChat) {
    currentChat = null;
    openApp("kakao", "KakaoTalk");
  } else if (currentMemo) {
    currentMemo = null;
    openApp("memo", "备忘录");
  } else {
    goHome(); 
  }
}

function renderKakao(c) {
  c.classList.add("no-padding");
  c.style.backgroundColor = "#fff";
  document.getElementById("app-title").textContent = "KakaoTalk";
  
  if (currentChat) {
    var chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;
    
    c.innerHTML = 
      '<div class="chat-room-wrapper">' +
        '<div class="chat-room" id="kkt-room"></div>' +
        '<div class="kkt-input-bar">' +
          '<div class="kkt-plus">+</div>' +
          '<input type="text" id="kkt-input" class="kkt-input-box" placeholder="发送消息...">' +
          '<button class="kkt-send-btn" id="kkt-send">发送</button>' +
        '</div>' +
      '</div>';

    var room = document.getElementById("kkt-room");
    
    chat.history.forEach(function(m) {
      if (m.type === "time") {
        room.innerHTML += '<div class="time-divider"><span>' + m.text + '</span></div>';
        return;
      }
      
      var row = document.createElement("div");
      row.className = "msg-row " + m.from;
      
      var avatarHTML = "";
      if (m.from === "them") {
         var avClass = chat.avatarClass || '';
         var avColor = chat.color;
         if (currentChat === 'group') {
             if (m.sender === "明宰铉") { avClass = "avatar-jh"; avColor = "#ff375f"; }
             else if (m.sender === "金云鹤") { avClass = "avatar-wh"; avColor = "#bf5af2"; }
             else if (m.sender === "朴成淏") { avClass = "avatar-sh"; avColor = "#ff9f0a"; }
             else if (m.sender === "李常赫") { avClass = "avatar-rw"; avColor = "#30d158"; }
             else if (m.sender === "韩泰山") { avClass = "avatar-ts"; avColor = "#5e5ce6"; }
             else if (m.sender === "金桐儇") { avClass = "avatar-lh"; avColor = "#64d2ff"; }
         }
         avatarHTML = '<div class="msg-avatar ' + avClass + '" style="background-color:' + avColor + '"></div>';
      }

      var contentHTML = '<div class="msg-content">';
      if (m.sender) {
         contentHTML += '<div class="msg-sender">' + m.sender + '</div>';
      }
      contentHTML += '<div class="bubble">' + m.text + '</div></div>';
      
      row.innerHTML = avatarHTML + contentHTML;
      room.appendChild(row);
    });

    setTimeout(function() { room.scrollTop = room.scrollHeight; }, 10);

    var inputEl = document.getElementById("kkt-input");
    var sendBtn = document.getElementById("kkt-send");
    var isTyping = false; 

    inputEl.onclick = function(e) {
      e.preventDefault();
      if (isTyping) return; 
      
      if (chat.story && chat.story.length > 0) {
        inputEl.blur();
        var choice = prompt(chat.story[0].me + "\n\n(点击确定自动填入)");
        if (choice !== null) {
          inputEl.value = chat.story[0].me;
        }
      } else {
        inputEl.focus(); 
      }
    };

    sendBtn.onclick = function() {
      if (isTyping) return;
      var text = inputEl.value.trim();
      if (!text) return;
      
      chat.history.push({ from: "me", text: text });
      chat.preview = text;
      inputEl.value = "";
      
      var row = document.createElement("div");
      row.className = "msg-row me";
      row.innerHTML = '<div class="msg-content"><div class="bubble">' + text + '</div></div>';
      room.appendChild(row);
      room.scrollTop = room.scrollHeight;

      if (chat.story && chat.story.length > 0 && chat.story[0].me === text) {
        var currentStory = chat.story.shift();
        isTyping = true;
        inputEl.placeholder = "对方正在输入...";
        
        setTimeout(function() {
          chat.history.push({ from: "them", text: currentStory.them });
          chat.preview = currentStory.them;
          
          var replyRow = document.createElement("div");
          replyRow.className = "msg-row them";
          replyRow.innerHTML = '<div class="msg-avatar ' + (chat.avatarClass||'') + '" style="background-color:' + chat.color + '"></div><div class="msg-content"><div class="bubble">' + currentStory.them + '</div></div>';
          room.appendChild(replyRow);
          room.scrollTop = room.scrollHeight;
          
          isTyping = false;
          inputEl.placeholder = "发送消息...";
        }, 1200);
      }
    };
    return;
  }

  c.innerHTML = '<div class="kkt-list-bg" id="kkt-list"></div>';
  var list = document.getElementById("kkt-list");
  
  Object.keys(CHATS).forEach(function(key) {
    var chat = CHATS[key];
    var item = document.createElement("div"); item.className = "chat-list-item";
    
    var lastMsg = chat.history[chat.history.length - 1];
    var previewText = lastMsg.text;
    if (lastMsg.sender) previewText = lastMsg.sender + "：" + lastMsg.text;

    item.innerHTML = 
      '<div class="chat-avatar ' + (chat.avatarClass || '') + '" style="background-color:' + chat.color + '"></div>' +
      '<div class="chat-info">' +
        '<div class="chat-header-row">' +
          '<div class="chat-name">' + chat.name + '</div>' +
          '<div class="chat-time">刚刚</div>' +
        '</div>' +
        '<div class="chat-preview">' + previewText + '</div>' +
      '</div>';
    item.onclick = function() { 
      currentChat = key; 
      openApp("kakao", "KakaoTalk"); 
    };
    list.appendChild(item);
  });
}

function renderMap(c) {
  c.innerHTML = 
    '<div class="map-container" id="map-container">' +
      '<div id="map-pins"></div>' +
      '<div id="map-choice-modal" class="map-choice-modal">' +
        '<div class="map-choice-box">' +
          '<div class="map-choice-title" id="map-event-text">事件描述</div>' +
          '<div id="map-choice-options"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  
  var pinsCont = document.getElementById("map-pins");
  var choiceModal = document.getElementById("map-choice-modal");
  var eventText = document.getElementById("map-event-text");
  var choiceOptions = document.getElementById("map-choice-options");

  MAP_PLACES.forEach(function(p) {
    var pin = document.createElement("div");
    pin.className = "map-pin";
    pin.style.left = p.x + "%";
    pin.style.top = p.y + "%";
    pin.innerHTML = '<div class="pin-icon"></div><div class="pin-label">' + p.name + '</div>';
    
    pin.onclick = function(e) {
      e.stopPropagation();
      var currentEvent = p.events[p.clickCount % p.events.length];
      eventText.innerText = currentEvent.text;
      choiceOptions.innerHTML = "";
      
      currentEvent.choices.forEach(function(choice, index) {
        var btn = document.createElement("div");
        btn.className = "map-choice-btn";
        btn.innerText = choice;
        btn.onclick = function() {
          choiceModal.classList.remove("show");
          if (index === 1) {
             p.clickCount++; 
             return;
          }
          if (currentEvent.reply) {
             var speaker = "朴成淏";
             var chatId = "sungho";
             var replyText = currentEvent.reply;
             if (replyText.indexOf("】") > -1) {
                 speaker = replyText.substring(1, replyText.indexOf("】"));
                 replyText = replyText.substring(replyText.indexOf("】") + 1);
                 
                 if (speaker === "明宰铉") chatId = "jaehyun";
                 else if (speaker === "金云鹤") chatId = "woonhak";
                 else if (speaker === "李常赫") chatId = "riwoo";
                 else if (speaker === "韩泰山") chatId = "taesan";
                 else if (speaker === "金桐儇") chatId = "leehan";
                 else if (speaker === "崔裕真") chatId = "yujin";
             }

             CHATS[chatId].history.push({ type: "time", text: "刚刚" });
             CHATS[chatId].history.push({ from: "them", text: replyText });
             CHATS[chatId].preview = replyText;
             
             showNotification(replyText, chatId, speaker);
          }
          p.clickCount++;
        };
        choiceOptions.appendChild(btn);
      });
      choiceModal.classList.add("show");
    };
    pinsCont.appendChild(pin);
  });
}

function renderMemo(c) {
  c.style.backgroundColor = "#fff";
  document.getElementById("app-title").textContent = "备忘录";
  
  if (currentMemo) {
    var note = MEMOS.find(function(m) { return m.id === currentMemo; });
    if (note.isLocked && !gameState.memoUnlocked) {
       c.innerHTML = '<div class="memo-lock-screen"><h3>此备忘录已锁定</h3><p style="color:#888; font-size:13px; margin-top:8px;">请输入四位密码</p><input type="password" id="memo-pass" class="memo-input" maxlength="4" placeholder="****"><br><button onclick="checkMemoPass()" style="margin-top:20px; padding:10px 20px; background:#ffcc00; border:none; border-radius:10px; font-weight:bold;">解锁</button></div>';
       return;
    }
    c.innerHTML = '<div class="memo-detail"><h1>' + note.title + '</h1><p style="color:#888; font-size:12px; margin-bottom:20px;">' + note.date + '</p><p>' + note.content + '</p></div>';
    return;
  }

  c.innerHTML = '<div style="padding:16px; font-size:24px; font-weight:bold; border-bottom:1px solid #eee;">文件夹: 我的备忘录</div>';
  MEMOS.forEach(function(m) {
    var el = document.createElement("div");
    el.className = "memo-list-item";
    el.innerHTML = '<div class="memo-list-title">' + m.title + '</div><div class="memo-list-date">' + m.date + '</div>';
    el.onclick = function() { currentMemo = m.id; openApp("memo", "备忘录"); };
    c.appendChild(el);
  });
}

function checkMemoPass() {
  var val = document.getElementById("memo-pass").value;
  if (val === "0904") { gameState.memoUnlocked = true; openApp("memo", "备忘录"); } 
  else { alert("密码错误"); }
}

function renderInstagram(c) {
  c.style.padding = "0"; c.style.backgroundColor = "#fff";
  c.innerHTML = 
    '<div class="ig-header"><div class="ig-logo">Instagram</div><div>❤️ ✉️</div></div>' +
    '<div id="ig-feed"></div>';
  
  var feed = document.getElementById("ig-feed");
  var post = { id: "post_2", user: "sungho_", avatar: "成", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600", caption: "coffee." };
  
  var postEl = document.createElement("div");
  postEl.className = "ig-feed-post";
  postEl.innerHTML = 
    '<div class="ig-feed-header"><div class="chat-avatar" style="width:32px;height:32px;font-size:12px;background:#ff9f0a;">' + post.avatar + '</div><strong>' + post.user + '</strong></div>' +
    '<div class="ig-feed-img" style="background-image:url(\'' + post.img + '\');"></div>' +
    '<div class="ig-feed-actions">' +
      '<span class="ig-heart" id="heart_' + post.id + '" onclick="likePost(\'' + post.id + '\')">🤍</span> ' +
      '<span>💬</span> ' +
      '<span>✈️</span>' +
    '</div>' +
    '<div class="ig-feed-caption"><strong>' + post.user + '</strong> ' + post.caption + '</div>';
  feed.appendChild(postEl);
}

function likePost(postId) {
  var heart = document.getElementById('heart_' + postId);
  if (heart.classList.contains('liked')) return; 
  heart.classList.add('liked');
  heart.innerText = "❤️";
  if (postId === "post_2" && !gameState.likedSunghoPost) {
    gameState.likedSunghoPost = true;
    CHATS.sungho.history.push({ type: "time", text: "刚刚" });
    CHATS.sungho.history.push({ from: "them", text: "你看到我发的动态啦？明天要一起去吗？" });
    CHATS.sungho.preview = "你看到我发的动态啦？明天要一起去吗？";
    showNotification("你看到我发的动态啦？明天要一起去吗？", "sungho", "朴成淏");
  }
}

var notifTimeout = null;
function showNotification(text, chatId, speakerName) {
  var notif = document.getElementById("ios-notification");
  var body = document.getElementById("notif-body-text");
  body.innerText = (speakerName || "朴成淏") + "：" + text;
  
  notif.classList.add("show");
  notif.setAttribute("data-chatid", chatId); 
  
  if (notifTimeout) clearTimeout(notifTimeout);
  notifTimeout = setTimeout(function() {
    notif.classList.remove("show");
  }, 3000);
}

function goToChat() {
  var notif = document.getElementById("ios-notification");
  var chatId = notif.getAttribute("data-chatid");
  notif.classList.remove("show");
  if (chatId) {
    currentChat = chatId;
    openApp("kakao", "KakaoTalk");
  }
}

renderApps();