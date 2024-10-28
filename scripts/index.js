import { initialCards } from './cards.js';

const cardTemplate = document.querySelector('#card-template').content;

const placesList = document.querySelector('.places__list');

function createCard(initialCard, deleteCard) {
    const card = cardTemplate.cloneNode(true);

    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardDeleteButton = card.querySelector('.card__delete-button');

    cardImage.src = initialCard.link;
    cardImage.alt = initialCard.name;
    cardTitle.textContent = initialCard.name;

    cardDeleteButton.addEventListener('click', () => {
        const cardToDelete = cardDeleteButton.closest('.places__item');
        deleteCard(cardToDelete);
    });

    return card;
}

function deleteCard(card) {
    card.remove();
}

initialCards.forEach(initialCard => {
    const cardElement = createCard(initialCard, deleteCard);
    placesList.append(cardElement);
});