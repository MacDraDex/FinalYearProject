<?php
header("Access-Control-Allow-Origin: *");

$mysql_host = "localhost:3306";
$mysql_database = "carrepair";
$mysql_user = "root";
$mysql_password = "";
// Create connection
$conn = new mysqli($mysql_host, $mysql_user, $mysql_password,$mysql_database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT * FROM customers";
$result = $conn->query($sql);
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"ID":"'  . $rs["ID"] . '",';
    $outp .= '"Name":"'  . $rs["Name"] . '",';
    $outp .= '"Surname":"'   . $rs["Surname"] . '",';
    $outp .= '"Mobile":"'   . $rs["Mobile"] . '",';
    $outp .= '"Addr":"'   . $rs["Addr"] . '",';
    $outp .= '"Make":"'   . $rs["Make"] . '",';
    $outp .= '"Model":"'   . $rs["Model"] . '",';
    $outp .= '"FuelType":"'   . $rs["FuelType"] . '",';
    $outp .= '"EngSize":"'   . $rs["EngSize"] . '",';
    $outp .= '"CarMil":"'   . $rs["CarMil"] . '",';
    $outp .= '"ProblemDesc":"'   . $rs["ProblemDesc"] . '",';
    $outp .= '"Date":"'  . $rs["Date"] . '"}';
}

$outp ='{ "records":[ '.$outp.' ]}';
$conn->close();
echo($outp);
?>