<?php
include 'conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $selectedId = $_POST['selectedId'];

  // Perform your database query using $selectedId
  $sql = "SELECT * FROM game_history WHERE id = $selectedId";
  $result = mysqli_query($conn, $sql);

  // Process the result and send it back
  $response = [];

  while ($row = mysqli_fetch_assoc($result)) {
    $response[] = $row;
  }

  // Send the JSON-encoded result back to the client
  echo json_encode($response);
} else {
  // Handle invalid request method
  echo 'Invalid request method';
}
?>
