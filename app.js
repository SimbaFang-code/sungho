let currentMemo = null;
let gameState = { dateCount: 0, likedSunghoPost: false, memoUnlocked: false };
let activePinId = null;

window.unlockPhone = function() {
  var ls = document.getElementById("lock-screen");
  var mu = document.getElementById("main-ui");
  if (ls && mu) {
    ls.classList.add("hidden"); 
    mu.classList.remove("hidden"); 
    setTimeout(function() {
      showNotification("KakaoTalk", "朴成淏：宰铉在群里说周五聚餐，你看到了吗？", "kakao", "sungho");
    }, 1000);
  }
}

function updateClock() {
  var now = new Date();
  var timeStr = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  if(document.getElementById("clock")) document.getElementById("clock").textContent = timeStr;
  if(document.getElementById("lock-clock")) document.getElementById("lock-clock").textContent = timeStr;
}
setInterval(updateClock, 1000); updateClock();

function showNotification(title, body, appId, chatId) {
  var notif = document.getElementById("ios-notification");
  if(!notif) return;
  notif.querySelector("#notif-title-text").innerText = title;
  notif.querySelector("#notif-body-text").innerText = body;
  notif.classList.add("show");
  
  notif.onclick = function() {
    notif.classList.remove("show");
    openApp(appId, "KakaoTalk");
    if(chatId) {
        currentChat = chatId;
        document.getElementById("app-content").classList.add("no-padding");
        renderAppContent("kakao");
    }
  };
  setTimeout(function() { notif.classList.remove("show"); }, 5000);
}

function renderApps() {
  var grid = document.getElementById("app-grid"); 
  if (!grid) return;
  grid.innerHTML = "";
  
  var dockApps = ["phone", "map", "kakao", "instagram"];
  var mainApps = APPS.filter(function(app) { return !dockApps.includes(app.id); });
  
  var createIconHTML = function(app) {
    if (app.customClass) {
      if (app.id === "calendar") return '<div class="icon-box icon-calendar"><div class="m">OCT</div><div class="d">26</div></div>';
      if (app.id === "clock") return '<div class="icon-box icon-clock"></div>';
      if (app.id === "memo") return '<div class="icon-box icon-notes"></div>';
      if (app.id === "photos") return '<div class="icon-box icon-photos"><div style="background:#ff9500"></div><div style="background:#ff2d55"></div><div style="background:#5856d6"></div><div style="background:#34c759"></div></div>';
      if (app.id === "map") return '<div class="icon-box icon-maps"><div></div></div>';
      if (app.id === "weather") return '<div class="icon-box icon-weather"><div></div></div>';
      if (app.id === "settings") return '<div class="icon-box icon-settings"></div>';
      if (app.id === "phone") return '<div class="icon-box icon-phone"></div>';
      if (app.id === "kakao") return '<div class="icon-box icon-kakao"></div>';
      if (app.id === "instagram") return '<div class="icon-box icon-ig"></div>';
    }
    return '<div class="icon-box"></div>';
  };

  mainApps.forEach(function(app) {
    var el = document.createElement("div"); el.className = "app-icon";
    el.innerHTML = createIconHTML(app) + '<span class="icon-label">' + app.name + '</span>';
    el.onclick = function(e) { e.stopPropagation(); openApp(app.id, app.name); };
    grid.appendChild(el);
  });
  
  var dock = document.getElementById("dock"); 
  if(dock) {
    dock.innerHTML = "";
    dockApps.forEach(function(id) {
      var app = APPS.find(function(a) { return a.id === id; }); if (!app) return;
      var el = document.createElement("div"); el.className = "app-icon";
      el.innerHTML = createIconHTML(app);
      el.onclick = function(e) { e.stopPropagation(); openApp(app.id, app.name); };
      dock.appendChild(el);
    });
  }
}

function openApp(id, name) {
  document.getElementById("home").classList.remove("active");
  document.getElementById("app-view").classList.add("active");
  document.getElementById("app-title").textContent = name;
  var dock = document.querySelector(".dock");
  if(dock) dock.classList.add("hidden-dock");
  
  var c = document.getElementById("app-content");
  c.classList.remove("no-padding");
  if (id === "kakao" && currentChat) c.classList.add("no-padding");
  if (id === "map") c.classList.add("no-padding");
  renderAppContent(id);
  c.scrollTop = 0;
}

