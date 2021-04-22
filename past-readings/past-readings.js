import { getUser } from "../utils.js";

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
    const pastCard = item[0]
    const presentCard = item[1]
    const futureCard = item[2]
    console.log(item, pastCard)
}

//for in loop
