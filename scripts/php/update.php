<?php
//header('Content-type: application/json');
//header("Access-Control-Allow-Origin: localhost");

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        
        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

$mysql_host = "localhost:3306";
$mysql_database = "carrepair";
$mysql_user = "root";
$mysql_password = "";
// Create connection
$conn = new mysqli($mysql_host, $mysql_user, $mysql_password,$mysql_database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//$postdata = file_get_contents("php://input");
$data = json_decode(file_get_contents("php://input"));
   
//$sql = "INSERT INTO customers (Firstname, Lastname, Mobileno, Carmake, Regnumber, Description) VALUES ('test', 'test','123','test','test','test')";
$id = mysql_real_escape_string($data->id);
$name = mysql_real_escape_string($data->name);
$surname = mysql_real_escape_string($data->surname);
$mobile = mysql_real_escape_string($data->mobile);
$addr = mysql_real_escape_string($data->addr);
$make = mysql_real_escape_string($data->make);
$model = mysql_real_escape_string($data->model);
$fuelType = mysql_real_escape_string($data->fuelType);
$engSize = mysql_real_escape_string($data->engSize);
$carMil = mysql_real_escape_string($data->carMil);
$problemDesc = mysql_real_escape_string($data->problemDesc);

//$sql = "SELECT * from customers WHERE ID = '{$name}'";
//$sql = "INSERT INTO test (Name) VALUES ('$name')";
//$sql = "INSERT INTO customers (Name, Surname, Mobile, Addr, Make, Model, FuelType, EngSize, CarMil, ProblemDesc) VALUES //('$name','$surname','$mobile','$addr','$make','$model','$fuelType','$engSize','$carMil','$problemDesc')";

$sql = "UPDATE `customers` SET `ID`='{$id}',`Name`='{$name}',`Surname`='{$surname}',`Mobile`='{$mobile}',`Addr`='{$addr}',`Make`='{$make}',`Model`='{$model}',`FuelType`='{$fuelType}',`EngSize`='{$engSize}',`CarMil`='{$carMil}',`ProblemDesc`= '{$problemDesc}' WHERE ID = '{$id}'";



$result = $conn->query($sql);
$conn->close();
?>