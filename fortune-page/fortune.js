
import { tarot } from '../data/card-meanings.js'
import { getUser } from '../utils.js'

const shuffledDeck = shuffle(tarot);



// newArray = [];

// function chooseRandomCards(cards) {

// choose 3 random cards
/*  num = Math.floor(Math.random() * tarot.length);
 for (let i = 9; i > 0; i--) {
     num = Math.floor(Math.random() * tarot.length);
 } */
// choose another 3 random cards (no repeats)
// choose another 3 random cards (no repeats)
//}


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
  const user = getUser()
  const userChoices = user.chosenCards.length;

  if (userChoices === 0) {

    return [shuffledDeck[0], shuffledDeck[1], shuffledDeck[2]];
  }

  else if (userChoices === 1) {

    return [shuffledDeck[3], shuffledDeck[4], shuffledDeck[5]];
  }

  else if (userChoices === 2) {

    return [shuffledDeck[6], shuffledDeck[7], shuffledDeck[8]];
  }

};

function createCard() {
  const radio1 = document.querySelector ('#past-card-img');
  const radio2 = document.querySelector ('#present-card-img');
  const radio3 = document.querySelector ('#future-card-img');

  const label1 = document.querySelector ('past-label');
  const label2 = document.querySelector ('present-label');
  const label3 = document.querySelector ('future-label');

const threeCards = nineCards(shuffledDeck);

const cardImg1 = document.querySelector('past-card-img');
cardImg1.src = threeCards[0].images/main-deck/card-back.png;
label1.append(cardImg1);
radio1.value = threeCards[0].name

const cardImg2 = document.querySelector('present-card-img');

const cardImg3 = document.querySelector('future-card-img');

}

createCard();




