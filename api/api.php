<?php 
    error_reporting(E_ALL);
    ini_set("display_errors",1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $con = mysqli_connect("localhost", "root", "", "unifiedsystem");
    
    if($con){
        echo "DB CONNECTED";
    }

    include 'DbConnect.php';
    $obDb = new DbConnect();
    $conn = $obDb->connect();
    var_dump($conn);

  
    $method = $_SERVER['REQUEST_METHOD'];

    switch($method){
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO stock(id, product, sku, category, price, stock, status) VALUES(null, :product, :sku, :category, :price, :stock, :status)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":product", $user->product);
        $stmt->bindParam(":sku", $user->sku);
        $stmt->bindParam(":category", $user->category);
        $stmt->bindParam(":price", $user->price);
        $stmt->bindParam(":stock", $user->stock);
        $stmt->bindParam(":status", $user->status);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => "record created successfully"];
        
        }
        else {  
            $response = ['status' => 0, 'message' => "record failed"];
        }
        echo json_encode($response);
        break;
    }
?>