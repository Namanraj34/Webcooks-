<?php
//get data from form  

$name = $_POST['firstName'];
$name = $_POST['lastName'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "namanraj34@mail.com";
$subject = "Mail From Webcooks institute";
$txt ="Name = ". $firstName . "\r\n  Email = " . $email . "\r\n Message =" . $message ." \r\n Last Name =". $lastName;
$headers = "From: noreply@Webcooks.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>