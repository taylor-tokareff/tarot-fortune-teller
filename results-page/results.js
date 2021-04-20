import { findByName, getUser } from '../utils.js'
import { tarot } from '../data/card-meanings.js'
// Create a function thats gunna take in the names in the local storage and then its going to use the findbyname and compare those names to the data set to inject those cards to the results based on their position in the array.
// We also want to display card names for past, present, future.


const user = getUser()

const cardsToInject = user.chosenCards

const resultsParagraph = document.querySelector('#results-paragraph')
const pastCardTitle = document.querySelector('#past-card-title')
const presentCardTitle = document.querySelector('#present-card-title')
const futureCardTitle = document.querySelector('#future-card-title')

const pastImageContainer = document.querySelector('#past-card-img')
const presentImageContainer = document.querySelector('#present-card-img')
const futureImageContainer = document.querySelector('#future-card-img')

const pastLabel = document.querySelector('#past-label')
const presentLabel = document.querySelector('#present-label')
const futureLabel = document.querySelector('#future-label')

const pastCardItem = findByName(tarot, user.chosenCards[0])
const presentCardItem = findByName(tarot, user.chosenCards[1])
const futureCardItem = findByName(tarot, user.chosenCards[2])

pastImageContainer.src = pastCardItem.img
presentImageContainer.src = presentCardItem.img
futureImageContainer.src = futureCardItem.img


pastLabel.append(pastImageContainer)
presentLabel.append(presentImageContainer)
futureLabel.append(futureImageContainer)


let results = 'The cards have revealed your fate, '

results += user.name + '. ' + pastCardItem.past + ' ' + presentCardItem.present + ' ' + futureCardItem.future;

resultsParagraph.textContent = results;

