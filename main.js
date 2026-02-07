const state = {
  lang: "ko",
  quizLang: "en",
  quizLevel: "easy",
  quizItems: [],
  tipsLang: "all",
  tipsSearch: ""
};

const fallbackData = {
  i18n: {
    ko: {
      brandSubtitle: "단어 퀴즈 · 학습 팁 · 교정",
      navQuiz: "퀴즈",
      navTips: "학습 팁",
      navCorrection: "교정",
      heroEyebrow: "듀오링고 + 스픽 감성의 웹형 MVP",
      heroTitle: "하루 10분, 단어와 표현을 정확하게.",
      heroDesc: "한국인 영어 학습자와 한국어 학습자를 동시에 겨냥한 퀴즈, 블로그, 교정 흐름을 한 화면에서 제공합니다.",
      heroCta: "지금 퀴즈 시작",
      heroCtaAlt: "학습 팁 보기",
      statLanguages: "학습 언어",
      statModules: "핵심 모듈",
      statStage: "현재 단계",
      prioritiesTitle: "유저가 먼저 원하는 것",
      prioritiesDesc: "복잡한 가입이나 설정 없이 바로 쓰고, 짧게 피드백 받고, 다시 시도할 수 있게 설계합니다.",
      priority1Title: "즉시 시작",
      priority1Desc: "로그인 없이 퀴즈/교정을 바로 사용하고, 원하는 언어만 선택하면 됩니다.",
      priority2Title: "짧은 피드백",
      priority2Desc: "정답 여부만이 아니라 규칙 1줄 + 예문으로 빠르게 이해합니다.",
      priority3Title: "실전 중심",
      priority3Desc: "업무/면접/메신저 같은 실제 상황 문장을 기준으로 개선합니다.",
      panelTitle: "오늘의 미션",
      panelTitle2: "이번주 인기 표현",
      copyButton: "표현 복사",
      quizTitle: "단어 퀴즈",
      quizDesc: "짧은 문항으로 어휘/표현 감을 빠르게 올립니다.",
      quizLang: "학습 언어",
      quizLevel: "난이도",
      levelEasy: "쉬움",
      levelMid: "보통",
      levelHard: "어려움",
      quizStart: "새 퀴즈 생성",
      quizSubmit: "정답 확인",
      tipsTitle: "학습 팁 블로그",
      tipsDesc: "검색 유입을 고려한 롱테일 콘텐츠 포맷.",
      tipsAll: "전체",
      tipsBack: "목록으로",
      correctionTitle: "언어 교정",
      correctionDesc: "MVP 버전의 규칙 기반 교정입니다. 향후 AI 교정으로 확장 가능합니다.",
      correctionLang: "교정 언어",
      correctionRun: "교정 실행",
      correctionReset: "초기화",
      roadmapNote: "시장 빈틈 공략은 내부 로드맵에 반영되어 있으며, 사이트에는 핵심 기능만 노출합니다.",
      whyKoreanTitle: "왜 “한국어를 공부하는 외국인”이 포함되나요?",
      whyKoreanDesc: "영어 학습자만이 아니라, 한국어 학습 수요도 빠르게 커지고 있어 두 집단을 모두 고려합니다.",
      whyKoreanPoint1: "K-콘텐츠 확산으로 한국어 학습자가 꾸준히 증가",
      whyKoreanPoint2: "한국어는 띄어쓰기·조사·활용에서 실전 교정 니즈가 큼",
      whyKoreanPoint3: "한 화면에서 영어/한국어 학습 흐름을 제공하면 재방문 동기가 높음",
      footerText: "MVP 데모: 퀴즈 · 팁 · 교정 흐름을 한 번에 검증합니다.",
      placeholderSearch: "검색",
      placeholderCorrection: "문장을 입력하세요"
    },
    en: {
      brandSubtitle: "Quiz · Tips · Correction",
      navQuiz: "Quiz",
      navTips: "Tips",
      navCorrection: "Correction",
      heroEyebrow: "Web MVP inspired by Duolingo + Speak",
      heroTitle: "Ten minutes a day, sharpen words and expressions.",
      heroDesc: "A single flow that serves Korean learners of English and global learners of Korean: quiz, tips, and correction.",
      heroCta: "Start a quiz",
      heroCtaAlt: "View tips",
      statLanguages: "Languages",
      statModules: "Core modules",
      statStage: "Stage",
      prioritiesTitle: "User-First Priorities",
      prioritiesDesc: "Use it instantly, get short feedback, and try again without friction.",
      priority1Title: "Instant start",
      priority1Desc: "Run quizzes/corrections without login. Just pick a language.",
      priority2Title: "Short feedback",
      priority2Desc: "Not just right/wrong—learn with a 1-line rule + example.",
      priority3Title: "Real-world focus",
      priority3Desc: "Improve sentences used in work, interviews, and messaging.",
      panelTitle: "Today’s mission",
      panelTitle2: "Weekly phrase",
      copyButton: "Copy phrase",
      quizTitle: "Word Quiz",
      quizDesc: "Quick questions to boost vocabulary and usage.",
      quizLang: "Learning language",
      quizLevel: "Difficulty",
      levelEasy: "Easy",
      levelMid: "Medium",
      levelHard: "Hard",
      quizStart: "Generate quiz",
      quizSubmit: "Check answers",
      tipsTitle: "Learning Tips",
      tipsDesc: "Long-tail blog formats for SEO traction.",
      tipsAll: "All",
      tipsBack: "Back to list",
      correctionTitle: "Language Correction",
      correctionDesc: "Rule-based MVP correction. Upgrade to AI later.",
      correctionLang: "Correction language",
      correctionRun: "Run correction",
      correctionReset: "Reset",
      roadmapNote: "Market gap strategy lives in the internal roadmap; the site shows only core features.",
      whyKoreanTitle: "Why include learners of Korean?",
      whyKoreanDesc: "Demand for Korean learning is growing, so we serve both English and Korean learners.",
      whyKoreanPoint1: "K-content keeps driving steady growth of Korean learners.",
      whyKoreanPoint2: "Korean has high correction needs for spacing, particles, and conjugation.",
      whyKoreanPoint3: "A single flow for EN/KO increases reuse and return visits.",
      footerText: "MVP demo to validate quiz, tips, and correction flow.",
      placeholderSearch: "Search",
      placeholderCorrection: "Type your sentence"
    }
  },
  missions: {
    ko: ["오늘 단어 5개 퀴즈", "학습 팁 1개 읽기", "교정 문장 1개 작성"],
    en: ["Answer 5 quiz questions", "Read 1 learning tip", "Submit 1 correction"]
  },
  phrases: {
    ko: "I’d love to, but I’m tied up today.",
    en: "바쁘지만 하고 싶어요."
  },
  quiz: [
    {
      id: "en-1",
      lang: "en",
      level: "easy",
      question: "Choose the best meaning of 'beneath'.",
      choices: ["below", "before", "between", "behind"],
      answer: 0,
      explanation: {
        ko: "beneath = 아래에",
        en: "beneath means below"
      }
    }
  ],
  tips: [
    {
      id: "tip-1",
      lang: "ko",
      title: "영어 관사 a/the 빠르게 구분하는 법",
      tags: ["문법", "롱테일"],
      body: "a/an은 처음 소개하는 대상, the는 이미 알고 있는 대상을 지칭합니다. 예시 문장을 3개씩 만들어 감각을 확보하세요."
    }
  ]
};

