// array to strore palyers
let players = []
const formation = document.getElementById("formation-select");
const addBtn = document.getElementById("add-player");
const squad = document.getElementById("squad-container");

function showModal() {
    modal.classList.add("flex");
    modal.classList.remove("hidden");
}

function hideModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}
// fct to change formaiton
function changeFormation(formation) {
    squad.classList.remove("formation442", "formation433");
    if (formation === "433") {
        squad.classList.add("formation433")
    } else if (formation === "442") {
        squad.classList.add("formation442")
    }
}
// console.log(formation.value);
let currentBtn = null;
// Show the right form for the user
const plusBtns = document.querySelectorAll(".plus-btn");
const modal = document.getElementById("default-modal");
const form = document.getElementById("player-form");
const gkStats = document.getElementById("gk-statistics");
const playerStats = document.getElementById("player-statistics");

plusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-type");
        currentBtn = btn;
        const isSubPlayer = btn.closest(".subs-player")
        gkStats.classList.add("hidden");
        gkStats.classList.remove("flex");
        playerStats.classList.add("hidden");
        playerStats.classList.remove("flex");
        form.classList.replace("hidden", "flex");
        showModal();
        // check the player if is in the substitutions
        if (isSubPlayer) {
            console.log("It's a subplayer form");
            document.getElementById("player-position").classList.remove("hidden");
            
        } else {
            console.log("It's a main player form");
            document.getElementById("player-position").classList.add("hidden");
            if (type === "gk") {
                gkStats.classList.replace("hidden", "flex");
            } else {
                playerStats.classList.replace("hidden", "flex");
            }
        }
    });
});

// Check the select input on the select (gk or normal player)
const playerPosition = document.getElementById("position-input");

playerPosition.addEventListener("change", () => {

  if (playerPosition.value == "GK") {

    console.log("GK selected");
    gkStats.classList.replace("hidden", "flex");
    playerStats.classList.add("hidden")
  } else {
    console.log("Outfield player selected");
    playerStats.classList.replace("hidden", "flex");
    gkStats.classList.add("hidden")
  }
});

// add player btn event
document.getElementById("add-player").addEventListener("click", () => {
    if (currentBtn) {
      if (currentBtn.closest(".player")) {
        addPlayer(currentBtn);
        hideModal();
      } else if (currentBtn.closest(".subs-player")) {
        console.log("add sub funciton");
        addSubs();
        hideModal();
    }
    
    } 
})