window.goHome = function() {
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("home").classList.add("active");
  var dock = document.querySelector(".dock");
  if(dock) dock.classList.remove("hidden-dock");
}

window.goBack = function() {
  if (currentChat) { 
    currentChat = null; 
    document.getElementById("app-content").classList.remove("no-padding");
    renderAppContent("kakao"); 
  } else if (currentMemo) {
    currentMemo = null;
    renderAppContent("memo");
  } else { goHome(); }
}

document.getElementById("back-btn").onclick = goBack;

function renderAppContent(id) {
  var c = document.getElementById("app-content"); c.innerHTML = "";
  if (id === "kakao") renderKakao(c);
  else if (id === "instagram") renderInstagram(c);
  else if (id === "memo") renderMemo(c);
  else if (id === "map") renderMap(c);
  else c.innerHTML = "<div style='text-align:center;padding:50px;color:#999;'>功能接入中</div>";
}

function renderKakao(c) {
  if (currentChat) {
    var chat = CHATS[currentChat];
    document.getElementById("app-title").textContent = chat.name;

    c.innerHTML = 
      '<div class="chat-room-wrapper">' +
        '<div id="chat-room-container" class="chat-room"></div>' +
        '<div style="display:flex; gap:8px; padding:10px; background:#fff; border-top:1px solid #ddd; flex-shrink:0;">' +
          '<input id="kakao-input" type="text" placeholder="发送消息..." style="flex:1; padding:10px 15px; border:none; background:#f1f1f1; border-radius:20px; font-size:14px; outline:none;">' +
          '<button id="kakao-send-btn" style="padding:0 15px; background:#fee500; color:#3c1e1e; border:none; border-radius:20px; font-weight:bold; cursor:pointer;">发送</button>' +
        '</div>' +
        '<div id="reply-modal" class="reply-modal">' +
          '<div style="font-size:12px; color:#8e8e93; margin-bottom:10px; text-align:center;">请选择剧情回复</div>' +
          '<div id="reply-options-container"></div>' +
          '<div style="text-align:center; margin-top:10px;"><span onclick="closeReplyModal()" style="color:#007aff; font-size:14px; cursor:pointer;">取消</span></div>' +
        '</div>' +
      '</div>';

    var room = document.getElementById("chat-room-container");
    var inputEl = document.getElementById("kakao-input");
    var sendBtn = document.getElementById("kakao-send-btn");
    var modal = document.getElementById("reply-modal");
    var optionsContainer = document.getElementById("reply-options-container");

    var isTyping = false; 

    var renderMessages = function() {
      room.innerHTML = "";
      chat.messages.forEach(function(m) {
        if (m.type === "time") { room.innerHTML += '<div class="time-divider"><span>' + m.text + '</span></div>'; return; }
        var row = document.createElement("div"); row.className = "msg-row " + m.from;
        if (m.sender) {
          row.innerHTML = '<div style="display:flex; flex-direction:column; align-items:flex-start;"><div class="msg-sender">' + m.sender + '</div><div class="bubble">' + m.text + '</div></div>';
        } else {
          row.innerHTML = '<div class="bubble">' + m.text + '</div>';
        }
        room.appendChild(row);
      });
      setTimeout(function() { room.scrollTop = room.scrollHeight; }, 10);
    };
    renderMessages();

    inputEl.onclick = function(e) {
      e.preventDefault();
      if (isTyping) return; 
      if (chat.story && chat.story.length > 0) {
        inputEl.blur(); 
        optionsContainer.innerHTML = "";
        var btn = document.createElement("div");
        btn.className = "reply-option";
        btn.innerText = chat.story[0].me;
        btn.onclick = function() { inputEl.value = chat.story[0].me; closeReplyModal(); };
        optionsContainer.appendChild(btn);
        modal.classList.add("show");
      } else {
        inputEl.focus(); 
      }
    };

    window.closeReplyModal = function() { modal.classList.remove("show"); };

    sendBtn.onclick = function() {
      if (isTyping) return;
      var text = inputEl.value.trim();
      if (!text) return;
      
      chat.messages.push({ from: "me", text: text });
      inputEl.value = "";
      renderMessages();

      if (chat.story && chat.story.length > 0 && chat.story[0].me === text) {
        var currentStory = chat.story.shift();
        isTyping = true; 
        inputEl.placeholder = "对方正在输入...";

        setTimeout(function() {
          chat.messages.push({ 
            from: "them", 
            text: currentStory.them,
            sender: currentStory.sender 
          });
          renderMessages();
          isTyping = false;
          inputEl.placeholder = "发送消息...";
        }, 1500);
      }
    };
    return;
  }

  c.style.backgroundColor = "#fff";
  Object.keys(CHATS).forEach(function(key) {
    var chat = CHATS[key];
    var item = document.createElement("div"); item.className = "chat-list-item";
    var msgs = chat.messages.filter(function(m) { return m.type !== 'time'; });
    var lastMsg = msgs[msgs.length - 1] || { text: "" };
    
    var previewText = lastMsg.text;
    if (lastMsg.sender) previewText = lastMsg.sender + "：" + lastMsg.text;
    
    item.innerHTML = '<div class="chat-avatar" style="background:' + chat.color + '">' + chat.avatar + '</div><div class="chat-info"><div class="chat-name">' + chat.name + '</div><div class="chat-preview">' + previewText + '</div></div>';
    item.onclick = function() { 
      currentChat = key; 
      document.getElementById("app-content").classList.add("no-padding");
      renderAppContent("kakao"); 
    };
    c.appendChild(item);
  });
}

