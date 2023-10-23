let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

homeEl.textContent = 0
guestEl.textContent = 0

let count = 0

//Creating a counter variable that keeps track of the value while you use
//homeEl.textContent to update the count variable

function haddOne() {
    count++
    homeEl.textContent = count
}
function haddTwo() {
    count += 2
    homeEl.textContent = count
}
function haddThree() {
    count += 3
    homeEl.textContent = count
}
function hReset() {
    count = 0
    homeEl.textContent = count
}

//functions for the home scoreboard

function gaddOne() {
    count++
    guestEl.textContent = count
}
function gaddTwo() {
    count += 2
    guestEl.textContent = count
}
function gaddThree() {
    count += 3
    guestEl.textContent = count
}
function gReset() {
    count = 0
    guestEl.textContent = count
}

//functions for the guest scoreboard