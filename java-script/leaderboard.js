const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0XD5NtLQRwEtBfi3oI2ed6DgQbROXSQlfuBDkDQM0oqga2pkTTnz1pYGoTmushiDQ/exec";
let tableData = [
    {name: "name1", score: 1000},
    {name: "name2", score: 900},
    {name: "name3", score: 800},
    {name: "name4", score: 700},
    {name: "name5", score: 600},
    {name: "name6", score: 500},
    {name: "name7", score: 400},
    {name: "name8", score: 300},
    {name: "name9", score: 200},
    {name: "name10", score: 100},
];

const table = document.querySelector("table");
const form = document.querySelector("form");
const inputField = document.querySelector("input");
const yourScore = document.querySelector("span");


loadScore();
loadTable().then(r => updateTable());


function loadScore() {
    yourScore.textContent = new Intl.NumberFormat("en-US").format(localStorage.getItem("population"));
}

async function loadTable() {
    const response = await fetch(SCRIPT_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    tableData = await response.json();
}

function updateTable() {
    for (let i = 1; i < tableData.length+1; i++) {
        table.rows[i].cells[1].textContent = tableData[i-1].name;
        table.rows[i].cells[2].textContent = new Intl.NumberFormat("en-US").format(tableData[i-1].score);
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await loadTable().then(r => updateTable());
    updateTable();

    const name = inputField.value.trim();
    const score = Number(localStorage.getItem("population"));
    if (!name || !Number.isFinite(score)) return;

    const oldIndex = tableData.findIndex(row => row.name === name);

    if (oldIndex !== -1 && tableData[oldIndex].score >= score) return;

    const newIndex = tableData.findIndex(row => row.score < score);
    if (newIndex === -1) return;

    if (oldIndex !== -1) tableData.splice(oldIndex, 1);
    tableData.splice(newIndex, 0, { name, score });
    if (oldIndex === -1) tableData.pop();

    updateTable();
    uploadTable();
})

async function uploadTable() {
    const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(tableData)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
}