function renderMap(c) {
  c.innerHTML = 
    '<div class="map-container">' +
      '<div id="map-pins"></div>' +
      '<div id="map-card" class="map-bottom-card">' +
        '<h3 id="map-title" style="font-size:18px; margin-bottom:5px;">地点名称</h3>' +
        '<p id="map-desc" style="font-size:14px; color:#666;">地点描述</p>' +
        '<button class="map-btn" id="map-action-btn">确认前往该地点</button>' +
      '</div>' +
      '<div class="map-choice-modal" id="map-choice-modal">' +
        '<div class="map-choice-box">' +
          '<div class="map-choice-title" id="map-choice-title">触发剧情：你要怎么做？</div>' +
          '<div id="map-choice-options"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  
  var pinsCont = document.getElementById("map-pins");
  var card = document.getElementById("map-card");
  var title = document.getElementById("map-title");
  var desc = document.getElementById("map-desc");
  var btn = document.getElementById("map-action-btn");
  var choiceModal = document.getElementById("map-choice-modal");
  var choiceOptions = document.getElementById("map-choice-options");

  MAP_PLACES.forEach(function(p) {
    var pin = document.createElement("div");
    pin.className = "map-pin";
    pin.style.left = p.x + "%";
    pin.style.top = p.y + "%";
    pin.innerHTML = '<div class="pin-icon"></div><div class="pin-label">' + p.name + '</div>';
    
    pin.onclick = function(e) {
      e.stopPropagation();
      activePinId = p.id;
      title.innerText = p.name;
      desc.innerText = "点击下方按钮进入该场景。";
      
      if (gameState['date_' + p.id]) {
         btn.innerText = "已完成该地点的剧情";
         btn.style.background = "#ccc";
         btn.disabled = true;
      } else {
         btn.innerText = "模拟前往该地点";
         btn.style.background = "#007aff";
         btn.disabled = false;
      }
      card.classList.add("show");
    };
    pinsCont.appendChild(pin);
  });

  btn.onclick = function() {
    if (!activePinId || btn.disabled) return;
    var place = MAP_PLACES.find(function(p) { return p.id === activePinId; });
    
    choiceOptions.innerHTML = "";
    place.choices.forEach(function(choice) {
      var choiceBtn = document.createElement("div");
      choiceBtn.className = "map-choice-btn";
      choiceBtn.innerText = choice;
      choiceBtn.onclick = function() {
        choiceModal.classList.remove("show");
        gameState['date_' + place.id] = true;
        gameState.dateCount++;
        
        alert('【剧情触发】\n\n你选择了：' + choice + '\n\n' + place.reply + '\n\n（当前攻略进度：' + gameState.dateCount + '/10）');
        btn.innerText = "已完成该地点的剧情";
        btn.style.background = "#ccc";
        btn.disabled = true;

        if (place.id === "p2") {
           CHATS.sungho.messages.push({ type: "time", text: "刚刚" });
           CHATS.sungho.messages.push({ from: "them", text: "刚刚的水，谢谢。" });
           CHATS.sungho.story.unshift({ me: "学长客气啦，应该的", them: "明天下午有空吗？我请你喝咖啡，就当回礼。" });
           setTimeout(function() {
             showNotification("KakaoTalk", "朴成淏：刚刚的水，谢谢。", "kakao", "sungho");
           }, 2000);
        } else if (gameState.dateCount === 10) {
           setTimeout(function() { alert("【系统提示】你们已经很熟悉了，去 KakaoTalk 看看吧！"); }, 1500);
        }
      };
      choiceOptions.appendChild(choiceBtn);
    });
    choiceModal.classList.add("show");
  };

  c.querySelector('.map-container').onclick = function() {
    card.classList.remove("show");
    activePinId = null;
  };
}

