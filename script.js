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
        button.addEventListener("click", () => {
          if (activePlayer.playPiece === "X") {
            button.textContent = "X";
            GameBoard[i] = "X";
            activePlayer = players[1];
          } else if (activePlayer.playPiece === "O") {
            button.textContent = "O";
            GameBoard[i] = "O";
            activePlayer = players[0];
          }
          button.disabled = true;
          updatePlayerAnnouncer(`${activePlayer.name}'s turn`);
          testWin();
        });
      }
    })();

    const turnAnnouncer = document.querySelector(`#turn-announcer`);
    function updatePlayerAnnouncer(text) {
      turnAnnouncer.textContent = text;
    }
    updatePlayerAnnouncer(`${activePlayer.name}'s turn`);

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
        if (activePlayer === players[0]) {
          activePlayer = players[1];
        } else if (activePlayer === players[1]) {
          activePlayer = players[0];
        }
        alert(`${activePlayer.name} wins!`);
        delete players[0].playPiece;
        delete players[1].playPiece;
        activePlayer.addScore();
        console.log(activePlayer.runningScore());
        updatePlayerAnnouncer(
          `${activePlayer.name} score: ${activePlayer.runningScore()}`
        );
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
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", function () {
      players[0].playPiece = "X";
      players[1].playPiece = "O";
      if (activePlayer === players[0]) {
        activePlayer = players[1];
      } else if (activePlayer === players[1]) {
        activePlayer = players[0];
      }
      updatePlayerAnnouncer(`${activePlayer.name}'s turn`);
      for (let i = 0; i <= 8; i++) {
        document.getElementById(`space-${i}`).textContent = "";
        document.getElementById(`space-${i}`).disabled = false;
        GameBoard[i] = `${i}`;
      }
    });
  };

  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", () => {
    playGame();
  });
})();

// Make it so that test win comes before updating the bottom bit - tough as want to update with the correct turn
