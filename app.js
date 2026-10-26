let currentChat = null;
let gameState = { groupDone: false, dateAccepted: false, memoUnlocked: false, likedSunghoPost: false };

function updateClock() {
  const now = new Date();
  const timeStr = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  if(document.getElementById("clock")) document.getElementById("clock").textContent = timeStr;
  if(document.getElementById("lock-clock")) document.getElementById("lock-clock").textContent = timeStr;
}
setInterval(updateClock, 1000); updateClock();

const lockScreen = document.getElementById("lock-screen");
if (lockScreen) {
  lockScreen.onclick = function() {
    this.classList.add("hidden");
    document.getElementById("main-ui").classList.remove("hidden");
    setTimeout(() => showNotification("KakaoTalk", "朴成淏：你好，请问是来参加迎新的新生吗？", "kakao", "sungho"), 1000);
  };
}

function showNotification(title, body, appId, chatId) {
  const notif = document.getElementById("ios-notification");
  notif.querySelector("#notif-title-text").innerText = title;
  notif.querySelector("#notif-body-text").innerText = body;
  notif.classList.add("show");
  notif.onclick = () => {
    notif.classList.remove("show");
    openApp(appId, "KakaoTalk");
    if(chatId) {
        currentChat = chatId;
        document.getElementById("app-content").classList.add("no-padding");
        renderAppContent("kakao");
    }
  };
  setTimeout(() => { notif.classList.remove("show"); }, 5000);
}

function renderApps() {
  const grid = document.getElementById("app-grid"); grid.innerHTML = "";
  const dockApps = ["phone", "map", "kakao", "instagram"];
  const mainApps = APPS.filter(app => !dockApps.includes(app.id));
  
  mainApps.forEach(app => {
    const el = document.createElement("div"); el.className = "app-icon";
    el.innerHTML = `<div class="glyph" style="background-image:url('${app.icon}'); background-color:${app.color};"></div><div class="label">${app.name}</div>`;
    el.onclick = (e) => { e.stopPropagation(); openApp(app.id, app.name); };
    grid.appendChild(el);
  });
  
  const dock = document.getElementById("dock"); dock.innerHTML = "";
  dockApps.forEach(id => {
    const app = APPS.find(a => a.id === id); if (!app) return;
    const el = document.createElement("div"); el.className = "app-icon";
    el.innerHTML = `<div class="glyph" style="background-image:url('${app.icon}'); background-color:${app.color};"></div>`;
    el.onclick = (e) => { e.stopPropagation(); openApp(app.id, app.name); };
    dock.appendChild(el);
  });
}

function openApp(id, name) {
  document.getElementById("home").classList.remove("active");
  document.getElementById("app-view").classList.add("active");
  document.getElementById("app-title").textContent = name;
  document.querySelector(".dock").classList.add("hidden-dock");
  
  const c = document.getElementById("app-content");
  c.classList.remove("no-padding");
  if (id === "kakao" && currentChat) c.classList.add("no-padding");
  renderAppContent(id);
  c.scrollTop = 0;
}

function goHome() {
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("home").classList.add("active");
  document.querySelector(".dock").classList.remove("hidden-dock");
}

document.getElementById("back-btn").onclick = () => {
  if (currentChat) { 
    currentChat = null; 
    document.getElementById("app-content").classList.remove("no-padding");
    renderAppContent("kakao"); 
  } else { goHome(); }
};

function renderAppContent(id) {
  const c = document.getElementById("app-content"); c.innerHTML = "";
  if (id === "kakao") renderKakao(c);
  else if (id === "instagram") renderInstagram(c);
  else if (id === "memo") renderMemo(c);
  else if (id === "map") renderMap(c);
  else c.innerHTML = "<div style='text-align:center;padding:50px;color:#999;'>功能接入中</div>";
}

