let score = document.getElementById("score");
let counter = 0;


// Click Asteroid function
const asteroidBtn = document.getElementById("asteroidBtn");

const clickAsteroid = () => {  
    counter ++;
    score.textContent = counter;
}

asteroidBtn.addEventListener("click", clickAsteroid);

// Increse Counter by 1 each second / Upgrade 1 ## SHIP MINER ##

const shipMiner = document.getElementById("shipMiner");

const upgrade1 = () => {
    setInterval(function(){
        counter ++;
        score.textContent = counter;
        console.log(counter);
    }, 1000);
}

shipMiner.addEventListener("click", upgrade1);

// 


















