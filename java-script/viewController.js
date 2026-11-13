const upgradeMoonBtn = document.querySelector(".upgrade-moon-button");
const guideMoonBtn = document.querySelector(".guide-moon-button");

const main = document.querySelector("main");
const upgradeSec = document.querySelector(".upgrade-section");
const guideSec = document.querySelector(".guide-section");
const glossarySec = document.querySelector(".glossary-section");

let view = 0; // 0 - no menus, 1 - upgrade menu, 2 - guide panels

upgradeMoonBtn.addEventListener("click", (e) => {
    if(view === 1){
        setTimeout(() => { main.classList.remove("upgrade-open") }, 500);
        upgradeSec.classList.remove("open");
        view = 0;
    }
    else if(view === 0){
        main.classList.add("upgrade-open");
        upgradeSec.classList.add("open");
        view = 1;
    }
    else{
        guideSec.classList.remove("open");
        glossarySec.classList.remove("open");
        setTimeout(() => { main.classList.remove("guide-open") }, 500);
        setTimeout(() => { main.classList.add("upgrade-open") }, 500);
        setTimeout(() => { upgradeSec.classList.add("open") }, 500);
        view = 1;
    }
})

guideMoonBtn.addEventListener("click", (e) => {
    if(view === 2){
        setTimeout(() => { main.classList.remove("guide-open") }, 500);
        guideSec.classList.remove("open");
        glossarySec.classList.remove("open");
        view = 0;
    }
    else if(view === 0){
        main.classList.add("guide-open");
        guideSec.classList.add("open");
        glossarySec.classList.add("open");
        view = 2;
    }
    else{
        upgradeSec.classList.remove("open");
        setTimeout(() => { main.classList.remove("upgrade-open") }, 500);
        setTimeout(() => { main.classList.add("guide-open") }, 500);
        setTimeout(() => { guideSec.classList.add("open") }, 500);
        setTimeout(() => { glossarySec.classList.add("open") }, 500);
        view = 2;
    }
})