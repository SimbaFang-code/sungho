// 时钟
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.getHours().toString().padStart(2, "0") + ":" +
    now.getMinutes().toString().padStart(2, "0");
  const days = ["周日","周一","周二","周三","周四","周五","周六"];
  document.getElementById("home-date").textContent =
    (now.getMonth()+1) + "月" + now.getDate() + "日 " + days[now.getDay()];
}
setInterval(updateClock, 1000);
updateClock();

// 桌面图标
function renderApps() {
  const grid = document.getElementById("app-grid");
  grid.innerHTML = "";
  APPS.forEach(app => {
    const el = document.createElement("div");
    el.className = "app-icon";
    el.innerHTML =
      '<div class="glyph" style="background:' + app.color + ';color:' + app.text + '">' + app.glyph + '</div>' +
      '<div class="label">' + app.name + '</div>';
    el.onclick = () => openApp(app.id, app.name);
    grid.appendChild(el);
  });
}

// 页面切换
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
  if (currentChat) {
    currentChat = null;
    renderAppContent("kakao");
  } else {
    goHome();
  }
};

let currentChat = null;

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

// KakaoTalk
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
      if (m.sender) html += '<div class="msg-sender">' + m.sender + '</div>';
      html += '<div class="bubble">' + m.text + '</div>';
      if (m.sender) {
        row.innerHTML = '<div>' + html + '</div>';
        row.style.display = "block";
      } else {
        row.innerHTML = html;
      }
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
    item.innerHTML =
      '<div class="chat-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div>' +
      '<div class="chat-info">' +
        '<div class="chat-name">' + chat.name + '</div>' +
        '<div class="chat-preview">' + chat.preview + '</div>' +
      '</div>';
    item.onclick = () => {
      currentChat = key;
      renderAppContent("kakao");
      document.getElementById("app-content").scrollTop = 0;
    };
    c.appendChild(item);
  });
}

// Instagram
function renderInstagram(c) {
  if (igUser) {
    const p = INSTAGRAM[igUser];
    document.getElementById("app-title").textContent = p.name;
    const wrap = document.createElement("div");
    wrap.innerHTML =
      '<div class="ig-profile">' +
        '<div class="ig-avatar" style="background:' + p.color + '">' + p.avatar + '</div>' +
        '<div class="ig-name">' + p.name + '</div>' +
        '<div class="ig-bio">' + p.bio + '</div>' +
      '</div>';
    p.posts.forEach(post => {
      const el = document.createElement("div");
      el.className = "ig-post";
      el.innerHTML =
        '<div class="ig-post-img" style="background:' + post.img + '">📷</div>' +
        '<div class="ig-post-body">' +
          '<div class="ig-post-cap">' + post.caption + '</div>' +
          '<div class="ig-post-meta">' + post.meta + '</div>' +
        '</div>';
      wrap.appendChild(el);
    });
    c.appendChild(wrap);
    return;
  }
  Object.keys(INSTAGRAM).forEach(key => {
    const p = INSTAGRAM[key];
    const item = document.createElement("div");
    item.className = "chat-list-item";
    item.innerHTML =
      '<div class="chat-avatar" style="background:' + p.color + '">' + p.avatar + '</div>' +
      '<div class="chat-info">' +
        '<div class="chat-name">' + p.name + '</div>' +
        '<div class="chat-preview">' + p.handle + ' · ' + p.posts.length + ' 帖子</div>' +
      '</div>';
    item.onclick = () => { igUser = key; renderAppContent("instagram"); };
    c.appendChild(item);
  });
}

let igUser = null;

// 相册
function renderPhotos(c) {
  const grid = document.createElement("div");
  grid.style.cssText = "display:grid;grid-template-columns:repeat(2,1fr);gap:10px;";
  PHOTOS.forEach(p => {
    const el = document.createElement("div");
    el.style.cssText =
      "height:130px;border-radius:12px;display:flex;align-items:flex-end;padding:10px;" +
      "color:#fff;font-size:12px;font-weight:600;background:" + p.color + ";";
    el.textContent = p.label;
    grid.appendChild(el);
  });
  c.appendChild(grid);
}

// 日历
function renderCalendar(c) {
  CALENDAR.forEach(e => {
    const el = document.createElement("div");
    el.className = "list-item";
    el.innerHTML = '<span>' + e.title + '</span><span class="sub">' + e.date + '</span>';
    c.appendChild(el);
  });
}

// 备忘录
function renderMemo(c) {
  MEMOS.forEach(m => {
    const el = document.createElement("div");
    el.style.cssText = "margin-bottom:16px;";
    el.innerHTML =
      '<div style="font-weight:700;font-size:15px;margin-bottom:6px;">' + m.title + '</div>' +
      '<div style="font-size:14px;color:#3a3a3c;white-space:pre-line;line-height:1.6;">' + m.body + '</div>';
    c.appendChild(el);
  });
}

// 校园地图
function renderMap(c) {
  MAP_PLACES.forEach(p => {
    const el = document.createElement("div");
    el.className = "list-item";
    el.style.display = "block";
    el.innerHTML =
      '<div style="font-weight:600;margin-bottom:3px;">' + p.name + '</div>' +
      '<div class="sub">' + p.desc + '</div>';
    c.appendChild(el);
  });
}

// 时钟
function renderClock(c) {
  const now = new Date();
  const el = document.createElement("div");
  el.style.cssText = "text-align:center;padding:80px 0;";
  el.innerHTML =
    '<div style="font-size:64px;font-weight:200;letter-spacing:-2px;">' +
    now.getHours().toString().padStart(2,"0") + ":" +
    now.getMinutes().toString().padStart(2,"0") + '</div>' +
    '<div style="color:#8e8e93;margin-top:8px;">' + now.toLocaleDateString("zh-CN") + '</div>';
  c.appendChild(el);
}

// 天气
function renderWeather(c) {
  const el = document.createElement("div");
  el.style.cssText = "text-align:center;padding:50px 0;color:#1c1c1e;";
  el.innerHTML =
    '<div style="font-size:22px;font-weight:600;">' + WEATHER.city + '</div>' +
    '<div style="font-size:72px;font-weight:200;margin:12px 0;">' + WEATHER.temp + '</div>' +
    '<div style="font-size:16px;">' + WEATHER.desc + '</div>' +
    '<div style="color:#8e8e93;margin-top:8px;">最高 ' + WEATHER.high + ' 最低 ' + WEATHER.low + '</div>';
  c.appendChild(el);
}

// 占位
function renderPlaceholder(c, id) {
  const app = APPS.find(a => a.id === id);
  const el = document.createElement("div");
  el.className = "placeholder";
  el.textContent = (app ? app.name : "此应用") + " 正在建设中，后续版本开放。";
  c.appendChild(el);
}

renderApps();