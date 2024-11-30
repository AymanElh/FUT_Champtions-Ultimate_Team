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
    const playerPhoto = document.getElementById("photo-input").value.trim();
    const playerNationality = document.getElementById("nationality-input").value.trim();
    const flag = document.getElementById("flag-input").value.trim();
    const playerClub = document.getElementById("club-name-input").value.trim();
    const clubLogo = document.getElementById("club-logo-input").value.trim();
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

  playerCard.style.backgroundImage = "url('/assets/img/badge_total_rush.webp')";
  playerCard.style.backgroundSize = "cover";
  playerCard.style.backgroundPosition = "center";

  playerCard.innerHTML = `
    <div>
      
    </div>
  `
}

function addPlayerToCard(player) {
    const playerCard = document.createElement("div");
    playerCard.id = `${player.position}-card`;
    playerCard.classList.add(
        "relative",
        "w-[150px]",
        "h-[200px]",
        "bg-black/80",
        "rounded-md",
        "shadow-lg",
        // "scale-[1.2]"
    )
    playerCard.style.backgroundImage = "url('/assets/img/badge_total_rush.webp')"; 
    playerCard.style.backgroundSize = "cover"; // Ensures the image covers the element
    playerCard.style.backgroundPosition = "center";
    playerCard.style.fontSize = ".6rem";


    
    playerCard.innerHTML = `
    <div
              class="relative w-[147px] h-[173px] rounded-md shadow-lg"
            >

              <div
                class="relative z-10 flex flex-col items-center justify-center h-full text-white p-2"
              >
                <div
                  class="rounded-full overflow-hidden mb-2" style="width: 50px; height: 50px"
                >
                  <img
                    src="https://cdn.sofifa.net/players/158/023/25_120.png"
                    alt="Player"
                    class="w-full h-full object-cover"
                  />
                </div>

                <p class="font-bold text-sm text-center">${player.name}</p>

                <div class="grid grid-cols-3 mt-2 text-xs text-center" ">
                    ${player.position === "gk"
                      ? `
                        <div><p>Diving</p><p>${player.stats.diving}</p></div>
                        <div><p>Handling</p><p>${player.stats.handling}</p></div>
                        <div><p>Kicking</p><p>${player.stats.kicking}</p></div>
                        <div><p>Reflexes</p><p>${player.stats.reflexes}</p></div>
                        <div><p>Speed</p><p>${player.stats.speed}</p></div>
                        <div><p>Positioning</p><p>${player.stats.positioning}</p></div>
                      `
                      : `
                        <div><p>PAC</p><p>${player.stats.pace}</p></div>
                        <div><p>SHO</p><p>${player.stats.shooting}</p></div>
                        <div><p>PAS</p><p>${player.stats.passing}</p></div>
                        <div><p>DRI</p><p>${player.stats.dribbling}</p></div>
                        <div><p>DEF</p><p>${player.stats.defending}</p></div>
                        <div><p>PHY</p><p>${player.stats.physical}</p></div>
                      `}
                  </div>
                <div class="icons absolute top-0 right-0 flex flex-col">
                  <div id="delete-icon" class="cursor-pointer" onclick="deletePlayer('${playerCard.id}', '${player.name}')">
                    <i class="fa-solid fa-trash" style="color: #63e6be"></i>
                  </div>
                  <div id="update-icon" class="cursor-pointer" onclick="updatePlayer('${playerCard.id}', '${player.name}')">
                    <i
                      class="fa-solid fa-pen-to-square"
                      style="color: #63e6be"
                    ></i>
                  </div>
              </div>
            </div>
  `
  
    // check the player status
    if(player.status === "main") {
      console.log("it's a main player");
      const cardElement = document.querySelector(`.${player.position.toUpperCase()}`);
      // console.log("card Element", cardElement);
      // console.log(cardElement);
      const firstChild = cardElement.firstElementChild;
      firstChild.classList.add("hidden");
      cardElement.appendChild(playerCard)
    }
     else {
      console.log("Adding substitute player...");
      const subItems = document.querySelectorAll(".subs-player");
      let itemFilled = false;
  
      subItems.forEach((item) => {
        // Find an empty substitute item
        if (!item.classList.contains("filled") && !itemFilled) {
          // console.log(item.firstElementChild);
          item.firstElementChild.classList.add("hidden")
          item.appendChild(playerCard); 
          item.classList.add("filled"); 
          itemFilled = true; 
        }
      });
  

      if (!itemFilled) {
        alert("No available substitution slots!");
      }
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Player added successfully",
      showConfirmButton: false,
      timer: 1500
    });
}

