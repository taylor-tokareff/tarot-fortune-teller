
import { tarot } from '../data/card-meanings.js'
import { getUser, findByName, saveUser } from '../utils.js'

const shuffledDeck = shuffle(tarot);
const pickCardButton = document.querySelector('#pick-card-button');


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

};

function createCard() {
  const radio1 = document.querySelector ('#tarot1');
  const radio2 = document.querySelector ('#tarot2');
  const radio3 = document.querySelector ('#tarot3');

  const label1 = document.querySelector ('#first-card-label');
  const label2 = document.querySelector ('#second-card-label');
  const label3 = document.querySelector ('#third-card-label');

const threeCards = nineCards(shuffledDeck);

const cardImg1 = document.querySelector('#card1');


cardImg1.src = '../images/main-deck/card-back.png';
label1.append(cardImg1,radio1);

radio1.value = threeCards[0].name;
console.log(radio1.value);

const cardImg2 = document.querySelector('#card2');

cardImg2.src = '../images/main-deck/card-back.png';
label2.append(cardImg2,radio2);

radio2.value = threeCards[1].name;
console.log(radio2.value);


const cardImg3 = document.querySelector('#card3');
cardImg3.src = '../images/main-deck/card-back.png'
label3.append(cardImg3,radio3);

radio3.value = threeCards[2].name;
console.log(radio3.value);

}

createCard();

pickCardButton.addEventListener('click', () => {
  const selectedButton = document.querySelector('input:checked');
  const user = getUser();
  user.chosenCards.push(selectedButton.value);
  saveUser(user);

  // reset cards
});
