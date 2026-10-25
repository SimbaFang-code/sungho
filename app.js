let currentChat = null;
let igUser = null;

const ICON_STYLES = {
  kakao: { bg: "linear-gradient(135deg, #ffeb3b, #fbc02d)", content: "💬" },
  instagram: { bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", content: "📷" },
  photos: { bg: "linear-gradient(135deg, #ff9a9e, #fecfef)", content: "🌸" },
  calendar: { bg: "linear-gradient(135deg, #ffffff, #f0f0f0)", content: "<div style='color:#ff3b30;font-size:14px;font-weight:bold;text-align:center;line-height:1.2;'><span style='color:#1c1c1e'>10</span><br>26</div>" },
  memo: { bg: "linear-gradient(135deg, #fffde7, #fff9c4)", content: "📝" },
  map: { bg: "linear-gradient(135deg, #a1c4fd, #c2e9fb)", content: "🗺️" },
  clock: { bg: "linear-gradient(135deg, #2c2c2e, #000000)", content: "🕐" },
  weather: { bg: "linear-gradient(135deg, #89f7fe, #66a6ff)", content: "☀️" },
  x: { bg: "#000", content: "✕" },
  community: { bg: "linear-gradient(135deg, #b224ef, #7579ff)", content: "🏫" },
  phone: { bg: "linear-gradient(135deg, #43e97b, #38f9d7)", content: "📞" },
  settings: { bg: "linear-gradient(135deg, #e0e0e0, #9e9e9e)", content: "⚙️" }
};

function updateClock() {
  const now = new Date();
  const timeStr = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  if(document.getElementById("clock")) document.getElementById("clock").textContent = timeStr;
  if(document.getElementById("lock-clock")) document.getElementById("lock-clock").textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

const lockScreen = document.getElementById("lock-screen");
if (lockScreen) {
  lockScreen.onclick = function() {
    this.classList.add("hidden");
    document.getElementById("main-ui").classList.remove("hidden");
  };
}

function renderApps() {
  const grid = document.getElementById("app-grid");
  grid.innerHTML = "";
  const dockApps = ["phone", "map", "kakao", "instagram"];
  const mainApps = APPS.filter(app => !dockApps.includes(app.id));
  
  mainApps.forEach(app => {
    const el = document.createElement("div");
    el.className = "app-icon";
    const style = ICON_STYLES[app.id] || { bg: "#ccc", content: "❓" };
    el.innerHTML = `<div class="glyph" style="background:${style.bg}; font-size:24px;">${style.content}</div><div class="label">${app.name}</div>`;
    el.onclick = (e) => { e.stopPropagation(); openApp(app.id, app.name); };
    grid.appendChild(el);
  });

  const dock = document.getElementById("dock");
  dock.innerHTML = "";
  dockApps.forEach(id => {
    const app = APPS.find(a => a.id === id);
    if (!app) return;
    const el = document.createElement("div");
    el.className = "app-icon";
    const style = ICON_STYLES[app.id] || { bg: "#ccc", content: "❓" };
    el.innerHTML = `<div class="glyph" style="background:${style.bg}; font-size:24px;">${style.content}</div>`;
    el.onclick = (e) => { e.stopPropagation(); openApp(app.id, app.name); };
    dock.appendChild(el);
  });
}

function openApp(id, name) {
  document.getElementById("home").classList.remove("active");
  document.getElementById("app-view").classList.add("active");
  document.getElementById("app-title").textContent = name;
  renderAppContent(id);
  document.getElementById("app-content").scrollTop = 0;
}

function goHome() {
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("home").classList.add("active");
}

document.getElementById("back-btn").onclick = () => {
  if (currentChat) { currentChat = null; renderAppContent("kakao"); }
  else if (igUser) { igUser = null; renderAppContent("instagram"); }
  else { goHome(); }
};

function renderAppContent(id) {
  const c = document.getElementById("app-content");
  c.innerHTML = "";
  if (id === "kakao") renderKakao(c);
  else if (id === "instagram") renderInstagram(c);
  else if (id === "photos") renderPhotos(c);
  else if (id === "calendar") renderCalendar(c);
  else if (id === "memo") renderMemo(c);
  else if (id === "map") renderMap(c);
  else if (id === "clock") renderClock(c);
  else if (id === "weather") renderWeather(c);
  else renderPlaceholder(c, id);
}

// ================= 重写的 KakaoTalk 逻辑 =================
function renderKakao(c) {
  // 1. 如果在聊天室里
  if (currentChat) {
    const chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;
    c.style.padding = "0"; // 聊天室去掉边缘内边距
    c.style.backgroundColor = "#b2c7d9"; // Kakao经典背景色

    const roomWrapper = document.createElement("div");
    roomWrapper.className = "kakao-room-wrapper";
    
    const room = document.createElement("div");
    room.className = "chat-room";
    room.id = "chat-room-container";
    
    function renderMessages() {
      room.innerHTML = "";
      chat.messages.forEach(m => {
        const row = document.createElement("div");
        row.className = "msg-row " + m.from;
        let html = "";
        if (m.sender) html += `<div class="msg-sender">${m.sender}</div>`;
        html += `<div class="bubble">${m.text}</div>`;
        
        if (m.sender) {
          // 群聊有发送者名字
          row.innerHTML = `<div style="display:flex; flex-direction:column; align-items:flex-start;"><div class="msg-sender">${m.sender}</div><div class="bubble">${m.text}</div></div>`;
          row.className = "msg-row them"; // 统一样式
        } else {
          row.innerHTML = `<div class="bubble">${m.text}</div>`;
        }
        room.appendChild(row);
      });
      c.scrollTop = c.scrollHeight;
    }
    renderMessages();

    // 底部输入框区域
    const inputBar = document.createElement("div");
    inputBar.className = "kakao-input-bar";
    const replyText = document.createElement("div");
    replyText.className = "kakao-fake-input";
    replyText.textContent = "点击输入框选择固定回复...";
    const sendBtn = document.createElement("button");
    sendBtn.className = "kakao-send-btn";
    sendBtn.textContent = "发送";
    
    inputBar.appendChild(replyText);
    inputBar.appendChild(sendBtn);
    
    roomWrapper.appendChild(room);
    roomWrapper.appendChild(inputBar);
    c.appendChild(roomWrapper);

    // 点击输入框：弹出所有可用的固定回复
    replyText.onclick = () => {
      if (!chat.replies || chat.replies.length === 0) {
        alert("这里暂时没有新的回复选项啦。");
        return;
      }
      // 拿第一条还没发过的回复
      const nextReply = chat.replies[0];
      replyText.textContent = nextReply.text;
      replyText.classList.add("selected");
    };

    // 点击发送按钮
    sendBtn.onclick = () => {
      const selectedText = replyText.textContent;
      if (selectedText === "点击输入框选择固定回复..." || selectedText === "") return;
      
      // 1. 加入我的发言
      chat.messages.push({ from: "me", text: selectedText });
      
      // 2. 把这个选项消耗掉
      const usedReply = chat.replies.shift(); 
      
      // 3. 重置输入框
      replyText.textContent = "点击输入框选择固定回复...";
      replyText.classList.remove("selected");
      
      // 刷新界面，滚到底部
      renderMessages();
      
      // 4. 如果这个回复带有后续，延迟显示对方的回应
      if (usedReply.next) {
        setTimeout(() => {
          usedReply.next.forEach(nextMsg => {
            chat.messages.push(nextMsg);
          });
          renderMessages();
        }, 1200); // 假装对方正在输入
      }
    };

    // 预设输入栏样式
    roomWrapper.style.cssText = "display:flex;flex-direction:column;height:100%;";
    room.style.cssText = "flex:1;overflow-y:auto;padding:15px;";
    inputBar.style.cssText = "display:flex;gap:10px;padding:10px;background:#fff;border-top:1px solid #ddd;";
    replyText.style.cssText = "flex:1;padding:10px 15px;background:#f1f1f1;border-radius:20px;color:#8e8e93;font-size:14px;cursor:pointer;";
    sendBtn.style.cssText = "padding:0 15px;background:#fee500;color:#3c1e1e;border:none;border-radius:20px;font-weight:bold;cursor:pointer;";
    
    return;
  }

  // 2. 如果在聊天列表页
  c.style.padding = "12px 16px"; // 恢复列表页内边距
  c.style.backgroundColor = "#fff";
  Object.keys(CHATS).forEach(key => {
    const chat = CHATS[key];
    const item = document.createElement("div");
    item.className = "chat-list-item";
    item.innerHTML = `<div class="chat-avatar" style="background:${chat.color}">${chat.avatar}</div><div class="chat-info"><div class="chat-name">${chat.name}</div><div class="chat-preview">${chat.preview}</div></div>`;
    item.onclick = () => { currentChat = key; renderAppContent("kakao"); };
    c.appendChild(item);
  });
}

// ================= 其他应用保持原样 =================
function renderInstagram(c) {
  c.style.padding = "12px 16px"; c.style.backgroundColor = "#fff";
  if (igUser) {
    const p = INSTAGRAM[igUser];
    document.getElementById("app-title").textContent = p.name;
    const wrap = document.createElement("div");
    wrap.innerHTML = `<div class="ig-profile"><div class="ig-avatar" style="background:${p.color}">${p.avatar}</div><div class="ig-name">${p.name}</div><div class="ig-bio">${p.bio}</div></div>`;
    p.posts.forEach(post => {
      const el = document.createElement("div");
      el.className = "ig-post";
      el.innerHTML = `<div class="ig-post-img" style="background:${post.img}">📷</div><div class="ig-post-body"><div class="ig-post-cap">${post.caption}</div></div>`;
      wrap.appendChild(el);
    });
    c.appendChild(wrap);
    return;
  }
  Object.keys(INSTAGRAM).forEach(key => {
    const p = INSTAGRAM[key];
    const item = document.createElement("div");
    item.className = "chat-list-item";
    item.innerHTML = `<div class="chat-avatar" style="background:${p.color}">${p.avatar}</div><div class="chat-info"><div class="chat-name">${p.name}</div><div class="chat-preview">${p.handle}</div></div>`;
    item.onclick = () => { igUser = key; renderAppContent("instagram"); };
    c.appendChild(item);
  });
}

function renderPhotos(c) {
  c.style.padding = "12px 16px"; c.style.backgroundColor = "#fff";
  const grid = document.createElement("div");
  grid.style.cssText = "display:grid;grid-template-columns:repeat(2,1fr);gap:10px;";
  PHOTOS.forEach(p => {
    const el = document.createElement("div");
    el.style.cssText = `height:130px;border-radius:12px;display:flex;align-items:flex-end;padding:10px;color:#fff;font-size:12px;font-weight:600;background:${p.color};`;
    el.textContent = p.label;
    grid.appendChild(el);
  });
  c.appendChild(grid);
}

function renderCalendar(c) {
  c.style.padding = "12px 16px"; c.style.backgroundColor = "#fff";
  CALENDAR.forEach(e => {
    const el = document.createElement("div");
    el.className = "list-item";
    el.innerHTML = `<span>${e.title}</span><span class="sub">${e.date}</span>`;
    c.appendChild(el);
  });
}

function renderMemo(c) {
  c.style.padding = "12px 16px"; c.style.backgroundColor = "#fff";
  MEMOS.forEach(m => {
    const el = document.createElement("div");
    el.style.cssText = "margin-bottom:16px;";
    el.innerHTML = `<div style="font-weight:700;font-size:16px;margin-bottom:6px;">${m.title}</div><div style="font-size:14px;color:#3a3a3c;white-space:pre-line;line-height:1.6;">${m.body}</div>`;
    c.appendChild(el);
  });
}

function renderMap(c) {
  c.style.padding = "12px 16px"; c.style.backgroundColor = "#fff";
  MAP_PLACES.forEach(p => {
    const el = document.createElement("div");
    el.className = "list-item";
    el.style.display = "block";
    el.innerHTML = `<div style="font-weight:600;margin-bottom:4px;">${p.name}</div><div class="sub">${p.desc}</div>`;
    c.appendChild(el);
  });
}

function renderClock(c) {
  c.style.padding = "12px 16px"; c.style.backgroundColor = "#fff";
  const now = new Date();
  const el = document.createElement("div");
  el.style.cssText = "text-align:center;padding:80px 0;";
  el.innerHTML = `<div style="font-size:64px;font-weight:200;letter-spacing:-2px;">${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}</div>`;
  c.appendChild(el);
}

function renderWeather(c) {
  c.style.padding = "12px 16px"; c.style.backgroundColor = "#fff";
  const el = document.createElement("div");
  el.style.cssText = "text-align:center;padding:50px 0;color:#1c1c1e;";
  el.innerHTML = `<div style="font-size:22px;font-weight:600;">${WEATHER.city}</div><div style="font-size:72px;font-weight:200;margin:12px 0;">${WEATHER.temp}</div>`;
  c.appendChild(el);
}

function renderPlaceholder(c, id) {
  c.style.padding = "12px 16px"; c.style.backgroundColor = "#fff";
  const app = APPS.find(a => a.id === id);
  const el = document.createElement("div");
  el.className = "placeholder";
  el.textContent = (app ? app.name : "此应用") + " 正在建设中。";
  c.appendChild(el);
}

renderApps();