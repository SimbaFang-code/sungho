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
  // --- 小事件 ---
  { id: "s1", name: "老地方烤肉店", x: 50, y: 45, clickCount: 0, isBigEvent: false, unlockCondition: 0,
    events: [
      { text: "六人聚餐，大家刚坐下。", choices: ["坐在成淏旁边", "坐在云鹤旁边"], reply: "【朴成淏】刚刚聚餐，云鹤一直给你夹肉，我有点不舒服。下次我给你夹。" },
      { text: "聚餐进行到一半，大家在玩游戏。", choices: ["帮成淏挡酒", "自己喝掉"], reply: "【朴成淏】你干嘛替我挡酒？不过刚刚你脸红的样子，真的很好看。" }
    ]
  },
  { id: "s2", name: "中央图书馆", x: 25, y: 30, clickCount: 0, isBigEvent: false, unlockCondition: 0,
    events: [
      { text: "你在书架旁遇到成淏，他正踮脚找高处的书。", choices: ["帮他拿下来", "假装没看见"], reply: "【朴成淏】刚刚看到你踮脚的样子，像只小兔子。下次这种事，我帮你做就好。" }
    ]
  },
  { id: "s3", name: "篮球场", x: 75, y: 20, clickCount: 0, isBigEvent: false, unlockCondition: 0,
    events: [
      { text: "成淏刚打完比赛，满头大汗。", choices: ["跑过去给他送水", "站在远处看"], reply: "【朴成淏】刚刚的水，谢谢。我投进三分球的时候，余光看到你在欢呼。" }
    ]
  },
  { id: "s4", name: "音乐楼", x: 80, y: 65, clickCount: 0, isBigEvent: false, unlockCondition: 0,
    events: [
      { text: "经过琴房，听到成淏在弹吉他。", choices: ["推门进去听", "在门外安静听完"], reply: "【朴成淏】刚刚门外是你吧？这首曲子刚写好，想第一个弹给你听。" }
    ]
  },
  { id: "s5", name: "食堂", x: 40, y: 80, clickCount: 0, isBigEvent: false, unlockCondition: 0,
    events: [
      { text: "食堂人很多，只有他旁边有空位。", choices: ["坐过去", "去外面吃"], reply: "【朴成淏】怎么去外面了？下次直接坐我旁边，我帮你占座。" }
    ]
  },
  { id: "s6", name: "操场看台", x: 15, y: 25, clickCount: 0, isBigEvent: false, unlockCondition: 0,
    events: [
      { text: "晚上操场很安静，你来看星星。", choices: ["给成淏发消息", "一个人坐着"], reply: "【朴成淏】看到消息我就跑下来了。你一个人坐在这，也不怕冷。披上我的外套。" }
    ]
  },
  { id: "s7", name: "校门口夜市", x: 85, y: 40, clickCount: 0, isBigEvent: false, unlockCondition: 0,
    events: [
      { text: "夜市上人很多，你差点被挤散。", choices: ["抓住他的衣角", "自己走开"], reply: "【朴成淏】刚刚你抓着我衣角，我真的好想直接牵你的手。" }
    ]
  },
  // --- 大事件 ---
  { id: "p11", name: "校园咖啡店", x: 15, y: 35, clickCount: 0, isBigEvent: true, unlockCondition: 1,
    events: [
      { text: "你带着课本约成淏在咖啡店请教问题。他讲得很认真。", choices: ["夸他讲得好", "假装在听"], reply: "【朴成淏】刚刚看你盯着我看，书都拿倒了。其实你一直看我的话，我完全讲不下去的。" }
    ]
  },
  { id: "p12", name: "校外智多寺", x: 10, y: 15, clickCount: 0, isBigEvent: true, unlockCondition: 2,
    events: [
      { text: "你们七个人一起去爬山烧香。你爬不动了。", choices: ["让成淏拉你一把", "自己慢慢爬"], reply: "【朴成淏】手给我。刚刚你抓着我手的时候，突然觉得这山也不算陡了。" }
    ]
  },
  { id: "p13", name: "教学楼", x: 65, y: 30, clickCount: 0, isBigEvent: true, unlockCondition: 3,
    events: [
      { text: "大降温，你穿着单衣在教室冻得发抖。成淏脱下大衣给你。", choices: ["乖乖让他披上", "拒绝"], reply: "【朴成淏】不许拒绝。大衣很暖和，还带着我的体温。你要是感冒了，我会心疼的。" }
    ]
  },
  { id: "p14", name: "操场跑道", x: 45, y: 25, clickCount: 0, isBigEvent: true, unlockCondition: 4,
    events: [
      { text: "体测800米，你跑完虚脱了。成淏冲过来一把扶住你。", choices: ["靠在他怀里", "推开他"], reply: "【朴成淏】别动，靠着我。刚刚看你跑完脸都白了，我差点冲进跑道去拉你。" }
    ]
  },
  { id: "p15", name: "体育馆", x: 30, y: 60, clickCount: 0, isBigEvent: true, unlockCondition: 5,
    events: [
      { text: "服装设计大赛，你和成淏搭档走秀。", choices: ["夸他西装好看", "害羞低头"], reply: "【朴成淏】很好看吧？刚刚在台上，我只盯着你一个人看。" }
    ]
  }
];

