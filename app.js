let score = document.getElementById("score");
let counter = 0;

// Click Asteroid function //
const asteroidBtn = document.getElementById("asteroidBtn");

const clickAsteroid = () => {  
    counter ++;
    score.textContent = counter;
}

asteroidBtn.addEventListener("click", clickAsteroid);

// ## Upgrade 1 -- SHIP MINER ## //
// Ship Miner Plus +1 per second //

const shipMinerBtn = document.getElementById("shipMinerBtn");

const shipMinerUpgrade = () => {
    setInterval(function(){
        counter ++;
        score.textContent = counter;
    }, 1000);
}

shipMinerBtn.addEventListener("click", shipMinerUpgrade);

// Show SHIP MINER availability to purchase //

const upgrade1 = document.getElementById("upgrade1")

const shipMinerCostCheck = () => {
    setInterval(function(){
        if (counter >= shipMinerCost) {
            upgrade1.classList.remove("notAvailable")
        } 
    },750);
}

asteroidBtn.addEventListener("click", shipMinerCostCheck);

// Reduce counter by cost of SHIP MINER //

let shipMinerCost = 10;
const shipMinerPrice = document.getElementById("shipMinerCost");

const shipMinerBuy = () => {
    counter -= shipMinerCost;
    score.textContent = counter;
    upgrade1.classList.add("notAvailable");
    shipMinerCost = Math.floor(shipMinerCost *= 1.5);
    shipMinerPrice.textContent = shipMinerCost;
    console.log(counter);
}

shipMinerBtn.addEventListener("click", shipMinerBuy);

// ----------------------------------- //
























