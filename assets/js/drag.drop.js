setTimeout(() => {
    
    const mainplayers = document.querySelectorAll(".player-main-card");
    const subplayers = document.querySelectorAll(".player-subs-card");
    
    // console.log(mainplayers);
    console.log(subplayers);

    mainplayers.forEach(player => {
        player.addEventListener("dragstart", (e) => {
            let selected = e.target.closest(".player-main-card");
            console.log("target element: ", selected);
            console.log(selected.parentElement)
            
            subplayers.forEach(sub => {
                // console.log(sub.classList)
                sub.addEventListener("dragover", (e) => {
                    e.preventDefault();
                });

                sub.addEventListener("drop", () => {
                    if(validateposition(selected, sub)) {
                        const temp = sub.innerHTML;
                        sub.innerHTML = selected.innerHTML;
                        selected.innerHTML = temp;

                        console.log(selected.querySelector(".player-name").textContent);
                        console.log(sub.querySelector(".player-name").textContent);

                        const player1Name = selected.querySelector(".player-name").textContent;
                        const player2Name = sub.querySelector(".player-name").textContent;

                        const player1 = players.find(item => item.name === player1Name);
                        const player2 = players.find(item => item.name === player2Name);

                        // console.log(player1, player2)

                        player1.status = "main";
                        player2.status = "subs";
                        // console.log(players)
                        addToLocalStorage()
                        selected = null;

                    } else {
                        alert("Players has not the same position");
                        return;
                    }
                })
            })

            
    
        })
    })

}, 1000);

function validateposition(player1, player2) {
    return player1.getAttribute("data-position") === player2.getAttribute("data-position");
} 
