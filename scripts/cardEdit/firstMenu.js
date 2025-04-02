import { cardParent } from "../createCardScript/cardFromInput";
import menuVis from "./toggleCardButtonVisibility";
export default document.body.addEventListener("mousedown", (e) => {
  if (e.button === 2) {
    const cardContainer = e.target.closest(".card__container");
    if (cardContainer) {
      const cardButtonContainer = cardContainer.querySelector(
        ".card__button-container"
      );
      menuVis(cardButtonContainer)
    }

    cardParent.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }
});
