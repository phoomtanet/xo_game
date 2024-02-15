function historyFunction(selectedId) {
  document.getElementById("count").innerHTML ="0";
  document.getElementById("count").value = 0;
  
  console.log("co "+document.getElementById("count").innerHTML);
if(document.getElementById("count").innerHTML == "0" ){

  document.getElementById("decrement").disabled = true;

}

$.ajax({
    type: "POST",
    url: "sql_history.php",
    data: { selectedId: selectedId },
    success: function (response) {
      var responseData = JSON.parse(response);
      responseData.forEach(function (item) {
        var id = item.id;
        var moves = item.moves;
        var matrixSize = item.matrixSize;
        var data = JSON.parse(moves);
        createTableHis(matrixSize, data);
      });
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });

}

function createTableHis(matrixSizecol, moves) {
  var matrix = [];
  var row;
  var matrixSize = parseInt(matrixSizecol);

  if (!isNaN(matrixSize)) {
    for (var i = 0; i < matrixSize; i++) {
      row = Array(matrixSize).fill(" ");
      matrix.push(row);
    }
    //   console.log(matrixSize +"input");
      console.log(moves);
    displayTableHis(matrix, moves);
  } else {
    alert("กรุณาป้อน ตัวเลข");
  }
}

function displayTableHis(matrix, moves) {
  var displayArea = document.getElementById("displayArea");
  var table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  var playbuton = document.getElementById("play");

  for (var i = 0; i < matrix.length; i++) {
    var row = table.insertRow();
    for (var j = 0; j < matrix[i].length; j++) {
      var cell = row.insertCell();

      var button = document.createElement("button");
      button.style.width = "60px";
      button.style.height = "60px";
      button.textContent = "-";
      var buttonId = "" + i + "" + j + "";
      button.id = buttonId;
       var status = button.title = buttonId;

      // console.log("Button ID:", buttonId);

      // Call createButtonClickHandler for each button
     if(status){
      // createButtonClickHandlerHis(matrix, button, moves, buttonId);
    }
      cell.appendChild(button);
    }

  }

  displayArea.innerHTML = "";
  displayArea.appendChild(table);
}
