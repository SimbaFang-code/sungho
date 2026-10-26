// --- 你的图标配置和基础数据 ---
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
  { id: "m2", title: "绝密剧情提示", date: "现在", isLocked: true, content: "【剧本杀防卡关指南】\n\n1. 熟悉阶段：多去【地图】和成淏打卡约会，累计10次线下约会后才能解锁后续心动剧情。\n2. 发现线索：如果有不懂的，去看看成淏的 IG 动态。" }
];

var MAP_PLACES = [
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

var CHATS = {
  sungho: {
    name: "朴成淏", avatar: "成", color: "#ff9f0a",
    messages: [
      { type: "time", text: "9月2日 迎新日" },
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "往左手边那条路走，看到学生会馆就到了。" },
      { type: "time", text: "10月15日 晚上 23:15" },
      { from: "them", text: "今天社团开会累不累？" },
      { from: "me", text: "有点，不过学长你今天怎么也这么晚？" },
      { from: "them", text: "在看点资料。早点休息吧，晚安。" },
      { type: "time", text: "今天 下午 16:00" },
      { from: "them", text: "宰铉在群里说周五聚餐，你看到了吗？" }
    ],
    story: [
      { me: "看到啦，我一定会去的", them: "嗯，去吧，大家都很想见你。" },
      { me: "学长最近好像很忙？", them: "有一点，准备迎新晚会的事情。" },
      { me: "那要注意休息呀", them: "好。对了，今晚云鹤是不是一直找你说话？" },
      { me: "是呀，他很热情", them: "……早知道不让他加你了，我有点吃醋。" },
      { me: "学长怎么连这种醋都吃", them: "因为，我好像有点太在意你了。" }
    ]
  },
  riwoo: { name: "李常赫", avatar: "常", color: "#30d158", messages: [{type:"time", text:"昨天"}, {from:"them", text:"舞蹈社有练习。"}], story: [] },
  taesan: { name: "韩泰山", avatar: "泰", color: "#5e5ce6", messages: [{type:"time", text:"昨天"}, {from:"them", text:"新歌发了。"}], story: [] },
  leehan: { name: "金桐儇", avatar: "桐", color: "#64d2ff", messages: [{type:"time", text:"昨天"}, {from:"them", text:"图书馆见。"}], story: [] },
  woonhak: { name: "金云鹤", avatar: "云", color: "#bf5af2", messages: [{type:"time", text:"昨天"}, {from:"them", text:"学妹好！"}], story: [] },
  yujin: { name: "崔裕真 (同级)", avatar: "裕", color: "#ff9500", messages: [{type:"time", text:"昨天"}, {from:"them", text:"天呐，你认识大三那几个帅哥？"}], story: [] },
  group: {
    name: "延世街六人组", avatar: "群", color: "#8e8e93",
    messages: [{ type: "time", text: "今天 14:30" }, { from: "them", sender: "明宰铉", text: "周五聚餐！" }, { from: "them", sender: "朴成淏", text: "我带学妹来。" }],
    story: [
      { me: "好呀，谢谢大家！", them: "欢迎欢迎！", sender: "明宰铉" },
      { me: "我会准时到的", them: "太好啦！", sender: "金云鹤" }
    ]
  }
};

var INSTAGRAM_FEED = [
  { id: "post_2", user: "sungho_", avatar: "成", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600", caption: "coffee." }
];

// --- 状态变量 ---
var currentChat = null;
var currentMemo = null;
var gameState = { dateCount: 0, likedSunghoPost: false, memoUnlocked: false };
var activePinId = null;

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
    if (app.id === "x") return '<div class="icon-box icon-x">✕</div>';
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
  if (id === "kakao" && currentChat) c.classList.add("no-padding");
  if (id === "map") c.classList.add("no-padding");
  renderAppContent(id);
  c.scrollTop = 0;
}

function goHome() {
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("home").classList.add("active");
  var dock = document.querySelector(".dock");
  if(dock) dock.classList.remove("hidden-dock");
}

function goBack() {
  if (currentChat) { 
    currentChat = null; 
    document.getElementById("app-content").classList.remove("no-padding");
    renderAppContent("kakao"); 
  } else if (currentMemo) {
    currentMemo = null;
    renderAppContent("memo");
  } else { goHome(); }
}

function renderAppContent(id) {
  var c = document.getElementById("app-content"); c.innerHTML = "";
  if (id === "kakao") renderKakao(c);
  else if (id === "instagram") renderInstagram(c);
  else if (id === "memo") renderMemo(c);
  else if (id === "map") renderMap(c);
  else c.innerHTML = "<div style='text-align:center;padding:80px 20px;color:#8e8e93;font-size:16px;'>【" + id + "】功能正在开发中...</div>";
}

