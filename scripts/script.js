import '../styles/main.css'
import { createExampleCards } from "./createCardScript/cardExampleFunc"
import {cardTemplate, cardParent, addObjectToArray, cloneCardWithData} from "./createCardScript/cardFromInput"
import { cardsExample } from './data/cardsData'
import firstMenu from './cardEdit/firstMenu.js'

createExampleCards(cardsExample, cardTemplate, cardParent)

document.querySelector(".input__container").addEventListener("submit", function (e) {
  e.preventDefault()
  const newCardData = addObjectToArray(); 
  if (newCardData.length < 1) {
    alert("Заполните все поля");
    return;
  }
  const newClonedCard = cloneCardWithData(newCardData[0].title, newCardData[0].imageSrc, newCardData[0].description);
  
  cardParent.appendChild(newClonedCard);
});


cardParent.addEventListener('click', (e) => {
  if (e.target.classList.contains('card__button-static')) {
    e.target.classList.toggle('like-pressed');
    e.target.classList.toggle('like-unpressed');
  }

  if (e.target.classList.contains('delete-button')) {
    e.target.closest('.card__container').remove();
  }
});

firstMenu