function addPlayer(btn) {
    // console.log(btn);
    // console.log(btn.parentElement.parentElement) 
    let type = btn.getAttribute("data-type");
    const playerName = document.getElementById("name-input").value.trim();
    const playerPhoto = document.getElementById("photo-input").files[0];
    const playerNationality = document.getElementById("nationality-input").value.trim();
    const flag = document.getElementById("flag-input").files[0];
    const playerClub = document.getElementById("club-name-input").value.trim();
    const clubLogo = document.getElementById("club-logo-input").files[0];
    const playerRating = document.getElementById("rating-input").value.trim();
  
    // new player object
    let newPlayer = {
        name: playerName,
        photo: playerPhoto,
        nationality: playerNationality,
        flag: flag,
        club: playerClub,
        clubLogo: clubLogo,
        status: "main",
        position: type,
        rating: playerRating,
        stats: {}
    }
    if (type === "gk") {
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
    addPlayerToCard(newPlayer);
}

function resetInputs() {
    document.getElementById("name-input").value = "";
    document.getElementById("photo-input").value = "";
    document.getElementById("nationality-input").value = "";
    document.getElementById("flag-input").value = "";
    document.getElementById("club-name-input").value = "";
    document.getElementById("club-logo-input").value = "";
    document.getElementById("rating-input").value = "";
    document.getElementById("position-input").value = "";
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
    const playerCard = document.createElement("div");
    playerCard.id = `${player.position}-card`;
    playerCard.classList.add(
        "scale-[1]",
        "player-card",
        "relative",
        "w-full",
        "h-full",
        "bg-black/80",
        "rounded-md",
        "shadow-lg",
        "bg-green-500"
    )
    playerCard.style.backgroundImage = "url('/assets/img/badge_total_rush.webp')"; // Adjust path if needed
    playerCard.style.backgroundSize = "cover"; // Ensures the image covers the element
    playerCard.style.backgroundPosition = "center";


    playerCard.innerHTML = `
    <div
              class="relative w-[150px] h-[200px]  rounded-md shadow-lg"
            >
              <div
                class="absolute rounded-md"
                style="background-image: url('')"
              ></div>

              <div
                class="relative z-10 flex flex-col items-center justify-center h-full text-white p-2"
              >
                <div
                  class="w-[80px] h-[80px] rounded-full overflow-hidden mb-2"
                >
                  <img
                    src="https://cdn.sofifa.net/players/158/023/25_120.png"
                    alt="Player"
                    class="w-full h-full object-cover"
                  />
                </div>

                <p class="font-bold text-sm text-center">${player.name}</p>

                <div class="grid grid-cols-3 gap-1 mt-2 text-xs text-center">
                  <div>
                    <p>PAC</p>
                    <p>${player.stats.pace}</p>
                  </div>
                  <div>
                    <p>SHO</p>
                    <p>${player.stats.shooting}</p>
                  </div>
                  <div>
                    <p>PAS</p>
                    <p>${player.stats.shooting}</p>
                  </div>
                  <div>
                    <p>DRI</p>
                    <p>${player.stats.dribbling}</p>
                  </div>
                  <div>
                    <p>DEF</p>
                    <p>${player.stats.defending}</p>
                  </div>
                  <div>
                    <p>PHY</p>
                    <p>${player.stats.physical}</p>
                  </div>
                </div>
              </div>
            </div>
  `

// playerCard.innerHTML = `
//   <div class="relative w-full h-full flex flex-col justify-between items-center text-white p-4">
//     <!-- Player Image -->
//     <div class="w-[80px] h-[80px] rounded-full overflow-hidden border-2  shadow-md bg-white">
//       <img
//         src="https://cdn.sofifa.net/players/158/023/25_120.png"
//         alt="${player.name}"
//         class="w-full h-full object-cover"
//       />
//     </div>

//     <!-- Player Name -->
//     <p class="font-bold text-sm text-center mt-2">${player.name}</p>

//     <!-- Player Stats -->
//     <div class="grid grid-cols-3 gap-2 mt-2 text-xs text-center">
//       <div>
//         <p>PAC</p>
//         <p>${player.stats.pace}</p>
//       </div>
//       <div>
//         <p>SHO</p>
//         <p>${player.stats.shooting}</p>
//       </div>
//       <div>
//         <p>PAS</p>
//         <p>${player.stats.passing}</p>
//       </div>
//       <div>
//         <p>DRI</p>
//         <p>${player.stats.dribbling}</p>
//       </div>
//       <div>
//         <p>DEF</p>
//         <p>${player.stats.defending}</p>
//       </div>
//       <div>
//         <p>PHY</p>
//         <p>${player.stats.physical}</p>
//       </div>
//     </div>
//   </div>
// `;
    const cardElement = document.querySelector(`.${player.position.toUpperCase()}`);
    // console.log(cardElement);
    const firstChild = cardElement.firstElementChild;
    firstChild.classList.add("hidden");
    cardElement.appendChild(playerCard)
}

function addSubs() {
    const playerName = document.getElementById("name-input").value.trim();
    const playerPhoto = document.getElementById("photo-input").files[0];
    const playerNationality = document.getElementById("nationality-input").value.trim();
    const flag = document.getElementById("flag-input").files[0];
    const playerClub = document.getElementById("club-name-input").value.trim();
    const clubLogo = document.getElementById("club-logo-input").files[0];
    const playerRating = document.getElementById("rating-input").value.trim();
    const playerPosition = document.getElementById("position-input").value.toLowerCase();

    
    let newPlayer = {
      name: playerName,
      photo: playerPhoto,
      nationality: playerNationality,
      flag: flag,
      club: playerClub,
      clubLogo: clubLogo,
      status: "subs",
      position: playerPosition,
      rating: playerRating,
      stats: {}
  }

    if (playerPosition === "gk") {
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

  resetInputs();
  hideModal();
  players.push(newPlayer);
  console.log("add new sub player", players)

}



// Change the formation
document.getElementById("formation-select").addEventListener("change", () => {
    changeFormation(formation.value)
})