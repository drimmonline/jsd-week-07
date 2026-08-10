// Form Events
// Open index.html and work through these in order.

// TODO 1: Select #signup-form, #name-input, #char-count, and #feedback.
const signupForm = document.getElementById("signup-form");
const nameInput = document.querySelector("#name-input");
const charCount = document.querySelector("#char-count");
const feedbackInput = document.querySelector("#char-count");

// TODO 2: Add an "input" listener on #name-input. Every time the user types,
// set char-count's textContent to the current length of the input's value
// (name-input.value.length).
nameInput.addEventListener("input", (event) => {
  event.preventDefault();
  charCount.textContent = nameInput.value.length;
  console.log(charCount.textContent);
});

// TODO 3: Add a "submit" listener on #signup-form. Inside it:
//   - call event.preventDefault() so the page doesn't reload
//   - read and trim the name input's value
//   - if it's empty, set feedback's textContent to "Name required"
//   - otherwise, set feedback's textContent to `Welcome, ${name}!`

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get("name-input");
  console.log(`${username} ${count}`);
});
