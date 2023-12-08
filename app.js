let score = document.getElementById("score");
let counter = 0;

// Click Asteroid function //
const asteroidBtn = document.getElementById("asteroidBtn");

const clickAsteroid = () => {  
    counter ++;
    score.textContent = counter;
    localStorage.setItem("localScore", counter);
}

asteroidBtn.addEventListener("click", clickAsteroid);

// ## Upgrade 1 -- SHIP MINER ## //

// Ship Miner Plus +1 per second //

const shipMinerBtn = document.getElementById("shipMinerBtn");
const shipMinerQuantity = document.getElementById("shipMinerQuantity");
let shipMinerQuantityCount = 0;

const shipMinerUpgrade = () => {
    setInterval(function(){
        counter ++;
        score.textContent = counter;
        localStorage.setItem("localScore", counter);
    }, 1000);
    shipMinerQuantityCount ++;
    shipMinerQuantity.textContent = shipMinerQuantityCount;
    localStorage.setItem("shipMinerQuantity", shipMinerQuantityCount);
}

shipMinerBtn.addEventListener("click", shipMinerUpgrade);

// Show SHIP MINER availability to purchase //

const upgrade1 = document.getElementById("upgrade1")

const shipMinerCostCheck = () => {
    setInterval(function(){
        if (counter >= shipMinerCost) {
            upgrade1.classList.remove("notAvailable")
        } 
    },100);
}

shipMinerCostCheck();

// Reduce counter by cost of SHIP MINER //

let shipMinerCost = 10;
const shipMinerPrice = document.getElementById("shipMinerCost");

const shipMinerBuy = () => {
    counter -= shipMinerCost;
    score.textContent = counter;
    upgrade1.classList.add("notAvailable");
    shipMinerCost = Math.floor(shipMinerCost *= 1.1);
    shipMinerPrice.textContent = shipMinerCost;
}

shipMinerBtn.addEventListener("click", shipMinerBuy);


// Local Storage //
// Function to retrieve score from localstorage and set counter on page reload //

function setLocalScore() {
    counter = localStorage.getItem("localScore");
    score.textContent = counter;
}

setLocalScore();



























