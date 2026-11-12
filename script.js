//Games memory//
let population= 0;
let balance= 0;
let populationPerClick= 1;

//Elements on the page//
const planetButton= document.querySelector(".planet-button");
const populationText= document.getElementById("status-population");
const balanceText= document.getElementById("status-balance");

//The current numbers in status bar//
function updateStatus() 
{
    populationText.textContent = population;
    balanceText.textContent = balance;
    
}

//Should run on every click on the planet//
function clickPlanet(){
    population = population+populationPerClick;
    updateStatus();
}

//Once planet button is clicked, run clickPlanet//
planetButton.addEventListener("click", clickPlanet);

//Starting numbers once pages loads//
updateStatus();


//Economy//
//Memory//
let moneyPerperson=50;

//new function//
function earnMoney(){
    balance= balance+moneyPerperson*population;
    updateStatus();
}

//Click planet for money//
planetButton.addEventListener("click",clickPlanet);

//Run earnMoney//
setInterval(earnMoney, 1000);

//Starting numbers once page loads//
updateStatus();

