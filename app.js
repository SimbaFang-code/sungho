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
  
  const c = document.getElementById("app-content");
  if (id === "kakao" && currentChat) {
    c.style.padding = "0";
    c.style.overflow = "hidden";
  } else {
    c.style.padding = "12px 16px";
    c.style.overflowY = "auto";
  }

  renderAppContent(id);
  c.scrollTop = 0;
}

function goHome() {
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("home").classList.add("active");
}

document.getElementById("back-btn").onclick = () => {
  if (currentChat) { 
    currentChat = null; 
    document.getElementById("app-content").style.padding = "12px 16px";
    document.getElementById("app-content").style.overflowY = "auto";
    renderAppContent("kakao"); 
  }
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

// ================= KakaoTalk =================
function renderKakao(c) {
  if (currentChat) {
    const chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;

    c.innerHTML = `
      <div style="display:flex; flex-direction:column; height:100%; width:100%; background:#b2c7d9;">
        <div id="chat-room-container" style="flex:1; overflow-y:auto; padding:15px; display:flex; flex-direction:column; gap:12px;"></div>
        <div style="display:flex; gap:8px; padding:10px; background:#fff; border-top:1px solid #ddd; flex-shrink:0;">
          <div id="kakao-fake-input" style="flex:1; padding:10px 15px; background:#f1f1f1; border-radius:20px; color:#8e8e93; font-size:14px; cursor:pointer;">点击输入框选择固定回复...</div>
          <button id="kakao-send-btn" style="padding:0 15px; background:#fee500; color:#3c1e1e; border:none; border-radius:20px; font-weight:bold; cursor:pointer;">发送</button>
        </div>
      </div>
    `;

    const room = document.getElementById("chat-room-container");
    const inputText = document.getElementById("kakao-fake-input");
    const sendBtn = document.getElementById("kakao-send-btn");

    const renderMessages = () => {
      room.innerHTML = "";
      chat.messages.forEach(m => {
        const row = document.createElement("div");
        row.className = "msg-row " + m.from;
        if (m.sender) {
          row.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:flex-start;">
              <div class="msg-sender">${m.sender}</div>
              <div class="bubble">${m.text}</div>
            </div>`;
        } else {
          row.innerHTML = `<div class="bubble">${m.text}</div>`;
        }
        room.appendChild(row);
      });
      setTimeout(() => { room.scrollTop = room.scrollHeight; }, 10);
    };
    renderMessages();

    let currentSelectedReply = null;

    inputText.onclick = () => {
      if (!chat.replies || chat.replies.length === 0) {
        alert("这里暂时没有新的回复选项啦。");
        return;
      }
      const nextReply = chat.replies[0];
      inputText.textContent = nextReply.text;
      inputText.style.color = "#1c1c1e";
      currentSelectedReply = nextReply;
    };

    sendBtn.onclick = () => {
      if (!currentSelectedReply) return;
      
      // 1. 玩家发言
      chat.messages.push({ from: "me", text: currentSelectedReply.text });
      const usedReply = chat.replies.shift(); 
      
      // 2. 重置输入框
      inputText.textContent = "点击输入框选择固定回复...";
      inputText.style.color = "#8e8e93";
      currentSelectedReply = null;
      
      // 3. 瞬间推入所有后续剧情（避免卡顿，直接大篇幅显示）
      if (usedReply.next) {
        usedReply.next.forEach(nextMsg => chat.messages.push(nextMsg));
      }
      
      renderMessages();
      
      // 更新列表预览
      const lastMsg = chat.messages[chat.messages.length - 1];
      chat.preview = lastMsg.sender ? `${lastMsg.sender}：${lastMsg.text}` : lastMsg.text;
    };

    return;
  }

  c.style.backgroundColor = "#fff";
  Object.keys(CHATS).forEach(key => {
    const chat = CHATS[key];
    const item = document.createElement("div");
    item.className = "chat-list-item";
    const lastMsg = chat.messages[chat.messages.length - 1];
    chat.preview = lastMsg.sender ? `${lastMsg.sender}：${lastMsg.text}` : lastMsg.text;

    item.innerHTML = `<div class="chat-