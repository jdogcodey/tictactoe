const GameBoard = (() => {
  const gameBoard = [];
  for (let i = 0; i <= 8; i++) {
    gameBoard[i] = `${i}`;
    gameBoard[i] = document
      .querySelector(`#space-${i}`)
      .addEventListener("click", () => {
        console.log(`button ${i} pressed`);
      });
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
  //Create player one and two
  const playerOne = createPlayer(1, `X`);
  const playerTwo = createPlayer(2, `O`);
  console.log(playerOne);
  console.log(playerTwo);
  // Win criteria
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
};

//create two players by repeating code using factory function for each player
//player contains name, X/O score
//player contains factory function to increase score by 1
//create gameboard with 9 array items created using factory function
//Create playgame that goes from players1 to player2 back and forth until a row is created - then announces winner
