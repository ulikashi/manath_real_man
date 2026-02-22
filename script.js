const form = document.getElementById("heroForm");
const outStrength = document.getElementById("outStrength");
const outValues = document.getElementById("outValues");
const outGoal = document.getElementById("outGoal");

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
});

const giftData = [
  { label: "Банальный", content: "Сертификат на носки" },
  { label: "Съедобный", content: "Сертификат на пюре" },
  { label: "Фотографичный", content: "Сертификат на фотокарточку" },
  { label: "Виртуальный", content: "Сертификат на подписку на нейросеть" },
  { label: "Светящийся", content: "LED-лента" },
  { label: "Игровой", content: "Сертификат на подписку pass royal" },
  { label: "Нежный", content: "Сертификат на поцелуй" },
  { label: "Горячий", content: "Сертификат на поцелуй ниже" },
  { label: "Желанный", content: "Сертификат на абсолютно любое желание" },
  { label: "Правдивый", content: "Сертификат на максимально полный и честный ответ на любые 10 вопросов" },
  { label: "Чистый", content: "Сертификат на гель для душа" },
];

const giftList = document.getElementById("giftList");
const modal = document.getElementById("giftModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

let unlocked = 0;

function renderGifts() {
  giftList.innerHTML = "";
  giftData.forEach((gift, index) => {
    const item = document.createElement("div");
    item.className = "gift";
    if (index > unlocked) {
      item.classList.add("locked");
    }
    item.innerHTML = `
      <div class="gift__box">
        <div class="gift__lid"></div>
        <div class="gift__bow"></div>
      </div>
      <div class="gift__label">${gift.label}</div>
    `;

    item.addEventListener("click", () => {
      if (index > unlocked) return;
      item.classList.add("opened");
      modalTitle.textContent = gift.label;
      modalBody.textContent = gift.content;
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");

      if (index === unlocked && unlocked < giftData.length - 1) {
        unlocked += 1;
        renderGifts();
      }
    });

    giftList.appendChild(item);
  });
}

renderGifts();

modal.addEventListener("click", (e) => {
  if (e.target.dataset.close === "true") {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});

const scrollButtons = document.querySelectorAll("[data-scroll]");
scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selector = btn.getAttribute("data-scroll");
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
