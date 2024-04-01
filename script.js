const GameBoard = (() => {
  const gameBoard = [];
  for (let i = 0; i <= 8; i++) {
    gameBoard[i] = `${i}`;
  }
  return gameBoard;
})();

const startGame = (() => {
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
    const players = [createPlayer(1, `X`), createPlayer(2, `O`)];
    let playPiece = players[0];

    const buttonClick = (() => {
      for (let i = 0; i <= 8; i++) {
        const button = document.getElementById(`space-${i}`);
        button.addEventListener(
          "click",
          () => {
            if (playPiece.playPiece === "X") {
              button.textContent = "X";
              GameBoard[i] = "X";
              testWin();
              playPiece = players[1];
            } else if (playPiece.playPiece === "O") {
              button.textContent = "O";
              GameBoard[i] = "O";
              testWin();
              playPiece = players[0];
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
        alert(`${playPiece.name} wins`);
        delete players[0].playPiece;
        delete players[1].playPiece;
      }
    }
  };

  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", () => {
    playGame();
  });
})();

// Add start and end button
// Output who won and end the game
// Update the score
// Add a score counter
// Change the design to make it look good
