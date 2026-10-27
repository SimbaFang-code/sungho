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
  { id: "m2", title: "绝密剧情提示", date: "现在", isLocked: true, content: "【剧本杀防卡关指南】\n\n1. 聊天触发：去 KakaoTalk 找各位学长聊天，点击输入框触发剧情！\n2. 线下事件：大事件聊完后，必须去【地图】点击指定地点打卡。\n3. 小事件：地图上其他地点随时可以点。\n4. 备忘录密码是 0904。" }
];

var gameState = { activeEvent: 0, memoUnlocked: false, likedSunghoPost: false };

var MAP_PLACES = [
  { id: "s1", name: "老地方烤肉店", x: 50, y: 45, clickCount: 0, isBigEvent: false, unlockCondition: 0, chatId: "sungho",
    events: [
      { text: "六人聚餐，大家刚坐下。", choices: ["坐在成淏旁边", "坐在云鹤旁边"], reply: "刚刚聚餐，云鹤一直给你夹肉，你是没长手吗？下次只能吃我夹的。" },
      { text: "聚餐进行到一半，大家在玩游戏。", choices: ["帮成淏挡酒", "自己喝掉"], reply: "你替我挡什么酒？就你那点酒量，等会儿还得我背你回去。" }
    ]
  },
  { id: "s2", name: "中央图书馆", x: 25, y: 30, clickCount: 0, isBigEvent: false, unlockCondition: 0, chatId: "sungho",
    events: [
      { text: "成淏趴在桌上睡着了。", choices: ["偷拍他", "给他擦桌子"], reply: "你是不是偷拍我了？我警告你，把照片删了！" }
    ]
  },
  { id: "s3", name: "篮球场", x: 75, y: 20, clickCount: 0, isBigEvent: false, unlockCondition: 0, chatId: "woonhak",
    events: [
      { text: "云鹤在打篮球，非要拉你当观众。", choices: ["给他加油", "偷看成淏"], reply: "学妹！你刚刚是不是偷看成淏哥了？我都看到了！" }
    ]
  },
  { id: "s4", name: "音乐楼", x: 80, y: 65, clickCount: 0, isBigEvent: false, unlockCondition: 0, chatId: "taesan",
    events: [
      { text: "泰山在做音乐，让你听听旋律。", choices: ["认真听", "走神看手机"], reply: "这段其实是我写给你和成淏的。别告诉他。" }
    ]
  },
  { id: "s5", name: "食堂", x: 40, y: 80, clickCount: 0, isBigEvent: false, unlockCondition: 0, chatId: "riwoo",
    events: [
      { text: "常赫端着盘子，看起来很累。", choices: ["帮他拿一下", "打招呼"], reply: "谢谢。舞蹈社刚排练完，有点累。你吃了吗？" }
    ]
  },
  { id: "s6", name: "操场看台", x: 15, y: 25, clickCount: 0, isBigEvent: false, unlockCondition: 0, chatId: "sungho",
    events: [
      { text: "晚上操场很安静。", choices: ["给成淏发消息", "一个人坐着"], reply: "看到消息我就跑下来了。你一个人坐在这，也不怕冷。" }
    ]
  },
  { id: "s7", name: "校门口夜市", x: 85, y: 40, clickCount: 0, isBigEvent: false, unlockCondition: 0, chatId: "jaehyun",
    events: [
      { text: "你在夜市遇到了宰铉。", choices: ["过去打招呼", "假装没看到"], reply: "学妹！你们俩约会呢？算我一个！开玩笑的，我先溜了！" }
    ]
  },
  { id: "p11", name: "校园咖啡店", x: 15, y: 35, clickCount: 0, isBigEvent: true, unlockCondition: 1, chatId: "sungho",
    events: [
      { text: "你约成淏在咖啡店请教问题。", choices: ["夸他讲得好", "假装在听"], reply: "刚刚看你盯着我看，书都拿倒了。其实你一直看我的话，我完全讲不下去的。" }
    ]
  },
  { id: "p12", name: "校外智多寺", x: 10, y: 15, clickCount: 0, isBigEvent: true, unlockCondition: 2, chatId: "sungho",
    events: [
      { text: "你们七个人一起去爬山。你爬不动了。", choices: ["让成淏拉你", "自己爬"], reply: "手给我。刚刚你抓着我手的时候，突然觉得这山也不算陡了。" }
    ]
  },
  { id: "p13", name: "教学楼", x: 65, y: 30, clickCount: 0, isBigEvent: true, unlockCondition: 3, chatId: "sungho",
    events: [
      { text: "大降温，成淏脱下大衣给你。", choices: ["乖乖披上", "拒绝"], reply: "不许拒绝。大衣很暖和，还带着我的体温。你要是感冒了，我会心疼的。" }
    ]
  },
  { id: "p14", name: "操场跑道", x: 45, y: 25, clickCount: 0, isBigEvent: true, unlockCondition: 4, chatId: "sungho",
    events: [
      { text: "体测800米，你跑完虚脱了。", choices: ["靠他怀里", "推开他"], reply: "别动，靠着我。刚刚看你跑完脸都白了，我差点冲进跑道去拉你。" }
    ]
  },
  { id: "p15", name: "体育馆", x: 30, y: 60, clickCount: 0, isBigEvent: true, unlockCondition: 5, chatId: "sungho",
    events: [
      { text: "服装设计大赛，你和成淏走秀。", choices: ["夸他好看", "害羞"], reply: "很好看吧？刚刚在台上，我只盯着你一个人看。" }
    ]
  }
];

