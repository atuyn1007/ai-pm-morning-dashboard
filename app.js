
/* ---------- 每日精选：中文行业动态 ---------- */
const TODAY_NEWS = [
  {
    title:"DeepSeek 开源 V4 首个多模态模型：305B 参数、MIT 协议可商用",
    url:"https://k.sina.com.cn/article_7879777297_1d5abdc1106801lyw2.html",
    source:"新浪科技",
    time:"2026-09-01T08:00:00+08:00",
    desc:"DeepSeek-V4-Flash-Vision-Exp 开源，305B 参数、每 token 激活仅 13B，MIT 协议零成本商用。"
  },
  {
    title:"OpenAI 广告业务年化收入破 10 亿美元，上线不足 200 天",
    url:"https://www.toutiao.com/article/7680345873091461678/",
    source:"每日经济新闻",
    time:"2026-09-01T08:00:00+08:00",
    desc:"ChatGPT Ads 年化收入突破 10 亿美元，覆盖 40+ 国家，免费流量广告变现跑通。"
  },
  {
    title:"科大讯飞开源端侧大模型星火 X2.5：1M 上下文跑在车上",
    url:"https://www.toutiao.com/article/7680339955470467630/",
    source:"今日头条",
    time:"2026-09-01T08:00:00+08:00",
    desc:"讯飞开源星火 X2.5-4B/1.7B 端侧模型，原生 1M 上下文，面向车载、智能硬件场景。"
  },
  {
    title:"国家人工智能基金 14 亿元入股快手可灵 AI",
    url:"https://new.qq.com/rain/a/20260901A0364500",
    source:"腾讯新闻",
    time:"2026-09-01T08:00:00+08:00",
    desc:"国家 AI 产业基金向北京可灵注资 14 亿元，正大机器人跟投，可灵投后估值约 180 亿美元。"
  },
  {
    title:"OpenClaw 2.0 发布史上最大更新：长期记忆 + 多 Agent 协作",
    url:"https://www.sohu.com/a/1070192038_455313",
    source:"腾讯研究院",
    time:"2026-09-01T08:00:00+08:00",
    desc:"OpenClaw v2026.8.1 由 933 名贡献者提交超 1.6 万 PR，重构记忆、权限与多人协作。"
  },
  {
    title:"玄创机器人获数千万元融资，斩获中石油超百台订单",
    url:"https://www.163.com/dy/article/L5N6E17305386R3J.html",
    source:"网易",
    time:"2026-09-01T08:00:00+08:00",
    desc:"玄创完成数千万元 A1 轮融资，深耕特危化场景，已交付中石油新疆油田 125 台订单。"
  }
];

/* ---------- 每周精选：GitHub 高赞开源 Skills ---------- */
const GH_WEEKLY = [
  {name:"langgenius/dify", url:"https://github.com/langgenius/dify", stars:154030, desc:"可视化 Agent 工作流与 RAG 平台，一站式完成从原型到生产部署。", updated:"2026-09-01T01:56:10Z"},
  {name:"OpenHands/OpenHands", url:"https://github.com/OpenHands/OpenHands", stars:85782, desc:"AI 驱动的软件开发代理，像人类开发者一样编写、运行与调试代码。", updated:"2026-09-01T01:52:55Z"},
  {name:"hiyouga/LlamaFactory", url:"https://github.com/hiyouga/LlamaFactory", stars:74482, desc:"100+ LLM/VLM 统一高效微调框架，支持 LoRA、QLoRA 等方案。", updated:"2026-08-31T08:13:07Z"},
  {name:"AstrBotDevs/AstrBot", url:"https://github.com/AstrBotDevs/AstrBot", stars:39868, desc:"多平台 AI 机器人 / Agent 框架，接入微信、QQ、Discord 与多种大模型。", updated:"2026-09-01T01:43:25Z"},
  {name:"labring/FastGPT", url:"https://github.com/labring/FastGPT", stars:29521, desc:"基于 LLM 的知识库平台，内置数据处理、RAG 检索与可视化工作流。", updated:"2026-08-31T22:47:19Z"},
  {name:"assafelovic/gpt-researcher", url:"https://github.com/assafelovic/gpt-researcher", stars:29224, desc:"自主研究智能体，基于任意 LLM 对任意数据开展深度研究。", updated:"2026-08-27T19:34:56Z"},
  {name:"promptfoo/promptfoo", url:"https://github.com/promptfoo/promptfoo", stars:24710, desc:"Prompt / Agent / RAG 测试与红队评估工具，支持 CI/CD。", updated:"2026-09-01T01:46:30Z"},
  {name:"eosphoros-ai/DB-GPT", url:"https://github.com/eosphoros-ai/DB-GPT", stars:19831, desc:"开源 Agentic 数据助手，面向下一代 AI + Data 产品，支持库表对话。", updated:"2026-08-31T03:49:48Z"},
  {name:"arc53/DocsGPT", url:"https://github.com/arc53/DocsGPT", stars:18229, desc:"私有化 AI 平台，含 Agent Builder、深度研究与文档分析，支持多模型。", updated:"2026-08-31T10:36:03Z"},
  {name:"botpress/botpress", url:"https://github.com/botpress/botpress", stars:14884, desc:"开源平台，用于构建与部署 GPT/LLM 驱动的智能体（Agent）。", updated:"2026-08-31T18:56:07Z"}
];

