const preview = document.querySelector(`.preview`);

const promoButton = preview.querySelector(`.promo__sign-up-button`);
const headerButton = preview.querySelector(`.bar__button`);

const popup = preview.querySelector(`.popup`);
const popupCloseButton = popup.querySelector(`.close-btn`);
const form = popup.querySelector(`form`);

const message = preview.querySelector(`.success-message`);
const messageCloseButton = message.querySelector(`.close-btn`);

const closePopupOnEsc = (evt) => {
  if (evt.key === `Escape`) {
    popup.classList.remove(`shown`);
    popup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, closePopupOnEsc);
  }
}

const closeMessageOnEsc = (evt) => {
  if (evt.key === `Escape`) {
    message.classList.remove(`shown`);
    message.classList.add(`hidden`);
    document.removeEventListener(`keydown`,closeMessageOnEsc)
  }
}

promoButton.addEventListener(`click`, () => {
  popup.classList.remove(`hidden`);
  popup.classList.add(`shown`);
  document.addEventListener(`keydown`, closePopupOnEsc);
});

headerButton.addEventListener(`click`, () => {
  popup.classList.remove(`hidden`);
  popup.classList.add(`shown`);
  document.addEventListener(`keydown`, closePopupOnEsc);
});

popupCloseButton.addEventListener(`click`, () => {
  popup.classList.remove(`shown`);
  popup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, closePopupOnEsc);
});

messageCloseButton.addEventListener(`click`, () => {
  message.classList.remove(`shown`);
  message.classList.add(`hidden`);
  document.removeEventListener(`keydown`,closeMessageOnEsc)
});

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  popup.classList.remove(`shown`);
  popup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, closePopupOnEsc);

  message.classList.remove(`hidden`);
  message.classList.add(`shown`);

  document.addEventListener(`keydown`, closeMessageOnEsc)
});
