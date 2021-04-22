
import { tarot } from '../data/card-meanings.js'
import { getUser, findByName, saveUser } from '../utils.js'

const shuffledDeck = shuffle(tarot);
const pickCardButton = document.querySelector('#pick-card-button');
const user = getUser()
const pastButton = document.querySelector('.past-readings-button'); 

const nameHeader = document.querySelector('#name-display')
const birthdayHeader = document.querySelector('#birthday-display')

nameHeader.textContent = user.name
birthdayHeader.textContent = user.birthday

let cardToFlipContainer0 = document.querySelectorAll('.flip-container')[0];
let cardToFlip0 = document.querySelectorAll('.inner-flip-container')[0];

// cardToFlipContainer0.addEventListener('click', () => {
//     cardToFlip0.classList.toggle('flip');
// });

let cardToFlipContainer1 = document.querySelectorAll('.flip-container')[1];
let cardToFlip1 = document.querySelectorAll('.inner-flip-container')[1];


let cardToFlipContainer2 = document.querySelectorAll('.flip-container')[2];
let cardToFlip2 = document.querySelectorAll('.inner-flip-container')[2];



export function shuffle(array) {
  // i is the card we are swapping with the randomly chosen card
  let i = 0;
  // j is the randomly chosen card
  let j = 0;
  // temp is the "holder" 
  let temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}

export function nineCards(shuffledDeck) {
  const user = getUser();
  const userChoices = user.chosenCards.length;

  console.log(user.chosenCards);

  if (userChoices === 0) {

    return [shuffledDeck[0], shuffledDeck[1], shuffledDeck[2]];
  }

  else if (userChoices === 1) {

    return [shuffledDeck[3], shuffledDeck[4], shuffledDeck[5]];
  }

  else if (userChoices === 2) {

    return [shuffledDeck[6], shuffledDeck[7], shuffledDeck[8]];
  }

  else if (userChoices === 3) {
    window.location = '../results-page/index.html'
  }

};

function createCard() {
  const user = getUser();

  const radio1 = document.querySelector('#tarot1');
  const radio2 = document.querySelector('#tarot2');
  const radio3 = document.querySelector('#tarot3');

  const label1 = document.querySelector('#first-card-label');
  const label2 = document.querySelector('#second-card-label');
  const label3 = document.querySelector('#third-card-label');

  const threeCards = nineCards(shuffledDeck);

  const cardImg1 = document.querySelector('#card1');
  const revealedCard1 = document.querySelector('#revealed-card-1')

  cardImg1.src = '../images/main-deck/card-back.png';
  if (user.deck === 'classic') {
    revealedCard1.src = threeCards[0].img;
  } else if (user.deck === 'cat') {
    revealedCard1.src = threeCards[0].catimg;
  }

  radio1.value = threeCards[0].name;

  const cardImg2 = document.querySelector('#card2');
  const revealedCard2 = document.querySelector('#revealed-card-2');

  cardImg2.src = '../images/main-deck/card-back.png';
  if (user.deck === 'classic') {
    revealedCard2.src = threeCards[1].img;
  } else if (user.deck === 'cat') {
    revealedCard2.src = threeCards[1].catimg;
  };

  radio2.value = threeCards[1].name;

  const cardImg3 = document.querySelector('#card3');
  const revealedCard3 = document.querySelector('#revealed-card-3');

  cardImg3.src = '../images/main-deck/card-back.png';
  if (user.deck === 'classic') {
    revealedCard3.src = threeCards[2].img;
  } else if (user.deck === 'cat') {
    revealedCard3.src = threeCards[2].catimg;
  };

  radio3.value = threeCards[2].name;
}

createCard();

pickCardButton.addEventListener('click', () => {
  const selectedButton = document.querySelector('input:checked');
  const user = getUser();
  user.chosenCards.push(selectedButton.value);
  saveUser(user);

  const cardToFlip = selectedButton.parentElement.parentElement;

  cardToFlip.classList.toggle('flip');

  setTimeout(() => {
    cardToFlip.classList.toggle('flip');
  }, 3000);

  setTimeout(() => {
    nineCards(shuffledDeck);
    createCard();
  }, 3600)


})

if (user.pastReadings.length >= 1){

  pastButton.classList.toggle('past-readings-button');


}

