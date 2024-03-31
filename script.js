const GameBoard = (() => {
  const gameBoard = [];
  for (let i = 0; i <= 8; i++) {
    gameBoard[i] = `${i}`;
    //   .addEventListener("click", () => {
    //     console.log(`button ${i} pressed`);
    //   });
  }
  console.log(gameBoard);
  return gameBoard;
})();
console.log(GameBoard);

const playGame = () => {
  // Factory Function to create a new player
  function createPlayer(playerNumber, playerPiece) {
    const name = prompt(`Player ${playerNumber} name`);
    let score = 0;
    const playPiece = playerPiece;
    let runningScore = () => score;
    let addScore = () => score++;
    return { name, playPiece, runningScore, addScore };
  }
  //Create player one and two and initiate playPiece
  const playerOne = createPlayer(1, `X`);
  const playerTwo = createPlayer(2, `O`);
  console.log(playerOne);
  console.log(playerTwo);
  let playPiece = "X";

  const buttonClick = (() => {
    for (let i = 0; i <= 8; i++) {
      document.querySelector(`#space-${i}`).addEventListener("click", () => {
        if (playPiece === "X") {
          playPiece = "O";
          document.querySelector(`#space-${i}`).textContent = "X";
          GameBoard[i] = "X";
          testWin();
        } else {
          playPiece = "X";
          document.querySelector(`#space-${i}`).textContent = "O";
          GameBoard[i] = "O";
          testWin();
        }
      });
    }
  })();

  // Win criteria
  function testWin() {
    if (
      (GameBoard[0] === GameBoard[1] && GameBoard[0] === GameBoard[2]) ||
      (GameBoard[3] === GameBoard[4] && GameBoard[3] === GameBoard[5]) ||
      (GameBoard[6] === GameBoard[7] && GameBoard[6] === GameBoard[8]) ||
      (GameBoard[0] === GameBoard[4] && GameBoard[0] === GameBoard[8]) ||
      (GameBoard[2] === GameBoard[4] && GameBoard[2] === GameBoard[6]) ||
      (GameBoard[0] === GameBoard[3] && GameBoard[0] === GameBoard[6]) ||
      (GameBoard[1] === GameBoard[4] && GameBoard[1] === GameBoard[7]) ||
      (GameBoard[2] === GameBoard[5] && GameBoard[2] === GameBoard[8])
    ) {
      console.log("Game Won");
    }
  }
};

// Add a variable that updates - when even is X, when odd is O
// Make it so on button press the text content updates to X/O, removes the button listener (might need to move this all down into the game)
//
