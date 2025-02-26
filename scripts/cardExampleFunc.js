export function createExampleCards(obj, template, parent) {
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
  
  