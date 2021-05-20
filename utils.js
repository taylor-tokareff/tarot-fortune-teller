
export function saveUser(user) {
    const saveUserData = JSON.stringify(user);
    localStorage.setItem('user', saveUserData);
}

export function getUser() {
    const getUserData = localStorage.getItem('user');
    if (!getUserData) return null; // null is dangerous to return here. what if something tries to grab a property off of null somewhere?
    const user = JSON.parse(getUserData);
    return user;
}

export function findByName(array, name) {
    for (let card of array) {
        if (card.name === name) {
            return card;
        }
    }
}