// 《서린대학교》data.js 更新完整版
// 时序：初识帮忙 → 多次巧合偶遇 → 朋友阶段 → 暧昧拉扯 → 确定关系主线
// 记忆互通：私聊发生的事件，会在群聊、闺蜜群、其他NPC对话呼应
// 主线男主：朴成淏；支线：李常赫、明宰铉、韩泰山、金桐儇、金云鹤；闺蜜：崔裕真、姜智敏
const GAME_DATA = {

  // 锁屏密码
  lockScreenPassword: "0904",
  // 备忘录单独密码
  notePassword: "0530",

  // 备忘录内容
  notes: [
    {
      id: "normal_1",
      title: "校园生活记录",
      content: "今天也是西凛大学的一天。教室、食堂、图书馆，本来平平淡淡的校园，自从上次被成淏学长帮了忙之后，好像一切慢慢不一样了。"
    },
    {
      id: "normal_2",
      title: "约会提醒",
      content: "可能会遇到他们的地方：图书馆、篮球场、烤肉店、咖啡馆、操场、画室、便利店、教学楼走廊、校园湖边、校门口公交站。多去逛逛，偶遇和新故事都藏在这里。"
    },
    {
      id: "normal_3",
      title: "学长小笔记",
      content: "成淏学长很细心，不喜欢节奏太快；云鹤学长很活泼，经常直来直去；泰山学长喜欢画画，去画室说不定能碰到他；宰铉学长很爱开玩笑；常赫学长很会照顾大家；桐儇学长很温柔爱笑。裕真总催我主动一点，智敏让我慢慢来。"
    },
    {
      id: "secret_1",
      title: "绝密剧情提示",
      content: "提示：朴成淏的生日是 0530。他是慢热型，不要太急切。需要在地图完成全部10次打卡，才能解锁和他确定关系的结局。你和各个学长发生的小事，会在群聊被提起，所有对话记忆是互通的。"
    }
  ],

  // 10个打卡点位（主线硬性打卡，解锁成淏恋爱结局）
  locations: [
    { id: "library", name: "图书馆", desc: "安静的自习区，很多大三学长会来这里看书" },
    { id: "basketball", name: "篮球场", desc: "男生们经常组队打球的地方" },
    { id: "bbq", name: "烤肉店", desc: "大家团建最爱去的店" },
    { id: "cafe", name: "校园咖啡馆", desc: "适合坐着聊天、写作业" },
    { id: "playground", name: "操场", desc: "傍晚散步、慢跑的地方" },
    { id: "studio", name: "画室", desc: "韩泰山经常待的地方" },
    { id: "convenience", name: "校园便利店", desc: "下课买饮料零食的好去处" },
    { id: "corridor", name: "教学楼走廊", desc: "下课容易偶遇熟人" },
    { id: "lake", name: "校园湖边", desc: "傍晚风很好，很安静" },
    { id: "busstop", name: "校门口公交站", desc: "放学等车的地方" }
  ],

  // 打卡剧情包，每个点位自带选项、后续联动私聊
  locationEvents: {
    library: {
      title: "图书馆偶遇朴成淏",
      intro: "你抱着厚厚的专业书找座位，书本哗啦一下全部散落在地上，旁边的男生停下来弯腰帮你捡。是朴成淏学长。",
      options: [
        {
          text: "连忙道谢，有点紧张不敢多看他",
          reply: "没关系，拿好哦，书很重，小心一点。你是大一新生吗？我是大三的朴成淏。",
          triggerChat: "chat_seongho_firstmeet"
        },
        {
          text: "一边捡书一边和他搭话，问他是不是经常来图书馆",
          reply: "嗯，有空就会过来看书。这里比较安静。你自习吗？如果位置不够，可以坐这边。",
          triggerChat: "chat_seongho_firstmeet"
        }
      ]
    },
    basketball: {
      title: "篮球场看学长打球",
      intro: "下课路过篮球场，看到六个学长在这里打球，云鹤隔着很远朝你挥手，成淏打完一局，拿着水瓶走到边上休息。",
      options: [
        {
          text: "走上前，把手里多余的矿泉水递给他",
          reply: "谢谢你。刚好有点渴。你是专门过来这边吗？",
          triggerChat: "chat_seongho_basketball"
        },
        {
          text: "站在远处安静看着，等他们打完再打招呼",
          reply: "你来了，看很久了？",
          triggerChat: "chat_seongho_basketball"
        }
      ]
    },
    cafe: {
      title: "咖啡馆双人偶遇",
      intro: "你来咖啡馆赶作业，刚好碰到成淏一个人坐着看书。他抬头看见了你，朝你轻轻点头。",
      options: [
        {
          text: "过去问能不能坐在他对面一起写作业",
          reply: "可以，位置是空的。作业很难吗？看不懂的地方可以问问我。",
          triggerChat: "chat_seongho_cafe"
        },
        {
          text: "找另外一张桌子坐下，远远打个招呼",
          reply: "别坐太远啦，这边光线好一点。",
          triggerChat: "chat_seongho_cafe"
        }
      ]
    },
    studio: {
      title: "画室遇见韩泰山",
      intro: "你好奇走到画室门口，看见泰山一个人坐在画板前画画，他察觉到动静，回头看向你。",
      options: [
        {
          text: "小声夸他画很好看",
          reply: "谢谢。随便画的。想看看吗？",
          triggerChat: "chat_tesan_first"
        },
        {
          text: "不好意思打扰他，准备悄悄走开",
          reply: "没关系，不打扰。进来看看也可以。",
          triggerChat: "chat_tesan_first"
        }
      ]
    },
    lake: {
      title: "湖边散步，和成淏单独碰到",
      intro: "傍晚你沿着湖边散步，成淏独自在湖边吹风，看见你之后停下脚步。",
      options: [
        {
          text: "主动和他并肩慢慢走",
          reply: "傍晚这里风很舒服，我经常过来。你也喜欢来这里吗？",
          triggerChat: "chat_seongho_lake"
        },
        {
          text: "简单打个招呼，打算自己继续走",
          reply: "要不要一起走一段？一个人散步有点无聊。",
          triggerChat: "chat_seongho_lake"
        }
      ]
    },
    playground: {
      title: "操场，全员六人团建散步",
      intro: "六个学长一起在操场慢跑休息，明宰铉最先看到你，大声喊你的名字，所有人都转头看过来。",
      options: [
        {
          text: "笑着走过去和大家打招呼",
          reply: "哇，你来啦！正好我们打算一起去买饮料！",
          triggerChat: "group_boys_playground"
        },
        {
          text: "有点害羞，远远挥手",
          reply: "别害羞呀，过来一起！",
          triggerChat: "group_boys_playground"
        }
      ]
    },
    convenience: {
      title: "便利店偶遇金云鹤",
      intro: "晚自习后去便利店买牛奶，碰到云鹤抱着一大堆零食，看见你眼睛一亮。",
      options: [
        {
          text: "和他聊天，问他买这么多零食干嘛",
          reply: "等下和哥哥们分！要不要给你拿一个糖？很好吃！",
          triggerChat: "chat_unhak_first"
        },
        {
          text: "和他简单问好，拿完东西准备结账",
          reply: "等一下！一起结账吧，我帮你拿！",
          triggerChat: "chat_unhak_first"
        }
      ]
    },
    corridor: {
      title: "教学楼走廊碰到李常赫",
      intro: "下课人流很挤，你差点撞到栏杆，常赫刚好走在旁边伸手扶了你一把。",
      options: [
        {
          text: "连忙道谢，和他聊两句",
          reply: "小心一点，下课这里人很多。没撞到吧？",
          triggerChat: "chat_sanghyuk_first"
        },
        {
          text: "慌慌张张说了谢谢，有点不好意思",
          reply: "没事，慢慢来，不用急。",
          triggerChat: "chat_sanghyuk_first"
        }
      ]
    },
    bbq: {
      title: "烤肉店团体聚餐",
      intro: "宰铉牵头组织大家一起吃烤肉，裕真和智敏也跟着来了，一桌子人热热闹闹。",
      options: [
        {
          text: "坐到成淏旁边的空位",
          reply: "坐这里吗？我帮你烤。",
          triggerChat: "chat_seongho_bbq"
        },
        {
          text: "坐到闺蜜旁边，偶尔看向成淏",
          reply: "想吃什么我可以夹给你。",
          triggerChat: "chat_seongho_bbq"
        }
      ]
    },
    busstop: {
      title: "公交站，和朴成淏的收尾打卡点（暧昧关键节点）",
      intro: "天色很晚，公交迟迟没来，只有你和成淏两个人在站台等车。空气安安静静，和平时热闹的聚会完全不一样。",
      options: [
        {
          text: "主动和他说，和他待在一起很开心",
          reply: "我也是。和你相处的时候，我会觉得很安心。",
          triggerChat: "chat_seongho_confess_pre"
        },
        {
          text: "小声问他，平时会不会经常一个人等公交",
          reply: "以前经常一个人，现在……好像开始期待偶遇了。",
          triggerChat: "chat_seongho_confess_pre"
        }
      ]
    }
  },

  // 所有私聊、群聊剧本，key对应上面triggerChat，记忆互通
  chats: {
    // ===== 朴成淏 主线私聊 =====
    chat_seongho_firstmeet: {
      title: "朴成淏",
      messages: [
        { speaker: "other", text: "没关系，拿好哦，书很重，小心一点。你是大一新生吗？我是大三的朴成淏。" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "嗯，我是大一的，今天真的谢谢你帮我捡书", next: "seongho_op1" },
        { text: "学长经常来图书馆自习吗？", next: "seongho_op2" }
      ],
      follow: {
        seongho_op1: [{ speaker: "other", text: "不用客气，刚好我就在旁边。以后拿很多书的时候慢一点，别摔了。有空也可以经常来图书馆。" }],
        seongho_op2: [{ speaker: "other", text: "有空就会过来，这里安静适合看书。如果之后你来碰到难题，也可以找我。" }]
      }
    },
    chat_seongho_basketball: {
      title: "朴成淏",
      messages: [
        { speaker: "other", text: "谢谢你。刚好有点渴。你是专门过来这边吗？" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "路过，刚好看见你们打球，就停下来看看", next: "ho_bb1" },
        { text: "想过来看看学长们打球，你打得很好", next: "ho_bb2" }
      ],
      follow: {
        ho_bb1: [{ speaker: "other", text: "原来是路过。我们一般周三周五下午都会打球，有空可以过来。" }],
        ho_bb2: [{ speaker: "other", text: "哈哈，谢谢夸奖。云鹤他们才是打得更热闹的那个。" }]
      }
    },
    chat_seongho_cafe: {
      title: "朴成淏",
      messages: [
        { speaker: "other", text: "可以，位置是空的。作业很难吗？看不懂的地方可以问问我。" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "有几道题卡住了，麻烦学长啦", next: "ho_c1" },
        { text: "还好，就是慢慢写，不着急", next: "ho_c2" }
      ],
      follow: {
        ho_c1: [{ speaker: "other", text: "拿来我看看，我慢慢讲给你听，不要着急。" }],
        ho_c2: [{ speaker: "other", text: "慢慢来挺好的，不用给自己太大压力。" }]
      }
    },
    chat_seongho_lake: {
      title: "朴成淏",
      messages: [
        { speaker: "other", text: "傍晚这里风很舒服，我经常过来。你也喜欢来这里吗？" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "很喜欢，这里安安静静的", next: "ho_l1" },
        { text: "今天心情有点闷，出来走走", next: "ho_l2" }
      ],
      follow: {
        ho_l1: [{ speaker: "other", text: "我也是。很多心事在这里吹风，就会轻松很多。以后想散步，可以叫我。" }],
        ho_l2: [{ speaker: "other", text: "要是心里不舒服，想说的话可以跟我说，我听着。" }]
      }
    },
    chat_seongho_bbq: {
      title: "朴成淏",
      messages: [
        { speaker: "other", text: "坐这里吗？我帮你烤。" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "哇，那太好了，辛苦学长", next: "ho_q1" },
        { text: "不用特意照顾我，你自己也多吃一点", next: "ho_q2" }
      ],
      follow: {
        ho_q1: [{ speaker: "other", text: "不辛苦。你喜欢吃熟一点还是嫩一点的？" }],
        ho_q2: [{ speaker: "other", text: "我会的，你不用拘谨。" }]
      }
    },
    chat_seongho_confess_pre: {
      title: "朴成淏",
      messages: [
        { speaker: "other", text: "我也是。和你相处的时候，我会觉得很安心。" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "学长，我好像越来越喜欢和你待在一起了", next: "ho_final1" },
        { text: "不知道为什么，每次遇见你，我都会很开心", next: "ho_final2" }
      ],
      follow: {
        ho_final1: [{ speaker: "other", text: "其实我也是。我不想只做你的学长、朋友。等我们慢慢走到合适的时候，可以在一起吗？" }],
        ho_final2: [{ speaker: "other", text: "我也是，每一次偶遇你的时候，我心里都会悄悄开心很久。" }]
      }
    },

    // ===== 其他学长支线私聊 =====
    chat_tesan_first: {
      title: "韩泰山",
      messages: [
        { speaker: "other", text: "谢谢。随便画的。想看看吗？" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "好呀，我可以看看吗？", next: "te1" },
        { text: "你很喜欢画画吗？", next: "te2" }
      ],
      follow: {
        te1: [{ speaker: "other", text: "这幅画的是校园湖边，上次傍晚去那里画的。" }],
        te2: [{ speaker: "other", text: "嗯，画画的时候不用说话，很舒服。" }]
      }
    },
    chat_unhak_first: {
      title: "金云鹤",
      messages: [
        { speaker: "other", text: "等一下！一起结账吧，我帮你拿！" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "谢谢云鹤学长，你买这么多零食分给大家吗？", next: "un1" },
        { text: "不用麻烦你啦，我自己可以的", next: "un2" }
      ],
      follow: {
        un1: [{ speaker: "other", text: "对！等下要去找哥哥们！下次我们也可以一起过来买东西！" }],
        un2: [{ speaker: "other", text: "没关系，我力气很大的！" }]
      }
    },
    chat_sanghyuk_first: {
      title: "李常赫",
      messages: [
        { speaker: "other", text: "小心一点，下课这里人很多。没撞到吧？" },
        { speaker: "me", text: "【选项内容自动填入】" }
      ],
      options: [
        { text: "没有撞到，谢谢常赫学长，刚刚差点摔倒", next: "sa1" },
        { text: "还好，人太多了有点挤", next: "sa2" }
      ],
      follow: {
        sa1: [{ speaker: "other", text: "没事就好。下课高峰期走路一定要多留意四周。" }],
        sa2: [{ speaker: "other", text: "是啊，每天下课这里都挤，尽量靠边走比较安全。" }]
      }
    },

    // ===== 男生六人小群聊 =====
    group_boys_playground: {
      title: "서린大三六人组",
      messages: [
        { speaker: "明宰铉", text: "哇！XX来了！刚刚我们还在说要不要喊你一起来散步！" },
        { speaker: "金云鹤", text: "太好了！那我们等下去便利店买饮料好不好！" },
        { speaker: "朴成淏", text: "别围着人家啦，慢慢说。" },
        { speaker: "李常赫", text: "刚好我们打算休息，一起吗？" }
      ],
      options: [
        { text: "好呀，我跟大家一起！", next: "g1" },
        { text: "我可以陪大家一小会儿，等下还有事情", next: "g2" }
      ],
      follow: {
        g1: [{ speaker: "韩泰山", text: "嗯。" }, { speaker: "金桐儇", text: "太好了，人多热闹！" }],
        g2: [{ speaker: "朴成淏", text: "那不要耽误你的事，有空再一起。" }, { speaker: "明宰铉", text: "呜呜那下次一定要久一点！" }]
      }
    },

    // ===== 闺蜜小群聊（磕糖专用，承接你和成淏的相遇记忆） =====
    group_girls: {
      title: "裕真&智敏&我",
      messages: [
        { speaker: "崔裕真", text: "喂喂喂！听说你今天在图书馆和成淏学长碰到了？！是不是他帮你捡书那个！！" },
        { speaker: "姜智敏", text: "裕真别激动，慢慢听她说。" }
      ],
      options: [
        { text: "对！就是他，他人真的很温柔", next: "girl1" },
        { text: "只是碰巧遇到啦，就是普通学长帮忙而已", next: "girl2" }
      ],
      follow: {
        girl1: [{ speaker: "崔裕真", text: "啊啊啊我就说他超靠谱！这缘分这不就来了！加油！" }, { speaker: "姜智敏", text: "慢慢来，不要急，顺其自然最好。" }],
        girl2: [{ speaker: "崔裕真", text: "现在是普通帮忙，后面说不定就不一样啦！" }, { speaker: "姜智敏", text: "不管怎么样，你开心最重要。" }]
      }
    }
  }
};