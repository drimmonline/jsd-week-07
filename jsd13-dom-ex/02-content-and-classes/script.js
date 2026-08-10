// Content, Attributes & Classes
// Open index.html and work through these in order.

// TODO 1: Select #heading and change its textContent to "Welcome!"
const changeHeader = document.getElementById("heading");
changeHeader.textContent = "Welcome";
// TODO 2: Select #bio (it currently reads "I am learning the DOM."). Set its
// innerHTML so the word "learning" is wrapped in a <strong> tag, i.e. the
// paragraph should read: I am <strong>learning</strong> the DOM.
const changeBio = document.getElementById("bio");
changeBio.innerHTML = `I am <strong>learning<strong>`;
// TODO 3: Select #card. Read its "class" attribute with getAttribute and
// console.log() it.
const changeClass = document.getElementById("card");
console.log(changeClass.getAttribute("class"));
// TODO 4: Add the "highlight" class to #card using classList.add, then
// console.log(card.className) to see it there. (You'll learn to do this in
// response to a click in the next exercise, 03-events-basics.)
card.classList.add("highlight");
//card.style.backgroundColor = "blue";
console.log(card);
// TODO 5: #card starts with a data-visits="0" attribute. Read the current
// value with card.dataset.visits, convert it to a number, add 1, write it
// back to card.dataset.visits, and console.log() the new value.
const cardItem = document.querySelector("#card");
const visits = Number(cardItem.dataset.visits) + 1;
cardItem.dataset.visits = visits;
console.log(cardItem.dataset.visits);
