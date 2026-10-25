let currentChat = null;
let igUser = null;

// 纯CSS绘制的精美图标，不再使用网络图片，保证绝不出现白块
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

// 时间更新
function updateClock() {
  const now = new Date();
  const timeStr = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  const clockEl = document.getElementById("clock");
  const lockClockEl = document.getElementById("lock-clock");
  if(clockEl) clockEl.textContent = timeStr;
  if(lockClockEl) lockClockEl.textContent = timeStr;
  
  const days = ["周日","周一","周二","周三","周四","周五","周六"];
  const dateStr = (now.getMonth()+1) + "月" + now.getDate() + "日 " + days[now.getDay()];
  const homeDateEl = document.getElementById("home-date");
  const lockDateEl = document.getElementById("lock-date");
  if(homeDateEl) homeDateEl.textContent = dateStr;
  if(lockDateEl) lockDateEl.textContent = dateStr;
}
setInterval(updateClock, 1000);
updateClock();

// 解锁逻辑：点击整个锁屏界面的任何地方，直接解锁
const lockScreen = document.getElementById("lock-screen");
if (lockScreen) {
  lockScreen.onclick = function() {
    this.classList.add("hidden");
    document.getElementById("main-ui").classList.remove("hidden");
  };
}

// 桌面应用渲染
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