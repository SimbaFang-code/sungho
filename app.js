let currentChat = null;
let igUser = null;
let gameState = { groupDone: false };

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

// 锁屏解锁
const lockScreen = document.getElementById("lock-screen");
if (lockScreen) {
  lockScreen.onclick = function() {
    this.classList.add("hidden");
    document.getElementById("main-ui").classList.remove("hidden");
    // 解锁后触发第一波通知
    setTimeout(() => showNotification("朴成淏", "你好，请问是来参加迎新的新生吗？", "kakao", "sungho"), 1000);
  };
}

// iOS 弹窗通知功能
function showNotification(title, body, appId, chatId) {
  const notif = document.getElementById("ios-notification");
  notif.querySelector(".notif-title").innerText = title;
  notif.querySelector(".notif-body").innerText = body;
  notif.classList.add("show");
  
  // 点击通知进入聊天
  notif.onclick = () => {
    notif.classList.remove("show");
    openApp(appId, "KakaoTalk");
    currentChat = chatId;
    // 处理进入聊天室的样式
    document.getElementById("app-content").style.padding = "0";
    document.getElementById("app-content").style.overflow = "hidden";
    renderAppContent("kakao");
  };

  // 5秒后自动消失
  setTimeout(() => { notif.classList.remove("show"); }, 5000);
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
  // 隐藏底栏
  document.querySelector(".dock").classList.add("hidden-dock");
  
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
  // 恢复底栏
  document.querySelector(".dock").classList.remove("hidden-dock");
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
          <div id="kakao-fake-input" style="flex:1; padding:10px 15px; background:#f1f1f1; border-radius:20px; color:#8e8e93; font-size:14px; cursor:pointer;">点击输入框选择回复...</div>
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
        // 如果是时间分割线
        if (m.type === "time") {
          room.innerHTML += `<div class="time-divider"><span>${m.text}</span></div>`;
          return;
        }

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
        alert("暂无新回复。");
        return;
      }
      const nextReply = chat.replies[0];
      
      // 检查剧情锁
      if (nextReply.require && !gameState[nextReply.require]) {
        alert("现在还不是发这句话的时候哦，先去群里看看吧。");
        return;
      }

      inputText.textContent = nextReply.text;
      inputText.style.color = "#1c1c1e";
      currentSelectedReply = nextReply;
    };

    sendBtn.onclick = () => {
      if (!currentSelectedReply) return;
      
      chat.messages.push({ from: "me", text: currentSelectedReply.text });
      const usedReply = chat.replies.shift(); 
      
      // 触发状态变更
      if (usedReply.isGroupDone) {
        gameState.groupDone = true;
        // 群里发完言，通知成淏解锁新剧情
        setTimeout(() => showNotification("朴成淏", "对了，迎新结束后有个聚餐，你要一起来吗？", "kakao", "sungho"), 2000);
      }

      inputText.textContent = "点击输入框选择回复...";
      inputText.style.color = "#8e8e93";
      currentSelectedReply = null;
      
      if (usedReply.next) {
        usedReply.next.forEach(nextMsg => chat.messages.push(nextMsg));
      }
      
      renderMessages();
    };

    return;
  }

  c.style.backgroundColor = "#fff";
  Object.keys(CHATS).forEach(key => {
    const chat = CHATS[key];
    const item = document.createElement("div");
    item.className = "chat-list-item";
    // 找到最后一条非时间消息做预览
    const msgs = chat.messages.filter(m => m.type !== 'time');
    const lastMsg = msgs[msgs.length - 1] || { text: "" };
    chat.preview = lastMsg.sender ? `${lastMsg.sender}：${lastMsg.text}` : lastMsg.text;

    item.innerHTML = `<div class="chat-avatar" style="background:${chat.color}">${chat.avatar}</div><div class="chat-info"><div class="chat-name">${chat.name}</div><div class="chat-preview">${chat.preview}</div></div>`;
    item.onclick = () => { 
      currentChat = key; 
      document.getElementById("app-content").style.padding = "0";
      document.getElementById("app-content").style.overflow = "hidden";
      renderAppContent("kakao"); 
    };
    c.appendChild(item);
  });
}

// 其他应用渲染代码保持原样，只是占位
function renderInstagram(c) { c.style.backgroundColor = "#fff"; c.innerHTML = "<div class='placeholder'>Instagram 功能即将开放</div>"; }
function renderPhotos(c) { c.style.backgroundColor = "#fff"; c.innerHTML = "<div class='placeholder'>相册 功能即将开放</div>"; }
function renderCalendar(c) { c.style.backgroundColor = "#fff"; c.innerHTML = "<div class='placeholder'>日历 功能即将开放</div>"; }
function renderMemo(c) { c.style.backgroundColor = "#fff"; c.innerHTML = "<div class='placeholder'>备忘录 功能即将开放</div>"; }
function renderMap(c) { c.style.backgroundColor = "#fff"; c.innerHTML = "<div class='placeholder'>地图 功能即将开放</div>"; }
function renderClock(c) { c.style.backgroundColor = "#fff"; c.innerHTML = "<div class='placeholder'>时钟 功能即将开放</div>"; }
function renderWeather(c) { c.style.backgroundColor = "#fff"; c.innerHTML = "<div class='placeholder'>天气 功能即将开放</div>"; }
function renderPlaceholder(c, id) { c.style.backgroundColor = "#fff"; c.innerHTML = "<div class='placeholder'>应用建设中</div>"; }

renderApps();