function renderMemo(c) {
  c.style.backgroundColor = "#fff";
  if (currentMemo) {
    var note = MEMOS.find(function(m) { return m.id === currentMemo; });
    document.getElementById("app-title").textContent = "备忘录";
    if (note.isLocked && !gameState.memoUnlocked) {
       c.innerHTML = '<div class="memo-lock-screen"><h3>此备忘录已锁定</h3><p style="color:#888; font-size:13px; margin-top:8px;">请输入四位密码</p><input type="password" id="memo-pass" class="memo-input" maxlength="4" placeholder="****"><br><button onclick="checkMemoPass()" style="margin-top:20px; padding:10px 20px; background:#ffcc00; border:none; border-radius:10px; font-weight:bold;">解锁</button></div>';
       return;
    }
    c.innerHTML = '<div class="memo-detail"><h1>' + note.title + '</h1><p style="color:#888; font-size:12px; margin-bottom:20px;">' + note.date + '</p><p>' + note.content + '</p></div>';
    return;
  }

  c.innerHTML = '<div style="padding:16px; font-size:24px; font-weight:bold; border-bottom:1px solid #eee;">文件夹: 我的备忘录</div>';
  MEMOS.forEach(function(m) {
    var el = document.createElement("div");
    el.className = "memo-list-item";
    el.innerHTML = '<div class="memo-list-title">' + m.title + '</div><div class="memo-list-date">' + m.date + '</div>';
    el.onclick = function() { currentMemo = m.id; renderAppContent("memo"); };
    c.appendChild(el);
  });
}

window.checkMemoPass = function() {
  var val = document.getElementById("memo-pass").value;
  if (val === "0530") { gameState.memoUnlocked = true; renderAppContent("memo"); } 
  else { alert("密码错误"); }
}

function renderInstagram(c) {
  c.style.padding = "0"; c.style.backgroundColor = "#fff";
  c.innerHTML = 
    '<div class="ig-header"><div class="ig-logo">Instagram</div><div>❤️ ✉️</div></div>' +
    '<div id="ig-feed"></div>';
  
  var feed = document.getElementById("ig-feed");
  INSTAGRAM_FEED.forEach(function(post) {
    var postEl = document.createElement("div");
    postEl.className = "ig-feed-post";
    postEl.innerHTML = 
      '<div class="ig-feed-header"><div class="chat-avatar" style="width:32px;height:32px;font-size:12px;background:#ff9f0a;">' + post.avatar + '</div><strong>' + post.user + '</strong></div>' +
      '<div class="ig-feed-img" style="background-image:url(\'' + post.img + '\');"></div>' +
      '<div class="ig-feed-actions">' +
        '<span class="ig-heart" id="heart_' + post.id + '" onclick="likePost(\'' + post.id + '\')">🤍</span> ' +
        '<span>💬</span> ' +
        '<span>✈️</span>' +
      '</div>' +
      '<div class="ig-feed-caption"><strong>' + post.user + '</strong> ' + post.caption + '</div>';
    feed.appendChild(postEl);
  });
}

window.likePost = function(postId) {
  var heart = document.getElementById('heart_' + postId);
  if (heart.classList.contains('liked')) return; 
  heart.classList.add('liked');
  heart.innerText = "❤️";
  if (postId === "post_2" && !gameState.likedSunghoPost) {
    gameState.likedSunghoPost = true;
    CHATS.sungho.messages.push({ type: "time", text: "刚刚" });
    CHATS.sungho.messages.push({ from: "them", text: "你看到我发的动态啦？明天要一起去吗？" });
    setTimeout(function() {
      showNotification("KakaoTalk", "朴成淏：你看到我发的动态啦？明天要一起去吗？", "kakao", "sungho");
    }, 1500);
  }
}

// 放弃所有监听，强制渲染！
renderApps();