/* ---------- 海外 AI 动态：备用数据（已预翻成中文） ---------- */
const FALLBACK_NEWS = [
  {title:"Label your AI writing as AI writing", cn:"请为你的 AI 写作标注「由 AI 生成」", url:"https://www.raymondyxu.com/blog/labelYourAIWritingAsAIWriting", source:"Hacker News", tag:"hn", time:"2026-08-06T00:56:44Z", fallback:true},
  {title:"An AI model from Meta also hacked another company during testing", cn:"Meta 的一个 AI 模型在测试期间还攻击了另一家公司", url:"https://www.cnn.com/2026/08/05/tech/meta-ai-hacking", source:"Hacker News", tag:"hn", time:"2026-08-06T00:47:57Z", fallback:true},
  {title:"How to Give AI Agent a Memory That Survives the Session", cn:"如何给 AI Agent 一个能跨会话存活的记忆", url:"https://medium.com/@vektormemory/how-to-give-ai-agent-a-memory-that-survives-the-session-116f69c23eaf", source:"Hacker News", tag:"hn", time:"2026-08-06T00:43:35Z", fallback:true},
  {title:"Is M365 Copilot sending some prompts to Anthropic?", cn:"M365 Copilot 是否把部分提示词发给了 Anthropic？", url:"https://thatrobot.ai/claude-residency-gap-m365-copilot/", source:"Hacker News", tag:"hn", time:"2026-08-06T00:39:11Z", fallback:true},
  {title:"OpenAI gives first detailed debrief of the Hugging Face incident at Black Hat", cn:"OpenAI 在 Black Hat 上首度详细复盘 Hugging Face 安全事件", url:"https://www.groundlevel-ai.com/p/openai-gives-first-detailed-debrief", source:"Hacker News", tag:"hn", time:"2026-08-06T00:32:04Z", fallback:true},
  {title:"Dspy.Flex lets optimizers rewrite the code for faster, cheaper, better programs", cn:"Dspy.Flex 让优化器重写代码，实现更快、更省、更优的程序", url:"https://www.cmpnd.ai/blog/let-the-model-write-the-code.html", source:"Hacker News", tag:"hn", time:"2026-08-06T00:16:43Z", fallback:true}
];

/* ---------- 联网抓取 ---------- */
const HN_TERMS = ["AI","LLM","GPT","大模型","agent","foundation model"];
const CN_FEEDS = [
  {name:"量子位", url:"https://www.qbitai.com/feed"},
  {name:"机器之心", url:"https://www.jiqizhixin.com/rss"}
];
const PROXIES = [
  "https://api.allorigins.win/raw?url=",
  "https://api.codetabs.com/v1/proxy?quest=",
  "https://corsproxy.io/?"
];

function timeAgo(iso){
  const d = new Date(iso); if(isNaN(d)) return "";
  const s = Math.floor((Date.now()-d.getTime())/1000);
  if(s<60) return "刚刚";
  if(s<3600) return Math.floor(s/60)+" 分钟前";
  if(s<86400) return Math.floor(s/3600)+" 小时前";
  if(s<86400*7) return Math.floor(s/86400)+" 天前";
  return d.toLocaleDateString("zh-CN");
}

