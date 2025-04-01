export default document.getElementById('cardFormEditCard').addEventListener('submit', (e) => {
    e.preventDefault()
    const editCardHeading = document.getElementById('editCardHeading').value
    const editCardDescription = document.getElementById('editCardDescription').value
    editCardHeading = e.target.closest('.card__heading').textContent
    editCardDescription = e.target.closest('.card__description').textContent
})