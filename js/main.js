$( document ).ready(function() {
	$('#tagline-main').addClass('animated fadeInDown');
	$('#tagline-sub').addClass('animated fadeInDown');
	$('#intro-top').hide();
	$('#intro-bot').hide();
	$('#buttons').hide();
	$('#developers-title').hide();
	$('#1').hide();
	$('#2').hide();
	$('#3').hide();
	$('#4').hide();
	$('.bargraph').hide();
	$('#gamers-title').hide();
	$('#5').hide();
	$('#6').hide();
	$('#7').hide();	
	$('#invaders').hide();	
	$('#signin-popout').hide();
	$('#signup-popout').hide();	
	finishIntro();
	// $('.showcase').hide();
	$('.addWipForm').hide();
	$('#showcase-thumbnails').hide();
});

function finishIntro(){
	setTimeout(function(){
		$('#intro-top').show();
		$('#intro-top').addClass('animated fadeIn');
		introPartTwo();
	},1000);
}

function introPartTwo(){
	setTimeout(function(){
		$('#intro-bot').show();
		$('#intro-bot').addClass('animated fadeIn');
		showButtons();
	},1000);
}

function showButtons(){
	setTimeout(function(){
		$('#buttons').show();
		$('.signin').addClass('animated fadeIn');
		$('.signup').addClass('animated fadeIn');
		$('#developers-title').show();
		$('#developers-title').addClass('animated fadeIn');
		numOne();
	},1000);
}

function numOne(){
	setTimeout(function(){
		$('#1').show();
		$('#1').addClass('animated fadeIn');
		numTwo();
	},500);
}

function numTwo(){
	setTimeout(function(){
		$('#2').show();
		$('#2').addClass('animated fadeIn');
		numThree();
	},500);
}

function numThree(){
	setTimeout(function(){
		$('#3').show();
		$('#3').addClass('animated fadeIn');
		numFour();
	},500);
}

function numFour(){
	setTimeout(function(){
		$('#4').show();
		$('#4').addClass('animated fadeIn');
		picOne();
	},500);
}

function picOne(){
	setTimeout(function(){
		$('.bargraph').show();
		$('.bargraph').addClass('animated flipInY');
		gamerTitle();
	},500);
}

function gamerTitle(){
	setTimeout(function(){
		$('#gamers-title').show();
		$('#gamers-title').addClass('animated fadeIn');
		numFive();
	},700);
}

function numFive(){
	setTimeout(function(){
		$('#5').show();
		$('#5').addClass('animated fadeIn');
		numSix();
	},500);
}

function numSix(){
	setTimeout(function(){
		$('#6').show();
		$('#6').addClass('animated fadeIn');
		numSeven();
	},500);
}

function numSeven(){
	setTimeout(function(){
		$('#7').show();
		$('#7').addClass('animated fadeIn');
		picTwo();
	},500);
}

function picTwo(){
	setTimeout(function(){
		$('#invaders').show();
		$('#invaders').addClass('animated flipInY');
	},500);
}

// $('.signup').click(function(){
// 	logout();
// });

// $('.signin').click(function(){
// 	login();
// });

// $('signin').click(function(){
// 	upload();
// });

// function upload(){
// 	filepicker.pickAndStore({mimetype:"image/*"},
//         {location:"S3"}, function(InkBlobs){
//        console.log(JSON.stringify(InkBlobs));
//     });
// }

$('.signup').click(function(){
	$('.signup').addClass('animated fadeOutLeft');
	$('.signup').hide();
	$('#signup-popout').show();
	$('#signup-popout').addClass('animated fadeInRight');
});

$('#new-account').click(function(){
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var username = document.getElementById('username').value;

	auth.createUser(email, password, function(error, user) {
	  if (!error) {
	    chatRef.child(user.id).set(username);	  	
	    console.log('User Id: ' + user.id + ', Email: ' + user.email);
	    window.location.replace("http://gamewip.net63.net/portal.html")

	  }
	    window.location.replace("http://gamewip.net63.net/portal.html")

	});


		
});

$('.addWip').click(function(){
	$('.showcase').addClass('animated fadeOutLeft');
	$('.showcase').hide();
	$('.addWip').addClass('animated fadeOutLeft');
	$('.addWip').hide();
	$('.addWipForm').show();
	$('.addWipForm').addClass('animated fadeInRight');
});

var rootRef = new Firebase('https://sf-disrupt.firebaseio.com/');
$('.toTypeKing').click(function(){
	var name = document.getElementById('name').value;
	var description = document.getElementById('description').value;
	var foo = document.getElementById('foo').value;

	rootRef.child(''+name).set({description:description,foo:foo});

	console.log(name);
	console.log(description);
	console.log(foo);
	window.location.replace("http://gamewip.net63.net/TypeKing.php");
});

$('.showcase').click(function(){
	window.location.replace("http://gamewip.net63.net/showcase.html");
});

$('#analytics-game').click(function(){
	window.location.replace("http://gamewip.net63.net/stats.html");
});

$('.ulGame').click(function(){
	filepicker.pick(function(InkBlob){
	  console.log(InkBlob.url);
	});
});