var CHATS = {
  sungho: { 
    name: "朴成淏", avatarClass: "avatar-sh", color: "#ff9f0a", time: "刚刚", preview: "好的。",
    history: [
      { type: "time", text: "9月2日 迎新日" }, 
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准。" }, 
      { from: "them", text: "你现在在哪栋楼附近？" },
      { from: "me", text: "好像在一棵很大的银杏树旁边" },
      { from: "them", text: "那我知道了，你往左手边那条路走，看到学生会馆就到了。" },
      { from: "me", text: "找到了！谢谢学长！" },
      { type: "time", text: "今天 下午 16:00" }, 
      { from: "them", text: "宰铉在群里说周五聚餐，你看到了吗？" }
    ],
    story: [
      { me: "看到啦，我一定会去的！", them: "嗯，去吧，大家都很想见你。" },
      { me: "学长会去吗？", them: "当然。我不去的话，谁替你挡酒？" },
      { me: "嘿嘿，那太好了", them: "对了，周五那天穿得好看点。" },
      { me: "诶？为什么？", them: "因为我想和你多拍几张照片。" },
      { me: "学长，最近期中考试你能教教我吗？", them: "当然。那这周末去咖啡店吧，我帮你辅导。" },
      { me: "太好了！那我们周六见！", them: "嗯。对了，就我们两个人，别叫别人了。" },
      { me: "学长，考完了要不要去寺庙拜拜求个心安？", them: "可以啊。不过就我们俩去吗？" },
      { me: "要不叫上大家一起去吧？人多热闹。", them: "行，你去群里问问他们。" },
      { me: "大家都去啦！", them: "那周六早上八点，校门口集合，别迟到。" },
      { me: "知道啦！", them: "还有，山路不好走，穿双舒服的鞋。" }
    ]
  },
  riwoo: { 
    name: "李常赫", avatarClass: "avatar-rw", color: "#30d158", time: "昨天", preview: "舞蹈社的日常。",
    history: [ 
      { type: "time", text: "9月10日" }, 
      { from: "them", text: "我是李常赫。如果觉得经营学无聊，可以来舞蹈社看看。" },
      { from: "me", text: "常赫学长好！听说学长跳舞特别厉害。" },
      { from: "them", text: "还行。过来看练习的话，我可以教你几个基础动作。" }
    ],
    story: [
      { me: "常赫学长，明天舞蹈社有活动吗？", them: "有。不过成淏也会来，他最近练得很勤。" },
      { me: "诶？他练什么？", them: "不知道。不过他老是偷看你，我都看到了。" },
      { me: "常赫学长，群里说要去智多寺，你去吗？", them: "去。不过刚刚群消息太多没看到。成淏去吗？他去我就去。" },
      { me: "学长你最近是不是瘦了？", them: "为了校庆的表演在减脂。别告诉成淏，他最近老盯着我，怕我带你练太累。" },
      { me: "常赫学长，你吃的是什么呀？", them: "随便点的一点。成淏今天没陪你？" },
      { me: "他今天满课。", them: "难怪。他不在，那刚好，陪我去舞蹈室吧？" },
      { me: "诶？去舞蹈室干嘛？", them: "教你几个基础动作，顺便让你看看我新编的舞。" },
      { me: "好呀！", them: "那你快点吃，吃完我们在楼下集合。" },
      { me: "学长你跳舞好帅啊！", them: "成淏不在的时候夸我，小心他吃醋。" },
      { me: "他哪有那么小气！", them: "你太小看他了。上次你夸我新衣服好看，他三天没理我。" }
    ]
  },
  jaehyun: { 
    name: "明宰铉", avatarClass: "avatar-jh", color: "#ff375f", time: "昨天", preview: "聚餐定啦！",
    history: [ 
      { type: "time", text: "9月12日" }, 
      { from: "them", text: "学妹好呀！我是传媒系的明宰铉！" },
      { from: "me", text: "宰铉学长好！迎新那天多亏了成淏学长。" },
      { from: "them", text: "那家伙居然会带学妹，稀奇。以后有事也可以找我，传媒系认识的人多。" }
    ],
    story: [
      { me: "宰铉学长，聚餐会有什么活动吗？", them: "有啊！玩游戏！到时候我要抽签分组，你猜你会和谁一组？" },
      { me: "不知道诶。", them: "我赌一百块，绝对是成淏。他刚才还在问我怎么作弊呢哈哈哈。" },
      { me: "宰铉学长，你认识服装设计系的人吗？", them: "认识啊。怎么，想和成淏去当模特？我这就去帮你报名！" },
      { me: "学长别闹！", them: "放心，包在我身上。不过到时候走秀，我可得坐在第一排看。" },
      { me: "宰铉学长，你真不一起逛啊？", them: "不当电灯泡啦！不过我刚看到成淏在买糖葫芦。" },
      { me: "他买糖葫芦了？", them: "对啊，还特意让老板挑了最红最大的。肯定给你的。" },
      { me: "我也去偷偷买一份！", them: "完了，你俩太甜了。我要去群里曝光你们！" },
      { me: "别别别！", them: "开玩笑的哈哈。不过说真的，你们俩什么时候官宣啊？" },
      { me: "什么官宣……我们就是普通朋友。", them: "信你个鬼。他看你的眼神都快拉丝了。" },
      { me: "学长你别瞎说！", them: "行行行我不说。我赌一百块，不出一个月，他肯定表白。" }
    ]
  },
  taesan: { 
    name: "韩泰山", avatarClass: "avatar-ts", color: "#5e5ce6", time: "昨天", preview: "新歌demo。",
    history: [ 
      { type: "time", text: "9月20日" }, 
      { from: "them", text: "我是韩泰山。刚写好一首新歌。" },
      { from: "me", text: "哇，我可以听吗？" },
      { from: "them", text: "在整理demo，弄好发你。" }
    ],
    story: [
      { me: "泰山学长，新歌很好听！", them: "谢谢。其实副歌那段旋律，是看着你和成淏打闹的时候写的。" },
      { me: "啊？我们的打闹？", them: "嗯，很有生命力。别告诉成淏，他会脸红的。" },
      { me: "泰山学长，校庆表演你会上台吗？", them: "会。我会唱那首新歌。你记得来，最好坐到第一排，我想在台上看到你。" },
      { me: "好，我一定去！", them: "嗯。成淏那天也会去。你们俩在一起的时候，我总觉得这画面很适合拍MV。" },
      { me: "泰山学长，这段旋律真的很好听。", them: "谢谢。其实写的时候，一直在想你们俩的故事。" },
      { me: "我们的故事？", them: "嗯。成淏每次提起你，眼睛都在发光。" },
      { me: "真的吗……", them: "你看，你现在的反应，也很适合写进歌里。" },
      { me: "学长你别调侃我了！", them: "没调侃，是认真的。下个月校庆演出，我会唱这首歌。" },
      { me: "真的吗！我一定去！", them: "嗯。我会在台上告诉你，这首歌叫什么名字。" },
      { me: "现在不能说吗？", them: "不能。台上揭晓，才足够浪漫。" }
    ]
  },
  leehan: { 
    name: "金桐儇", avatarClass: "avatar-lh", color: "#64d2ff", time: "昨天", preview: "图书馆见。",
    history: [ 
      { type: "time", text: "10月1日" }, 
      { from: "them", text: "你好，我是金桐儇。" },
      { from: "me", text: "桐儇学长好！" },
      { from: "them", text: "三楼靠窗的位置很好，安静，光线也够。推荐给你。" }
    ],
    story: [
      { me: "桐儇学长，你在图书馆吗？", them: "在。成淏也在，他占了个双人座，说在等人。" },
      { me: "等人？等谁？", them: "你觉得呢？他已经在往门口看了十分钟了。" },
      { me: "学长，最近降温了，你注意保暖。", them: "谢谢。我刚才看到成淏在查天气预报，估计是在为你准备冬衣的事情发愁。" },
      { me: "他怎么连这个也发愁。", them: "因为他很在意你。这种细节，只有旁观者看得最清楚。" },
      { me: "桐儇学长，你平时都看什么书呀？", them: "植物图鉴，还有一些散文。你呢？" },
      { me: "我喜欢看小说。", them: "难怪成淏总盯着你看。你看书的时候很专注。" },
      { me: "他盯着我看？", them: "他以为我没看到，但其实他经常抬头看你。" },
      { me: "那学长你为什么不告诉我？", them: "我以为你知道。不过，这种事，还是让他自己说吧。" },
      { me: "好吧……", them: "别急。有些人就是这样，越喜欢越笨拙。" },
      { me: "学长懂得真多。", them: "旁观者清。等你们在一起了，记得请我喝咖啡。" }
    ]
  },
  woonhak: { 
    name: "金云鹤", avatarClass: "avatar-wh", color: "#bf5af2", time: "昨天", preview: "学妹好！",
    history: [ 
      { type: "time", text: "9月5日" }, 
      { from: "them", text: "学妹好！我是云鹤！" },
      { from: "me", text: "云鹤学长好！" },
      { from: "them", text: "以后有活动我都拉上你！成淏哥太闷了，得靠我们活跃气氛！" }
    ],
    story: [
      { me: "云鹤学长，最近有什么好玩的事吗？", them: "有！我听说成淏哥手机壁纸换成你的照片了！他没告诉你吗？" },
      { me: "真的假的？", them: "真的！那天他手机亮了，我刚好看到了。不过你别告诉他是我说的！" },
      { me: "云鹤学长，你体测跑得快吗？", them: "那必须的！不过成淏哥肯定跑得比我快，他一直守着跑道边等女生组呢。" },
      { me: "啊？他等谁？", them: "还装！当然是在等你跑800米啊！他连水都提前买好了。" },
      { me: "云鹤学长，你怎么一直看着成淏学长笑呀？", them: "因为他打球的时候，眼睛一直往你那边看。" },
      { me: "有吗？", them: "有！我在他旁边，他看都不看我！" },
      { me: "那可能是他专心比赛吧。", them: "信我，绝对是看你。你等下送水的时候，他肯定忍不住笑。" },
      { me: "真的吗？", them: "等会儿你去了就知道了。" },
      { me: "他刚才好像真的笑了！", them: "我说什么来着！你们俩好甜啊！" },
      { me: "小声点，别让他听到。", them: "好！不过，要是你们在一起了，我要当伴郎！" }
    ]
  },
  group: {
    name: "6+1小分队", avatarClass: "avatar-group", color: "#8e8e93", time: "下午 14:30", preview: "群聊消息",
    history: [ 
      { type: "time", text: "今天 14:30" }, 
      { from: "them", sender: "明宰铉", text: "各位！周五晚上聚餐，老地方！" },
      { from: "them", sender: "金云鹤", text: "好耶！有新开的店！" }, 
      { from: "them", sender: "李常赫", text: "你上周不是才去过吗？" },
      { from: "them", sender: "金云鹤", text: "那不一样！" },
      { from: "them", sender: "朴成淏", text: "我带学妹来。" },
      { from: "them", sender: "明宰铉", text: "？！成淏你居然会主动带人！" },
      { from: "them", sender: "韩泰山", text: "他哪天不主动？" }
    ],
    story: [
      { me: "收到！我会准时到的！", them: "欢迎欢迎！", sender: "明宰铉" },
      { me: "学长们，这周六我和成淏打算去智多寺拜佛，大家要不要一起去？", them: "好啊！我参加！", sender: "明宰铉" },
      { me: "还有谁去呀？", them: "我也去！", sender: "金云鹤" },
      { me: "泰山学长和桐儇学长呢？", them: "他们好像没看到消息。你私聊问问他们吧！", sender: "明宰铉" },
      { me: "常赫学长呢？", them: "他也没说话，你问问他。", sender: "明宰铉" },
      { me: "都问过啦，大家都去！", them: "那太好了！这周六就当咱们六人团建了！", sender: "金云鹤" },
      { me: "周六早上八点校门口集合！", them: "收到！我会提前到的。", sender: "李常赫" },
      { me: "成淏学长呢？", them: "我也提前去，在门口等你。", sender: "朴成淏" },
      { me: "好！", them: "大家早点睡，别迟到！", sender: "明宰铉" }
    ]
  }
};

