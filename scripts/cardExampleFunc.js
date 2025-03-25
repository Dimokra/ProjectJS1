let cardsExample = [
  {
    title: 'Напоминание',
    imageSrc: '/assets/images/NotifApp.png',
    description: 'Данное приложение напоминает про работы, которые вы должны сдать преподавателям в заданные дедлайны'
  },
  {
    title: 'Ага',
    imageSrc:'/assets/images/Aga.png' ,
    description: 'Данное приложение просто бесполезно, оно ничего не делает, лишь занимает место в памяти'
  },
]

function createExampleCards(obj, template, parent) {
    obj.forEach(data => {
      const cloneCard = template.cloneNode(true)
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
  
      parent.appendChild(cloneCard)
    })
  }
  
  export {cardsExample, createExampleCards}