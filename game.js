et gameState = {
    year: 1914,
    money: 1000,
    army: 100000,
    industry: 50,
    events: ["�������� ������ ������� �����!"]
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
        gameState.events.push("������ 10,000 ������.");
        updateUI();
    } else {
        alert("�� ������� �����!");
    }
}

function buildFactory() {
    if (gameState.money >= 300) {
        gameState.industry += 1;
        gameState.money -= 300;
        gameState.events.push("�������� ����� �����.");
        updateUI();
    } else {
        alert("�� ������� �����!");
    }
}

function nextTurn() {
    gameState.year += 1;
    gameState.money += gameState.industry * 10;
    
    const events = [
        "����� ��� �������: ������ 20K ������.",
        "������������� ����: +500 ���. $",
        "��������: -10K ������."
    ];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    gameState.events.push(randomEvent);
    
    if (randomEvent.includes("������")) gameState.army -= 20000;
    if (randomEvent.includes("����")) gameState.money += 500;
    if (randomEvent.includes("��������")) gameState.army -= 10000;
    
    updateUI();
}

updateUI();