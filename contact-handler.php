<?php 

$errors = '';
$myemail = 'nancydalal16@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
	empty($_POST['email']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email = $_POST['email']; 
$phone = $_POST['subject'];
$comment = $_POST['comment'];


	$to = $myemail; 
	$email_subject = "Contact Inquiry From: $name";
	$email_body = "You have received a new inquiry. ".
	" Here are the details:\n Name: $name \n Email: $email \n Subject: $subject  \n Comment: $comment"; 
	
	$headers = "From: hello@whitehedge.com"; 
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location:thank-you');

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>