var currentChat = null;
var currentMemo = null;

var savedData = localStorage.getItem("koz_game_save");
if (savedData) {
  var confirmLoad = confirm("检测到上次的游戏进度，是否继续上次的游戏？\n(点击【取消】将重新开始)");
  if (confirmLoad) {
    try {
      var parsed = JSON.parse(savedData);
      gameState.activeEvent = parsed.activeEvent || 0;
      gameState.memoUnlocked = parsed.memoUnlocked || false;
      gameState.likedSunghoPost = parsed.likedSunghoPost || false;
      if (parsed.chats) {
        for (var key in parsed.chats) {
          if (CHATS[key]) {
            CHATS[key].history = parsed.chats[key].history;
            CHATS[key].story = parsed.chats[key].story;
            CHATS[key].preview = parsed.chats[key].preview;
          }
        }
      }
      if (parsed.mapClicks) {
        MAP_PLACES.forEach(function(p) {
          if (parsed.mapClicks[p.id] !== undefined) {
            p.clickCount = parsed.mapClicks[p.id];
          }
        });
      }
    } catch(e) { console.log("存档读取失败", e); }
  } else {
    localStorage.removeItem("koz_game_save");
  }
}

function saveGame() {
  var mapClicks = {};
  MAP_PLACES.forEach(function(p) { mapClicks[p.id] = p.clickCount; });
  var saveObj = {
    activeEvent: gameState.activeEvent,
    memoUnlocked: gameState.memoUnlocked,
    likedSunghoPost: gameState.likedSunghoPost,
    chats: CHATS,
    mapClicks: mapClicks
  };
  localStorage.setItem("koz_game_save", JSON.stringify(saveObj));
}

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
      var app = APPS.find(function(a) { return a.id === id; }) || { id: "phone", name: "电话", iconClass: "icon-phone" };
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
  if (id === "kakao") renderKakao(c);
  else if (id === "map") renderMap(c);
  else if (id === "memo") renderMemo(c);
  else if (id === "instagram") renderInstagram(c);
  c.scrollTop = 0;
}

