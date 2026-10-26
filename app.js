let currentChat = null;
let currentMemo = null;
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
    setTimeout(() => showNotification("KakaoTalk", "朴成淏：宰铉在群里说周五聚餐，你看到了吗？", "kakao", "sungho"), 1000);
  };
}

function showNotification(title, body, appId, chatId) {
  const notif = document.getElementById("ios-notification");
  notif.querySelector("#notif-title-text").innerText = title;
  notif.querySelector("#notif-body-text").innerText = body;
  notif.classList.add("show");
  
  notif.onclick = () => {
    notif.classList.remove("show");
    if (title.includes("成淏") && body.includes("动态")) {
        CHATS.sungho.messages.push({ type: "time", text: "刚刚" });
        CHATS.sungho.messages.push({ from: "them", text: "你看到我发的动态啦？明天要一起去吗？" });
    } else if (title.includes("成淏") && body.includes("进来吧")) {
        CHATS.sungho.messages.push({ type: "time", text: "刚刚" });
        CHATS.sungho.messages.push({ from: "them", text: "我看到你了，进来吧。" });
    }

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
  
  const createIconHTML = (app) => {
    if (app.customClass) {
      if (app.id === "calendar") return `<div class="icon-box icon-calendar"><div class="icon-inner"><div class="month">OCT</div><div class="day">26</div></div></div>`;
      if (app.id === "clock") return `<div class="icon-box icon-clock"><div class="clock-face"><div class="hand hour"></div><div class="hand minute"></div><div class="center"></div></div></div>`;
      if (app.id === "memo") return `<div class="icon-box icon-notes"><div class="paper"><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div></div>`;
      if (app.id === "photos") return `<div class="icon-box icon-photos"><div class="photo p1"></div><div class="photo p2"></div><div class="photo p3"></div><div class="photo p4"></div></div>`;
      if (app.id === "map") return `<div class="icon-box icon-maps"><div class="pin"></div></div>`;
      if (app.id === "weather") return `<div class="icon-box icon-weather"><div class="sun"></div><div class="cloud"></div></div>`;
      if (app.id === "settings") return `<div class="icon-box icon-settings"><div class="gear"><div class="gear-inner"></div></div></div>`;
      if (app.id === "phone") return `<div class="icon-box icon-phone"><div class="receiver"></div></div>`;
    }
    return `<div class="icon-box" style="background-image:url('${app.icon}'); background-size:cover; background-color:#fff;"></div>`;
  };

  mainApps.forEach(app => {
    const el = document.createElement("div"); el.className = "app-icon";
    el.innerHTML = `${createIconHTML(app)}<span class="icon-label">${app.name}</span>`;
    el.onclick = (e) => { e.stopPropagation(); openApp(app.id, app.name); };
    grid.appendChild(el);
  });
  
  const dock = document.getElementById("dock"); dock.innerHTML = "";
  dockApps.forEach(id => {
    const app = APPS.find(a => a.id === id); if (!app) return;
    const el = document.createElement("div"); el.className = "app-icon";
    el.innerHTML = createIconHTML(app);
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
  } else if (currentMemo) {
    currentMemo = null;
    renderAppContent("memo");
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
        <div id="reply-modal" class="reply-modal">
          <div style="font-size:12px; color:#8e8e93; margin-bottom:10px; text-align:center;">请选择要发送的内容</div>
          <div id="reply-options-container"></div>
          <div style="text-align:center; margin-top:10px;"><span onclick="closeReplyModal()" style="color:#007aff; font-size:14px; cursor:pointer;">取消</span></div>
        </div>
      </div>
    `;

    const room = document.getElementById("chat-room-container");
    const inputEl = document.getElementById("kakao-input");
    const sendBtn = document.getElementById("kakao-send-btn");
    const modal = document.getElementById("reply-modal");
    const optionsContainer = document.getElementById("reply-options-container");

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

    inputEl.onclick = (e) => {
      e.preventDefault();
      if (chat.replies && chat.replies.length > 0) {
        optionsContainer.innerHTML = "";
        chat.replies.forEach((r, index) => {
          if (r.require && !gameState[r.require]) return;
          const btn = document.createElement("div");
          btn.className = "reply-option";
          btn.innerText = r.text;
          btn.onclick = () => { inputEl.value = r.text; closeReplyModal(); };
          optionsContainer.appendChild(btn);
        });
        if (optionsContainer.children.length > 0) modal.classList.add("show");
        else inputEl.blur();
      } else inputEl.blur();
    };

    window.closeReplyModal = () => { modal.classList.remove("show"); };

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
        if (text === "好呀，明天见") {
           gameState.dateAccepted = true;
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

function renderMap(c) {
  c.innerHTML = `<div style="padding:16px;"><h3 style="margin-bottom:12px; font-size:18px;">校园周边</h3><div id="map-list"></div></div>`;
  const list = document.getElementById("map-list");
  MAP_PLACES.forEach(p => {
    const el = document.createElement("div"); el.className = "list-item";
    el.style.cssText = "padding:12px 0; border-bottom:1px solid #eee; cursor:pointer;";
    el.innerHTML = `<div style="font-weight:600;margin-bottom:4px;">${p.name}</div><div style="font-size:12px;color:#666;">${p.desc}</div>`;
    el.onclick = () => {
      if (p.id === "restaurant" && !gameState.restaurantDone) {
        alert("已到达老地方烤肉店。聚餐正在进行中...");
      } else if (p.id === "cafe_date") {
        alert("已到达咖啡店。成淏学长已经在靠窗的位置等你了...");
        showNotification("KakaoTalk", "朴成淏：我看到你了，进来吧。", "kakao", "sungho");
      }
    };
    list.appendChild(el);
  });
}

function renderMemo(c) {
  c.style.backgroundColor = "#fff";
  if (currentMemo) {
    const note = MEMOS.find(m => m.id === currentMemo);
    document.getElementById("app-title").textContent = "备忘录";
    
    // 移除提示密码是啥
    if (note.isLocked && !gameState.memoUnlocked) {
       c.innerHTML = `<div class="memo-lock-screen"><h3>此备忘录已锁定</h3><p style="color:#888; font-size:13px; margin-top:8px;">请输入四位密码</p><input type="password" id="memo-pass" class="memo-input" maxlength="4" placeholder="****"><br><button onclick="checkMemoPass()" style="margin-top:20px; padding:10px 20px; background:#ffcc00; border:none; border-radius:10px; font-weight:bold;">解锁</button></div>`;
       return;
    }
    c.innerHTML = `<div class="memo-detail"><h1>${note.title}</h1><p style="color:#888; font-size:12px; margin-bottom:20px;">${note.date}</p><p>${note.content}</p></div>`;
    return;
  }

  c.innerHTML = `<div style="padding:16px; font-size:24px; font-weight:bold; border-bottom:1px solid #eee;">文件夹: 我的备忘录</div>`;
  MEMOS.forEach(m => {
    const el = document.createElement("div");
    el.className = "memo-list-item";
    el.innerHTML = `<div class="memo-list-title">${m.title}</div><div class="memo-list-date">${m.date}</div>`;
    el.onclick = () => { currentMemo = m.id; renderAppContent("memo"); };
    c.appendChild(el);
  });
}

window.checkMemoPass = function() {
  const val = document.getElementById("memo-pass").value;
  if (val === "0530") { gameState.memoUnlocked = true; renderAppContent("memo"); } 
  else { alert("密码错误"); }
}

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

window.likePost = function(postId) {
  const heart = document.getElementById(`heart_${postId}`);
  if (heart.classList.contains('liked')) return; 
  heart.classList.add('liked');
  heart.innerText = "❤️";
  if (postId === "post_2" && !gameState.likedSunghoPost) {
    gameState.likedSunghoPost = true;
    setTimeout(() => {
      showNotification("KakaoTalk", "朴成淏：你看到我发的动态啦？明天要一起去吗？", "kakao", "sungho");
    }, 1500);
  }
}

renderApps();