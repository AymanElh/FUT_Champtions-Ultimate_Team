

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
                        const player1 = searchPlayer(selectMainPlayer.querySelector(".player-name").textContent);
                        const player2 = searchPlayer(sub.querySelector(".player-name").textContent)
                        console.log("selected main player: ", selectMainPlayer.parentElement.parentElement.parentElement)
                        player1.status = "subs";
                        player2.status = "main";
                        // console.log(players)
                        // addToLocalStorage();
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


