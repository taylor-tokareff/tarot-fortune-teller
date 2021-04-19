
import { tarot } from '../data/card-meanings.js'

const shuffledDeck = shuffle(tarot);
console.log(shuffledDeck);

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


export function shuffle (array) {
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