/* ================= 高仿 KakaoTalk 界面 ================= */
function renderKakao(c) {
  if (currentChat) {
    var chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;

    c.innerHTML = 
      '<div class="chat-room-wrapper">' +
        '<div id="chat-room-container" class="chat-room"></div>' +
        '<div class="kkt-input-bar">' +
          '<div class="kkt-plus">+</div>' +
          '<input id="kakao-input" type="text" class="kkt-input-box" placeholder="发送消息...">' +
          '<button id="kakao-send-btn" class="kkt-send-btn">发送</button>' +
        '</div>' +
        '<div id="reply-modal" class="reply-modal">' +
          '<div style="font-size:12px; color:#8e8e93; margin-bottom:10px; text-align:center;">请选择剧情回复</div>' +
          '<div id="reply-options-container"></div>' +
          '<div style="text-align:center; margin-top:10px;"><span onclick="document.getElementById(\'reply-modal\').classList.remove(\'show\')" style="color:#007aff; font-size:14px; cursor:pointer;">取消</span></div>' +
        '</div>' +
      '</div>';

    var room = document.getElementById("chat-room-container");
    var inputEl = document.getElementById("kakao-input");
    var sendBtn = document.getElementById("kakao-send-btn");
    var modal = document.getElementById("reply-modal");
    var optionsContainer = document.getElementById("reply-options-container");

    var isTyping = false; 

    var renderMessages = function() {
      room.innerHTML = "";
      chat.messages.forEach(function(m) {
        if (m.type === "time") { room.innerHTML += '<div class="time-divider"><span>' + m.text + '</span></div>'; return; }
        
        var row = document.createElement("div"); 
        row.className = "msg-row " + m.from;
        
        var avatarHTML = "";
        if (m.from === "them") {
           avatarHTML = '<div class="msg-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div>';
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
    };
    renderMessages();

    inputEl.onclick = function(e) {
      e.preventDefault();
      if (isTyping) return; 
      if (chat.story && chat.story.length > 0) {
        inputEl.blur(); 
        optionsContainer.innerHTML = "";
        var btn = document.createElement("div");
        btn.className = "reply-option";
        btn.innerText = chat.story[0].me;
        btn.onclick = function() { inputEl.value = chat.story[0].me; modal.classList.remove("show"); };
        optionsContainer.appendChild(btn);
        modal.classList.add("show");
      } else {
        inputEl.focus(); 
      }
    };

    sendBtn.onclick = function() {
      if (isTyping) return;
      var text = inputEl.value.trim();
      if (!text) return;
      
      chat.messages.push({ from: "me", text: text });
      inputEl.value = "";
      renderMessages();

      if (chat.story && chat.story.length > 0 && chat.story[0].me === text) {
        var currentStory = chat.story.shift();
        isTyping = true; 
        inputEl.placeholder = "对方正在输入...";

        setTimeout(function() {
          chat.messages.push({ 
            from: "them", 
            text: currentStory.them,
            sender: currentStory.sender 
          });
          renderMessages();
          isTyping = false;
          inputEl.placeholder = "发送消息...";
        }, 1500);
      }
    };
    return;
  }

  // 聊天列表
  c.style.backgroundColor = "#fff";
  Object.keys(CHATS).forEach(function(key) {
    var chat = CHATS[key];
    var item = document.createElement("div"); item.className = "chat-list-item";
    var msgs = chat.messages.filter(function(m) { return m.type !== 'time'; });
    var lastMsg = msgs[msgs.length - 1] || { text: "" };
    
    var previewText = lastMsg.text;
    if (lastMsg.sender) previewText = lastMsg.sender + "：" + lastMsg.text;
    
    item.innerHTML = '<div class="chat-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div><div class="chat-info"><div class="chat-header-row"><div class="chat-name">' + chat.name + '</div><div class="chat-time">刚刚</div></div><div class="chat-preview">' + previewText + '</div></div>';
    item.onclick = function() { 
      currentChat = key; 
      document.getElementById("app-content").classList.add("no-padding");
      renderAppContent("kakao"); 
    };
    c.appendChild(item);
  });
}

/* ================= 其他功能 ================= */
function renderMap(c) {
  c.innerHTML = 
    '<div class="map-container">' +
      '<div id="map-pins"></div>' +
      '<div id="map-card" class="map-bottom-card">' +
        '<h3 id="map-title" style="font-size:18px; margin-bottom:5px;">地点名称</h3>' +
        '<p id="map-desc" style="font-size:14px; color:#666;">地点描述</p>' +
        '<button class="map-btn" id="map-action-btn">确认前往该地点</button>' +
      '</div>' +
      '<div class="map-choice-modal" id="map-choice-modal">' +
        '<div class="map-choice-box">' +
          '<div class="map-choice-title" id="map-choice-title">触发剧情：你要怎么做？</div>' +
          '<div id="map-choice-options"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  
  var pinsCont = document.getElementById("map-pins");
  var card = document.getElementById("map-card");
  var title = document.getElementById("map-title");
  var desc = document.getElementById("map-desc");
  var btn = document.getElementById("map-action-btn");
  var choiceModal = document.getElementById("map-choice-modal");
  var choiceOptions = document.getElementById("map-choice-options");

  MAP_PLACES.forEach(function(p) {
    var pin = document.createElement("div");
    pin.className = "map-pin";
    pin.style.left = p.x + "%";
    pin.style.top = p.y + "%";
    pin.innerHTML = '<div class="pin-icon"></div><div class="pin-label">' + p.name + '</div>';
    
    pin.onclick = function(e) {
      e.stopPropagation();
      activePinId = p.id;
      title.innerText = p.name;
      desc.innerText = "点击下方按钮进入该场景。";
      
      if (gameState['date_' + p.id]) {
         btn.innerText = "已完成该地点的剧情";
         btn.style.background = "#ccc";
         btn.disabled = true;
      } else {
         btn.innerText = "模拟前往该地点";
         btn.style.background = "#007aff";
         btn.disabled = false;
      }
      card.classList.add("show");
    };
    pinsCont.appendChild(pin);
  });

  btn.onclick = function() {
    if (!activePinId || btn.disabled) return;
    var place = MAP_PLACES.find(function(p) { return p.id === activePinId; });
    
    choiceOptions.innerHTML = "";
    place.choices.forEach(function(choice) {
      var choiceBtn = document.createElement("div");
      choiceBtn.className = "map-choice-btn";
      choiceBtn.innerText = choice;
      choiceBtn.onclick = function() {
        choiceModal.classList.remove("show");
        gameState['date_' + place.id] = true;
        gameState.dateCount++;
        
        alert('【剧情触发】\n\n你选择了：' + choice + '\n\n' + place.reply + '\n\n（当前攻略进度：' + gameState.dateCount + '/10）');
        btn.innerText = "已完成该地点的剧情";
        btn.style.background = "#ccc";
        btn.disabled = true;

        if (place.id === "p2") {
           CHATS.sungho.messages.push({ type: "time", text: "刚刚" });
           CHATS.sungho.messages.push({ from: "them", text: "刚刚的水，谢谢。" });
           CHATS.sungho.story.unshift({ me: "学长客气啦，应该的", them: "明天下午有空吗？我请你喝咖啡，就当回礼。" });
        } else if (gameState.dateCount === 10) {
           setTimeout(function() { alert("【系统提示】你们已经很熟悉了，去 KakaoTalk 看看吧！"); }, 1500);
        }
      };
      choiceOptions.appendChild(choiceBtn);
    });
    choiceModal.classList.add("show");
  };

  c.querySelector('.map-container').onclick = function() {
    card.classList.remove("show");
    activePinId = null;
  };
}

function renderMemo(c) {
  c.style.backgroundColor = "#fff";
  if (currentMemo) {
    var note = MEMOS.find(function(m) { return m.id === currentMemo; });
    document.getElementById("app-title").textContent = "备忘录";
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
    el.onclick = function() { currentMemo = m.id; renderAppContent("memo"); };
    c.appendChild(el);
  });
}

function checkMemoPass() {
  var val = document.getElementById("memo-pass").value;
  if (val === "0530") { gameState.memoUnlocked = true; renderAppContent("memo"); } 
  else { alert("密码错误"); }
}

function renderInstagram(c) {
  c.style.padding = "0"; c.style.backgroundColor = "#fff";
  c.innerHTML = 
    '<div class="ig-header"><div class="ig-logo">Instagram</div><div>❤️ ✉️</div></div>' +
    '<div id="ig-feed"></div>';
  
  var feed = document.getElementById("ig-feed");
  INSTAGRAM_FEED.forEach(function(post) {
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
  });
}

function likePost(postId) {
  var heart = document.getElementById('heart_' + postId);
  if (heart.classList.contains('liked')) return; 
  heart.classList.add('liked');
  heart.innerText = "❤️";
  if (postId === "post_2" && !gameState.likedSunghoPost) {
    gameState.likedSunghoPost = true;
    CHATS.sungho.messages.push({ type: "time", text: "刚刚" });
    CHATS.sungho.messages.push({ from: "them", text: "你看到我发的动态啦？明天要一起去吗？" });
  }
}

// 启动渲染（放在最末尾，保证一定执行）
renderApps();