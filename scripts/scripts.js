const popoverToggle = document.getElementById("popoverToggle");
const popover = document.getElementById("popover");
const overlay = document.getElementById("overlay");

// Функция для добавления класса "popover-open" во всплывающее окно и отображения наложения
function openPopover() {
  popover.classList.add("popover-open");
  overlay.style.display = "block";
}

// Функция для удаления класса "popover-open" из popover и скрытия наложения
function closePopover() {
  popover.classList.remove("popover-open");
  overlay.style.display = "none";
}

// Переключать видимость всплывающего окна и наложения при нажатии кнопки
popoverToggle.addEventListener("click", (event) => {
  event.preventDefault();
  if (popover.classList.contains("popover-open")) {
    closePopover();
  } else {
    openPopover();
  }
});

// Закрыть всплывающее окно и скрыть наложение при нажатии кнопки закрыть
const closeButton = popover.querySelector(".popover__close-button");
closeButton.addEventListener("click", () => {
  closePopover();
});

//Поповер с информацией
function showPopoverInfo() {
  const popoverPopInfo = document.getElementById("popoverPopInfo");
  popoverPopInfo.classList.add("popover__pop-info--open");
}

// Функция для скрытия элемента popover__pop-info
function hidePopoverInfo() {
  const popoverPopInfo = document.getElementById("popoverPopInfo");
  popoverPopInfo.classList.remove("popover__pop-info--open");
}

//Кнопка "Избранное"
function toggleFavorite(button) {
  // Получаем текущее состояние кнопки (избранное или не избранное)
  const isFavorite = button.getAttribute("data-favorite") === "true";

  // Меняем состояние кнопки
  if (isFavorite) {
    button.setAttribute("data-favorite", "false");
    button.textContent = "в избранное";
    button.classList.remove("button--green");
    button.classList.add("button--blue");
  } else {
    button.setAttribute("data-favorite", "true");
    button.textContent = "в избранном";
    button.classList.remove("button--blue");
    button.classList.add("button--green");
  }
}

// Добавляем переменную для хранения количества избранных элементов
let favoriteCount = 0;

function toggleFavorite(button) {
  // Получаем текущее состояние кнопки (избранное или не избранное)
  const isFavorite = button.getAttribute("data-favorite") === "true";

  // Меняем состояние кнопки и число избранных элементов
  if (isFavorite) {
    button.setAttribute("data-favorite", "false");
    button.textContent = "в избранное";
    button.classList.remove("button--green");
    button.classList.add("button--blue");
    favoriteCount--;
  } else {
    button.setAttribute("data-favorite", "true");
    button.textContent = "в избранном";
    button.classList.remove("button--blue");
    button.classList.add("button--green");
    favoriteCount++;
  }

  // Обновляем значение в элементе <span> с количеством избранных элементов
  const favoriteCountElement = document.getElementById("favoriteCount");
  favoriteCountElement.textContent = favoriteCount;
}

const slider = document.getElementById('slider');
const minPriceField = document.querySelector('input[name="min-price"]');
const maxPriceField = document.querySelector('input[name="max-price"]');

noUiSlider.create(slider, {
  start: [0, 9000],
  connect: true,
  range: {
    min: 0,
    max: 9000,
  },
});

slider.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];
  if (handle === 0) {
    minPriceField.value = Math.round(value);
  } else {
    maxPriceField.value = Math.round(value);
  }
});
