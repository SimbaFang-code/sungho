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
  { id: "m2", title: "绝密剧情提示", date: "现在", isLocked: true, content: "【剧本杀防卡关指南】\n\n1. 熟悉阶段：多去【地图】和成淏打卡约会，累计10次线下约会后才能解锁后续心动剧情。\n2. 发现线索：如果有不懂的，去看看成淏的 IG 动态。" }
];

// 10次线下约会打卡点
const MAP_PLACES = [
  { id: "p1", name: "中央图书馆", x: 30, y: 40, dateNum: 1, triggerMsg: "今天在图书馆偶遇了成淏学长，他帮我找了全英教材。" },
  { id: "p2", name: "学生会馆", x: 60, y: 25, dateNum: 2, triggerMsg: "成淏学长在学生会馆开会，给我带了冰美式。" },
  { id: "p3", name: "音乐楼", x: 75, y: 60, dateNum: 3, triggerMsg: "陪成淏学长去音乐楼听泰山排练，他偷偷牵了我的手。" },
  { id: "p4", name: "老地方烤肉店", x: 40, y: 70, dateNum: 4, triggerMsg: "六人聚餐！云鹤一直灌我酒，被成淏学长挡住了。" },
  { id: "p5", name: "校园咖啡店", x: 55, y: 50, dateNum: 5, triggerMsg: "和成淏学长单独喝咖啡，聊了彼此的过去。" },
  { id: "p6", name: "银杏大道", x: 20, y: 80, dateNum: 6, triggerMsg: "散落满地的银杏叶，成淏学长给我拍了好多照片。" },
  { id: "p7", name: "操场看台", x: 80, y: 20, dateNum: 7, triggerMsg: "看常赫打篮球，成淏学长非要拉着我看日落。" },
  { id: "p8", name: "学生会室", x: 65, y: 35, dateNum: 8, triggerMsg: "帮他整理迎新资料，他盯着我的眼神好温柔。" },
  { id: "p9", name: "校门口夜市", x: 10, y: 50, dateNum: 9, triggerMsg: "去夜市吃小吃，他帮我擦掉嘴角的酱汁。" },
  { id: "p10", name: "宿舍楼下", x: 45, y: 85, dateNum: 10, triggerMsg: "他送我回宿舍，在楼下站了好久都没走。" }
];

const CHATS = {
  sungho: {
    name: "朴成淏", avatar: "成", color: "#ff9f0a",
    messages: [
      { type: "time", text: "今天 下午 16:00" },
      { from: "them", text: "宰铉在群里说周五聚餐，你看到了吗？" }
    ],
    // 橙光式剧情树（发一句回一句）
    story: [
      { me: "看到啦，我一定会去的", them: "嗯，去吧，大家都很想见你。" },
      { me: "学长最近好像很忙？", them: "有一点，准备迎新晚会的事情。" },
      { me: "那要注意休息呀", them: "好。对了，今晚云鹤是不是一直找你说话？" },
      { me: "是呀，他很热情", them: "……早知道不让他加你了，我有点吃醋。" },
      { me: "学长怎么连这种醋都吃", them: "因为，我好像有点太在意你了。" }
    ]
  },
  group: {
    name: "延世街六人组", avatar: "群", color: "#8e8e93",
    messages: [{ type: "time", text: "今天 14:30" }, { from: "them", sender: "明宰铉", text: "周五聚餐！" }, { from: "them", sender: "朴成淏", text: "我带学妹来。" }],
    story: [
      { me: "好呀，谢谢大家！", them: "宰铉：欢迎欢迎！", sender: "明宰铉" },
      { me: "我会准时到的", them: "云鹤：太好啦！", sender: "金云鹤" }
    ]
  },
  riwoo: { name: "李常赫", avatar: "常", color: "#30d158", messages: [], story: [] },
  taesan: { name: "韩泰山", avatar: "泰", color: "#5e5ce6", messages: [], story: [] },
  leehan: { name: "金桐儇", avatar: "桐", color: "#64d2ff", messages: [], story: [] },
  woonhak: { name: "金云鹤", avatar: "云", color: "#bf5af2", messages: [], story: [] }
};

const INSTAGRAM_FEED = [
  { id: "post_2", user: "sungho_", avatar: "成", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600", caption: "coffee." }
];