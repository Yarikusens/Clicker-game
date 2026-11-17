//Games memory//
let population= 10;
let balance= 0;
let populationPerClick= 1;
let moneyPerPerson=50;
let birthsPerInterval= 0;
let policyBirthsPerInterval = 0;
let upgradeOneIndex = 0;
const birthInterval= 5;

//Elements on the page//
const planetButton= document.querySelector(".planet-button");
const populationText= document.getElementById("status-population");
const balanceText= document.getElementById("status-balance");

//Upgrade buttons//
const upgradeOneBtn = document.querySelector("#upgrade-one .upgrade-button");
const upgradeTwoBtn = document.querySelector("#upgrade-two .upgrade-button");
const upgradeThreeBtn = document.querySelector("#upgrade-three .upgrade-button");
const upgradeFourBtn = document.querySelector("#upgrade-four .upgrade-button");

const upgradeOneTitlePrice = document.querySelector("#upgrade-one .upgrade-title-price");
const upgradeTwoTitlePrice = document.querySelector("#upgrade-two .upgrade-title-price");
const upgradeThreeTitlePrice = document.querySelector("#upgrade-three .upgrade-title-price");
const upgradeFourTitlePrice = document.querySelector("#upgrade-four .upgrade-title-price");

const upgradeOneTooltipCurrentValue = document.querySelector("#upgrade-one .upgrade-tooltip-current-value");
const upgradeTwoTooltipCurrentValue = document.querySelector("#upgrade-two .upgrade-tooltip-current-value");
const upgradeThreeTooltipCurrentValue = document.querySelector("#upgrade-three .upgrade-tooltip-current-value");
const upgradeFourTooltipCurrentValue = document.querySelector("#upgrade-four .upgrade-tooltip-current-value");

const upgradeOneTooltipNextValue = document.querySelector("#upgrade-one .upgrade-tooltip-next-value");
const upgradeTwoTooltipNextValue = document.querySelector("#upgrade-two .upgrade-tooltip-next-value");
const upgradeThreeTooltipNextValue = document.querySelector("#upgrade-three .upgrade-tooltip-next-value");
const upgradeFourTooltipNextValue = document.querySelector("#upgrade-four .upgrade-tooltip-next-value");





//The current numbers in status bar//
function updateStatus()
{
    populationText.textContent = new Intl.NumberFormat("en-US").format(population);
    balanceText.textContent = new Intl.NumberFormat("en-US").format(balance);
}

//Should run on every click on the planet//
function clickPlanet(){
    population = population+populationPerClick;
    updateStatus();
}

//Economy//

//income that runs once per second//
function earnMoney(){
    balance= balance+moneyPerPerson*population;
    updateStatus();
}

//Passive births that runs every BirthInterval second//
function passiveBirths(){
    population = population+ birthsPerInterval+ policyBirthsPerInterval;
    updateStatus();
}

//Once planet button is clicked, run clickPlanet//
planetButton.addEventListener("click", clickPlanet);

//setInterval//

setInterval(passiveBirths, birthInterval*1000);

//Starting numbers once pages loads//
updateStatus();

//Upgrades: call to action//

const callToActionUpgrade= [
    {name: "Megaphone", value: 2, price:10000, displayPrice: "$10k"},
    {name: "Radio Address", value: 3, price:100000, displayPrice: "$100k"},
    {name:"Campaign Posters", value: 6, price: 1500000, displayPrice: "$1.5M"},
    {name:"Holographic Addresses", value: 0.025, price: 40000000, displayPrice: "$40M"},
    {name:"Planetary Broadcast", value: 0.06, price:500_000_000, displayPrice: "$500M"},
    {name:"Cult of the Leader", value: 0.1, price:1e10, displayPrice: "$10B"},
    {name:"Planet-Wide Festival", value:0.15, price:2e11, displayPrice: "$200B"},
    {name:"Legend of the Colony", value: 0.2, price:2.5e12, displayPrice: "$2.5T"}
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

upgradeOneBtn.addEventListener("click", upgradeOne)

upgradeOneIndex.setLocalStorage("")

function upgradeOne(){
    if (balance > callToActionUpgrade[upgradeOneIndex].price || true){
    upgradeOneIndex += 1; 
    balance -= callToActionUpgrade[upgradeOneIndex -1].price
    upgradeOneBtn.textContent = callToActionUpgrade[upgradeOneIndex].name;
    upgradeOneTitlePrice.textContent = callToActionUpgrade[upgradeOneIndex].displayPrice;
    upgradeOneTooltipCurrentValue.textContent = callToActionUpgrade[upgradeOneIndex - 1].value;
    upgradeOneTooltipNextValue.textContent = callToActionUpgrade[upgradeOneIndex].value;
}}

function upgradeTwo(){
    if (balance > callToActionUpgrade[upgradeTwoIndex].price || true){
    upgradeTwoIndex += 1; 
    balance -= callToActionUpgrade[upgradeTwoIndex -1].price;
    upgradeTwoBtn.textContent = callToActionUpgrade[upgradeTwoIndex].name;
    upgradeTwoTitlePrice.textContent = callToActionUpgrade[upgradeTwoIndex].displayPrice;
    upgradeTwoTooltipCurrentValue.textContent = callToActionUpgrade[upgradeTwoIndex - 1].value;
    upgradeTwoTooltipNextValue.textContent = callToActionUpgrade[upgradeTwoIndex].value;
}}

function upgradeThree(){
    if (balance > callToActionUpgrade[upgradeThreeIndex].price || true){
    upgradeThreeIndex += 1; 
    balance -= callToActionUpgrade[upgradeThreeIndex -1].price;
    upgradeThreeBtn.textContent = callToActionUpgrade[upgradeThreeIndex].name;
    upgradeThreeTitlePrice.textContent = callToActionUpgrade[upgradeThreeIndex].displayPrice;
    upgradeThreeTooltipCurrentValue.textContent = callToActionUpgrade[upgradeThreeIndex - 1].value;
    upgradeThreeTooltipNextValue.textContent = callToActionUpgrade[upgradeThreeIndex].value;
}}

function upgradeFour(){
    if (balance > callToActionUpgrade[upgradeFourIndex].price || true){
    upgradeFourIndex += 1; 
    balance -= callToActionUpgrade[upgradeFourIndex -1].price;
    upgradeFourBtn.textContent = callToActionUpgrade[upgradeFourIndex].name;
    upgradeFourTitlePrice.textContent = callToActionUpgrade[upgradeFourIndex].displayPrice;
    upgradeFourTooltipCurrentValue.textContent = callToActionUpgrade[upgradeFourIndex - 1].value;
    upgradeFourTooltipNextValue.textContent = callToActionUpgrade[upgradeFourIndex].value;
}}



//    SAVING PROGRESS                                        SAVING PROGRESS

window.addEventListener("beforeunload", saveProgress);
window.addEventListener("load", loadProgress);

function saveProgress(){
    localStorage.setItem("population", population);
    localStorage.setItem("balance", balance);
    localStorage.setItem("upgradeOneindex", upgradeOneIndex);
}

function loadProgress(){
    population = Number(localStorage.getItem("population")) || 10;
    balance = Number(localStorage.getItem("balance")) || 0;
    upgradeOneIndex = localStorage.getItem("upgradeOneindex") || 0;
    updateStatus();
}

function resetProgress(){
    population = 0;
    balance = 0; 
    saveProgress();
    updateStatus();
}