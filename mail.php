<?php
//get data from form  

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "namanraj34@mail.com";
$subject = "Mail From Webcooks institute";
$txt ="firstName = ". $firstName . "\r\n  email = " . $email . "\r\n message =" . $message ." \r\n lastName =". $lastName;
$headers = "From: noreply@Webcooks.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>