let i18n = fallbackData.i18n;
let missions = fallbackData.missions;
let phrases = fallbackData.phrases;
let quizBank = fallbackData.quiz;
let tipsBank = fallbackData.tips;

const elements = {
  langButtons: document.querySelectorAll(".lang-switch .pill"),
  todayMission: document.getElementById("todayMission"),
  weeklyPhrase: document.getElementById("weeklyPhrase"),
  copyPhrase: document.getElementById("copyPhrase"),
  quizLang: document.getElementById("quizLang"),
  quizLevel: document.getElementById("quizLevel"),
  quizStart: document.getElementById("quizStart"),
  quizForm: document.getElementById("quizForm"),
  quizResult: document.getElementById("quizResult"),
  tipsGrid: document.getElementById("tipsGrid"),
  tipsLang: document.getElementById("tipsLang"),
  tipsSearch: document.getElementById("tipsSearch"),
  tipsDetail: document.getElementById("tipsDetail"),
  tipsDetailTitle: document.getElementById("tipsDetailTitle"),
  tipsDetailMeta: document.getElementById("tipsDetailMeta"),
  tipsDetailBody: document.getElementById("tipsDetailBody"),
  tipsBack: document.getElementById("tipsBack"),
  correctionLang: document.getElementById("correctionLang"),
  correctionInput: document.getElementById("correctionInput"),
  correctionRun: document.getElementById("correctionRun"),
  correctionReset: document.getElementById("correctionReset"),
  correctionResult: document.getElementById("correctionResult")
};

async function loadJson(path, fallback) {
  try {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error("bad response");
    return await res.json();
  } catch (error) {
    return fallback;
  }
}

