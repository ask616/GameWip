<?php
	require('Services/Twilio.php');
	$account_sid = 'ACad880ea8f12d3498e22dc7715fecc6da';
	$auth_token = '34ef82bd96f9211a974b3e46f2ab5561';
	$client = new Services_Twilio($account_sid, $auth_token);

	if (isset($_POST)) {
		$post = $_POST['comment-box'];
		print($post);
	}

		   $message = $client->account->sms_messages->create(
		  '14085507266', // From a Twilio number in your account
		  '+14086376228', // Text any 
		  	'Great Work!'
		  );
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

	<head>

		<title>GameWip</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />

		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.2.1/pure-min.css">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Roboto:100,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" type="text/css" href="css/animate.min.css">
		<link rel="icon" href="favicon.ico" type="img/favicon.ico" />
		<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
		<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase-simple-login.js'></script>
		<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase.js'></script>
	</head>

<body>

	<script type="text/javascript">
		var dataRef = new Firebase('https://sf-disrupt.firebaseio.com/Type%20King');
		dataRef.once('value',function(dataSnapshot){
			var game = dataSnapshot;
			var data = game.val();
			var gameDescChild = game.child('description');
			var gameBannerChild = game.child('foo');
			var gameDesc = gameDescChild.val();
			var gameBanner = gameBannerChild.val();
			console.log(gameDesc);
			console.log(gameBanner);
			// document.getElementById("game-description").innerHTML = gameDesc;
			// document.getElementById("game-banner").innerHTML = gameBanner;
			var gameDesc1 = gameDesc.substring(0,51);
			var gameDesc2 = gameDesc.substring(51,102);
			document.getElementById("game-description-one").innerHTML = gameDesc1;
			document.getElementById("game-description-two").innerHTML = gameDesc2;
		});
	</script>
	<div class="background-portal"></div>
	<div class="semi-transparent"></div>

	<div class="header">
		<div class="header-content">
			<span class="title-portal">GameWip</span>
			<ul>
				<li><a href="#" id="active">Home</a></li>
		        <li class="hover-change" id="about"><a href="about.html">About</a></li>	        
		        <li class="hover-change"><a href="#">Discover</a></li>
		        <li class="hover-change"><a href="#">Popular</a></li>
		        <li class="hover-change"><a href="#">New Games</a></li>
		        <li class="hover-change" id="logout"><a href="index.html">Logout</a></li>

	        	<li>
			    	<form class="pure-form">
					    <input type="text" class="pure-input-rounded" placeholder="Search Games">
					    <button type="submit" class="pure-button search-button pure-button-primary">Search</button>
					</form>
				</li>
			</ul>
		</div>
	</div>
	<div class="body-game-page text-center">
		<div id="span6">
			<div class="title-game-page text-center">
				<strong>Type King</strong><br />
				<br><img src="http://cache.desktopnexus.com/thumbnails/1397893-bigthumbnail.jpg" alt="Game banner goes here." style="padding-left: 20px;" />
				<div id="game-description-one"></div></br>
				<br><div id="game-description-two"></div></br>
				<button id="download-game" class="pure-button pure-button-primary" style="font-size: 60%;">Download</button>
				<button id="analytics-game" class="pure-button" style="font-size: 60%;">Analytics</button>
			</div>	
		</div>
		<div id="span6">
			<div class="title-game-comment text-center">
				<strong>Add a comment...</strong> <br />
				<form action="<? echo $_SERVER['PHP_SELF'];?>" method="post">
				<div class="pure-control-group text-right">
					<textarea name="comment-box" id="comment-box" rows="4" placeholder="Write some feedback..." style="width:600px;"></textarea>
				</div>	
				<button type="submit" id="send-comment" class="pure-button pure-button-primary" style="font-size:80%;">Send Comment to Developer</button>
				</form>
			</div>
		</div>
	</div>	


	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript">
	$('#send-comment').click(function(){
		console.log("hi");

	});
	</script>
</body>
</html>