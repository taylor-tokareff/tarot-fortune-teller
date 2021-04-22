import { getUser, saveUser } from '../utils.js'

const user = getUser()
const anotherReading = document.querySelector('#another-reading')

anotherReading.addEventListener('click', () => {

    user.pastReadings.push({ ...user.chosenCards });
    user.chosenCards = [];
    saveUser(user);
    window.location = '../fortune-page/index.html';
});
