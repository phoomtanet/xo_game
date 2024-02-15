<?php include 'conn.php';
$sql_xo = "SELECT * FROM `game_history` ORDER BY `id` DESC LIMIT 10;";
$rs_xo = mysqli_query($conn, $sql_xo);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Input and Save Button</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
 <link rel="stylesheet" href="../css/xo.css">
 <link rel="stylesheet" href="../css/his.css">

</head>

<body >
<div  id="field" class="flex justify-content-center ">
  <div class="d-flex p-2 bd-highlight  justify-content-center">

    <label>
      <h1 id="text">XO GAME</h1>
    </label>

  </div>
  <div class="d-flex p-2 bd-highlight  justify-content-center">

  </div>
  <div  class="d-flex p-2 bd-highlight  align-items-center justify-content-center">
  <span id="textSize" class="mx-2">Size:</span>
    <input type="number"  id="inputText" value="3" min="3" />
  <button id="saveButton" class="mr-2"  onclick="createTable()">START</button>

    <button id="hisBn" class="mx-2" onclick="showHis()">HISTORY</button>


  </div>

  <div  id="hisBar"  id="buttonContainer" class="d-flex  bd-highlight  justify-content-center"  >
   
    <button hidden  id="decrement" onclick="play()" disabled><</button>
    <p hidden id="count" value="0" >0</p>
    <button hidden  id="skip" onclick="play()"  disabled>></button>

    <select hidden id="selectData"  class="mx-4" onchange="historyFunction(this.value)">
      <option value="">History</option>
      <?php foreach ($rs_xo as $row) {
        echo '<option  onclick="historyFunction(this.value)" value="' . $row['id'] . '">'. $row['id'] . '</option>';
      } ?>
    </select>
    <button hidden id="showPlaybar" onclick="showPlaybar()">Home page</button>


  </div>
  <div class="d-flex p-2 bd-highlight  justify-content-center">
     <h1><p id="player" style="display: none">Player <span id="spanPlayer">X</span></p></h1>
  </div>
  <div class="d-flex p-2 bd-highlight  justify-content-center">
    <div id="displayArea" class="bg-dark "></div>
  </div>
  </div>
  <script src="../javaScrip/script.js"></script>
  <script src="../javaScrip/history.js"></script>
  <script src="../javaScrip/historyPlay.js"></script> 
  <script src="../javaScrip/showBar.js"></script>