function goHome() {
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("home").classList.add("active");
  var dock = document.querySelector(".dock");
  if(dock) dock.classList.remove("hidden-dock");
  currentChat = null; currentMemo = null;
}

function goBack() { 
  if (currentChat) { currentChat = null; openApp("kakao", "KakaoTalk"); }
  else if (currentMemo) { currentMemo = null; openApp("memo", "备忘录"); }
  else { goHome(); }
}

function renderKakao(c) {
  c.classList.add("no-padding"); c.style.backgroundColor = "#fff";
  document.getElementById("app-title").textContent = "KakaoTalk";
  if (currentChat) {
    var chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;
    c.innerHTML = '<div class="chat-room-wrapper"><div class="chat-room" id="kkt-room"></div><div class="kkt-input-bar"><div class="kkt-plus">+</div><input type="text" id="kkt-input" class="kkt-input-box" placeholder="发送消息..."><button class="kkt-send-btn" id="kkt-send">发送</button></div></div>';
    var room = document.getElementById("kkt-room");
    chat.history.forEach(function(m) {
      if (m.type === "time") { room.innerHTML += '<div class="time-divider"><span>' + m.text + '</span></div>'; return; }
      var row = document.createElement("div"); row.className = "msg-row " + m.from;
      var avatarHTML = "";
      if (m.from === "them") {
         var avClass = chat.avatarClass || ''; var avColor = chat.color;
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
      if (m.sender) contentHTML += '<div class="msg-sender">' + m.sender + '</div>';
      contentHTML += '<div class="bubble">' + m.text + '</div></div>';
      row.innerHTML = avatarHTML + contentHTML; room.appendChild(row);
    });
    setTimeout(function() { room.scrollTop = room.scrollHeight; }, 10);
    var inputEl = document.getElementById("kkt-input");
    var sendBtn = document.getElementById("kkt-send");
    var isTyping = false; 
    inputEl.onclick = function(e) {
      e.preventDefault(); if (isTyping) return; 
      if (chat.story && chat.story.length > 0) {
        inputEl.blur(); var choice = prompt(chat.story[0].me + "\n\n(点击确定自动填入)");
        if (choice !== null) inputEl.value = chat.story[0].me;
      } else inputEl.focus(); 
    };
    sendBtn.onclick = function() {
      if (isTyping) return; var text = inputEl.value.trim(); if (!text) return;
      chat.history.push({ from: "me", text: text }); chat.preview = text; inputEl.value = "";
      saveGame();
      var row = document.createElement("div"); row.className = "msg-row me";
      row.innerHTML = '<div class="msg-content"><div class="bubble">' + text + '</div></div>';
      room.appendChild(row); room.scrollTop = room.scrollHeight;
      if (chat.story && chat.story.length > 0 && chat.story[0].me === text) {
        var currentStory = chat.story.shift(); isTyping = true; inputEl.placeholder = "对方正在输入...";
        setTimeout(function() {
          chat.history.push({ from: "them", text: currentStory.them, sender: currentStory.sender });
          chat.preview = currentStory.them;
          saveGame();
          var replyRow = document.createElement("div"); replyRow.className = "msg-row them";
          var rAvClass = chat.avatarClass; var rAvColor = chat.color;
          if (currentStory.sender) {
              if (currentStory.sender === "明宰铉") { rAvClass = "avatar-jh"; rAvColor = "#ff375f"; }
              else if (currentStory.sender === "金云鹤") { rAvClass = "avatar-wh"; rAvColor = "#bf5af2"; }
              else if (currentStory.sender === "李常赫") { rAvClass = "avatar-rw"; rAvColor = "#30d158"; }
          }
          var senderNameHTML = currentStory.sender ? '<div class="msg-sender">' + currentStory.sender + '</div>' : '';
          replyRow.innerHTML = '<div class="msg-avatar ' + rAvClass + '" style="background-color:' + rAvColor + '"></div><div class="msg-content">' + senderNameHTML + '<div class="bubble">' + currentStory.them + '</div></div>';
          room.appendChild(replyRow); room.scrollTop = room.scrollHeight;
          isTyping = false; inputEl.placeholder = "发送消息...";
        }, 1200);
      }
    };
    return;
  }
  c.innerHTML = '<div class="kkt-list-bg" id="kkt-list"></div>';
  var list = document.getElementById("kkt-list");
  Object.keys(CHATS).forEach(function(key) {
    var chat = CHATS[key]; var item = document.createElement("div"); item.className = "chat-list-item";
    var lastMsg = chat.history[chat.history.length - 1]; var previewText = lastMsg.text;
    if (lastMsg.sender) previewText = lastMsg.sender + "：" + lastMsg.text;
    item.innerHTML = '<div class="chat-avatar ' + (chat.avatarClass || '') + '" style="background-color:' + chat.color + '"></div><div class="chat-info"><div class="chat-header-row"><div class="chat-name">' + chat.name + '</div><div class="chat-time">刚刚</div></div><div class="chat-preview">' + previewText + '</div></div>';
    item.onclick = function() { currentChat = key; openApp("kakao", "KakaoTalk"); };
    list.appendChild(item);
  });
}

function renderMap(c) {
  c.innerHTML = '<div class="map-container" id="map-container"><div id="map-pins"></div><div id="map-choice-modal" class="map-choice-modal"><div class="map-choice-box"><div class="map-choice-title" id="map-event-text">事件描述</div><div id="map-choice-options"></div></div></div></div>';
  var pinsCont = document.getElementById("map-pins"); var choiceModal = document.getElementById("map-choice-modal");
  var eventText = document.getElementById("map-event-text"); var choiceOptions = document.getElementById("map-choice-options");
  
  MAP_PLACES.forEach(function(p) {
    var pin = document.createElement("div"); pin.className = "map-pin"; pin.style.left = p.x + "%"; pin.style.top = p.y + "%";
    var isLocked = false;
    if (p.isBigEvent && gameState.activeEvent < p.unlockCondition - 1) isLocked = true;
    pin.style.filter = isLocked ? "grayscale(100%) opacity(50%)" : "none";
    pin.innerHTML = '<div class="pin-icon"></div><div class="pin-label">' + p.name + '</div>';
    
    pin.onclick = function(e) {
      e.stopPropagation(); 
      if (isLocked) { alert("这里暂时没有剧情。先去 KakaoTalk 推进前置聊天吧！"); return; }
      
      var currentEvent = p.events[p.clickCount % p.events.length];
      eventText.innerText = currentEvent.text; choiceOptions.innerHTML = "";
      
      currentEvent.choices.forEach(function(choice, index) {
        var btn = document.createElement("div"); btn.className = "map-choice-btn"; btn.innerText = choice;
        
        btn.onclick = function() {
          choiceModal.classList.remove("show");
          
          if (index === 1) { 
             p.clickCount++; 
             return; 
          }
          
          if (currentEvent.reply) {
             var targetChatId = p.chatId || "sungho"; 
             var speaker = CHATS[targetChatId].name;
             var replyText = currentEvent.reply;
             
             // 存入对应人的聊天记录
             CHATS[targetChatId].history.push({ type: "time", text: "刚刚" }); 
             CHATS[targetChatId].history.push({ from: "them", text: replyText }); 
             CHATS[targetChatId].preview = replyText;
             
             if (p.isBigEvent) gameState.activeEvent++;
             saveGame();
             
             // 🌟 强行跳转到这个人的聊天框
             currentChat = targetChatId;
             openApp("kakao", "KakaoTalk");
             
             // 弹出顶部通知
             setTimeout(function() {
                 showNotification(replyText, targetChatId, speaker);
             }, 500);
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
  c.style.backgroundColor = "#fff"; document.getElementById("app-title").textContent = "备忘录";
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
    var el = document.createElement("div"); el.className = "memo-list-item";
    el.innerHTML = '<div class="memo-list-title">' + m.title + '</div><div class="memo-list-date">' + m.date + '</div>';
    el.onclick = function() { currentMemo = m.id; openApp("memo", "备忘录"); };
    c.appendChild(el);
  });
}

function checkMemoPass() {
  var val = document.getElementById("memo-pass").value;
  if (val === "0904") { gameState.memoUnlocked = true; saveGame(); openApp("memo", "备忘录"); } else alert("密码错误");
}

function renderInstagram(c) {
  c.style.padding = "0"; c.style.backgroundColor = "#fff";
  c.innerHTML = '<div class="ig-header"><div class="ig-logo">Instagram</div><div>❤️ ✉️</div></div><div id="ig-feed"></div>';
  var feed = document.getElementById("ig-feed");
  var post = { id: "post_2", user: "sungho_", avatar: "成", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600", caption: "coffee." };
  var postEl = document.createElement("div"); postEl.className = "ig-feed-post";
  postEl.innerHTML = '<div class="ig-feed-header"><div class="chat-avatar" style="width:32px;height:32px;font-size:12px;background:#ff9f0a;">' + post.avatar + '</div><strong>' + post.user + '</strong></div><div class="ig-feed-img" style="background-image:url(\'' + post.img + '\');"></div><div class="ig-feed-actions"><span class="ig-heart" id="heart_' + post.id + '" onclick="likePost(\'' + post.id + '\')">🤍</span> <span>💬</span> <span>✈️</span></div><div class="ig-feed-caption"><strong>' + post.user + '</strong> ' + post.caption + '</div>';
  feed.appendChild(postEl);
}

function likePost(postId) {
  var heart = document.getElementById('heart_' + postId);
  if (heart.classList.contains('liked')) return; heart.classList.add('liked'); heart.innerText = "❤️";
  if (postId === "post_2" && !gameState.likedSunghoPost) {
    gameState.likedSunghoPost = true; CHATS.sungho.history.push({ type: "time", text: "刚刚" });
    CHATS.sungho.history.push({ from: "them", text: "你看到我发的动态啦？明天要一起去吗？" }); CHATS.sungho.preview = "你看到我发的动态啦？明天要一起去吗？";
    saveGame();
    showNotification("你看到我发的动态啦？明天要一起去吗？", "sungho", "朴成淏");
  }
}

var notifTimeout = null;
function showNotification(text, chatId, speakerName) {
  var notif = document.getElementById("ios-notification"); var body = document.getElementById("notif-body-text");
  body.innerText = (speakerName || "朴成淏") + "：" + text; notif.classList.add("show"); notif.setAttribute("data-chatid", chatId); 
  if (notifTimeout) clearTimeout(notifTimeout);
  notifTimeout = setTimeout(function() { notif.classList.remove("show"); }, 3000);
}

function goToChat() {
  var notif = document.getElementById("ios-notification"); var chatId = notif.getAttribute("data-chatid");
  notif.classList.remove("show");
  if (chatId) { currentChat = chatId; openApp("kakao", "KakaoTalk"); }
}

renderApps();