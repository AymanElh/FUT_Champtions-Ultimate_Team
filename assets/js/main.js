// array to strore palyers
let players = []

const formation = document.getElementById("formation-select");
const addBtn = document.getElementById("add-player");
const squad = document.getElementById("squad-container");


// fct to change formaiton
function changeFormation(formation) {

  squad.classList.remove("formation442", "formation433");
  if(formation === "433") {
    squad.classList.add("formation433")
  } else if (formation === "442") {
    squad.classList.add("formation442")
  }
}
console.log(formation.value);

// addBtn.addEventListener("click", () => {
//   changeFormation(formation.value);
// })

// changeFormation(formation.value);


// Show the right form for the user
const plusBtns = document.querySelectorAll(".plus-btn");

plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");

    document.getElementById("gk-statistics").classList.add("hidden");
    document.getElementById("gk-statistics").classList.remove("flex");

    document.getElementById("player-statistics").classList.add("hidden");
    document.getElementById("player-statistics").classList.remove("flex");

    document.getElementById("player-form").classList.replace("hidden", "flex");

    if (type === "gk") {
      document.getElementById("gk-statistics").classList.replace("hidden", "flex");
    } else {
      document.getElementById("player-statistics").classList.replace("hidden", "flex");
    }
  });
});


function addPlayer() {
  
}

document.addEventListener("DOMContentLoaded", () => {
    changeFormation(formation.value)
})