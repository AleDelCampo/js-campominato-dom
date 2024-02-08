let randomsArray = [];
let bombPositions = [];
let clickedSquares = 0;
let score = 0;
let gameOver = false;

const grid = document.querySelector("#grid-container");
const result = document.getElementById("result");
const button = document.getElementById("button");
const select = document.getElementById("diff-select");

select.addEventListener("change", function() {
    let difficult = select.value;

    switch (difficult) {
        case "easy":
            randomsArray = createRandoms(100);
            squareClass = "square-easy";
            cells = 100;
            break;
        case "medium":
            randomsArray = createRandoms(81);
            squareClass = "square-medium";
            cells = 81;
            break;
        case "expert":
            randomsArray = createRandoms(49);
            squareClass = "square-expert";
            cells = 49;
            break;
        default:
            break;
    }
});

button.addEventListener("click", function() {
    grid.innerHTML = "";
    result.innerHTML = "";
    bombPositions = randomsArray.slice(0, 16);
    gameOver = false;
    clickedSquares = 0;
    score = 0;
    score = 0;
    createGrid();
});

function createGrid() {
    for (let i = 0; i < cells; i++) {
        const square = document.createElement("div");
        square.classList.add(squareClass);
        square.dataset.cell = i;
        square.textContent = i + 1;
        square.addEventListener("click", clickSquare);
        grid.append(square);
    }
}

let cells;

function clickSquare() {
    if (gameOver) return;

    const cell = parseInt(this.dataset.cell);

    if (bombPositions.includes(cell + 1)) {
        revealBombs();
        gameOver = true;
        document.getElementById("result").innerText = `KABOOOOOOOOM!! Hai evitato solo ${score} mine.`;
        return;
    }

    this.style.backgroundColor = "lightblue";
    clickedSquares++;
    score++;

    if (clickedSquares === cells - bombPositions.length) {
        gameOver = true;
        document.getElementById("result").innerText = `Ne esci vittorioso, non hai calpestato alcuna mina. Complimenti soldato!! ${cells - bombPositions.length}`;
    }
}

function revealBombs() {
    const squares = document.querySelectorAll(".square-easy, .square-medium, .square-expert");
    for (let i = 0; i < bombPositions.length; i++) {
        const bomb = bombPositions[i] - 1;
        squares[bomb].style.backgroundColor = "red";
    }
}

function createRandoms(max) {
    let randomNumbers = [];
    for (let i = 0; i < 16; i++) {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * max) + 1;
        } while (randomNumbers.includes(randomNum));
        randomNumbers.push(randomNum);
    }
    return randomNumbers;
}