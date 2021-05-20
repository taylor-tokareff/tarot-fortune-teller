import { getUser, findByName } from '../utils.js';

import { tarot } from '../data/card-meanings.js';

//Get User()
//Place to put past, present and future card
//place to put associated fortune paragraph
//grab past readings array - an array of objects
//Use forloop  for each object in past readings array
//grab each key/value pair
//Use keyvalue pairs to display images and paragraph

const user = getUser();

const nameHeader = document.querySelector('#name-display');
const birthdayHeader = document.querySelector('#birthday-display');

nameHeader.textContent = user.name;
birthdayHeader.textContent = user.birthday;

const anotherReading = document.querySelector('#another-reading');

const pastReadings = user.pastReadings;

const divContainer = document.querySelector('#past-readings-container');

for (let item of pastReadings) {
    // you could destructure here if you wanna feel fancy
    const [pastCardName, presentCardName, futureCardName] = item;
    const pastCardItem = findByName(tarot, pastCardName);
    const presentCardItem = findByName(tarot, presentCardName);
    const futureCardItem = findByName(tarot, futureCardName);

    const pastImageContainer = document.createElement('img');
    const presentImageContainer = document.createElement('img');
    const futureImageContainer = document.createElement('img');

    const imgProp = user.deck === 'classic' ? 'img' : 'catimg';

    pastImageContainer.src = pastCardItem[imgProp];
    presentImageContainer.src = presentCardItem[imgProp];
    futureImageContainer.src = futureCardItem[imgProp];

    const readingPara = document.createElement('p');

    // lots of code duplication between this file and results.js. You should abstract the repeated work into a function that you call in bother places
    let results = 'The cards have revealed your fate, ';

    // would like to see `some ${string templates}` here instead of + concatination
    results += user.name + ', born on ' + user.birthday + '. ' + pastCardItem.past + ' ' + presentCardItem.present + ' ' + futureCardItem.future;

    readingPara.textContent = results;

    divContainer.append(pastImageContainer, presentImageContainer, futureImageContainer, readingPara);

}

anotherReading.addEventListener('click', () => {
    window.location = '../fortune-page/index.html';
});




