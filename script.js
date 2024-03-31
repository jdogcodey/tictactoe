const GameBoard = (() => {
  const gameBoard = [];
  for (let i = 0; i <= 9; i++) {
    gameBoard[i] = "";
  }
  console.log(gameBoard);
})();

function createPlayer(playerNumber, playerPiece) {
  const name = prompt(`Player ${playerNumber} name`);
  let score = 0;
  const playPiece = playerPiece;
  let runningScore = () => score;
  let addScore = () => score++;
  return { name, playPiece, runningScore, addScore };
}

const playGame = () => {
  const playerOne = createPlayer(1, `X`);
  const playerTwo = createPlayer(2, `O`);
  console.log(playerOne);
  console.log(playerTwo);
};

//create two players by repeating code using factory function for each player
//player contains name, X/O score
//player contains factory function to increase score by 1
//create gameboard with 9 array items created using factory function
//Create playgame that goes from players1 to player2 back and forth until a row is created - then announces winner
