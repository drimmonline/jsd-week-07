const pokemon = document.getElementById("pokedek");
const list = document.getElementById("pokemon-list");

async function fetchAPI(number) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    if (!response.ok) {
      throw new Error("Could not fetch a resource");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
// random pokemon
// add name
// remove when click
// add some styles to that

pokemon.addEventListener("click", async () => {
  const number = Math.floor(Math.random() * 1000) + 1;
  const data = await fetchAPI(number);
  console.log(data);
  //create list
  const li = document.createElement("li");
  //render html
  li.innerHTML = `
  <h1 id="pokemon-name">${data.name}</h1>
  <img class="img-src" /> 
  <button class="edit-btn">random</button>
  <button class="delete-btn">delete</button>`;
  li.classList.add("list-stle");
  //select list
  const deleteBtn = li.querySelector(".delete-btn");
  const editBtn = li.querySelector(".edit-btn");
  const pokemonname = li.querySelector("#pokemon-name");
  const imglist = li.querySelector(".img-src");

  //select src
  imglist.src = data.sprites.front_default;
  //edit
  editBtn.addEventListener("click", async () => {
    const newRandom = prompt("เลือกเลขคุณชอบ (1-1000):");
    if (newRandom !== null && newRandom.trim() !== "" && !isNaN(newRandom)) {
      try {
        pokemonname.textContent = "Loading...";

        const newData = await fetchAPI(Number(newRandom));

        pokemonname.textContent = newData.name;
        imglist.src = newData.sprites.front_default;
        console.log("Updated to:", newData.name);
      } catch (error) {
        // กรณีหาเลข ID นั้นไม่เจอ หรือ API ล่ม
        pokemonname.textContent = "Error: Pokemon not found";
        console.error(error);
      }
    } else {
      alert("กรุณากรอกเฉพาะตัวเลขเท่านั้น!");
    }
  });
  //remove
  deleteBtn.addEventListener("click", () => li.remove());
  //add list in pokemon-list
  list.appendChild(li);
});