/* ---------- 浏览器端英文 → 中文翻译（多源轮询） ---------- */
async function translateText(text){
  const q = encodeURIComponent(text);
  // 源1: Google gtx（质量好、免密钥、支持 CORS）
  try{
    const ctrl = new AbortController();
    const tid = setTimeout(()=>ctrl.abort(), 6000);
    const r = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${q}`, {signal:ctrl.signal});
    clearTimeout(tid);
    if(r.ok){
      const j = await r.json();
      let t = "";
      if(Array.isArray(j) && Array.isArray(j[0])) t = j[0].map(seg=>seg[0]||"").join("");
      if(t.trim()) return t.trim();
    }
  }catch(e){}
  // 源2: MyMemory（兜底，免密钥、支持 CORS，每日匿名限额约 500 词）
  try{
    const ctrl = new AbortController();
    const tid = setTimeout(()=>ctrl.abort(), 6000);
    const r = await fetch(`https://api.mymemory.translated.net/get?q=${q}&langpair=en|zh-CN`, {signal:ctrl.signal});
    clearTimeout(tid);
    if(r.ok){
      const j = await r.json();
      const t = j?.responseData?.translatedText;
      if(t) return t;
    }
  }catch(e){}
  return null;
}

async function translateAll(list, concurrency){
  const results = new Array(list.length);
  let idx = 0;
  async function worker(){
    while(idx < list.length){
      const cur = idx++;
      const item = list[cur];
      if(item.cn){ results[cur] = item; continue; }      // 已有预翻译（备用数据）直接复用
      try{
        const t = await translateText(item.title);
        results[cur] = {...item, cn: t || item.title};
      }catch(e){ results[cur] = {...item, cn: item.title}; }
    }
  }
  const n = Math.max(1, Math.min(concurrency||6, list.length));
  await Promise.all(Array.from({length:n}, worker));
  return results;
}

