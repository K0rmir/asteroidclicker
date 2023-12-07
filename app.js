let score = document.getElementById("score");
let counter = 0;

// Click Asteroid function //
const asteroidBtn = document.getElementById("asteroidBtn");

const clickAsteroid = () => {  
    counter ++;
    score.textContent = counter;
}

asteroidBtn.addEventListener("click", clickAsteroid);

// Increse Counter by 1 each second / Upgrade 1 ## SHIP MINER ## //

const shipMinerBtn = document.getElementById("shipMinerBtn");

const shipMinerUpgrade = () => {
    setInterval(function(){
        counter ++;
        score.textContent = counter;
    }, 1000);
}

shipMinerBtn.addEventListener("click", shipMinerUpgrade);

// Show SHIP MINER availability to purchase //

let upgrade1 = document.getElementById("upgrade1")
let shipMinerCost = 15;

const shipMinerCostCheck = () => {
    setInterval(function(){
        if (counter >= shipMinerCost) {
            upgrade1.classList.remove("notAvailable")
        }
    },2000);
}

asteroidBtn.addEventListener("click", shipMinerCostCheck);

// ----------------------------------- //






















