<?php

    // read the concet from the server 
    $pseudo = file_get_contents('php://input');
   
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $database = "hug";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    // insert the value in our database
    $sql = "INSERT INTO `user` (`pseudo`) VALUES ('$pseudo')";
    
    // send this sql request
    if ($conn -> query($sql) === TRUE) {
        echo "$pseudo was registered in database";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

?>