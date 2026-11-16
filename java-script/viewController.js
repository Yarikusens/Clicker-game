const upgradeMoonBtn = document.querySelector(".upgrade-moon-button");
const guideMoonBtn = document.querySelector(".guide-moon-button");

const main = document.querySelector("main");
const upgradeSec = document.querySelector(".upgrade-section");
const guideSec = document.querySelector(".guide-section");
const glossarySec = document.querySelector(".glossary-section");

const planetHint = document.querySelector(".planet-hint");
const upgradeButtonHint = document.querySelector(".upgrade-moon-hint");
const guideButtonHint = document.querySelector(".guide-moon-hint");

let view = 0; // 0 - no menus, 1 - upgrade menu, 2 - guide panels
let buttonBlocked = false;

upgradeMoonBtn.addEventListener("click", (e) => {
    if(buttonBlocked === false){
        if(view === 1){
            buttonBlocked = true;
            setTimeout(() => { main.classList.remove("upgrade-open") }, 500);
            upgradeSec.classList.remove("open");
            view = 0;
            setTimeout(() => { buttonBlocked = false }, 500);
        }
        else if(view === 0){
            buttonBlocked = true;
            main.classList.add("upgrade-open");
            upgradeSec.classList.add("open");
            view = 1;
            setTimeout(() => { buttonBlocked = false }, 500);
        }
        else{
            buttonBlocked = true;
            guideSec.classList.remove("open");
            glossarySec.classList.remove("open");
            setTimeout(() => { main.classList.remove("guide-open") }, 500);
            setTimeout(() => { main.classList.add("upgrade-open") }, 500);
            setTimeout(() => { upgradeSec.classList.add("open") }, 500);
            view = 1;
            setTimeout(() => { buttonBlocked = false }, 1000);
        }
    }
})

guideMoonBtn.addEventListener("click", (e) => {
    if (buttonBlocked === false){
        if(view === 2){
            buttonBlocked = true;
            setTimeout(() => { main.classList.remove("guide-open") }, 500);
            guideSec.classList.remove("open");
            glossarySec.classList.remove("open");
            view = 0;
            setTimeout(() => { buttonBlocked = false }, 500);
        }
        else if(view === 0){
            buttonBlocked = true;
            main.classList.add("guide-open");
            guideSec.classList.add("open");
            glossarySec.classList.add("open");
            view = 2;
            setTimeout(() => { buttonBlocked = false }, 500);
        }
        else{
            buttonBlocked = true;
            upgradeSec.classList.remove("open");
            setTimeout(() => { main.classList.remove("upgrade-open") }, 500);
            setTimeout(() => { main.classList.add("guide-open") }, 500);
            setTimeout(() => { guideSec.classList.add("open") }, 500);
            setTimeout(() => { glossarySec.classList.add("open") }, 500);
            view = 2;
            setTimeout(() => { buttonBlocked = false }, 1000);
        }
    }
})

window.addEventListener("load", () => {
    if (localStorage.getItem("guided") === "true"){
        hideStartMenu();
        setInterval(earnMoney, 1000);
    }
});

guideMoonBtn.addEventListener("click", hideStartMenu);

function hideStartMenu(){
    if (!planetHint.hasAttribute("hidden")){
        planetHint.setAttribute("hidden", "");
    }
    if (!guideButtonHint.hasAttribute("hidden")){
        guideButtonHint.setAttribute("hidden", "");
    }
    if (!upgradeButtonHint.hasAttribute("hidden")){
        upgradeButtonHint.setAttribute("hidden", "");
    }
    if (localStorage.getItem("guided") !== "true")
    {
        setInterval(earnMoney, 1000);
        localStorage.setItem("guided", "true");
    }
}