<?php
$host = "localhost"; // or your server's hostname
$dbname = "noshnest";
$username = "root"; // your MySQL username
$password = "132"; // your MySQL password

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
