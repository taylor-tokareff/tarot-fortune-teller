import { findByName, getUser, saveUser } from '../utils.js'
import { tarot } from '../data/card-meanings.js'
// Create a function thats gunna take in the names in the local storage and then its going to use the findbyname and compare those names to the data set to inject those cards to the results based on their position in the array.
// We also want to display card names for past, present, future.


const user = getUser()

const cardsToInject = user.chosenCards
const pastReadingButton = document.querySelector('.past-readings-button')

const resultsParagraph = document.querySelector('#results-paragraph')
const pastCardTitle = document.querySelector('#past-card-title')
const presentCardTitle = document.querySelector('#present-card-title')
const futureCardTitle = document.querySelector('#future-card-title')

const nameHeader = document.querySelector('#name-display')
const birthdayHeader = document.querySelector('#birthday-display')


const pastImageContainer = document.querySelector('#past-card-img')
const presentImageContainer = document.querySelector('#present-card-img')
const futureImageContainer = document.querySelector('#future-card-img')

const pastLabel = document.querySelector('#past-label')
const presentLabel = document.querySelector('#present-label')
const futureLabel = document.querySelector('#future-label')

const pastCardItem = findByName(tarot, user.chosenCards[0])
const presentCardItem = findByName(tarot, user.chosenCards[1])
const futureCardItem = findByName(tarot, user.chosenCards[2])

nameHeader.textContent = user.name
birthdayHeader.textContent = user.birthday

if (user.deck === 'classic') {
    pastImageContainer.src = pastCardItem.img;
    presentImageContainer.src = presentCardItem.img;
    futureImageContainer.src = futureCardItem.img;
} else if (user.deck === 'cat') {
    pastImageContainer.src = pastCardItem.catimg;
    presentImageContainer.src = presentCardItem.catimg;
    futureImageContainer.src = futureCardItem.catimg;
}


pastLabel.append(pastImageContainer)
presentLabel.append(presentImageContainer)
futureLabel.append(futureImageContainer)


let results = 'The cards have revealed your fate, '

results += user.name + ', born on ' + user.birthday + '. ' + pastCardItem.past + ' ' + presentCardItem.present + ' ' + futureCardItem.future;

resultsParagraph.textContent = results;

const newReadingButton = document.querySelector("#another-reading");

newReadingButton.addEventListener('click', () => {
    // user.chosenCards.forEach(card => user.pastReadings.push(card));
    user.pastReadings.push({ ...user.chosenCards });
    user.chosenCards = [];
    saveUser(user);
    window.location = '../fortune-page/index.html';
});

pastReadingButton.addEventListener('click', () => {
    // user.chosenCards.forEach(card => user.pastReadings.push(card));
    user.pastReadings.push({ ...user.chosenCards });
    user.chosenCards = [];
    saveUser(user);
    window.location = '../past-readings/index.html';
});
