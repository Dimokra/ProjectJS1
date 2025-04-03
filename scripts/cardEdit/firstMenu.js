import menuVis from "./toggleCardButtonVisibility";

document.querySelector("#cardsMainContainer").addEventListener("contextmenu", (e) => {
  e.preventDefault();  // Отменяет стандартное поведение контекстного меню

  const cardContainer = e.target.closest(".card__container");
  const editForm = document.getElementById("cardFormEditCard");

  if (cardContainer) {
    const cardHeading = cardContainer.querySelector(".card__heading");
    const cardDescription = cardContainer.querySelector(".card__description");

    const editCardHeading = document.getElementById("editCardHeading");
    const editCardDescription = document.getElementById("editCardDescription");

    // Показать модальное окно
    const modalWindow = document.querySelector(".card__modal-window");
    modalWindow.classList.add("card__modal-show");
    modalWindow.classList.remove("card__modal-hide");

    // Устанавливаем начальные значения для редактирования
    editCardHeading.value = cardHeading.textContent;
    editCardDescription.value = cardDescription.textContent;

    // Удаляем старые обработчики, если они были
    editForm.removeEventListener("submit", handleFormSubmit);
    const deleteButton = editForm.querySelector(".delete-button");
    deleteButton.removeEventListener("click", handleDelete);

    // Добавляем новый обработчик для текущей карточки
    editForm.addEventListener("submit", handleFormSubmit);
    deleteButton.addEventListener("click", handleDelete);

    // Обработчик для отправки формы редактирования
    function handleFormSubmit(e) {
      e.preventDefault();

      if (editCardHeading.value.length > 2 && editCardDescription.value.length > 2) {
        // Изменяем только текущую карточку
        cardHeading.textContent = editCardHeading.value;
        cardDescription.textContent = editCardDescription.value;
      } else {
        alert("мало текста");
      }

      // Скрываем/показываем кнопки карточки
      const cardButtonContainer = cardContainer.querySelector(".card__button-container");
      menuVis(cardButtonContainer);
    }

    // Обработчик для удаления карточки
    function handleDelete(e) {
      e.preventDefault(); // Отменяем стандартное поведение кнопки
      if (confirm("Вы уверены, что хотите удалить эту карточку?")) {
        // Удаляем карточку из DOM
        cardContainer.remove();

        // Скрываем модальное окно
        modalWindow.classList.remove("card__modal-show");
        modalWindow.classList.add("card__modal-hide");

        // Удаляем обработчики, чтобы они не остались активными
        editForm.removeEventListener("submit", handleFormSubmit);
        deleteButton.removeEventListener("click", handleDelete);
      }
    }

    // Обработчик для закрытия модального окна
    const closeModalBtn = document.querySelector(".card__modal-close");
    closeModalBtn.addEventListener("click", () => {
      modalWindow.classList.remove("card__modal-show");
      modalWindow.classList.add("card__modal-hide");

      // Удаляем обработчики, чтобы они не остались активными
      editForm.removeEventListener("submit", handleFormSubmit);
      deleteButton.removeEventListener("click", handleDelete);
    });
  }
});

export * as modalWis from "./firstMenu.js";
