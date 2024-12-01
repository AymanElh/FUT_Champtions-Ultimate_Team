

setTimeout(() => {
    const mainPlayers = document.querySelectorAll(".player-main-card");
    const subsPlayers = document.querySelectorAll(".player-subs-card")

    let selectMainPlayer = null;


    // document.querySelectorAll(".player-main-card").forEach(player => {
    //     mainPlayers.push(player.querySelector(".player-img"));
    // })

    // document.querySelectorAll(".player-subs-card").forEach(player => {
    //     subsPlayers.push(player.querySelector(".player-img"))
    // })

    // console.log(mainPlayers);
    // console.log(subsPlayers)

    // mainPlayers.forEach(player => {
    //     console.log(player.nextElementSibling);
    // })
    
    mainPlayers.forEach(player => {
        player.addEventListener("click", () => {
            selectMainPlayer = player;
            subsPlayers.forEach(sub => {
                sub.addEventListener("click", () => {
                    if(positionValidation(selectMainPlayer, sub)) {
                        // console.log(selectMainPlayer.parentElement.parentElement)
                        const player1 = searchPlayer(selectMainPlayer.nextElementSibling.textContent);
                        const player2 = searchPlayer(sub.nextElementSibling.textContent)
                        console.log("selected main player: ", selectMainPlayer.parentElement.parentElement.parentElement)
                        player1.status = "subs";
                        player2.status = "main";
                        // console.log(players)
                        addToLocalStorage();
                        swap(selectMainPlayer, sub);
                    } else {
                        alert("Player has not the same position");
                    }
                })
            })
        })
    })

}, 1000);

function swap(player1, player2) {
    console.log("Swapping players: ", player1, player2);
    const temp = player1.innerHTML;
    console.log(temp);
    player1.innerHTML = player2.innerHTML;
    player2.innerHTML = temp;
}

function positionValidation(player1, player2) {
    console.log(player1.getAttribute("data-position"))
    console.log(player2.getAttribute("data-position"))
    return player1.getAttribute("data-position") === player2.getAttribute("data-position")
}

function searchPlayer(name) {
    const player = players.find(player => player.name == name);
    return player
} 


// setTimeout(() => {
//     const mainPlayers = document.querySelectorAll(".player-main-card .player-img");
//     const subsPlayers = document.querySelectorAll(".player-subs-card .player-img");

//     let selectMainPlayer = null;

//     // Add click listeners to main players
//     mainPlayers.forEach(player => {
//         player.addEventListener("click", () => {
//             // Highlight the selected main player
//             if (selectMainPlayer) {
//                 selectMainPlayer.classList.remove("selected");
//             }
//             selectMainPlayer = player;
//             player.classList.add("selected");
//         });
//     });


//     subsPlayers.forEach(sub => {
//         sub.addEventListener("click", () => {
//             if (!selectMainPlayer) {
//                 alert("Please select a main player first!");
//                 return;
//             }

//             // Validate position before swapping
//             if (positionValidation(selectMainPlayer, sub)) {
//                 const player1 = searchPlayer(selectMainPlayer.nextElementSibling.textContent);
//                 const player2 = searchPlayer(sub.nextElementSibling.textContent);

//                 // Update statuses
//                 player1.status = "subs";
//                 player2.status = "main";

//                 // Update local storage or data array if needed
//                 // addToLocalStorage();

//                 // Perform swap
//                 swap(selectMainPlayer, sub);

//                 // Reset selection
//                 resetSelection();
//             } else {
//                 alert("Players must have the same position to switch!");
//             }
//         });
//     });
// }, 1000);