<?php
// Include the database connection
include 'db.php';

// Prepare SQL query to fetch all products
$sql = "SELECT * FROM products";
$stmt = $conn->prepare($sql);
$stmt->execute();

// Fetch all products
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Convert PHP array to JSON and return it
echo json_encode($products);
?>