async function fetchHN(){
  const out=[], seen=new Set();
  const ctrl = new AbortController();
  const tid = setTimeout(()=>ctrl.abort(), 9000);
  const reqs = HN_TERMS.map(t=>
    fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&query=${encodeURIComponent(t)}&hitsPerPage=10`, {signal:ctrl.signal})
      .then(r=>r.json()).catch(()=>null)
  );
  const res = await Promise.all(reqs);
  clearTimeout(tid);
  res.forEach(data=>{
    if(data && data.hits){
      data.hits.forEach(h=>{
        if(!h.title || !h.url || seen.has(h.objectID)) return;
        seen.add(h.objectID);
        out.push({title:h.title, url:h.url, source:"Hacker News", tag:"hn", time:h.created_at});
      });
    }
  });
  return out;
}

async function fetchGitHub(){
  try{
    const r = await fetch("https://api.github.com/search/repositories?q=AI+agent+LLM+GPT+created:>2025-01-01&sort=updated&order=desc&per_page=15");
    if(!r.ok) return [];
    const data = await r.json();
    return (data.items||[]).map(item=>({
      title:item.full_name + (item.description ? " — " + item.description : ""),
      url:item.html_url,
      source:"GitHub",
      tag:"src",
      time:item.updated_at
    }));
  }catch(e){ return []; }
}

async function fetchFeed(feed){
  for(const proxy of PROXIES){
    try{
      const ctrl = new AbortController();
      const tid = setTimeout(()=>ctrl.abort(), 7000);
      const r = await fetch(proxy+encodeURIComponent(feed.url), {signal:ctrl.signal});
      clearTimeout(tid);
      if(!r.ok) continue;
      const text = await r.text();
      const xml = new DOMParser().parseFromString(text, "text/xml");
      const items = [...xml.querySelectorAll("item")].map(n=>({
        title:(n.querySelector("title")?.textContent||"").trim(),
        url:(n.querySelector("link")?.textContent||"").trim(),
        source:feed.name, tag:"cn", time:(n.querySelector("pubDate")?.textContent||"")
      })).filter(x=>x.title && x.url);
      if(items.length) return items;
    }catch(e){}
  }
  return [];
}

function renderNewsCard(x){
  const display = x.cn || x.title;
  return `
    <div class="card ${x.fallback?'fallback':''}">
      <a class="title" href="${x.url}" target="_blank" rel="noopener">${escapeHtml(display)}</a>
      ${ (x.cn && x.cn !== x.title) ? `<div class="en-src">${escapeHtml(x.title)}</div>` : '' }
      <div class="row">
        <span class="tag ${x.tag}">${x.source}${x.fallback?' · 备用':''}</span>
        <span>${timeAgo(x.time)}</span>
      </div>
    </div>`;
}

async function loadNews(){
  const newsEl = document.getElementById("news");
  newsEl.setAttribute("aria-busy","true");
  newsEl.innerHTML = '<div class="skeleton" aria-hidden="true"></div><div class="skeleton" aria-hidden="true"></div><div class="skeleton" aria-hidden="true"></div><div class="skeleton" aria-hidden="true"></div>';
  document.getElementById("news-meta").textContent = "实时抓取 + 翻译中…";

  let all = [];
  try{
    const [hn, gh, cnArrays] = await Promise.all([
      fetchHN(),
      fetchGitHub(),
      Promise.all(CN_FEEDS.map(fetchFeed))
    ]);
    const cn = cnArrays.flat();
    all = [...hn, ...gh, ...cn];
  }catch(e){ all = []; }

  let usedFallback = false;
  if(all.length===0){
    all = FALLBACK_NEWS.slice();
    usedFallback = true;
  }

  const seenT = new Set();
  all = all.filter(x=>{ if(seenT.has(x.title)) return false; seenT.add(x.title); return true; })
           .sort((a,b)=> new Date(b.time) - new Date(a.time))
           .slice(0, 24);

  if(usedFallback){
    document.getElementById("news-meta").textContent = "备用数据（实时抓取被当前环境限制，已显示中文）";
  }else{
    document.getElementById("news-meta").textContent = "更新于 " + new Date().toLocaleTimeString("zh-CN") + " · 已译中文";
  }

  // 先渲染（已翻译的显示中文，未翻译的先用英文占位），避免翻译慢导致骨架卡住
  document.getElementById("s-hn").innerHTML = all.length + '<small> 条</small>';
  newsEl.innerHTML = all.map(renderNewsCard).join("");
  newsEl.removeAttribute("aria-busy");

  // 异步翻译，逐条回填中文（不阻塞首屏）
  if(!usedFallback){
    translateAll(all, 6).then(translated=>{
      translated.forEach((item, i)=>{
        const card = newsEl.children[i];
        if(!card) return;
        if(item.cn && item.cn !== item.title){
          const t = card.querySelector("a.title");
          if(t) t.textContent = item.cn;
          if(!card.querySelector(".en-src")){
            const es = document.createElement("div");
            es.className = "en-src";
            es.textContent = item.title;
            const row = card.querySelector(".row");
            if(row) card.insertBefore(es, row);
          }
        }
      });
    }).catch(()=>{});
  }
}

function renderCnNews(){
  document.getElementById("cn-news").innerHTML = TODAY_NEWS.map(x=>`
    <div class="card">
      <a class="title" href="${x.url}" target="_blank" rel="noopener">${escapeHtml(x.title)}</a>
      <div class="desc">${escapeHtml(x.desc)}</div>
      <div class="row">
        <span class="tag cn">${x.source}</span>
        <span>${timeAgo(x.time)}</span>
      </div>
    </div>`).join("");
}

function renderGH(){
  document.getElementById("gh-weekly").innerHTML = GH_WEEKLY.map(x=>`
    <div class="gh">
      <div class="top">
        <a class="name" href="${x.url}" target="_blank" rel="noopener">${escapeHtml(x.name)}</a>
        <span class="stars">⭐ ${x.stars.toLocaleString()}</span>
      </div>
      <div class="desc">${escapeHtml(x.desc)}</div>
      <div class="foot">
        <span>更新于 ${timeAgo(x.updated)}</span>
      </div>
    </div>`).join("");
}

function updateStats(){
  document.getElementById("s-cn-news").innerHTML = TODAY_NEWS.length + '<small> 条</small>';
  document.getElementById("s-gh").innerHTML = GH_WEEKLY.length + '<small> 个</small>';
  document.getElementById("s-hn").innerHTML = "—<small> 条</small>";
  document.getElementById("s-upd").textContent = new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});
}

function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

/* ---------- 时钟 / 问候 / 提示 ---------- */
const TIPS = [
  "坐下来，花 3 分钟扫一眼今日 AI 圈在发生什么，再勾掉一条今日待办。",
  "今天试着用 AI 把一个繁琐流程自动化 10%，积少成多。",
  "看到有意思的动态？顺手记一句“对我们有什么启发”，比收藏更有用。",
  "别被热度带节奏——先问一句：这事和用户真实痛点有关系吗？",
  "晨间黄金 10 分钟：看动态、定今天最重要的一件事。"
];
function tick(){
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString("zh-CN");
}

function bindTodos(){
  const KEY = 'pm_todos';
  const listEl = document.getElementById("todos-list");
  const inputEl = document.getElementById("todos-input");
  const addBtn = document.getElementById("todos-add-btn");
  const clearBtn = document.getElementById("todos-clear");
  const countEl = document.getElementById("todos-count");
  const defaults = ["浏览今日中文 AI 动态","浏览本周 GitHub 高赞 skill","完成今天最重要的一项工作"];

  function load(){
    try{
      const raw = localStorage.getItem(KEY);
      if(raw) return JSON.parse(raw);
    }catch(e){}
    return defaults.map(t=>({text:t,done:false}));
  }
  function save(items){ localStorage.setItem(KEY, JSON.stringify(items)); render(items); }

  function render(items){
    if(!items.length){
      listEl.innerHTML = '<div class="todos-empty">暂无待办，下面添加一条 👇</div>';
      countEl.textContent = '0 项';
      clearBtn.style.display = 'none';
      return;
    }
    listEl.innerHTML = items.map((item,i)=>`
      <div class="todo ${item.done?'done':''}" data-idx="${i}">
        <span class="todo-check" role="checkbox" tabindex="0" aria-checked="${item.done?'true':'false'}" aria-label="标记完成">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span class="todo-text">${escapeHtml(item.text)}</span>
        <button type="button" class="todo-del" aria-label="删除">×</button>
      </div>`).join("");
    const remaining = items.filter(x=>!x.done).length;
    countEl.textContent = `${remaining} 项未完成 / 共 ${items.length} 项`;
    clearBtn.style.display = items.some(x=>x.done) ? 'inline-flex' : 'none';
  }

  listEl.addEventListener('click', e=>{
    const row = e.target.closest('.todo');
    if(!row) return;
    const idx = +row.dataset.idx;
    const items = load();
    if(e.target.closest('.todo-check')){
      items[idx].done = !items[idx].done;
      save(items);
    }else if(e.target.closest('.todo-del')){
      items.splice(idx,1);
      save(items);
    }
  });
  listEl.addEventListener('keydown', e=>{
    const check = e.target.closest('.todo-check');
    if(!check || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault();
    const row = check.closest('.todo');
    const idx = +row.dataset.idx;
    const items = load();
    items[idx].done = !items[idx].done;
    save(items);
  });

  function add(){
    const text = inputEl.value.trim();
    if(!text) return;
    const items = load();
    items.push({text,done:false});
    inputEl.value = '';
    save(items);
  }
  addBtn.addEventListener('click', add);
  inputEl.addEventListener('keydown', e=>{ if(e.key === 'Enter') add(); });

  clearBtn.addEventListener('click', ()=>{
    const items = load().filter(x=>!x.done);
    save(items);
  });

  render(load());
}
function initHeader(){
  const now = new Date();
  const h = now.getHours();
  const greet = h<6?"凌晨好 🌙":h<11?"早上好 👋":h<14?"中午好 🌤️":h<18?"下午好 ☀️":"晚上好 🌆";
  document.getElementById("greet").textContent = greet;
  const wd = ["周日","周一","周二","周三","周四","周五","周六"][now.getDay()];
  document.getElementById("today").textContent = now.toLocaleDateString("zh-CN",{month:"long",day:"numeric"}) + " " + wd;
  document.getElementById("tip").textContent = TIPS[now.getDay() % TIPS.length];
}

/* ---------- 提示词优化器（离线规则式，无需密钥） ---------- */
function optimizePrompt(raw, preferDomain){
  const text = (raw||"").trim();
  if(!text) return null;
  let domain = preferDomain || "AI 产品";
  if(!preferDomain){
    if(/(用户|需求|调研|访谈|痛点|体验)/.test(text)) domain = "用户研究";
  else if(/(运营|增长|投放|转化|留存|拉新)/.test(text)) domain = "增长运营";
  else if(/(数据|指标|分析|报表|看板|埋点)/.test(text)) domain = "数据分析";
  else if(/(文案|推文|海报|营销|品牌|种草)/.test(text)) domain = "内容营销";
  else if(/(代码|开发|bug|接口|前端|后端|测试)/.test(text)) domain = "技术研发";
  }

  const optimized =
"# 角色\n"+
"你是一位资深的"+domain+"专家，擅长把模糊诉求转化成清晰、可执行的方案。\n\n"+
"# 任务\n"+
text+"\n\n"+
"# 约束\n"+
"- 使用简洁、准确的中文，避免空话套话\n"+
"- 聚焦可落地结论，必要时给出优先级或取舍建议\n"+
"- 涉及专业术语时一句话解释清楚\n\n"+
"# 输出格式\n"+
"- 核心结论：\n"+
"- 关键要点（分点，3-5 条）：\n"+
"- 下一步行动建议（可执行的 1-3 步）：\n"+
"- 风险 / 注意事项：\n\n"+
"# 示例（可选，补充 1 个输入-输出范例能显著提升效果）\n"+
"[在此粘贴一个参考示例]";

  const tips = [];
  if(!/(你|作为|假设|你是|请扮演|role)/i.test(text)) tips.push("原文缺少「角色设定」——已自动补上领域专家角色，让模型输出更稳。");
  if(!/(格式|结构|分点|列表|模板|输出)/.test(text)) tips.push("原文没有明确「输出格式」——已加入结构化模板，结果更可控。");
  if(!/(约束|不要|避免|限制|要求|必须)/.test(text)) tips.push("原文缺少「约束条件」——已加入简洁/可落地等约束，减少废话。");
  if(text.length < 20) tips.push("原文较短，建议补充背景或目标对象，优化效果会更好。");
  if(/(示例|例子|sample|example)/i.test(text)) tips.push("已包含示例占位，填入真实范例可大幅提升质量。");
  return {optimized, tips};
}

async function optimizeWithLLM(raw, cfg){
  const url = cfg.base.replace(/\/+$/,"") + "/chat/completions";
  const sys = "你是一位顶级的提示词（Prompt）工程师，擅长把用户随手写的粗糙提示词，改写成结构清晰、约束明确、效果显著的高质量中文提示词。要求：1) 补充缺失的角色设定与背景；2) 明确任务目标；3) 给出具体约束（格式、风格、长度、禁忌等）；4) 规定输出结构；5) 必要时提示补充示例。只返回优化后的提示词正文，不要解释，不要使用代码块或 markdown 包裹。";
  const ctrl = new AbortController();
  const tid = setTimeout(()=>ctrl.abort(), 20000);
  const r = await fetch(url, {
    method:"POST",
    headers:{"Content-Type":"application/json","Authorization":"Bearer "+cfg.key},
    body: JSON.stringify({model:cfg.model, messages:[
      {role:"system", content:sys},
      {role:"user", content: raw}
    ], temperature:0.3}),
    signal: ctrl.signal
  });
  clearTimeout(tid);
  if(!r.ok) throw new Error("HTTP "+r.status);
  const j = await r.json();
  const t = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
  if(!t || !t.trim()) throw new Error("空响应");
  return t.trim();
}

function bindOptimizer(){
  const input = document.getElementById("opt-input");
  const resultEl = document.getElementById("opt-result");
  const tipsEl = document.getElementById("opt-tips");
  const copyBtn = document.getElementById("opt-copy");
  const okEl = document.getElementById("opt-ok");
  const countEl = document.getElementById("opt-count");
  const statusEl = document.getElementById("opt-status");
  const baseEl = document.getElementById("opt-base");
  const keyEl = document.getElementById("opt-key");
  const modelEl = document.getElementById("opt-model");
  const useAiEl = document.getElementById("opt-useai");
  const runBtn = document.getElementById("opt-run");

  baseEl.value = localStorage.getItem("pm_opt_base") || "";
  keyEl.value = localStorage.getItem("pm_opt_key") || "";
  modelEl.value = localStorage.getItem("pm_opt_model") || "";
  useAiEl.checked = localStorage.getItem("pm_opt_useai") === "1";

  function saveCfg(){
    localStorage.setItem("pm_opt_base", baseEl.value.trim());
    localStorage.setItem("pm_opt_key", keyEl.value.trim());
    localStorage.setItem("pm_opt_model", modelEl.value.trim());
    localStorage.setItem("pm_opt_useai", useAiEl.checked ? "1" : "0");
  }
  [baseEl, keyEl, modelEl].forEach(el=>el.addEventListener("input", saveCfg));
  useAiEl.addEventListener("change", saveCfg);

  document.querySelectorAll(".opt .chip").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      baseEl.value = btn.dataset.base;
      modelEl.value = btn.dataset.model;
      saveCfg();
    });
  });

  // 优化方向（可选；为空 = 自动识别）
  let optDirection = "";
  document.querySelectorAll(".opt .dir").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".opt .dir").forEach(b=>{
        b.classList.remove("active");
        b.setAttribute("aria-pressed","false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed","true");
      optDirection = btn.dataset.dir || "";
    });
  });

  function setStatus(cls, text){ statusEl.className = "status " + cls; statusEl.textContent = text; }
  function updateCount(){ countEl.textContent = (input.value.length) + " 字"; }
  updateCount();
  input.addEventListener("input", updateCount);

  function showTips(arr){
    tipsEl.innerHTML = arr.map(t=>`<div class="t"><span class="ic">${t.ic}</span><span>${escapeHtml(t.tx)}</span></div>`).join("");
    tipsEl.classList.add("show");
  }

  runBtn.addEventListener("click", async ()=>{
    const raw = input.value;
    if(!raw.trim()){
      setStatus("empty", "⚠️ 空输入");
      resultEl.textContent = "请先输入你想优化的提示词 🙏";
      resultEl.classList.add("show");
      tipsEl.classList.remove("show");
      copyBtn.style.display = "none";
      okEl.style.display = "none";
      return;
    }
    const cfg = {base:baseEl.value.trim(), key:keyEl.value.trim(), model:modelEl.value.trim()||"gpt-4o-mini"};
    const useAI = useAiEl.checked && cfg.key;
    setStatus("loading", useAI ? "🤖 AI 优化中…" : "优化中…");
    resultEl.textContent = useAI ? "🤖 AI 优化中…" : "优化中…";
    resultEl.classList.add("show");
    copyBtn.style.display = "none";
    okEl.style.display = "none";
    tipsEl.classList.remove("show");
    runBtn.disabled = true;
    runBtn.setAttribute("aria-busy","true");
    try{
      let optimized, tips;
      if(useAI){
        optimized = await optimizeWithLLM(raw, cfg);
        showTips([{ic:"🤖", tx:`已由你的模型（${cfg.model}）优化。仍建议自行检查角色 / 格式 / 约束是否到位。`}]);
        setStatus("success", "✅ AI 优化成功");
      }else{
        const res = optimizePrompt(raw, optDirection);
        optimized = res.optimized; tips = res.tips;
        if(tips.length) showTips(tips.map(t=>({ic:"💡", tx:t})));
        setStatus("success", "✅ 优化完成");
      }
      resultEl.textContent = optimized;
      copyBtn.style.display = "inline-flex";
    }catch(e){
      const res = optimizePrompt(raw, optDirection);
      resultEl.textContent = res.optimized + "\n\n（⚠️ AI 调用失败，已回退规则式优化：" + (e && e.message ? e.message : e) + "）";
      copyBtn.style.display = "inline-flex";
      showTips(res.tips.map(t=>({ic:"💡", tx:t})));
      setStatus("fallback", "⚠️ 调用失败·已回退");
    }finally{
      runBtn.disabled = false;
      runBtn.removeAttribute("aria-busy");
    }
  });

  document.getElementById("opt-clear").addEventListener("click", ()=>{
    input.value = "";
    resultEl.classList.remove("show");
    tipsEl.classList.remove("show");
    copyBtn.style.display = "none";
    okEl.style.display = "none";
    updateCount();
    setStatus("idle", "待优化");
  });

  copyBtn.addEventListener("click", async ()=>{
    const txt = resultEl.textContent;
    try{
      await navigator.clipboard.writeText(txt);
      okEl.style.display = "inline";
      setTimeout(()=>okEl.style.display="none", 1500);
    }catch(e){
      const range = document.createRange(); range.selectNodeContents(resultEl);
      const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
    }
  });
}

/* ---------- 中文 → 英文翻译（用于 GitHub 搜索检索） ---------- */
async function translateZh2En(text){
  const q = encodeURIComponent(text);
  // 源1: Google gtx（质量好、免密钥、支持 CORS）
  try{
    const ctrl = new AbortController();
    const tid = setTimeout(()=>ctrl.abort(), 6000);
    const r = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=en&dt=t&q=${q}`, {signal:ctrl.signal});
    clearTimeout(tid);
    if(r.ok){
      const j = await r.json();
      let t = "";
      if(Array.isArray(j) && Array.isArray(j[0])) t = j[0].map(seg=>seg[0]||"").join("");
      if(t.trim()) return t.trim();
    }
  }catch(e){}
  // 源2: MyMemory（兜底，免密钥、支持 CORS，匿名限额约 500 词/日）
  try{
    const ctrl = new AbortController();
    const tid = setTimeout(()=>ctrl.abort(), 6000);
    const r = await fetch(`https://api.mymemory.translated.net/get?q=${q}&langpair=zh-CN|en`, {signal:ctrl.signal});
    clearTimeout(tid);
    if(r.ok){
      const j = await r.json();
      const t = j?.responseData?.translatedText;
      if(t) return t;
    }
  }catch(e){}
  return null;
}

