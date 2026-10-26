// 全局状态
const state = {
  currentPasscode: "",
  currentNotePasscode: "",
  currentApp: "lockScreen",
  chatStarted: false
};

// DOM 元素
const screens = {
  lockScreen: document.getElementById("lockScreen"),
  homeScreen: document.getElementById("homeScreen"),
  notes: document.getElementById("app-notes"),
  maps: document.getElementById("app-maps"),
  kakao: document.getElementById("app-kakao"),
  instagram: document.getElementById("app-instagram")
};

// 切换界面
function switchApp(appId) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[appId].classList.add("active");
  state.currentApp = appId;
}

// 状态栏时间更新
function updateTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("statusTime").textContent = `${h}:${m}`;
  document.getElementById("lockTime").textContent = `${h}:${m}`;
}

setInterval(updateTime, 1000);
updateTime();

// 锁屏点击显示密码键盘
document.getElementById("lockScreen").addEventListener("click", () => {
  document.getElementById("passcodePanel").classList.remove("hidden");
});

// 密码输入逻辑
function inputPasscode(value, type = "lock") {
  if (type === "lock") {
    if (value === "backspace") {
      state.currentPasscode = state.currentPasscode.slice(0, -1);
    } else {
      state.currentPasscode += value;
    }

    if (state.currentPasscode.length === 4) {
      if (state.currentPasscode === GAME_DATA.lockScreenPassword) {
        switchApp("homeScreen");
        state.currentPasscode = "";
        document.getElementById("passcodePanel").classList.add("hidden");
      } else {
        state.currentPasscode = "";
        alert("密码错误");
      }
    }

    updatePasscodeDots("passcodeDots", state.currentPasscode.length);
  } else if (type === "note") {
    if (value === "backspace") {
      state.currentNotePasscode = state.currentNotePasscode.slice(0, -1);
    } else {
      state.currentNotePasscode += value;
    }

    if (state.currentNotePasscode.length === 4) {
      if (state.currentNotePasscode === GAME_DATA.notePassword) {
        openNote(GAME_DATA.notes[2]);
        state.currentNotePasscode = "";
        document.getElementById("notePasscodeModal").classList.add("hidden");
      } else {
        state.currentNotePasscode = "";
        alert("备忘录密码错误");
      }
    }

    updatePasscodeDots("notePasscodeDots", state.currentNotePasscode.length);
  }
}

function updatePasscodeDots(className, length) {
  const dots = document.querySelectorAll(`.${className} span`);
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < length);
  });
}

// 锁屏键盘事件
document.querySelectorAll("#passcodePanel .key").forEach(key => {
  key.addEventListener("click", () => {
    if (key.classList.contains("key-empty")) return;

    if (key.classList.contains("key-backspace")) {
      inputPasscode("backspace", "lock");
    } else {
      inputPasscode(key.dataset.key, "lock");
    }
  });
});

// 备忘录密码键盘事件
document.querySelectorAll("#notePasscodeModal .key").forEach(key => {
  key.addEventListener("click", () => {
    if (key.classList.contains("key-empty")) return;

    if (key.classList.contains("key-backspace")) {
      inputPasscode("backspace", "note");
    } else {
      inputPasscode(key.dataset.key, "note");
    }
  });
});

// App 图标点击
document.querySelectorAll(".app-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const app = icon.dataset.app;

    if (app === "home") {
      switchApp("homeScreen");
      return;
    }

    if (screens[app]) {
      switchApp(app);
    }
  });
});

// 返回按钮
document.querySelectorAll("[data-back]").forEach(btn => {
  btn.addEventListener("click", () => {
    switchApp("homeScreen");
  });
});

// 备忘录点击
document.querySelectorAll(".note-item").forEach(item => {
  item.addEventListener("click", () => {
    const id = item.dataset.note;

    if (id === "secret") {
      document.getElementById("notePasscodeModal").classList.remove("hidden");
    } else {
      const note = GAME_DATA.notes.find(n => n.id === id);
      openNote(note);
    }
  });
});

function openNote(note) {
  document.getElementById("noteDetailTitle").textContent = note.title;
  document.getElementById("noteDetailContent").textContent = note.content;
  document.getElementById("noteDetail").classList.remove("hidden");
}

// 地图地点点击
document.querySelectorAll(".map-location").forEach(location => {
  location.addEventListener("click", () => {
    alert("你来到了：" + location.dataset.location);
  });
});

// 聊天选项逻辑
const chatInput = document.getElementById("chatInput");
const optionPanel = document.getElementById("optionPanel");

chatInput.addEventListener("click", () => {
  if (state.chatStarted) return;

  optionPanel.innerHTML = "";

  GAME_DATA.chats["朴成淏"].options.forEach(option => {
    const item = document.createElement("div");
    item.className = "option-item";
    item.textContent = option.text;
    item.addEventListener("click", () => {
      chatInput.value = option.text;
      optionPanel.classList.add("hidden");
    });
    optionPanel.appendChild(item);
  });

  optionPanel.classList.toggle("hidden");
});

document.getElementById("sendBtn").addEventListener("click", () => {
  if (!chatInput.value.trim()) return;

  state.chatStarted = true;
  optionPanel.classList.add("hidden");

  const chatArea = document.getElementById("chatArea");
  const myBubble = document.createElement("div");
  myBubble.className = "bubble me";
  myBubble.textContent = chatInput.value;
  chatArea.appendChild(myBubble);

  chatInput.value = "";
  chatArea.scrollTop = chatArea.scrollHeight;

  setTimeout(() => {
    const otherBubble = document.createElement("div");
    otherBubble.className = "bubble other";
    otherBubble.textContent = "嗯，我知道了。";
    chatArea.appendChild(otherBubble);
    chatArea.scrollTop = chatArea.scrollHeight;
  }, 800);
});

// Instagram 点赞
document.getElementById("likeBtn").addEventListener("click", function () {
  this.classList.toggle("liked");
  this.textContent = this.classList.contains("liked") ? "♥" : "♡";
});