<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Admin</title>
<link rel="stylesheet" type="text/css" href="styles/styles.css" media="screen,tv,print">
</head>
<body>
<form id="loginform" action="doLogin.php" method="post">
	<input id="adminname" type="text" name="adminname" placeholder="Admin name">
	<input id="adminpwd" type="password" name="adminpwd" placeholder="Admin password">
	<input id="verifycode" type="text" name="verifycode" placeholder="Verify code">
	<img src="getVerify.php" alt="" />
</form>
</body>
</html>