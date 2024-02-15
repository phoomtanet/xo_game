var moveHistory = [];
var currentPlayer = "X";
var player = document.getElementById("player");
var spanPlayer = document.getElementById("spanPlayer");

function createTable() {
  var inputValue = document.getElementById("inputText").value;
  const inputNumber = parseInt(inputValue);
  var matrix = [];
  var row;
  if (!isNaN(inputNumber) && inputNumber > 2) {
    for (var i = 0; i < inputNumber; i++) {
      row = Array(inputNumber).fill(" ");
      matrix.push(row);
    }
    displayTable(matrix);
    console.log("input " + inputValue);
    console.log(matrix + "matrix");
  } else {
    alert("กรุณาป้อน ตัวเลข 3 ขึ้นไป");
  }

  player.style.display = "block";
}

function reset() {
  moveHistory = [];
  createTable();
  currentPlayer = "X";
  spanPlayer.innerHTML = "X";
  spanPlayer.style.color = "red";
}

function displayTable(matrix) {
  var displayArea = document.getElementById("displayArea");
  var table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  for (var i = 0; i < matrix.length; i++) {
    var row = table.insertRow();
    for (var j = 0; j < matrix[i].length; j++) {
      var cell = row.insertCell();

      var button = document.createElement("button");
      button.textContent = "-";
      console.log("mat" + matrix.length);
      if (matrix.length < 10) {
        button.style.width = "100px";
        button.style.height = "100px";
      } else if (matrix.length < 20) {
        button.style.width = "60px";
        button.style.height = "60px";
      } else {
        button.style.width = "40px";
        button.style.height = "40px";
      }
      button.onclick = createButtonClickHandler(i, j, matrix, button);
      cell.appendChild(button);
    }
  }

  displayArea.innerHTML = "";
  displayArea.appendChild(table);
}

function checkWinner(matrix, row, col, st) {
  function checkHorizontal() {
    return (
      (matrix[row][col - 1] == st && matrix[row][col + 1] == st) ||
      (matrix[row][col + 1] == st && matrix[row][col + 2] == st) ||
      (matrix[row][col - 1] == st && matrix[row][col - 2] == st)
    );
  }

  function checkVertical() {
    return (
      (matrix[row - 1] &&
        matrix[row - 1][col] == st &&
        matrix[row + 1] &&
        matrix[row + 1][col] == st) ||
      (matrix[row + 1] &&
        matrix[row + 1][col] == st &&
        matrix[row + 2] &&
        matrix[row + 2][col] == st) ||
      (matrix[row - 1] &&
        matrix[row - 1][col] == st &&
        matrix[row - 2] &&
        matrix[row - 2][col] == st)
    );
  }

  function checkDiagonal_1() {
    return (
      (matrix[row - 1] &&
        matrix[row - 1][col + 1] == st &&
        matrix[row + 1] &&
        matrix[row + 1][col - 1] == st) ||
      (matrix[row + 1] &&
        matrix[row + 1][col - 1] == st &&
        matrix[row + 2] &&
        matrix[row + 2][col - 2] == st) ||
      (matrix[row - 1] &&
        matrix[row - 1][col + 1] == st &&
        matrix[row - 2] &&
        matrix[row - 2][col + 2] == st)
    );
  }

  function checkDiagonal_2() {
    return (
      (matrix[row - 1] &&
        matrix[row - 1][col - 1] == st &&
        matrix[row + 1] &&
        matrix[row + 1][col + 1] == st) ||
      (matrix[row + 1] &&
        matrix[row + 1][col + 1] == st &&
        matrix[row + 2] &&
        matrix[row + 2][col + 2] == st) ||
      (matrix[row - 1] &&
        matrix[row - 1][col - 1] == st &&
        matrix[row - 2] &&
        matrix[row - 2][col - 2] == st)
    );
  }

  if (
    checkHorizontal() ||
    checkVertical() ||
    checkDiagonal_1() ||
    checkDiagonal_2()
  ) {
    console.log(`${st} wins`);
    sendMoveHistoryToServer(st, matrix.length);
  } else if (moveHistory.length == matrix.length * matrix.length) {
    // console.log("เสมอ  ขนาด"+matrix.length);
    sendMoveHistoryToServer(st, matrix.length);
  }
}

function createButtonClickHandler(i, j, matrix, button) {
  return function () {
    if (matrix[i][j] === " ") {
      matrix[i][j] = currentPlayer;
      const st = matrix[i][j];
      button.textContent = matrix[i][j];

      currentPlayer = currentPlayer === "X" ? "O" : "X";
      if (currentPlayer === "X") {
        button.style.color = "red";
        spanPlayer.innerHTML = "X";
        spanPlayer.style.color = "red";
        button.style.fontWeight = "bold";
        if (matrix.length < 10) {
          button.style.fontSize = "30px";
        } else if (matrix.length < 10) {
          button.style.fontSize = "20px";
        } else {
          button.style.fontSize = "15px";
        }
      }
     else {
      spanPlayer.innerHTML = "O";
      spanPlayer.style.color = "yellow";
      button.style.color = "";

      button.style.fontWeight = "bold";
      if (matrix.length < 10) {
        button.style.fontSize = "30px";
      } else if (matrix.length < 10) {
        button.style.fontSize = "20px";
      } else {
        button.style.fontSize = "15px";
      }
    }

    // reset.disabled = false;

    console.log("mat" + matrix.length);
    addMoveHistory(i, j, st);
    checkWinner(matrix, i, j, st);
  };
}
}
function addMoveHistory(i, j, player) {
  moveHistory.push({ player: player, row: i, col: j });
  // console.log(moveHistory);
}

function sendMoveHistoryToServer(st, matrix) {
  $.ajax({
    type: "POST",
    url: "sql.php",
    data: { moveData: JSON.stringify(moveHistory), matrixSize: matrix },
    success: function (response) {
      console.log(response);
      if (moveHistory.length == matrix * matrix) {
        alert("Always");
      } else {
        console.log(moveHistory.length + "เสมอ  ขนาด" + matrix);

        alert(`Player ${st} wins`);
        // location.reload();
      }
      reset();
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
}
