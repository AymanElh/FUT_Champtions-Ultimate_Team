let playerSelect = null



setTimeout(() => {
    const mainPlayers = document.querySelectorAll(".player-main-card");
    const subsPlayers = document.querySelectorAll(".player-subs-card");

    console.log("main Players cards: ", mainPlayers);
    console.log("subs players cards: ", subsPlayers);

    let selectMainPlayer = null;
    
    mainPlayers.forEach(player => {
        player.addEventListener("click", () => {
            selectMainPlayer = player;
            subsPlayers.forEach(sub => {
                sub.addEventListener("click", () => {
                    if(positionValidation(selectMainPlayer, sub)) {
                        
                        const player1 = searchPlayer(selectMainPlayer.querySelector(".player-name").textContent);
                        const player2 = searchPlayer(sub.querySelector(".player-name").textContent)
                        
                        player1.status = "subs";
                        player2.status = "main";

                        // console.log(players)
                        addToLocalStorage();
                        console.log(sub.querySelector(".player-name"))
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
    const temp = player1.innerHTML;
    player1.innerHTML = player2.innerHTML;
    player2.innerHTML = temp;
}

function positionValidation(player1, player2) {
    return player1.getAttribute("data-position") === player2.getAttribute("data-position")
}

function searchPlayer(name) {
    const player = players.find(player => player.name == name);
    return player
} 