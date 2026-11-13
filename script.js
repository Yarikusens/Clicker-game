//Games memory//
let population= 10;
let balance= 0;
let populationPerClick= 1;
let moneyPerperson=50;
let birthsPerInterval= 0;
let policyBirthsPerInterval = 0;
const birthInterval= 5;

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

//Economy//

//income that runs once per second//
function earnMoney(){
    balance= balance+moneyPerperson*population;
    updateStatus();
}

//Passive births that runs every BirthInterval second//
function passiveBirths(){
    population = population+ birthsPerInterval+ policyBirthsPerInterval;
    updateStatus();
}

//Once planet button is clicked, run clickPlanet//
planetButton.addEventListener("click", clickPlanet);

//Click planet for money//
planetButton.addEventListener("click",clickPlanet);

//Run earnMoney//
setInterval(earnMoney, 1000);

//setInterval//

setInterval(passiveBirths, birthInterval*1000);

//Starting numbers once pages loads//
updateStatus();

//Upgrades: call to action//

const callToActionUpgrade= [
    {name: "Megaphone", value: 2, price:10000},
    {name: "Radio Address", value: 3, price:100000},
    {name:"Campaign Posters", value: 6, price: 1500000},
    {name:"Holographic Addresses", value: 0.025, price: 4000000},
    {name:"Planetary Broadcast", value: 0.06, price:500000000},
    {name:"Cult of the Leader", value: 0.1, price:1e10},
    {name:"Planet-Wide Festival", value:0.15, price:2e11},
    {name:"Legend of the Colony", value: 0.2, price:2.5e12}
];

const economyUpgrades=[
    {name:"Greenhouses", value: 75, price:40000},
    {name:"Mines", value: 125, price:800000},
    {name:"Trade Port", value: 200, price: 10000000},
    {name:"Interplanetary Exchange", value: 350, price: 500000000},
    {name:"Colonial Corporation", value: 600, price: 1.5e10},
    {name:"Colony Currency", value: 1000, price: 5e11 },
];

const birthRateUpgrades=[
    {name:"Hire a Midwife", value: 1, price: 5000},
    {name: "Build a Maternity Ward", value: 2, price: 40000 },
    {name: "Expand the Maternity Ward", value: 3, price: 200000},
    {name: "Perinatal Center", value: 5, price: 2000000},
//precentage upgrades//
    {name: "Genetics Lab", value: 0.75, price: 50000000 },
    {name: "Incubators", value: 1.5, price: 800000000},
    {name: "Orbital Birthing Stations", value: 2.5, price: 1.5e10},
    {name: "Embryo Bank", value: 4, price: 2.5e11},
    {name: "Artificial Wombs", value: 6, price: 4e12}
];


const policyUpgrades= [
    {name: "Ban Condoms", value: 6, price: 150000},
    {name: "Childlessness Tax", value: 12, price: 3000000},
    {name: "State Birth Quota", value: 21, price: 100000000},
    {name: "Cancel Evening Entertainment", value: 36, price: 800000000},
    //precentage upgrades//
    {name: "Mandatory Childbearing", value: 3, price: 8e9},
    {name: "Make Everyone Pregnant", value: 9, price: 2.5e11}
];
