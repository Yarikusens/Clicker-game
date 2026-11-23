//Games memory//
let population= 10;
let balance= 0;
const birthInterval= 5;

//Elements on the page//
const planetButton= document.querySelector(".planet-button");
const populationText= document.getElementById("status-population");
const balanceText= document.getElementById("status-balance");
const aura = document.querySelector('.evil-aura');

//The current numbers in status bar//
function updateStatus()
{
    populationText.textContent = new Intl.NumberFormat("en-US").format(population);
    balanceText.textContent = new Intl.NumberFormat("en-US").format(balance);
}

//Should run on every click on the planet//
function clickPlanet(){
    let populationPerClick= upgradeContainers[0].modifier;
    population = population +
        ( typeof populationPerClick === "number" ? populationPerClick
            : Math.ceil(((Number)(populationPerClick.slice(0, -1)) / 100) * population));
    updateStatus();
}

//Economy//
//income that runs once per second//
function earnMoney(){
    let moneyPerPerson= upgradeContainers[2].modifier;
    balance = balance + moneyPerPerson * population;
    updateStatus();
}

//Passive births that runs every BirthInterval second//
function passiveBirths(){
    let birthsPerInterval = upgradeContainers[1].modifier;
    let policyBirthsPerInterval = upgradeContainers[3].modifier;
    population = population +
        ( typeof birthsPerInterval === "number" ? birthsPerInterval
            : Math.ceil(((Number)(birthsPerInterval.slice(0, -1)) / 100) * population))
        +
        ( typeof policyBirthsPerInterval === "number" ? policyBirthsPerInterval
            : Math.ceil(((Number)(policyBirthsPerInterval.slice(0, -1)) / 100) * population));
    updateStatus();
}

//Once planet button is clicked, run clickPlanet//
planetButton.addEventListener("click", clickPlanet);

//setInterval//
setInterval(passiveBirths, birthInterval*1000);

//Starting numbers once pages loads//
updateStatus();

//Upgrades//
const callToActionUpgrades= [
    {name: "Megaphone", value: 2, price:10_000, displayPrice: "$10k"},
    {name: "Radio Address", value: 3, price:100_000, displayPrice: "$100k"},
    {name:"Campaign Posters", value: 6, price: 1_500_000, displayPrice: "$1.5M"},
    //percentage upgrades//
    {name:"Holographic Addresses", value: "0.025%", price: 40_000_000, displayPrice: "$40M"},
    {name:"Planetary Broadcast", value: "0.06%", price:500_000_000, displayPrice: "$500M"},
    {name:"Cult of the Leader", value: "0.1%", price:10_000_000_000, displayPrice: "$10B"},
    {name:"Planet-Wide Festival", value: "0.15%", price:200_000_000_000, displayPrice: "$200B"},
    {name:"Legend of the Colony", value: "0.2%", price:2_500_000_000_000, displayPrice: "$2.5T"}
];

const economyUpgrades=[
    {name:"Greenhouses", value: 75, price:40_000, displayPrice: "$40K"},
    {name:"Mines", value: 125, price:800_000, displayPrice: "$800K"},
    {name:"Trade Port", value: 200, price: 10_000_000, displayPrice: "$10M"},
    {name:"Interplanetary Exchange", value: 350, price: 500_000_000, displayPrice: "$500M"},
    {name:"Colonial Corporation", value: 600, price: 15_000_000_000, displayPrice: "$15B"},
    {name:"Colony Currency", value: 1000, price: 500_000_000_000, displayPrice: "$500B" },
];

const birthRateUpgrades=[
    {name:"Hire a Midwife", value: 1, price: 5_000, displayPrice: "$5K"},
    {name: "Build a Maternity Ward", value: 2, price: 40_000, displayPrice: "$40K" },
    {name: "Expand the Maternity Ward", value: 3, price: 200_000, displayPrice: "$200K"},
    {name: "Perinatal Center", value: 5, price: 2_000_000, displayPrice: "$2M"},
    //percentage upgrades//
    {name: "Genetics Lab", value: "0.75%", price: 50_000_000, displayPrice: "$50M" },
    {name: "Incubators", value: "1.5%", price: 800_000_000, displayPrice: "$800M"},
    {name: "Orbital Birthing Stations", value: "2.5%", price: 15_000_000_000, displayPrice: "$15B"},
    {name: "Embryo Bank", value: "4%", price: 250_000_000_000, displayPrice: "$250B"},
    {name: "Artificial Wombs", value: "6%", price: 4_000_000_000_000, displayPrice: "$4T"}
];

const policyUpgrades= [
    {name: "Ban Condoms", value: 6, price: 150_000, displayPrice: "$150K"},
    {name: "Childlessness Tax", value: 12, price: 3_000_000, displayPrice: "$3M"},
    {name: "State Birth Quota", value: 21, price: 100_000_000, displayPrice: "$100M"},
    {name: "Cancel Evening Entertainment", value: 36, price: 800_000_000, displayPrice: "$800M"},
    //percentage upgrades//
    {name: "Mandatory Childbearing", value: "3%", price: 8_000_000_000, displayPrice: "$8B"},
    {name: "Make Everyone Pregnant", value: "9%", price: 250_000_000_000, displayPrice: "$250B"}
];

//Upgrade elements//
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

