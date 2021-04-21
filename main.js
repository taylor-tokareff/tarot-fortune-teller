import { getUser, saveUser } from './utils.js'

const userInfoForm = document.querySelector('form')

userInfoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInput = new FormData(userInfoForm);
    const name = userInput.get('name-input');
    const birthDay = userInput.get('birthday-input');

    let user = getUser();
    if (!user) {
        user = {
            name: name,
            birthday: birthDay,
            chosenCards: [],
            pastReadings: []
        };
    }
    

    saveUser(user);

    window.location = './fortune-page/index.html';

});

