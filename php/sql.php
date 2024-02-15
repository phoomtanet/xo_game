<?php
include 'conn.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $jsonMoveData = $_POST['moveData'];
  $matrixSize = $_POST['matrixSize'];
  $moveData = json_decode($jsonMoveData, true);

  if ($moveData !== null) {

 

    $jsonMoveData = json_encode($moveData);
    $stmt = $conn->prepare("INSERT INTO game_history (moves, matrixSize) VALUES (?, ?)");
    $stmt->bind_param("si", $jsonMoveData, $matrixSize);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
      echo 'Data inserted successfully';
    } else {
      echo 'Error inserting data';
    }

    $stmt->close();
    $conn->close();

  } else {
    echo 'Invalid JSON data';
  }

} else {
  echo 'Invalid request method';
}
?>
