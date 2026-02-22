const steps = Array.from(document.querySelectorAll(".step"));

function showStep(id) {
  steps.forEach((step) => step.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

document.querySelectorAll("[data-next]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nextId = btn.getAttribute("data-next");
    showStep(nextId);
  });
});

const form = document.getElementById("heroForm");
const outStrength = document.getElementById("outStrength");
const outValues = document.getElementById("outValues");
const outGoal = document.getElementById("outGoal");
const formCard = document.getElementById("formCard");
const profileCard = document.getElementById("profileCard");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const strength = [...form.querySelectorAll("input[name='strength']:checked")]
    .map((el) => el.value)
    .join(", ") || "—";

  const values = [...form.querySelectorAll("input[name='values']:checked")]
    .map((el) => el.value)
    .join(", ") || "—";

  const goal = form.querySelector("input[name='goal']").value.trim() || "—";

  outStrength.textContent = strength;
  outValues.textContent = values;
  outGoal.textContent = goal;

  formCard.classList.add("hidden");
  profileCard.classList.remove("hidden");
});

const feats = [
  {
    title: "Гений компьютерных технологий",
    text: "Ты круто разбираешься в технике и новых технологиях, отлично владеешь программированием.",
    image: "photo/IMG_6227.PNG",
  },
  {
    title: "Главный качек в спортзале",
    text: "Ты невероятно сильный и накачанный мужчина, твоим мышцам позавидуют многие.",
    image: "photo/IMG_6226.PNG",
  },
  {
    title: "Красивее любой модели",
    text: "Ты очень красивый и стильный, с любой прической и в любой одежде я не могу оторвать от тебя глаз.",
    image: "photo/IMG_6230.PNG",
  },
  {
    title: "Самый умный",
    text: "Твоей начитанности и развитости можно только завидовать. Я не встречала собеседника интереснее чем ты.",
    image: "photo/IMG_6231.PNG",
  },
  {
    title: "Лучший парень",
    text: "Ты очень заботливый и милый, мне очень с тобой повезло.",
    image: "photo/IMG_6234.PNG",
  },
];

const featImage = document.getElementById("featImage");
const featTitle = document.getElementById("featTitle");
const featText = document.getElementById("featText");
const featCounter = document.getElementById("featCounter");
const featNext = document.getElementById("featNext");

let featIndex = 0;

function renderFeat() {
  const feat = feats[featIndex];
  featImage.src = feat.image;
  featImage.alt = feat.title;
  featTitle.textContent = feat.title;
  featText.textContent = feat.text;
  featCounter.textContent = `${featIndex + 1} / ${feats.length}`;

  if (featIndex === feats.length - 1) {
    featNext.textContent = "Продолжить";
  } else {
    featNext.textContent = "Следующий подвиг";
  }
}

featNext.addEventListener("click", () => {
  if (featIndex < feats.length - 1) {
    featIndex += 1;
    renderFeat();
  } else {
    showStep("step-final");
  }
});

renderFeat();

const giftData = [
  { label: "Банальный" },
  { label: "Съедобный" },
  { label: "Фотографичный" },
  { label: "Виртуальный" },
  { label: "Светящийся" },
  { label: "Игровой" },
  { label: "Нежный" },
  { label: "Горячий" },
  { label: "Желанный" },
  { label: "Правдивый" },
  { label: "Чистый" },
];

const giftList = document.getElementById("giftList");

function renderGifts() {
  giftList.innerHTML = "";
  giftData.forEach((gift) => {
    const item = document.createElement("div");
    item.className = "gift";
    item.innerHTML = `
      <div class="gift__box">
        <div class="gift__lid"></div>
        <div class="gift__ribbon"></div>
        <div class="gift__bow"></div>
        <div class="gift__text">${gift.label}</div>
      </div>
    `;

    item.addEventListener("click", () => {
      item.classList.add("opened");
    });

    giftList.appendChild(item);
  });
}

renderGifts();
