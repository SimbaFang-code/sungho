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
  sungho: { name: "朴成淏", avatar: "成", color: "#ff9f0a", time: "下午 16:00", preview: "宰铉在群里说周五聚餐，你看到了吗？" },
  group: { name: "延世街六人组", avatar: "群", color: "#8e8e93", time: "下午 14:30", preview: "朴成淏：我带学妹来。" },
  riwoo: { name: "李常赫", avatar: "常", color: "#30d158", time: "昨天", preview: "舞蹈社有练习。" },
  taesan: { name: "韩泰山", avatar: "泰", color: "#5e5ce6", time: "昨天", preview: "新歌发了。" },
  leehan: { name: "金桐儇", avatar: "桐", color: "#64d2ff", time: "昨天", preview: "图书馆见。" },
  woonhak: { name: "金云鹤", avatar: "云", color: "#bf5af2", time: "昨天", preview: "学妹好！" }
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
  
  // 如果点的是 KakaoTalk，就渲染极度轻量的 KKT 界面
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

// ---------------- 极其轻量的 KKT 渲染，绝不可能截断 ----------------
function renderKakao(c) {
  c.classList.add("no-padding");
  c.style.backgroundColor = "#fff";
  document.getElementById("app-title").textContent = "KakaoTalk";
  
  if (currentChat) {
    // 聊天室内页
    var chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;
    
    c.innerHTML = 
      '<div class="chat-room-wrapper">' +
        '<div class="chat-room">' +
          '<div class="time-divider"><span>今天 下午</span></div>' +
          '<div class="msg-row them"><div class="msg-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div><div class="msg-content"><div class="bubble">你好，请问是来参加迎新的新生吗？</div></div></div>' +
          '<div class="msg-row me"><div class="msg-content"><div class="bubble">是的！但是我地图定位好像不太准……</div></div></div>' +
          '<div class="msg-row them"><div class="msg-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div><div class="msg-content"><div class="bubble">往左手边那条路走，看到学生会馆就到了。</div></div></div>' +
          '<div class="time-divider"><span>刚刚</span></div>' +
          '<div class="msg-row them"><div class="msg-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div><div class="msg-content"><div class="bubble">宰铉在群里说周五聚餐，你看到了吗？</div></div></div>' +
        '</div>' +
        '<div class="kkt-input-bar">' +
          '<div class="kkt-plus">+</div>' +
          '<input type="text" class="kkt-input-box" placeholder="发送消息...">' +
          '<button class="kkt-send-btn">发送</button>' +
        '</div>' +
      '</div>';
    return;
  }

  // 聊天列表页
  c.innerHTML = '<div class="kkt-list-bg" id="kkt-list"></div>';
  var list = document.getElementById("kkt-list");
  
  Object.keys(CHATS).forEach(function(key) {
    var chat = CHATS[key];
    var item = document.createElement("div"); item.className = "chat-list-item";
    item.innerHTML = 
      '<div class="chat-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div>' +
      '<div class="chat-info">' +
        '<div class="chat-header-row">' +
          '<div class="chat-name">' + chat.name + '</div>' +
          '<div class="chat-time">' + chat.time + '</div>' +
        '</div>' +
        '<div class="chat-preview">' + chat.preview + '</div>' +
      '</div>';
    item.onclick = function() { 
      currentChat = key; 
      openApp("kakao", "KakaoTalk"); 
    };
    list.appendChild(item);
  });
}

renderApps();