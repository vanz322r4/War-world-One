et gameState = {
    year: 1914,
    money: 1000,
    army: 100000,
    industry: 50,
    events: ["Началась Первая мировая война!"]
};

function updateUI() {
    document.getElementById("year").textContent = gameState.year;
    document.getElementById("money").textContent = gameState.money;
    document.getElementById("army").textContent = gameState.army;
    document.getElementById("industry").textContent = gameState.industry;
    document.getElementById("event-log").innerHTML = gameState.events.map(e => `<p>${e}</p>`).join("");
}

function recruitArmy() {
    if (gameState.money >= 200) {
        gameState.army += 10000;
        gameState.money -= 200;
        gameState.events.push("Нанято 10,000 солдат.");
        updateUI();
    } else {
        alert("Не хватает денег!");
    }
}

function buildFactory() {
    if (gameState.money >= 300) {
        gameState.industry += 1;
        gameState.money -= 300;
        gameState.events.push("Построен новый завод.");
        updateUI();
    } else {
        alert("Не хватает денег!");
    }
}

function nextTurn() {
    gameState.year += 1;
    gameState.money += gameState.industry * 10;
    
    const events = [
        "Битва при Вердене: потери 20K солдат.",
        "Экономический рост: +500 млн. $",
        "Эпидемия: -10K солдат."
    ];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    gameState.events.push(randomEvent);
    
    if (randomEvent.includes("потери")) gameState.army -= 20000;
    if (randomEvent.includes("рост")) gameState.money += 500;
    if (randomEvent.includes("Эпидемия")) gameState.army -= 10000;
    
    updateUI();
}

updateUI();