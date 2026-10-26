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
  { id: "m2", title: "绝密剧情提示", date: "现在", isLocked: true, content: "【剧本杀防卡关指南】\n\n1. 前置剧情：必须先在 KakaoTalk 和成淏（或其他人/群聊）聊完所有前戏！\n2. 线下事件：线上聊完后，【地图】上的对应地点才会解锁（变亮），点击即可打卡触发后续！\n3. 备忘录密码：0904" }
];

var gameState = {
  activeEvent: 0, // 当前进行到第几个大事件
  memoUnlocked: false, 
  likedSunghoPost: false 
};

var MAP_PLACES = [
  { 
    id: "p11", name: "校园咖啡店", x: 15, y: 35, clickCount: 0, isBigEvent: true, unlockCondition: 1,
    events: [
      { text: "你带着课本约成淏在咖啡店请教经营学问题。他讲得很认真，你却盯着他发呆。", choices: ["夸他讲得好", "假装在听"], reply: "【朴成淏】刚刚看你盯着我看，书都拿倒了。其实你一直看我的话，我完全讲不下去的。" },
      { text: "遇到一道超难的宏观经济学题，你抓着头发发愁。成淏凑过来看。", choices: ["把笔递给他", "自己死磕"], reply: "【朴成淏】别死磕了，我教你。不过讲完这道题，你要请我喝咖啡。" },
      { text: "咖啡店快打烊了，你们还在讨论小组作业。", choices: ["提醒他时间", "假装不知道"], reply: "【朴成淏】已经这么晚了？那我送你回宿舍。正好，我也想和你多待一会儿。" }
    ]
  },
  { 
    id: "p12", name: "校外智多寺", x: 10, y: 15, clickCount: 0, isBigEvent: true, unlockCondition: 2,
    events: [
      { text: "期中考试前，你们七个人一起去爬山烧香。你爬不动了，在台阶上喘气。", choices: ["让成淏拉你一把", "自己慢慢爬"], reply: "【朴成淏】手给我。刚刚你抓着我手的时候，突然觉得这山也不算陡了。" },
      { text: "在寺庙许愿树下，成淏写了块许愿牌。你偷看。", choices: ["凑近去看", "装作不看"], reply: "【朴成淏】不许偷看。不过如果你想知道，我可以直接告诉你。" },
      { text: "下山的时候，云鹤他们在前面打闹，你和成淏走在后面。", choices: ["说点浪漫的话", "安静走着"], reply: "【朴成淏】刚刚后面安静的那段路，我其实很想牵你的手。下次，我就直接牵了。" }
    ]
  },
  { 
    id: "p13", name: "教学楼", x: 65, y: 30, clickCount: 0, isBigEvent: true, unlockCondition: 3,
    events: [
      { text: "一夜之间大降温，你穿着单衣在教室冻得发抖。成淏脱下了自己的大衣。", choices: ["乖乖让他披上", "拒绝说自己不冷"], reply: "【朴成淏】不许拒绝。大衣很暖和，还带着我的体温。你要是感冒了，我会心疼的。" },
      { text: "下课了，外面下起大雪，你站在门口没带伞。", choices: ["等雪停", "冲进雪里"], reply: "【朴成淏】冲进雪里干嘛？过来，我们打一把伞。靠我近一点，别淋湿了。" },
      { text: "你在暖气片旁边搓手，成淏递过来一个暖宝宝。", choices: ["道谢收下", "问他哪来的"], reply: "【朴成淏】特意给你买的。刚刚看你冻得缩成一团，我恨不得把外套也给你。" }
    ]
  },
  { 
    id: "p14", name: "操场跑道", x: 45, y: 25, clickCount: 0, isBigEvent: true, unlockCondition: 4,
    events: [
      { text: "大学体测女子800米，你跑完虚脱了，差点摔倒。成淏冲过来一把扶住你。", choices: ["靠在他怀里", "推开他自己走"], reply: "【朴成淏】别动，靠着我。刚刚看你跑完脸都白了，我差点冲进跑道去拉你。" },
      { text: "你在跑道边狂喘气，成淏递来一瓶水，还帮你顺背。", choices: ["对他笑一下", "继续喘气"], reply: "【朴成淏】先喝口水。刚刚你的心跳好快，不知道是跑步跑的，还是因为我的原因。" },
      { text: "体测结束，成淏一直扶着你慢慢走，帮你放松。", choices: ["说你很累", "向他道谢"], reply: "【朴成淏】累了就靠着我。其实我很庆幸是我在你旁边，不然别人扶你，我肯定会吃醋的。" }
    ]
  },
  { 
    id: "p15", name: "体育馆", x: 30, y: 60, clickCount: 0, isBigEvent: true, unlockCondition: 5,
    events: [
      { text: "服装设计大赛，你和成淏被选为模特搭档走秀。彩排时，他穿着西装看着你发呆。", choices: ["夸他西装好看", "害羞低头"], reply: "【朴成淏】很好看吧？不过你看我走神了。刚刚在台上，我只盯着你一个人看。" },
      { text: "走秀快上场了，你有点紧张，手冰凉。", choices: ["拉住他的衣角", "深呼吸"], reply: "【朴成淏】别怕，有我在。上场后看着我，就当台下没有别人。" },
      { text: "走秀非常成功，大家都在鼓掌，成淏突然靠近你耳边说话。", choices: ["听他说什么", "躲开"], reply: "【朴成淏】刚刚我在台上对你说，你今天漂亮极了，全世界只有你最好看。" }
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
      { from: "them", text: "你往左手边那条路走，看到学生会馆就到了。" }
    ],
    // 事件1：私聊铺垫（咖啡店）
    story: [
      { me: "学长，最近期中考试你能教教我吗？", them: "当然。那这周末去咖啡店吧，我帮你辅导。" },
      { me: "太好了！那我们周六见！", them: "嗯。对了，就我们两个人，别叫别人了。" }
    ]
  },
  riwoo: { 
    name: "李常赫", avatarClass: "avatar-rw", color: "#30d158", time: "昨天", preview: "舞蹈社的日常。",
    history: [
      { type: "time", text: "9月10日" },
      { from: "them", text: "我是李常赫。如果觉得经营学无聊，可以来舞蹈社看看。" }
    ],
    story: [
      // 事件2：群聊卡壳，需要找他私聊（寺庙）
      { me: "常赫学长，群里说要去智多寺拜佛，你去吗？", them: "去。不过刚刚群消息太多没看到。成淏去吗？他去我就去。" }
    ]
  },
  jaehyun: { 
    name: "明宰铉", avatarClass: "avatar-jh", color: "#ff375f", time: "昨天", preview: "聚餐定啦！",
    history: [
      { type: "time", text: "9月12日" },
      { from: "them", text: "学妹好呀！我是传媒系的明宰铉！" }
    ],
    story: []
  },
  taesan: { 
    name: "韩泰山", avatarClass: "avatar-ts", color: "#5e5ce6", time: "昨天", preview: "新歌demo。",
    history: [
      { type: "time", text: "9月20日" },
      { from: "them", text: "我是韩泰山。新歌发了，有空听。" }
    ],
    story: []
  },
  leehan: { 
    name: "金桐儇", avatarClass: "avatar-lh", color: "#64d2ff", time: "昨天", preview: "图书馆见。",
    history: [
      { type: "time", text: "10月1日" },
      { from: "them", text: "你好，我是金桐儇。三楼靠窗位置很好。" }
    ],
    story: []
  },
  woonhak: { 
    name: "金云鹤", avatarClass: "avatar-wh", color: "#bf5af2", time: "昨天", preview: "学妹好！",
    history: [
      { type: "time", text: "9月5日" },
      { from: "them", text: "学妹好！我是云鹤！食堂炸猪排超好吃！" }
    ],
    story: []
  },
  group: {
    name: "6+1小分队", avatarClass: "avatar-group", color: "#8e8e93", time: "下午 14:30", preview: "朴成淏：我带学妹来。",
    history: [
      { type: "time", text: "今天 14:30" },
      { from: "them", sender: "明宰铉", text: "各位！周五晚上聚餐，老地方！" }
    ],
    // 事件2：群聊铺垫（寺庙）
    story: [
      { me: "学长们，这周六我和成淏学长打算去智多寺拜佛，求期中考试顺利，大家要不要一起去？", them: "好啊！爬山拜佛！我参加！", sender: "明宰铉" },
      { me: "还有谁去呀？", them: "我也去！", sender: "金云鹤" },
      { me: "泰山学长和桐儇学长呢？", them: "他们好像没看到消息。你私聊问问他们吧！", sender: "明宰铉" }
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
          chat.history.push({ from: "them", text: currentStory.them, sender: currentStory.sender });
          chat.preview = currentStory.them;
          
          var replyRow = document.createElement("div");
          replyRow.className = "msg-row them";
          var rAvClass = chat.avatarClass;
          var rAvColor = chat.color;
          if (currentStory.sender) {
              if (currentStory.sender === "明宰铉") { rAvClass = "avatar-jh"; rAvColor = "#ff375f"; }
              else if (currentStory.sender === "金云鹤") { rAvClass = "avatar-wh"; rAvColor = "#bf5af2"; }
              else if (currentStory.sender === "李常赫") { rAvClass = "avatar-rw"; rAvColor = "#30d158"; }
          }
          var senderNameHTML = currentStory.sender ? '<div class="msg-sender">' + currentStory.sender + '</div>' : '';
          replyRow.innerHTML = '<div class="msg-avatar ' + rAvClass + '" style="background-color:' + rAvColor + '"></div><div class="msg-content">' + senderNameHTML + '<div class="bubble">' + currentStory.them + '</div></div>';
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
    
    // 锁机机制：如果当前进度小于解锁条件，显示灰色且点击无效
    var isLocked = gameState.activeEvent < p.unlockCondition - 1;
    
    if (isLocked) {
        pin.style.filter = "grayscale(100%) opacity(50%)";
    } else {
        pin.style.filter = "none";
    }
    
    pin.innerHTML = '<div class="pin-icon"></div><div class="pin-label">' + p.name + '</div>';
    
    pin.onclick = function(e) {
      e.stopPropagation();
      if (isLocked) {
          alert("这里暂时没有剧情。先去 KakaoTalk 推进前置聊天吧！");
          return;
      }
      
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
             }

             CHATS[chatId].history.push({ type: "time", text: "刚刚" });
             CHATS[chatId].history.push({ from: "them", text: replyText });
             CHATS[chatId].preview = replyText;
             
             // 关键：打卡完成后，推进大事件进度！
             gameState.activeEvent++;
             
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