// ================= KakaoTalk =================
function renderKakao(c) {
  if (currentChat) {
    const chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;

    c.innerHTML = `
      <div class="chat-room-wrapper">
        <div id="chat-room-container" class="chat-room"></div>
        <div style="display:flex; gap:8px; padding:10px; background:#fff; border-top:1px solid #ddd; flex-shrink:0;">
          <input id="kakao-input" type="text" placeholder="发送消息..." style="flex:1; padding:10px 15px; border:none; background:#f1f1f1; border-radius:20px; font-size:14px; outline:none;">
          <button id="kakao-send-btn" style="padding:0 15px; background:#fee500; color:#3c1e1e; border:none; border-radius:20px; font-weight:bold; cursor:pointer;">发送</button>
        </div>
      </div>
    `;

    const room = document.getElementById("chat-room-container");
    const inputEl = document.getElementById("kakao-input");
    const sendBtn = document.getElementById("kakao-send-btn");

    const renderMessages = () => {
      room.innerHTML = "";
      chat.messages.forEach(m => {
        if (m.type === "time") { room.innerHTML += `<div class="time-divider"><span>${m.text}</span></div>`; return; }
        const row = document.createElement("div"); row.className = "msg-row " + m.from;
        row.innerHTML = m.sender 
          ? `<div style="display:flex; flex-direction:column; align-items:flex-start;"><div class="msg-sender">${m.sender}</div><div class="bubble">${m.text}</div></div>`
          : `<div class="bubble">${m.text}</div>`;
        room.appendChild(row);
      });
      setTimeout(() => { room.scrollTop = room.scrollHeight; }, 10);
    };
    renderMessages();

    inputEl.onclick = () => {
      if (chat.replies && chat.replies.length > 0) {
        const nextReply = chat.replies[0];
        if (nextReply.require && !gameState[nextReply.require]) return;
        inputEl.value = nextReply.text;
      }
    };

    sendBtn.onclick = () => {
      const text = inputEl.value.trim();
      if (!text) return;
      chat.messages.push({ from: "me", text: text });
      inputEl.value = "";

      let usedReplyIndex = -1;
      if (chat.replies) {
        usedReplyIndex = chat.replies.findIndex(r => r.text === text && (!r.require || gameState[r.require]));
      }

      if (usedReplyIndex !== -1) {
        const usedReply = chat.replies.splice(usedReplyIndex, 1)[0];
        if (usedReply.isGroupDone) gameState.groupDone = true;
        if (usedReply.isRestaurantDone) gameState.restaurantDone = true;
        
        // 答应约会
        if (text === "好呀，明天见") {
           gameState.dateAccepted = true;
           // 解锁后续的地图打卡
           MAP_PLACES.push({ id: "cafe_date", name: "音乐楼旁咖啡店", desc: "点击去赴约" });
        }

        if (usedReply.next) usedReply.next.forEach(nextMsg => chat.messages.push(nextMsg));
      }
      renderMessages();
    };
    return;
  }

  c.style.backgroundColor = "#fff";
  Object.keys(CHATS).forEach(key => {
    const chat = CHATS[key];
    const item = document.createElement("div"); item.className = "chat-list-item";
    const msgs = chat.messages.filter(m => m.type !== 'time');
    const lastMsg = msgs[msgs.length - 1] || { text: "" };
    item.innerHTML = `<div class="chat-avatar" style="background:${chat.color}">${chat.avatar}</div><div class="chat-info"><div class="chat-name">${chat.name}</div><div class="chat-preview">${lastMsg.sender ? lastMsg.sender+'：' : ''}${lastMsg.text}</div></div>`;
    item.onclick = () => { 
      currentChat = key; 
      document.getElementById("app-content").classList.add("no-padding");
      renderAppContent("kakao"); 
    };
    c.appendChild(item);
  });
}

// ================= 地图打卡与线下触发 =================
function renderMap(c) {
  c.innerHTML = `<div style="padding:16px;">
    <h3 style="margin-bottom:12px; font-size:18px;">校园周边</h3>
    <div id="map-list"></div>
  </div>`;
  const list = document.getElementById("map-list");
  MAP_PLACES.forEach(p => {
    const el = document.createElement("div"); el.className = "list-item";
    el.style.cssText = "padding:12px 0; border-bottom:1px solid #eee; cursor:pointer;";
    el.innerHTML = `<div style="font-weight:600;margin-bottom:4px;">${p.name}</div><div style="font-size:12px;color:#666;">${p.desc}</div>`;
    el.onclick = () => {
      if (p.id === "restaurant" && !gameState.restaurantDone) {
        alert("已到达老地方烤肉店。聚餐正在进行中...");
        CHATS.sungho.replies.unshift({
          text: "学长我回宿舍啦", isRestaurantDone: true, next: [
            { type: "time", text: "晚上 22:00" },
            { from: "them", text: "今天聚餐开心吗？" },
            { from: "me", text: "超级开心！大家都好照顾我" },
            { from: "them", text: "那就好。其实...我有点吃醋，云鹤那小子一直给你夹菜。" }
          ]
        });
        showNotification("KakaoTalk", "朴成淏：聚餐结束啦，安全到宿舍了吗？", "kakao", "sungho");
      } else if (p.id === "cafe_date") {
        alert("已到达咖啡店。成淏学长已经在靠窗的位置等你了...");
        showNotification("KakaoTalk", "朴成淏：我看到你了，进来吧。", "kakao", "sungho");
      }
    };
    list.appendChild(el);
  });
}

