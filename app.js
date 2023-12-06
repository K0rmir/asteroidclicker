let score = document.getElementById("score");
let counter = 0;
const asteroidBtn = document.getElementById("asteroidBtn");

console.log(score.textContent)
console.log(score.innerHTML)



let clickAsteroid = () => {  
    counter ++;
    score.textContent = counter;
}

asteroidBtn.addEventListener("click", clickAsteroid);