/* ---------- GitHub 仓库搜索（中文需求 → 英文检索） ---------- */
async function searchSkillRepos(query){
  const q = encodeURIComponent(query + " stars:>30");
  const url = `https://api.github.com/search/repositories?q=${q}&sort=stars&order=desc&per_page=12`;
  const ctrl = new AbortController();
  const tid = setTimeout(()=>ctrl.abort(), 10000);
  const r = await fetch(url, {headers:{"Accept":"application/vnd.github+json"}});
  clearTimeout(tid);
  if(!r.ok) throw new Error("GitHub HTTP " + r.status);
  const data = await r.json();
  return (data.items||[]).map(item=>({
    name:item.full_name,
    url:item.html_url,
    stars:item.stargazers_count,
    desc:item.description || "（无简介）",
    lang:item.language || "—",
    updated:item.pushed_at || item.updated_at
  }));
}

function renderSkillCard(x){
  return `
    <div class="gh">
      <div class="top">
        <a class="name" href="${x.url}" target="_blank" rel="noopener">${escapeHtml(x.name)}</a>
        <span class="stars">⭐ ${x.stars.toLocaleString()}</span>
      </div>
      <div class="desc">${escapeHtml(x.desc)}</div>
      <div class="foot">
        <span class="lang">${escapeHtml(x.lang)}</span>
        <span>更新于 ${timeAgo(x.updated)}</span>
      </div>
    </div>`;
}

