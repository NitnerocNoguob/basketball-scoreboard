let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let scoreHome = 0
let scoreGuest = 0

function incrementOneHome() {
    scoreHome += 1
    homeEl.textContent = scoreHome
    }
    
function incrementOneGuest() {
    scoreGuest += 1
    guestEl.textContent = scoreGuest
}

function incrementTwoHome() {
    scoreHome += 2
    homeEl.textContent = scoreHome 
}

function incrementTwoGuest() {
    scoreGuest += 2
    guestEl.textContent = scoreGuest
}

function incrementThreeHome() {
    scoreHome += 3
    homeEl.textContent = scoreHome
}

function incrementThreeGuest() {
    scoreGuest += 3 
    guestEl.textContent = scoreGuest
}

function restart() {
    scoreHome = 0
    homeEl.textContent = scoreHome
    scoreGuest = 0
    guestEl.textContent = scoreGuest
}