let upgradeContainers = [
    { btn: upgradeOneBtn, title: upgradeOneTitlePrice, currentValue: upgradeOneTooltipCurrentValue, nextValue: upgradeOneTooltipNextValue, upgrades: callToActionUpgrades, index: 0, modifier: 1 , defaultModifier: 1},
    { btn: upgradeTwoBtn, title: upgradeTwoTitlePrice, currentValue: upgradeTwoTooltipCurrentValue, nextValue: upgradeTwoTooltipNextValue, upgrades: birthRateUpgrades, index: 0, modifier: 0, defaultModifier: 0 },
    { btn: upgradeThreeBtn, title: upgradeThreeTitlePrice, currentValue: upgradeThreeTooltipCurrentValue, nextValue: upgradeThreeTooltipNextValue, upgrades: economyUpgrades, index: 0, modifier: 50, defaultModifier: 50 },
    { btn: upgradeFourBtn, title: upgradeFourTitlePrice, currentValue: upgradeFourTooltipCurrentValue, nextValue: upgradeFourTooltipNextValue, upgrades: policyUpgrades, index: 0, modifier: 0, defaultModifier: 0 },
];

for (let i = 0; i < 4; i++) {
    upgradeContainers[i].btn.addEventListener("click", () => upgradeFunc(upgradeContainers[i]))
}

function upgradeFunc(upgradeObj){
    if (upgradeObj.index > upgradeObj.upgrades.length - 1)
    {
        upgradeObj.btn.classList.add("clicked");
        setTimeout(() => upgradeObj.btn.classList.remove("clicked"), 500);
    }
    else if (upgradeObj.index === upgradeObj.upgrades.length - 1 && balance > upgradeObj.upgrades[upgradeObj.index].price)
    {
        upgradeObj.btn.textContent = "Sold";
        balance -= upgradeObj.upgrades[upgradeObj.index].price
        upgradeObj.title.textContent = "";
        upgradeObj.currentValue.textContent = upgradeObj.upgrades[upgradeObj.index].value;
        upgradeObj.nextValue.textContent = "Max";
        upgradeObj.modifier = upgradeObj.upgrades[upgradeObj.index].value;
        upgradeObj.btn.classList.add("sold");
        upgradeObj.btn.classList.add("clicked");
        setTimeout(() => upgradeObj.btn.classList.remove("clicked"), 500);
        updateStatus();
        upgradeObj.index += 1;
    }
    else if (balance > upgradeObj.upgrades[upgradeObj.index].price){
        upgradeObj.index += 1;
        balance -= upgradeObj.upgrades[upgradeObj.index - 1].price
        upgradeObj.btn.textContent = upgradeObj.upgrades[upgradeObj.index].name;
        upgradeObj.title.textContent = " - " + upgradeObj.upgrades[upgradeObj.index].displayPrice;
        upgradeObj.currentValue.textContent = upgradeObj.upgrades[upgradeObj.index - 1].value;
        upgradeObj.nextValue.textContent = upgradeObj.upgrades[upgradeObj.index].value;
        upgradeObj.modifier = upgradeObj.index === 0 ? upgradeObj.defaultModifier : upgradeObj.upgrades[upgradeObj.index-1].value;
        updateStatus();
        upgradeObj.btn.classList.add("bought");
        setTimeout(() => upgradeObj.btn.classList.remove("bought"), 500);
    }
    else {
        upgradeObj.btn.classList.add("no-money");
        setTimeout(() => upgradeObj.btn.classList.remove("no-money"), 500);
    }
    auraUpdate();
}

function auraUpdate(){
    aura.style.setProperty('--aura-opacity', upgradeContainers[3].index * 0.08);
}

//    SAVING PROGRESS                                        SAVING PROGRESS

window.addEventListener("beforeunload", saveProgress);
window.addEventListener("load", loadProgress);

function saveProgress(){
    localStorage.setItem("population", population);
    localStorage.setItem("balance", balance);
    localStorage.setItem("upgradeOneIndex", upgradeContainers[0].index);
    localStorage.setItem("upgradeTwoIndex", upgradeContainers[1].index);
    localStorage.setItem("upgradeThreeIndex", upgradeContainers[2].index);
    localStorage.setItem("upgradeFourIndex", upgradeContainers[3].index);
    // resetProgress() // Uncomment this line to reset progress and test the game
}

function loadProgress(){
    population = Number(localStorage.getItem("population")) || 10;
    balance = Number(localStorage.getItem("balance")) || 0;
    upgradeContainers[0].index = Number(localStorage.getItem("upgradeOneIndex") || 0);
    upgradeContainers[1].index = Number(localStorage.getItem("upgradeTwoIndex") || 0);
    upgradeContainers[2].index = Number(localStorage.getItem("upgradeThreeIndex") || 0);
    upgradeContainers[3].index = Number(localStorage.getItem("upgradeFourIndex") || 0);
    for (let i = 0; i < 4; i++) {
        let upgradeObj = upgradeContainers[i];
        upgradeObj.modifier = upgradeObj.index === 0 ? upgradeObj.defaultModifier : upgradeObj.upgrades[upgradeObj.index-1].value;
        upgradeObj.currentValue.textContent = upgradeObj.index === 0 ? upgradeObj.defaultModifier : upgradeObj.upgrades[upgradeObj.index-1].value;
        upgradeObj.btn.textContent = upgradeObj.upgrades[upgradeObj.index].name;
        upgradeObj.title.textContent = " - " + upgradeObj.upgrades[upgradeObj.index].displayPrice;
        upgradeObj.nextValue.textContent = upgradeObj.upgrades[upgradeObj.index].value;
    }
    updateStatus();
    auraUpdate();
}

function resetProgress(){
    population = 10;
    balance = 0;
    for (let i = 0; i < 4; i++) {
        upgradeContainers[i].index = 0;
    }
    localStorage.setItem("guided", "false");
    saveProgress();
    updateStatus();
}