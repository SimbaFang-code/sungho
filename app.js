let currentChat = null;
let igUser = null;
let enteredPin = "";

// 时钟更新
function updateClock() {
  const now = new Date();
  const timeStr = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  document.getElementById("clock").textContent = timeStr;
  document.getElementById("lock-clock").textContent = timeStr;
  
  const days = ["周日","周一","周二","周三","周四","周五","周六"];
  const dateStr = (now.getMonth()+1) + "月" + now.getDate() + "日 " + days[now.getDay()];
  document.getElementById("home-date").textContent = dateStr;
  document.getElementById("lock-date").textContent = dateStr;
}
setInterval(updateClock, 1000);
updateClock();

// 锁屏逻辑
document.getElementById("lock-prompt").onclick = function() {
  this.style.display = "none";
  document.getElementById("lock-keypad").classList.add("active");
};

function enterPin(num) {
  if (enteredPin.length >= 4) return;
  enteredPin += num;
  updateDots();
  
  if (enteredPin.length === 4) {
    setTimeout(() => {
      if (enteredPin === "1234") {
        unlockPhone();
      } else {
        alert("密码错误，提示：1234");
        enteredPin = "";
        updateDots();
      }
    }, 200);
  }
}

function updateDots() {
  const dots = document.querySelectorAll(".dots span");
  dots.forEach((dot, index) => {
    if (index < enteredPin.length) dot.classList.add("filled");
    else dot.classList.remove("filled");
  });
}

function unlockPhone() {
  document.getElementById("lock-screen").classList.add("hidden");
  document.getElementById("main-ui").classList.remove("hidden");
}

// 桌面应用渲染
function renderApps() {
  const grid = document.getElementById("app-grid");
  grid.innerHTML = "";
  APPS.forEach(app => {
    const el = document.createElement("div");
    el.className = "app-icon";
    el.innerHTML = `<div class="glyph" style="background:${app.color};color:${app.text}">${app.glyph}</div><div class="label">${app.name}</div>`;
    el.onclick = () => openApp(app.id, app.name);
    grid.appendChild(el);
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

// 应用内容渲染
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

function renderKakao(c) {
  if (currentChat) {
    const chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;
    const room = document.createElement("div");
    room.className = "chat-room";
    chat.messages.forEach(m => {
      const row = document.createElement("div");
      row.className = "msg-row " + m.from;
      let html = "";
      if (m.sender) html += `<div class="msg-sender">${m.sender}</div>`;
      html += `<div class="bubble">${m.text}</div>`;
      if (m.sender) { row.innerHTML = `<div>${html}</div>`; row.style.display = "block"; } 
      else { row.innerHTML = html; }
      room.appendChild(row);
    });
    c.appendChild(room);
    c.scrollTop = c.scrollHeight;
    return;
  }
  Object.keys(CHATS).forEach(key => {
    const chat = CHATS[key];
    const item = document.createElement("div");
    item.className = "chat-list-item";
    item.innerHTML = `<div class="chat-avatar" style="background:${chat.color}">${chat.avatar}</div><div class="chat-info"><div class="chat-name">${chat.name}</div><div class="chat-preview">${chat.preview}</div></div>`;
    item.onclick = () => { currentChat = key; renderAppContent("kakao"); document.getElementById("app-content").scrollTop = 0; };
    c.appendChild(item);
  });
}

function renderInstagram(c) {
  if (igUser) {
    const p = INSTAGRAM[igUser];
    document.getElementById("app-title").textContent = p.name;
    const wrap = document.createElement("div");
    wrap.innerHTML = `<div class="ig-profile"><div class="ig-avatar" style="background:${p.color}">${p.avatar}</div><div class="ig-name">${p.name}</div><div class="ig-bio">${p.bio}</div></div>`;
    p.posts.forEach(post => {
      const el = document.createElement("div");
      el.className = "ig-post";
      el.innerHTML = `<div class="ig-post-img" style="background:${post.img}">📷</div><div class="ig-post-body"><div class="ig-post-cap">${post.caption}</div><div style="font-size:11px;color:#8e8e93;margin-top:6px;">${post.meta}</div></div>`;
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
  CALENDAR.forEach(e => {
    const el = document.createElement("div");
    el.className = "list-item";
    el.innerHTML = `<span>${e.title}</span><span class="sub">${e.date}</span>`;
    c.appendChild(el);
  });
}

function renderMemo(c) {
  MEMOS.forEach(m => {
    const el = document.createElement("div");
    el.style.cssText = "margin-bottom:16px;";
    el.innerHTML = `<div style="font-weight:700;font-size:16px;margin-bottom:6px;">${m.title}</div><div style="font-size:14px;color:#3a3a3c;white-space:pre-line;line-height:1.6;">${m.body}</div>`;
    c.appendChild(el);
  });
}

function renderMap(c) {
  MAP_PLACES.forEach(p => {
    const el = document.createElement("div");
    el.className = "list-item";
    el.style.display = "block";
    el.innerHTML = `<div style="font-weight:600;margin-bottom:4px;">${p.name}</div><div class="sub">${p.desc}</div>`;
    c.appendChild(el);
  });
}

function renderClock(c) {
  const now = new Date();
  const el = document.createElement("div");
  el.style.cssText = "text-align:center;padding:80px 0;";
  el.innerHTML = `<div style="font-size:64px;font-weight:200;letter-spacing:-2px;">${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}</div><div style="color:#8e8e93;margin-top:8px;">${now.toLocaleDateString("zh-CN")}</div>`;
  c.appendChild(el);
}

function renderWeather(c) {
  const el = document.createElement("div");
  el.style.cssText = "text-align:center;padding:50px 0;color:#1c1c1e;";
  el.innerHTML = `<div style="font-size:22px;font-weight:600;">${WEATHER.city}</div><div style="font-size:72px;font-weight:200;margin:12px 0;">${WEATHER.temp}</div><div style="font-size:16px;">${WEATHER.desc}</div><div style="color:#8e8e93;margin-top:8px;">最高 ${WEATHER.high} 最低 ${WEATHER.low}</div>`;
  c.appendChild(el);
}

function renderPlaceholder(c, id) {
  const app = APPS.find(a => a.id === id);
  const el = document.createElement("div");
  el.className = "placeholder";
  el.textContent = (app ? app.name : "此应用") + " 正在建设中，后续版本开放。";
  c.appendChild(el);
}

renderApps();