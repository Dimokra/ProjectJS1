import { cardParent } from "../createCardScript/cardFromInput";

export default document.body.addEventListener('mousedown', (e) => {
    if (e.button === 2) {
      const cardContainer = e.target.closest('.card__container');
      if (cardContainer) {
        const cardButtonContainer = cardContainer.querySelector('.card__button-container');
        if (cardButtonContainer) {
          if (cardButtonContainer.classList.contains('card__button-container-hide')) {
            cardButtonContainer.classList.remove('card__button-container-hide');
          } else {
            cardButtonContainer.classList.add('card__button-container-hide');
          }
        }
      }
    }
  }
  );
  
  cardParent.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

