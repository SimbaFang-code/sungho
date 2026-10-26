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
    // 橙光剧情树
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
    story: []
  }
};

var MAP_PLACES = [
  { 
    id: "p1", name: "中央图书馆", x: 25, y: 30, clickCount: 0,
    events: [
      { text: "你在书架旁遇到成淏，他正踮脚找一本高处的书。", choices: ["帮他拿下来", "假装没看见"], reply: "成淏接过书看着你：谢谢，你长得不高，但很可靠。" },
      { text: "成淏趴在桌上睡着了，旁边还有没写完的报告。", choices: ["给他披件外套", "叫醒他"], reply: "他醒来看到外套，眼神温柔：是你啊...陪我待会儿？" },
      { text: "你忘带笔记本了，正发愁。", choices: ["向他借", "去外面买"], reply: "成淏直接把本子推给你：用我的吧，我记了双份。" }
    ]
  },
  { 
    id: "p2", name: "篮球场", x: 75, y: 20, clickCount: 0,
    events: [
      { text: "成淏刚打完一场比赛，满头大汗地坐在场边休息。", choices: ["跑过去给他送水", "站在远处看"], reply: "刚刚的水，谢谢。下次换我请你喝东西。" },
      { text: "篮球滚到了你脚边，成淏跑过来捡。", choices: ["把球扔回给他", "抱在怀里逗他"], reply: "刚才故意不给我球是吧？下次见面我要捏你的脸。" },
      { text: "比赛结束了，他正被一群女生围着。", choices: ["转身走开", "在操场门口等他"], reply: "刚才去哪了？我一转眼你就不见了，害我找了半天。" }
    ]
  },
  { 
    id: "p3", name: "音乐楼", x: 80, y: 65, clickCount: 0,
    events: [
      { text: "经过琴房，听到里面传出好听的吉他声，是成淏在弹。", choices: ["推门进去听", "在门外安静听完"], reply: "刚刚门外是你吧？进来啊，这首曲子刚写好。" },
      { text: "成淏正在调试设备，看起来有点烦躁。", choices: ["递给他一瓶水", "找泰山来帮忙"], reply: "谢谢你的水，不过找泰山就算了，那家伙只会笑我。" },
      { text: "社团招新，成淏坐在那里发传单。", choices: ["帮他一起发", "给他买杯咖啡"], reply: "咖啡很好喝。不过其实你站在旁边，比一百张传单都有用。" }
    ]
  },
  { 
    id: "p4", name: "学生会馆", x: 50, y: 45, clickCount: 0,
    events: [
      { text: "成淏在开会，你路过刚好和他对上视线。", choices: ["笑着打招呼", "装作没看见走开"], reply: "刚刚看到我装没看到是吧？开完会去找你，等着。" },
      { text: "他在整理一堆厚重的文件，看起来很累。", choices: ["上去帮忙", "去买两杯热可可"], reply: "热可可很暖。不过最暖的是，你刚才一直在偷看我。" },
      { text: "走廊上人很多，你差点被撞倒。", choices: ["抓住他的手臂", "自己站稳"], reply: "下次走路看着点。要是我不在，你摔倒了怎么办？" }
    ]
  },
  { 
    id: "p5", name: "食堂", x: 40, y: 80, clickCount: 0,
    events: [
      { text: "你在排队，前面刚好是成淏。", choices: ["拍他肩膀", "默默排着"], reply: "刚才拍我肩膀的时候，有没有觉得我背很宽？" },
      { text: "只有他旁边有空位。", choices: ["坐过去", "去外面吃"], reply: "怎么去外面了？下次直接坐我旁边，我帮你占座。" },
      { text: "你没带饭卡。", choices: ["找他借", "饿着肚子"], reply: "下次没带饭卡直接找我。你要是饿瘦了，我怎么跟叔叔阿姨交代？" }
    ]
  },
  { 
    id: "p6", name: "咖啡店", x: 20, y: 60, clickCount: 0,
    events: [
      { text: "成淏一个人在喝咖啡，看起来在发呆。", choices: ["坐过去", "给他发消息"], reply: "刚看到你了。过来啊，我想和你一起喝。" },
      { text: "你在点单，他站在你后面。", choices: ["帮他买单", "AA制"], reply: "怎么偷偷帮我买单了？下次必须让我请回来。" },
      { text: "下雨了，他站在店门口没带伞。", choices: ["走过去共伞", "把伞留给他"], reply: "你把伞给我了，自己淋湿了怎么办？" }
    ]
  },
  { 
    id: "p7", name: "银杏大道", x: 65, y: 80, clickCount: 0,
    events: [
      { text: "银杏叶落满一地，他在拍照。", choices: ["偷偷走进他镜头", "在旁边静静看"], reply: "刚才那张照片，拍到了你的背影。很好看。" },
      { text: "他在长椅上看书。", choices: ["坐旁边", "扔个叶子逗他"], reply: "刚才用叶子砸我是不是？不乖啊。" },
      { text: "冷风吹过，你打了一个喷嚏。", choices: ["抱怨天气", "缩缩脖子"], reply: "天冷了，下次出门记得多穿点。不然我会心疼。" }
    ]
  }
];

var currentChat = null;

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
  }
  c.scrollTop = 0;
}

function goHome() {
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("home").classList.add("active");
  var dock = document.querySelector(".dock");
  if(dock) dock.classList.remove("hidden-dock");
  currentChat = null;
}

function goBack() { 
  if (currentChat) {
    currentChat = null;
    openApp("kakao", "KakaoTalk");
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

    // 点击输入框：如果有剧情就弹选项，没有就自由打字
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

    // 发送逻辑
    sendBtn.onclick = function() {
      if (isTyping) return;
      var text = inputEl.value.trim();
      if (!text) return;
      
      // 1. 玩家发送
      chat.history.push({ from: "me", text: text });
      chat.preview = text;
      inputEl.value = "";
      
      var row = document.createElement("div");
      row.className = "msg-row me";
      row.innerHTML = '<div class="msg-content"><div class="bubble">' + text + '</div></div>';
      room.appendChild(row);
      room.scrollTop = room.scrollHeight;

      // 2. 判断是否触发了橙光剧情
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
             var replyText = currentEvent.reply;
             CHATS.sungho.history.push({ type: "time", text: "刚刚" });
             CHATS.sungho.history.push({ from: "them", text: replyText });
             CHATS.sungho.preview = replyText;
             showNotification(replyText, "sungho");
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

var notifTimeout = null;
function showNotification(text, chatId) {
  var notif = document.getElementById("ios-notification");
  var body = document.getElementById("notif-body-text");
  body.innerText = "朴成淏：" + text;
  
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