function addSubs() {
    const playerName = document.getElementById("name-input").value.trim();
    const playerPhoto = document.getElementById("photo-input").value.trim();
    const playerNationality = document.getElementById("nationality-input").value.trim();
    const flag = document.getElementById("flag-input").value.trim();
    const playerClub = document.getElementById("club-name-input").value.trim();
    const clubLogo = document.getElementById("club-logo-input").value.trim();
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
  addPlayerToCard(newPlayer)
}


// Delete player function 
function deletePlayer(cardId, playerName) {
  console.log("Deleting a player")
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      const playerCard = document.getElementById(cardId);
      const defaultCard = playerCard.parentElement.firstElementChild;
      // console.log("Player Card: ", playerCard)
      // console.log("Fist element child", defaultCard);
      const deletedPlayer = players.findIndex(item => item.name === playerName);
      // console.log(deletedPlayer);
      defaultCard.classList.remove("hidden");
      document.getElementById(cardId).remove();
      players.splice(deletedPlayer, 1)
      console.log("Player after delet: ", players);


      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });

}


// Update Plyaer function
function updatePlayer(playerCardId, playerName) {
  console.log("updating player")


  const player = players.find(item => playerName === item.name);
  console.log(player);

  gkStats.classList.add("hidden");
  playerStats.classList.add("hidden");

  document.getElementById("name-input").value = player.name;
  document.getElementById("photo-input").value = player.photo;
  document.getElementById("nationality-input").value = player.nationality;
  document.getElementById("flag-input").value = player.flag;
  document.getElementById("club-name-input").value = player.club;
  document.getElementById("club-logo-input").value = player.clubLogo;
  document.getElementById("rating-input").value = player.rating;
  document.getElementById("position-input").value = player.position;
  
  // console.log(player.position)
  if(player.position === "gk") {
    gkStats.classList.replace("hidden", "flex");
    document.getElementById("diving-input").value = player.stats.diving;
    document.getElementById("handling-input").value = player.stats.handling;
    document.getElementById("kicking-input").value = player.stats.kicking;
    document.getElementById("reflexes-input").value = player.stats.reflexes;
    document.getElementById("speed-input").value = player.stats.speed;
    document.getElementById("positioning-input").value = player.stats.positioning;
  } else {
    playerStats.classList.replace("hidden", "flex");
    document.getElementById("pace-input").value = player.stats.pace;
    document.getElementById("shooting-input").value = player.stats.shooting;
    document.getElementById("passing-input").value = player.stats.passing;
    document.getElementById("dribbling-input").value = player.stats.dribbling;
    document.getElementById("defending-input").value = player.stats.defending;
    document.getElementById("pysical-input").value = player.stats.physical;
  }

  // const addBtn = document.getElementById("add-player")
  // addBtn.replaceWith(addBtn.cloneNode(true));
  // const newAddBtn = document.getElementById("add-player");
  
  // newAddBtn.textContent = "Update";

  showModal(); 
  document.getElementById("player-form").classList.remove("hidden")

  const playerCard = document.getElementById(playerCardId).lastElementChild;
  console.log("playerCard", playerCard);

  // show update btn
  const updateBtn = document.getElementById("update-btn");
  updateBtn.classList.remove("hidden");
  addBtn.classList.add("hidden")

  updateBtn.addEventListener("click", saveUpdatedPlayer);

  // newAddBtn.addEventListener("click", saveUpdatedPlayer);

  function saveUpdatedPlayer() {

    player.name = document.getElementById("name-input").value.trim();
    console.log(document.getElementById("name-input").value)
    player.photo = document.getElementById("photo-input").value.trim();
    player.nationality = document.getElementById("nationality-input").value.trim();
    player.flag = document.getElementById("flag-input").value.trim();
    player.club = document.getElementById("club-name-input").value.trim();
    player.clubLogo = document.getElementById("club-logo-input").value.trim();
    player.rating = document.getElementById("rating-input").value.trim();


    if (player.position === "gk") {
        player.stats.diving = document.getElementById("diving-input").value.trim();
        player.stats.handling = document.getElementById("handling-input").value.trim();
        player.stats.kicking = document.getElementById("kicking-input").value.trim();
        player.stats.reflexes = document.getElementById("reflexes-input").value.trim();
        player.stats.speed = document.getElementById("speed-input").value.trim();
        player.stats.positioning = document.getElementById("positioning-input").value.trim();
    } else {
        player.stats.pace = document.getElementById("pace-input").value.trim();
        player.stats.shooting = document.getElementById("shooting-input").value.trim();
        player.stats.passing = document.getElementById("passing-input").value.trim();
        player.stats.dribbling = document.getElementById("dribbling-input").value.trim();
        player.stats.defending = document.getElementById("defending-input").value.trim();
        player.stats.physical = document.getElementById("pysical-input").value.trim();
    }
    
    

    if(player.status === "main") {
      console.log("Updating the main player")
      
      playerCard.innerHTML = `

                <div
                  class="relative z-10 flex flex-col items-center justify-center h-full text-white p-2"
                >
                  <div
                    class="rounded-full overflow-hidden mb-2"
                    style="width: 60px; height: 60px"
                  >
                    <img
                      src="https://cdn.sofifa.net/players/158/023/25_120.png"
                      alt="Player"
                      class="w-full h-full object-cover"
                    />
                  </div>

                  <p class="font-bold text-sm text-center">${player.name}</p>

                  <div class="mt-2 text-xs text-center" style="display: grid; grid-template-columns: repeat(3, 1fr)">
                    ${player.position === "gk"
                      ? `
                        <div><p>Diving</p><p>${player.stats.diving}</p></div>
                        <div><p>Handling</p><p>${player.stats.handling}</p></div>
                        <div><p>Kicking</p><p>${player.stats.kicking}</p></div>
                        <div><p>Reflexes</p><p>${player.stats.reflexes}</p></div>
                        <div><p>Speed</p><p>${player.stats.speed}</p></div>
                        <div><p>Positioning</p><p>${player.stats.positioning}</p></div>
                      `
                      : `
                        <div><p>PAC</p><p>${player.stats.pace}</p></div>
                        <div><p>SHO</p><p>${player.stats.shooting}</p></div>
                        <div><p>PAS</p><p>${player.stats.passing}</p></div>
                        <div><p>DRI</p><p>${player.stats.dribbling}</p></div>
                        <div><p>DEF</p><p>${player.stats.defending}</p></div>
                        <div><p>PHY</p><p>${player.stats.physical}</p></div>
                      `}
                  </div>
                  <div class="icons absolute top-0 right-0 flex flex-col">
                    <div id="delete-icon" class="cursor-pointer" onclick="deletePlayer('${playerCardId}', '${player.name}')">
                      <i class="fa-solid fa-trash" style="color: #63e6be"></i>
                    </div>
                    <div id="update-icon" class="cursor-pointer" onclick="updatePlayer('${playerCardId}', '${player.name}')">
                      <i
                        class="fa-solid fa-pen-to-square"
                        style="color: #63e6be"
                      ></i>
                    </div>
                  </div>
              </div>
    `;

    }

    hideModal();  
    addBtn.classList.remove("hidden");
    updateBtn.classList.add("hidden");
    resetInputs();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your changes has been saved",
      showConfirmButton: false,
      timer: 1500
    });

  }  

  console.log("players after updating: ", players)

}


// Change the formation
document.getElementById("formation-select").addEventListener("change", () => {
    changeFormation(formation.value)
})