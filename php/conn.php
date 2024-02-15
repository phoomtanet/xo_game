
<?php 
   $servername = "localhost";
   $username = "root";
   $password = "";
   $table = "xo_table"; 

   $conn = mysqli_connect($servername, $username, $password, $table);
   $conn->set_charset("utf8");

   if (!$conn) {
     die("Connection failed: " . mysqli_connect_error());
   }
?>


