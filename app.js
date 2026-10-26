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
  { id: "m2", title: "课堂作业", date: "昨天 14:00", content: "经营学小组作业：周五前交，记得拉群讨论。\n传媒学：写一篇关于校园媒体的报告。" },
  { id: "m3", title: "绝密剧情提示", date: "现在", isLocked: true, content: "【剧本杀防卡关指南】\n\n1. 线下事件：需要去地图上点击各个地点触发（例如烤肉店、篮球场）。\n2. 聊天记录：和成淏聊天时，点击输入框会弹出剧情选项。\n3. IG联动：去 Instagram 给成淏点赞，会触发他的私信！" }
];

var CHATS = {
  sungho: { 
    name: "朴成淏", avatarClass: "avatar-sh", color: "#ff9f0a", time: "刚刚", preview: "明天见。",
    history: [
      { type: "time", text: "9月2日 迎新日" },
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "你现在在哪栋楼附近？" },
      { from: "me", text: "好像在一棵很大的银杏树旁边" },
      { from: "them", text: "那我知道了，你往左手边那条路走，看到学生会馆就到了。" },
      { from: "me", text: "找到了！谢谢学长！" },
      { type: "time", text: "9月15日 晚上" },
      { from: "them", text: "今天在图书馆看到你了，在啃全英教材吗？" },
      { from: "me", text: "对啊，经营学好难……学长你也在图书馆吗？" },
      { from: "them", text: "嗯。如果有不懂的，随时拍下来发给我。" },
      { from: "me", text: "好！那以后就麻烦学长啦~" },
      { type: "time", text: "今天 下午 16:00" },
      { from: "them", text: "宰铉在群里说周五聚餐，你看到了吗？" }
    ],
    story: [
      { me: "看到啦，我一定会去的！", them: "嗯，去吧，大家都很想见你。" },
      { me: "学长会去吗？", them: "当然。我不去的话，谁替你挡酒？" },
      { me: "嘿嘿，那太好了", them: "对了，周五那天穿得好看点。" },
      { me: "诶？为什么？", them: "因为……我想和你多拍几张照片。" }
    ]
  },
  riwoo: { 
    name: "李常赫", avatarClass: "avatar-rw", color: "#30d158", time: "昨天", preview: "到时候见。",
    history: [
      { type: "time", text: "9月10日" },
      { from: "them", text: "我是李常赫。听说成淏带你来舞蹈室了。" },
      { from: "me", text: "啊，是的常赫学长！学长跳舞超帅的！" },
      { from: "them", text: "谢谢。如果觉得经营学无聊，可以来舞蹈社看看。会让你放松很多。" },
      { from: "me", text: "好呀好呀，有空一定去！" },
      { type: "time", text: "昨天" },
      { from: "them", text: "舞蹈社这周有开放练习。" },
      { from: "me", text: "收到！这周末见！" }
    ],
    story: []
  },
  jaehyun: { 
    name: "明宰铉", avatarClass: "avatar-jh", color: "#ff375f", time: "昨天", preview: "成淏可是难得带人来！",
    history: [
      { type: "time", text: "9月12日" },
      { from: "them", text: "学妹好呀！我是传媒系的明宰铉！" },
      { from: "me", text: "宰铉学长好！" },
      { from: "them", text: "成淏那个闷葫芦居然会主动带学妹，太阳打西边出来了！" },
      { from: "me", text: "哈哈，迎新那天多亏了他。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "学妹！周五聚餐一定要来啊！" },
      { from: "me", text: "一定一定！" },
      { from: "them", text: "成淏可是难得带人来，我们得好好把把关！" }
    ],
    story: []
  },
  taesan: { 
    name: "韩泰山", avatarClass: "avatar-ts", color: "#5e5ce6", time: "昨天", preview: "新歌发了。",
    history: [
      { type: "time", text: "9月20日" },
      { from: "them", text: "我是韩泰山。" },
      { from: "me", text: "泰山学长好！听说你写歌很厉害。" },
      { from: "them", text: "还行。有灵感的话，可以来音乐楼找我。" },
      { from: "me", text: "好！我很期待！" },
      { type: "time", text: "昨天" },
      { from: "them", text: "新歌发了。" },
      { from: "me", text: "马上去听！" }
    ],
    story: []
  },
  leehan: { 
    name: "金桐儇", avatarClass: "avatar-lh", color: "#64d2ff", time: "昨天", preview: "图书馆见。",
    history: [
      { type: "time", text: "10月1日" },
      { from: "them", text: "你好，我是金桐儇。" },
      { from: "me", text: "桐儇学长好！" },
      { from: "them", text: "刚才看到你在一楼找不到书，其实三楼靠窗的位置更安静，书也更全。" },
      { from: "me", text: "哇，谢谢学长！我明天去看看。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "图书馆见。" },
      { from: "me", text: "嗯嗯，待会见！" }
    ],
    story: []
  },
  woonhak: { 
    name: "金云鹤", avatarClass: "avatar-wh", color: "#bf5af2", time: "昨天", preview: "学妹好！",
    history: [
      { type: "time", text: "9月5日" },
      { from: "them", text: "学妹好！我是云鹤！" },
      { from: "me", text: "云鹤学长好！" },
      { from: "them", text: "听说食堂今天的炸猪排超级好吃！你去了吗！" },
      { from: "me", text: "还没呢，正准备去。" },
      { from: "them", text: "快去吧！记得叫上成淏哥，他老不按时吃饭。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "学妹！有新开的甜品店，下次一起去啊！" },
      { from: "me", text: "好呀，说定了！" }
    ],
    story: []
  },
  group: {
    name: "6+1小分队", avatarClass: "avatar-group", color: "#8e8e93", time: "下午 14:30", preview: "朴成淏：我带学妹来。",
    history: [
      { type: "time", text: "今天 14:30" },
      { from: "them", sender: "明宰铉", text: "各位！这周五晚上聚餐，老地方！" },
      { from: "me", text: "收到！" },
      { from: "them", sender: "金云鹤", text: "好耶！我最近发现了一家超好吃的店！" },
      { from: "them", sender: "李常赫", text: "你上周不是才去过吗？" },
      { from: "them", sender: "金云鹤", text: "那不一样！" },
      { from: "them", sender: "朴成淏", text: "我带学妹来。" },
      { from: "them", sender: "明宰铉", text: "？！成淏你居然会主动带人！" }
    ],
    story: [
      { me: "学长们好！请多指教！", them: "欢迎欢迎！", sender: "明宰铉" }
    ]
  }
};

var MAP_PLACES = [
  { 
    id: "p1", name: "中央图书馆", x: 25, y: 30, clickCount: 0,
    events: [
      { text: "你在书架旁遇到成淏，他正踮脚找一本高处的书。", choices: ["帮他拿下来", "假装没看见"], reply: "【朴成淏】刚刚看到你踮脚的样子，像只小兔子。谢谢啦，书拿到了，下次请你喝奶茶。" },
      { text: "成淏趴在桌上睡着了，旁边还有没写完的报告。", choices: ["给他披件外套", "叫醒他"], reply: "【朴成淏】醒来看到你的外套了。我睡得有点沉，没压坏你的衣服吧？为了感谢你，晚上请你吃饭。" },
      { text: "你忘带笔记本了，正发愁。", choices: ["向他借", "去外面买"], reply: "【朴成淏】用我的吧，我记了双份。不过……你拿什么还我？" }
    ]
  },
  { 
    id: "p2", name: "篮球场", x: 75, y: 20, clickCount: 0,
    events: [
      { text: "成淏刚打完一场比赛，满头大汗地坐在场边。", choices: ["跑过去给他送水", "站在远处看"], reply: "【朴成淏】刚刚的水，谢谢。我刚才投进三分球的时候，余光看到你好像在欢呼？" },
      { text: "篮球滚到了你脚边，成淏跑过来捡。", choices: ["把球扔回给他", "抱在怀里逗他"], reply: "【朴成淏】刚才故意不给我球是吧？下次见面我要捏你的脸。" },
      { text: "比赛结束，他正被一群女生围着。", choices: ["转身走开", "在操场门口等他"], reply: "【朴成淏】刚才去哪了？我一转眼你就不见了。那群女生只是来送水的，我都没接。" }
    ]
  },
  { 
    id: "p3", name: "音乐楼", x: 80, y: 65, clickCount: 0,
    events: [
      { text: "经过琴房，听到里面传出好听的吉他声，是成淏在弹。", choices: ["推门进去听", "在门外安静听完"], reply: "【朴成淏】刚刚门外是你吧？进来啊，这首曲子刚写好，想第一个弹给你听。" },
      { text: "成淏正在调试设备，看起来有点烦躁。", choices: ["递给他一瓶水", "找泰山来帮忙"], reply: "【朴成淏】谢谢你的水。不过找泰山就算了，那家伙只会笑我。有你在旁边陪着，我心情好多了。" },
      { text: "社团招新，成淏坐在那里发传单。", choices: ["帮他一起发", "给他买杯咖啡"], reply: "【朴成淏】咖啡很好喝。不过其实你站在旁边，比一百张传单都有用，好多男生都在看你，我有点后悔让你来了。" }
    ]
  },
  { 
    id: "p4", name: "老地方烤肉店", x: 50, y: 45, clickCount: 0,
    events: [
      { text: "六人聚餐，大家刚坐下。", choices: ["坐在成淏旁边", "坐在云鹤旁边"], reply: "【朴成淏】刚刚聚餐，看到云鹤一直给你夹肉，你吃得还挺开心？我有点不舒服，下次我给你夹。" },
      { text: "聚餐进行到一半，大家在玩游戏。", choices: ["帮成淏挡酒", "自己喝掉"], reply: "【朴成淏】你干嘛替我喝酒？你酒量不好不知道吗？刚刚你脸红的样子……我看了好久。" },
      { text: "聚餐结束，大家在门口告别。", choices: ["等成淏一起走", "跟闺蜜先走"], reply: "【朴成淏】刚刚没看到你，还以为你丢下我先走了。还好你还在，走吧，我送你回宿舍。" }
    ]
  },
  { 
    id: "p5", name: "食堂", x: 40, y: 80, clickCount: 0,
    events: [
      { text: "你在排队，前面刚好是成淏。", choices: ["拍他肩膀", "默默排着"], reply: "【朴成淏】刚才拍我肩膀的时候，我其实吓一跳，但回头看到是你，又觉得挺开心。" },
      { text: "食堂人很多，只有他旁边有空位。", choices: ["坐过去", "去外面吃"], reply: "【朴成淏】怎么去外面了？下次直接坐我旁边，我帮你占座，我每天都在这吃。" },
      { text: "你没带饭卡。", choices: ["找他借", "饿着肚子"], reply: "【朴成淏】下次没带饭卡直接找我。你要是饿瘦了，我怎么跟叔叔阿姨交代？刚刚刷我的卡，怎么还脸红了？" }
    ]
  },
  { 
    id: "p6", name: "校园咖啡店", x: 20, y: 60, clickCount: 0,
    events: [
      { text: "成淏一个人在喝咖啡，看起来在发呆。", choices: ["坐过去", "给他发消息"], reply: "【朴成淏】刚看到你了。怎么不坐过来？我想和你一起喝，顺便……聊聊。" },
      { text: "你在点单，他站在你后面。", choices: ["帮他买单", "AA制"], reply: "【朴成淏】怎么偷偷帮我买单了？下次必须让我请回来，可以点你最喜欢的那杯。" },
      { text: "下雨了，他站在店门口没带伞。", choices: ["走过去共伞", "把伞留给他"], reply: "【朴成淏】你把伞给我了，自己淋湿了怎么办？刚刚我们在伞下，距离好像有点太近了。" }
    ]
  },
  { 
    id: "p7", name: "银杏大道", x: 65, y: 80, clickCount: 0,
    events: [
      { text: "银杏叶落满一地，他在拍照。", choices: ["偷偷走进他镜头", "在旁边静静看"], reply: "【朴成淏】刚才那张照片，拍到了你的背影。很好看，我已经设成屏保了。" },
      { text: "他在长椅上看书。", choices: ["坐旁边", "扔个叶子逗他"], reply: "【朴成淏】刚才用叶子砸我是不是？不乖啊，下次我要抓着你胳膊了。" },
      { text: "冷风吹过，你打了一个喷嚏。", choices: ["抱怨天气", "缩缩脖子"], reply: "【朴成淏】天冷了，下次出门记得多穿点。刚刚看你发抖，好想把你抱进怀里。" }
    ]
  },
  { 
    id: "p8", name: "操场看台", x: 15, y: 25, clickCount: 0,
    events: [
      { text: "晚上操场很安静，你来看星星。", choices: ["给成淏发消息", "一个人坐着"], reply: "【朴成淏】看到消息我就跑下来了。你一个人坐在这，也不怕冷。披上我的外套。" },
      { text: "体育课测试跑步，你跑完后气喘吁吁。", choices: ["去他旁边休息", "自己走开"], reply: "【朴成淏】刚刚跑步的样子很可爱。不过下次别那么拼，我会心疼的。" },
      { text: "他在看台上听歌。", choices: ["拿走他一只耳机", "不打扰他"], reply: "【朴成淏】分你一只耳机。这首歌的歌词，挺像我们现在的。" }
    ]
  },
  { 
    id: "p9", name: "图书馆三楼", x: 35, y: 65, clickCount: 0,
    events: [
      { text: "你复习到很晚，困得不行。", choices: ["趴在桌上睡", "去洗把脸"], reply: "【朴成淏】看你趴着睡着了，帮你把灯挡上了。醒了记得看消息，别着凉。" },
      { text: "你在借阅台遇到他。", choices: ["帮他拿书", "自己借书"], reply: "【朴成淏】刚刚你帮我拿书的时候，手指碰到了。心跳有点快。" },
      { text: "期末周，他给你带了一堆零食。", choices: ["收下并且道谢", "拒绝他"], reply: "【朴成淏】别拒绝，好好复习。等你考完，我带你去吃好吃的。" }
    ]
  },
  { 
    id: "p10", name: "校门口夜市", x: 85, y: 40, clickCount: 0,
    events: [
      { text: "夜市上人很多，你差点被挤散。", choices: ["抓住他的衣角", "自己走开"], reply: "【朴成淏】刚刚你抓着我衣角，我真的好想直接牵你的手。下次别躲开。" },
      { text: "他在买糖葫芦。", choices: ["凑过去看", "站在旁边等"], reply: "【朴成淏】给你买了一串。刚刚你盯着看的样子，像只馋猫。" },
      { text: "准备回学校了。", choices: ["让他送你回宿舍", "自己回去"], reply: "【朴成淏】我送你回去吧。这么晚了，我不放心。刚刚你走在我身边，希望这条路再长一点。" }
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
      var currentEvent = p.events[p.clickCount % 3];
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
             var replyText = currentEvent.reply;
             if (replyText.indexOf("】") > -1) {
                 speaker = replyText.substring(1, replyText.indexOf("】"));
                 replyText = replyText.substring(replyText.indexOf("】") + 1);
             }

             CHATS.sungho.history.push({ type: "time", text: "刚刚" });
             CHATS.sungho.history.push({ from: "them", text: replyText });
             CHATS.sungho.preview = replyText;
             
             showNotification(replyText, "sungho", speaker);
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