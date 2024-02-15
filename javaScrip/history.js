function historyFunction(selectedId) {
  
  player.style.display = "none";
  document.getElementById("count").innerHTML ="0";
  document.getElementById("count").value = 0;

  console.log("co "+document.getElementById("count").innerHTML);
  // document.getElementById("reset").disabled = true;
  // document.getElementById("saveButton").disabled = false;


  
if(document.getElementById("count").innerHTML == "0" ){
  document.getElementById("decrement").disabled = true;
  document.getElementById("skip").disabled = false;
}
document.getElementById("selectData").value ;

var inputValue = document.getElementById("selectData").value;
if (inputValue>0) {


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
else {
  document.getElementById("displayArea").displayArea.innerHTML = "";
  document.getElementById("skip").disabled = true;
 
}
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

  for (var i = 0; i < matrix.length; i++) {
    var row = table.insertRow();
    for (var j = 0; j < matrix[i].length; j++) {
      var cell = row.insertCell();

      var button = document.createElement("button");

      button.textContent = "-";
      var buttonId = "" + i + "" + j + "";
      button.id = buttonId;
      if(matrix.length < 10 ){
        button.style.width = "100px";
        button.style.height = "100px";
    }else if(matrix.length < 20 ){
      button.style.width = "60px";
      button.style.height = "60px";
    }else{
      button.style.width = "40px";
      button.style.height = "40px";
      
    }
console.log("matrix"+matrix.length);
      cell.appendChild(button);
    }

  }

  displayArea.innerHTML = "";
  displayArea.appendChild(table);
}