// ================= 备忘录 =================
function renderMemo(c) {
  c.style.backgroundColor = "#fff";
  if (!gameState.memoUnlocked) {
    c.innerHTML = `<div class="memo-lock">
      <h3>备忘录密码</h3>
      <p style="color:#888; font-size:12px; margin-top:8px;">请输入四位密码</p>
      <input type="password" id="memo-pass" class="memo-input" maxlength="4" placeholder="****">
      <br><button onclick="checkMemoPass()" style="margin-top:20px; padding:10px 20px; background:#ffcc00; border:none; border-radius:10px; font-weight:bold;">解锁</button>
    </div>`;
    return;
  }
  MEMOS.forEach(m => {
    const el = document.createElement("div");
    el.style.cssText = "margin-bottom:16px; padding:0 16px;";
    el.innerHTML = `<div style="font-weight:700;font-size:16px;margin-bottom:6px;">${m.title}</div><div style="font-size:14px;color:#3a3a3c;white-space:pre-line;line-height:1.6;">${m.body}</div>`;
    c.appendChild(el);
  });
}
window.checkMemoPass = function() {
  const val = document.getElementById("memo-pass").value;
  if (val === "0530") { gameState.memoUnlocked = true; renderMemo(document.getElementById("app-content")); } 
  else { alert("密码错误"); }
}

// ================= Instagram (高仿与点赞) =================
function renderInstagram(c) {
  c.style.padding = "0"; c.style.backgroundColor = "#fff";
  c.innerHTML = `
    <div class="ig-header"><div class="ig-logo">Instagram</div><div>❤️ ✉️</div></div>
    <div class="ig-story-row">
      <div class="ig-story"><div class="ig-story-avatar"><div style="background:#ff3b30;"></div></div><span>我的动态</span></div>
      <div class="ig-story"><div class="ig-story-avatar"><div style="background:#5e5ce6;"></div></div><span>泰山</span></div>
      <div class="ig-story"><div class="ig-story-avatar"><div style="background:#ff9f0a;"></div></div><span>成淏</span></div>
    </div>
    <div id="ig-feed"></div>
  `;
  const feed = document.getElementById("ig-feed");
  INSTAGRAM_FEED.forEach(post => {
    const postEl = document.createElement("div");
    postEl.className = "ig-feed-post";
    postEl.innerHTML = `
      <div class="ig-feed-header"><div class="chat-avatar" style="width:32px;height:32px;font-size:12px;background:#ff9f0a;">${post.avatar}</div><strong>${post.user}</strong></div>
      <div class="ig-feed-img" style="background-image:url('${post.img}');"></div>
      <div class="ig-feed-actions">
        <span class="ig-heart" id="heart_${post.id}" onclick="likePost('${post.id}')">🤍</span> 
        <span>💬</span> 
        <span>✈️</span>
      </div>
      <div class="ig-feed-caption"><strong>${post.user}</strong> ${post.caption}</div>
    `;
    feed.appendChild(postEl);
  });
}

// IG 点赞联动剧情
window.likePost = function(postId) {
  const heart = document.getElementById(`heart_${postId}`);
  if (heart.classList.contains('liked')) return; // 只能点一次
  
  heart.classList.add('liked');
  heart.innerText = "❤️";

  // 如果点赞了成淏的咖啡动态
  if (postId === "post_2" && !gameState.likedSunghoPost) {
    gameState.likedSunghoPost = true;
    setTimeout(() => {
      showNotification("KakaoTalk", "朴成淏：你看到我发的动态啦？明天要一起去吗？", "kakao", "sungho");
    }, 1500);
  }
}

renderApps();