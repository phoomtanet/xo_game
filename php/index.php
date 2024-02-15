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
</head>

<body class="bg-primary">
  <div class="d-flex p-2 bd-highlight bg-primary justify-content-center">

    <label>
      <h2>ขนาดตาราง</h2>
    </label>

  </div>
  <div class="d-flex p-2 bd-highlight bg-primary justify-content-center">
    <input class="mx-2" type="number" id="inputText" value="3" min="3" />
    <button id="saveButton" onclick="createTable()">Save</button>
    <!-- <button id="reset" class="mx-2" onclick="reset()"disabled>reset</button> -->
    <button id="hisBn" class="mx-2" onclick="showHis()">History</button>


  </div>

  <div  id="hisBar"  class="d-flex p-2 bd-highlight bg-primary justify-content-center"  >
    <select hidden id="selectData"  onchange="historyFunction(this.value)">
      <option value="">ประวัติ</option>
      <?php foreach ($rs_xo as $row) {
        echo '<option  onclick="historyFunction(this.value)" value="' . $row['id'] . '">' . $row['id'] . '</option>';
      } ?>
    </select>
    <button hidden class="mx-2" id="decrement" onclick="play()" disabled>-</button>

    <p hidden id="count" value="0" >0</p>
    <button hidden class="mx-2" id="skip" onclick="play()" disabled>+</button>
    <button hidden id="showPlaybar" onclick="showPlaybar()">หน้าแรก</button>


  </div>
  <div class="d-flex p-2 bd-highlight bg-primary justify-content-center">
     <h1><p id="player" style="display: none">player <span id="spanPlayer">X</span></p></h1>
  </div>
  <div class="d-flex p-2 bd-highlight bg-primary justify-content-center">
    <div id="displayArea"></div>
  </div>
  <script src="../javaScrip/script.js"></script>
  <script src="../javaScrip/history.js"></script>
  <script src="../javaScrip/historyPlay.js"></script> 
  <script src="../javaScrip/showBar.js"></script>