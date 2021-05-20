
import { tarot } from '../data/card-meanings.js';
import { getUser, saveUser } from '../utils.js';

const shuffledDeck = shuffle(tarot);
const user = getUser();

const pastButton = document.querySelector('.past-readings-button');
const pickCardButton = document.querySelector('#pick-card-button');
const nameHeader = document.querySelector('#name-display');
const birthdayHeader = document.querySelector('#birthday-display');

nameHeader.textContent = user.name;
birthdayHeader.textContent = user.birthday;

// nice shufflin'!
export function shuffle(array) {
  // i is the card we are swapping with the randomly chosen card
    let i = 0;
  // j is the randomly chosen card
    let j = 0;
  // temp is the "holder" 
    let temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function nineCards(shuffledDeck) {

    const userChoices = user.chosenCards.length;

    if (userChoices === 3) {
        window.location = '../results-page/index.html';
    }
  
    // and here's a terrible code golf way to do it, levereging the numbers 0, 1, 2 as nice indicies for an array
    return [
        shuffledDeck.slice(0, 3),
        shuffledDeck.slice(3, 6),
        shuffledDeck.slice(6, 9)
    ][userChoices];

    // if (userChoices === 0) {
    //     // this looks super readable--nice work avoiding the more unscrutable .push syntax!
    //     // return [shuffledDeck[0], shuffledDeck[1], shuffledDeck[2]];
    //     // ... though on second thought it might be nicer to use a slice here
    //     return shuffledDeck.slice(0, 3);
    // }

    // else if (userChoices === 1) {
    //     return shuffledDeck.slice(3, 6);
    // }

    // else if (userChoices === 2) {
    //     return shuffledDeck.slice(6, 9);


}

function createCard() {

    const radio1 = document.querySelector('#tarot1');
    const radio2 = document.querySelector('#tarot2');
    const radio3 = document.querySelector('#tarot3');
    const threeCards = nineCards(shuffledDeck);
    const radios = [radio1, radio2, radio3];

    // you could probably do a clever thing with a loop here to reduce duplication
    threeCards.forEach((card, i) => {
        const cardImg = document.querySelector(`#card${i + 1}`);
        const revealedCard1 = document.querySelector(`revealed-card-${i + 1}`);
        cardImg.src = '../images/main-deck/card-back.png';

        const imgProp = user.deck === 'classic' ? 'img' : 'catimg';

        revealedCard1.src = threeCards[i][imgProp];
    
        radios[i].value = threeCards[i].name;
    });}

createCard();

pickCardButton.addEventListener('click', () => {
    const selectedButton = document.querySelector('input:checked');
    const cardToFlip = selectedButton.parentElement.parentElement;

    user.chosenCards.push(selectedButton.value);

    saveUser(user);

    pickCardButton.disabled = true;

    cardToFlip.classList.toggle('flip');

    setTimeout(() => {
        cardToFlip.classList.toggle('flip');
    }, 3000);

    setTimeout(() => {
        pickCardButton.disabled = false;
        nineCards(shuffledDeck);
        createCard();
    }, 3600);
});

if (user.pastReadings.length) {
    pastButton.classList.toggle('past-readings-button');
}

pastButton.addEventListener('click', () => {
    user.chosenCards = [];
    saveUser(user);
    window.location = '../past-readings/index.html';
});
