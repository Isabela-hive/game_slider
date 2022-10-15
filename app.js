let cells = document.querySelectorAll(".cell");
[...cells].map((c) => c.addEventListener("click", play));

let clicked_cells = 0;
let p1_plays = "";
let p2_plays = "";

function play(e) {
  e.target.removeEventListener("click", play);
  e.target.classList.add(!(clicked_cells % 2) ? "red" : "green");
  document.querySelector("p").textContent = !(clicked_cells % 2)
    ? `Player Two's Turn - Green`
    : `Player One's Turn - Red`;
  clicked_cells < 9 ? clicked_cells++ : (clicked_cells = 1);
  let value = e.target.getAttribute("data-value");

  if (!(clicked_cells % 2)) {
    p2_plays += value;
    p2_plays = p2_plays.split("").sort().join("");
  } else {
    p1_plays += value;
    p1_plays = p1_plays.split("").sort().join("");
  }

  const result = checkWinner(p1_plays, p2_plays);

  const { winner, player_one } = result;

  if (winner) {
    alert(`Player ${player_one ? "One" : "Two"} wins`);
    resetGame();
  }

  if (clicked_cells === 9) {
    alert("Game over. No winner");
    resetGame();
  }
}

function resetGame() {
  clicked_cells = 0;
  [...cells].map((c) => {
    c.addEventListener("click", play);
    c.classList.remove("green");
    c.classList.remove("red");
  });
  document.querySelector("p").textContent = `Player One's Turn - Red`;
  p1_plays = "";
  p2_plays = "";
}

console.log("12345".indexOf("24"));

function checkWinner(p1, p2) {
  const player_one = !!(clicked_cells % 2);
  const plays = player_one ? p1 : p2;
  const WINNING_COMBINATIONS = [
    "123",
    "456",
    "789",
    "147",
    "258",
    "369",
    "159",
    "357",
  ];

  const results = WINNING_COMBINATIONS.map((c) => plays.indexOf(c) > -1);
  const found = !!results.filter((r) => r === true).length;
  return { winner: found, player_one };
}
