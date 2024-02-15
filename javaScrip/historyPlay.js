
const text = document.getElementById("count");


console.log(text.innerHTML);
function play(){
    var selectedId = document.getElementById("selectData").value;
  console.log(selectedId);

    $.ajax({
      type: "POST",
      url: "sql_history.php",
      data: { selectedId: selectedId },
      success: function (response) {
        // console.log(response);
        var responseData2 = JSON.parse(response);
  
        responseData2.forEach(function (item) {
          var moves2 = item.moves;
          var data2 = JSON.parse(moves2);
           console.log(data2);
           playGame(data2);
        });
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
}

function playGame(moves) {
  text.value = text.innerHTML;  
  var index = parseInt(text.value) ;
  
  console.log("text1 =", text.value);
  // Check if clickCount exceeds moves.length
  if (index < moves.length) {
    var move = moves[index];
    var buttonId = move.row.toString() + move.col.toString();
    var setButton = document.getElementById(buttonId);
    console.log("set="+setButton.textContent);
    if (setButton.textContent == "-") {
      setButton.textContent = move.player;3
      if (move.player === "O") {
        setButton.style.color = "red";
      }

      console.log("Move " + index + ":", move);

    } else {
          console.log("index+1="+index+1)
        var move2 = moves[index+1];
        var buttonId2 = move2.row.toString() + move2.col.toString();
        var setButton2 = document.getElementById(buttonId2);
        setButton2.textContent = "-";
      } 
  } else {
    console.log("No more moves to display. Resetting clickCount.");
    text.textContent = moves.length-1; 
    text.value =  moves.length-1; 
    document.getElementById("skip").disabled = true;
  }
}

document.getElementById("skip").addEventListener("click", function() {
  if(!text.value ){
    text.value =0
  text.textContent = text.value;
}else{
  text.textContent = parseInt(text.value) + 1; 
}
document.getElementById("decrement").disabled = false;
});


document.getElementById("decrement").addEventListener("click", function () {
  if (parseInt(text.value) > 0) {
    text.textContent = parseInt(text.value) - 1;
    document.getElementById("skip").disabled = false;
    if(document.getElementById("count").innerHTML == "0" ){
      document.getElementById("decrement").disabled = true;
    }
    
  }
});