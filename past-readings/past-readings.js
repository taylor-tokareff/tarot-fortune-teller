import { getUser, findByName } from "../utils.js";

import { tarot } from "../data/card-meanings.js"

//Get User()
//Place to put past, present and future card
//place to put associated fortune paragraph
//grab past readings array - an array of objects
//Use forloop  for each object in past readings array
//grab each key/value pair
//Use keyvalue pairs to display images and paragraph



const user = getUser()

const pastReadings = user.pastReadings

const divContainer = document.querySelector('#past-readings-container')

for (let item of pastReadings) {
    const pastCardName = item[0];
    const presentCardName = item[1];
    const futureCardName = item[2];

    const pastCardItem = findByName(tarot, pastCardName);
    const presentCardItem = findByName(tarot, presentCardName);
    const futureCardItem = findByName(tarot, futureCardName);

    const pastImageContainer = document.createElement('img');
    const presentImageContainer = document.createElement('img');
    const futureImageContainer = document.createElement('img');

    if (user.deck === 'classic') {
        pastImageContainer.src = pastCardItem.img;
        presentImageContainer.src = presentCardItem.img;
        futureImageContainer.src = futureCardItem.img;
    } else if (user.deck === 'cat') {
        pastImageContainer.src = pastCardItem.catimg;
        presentImageContainer.src = presentCardItem.catimg;
        futureImageContainer.src = futureCardItem.catimg;
    }

    const readingPara = document.createElement('p');

    let results = 'The cards have revealed your fate, '

    results += user.name + ', born on ' + user.birthday + '. ' + pastCardItem.past + ' ' + presentCardItem.present + ' ' + futureCardItem.future;

    readingPara.textContent = results;

    divContainer.append(pastImageContainer, presentImageContainer, futureImageContainer, readingPara);

}


//for in loop
