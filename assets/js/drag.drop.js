setTimeout(() => {
    
    const mainplayers = document.querySelectorAll(".player-main-card");
    const subplayers = document.querySelectorAll(".player-subs-card");
    
    // console.log(mainplayers);
    // console.log(subplayers);

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

                sub.addEventListener("drop", (e) => {
                    console.log(selected)
                    const temp = sub.innerHTML;
                    sub.innerHTML = selected.innerHTML;
                    player.innerHTML = temp;
                })
            })

            document.querySelectorAll(".subs-player").forEach(sub => {
                
                sub.addEventListener("dragover", (e) => {
                    e.preventDefault()
                });
                
                sub.addEventListener("drop", () => {
                    console.log(selected.previousElementSibling.classList)
                    selected.previousElementSibling.classList.remove("hidden")
                    // sub.innerHTML = selected.innerHTML;
                    console.log(sub.firstElementChild)
                    sub.firstElementChild.classList.add("hidden");
                    sub.appendChild(selected)
                    
                })
            })
        })
    })

}, 1000);