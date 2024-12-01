// Form validation 

const playerName = document.getElementById("name-input");
const playerPhoto = document.getElementById("photo-input");
// const playerNationality = document.getElementById("nationality-input");
const playerNationalityflag = document.getElementById("flag-input");
// const playerClub = document.getElementById("club-name-input");
const playerClubLogo = document.getElementById("club-logo-input");
const playerRating = document.getElementById("rating-input");

// Normal player properties
const playerPace = document.getElementById("pace-input");
const playerShooting = document.getElementById("shooting-input");
const playerPassing = document.getElementById("passing-input");
const playerDribbling = document.getElementById("dribbling-input");
const playerDefending = document.getElementById("defending-input");
const playerPhysical = document.getElementById("pysical-input");
// Goal Keeper properties
const gkDiving = document.getElementById("diving-input");
const gkHandling = document.getElementById("handling-input");
const gkKicking = document.getElementById("kicking-input");
const gkReflexes = document.getElementById("reflexes-input");
const gkSpeed = document.getElementById("speed-input");
const gkPositioning = document.getElementById("positioning-input");

const nameRegex = /^[a-zA-Z\s]{4,}$/
const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/
const numbers = /^[0-9]{1,2}$|^100$/

// create a span element for the error message
document.querySelectorAll("input").forEach(input => {
    const span = document.createElement("span");
    span.classList.add("error", "hidden", "text-sm");
    input.insertAdjacentElement("afterend", span);
})




function generalValidation() {
    console.log("General infos validation is loading");
    let isValid = true;

    if (!nameRegex.test(playerName.value)) {
        isValid = false;
        showError(playerName, "Player name must contain at least 4 characters and only letters.");
    } else {
        hideError(playerName);
    }

    if (!urlRegex.test(playerPhoto.value)) {
        isValid = false;
        showError(playerPhoto, "Enter a valid Player photo URL.");
    } else {
        hideError(playerPhoto);
    }

    if (!urlRegex.test(playerNationalityflag.value)) {
        isValid = false;
        showError(playerNationalityflag, "Enter a valid nationality flag URL.");
    } else {
        hideError(playerNationalityflag);
    }

    if (!urlRegex.test(playerClubLogo.value)) {
        isValid = false;
        showError(playerClubLogo, "Enter a valid club logo URL.");
    } else {
        hideError(playerClubLogo);
    }

    if (!numbers.test(playerRating.value)) {
        isValid = false;
        showError(playerRating, "Rating must be a number between 0 and 100.");
    } else {
        hideError(playerRating);
    }
    return isValid;
}

function normalPlayerValidation() {
    console.log("Normal player validation is loading");
    let isValid = true;

    if (!numbers.test(playerPace.value)) {
        isValid = false;
        showError(playerPace, "Pace must be a number between 0 and 100.");
    } else {
        hideError(playerPace);
    }

    if (!numbers.test(playerShooting.value)) {
        isValid = false;
        showError(playerShooting, "Shooting must be a number between 0 and 100.");
    } else {
        hideError(playerShooting);
    }

    if (!numbers.test(playerPassing.value)) {
        isValid = false;
        showError(playerPassing, "Passing must be a number between 0 and 100.");
    } else {
        hideError(playerPassing);
    }

    if (!numbers.test(playerDribbling.value)) {
        isValid = false;
        showError(playerDribbling, "Dribbling must be a number between 0 and 100.");
    } else {
        hideError(playerDribbling);
    }

    if (!numbers.test(playerDefending.value)) {
        isValid = false;
        showError(playerDefending, "Defending must be a number between 0 and 100.");
    } else {
        hideError(playerDefending);
    }

    if (!numbers.test(playerPhysical.value)) {
        isValid = false;
        showError(playerPhysical, "Physical must be a number between 0 and 100.");
    } else {
        hideError(playerPhysical);
    }
    return isValid;
}

function goalKeeperValidation() {
    let isValid = true;

    if (!numbers.test(gkDiving.value)) {
        isValid = false;
        showError(gkDiving, "Diving must be a number between 0 and 100.");
    } else {
        hideError(gkDiving);
    }

    if (!numbers.test(gkHandling.value)) {
        isValid = false;
        showError(gkHandling, "Handling must be a number between 0 and 100.");
    } else {
        hideError(gkHandling);
    }

    if (!numbers.test(gkKicking.value)) {
        isValid = false;
        showError(gkKicking, "Kicking must be a number between 0 and 100.");
    } else {
        hideError(gkKicking);
    }

    if (!numbers.test(gkReflexes.value)) {
        isValid = false;
        showError(gkReflexes, "Reflexes must be a number between 0 and 100.");
    } else {
        hideError(gkReflexes);
    }

    if (!numbers.test(gkSpeed.value)) {
        isValid = false;
        showError(gkSpeed, "Speed must be a number between 0 and 100.");
    } else {
        hideError(gkSpeed);
    }

    if (!numbers.test(gkPositioning.value)) {
        isValid = false;
        showError(gkPositioning, "Positioning must be a number between 0 and 100.");
    } else {
        hideError(gkPositioning);
    }

    return isValid;
}


function showError(input, message="") {
    // console.log("showing the error ..");
    const error = input.nextElementSibling;
    error.textContent = message;
    error.classList.remove("hidden")
    input.classList.add("border-red-700")
    error.classList.add("block", "text-red-600", "text-sm");
}

function hideError(input) {
    // console.log("hiding the error ..")
    input.classList.remove("border-red-700");
    const error = input.nextElementSibling;
    error.textContent = "";
    error.classList.add("hidden");
}