function bindSkillSearch(){
  const input = document.getElementById("skill-input");
  const btn = document.getElementById("skill-run");
  const grid = document.getElementById("skill-results");
  const statusEl = document.getElementById("skill-status");
  const queryEl = document.getElementById("skill-query");
  function setStatus(cls, text){ statusEl.className = "status " + cls; statusEl.textContent = text; }

  async function run(){
    const zh = input.value.trim();
    if(!zh){
      setStatus("empty", "⚠️ 先输入需求");
      grid.innerHTML = '<div class="skill-hint">输入中文需求，自动翻译后搜索 GitHub 开源 skill</div>';
      return;
    }
    btn.disabled = true; btn.setAttribute("aria-busy","true");
    setStatus("loading", "翻译中…");
    queryEl.textContent = "";
    grid.innerHTML = '<div class="skeleton" aria-hidden="true"></div><div class="skeleton" aria-hidden="true"></div><div class="skeleton" aria-hidden="true"></div>';

    let en = null;
    try{ en = await translateZh2En(zh); }catch(e){}
    const searchTerm = en && en.trim() ? en.trim() : zh;   // 翻译失败则用原文兜底
    queryEl.textContent = "🔍 " + searchTerm;
    setStatus("loading", en ? "搜索中…" : "翻译不可用，直接用原文搜…");

    try{
      const repos = await searchSkillRepos(searchTerm);
      if(repos.length === 0){
        grid.innerHTML = '<div class="skill-hint">未找到匹配仓库，换个关键词再试</div>';
        setStatus("empty", "无结果");
      }else{
        grid.innerHTML = repos.map(renderSkillCard).join("");
        setStatus("success", "✅ 找到 " + repos.length + " 个");
      }
    }catch(e){
      grid.innerHTML = '<div class="skill-hint">搜索失败：' + escapeHtml(e && e.message ? e.message : e) + '，稍后重试</div>';
      setStatus("fallback", "⚠️ 搜索失败");
    }finally{
      btn.disabled = false; btn.removeAttribute("aria-busy");
    }
  }

  btn.addEventListener("click", run);
  input.addEventListener("keydown", e=>{ if(e.key === "Enter") run(); });
}

/* ---------- 启动 ---------- */
initHeader();
bindOptimizer();
bindSkillSearch();
bindTodos();
renderCnNews();
renderGH();
updateStats();
tick(); setInterval(tick,1000);
loadNews();
const REFRESH_ICON = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>';
document.getElementById("refresh").addEventListener("click", ()=>{
  const btn = document.getElementById("refresh");
  if(btn.disabled) return;              // 防重复点击
  btn.disabled = true;
  btn.setAttribute("aria-busy","true");
  btn.innerHTML = "抓取中…";
  loadNews().finally(()=>{
    btn.disabled = false;
    btn.removeAttribute("aria-busy");
    btn.innerHTML = REFRESH_ICON + "刷新";
  });
});
