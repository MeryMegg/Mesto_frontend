/* Переменные */

const placesList = document.querySelector('div.root .places-list');
const popup = document.querySelector('div.root .popup');
const openFormButton = document.querySelector('div.root .profile .user-info__button');
const closeFormButton = popup.querySelector('.popup__close');
const addButton = popup.querySelector('.popup__button');
const cardContainer = placesList.querySelector('.place-card');
const form = document.forms.new;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
  }
];

/* Функции */

// Добавляет карточки "из коробки"
function addCardOutOfTheBox() {
  for (let card of initialCards) {
    const cardContainer = createPlaceCard(card.name, card.link);
    placesList.appendChild(cardContainer);
  }
}

//Создаёт карточку и возвращает ее
function createPlaceCard(nameValue, linkValue) {
  const cardContainer = document.createElement('div');
  const placeCardImage = document.createElement('div');
  const deleteButton = document.createElement('button');
  const placeCardDescription = document.createElement('div');
  const cardName = document.createElement('h3');
  const likeButton = document.createElement('button');

  cardContainer.classList.add('place-card');
  placeCardImage.classList.add('place-card__image');
  placeCardImage['style']['background-image'] = `url(${linkValue})`;
  deleteButton.classList.add('place-card__delete-icon');
  placeCardDescription.classList.add('place-card__description');
  cardName.classList.add('place-card__name');
  cardName.textContent = nameValue;
  likeButton.classList.add('place-card__like-icon');

  placeCardImage.appendChild(deleteButton);

  placeCardDescription.appendChild(cardName);
  placeCardDescription.appendChild(likeButton);

  cardContainer.appendChild(placeCardImage);
  cardContainer.appendChild(placeCardDescription);

  closeForm();

  return cardContainer;
}

// Добавляет карточку
function addCard(event) {
  event.preventDefault();

  const name = form.elements.name;
  const link = form.elements.link;
  const cardContainer = createPlaceCard(name.value, link.value);

  placesList.appendChild(cardContainer);
  form.reset();
}

// Показывает форму
function openForm() {
  popup.classList.add('popup_is-opened');
}

// Скрывает форму
function closeForm() {
  popup.classList.remove('popup_is-opened');
}

// обработчик клика по сердечку
function likeHandler(event) {
  if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }
}

// обработчик клика по корзине
function deleteHandler(event) {
  if (event.target.classList.contains('place-card__delete-icon')) {
    placesList.removeChild(event.target.parentNode.parentNode);
  }
}

//Слушатели событий
openFormButton.addEventListener('click', openForm);
closeFormButton.addEventListener('click', closeForm);
form.addEventListener('submit', addCard);
placesList.addEventListener('click', likeHandler);
placesList.addEventListener('click', deleteHandler);

/* Вызовы функций */

addCardOutOfTheBox(); 