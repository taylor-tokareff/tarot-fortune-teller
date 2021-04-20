import { findByName, getUser } from '../utils.js'
import { tarot } from '../data/card-meanings.js'
// Create a function thats gunna take in the names in the local storage and then its going to use the findbyname and compare those names to the data set to inject those cards to the results based on their position in the array.
// We also want to display card names for past, present, future.


const user = getUser()

const cardsToInject = user.chosenCards

const pastCardTitle = document.querySelector('#past-card-title')
const presentCardTitle = document.querySelector('#present-card-title')
const futureCardTitle = document.querySelector('#future-card-title')

const pastImageContainer = document.querySelector('#past-card-img')
const presentImageContainer = document.querySelector('#present-card-img')
const futureImageContainer = document.querySelector('#future-card-img')

const pastCardItem = findByName(tarot, user.chosenCards[0])
const presentCardItem = findByName(tarot, user.chosenCards[1])
const futureCardItem = findByName(tarot, user.chosenCards[2])

const pastCardImage = pastCardItem.img
const presentCardImage = presentCardItem.img
const futureCardImage = futureCardItem.img

pastImageContainer.append(pastCardImage)

pastCardTitle.textContent = user.chosenCards[0]
presentCardTitle.textContent = user.chosenCards[1]
futureCardTitle.textContent = user.chosenCards[2]