var CHATS = {
  sungho: { 
    name: "朴成淏", avatarClass: "avatar-sh", color: "#ff9f0a", time: "刚刚", preview: "好的。",
    history: [
      { type: "time", text: "9月2日 迎新日" }, { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准。" }, { from: "them", text: "你往左手边那条路走，看到学生会馆就到了。" },
      { type: "time", text: "今天 下午 16:00" }, { from: "them", text: "宰铉在群里说周五聚餐，你看到了吗？" }
    ],
    story: [
      { me: "看到啦，我一定会去的！", them: "嗯，去吧，大家都很想见你。" },
      { me: "学长会去吗？", them: "当然。我不去的话，谁替你挡酒？" },
      { me: "嘿嘿，那太好了", them: "对了，周五那天穿得好看点。" },
      { me: "诶？为什么？", them: "因为我想和你多拍几张照片。" },
      { me: "学长，最近期中考试你能教教我吗？", them: "当然。那这周末去咖啡店吧，我帮你辅导。" },
      { me: "学长，考完了要不要去寺庙拜拜求个心安？", them: "可以啊。不过就我们俩去吗？" },
      { me: "要不叫上大家一起去吧？人多热闹。", them: "行，你去群里问问他们。" }
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
      { me: "学长你最近是不是瘦了？", them: "为了校庆的表演在减脂。别告诉成淏，他最近老盯着我，怕我带你练太累。" }
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
      { me: "学长别闹！", them: "放心，包在我身上。不过到时候走秀，我可得坐在第一排看。" }
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
      { me: "好，我一定去！", them: "嗯。成淏那天也会去。你们俩在一起的时候，我总觉得这画面很适合拍MV。" }
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
      { me: "他怎么连这个也发愁。", them: "因为他很在意你。这种细节，只有旁观者看得最清楚。" }
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
      { me: "啊？他等谁？", them: "还装！当然是在等你跑800米啊！他连水都提前买好了。" }
    ]
  },
  group: {
    name: "6+1小分队", avatarClass: "avatar-group", color: "#8e8e93", time: "下午 14:30", preview: "群聊消息",
    history: [ 
      { type: "time", text: "今天 14:30" }, { from: "them", sender: "明宰铉", text: "各位！周五晚上聚餐，老地方！" },
      { from: "them", sender: "金云鹤", text: "好耶！有新开的店！" }, { from: "them", sender: "李常赫", text: "你上周不是才去过吗？" },
      { from: "them", sender: "朴成淏", text: "我带学妹来。" }
    ],
    story: [
      { me: "收到！我会准时到的！", them: "欢迎欢迎！", sender: "明宰铉" },
      { me: "学长们，这周六我和成淏打算去智多寺拜佛，大家要不要一起去？", them: "好啊！我参加！", sender: "明宰铉" },
      { me: "还有谁去呀？", them: "我也去！", sender: "金云鹤" },
      { me: "泰山学长和桐儇学长呢？", them: "他们好像没看到消息。你私聊问问他们吧！", sender: "明宰铉" },
      { me: "常赫学长呢？", them: "他也没说话，你问问他。", sender: "明宰铉" }
    ]
  }
};

var currentChat = null;
var currentMemo = null;

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
      var row = document.createElement("div"); row.className = "msg-row me";
      row.innerHTML = '<div class="msg-content"><div class="bubble">' + text + '</div></div>';
      room.appendChild(row); room.scrollTop = room.scrollHeight;
      if (chat.story && chat.story.length > 0 && chat.story[0].me === text) {
        var currentStory = chat.story.shift(); isTyping = true; inputEl.placeholder = "对方正在输入...";
        setTimeout(function() {
          chat.history.push({ from: "them", text: currentStory.them, sender: currentStory.sender });
          chat.preview = currentStory.them;
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
      e.stopPropagation(); if (isLocked) { alert("这里暂时没有剧情。先去 KakaoTalk 推进前置聊天吧！"); return; }
      var currentEvent = p.events[p.clickCount % p.events.length];
      eventText.innerText = currentEvent.text; choiceOptions.innerHTML = "";
      currentEvent.choices.forEach(function(choice, index) {
        var btn = document.createElement("div"); btn.className = "map-choice-btn"; btn.innerText = choice;
        btn.onclick = function() {
          choiceModal.classList.remove("show");
          if (index === 1) { p.clickCount++; return; }
          if (currentEvent.reply) {
             var speaker = "朴成淏"; var chatId = "sungho"; var replyText = currentEvent.reply;
             if (replyText.indexOf("】") > -1) {
                 speaker = replyText.substring(1, replyText.indexOf("】")); replyText = replyText.substring(replyText.indexOf("】") + 1);
             }
             CHATS[chatId].history.push({ type: "time", text: "刚刚" }); CHATS[chatId].history.push({ from: "them", text: replyText }); CHATS[chatId].preview = replyText;
             if (p.isBigEvent) gameState.activeEvent++;
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
  if (val === "0904") { gameState.memoUnlocked = true; openApp("memo", "备忘录"); } else alert("密码错误");
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