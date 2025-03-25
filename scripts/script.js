import '../styles/main.css'
import {cardsExample, createExampleCards } from './cardExampleFunc.js';


const page = document.querySelector("body");
const addButton = page.querySelector("#addButton");
const cardTemplate = page.querySelector("#cardTemplate").content;
const cardParent = page.querySelector("#cardsMainContainer");
let warnNotif = page.querySelector("#warning");

let cardsData = [];

createExampleCards(cardsExample, cardTemplate, cardParent)

function addObjectToArray() {
  let headingInput = page.querySelector("#heading").value;
  let fileSelect = page.querySelector("#fileSelect").files[0];
  let descriptionInput = page.querySelector("#description").value;

  if (!headingInput || !descriptionInput || !fileSelect) {
    warnNotif.textContent = "Пожалуйста, заполните все поля!";
    return [];
  }

  let imageSrc = fileSelect ? URL.createObjectURL(fileSelect) : "";
 
  const newObject = {
    title: headingInput,
    imageSrc: imageSrc,
    description: descriptionInput,
  };

  cardsData.unshift(newObject);

  headingInput = page.querySelector("#heading").value = "";
  fileSelect = page.querySelector("#fileSelect").value = ""; //данные все еще сохраняются
  descriptionInput = page.querySelector("#description").value = "";
  return cardsData
}

function cloneCardWithData(title, image, description) {
  const cloneCard = cardTemplate.cloneNode(true);
  cloneCard.querySelector(".card__heading").textContent = title;
  cloneCard.querySelector(".card__image").src = image
  cloneCard.querySelector(".card__description").textContent = description;

      
        const likeButton = cloneCard.querySelector(".card__button-static")
        likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("like-pressed");
        likeButton.classList.toggle("like-unpressed");
      });
      
      cloneCard.querySelector('.delete-button').addEventListener('click', function() {
        this.closest('.card__container').remove();
      }); 
      return cloneCard
    }
    
addButton.addEventListener("click", function () {
  const newCardData = addObjectToArray(); 
  if (newCardData.length < 1) {
    alert("Заполните все поля");
    return;
  }
  const newClonedCard = cloneCardWithData(newCardData[0].title, newCardData[0].imageSrc, newCardData[0].description);
  
  cardParent.appendChild(newClonedCard);
});
