import menuVis from "./toggleCardButtonVisibility";

export default document.body.addEventListener('mousedown', (e) => {
    if (e.button === 2) {  
      const cardContainer = e.target.closest('.card__container');
      if (cardContainer) {
        const editForm = document.getElementById('cardFormEditCard');
        
        const cardHeading = cardContainer.querySelector('.card__heading');
        const cardDescription = cardContainer.querySelector('.card__description');
          
        const editCardHeading = document.getElementById('editCardHeading');
        const editCardDescription = document.getElementById('editCardDescription');
        editCardHeading.value = cardHeading.textContent
        editCardDescription.value = cardDescription.textContent

        editForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          if (editCardHeading.value.length > 2 && editCardDescription.value.length > 2) {
            cardHeading.textContent = editCardHeading.value;
            cardDescription.textContent = editCardDescription.value;
          } else {
            alert ('мало текста')
          }
        const cardButtonContainer = cardContainer.querySelector('.card__button-container');
        menuVis(cardButtonContainer)
      
      })}}})