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
// console.log(formation.value);

let currentBtn = null;

// Show the right form for the user
const plusBtns = document.querySelectorAll(".plus-btn");

plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");
    currentBtn = btn;

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

document.getElementById("add-player").addEventListener("click", () => {
  if(currentBtn) {
    addPlayer(currentBtn);
  }
  // console.log(players)
})


function addPlayer(btn) {
  console.log(btn.parentElement.parentElement.classList[1])
  let type = btn.getAttribute("data-type");


  const playerName = document.getElementById("name-input").value.trim();
  const playerPhoto = document.getElementById("photo-input").files[0]?.name || "";
  const playerNationality = document.getElementById("nationality-input").value.trim();
  const flag = document.getElementById("flag-input").files[0]?.name || "";
  const playerClub = document.getElementById("club-name-input").value.trim();
  const clubLogo = document.getElementById("club-logo-input").files[0]?.name || "";
  const playerRating = document.getElementById("rating-input").value.trim();

  let newPlayer = {
    name: playerName,
    photo: playerPhoto,
    nationality: playerNationality,
    flag: flag,
    club: playerClub,
    clubLogo: clubLogo,
    position: type,
    rating: playerRating,
    stats: {}
  }

  if(type === "gk") {
    newPlayer.stats.diving = document.getElementById("diving-input").value.trim();
    newPlayer.stats.handling = document.getElementById("handling-input").value.trim();
    newPlayer.stats.kicking = document.getElementById("kicking-input").value.trim();
    newPlayer.stats.reflexes = document.getElementById("reflexes-input").value.trim();
    newPlayer.stats.speed = document.getElementById("speed-input").value.trim();
    newPlayer.stats.positioning = document.getElementById("positioning-input").value.trim();
  } else {
    newPlayer.stats.pace = document.getElementById("pace-input").value.trim();
    newPlayer.stats.shooting = document.getElementById("shooting-input").value.trim();
    newPlayer.stats.passing = document.getElementById("passing-input").value.trim();
    newPlayer.stats.dribbling = document.getElementById("dribbling-input").value.trim();
    newPlayer.stats.defending = document.getElementById("defending-input").value.trim();
    newPlayer.stats.physical = document.getElementById("pysical-input").value.trim();
  }

  // reset inputs
  resetInputs();
  document.getElementById("player-form").classList.add("hidden")

  players.push(newPlayer);
  console.log(players)
}

function resetInputs() {
  document.getElementById("name-input").value = "";
  document.getElementById("photo-input").value = "";
  document.getElementById("nationality-input").value = "";
  document.getElementById("flag-input").value = "";
  document.getElementById("club-name-input").value = "";
  document.getElementById("club-logo-input").value = "";
  document.getElementById("rating-input").value = "";
  document.getElementById("diving-input").value = "";
  document.getElementById("handling-input").value = "";
  document.getElementById("kicking-input").value = "";
  document.getElementById("reflexes-input").value = "";
  document.getElementById("speed-input").value = "";
  document.getElementById("positioning-input").value = "";
  document.getElementById("pace-input").value = "";
  document.getElementById("shooting-input").value = "";
  document.getElementById("passing-input").value = "";
  document.getElementById("dribbling-input").value = "";
  document.getElementById("defending-input").value = "";
  document.getElementById("pysical-input").value = "";
}

function addPlayerToCard(player) {
  
}


document.getElementById("formation-select").addEventListener("change", () => {
    changeFormation(formation.value)
})