const APPS = [
  { id: "kakao", name: "KakaoTalk", customClass: "icon-kakao" },
  { id: "instagram", name: "Instagram", customClass: "icon-ig" },
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
  { id: "m2", title: "绝密剧情提示", date: "现在", isLocked: true, content: "【剧本杀防卡关指南】\n\n1. 熟悉阶段：多去【地图】和成淏打卡约会，累计10次线下约会后才能解锁后续心动剧情。\n2. 发现线索：如果有不懂的，去看看成淏的 IG 动态。" }
];

const MAP_PLACES = [
  { id: "p1", name: "中央图书馆", x: 30, y: 40, dateNum: 1, choices: ["递给他一张纸巾", "假装没看见走开"], reply: "成淏学长在图书馆看书看睡着了，你轻轻递给他一张纸巾。他醒来后对你温柔地笑了。" },
  { id: "p2", name: "篮球场", x: 60, y: 25, dateNum: 2, choices: ["跑过去给他递水", "站在场边等比赛结束"], reply: "成淏刚打完篮球，满身是汗。你给他递了一瓶水，他愣了一下，接过水揉了揉你的头发。" },
  { id: "p3", name: "音乐楼", x: 75, y: 60, dateNum: 3, choices: ["夸他弹吉他很帅", "安静坐在旁边听"], reply: "成淏在音乐楼试音。你安静地坐在旁边，他说这首曲子是为你写的。" },
  { id: "p4", name: "老地方烤肉店", x: 40, y: 70, dateNum: 4, choices: ["帮他包一个生菜包", "让他帮你烤肉"], reply: "聚餐的时候，云鹤一直给你夹肉。成淏看到了，默默把云鹤夹给你的肉都自己吃掉了。" },
  { id: "p5", name: "校园咖啡店", x: 55, y: 50, dateNum: 5, choices: ["点他喜欢的冰美式", "点自己喜欢的奶茶"], reply: "成淏看着你点了他喜欢的冰美式，眼神暗了暗，低声说："你连我喜欢什么都知道？"" },
  { id: "p6", name: "银杏大道", x: 20, y: 80, dateNum: 6, choices: ["让他帮你拍照", "帮他拍一张"], reply: "银杏大道上，成淏帮你拍照。拍完后他看着相册说："这张很好看，可以发给我吗？"" },
  { id: "p7", name: "操场看台", x: 80, y: 20, dateNum: 7, choices: ["靠在他肩膀上", "递给他耳机"], reply: "操场的晚风很凉，成淏看你冷，默默把外套披在了你身上。" },
  { id: "p8", name: "学生会室", x: 65, y: 35, dateNum: 8, choices: ["给他泡一杯咖啡", "抢走他的文件闹他"], reply: "成淏在整理迎新资料，你给他泡了咖啡。他看着你，突然说："其实迎新那天，我是故意等在那里的。"" },
  { id: "p9", name: "校门口夜市", x: 10, y: 50, dateNum: 9, choices: ["让他喂你吃小吃", "假装生气让他哄你"], reply: "夜市上人很多，成淏下意识地抓住了你的手腕，把你护在身侧。" },
  { id: "p10", name: "宿舍楼下", x: 45, y: 85, dateNum: 10, choices: ["抱他一下再走", "亲他一口跑掉"], reply: "在宿舍楼下，成淏看着你，突然把你拉进怀里："做我女朋友吧。"" }
];

const CHATS = {
  sungho: {
    name: "朴成淏", avatar: "成", color: "#ff9f0a",
    messages: [{ type: "time", text: "今天 下午 16:00" }, { from: "them", text: "宰铉在群里说周五聚餐，你看到了吗？" }],
    story: [
      { me: "看到啦，我一定会去的", them: "嗯，去吧，大家都很想见你。" },
      { me: "学长最近好像很忙？", them: "有一点，准备迎新晚会的事情。" },
      { me: "那要注意休息呀", them: "好。对了，今晚云鹤是不是一直找你说话？" },
      { me: "是呀，他很热情", them: "……早知道不让他加你了，我有点吃醋。" },
      { me: "学长怎么连这种醋都吃", them: "因为，我好像有点太在意你了。" }
    ]
  },
  riwoo: {
    name: "李常赫", avatar: "常", color: "#30d158",
    messages: [{ type: "time", text: "昨天 18:00" }, { from: "them", text: "舞蹈社这周有开放练习，你要来看吗？" }, { from: "me", text: "好呀，常赫学长。" }, { from: "them", text: "嗯，成淏也会来。他最近老往舞蹈室跑。" }], story: []
  },
  jaehyun: {
    name: "明宰铉", avatar: "宰", color: "#ff375f",
    messages: [{ type: "time", text: "昨天 19:00" }, { from: "them", text: "学妹！周五聚餐一定要来啊！" }, { from: "them", text: "成淏可是难得带人来，我们得好好把把关！" }], story: []
  },
  taesan: {
    name: "韩泰山", avatar: "泰", color: "#5e5ce6",
    messages: [{ type: "time", text: "昨天 20:00" }, { from: "them", text: "新歌 demo 发在 IG 了，有空听。" }, { from: "me", text: "现在就去听！" }, { from: "them", text: "听完给点意见。不过，这首歌是写给某个人的。" }], story: []
  },
  leehan: {
    name: "金桐儇", avatar: "桐", color: "#64d2ff",
    messages: [{ type: "time", text: "昨天 20:30" }, { from: "them", text: "图书馆三楼靠窗位置很好，推荐给你。" }, { from: "me", text: "谢谢桐儇学长，我明天去试试" }, { from: "them", text: "嗯，光线很好，适合看书。也适合看别人。" }], story: []
  },
  woonhak: {
    name: "金云鹤", avatar: "云", color: "#bf5af2",
    messages: [{ type: "time", text: "昨天 22:00" }, { from: "them", text: "学妹！昨晚聚餐开心吗！我推荐的炸猪排不错吧！" }, { from: "me", text: "超级好吃！谢谢云鹤学长" }, { from: "them", text: "嘿嘿，下次我再带你去吃更好吃的！不给成淏哥知道！" }], story: []
  },
  yujin: {
    name: "崔裕真 (同级)", avatar: "裕", color: "#ff9500",
    messages: [{ type: "time", text: "昨天 21:00" }, { from: "them", text: "天呐，你认识大三那几个帅哥？那个朴成淏好像对你很特殊哦！" }, { from: "me", text: "有吗？他就是比较照顾学妹吧" }, { from: "them", text: "绝对有！我打赌，他肯定对你有意思！你看群里云鹤都在吃醋了哈哈哈哈" }], story: []
  },
  group: {
    name: "延世街六人组", avatar: "群", color: "#8e8e93",
    messages: [{ type: "time", text: "今天 14:30" }, { from: "them", sender: "明宰铉", text: "周五聚餐！" }, { from: "them", sender: "朴成淏", text: "我带学妹来。" }],
    story: [
      { me: "好呀，谢谢大家！", them: "宰铉：欢迎欢迎！", sender: "明宰铉" },
      { me: "我会准时到的", them: "云鹤：太好啦！", sender: "金云鹤" }
    ]
  }
};

const INSTAGRAM_FEED = [
  { id: "post_2", user: "sungho_", avatar: "成", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600", caption: "coffee." }
];