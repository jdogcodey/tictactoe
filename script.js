const GameBoard = (() => {
  const gameBoard = [];
  for (let i = 0; i <= 8; i++) {
    gameBoard[i] = `${i}`;
  }
  return gameBoard;
})();

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
      let button = document.getElementById(`space-${i}`);
      button.addEventListener(
        "click",
        () => {
          if (playPiece === "X") {
            playPiece = "O";
            button.textContent = "X";
            GameBoard[i] = "X";
            testWin();
          } else {
            playPiece = "X";
            button.textContent = "O";
            GameBoard[i] = "O";
            testWin();
          }
        },
        { once: true }
      );
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
      console.log(`${playPiece} Won`);
    }
  }
};

// Add start and end button
// Make it so you can't play on someone else's move
// Output who won and end the game
// Update the score
// Add a score counter
// Change the design to make it look good
