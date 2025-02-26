import '../styles/main.css'
const page = document.querySelector("body");
const addButton = page.querySelector("#addButton");
const cardTemplate = page.querySelector("#cardTemplate").content;
const cardParent = page.querySelector("#cardsMainContainer");
let warnNotif = page.querySelector("#warning");

let cardsData = [];

let cardsExample = [
  {
    title: 'Напоминание',
    imageSrc: '/assets/images/NotifApp.png',
    description: 'Данное приложение напоминает про работы, которые вы должны сдать преподавателям в заданные дедлайны'
  },
  {
    title: 'Ага',
    imageSrc: '/assets/images/aga.png',
    description: 'Данное приложение просто бесполезно, оно ничего не делает, лишь занимает место в памяти'
  },
]

function createExampleCards() {
  cardsExample.forEach(data => {
    const cloneCard = cardTemplate.cloneNode(true)
    cloneCard.querySelector('.card__heading').textContent = data.title
    cloneCard.querySelector('.card__image').src = data.imageSrc
    cloneCard.querySelector('.card__description').textContent = data.description

    const likeButton = cloneCard.querySelector(".card__button-static")
        likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("like-pressed");
        likeButton.classList.toggle("like-unpressed");
      });

    cloneCard.querySelector('.delete-button').addEventListener('click', function () {
      this.closest('.card__container').remove()
    })

    cardParent.appendChild(cloneCard)
  })
}


createExampleCards(cardsExample)

function addObjectToArray() {
  let headingInput = page.querySelector("#heading").value;
  let fileSelect = page.querySelector("#fileSelect").files[0];
  let descriptionInput = page.querySelector("#description").value;

  if (!headingInput || !descriptionInput || !fileSelect) {
    warnNotif.textContent = "Пожалуйста, заполните все поля!";
    warnNotif.style.display = "block";
    return;
  } else {
    warnNotif.style.display = "none";
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
  addObjectToArray();
  const newClonedCard = cloneCardWithData(cardsData[0].title, cardsData[0].imageSrc, cardsData[0].description)
  cardParent.appendChild(newClonedCard);
});
