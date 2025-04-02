import '../styles/main.css'
import { createExampleCards } from "./createCardScript/cardExampleFunc"
import {cardTemplate, cardParent, addObjectToArray, cloneCardWithData, warnNotif} from "./createCardScript/cardFromInput"
import { cardsExample } from './data/cardsData'
import {name} from './cardEdit/firstMenu.js'
import * as editCard from './cardEdit/editCards.js'

createExampleCards(cardsExample, cardTemplate, cardParent)

document.querySelector(".input__container").addEventListener("submit", function (e) {
  e.preventDefault()
  const newCardData = addObjectToArray(); 
  if (newCardData.length < 1) {return warnNotif.textContent = "Пожалуйста, заполните все поля!"} {warnNotif.textContent = ""}
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

cardParent.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-button")) {
      document.querySelector('.card__modal-window').classList.add('card__modal-show')
      document.querySelector('.card__modal-window').classList.remove('card__modal-hide')
    } else {
      document.querySelector('.card__modal-window').classList.add('card__modal-hide')
    }
  });

  const modal = document.querySelector('.card__modal-window')
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("card__modal-close")) {
        document.querySelector('.card__modal-window').classList.add('card__modal-hide')
        
    }});
  
    