function setLanguage(lang) {
  state.lang = lang;
  elements.langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  elements.tipsSearch.placeholder = i18n[lang].placeholderSearch;
  elements.correctionInput.placeholder = i18n[lang].placeholderCorrection;
  renderMission();
  renderPhrase();
  renderQuiz();
  renderTips();
}

function renderMission() {
  elements.todayMission.innerHTML = "";
  missions[state.lang].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    elements.todayMission.appendChild(li);
  });
}

function renderPhrase() {
  elements.weeklyPhrase.textContent = phrases[state.lang];
}

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildQuiz() {
  let filtered = quizBank.filter(
    (item) => item.lang === state.quizLang && item.level === state.quizLevel
  );
  if (filtered.length < 5) {
    filtered = quizBank.filter((item) => item.lang === state.quizLang);
  }
  state.quizItems = shuffle(filtered).slice(0, 5);
}

function renderQuiz() {
  if (!state.quizItems.length) buildQuiz();
  elements.quizForm.innerHTML = "";

  state.quizItems.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "quiz-question";

    const title = document.createElement("div");
    title.textContent = `${index + 1}. ${item.question}`;
    wrapper.appendChild(title);

    const options = document.createElement("ul");
    options.className = "quiz-options";

    item.choices.forEach((choice, i) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q-${item.id}`;
      input.value = i;
      label.appendChild(input);
      const span = document.createElement("span");
      span.textContent = choice;
      label.appendChild(span);
      li.appendChild(label);
      options.appendChild(li);
    });

    wrapper.appendChild(options);
    elements.quizForm.appendChild(wrapper);
  });

  const submit = document.createElement("button");
  submit.type = "button";
  submit.className = "btn primary";
  submit.textContent = i18n[state.lang].quizSubmit;
  submit.addEventListener("click", gradeQuiz);
  elements.quizForm.appendChild(submit);
}

function gradeQuiz() {
  let score = 0;
  const explanations = [];

  state.quizItems.forEach((item) => {
    const selected = document.querySelector(`input[name="q-${item.id}"]:checked`);
    if (selected && Number(selected.value) === item.answer) {
      score += 1;
    } else if (item.explanation && item.explanation[state.lang]) {
      explanations.push(item.explanation[state.lang]);
    }
  });

  const total = state.quizItems.length;
  const summary = `${score}/${total} ${state.lang === "ko" ? "정답" : "correct"}`;
  const extra = explanations.length
    ? `<br>${state.lang === "ko" ? "오답 노트" : "Review"}: ${explanations.join(" · ")}`
    : "";

  elements.quizResult.innerHTML = `${summary}${extra}`;
}

function renderTips() {
  const search = state.tipsSearch.toLowerCase();
  const list = tipsBank.filter((tip) => {
    const matchesLang = state.tipsLang === "all" || tip.lang === state.tipsLang;
    const matchesSearch = tip.title.toLowerCase().includes(search) || tip.body.toLowerCase().includes(search);
    return matchesLang && matchesSearch;
  });

  elements.tipsGrid.innerHTML = "";
  list.forEach((tip) => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML = `
      <h4>${tip.title}</h4>
      <p>${tip.body.slice(0, 80)}...</p>
      <small>${tip.tags.join(" · ")}</small>
    `;
    card.addEventListener("click", () => showTipDetail(tip));
    elements.tipsGrid.appendChild(card);
  });
}

function showTipDetail(tip) {
  elements.tipsDetailTitle.textContent = tip.title;
  elements.tipsDetailMeta.textContent = tip.tags.join(" · ");
  elements.tipsDetailBody.textContent = tip.body;
  elements.tipsDetail.hidden = false;
  elements.tipsGrid.style.display = "none";
}

function hideTipDetail() {
  elements.tipsDetail.hidden = true;
  elements.tipsGrid.style.display = "grid";
}

function capitalizeSentences(text) {
  return text.replace(/(^|[.!?]\s+)([a-z])/g, (match, prefix, char) => `${prefix}${char.toUpperCase()}`);
}

function correctEnglish(text) {
  let result = text.trim();
  const notes = [];
  const replacements = [
    ["dont", "don't"],
    ["cant", "can't"],
    ["wont", "won't"],
    ["im", "I'm"],
    ["ive", "I've"],
    ["id", "I'd"],
    ["ill", "I'll"]
  ];

  replacements.forEach(([wrong, right]) => {
    const regex = new RegExp(`\\b${wrong}\\b`, "gi");
    if (regex.test(result)) {
      result = result.replace(regex, right);
      notes.push(`${wrong} → ${right}`);
    }
  });

  if (/\s{2,}/.test(result)) {
    result = result.replace(/\s{2,}/g, " ");
    notes.push("연속 공백을 정리했습니다.");
  }
  if (/\bi\b/.test(result)) {
    result = result.replace(/\bi\b/g, "I");
    notes.push("I 대문자 처리를 적용했습니다.");
  }
  if (/\ba ([aeiou])/i.test(result)) {
    result = result.replace(/\ba ([aeiou])/gi, "an $1");
    notes.push("a/an 사용을 보정했습니다.");
  }
  if (/\ban ([^aeiou\s])/i.test(result)) {
    result = result.replace(/\ban ([^aeiou\s])/gi, "a $1");
    notes.push("a/an 사용을 보정했습니다.");
  }

  result = capitalizeSentences(result);
  if (result && !/[.!?]$/.test(result.trim())) {
    result = result.trim() + ".";
    notes.push("문장 끝 마침표를 추가했습니다.");
  }

  return { result, notes };
}

function correctKorean(text) {
  let result = text.trim();
  const notes = [];
  const replacements = [
    ["됬", "됐"],
    ["합니다니다", "합니다"],
    ["할께", "할게"],
    ["않되", "안 돼"],
    ["안되", "안 돼"],
    ["되요", "돼요"],
    ["되서", "돼서"],
    ["갔읍니다", "갔습니다"]
  ];

  replacements.forEach(([wrong, right]) => {
    if (result.includes(wrong)) {
      result = result.split(wrong).join(right);
      notes.push(`${wrong} → ${right}`);
    }
  });

  if (/\s{2,}/.test(result)) {
    result = result.replace(/\s{2,}/g, " ");
    notes.push("연속 공백을 정리했습니다.");
  }

  if (result && !/[.!?]$/.test(result.trim())) {
    result = result.trim() + ".";
    notes.push("문장 끝 마침표를 추가했습니다.");
  }

  return { result, notes };
}

function runCorrection() {
  const text = elements.correctionInput.value.trim();
  if (!text) {
    elements.correctionResult.textContent = state.lang === "ko" ? "입력된 문장이 없습니다." : "Please enter a sentence.";
    return;
  }

  const lang = elements.correctionLang.value;
  const output = lang === "en" ? correctEnglish(text) : correctKorean(text);

  const noteList = output.notes.length
    ? `<div>${state.lang === "ko" ? "변경 사항" : "Changes"}: ${output.notes.join(" · ")}</div>`
    : `<div>${state.lang === "ko" ? "변경 사항 없음" : "No changes"}</div>`;

  elements.correctionResult.innerHTML = `
    <strong>${state.lang === "ko" ? "교정 결과" : "Corrected"}</strong>
    <div>${output.result}</div>
    ${noteList}
  `;
}

function initEvents() {
  elements.langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  elements.copyPhrase.addEventListener("click", () => {
    navigator.clipboard.writeText(elements.weeklyPhrase.textContent);
  });

  elements.quizLang.addEventListener("change", (event) => {
    state.quizLang = event.target.value;
    buildQuiz();
    renderQuiz();
  });

  elements.quizLevel.addEventListener("change", (event) => {
    state.quizLevel = event.target.value;
    buildQuiz();
    renderQuiz();
  });

  elements.quizStart.addEventListener("click", () => {
    buildQuiz();
    renderQuiz();
    elements.quizResult.textContent = "";
  });

  elements.tipsLang.addEventListener("change", (event) => {
    state.tipsLang = event.target.value;
    renderTips();
  });

  elements.tipsSearch.addEventListener("input", (event) => {
    state.tipsSearch = event.target.value;
    renderTips();
  });

  elements.tipsBack.addEventListener("click", hideTipDetail);

  elements.correctionRun.addEventListener("click", runCorrection);
  elements.correctionReset.addEventListener("click", () => {
    elements.correctionInput.value = "";
    elements.correctionResult.textContent = "";
  });
}

async function init() {
  const [loadedI18n, loadedMissions, loadedPhrases, loadedQuiz, loadedTips] = await Promise.all([
    loadJson("data/i18n.json", fallbackData.i18n),
    loadJson("data/missions.json", fallbackData.missions),
    loadJson("data/phrases.json", fallbackData.phrases),
    loadJson("data/quiz.json", fallbackData.quiz),
    loadJson("data/tips.json", fallbackData.tips)
  ]);

  i18n = loadedI18n;
  missions = loadedMissions;
  phrases = loadedPhrases;
  quizBank = loadedQuiz;
  tipsBank = loadedTips;

  buildQuiz();
  renderQuiz();
  renderTips();

  const defaultLang = document.body.dataset.defaultLang || "ko";
  setLanguage(defaultLang);
  initEvents();
}

init();
