

setTimeout(() => {
    const mainPlayers = document.querySelectorAll(".player-main-card");
    const subsPlayers = document.querySelectorAll(".player-subs-card")

    let selectMainPlayer = null;


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
                        addToLocalStorage();
                        swap(selectMainPlayer, sub);
                        selectMainPlayer = null;
                    } else {
                        alert("Player has not the same position");
                        return;
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

