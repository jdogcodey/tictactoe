const startGame = (() => {
  const playGame = () => {
    // IIFE to create the gameboard array
    const GameBoard = (() => {
      const gameBoard = [];
      for (let i = 0; i <= 8; i++) {
        gameBoard[i] = `${i}`;
      }
      return gameBoard;
    })();
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
    let activePlayer = players[0];

    // IIFE to add playability to the buttons
    const buttonClick = (() => {
      for (let i = 0; i <= 8; i++) {
        const button = document.getElementById(`space-${i}`);
        button.addEventListener(
          "click",
          () => {
            if (activePlayer.playPiece === "X") {
              button.textContent = "X";
              GameBoard[i] = "X";
              testWin();
              activePlayer = players[1];
              updatePlayerAnnouncer();
            } else if (activePlayer.playPiece === "O") {
              button.textContent = "O";
              GameBoard[i] = "O";
              testWin();
              activePlayer = players[0];
              updatePlayerAnnouncer();
            }
          },
          { once: true }
        );
      }
    })();

    const turnAnnouncer = document.querySelector(`#turn-announcer`);
    function updatePlayerAnnouncer() {
      turnAnnouncer.textContent = `${activePlayer.name}'s turn`;
    }
    updatePlayerAnnouncer();

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
        alert(`${activePlayer.name} wins`);
        delete players[0].playPiece;
        delete players[1].playPiece;
      } else if (
        GameBoard[0] !== `0` &&
        GameBoard[1] !== `1` &&
        GameBoard[2] !== `2` &&
        GameBoard[3] !== `3` &&
        GameBoard[4] !== `4` &&
        GameBoard[5] !== `5` &&
        GameBoard[6] !== `6` &&
        GameBoard[7] !== `7` &&
        GameBoard[8] !== `8`
      ) {
        alert(`It's a DRAW!`);
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

const restart = (() => {
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function () {
    document.querySelector(`#turn-announcer`).textContent = "";
    for (let i = 0; i <= 8; i++) {
      document.getElementById(`space-${i}`).textContent = "";
    }
  });
})();

// Add start and end button
// Output who won and end the game
// Update the score
// Add a score counter
// Change the design to make it look good
