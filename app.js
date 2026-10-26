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

// --- 完整故事线的背景聊天记录 ---
var CHATS = {
  sungho: { 
    name: "朴成淏", avatar: "成", color: "#ff9f0a", time: "刚刚", preview: "明天见。",
    // 这里的 history 是开局就有的聊天记录
    history: [
      { type: "time", text: "9月2日 迎新日" },
      { from: "them", text: "你好，请问是来参加迎新的新生吗？" },
      { from: "me", text: "是的！但是我地图定位好像不太准……" },
      { from: "them", text: "你现在在哪栋楼附近？" },
      { from: "me", text: "好像在一棵很大的银杏树旁边" },
      { from: "them", text: "那我知道了，你往左手边那条路走，看到学生会馆就到了。" },
      { type: "time", text: "9月15日 晚上" },
      { from: "them", text: "今天在图书馆看到你了，在啃全英教材吗？" },
      { from: "me", text: "对啊，经营学好难……学长你也在图书馆吗？" },
      { from: "them", text: "嗯。如果有不懂的，随时拍下来发给我。" },
      { type: "time", text: "昨天 晚上 23:15" },
      { from: "them", text: "今天社团开会累不累？" },
      { from: "me", text: "有点，不过学长你今天怎么也这么晚？" },
      { from: "them", text: "在看点资料。早点休息吧，晚安。" },
      { type: "time", text: "今天 下午 16:00" },
      { from: "them", text: "宰铉在群里说周五聚餐，你看到了吗？" }
    ],
    story: [
      { me: "看到啦，我一定会去的", them: "嗯，去吧，大家都很想见你。" }
    ]
  },
  riwoo: { 
    name: "李常赫", avatar: "常", color: "#30d158", time: "昨天", preview: "到时候见。",
    history: [
      { type: "time", text: "9月10日" },
      { from: "them", text: "我是李常赫。听说成淏带你来舞蹈室了。" },
      { from: "me", text: "啊，是的常赫学长！" },
      { from: "them", text: "嗯，如果觉得经营学无聊，可以来舞蹈社看看。会让你放松很多。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "舞蹈社这周有开放练习。" },
      { from: "me", text: "好！那到时候见。" }
    ],
    story: []
  },
  jaehyun: { 
    name: "明宰铉", avatar: "宰", color: "#ff375f", time: "昨天", preview: "成淏可是难得带人来！",
    history: [
      { type: "time", text: "9月12日" },
      { from: "them", text: "学妹好呀！我是传媒系的明宰铉！" },
      { from: "them", text: "成淏那个闷葫芦居然会主动带学妹，太阳打西边出来了！" },
      { from: "me", text: "哈哈，宰铉学长好，迎新那天多亏了他。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "学妹！周五聚餐一定要来啊！" },
      { from: "them", text: "成淏可是难得带人来，我们得好好把把关！" }
    ],
    story: []
  },
  taesan: { 
    name: "韩泰山", avatar: "泰", color: "#5e5ce6", time: "昨天", preview: "新歌发了。",
    history: [
      { type: "time", text: "9月20日" },
      { from: "them", text: "我是韩泰山。" },
      { from: "me", text: "泰山学长好！听说你写歌很厉害。" },
      { from: "them", text: "还行。有灵感的话，可以来音乐楼找我。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "新歌发了。" }
    ],
    story: []
  },
  leehan: { 
    name: "金桐儇", avatar: "桐", color: "#64d2ff", time: "昨天", preview: "图书馆见。",
    history: [
      { type: "time", text: "10月1日" },
      { from: "them", text: "你好，我是金桐儇。" },
      { from: "them", text: "刚才看到你在一楼找不到书，其实三楼靠窗的位置更安静，书也更全。" },
      { from: "me", text: "谢谢桐儇学长！我明天去看看。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "图书馆见。" }
    ],
    story: []
  },
  woonhak: { 
    name: "金云鹤", avatar: "云", color: "#bf5af2", time: "昨天", preview: "学妹好！",
    history: [
      { type: "time", text: "9月5日" },
      { from: "them", text: "学妹好！我是云鹤！" },
      { from: "them", text: "听说食堂今天的炸猪排超级好吃！你去了吗！" },
      { from: "me", text: "还没呢，正准备去。" },
      { from: "them", text: "快去吧！记得叫上成淏哥，他老不按时吃饭。" },
      { type: "time", text: "昨天" },
      { from: "them", text: "学妹！有新开的甜品店，下次一起去啊！" }
    ],
    story: []
  },
  group: {
    name: "6+1小分队", avatar: "群", color: "#8e8e93", time: "下午 14:30", preview: "朴成淏：我带学妹来。",
    history: [
      { type: "time", text: "今天 14:30" },
      { from: "them", sender: "明宰铉", text: "各位！这周五晚上聚餐，老地方！" },
      { from: "them", sender: "金云鹤", text: "好耶！我最近发现了一家超好吃的店！" },
      { from: "them", sender: "李常赫", text: "你上周不是才去过吗？" },
      { from: "them", sender: "金云鹤", text: "那不一样！" },
      { from: "them", sender: "朴成淏", text: "我带学妹来。" },
      { from: "them", sender: "明宰铉", text: "？！成淏你居然会主动带人！" }
    ],
    story: [
      { me: "学长学姐们好，我是大一新生！", them: "欢迎欢迎！", sender: "明宰铉" }
    ]
  }
};

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
  c.innerHTML = "<div style='text-align:center;padding:80px 20px;color:#8e8e93;font-size:16px;'>【" + name + "】功能开发中...</div>";
  
  if (id === "kakao") {
    renderKakao(c);
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

// ---------------- 极简的 KKT 渲染 ----------------
function renderKakao(c) {
  c.classList.add("no-padding");
  c.style.backgroundColor = "#fff";
  document.getElementById("app-title").textContent = "KakaoTalk";
  
  if (currentChat) {
    var chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;
    
    // 聊天室内页
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
    
    // 渲染所有历史记录
    chat.history.forEach(function(m) {
      if (m.type === "time") {
        room.innerHTML += '<div class="time-divider"><span>' + m.text + '</span></div>';
        return;
      }
      
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

    // 滚动到底部
    setTimeout(function() { room.scrollTop = room.scrollHeight; }, 10);

    // 发送逻辑（自由输入）
    document.getElementById("kkt-send").onclick = function() {
      var inputEl = document.getElementById("kkt-input");
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
    };
    return;
  }

// 聊天列表页
  c.innerHTML = '<div class="kkt-list-bg" id="kkt-list"></div>';
  var list = document.getElementById("kkt-list");
  
  Object.keys(CHATS).forEach(function(key) {
    var chat = CHATS[key];
    var item = document.createElement("div"); item.className = "chat-list-item";
    
    // --- 动态获取最后一条消息 ---
    var lastMsg = chat.history[chat.history.length - 1];
    var previewText = lastMsg.text;
    if (lastMsg.sender) previewText = lastMsg.sender + "：" + lastMsg.text;
    // ---------------------------

    item.innerHTML = 
      '<div class="chat-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div>' +
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

renderApps();