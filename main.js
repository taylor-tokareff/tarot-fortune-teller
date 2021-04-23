import { getUser, saveUser } from './utils.js'

const userInfoForm = document.querySelector('form');

userInfoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInput = new FormData(userInfoForm);
    const name = userInput.get('name-input');
    const birthDay = userInput.get('birthday-input');
    const deck = userInput.get('deck-choice');

    let user = getUser();
    if (!user) {
        user = {
            name: name,
            birthday: birthDay,
            chosenCards: [],
            pastReadings: [],
            deck: deck
        };
    }

    saveUser(user);

    window.location = './fortune-page/index.html';
});

