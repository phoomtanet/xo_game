
function showHis() {
    document.getElementById("selectData").hidden = false;
    document.getElementById("decrement").hidden = false;
    document.getElementById("skip").hidden = false;
    document.getElementById("count").hidden = false;
   document.getElementById("showPlaybar").hidden = false;
   
  
   document.getElementById("textSize").hidden = true;
   document.getElementById("inputText").hidden = true;
   document.getElementById("saveButton").hidden = true;
   document.getElementById("hisBn").hidden = true;
  document.getElementById("displayArea").innerHTML = "";
  document.getElementById("skip").disabled = true;
  document.getElementById("decrement").disabled = true;
  player.style.display = "none";

}


 function showPlaybar() {
    document.getElementById("selectData").hidden = true;
    document.getElementById("decrement").hidden = true;
    document.getElementById("skip").hidden = true;
    document.getElementById("count").hidden = true;
   document.getElementById("showPlaybar").hidden = true;

   document.getElementById("textSize").hidden = false;
   document.getElementById("inputText").hidden = false;
   document.getElementById("saveButton").hidden = false;
   document.getElementById("hisBn").hidden = false;
  document.getElementById("displayArea").innerHTML = "";

 }