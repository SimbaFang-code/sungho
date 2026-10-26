let currentChat = null;
let currentMemo = null;
let gameState = { dateCount: 0, likedSunghoPost: false, memoUnlocked: false, activePin: null };

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
      if (app.id === "calendar") return `<div class="icon-box icon-calendar"><div class="m">OCT</div><div class="d">26</div></div>`;
      if (app.id === "clock") return `<div class="icon-box icon-clock"></div>`;
      if (app.id === "memo") return `<div class="icon-box icon-notes"></div>`;
      if (app.id === "photos") return `<div class="icon-box icon-photos"><div style="background:#ff9500"></div><div style="background:#ff2d55"></div><div style="background:#5856d6"></div><div style="background:#34c759"></div></div>`;
      if (app.id === "map") return `<div class="icon-box icon-maps"><div></div></div>`;
      if (app.id === "weather") return `<div class="icon-box icon-weather"><div></div></div>`;
      if (app.id === "settings") return `<div class="icon-box icon-settings"></div>`;
      if (app.id === "phone") return `<div class="icon-box icon-phone"></div>`;
    }
    return `<div class="icon-box" style="background-image:url('${app.icon}');