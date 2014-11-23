$(document).ready(function() {
	$('span').click(mark);
	var player = 0;
	function mark() {
		if($(this).hasClass("none")) {
			if(player == 0) {
				player = 1;
				$(this).addClass("white");
				$(this).removeClass("none");
				}
			else {
				player = 0;
				$(this).addClass("black");
				$(this).removeClass("none");
			}
		}
		//gotta check if there's a winner
		if ($("#one").hasClass('white') && $("#two").hasClass('white') && $("#three").hasClass('white') || $("#four").hasClass('white') && $("#five").hasClass('white') && $("#six").hasClass('white') || $("#seven").hasClass('white') && $("#eight").hasClass('white') && $("#nine").hasClass('white') || $("#one").hasClass('white') && $("#four").hasClass('white') && $("#seven").hasClass('white') || $("#two").hasClass('white') && $("#five").hasClass('white') && $("#eight").hasClass('white') || $("#three").hasClass('white') && $("#six").hasClass('white') && $("#nine").hasClass('white') || $("#one").hasClass('white') && $("#five").hasClass('white') && $("#nine").hasClass('white') || $("#three").hasClass('white') && $("#five").hasClass('white') && $("#seven").hasClass('white')) {
	 		alert('White has won the game. Starting a new game');
	 		location.reload();
		}

		if ($("#one").hasClass('black') && $("#two").hasClass('black') && $("#three").hasClass('black') || $("#four").hasClass('black') && $("#five").hasClass('black') && $("#six").hasClass('black') || $("#seven").hasClass('black') && $("#eight").hasClass('black') && $("#nine").hasClass('black') || $("#one").hasClass('black') && $("#four").hasClass('black') && $("#seven").hasClass('black') || $("#two").hasClass('black') && $("#five").hasClass('black') && $("#eight").hasClass('black') || $("#three").hasClass('black') && $("#six").hasClass('black') && $("#nine").hasClass('black') || $("#one").hasClass('black') && $("#five").hasClass('black') && $("#nine").hasClass('black') || $("#three").hasClass('black') && $("#five").hasClass('black') && $("#seven").hasClass('black')) {
	 		alert('Black has won the game. Starting a new game');
	 		location.reload();
		}

		if (!$("#one").hasClass("none") && !$("#two").hasClass("none") && !$("#two").hasClass("none") && !$("#three").hasClass("none") && !$("#four").hasClass("none") && !$("#five").hasClass("none") && !$("#six").hasClass("none") && !$("#seven").hasClass("none") && !$("#eight").hasClass("none") && !$("#nine").hasClass("none")) {
			alert('Damn, son. That is a tie.');
			location.reload();
		}

	}
});

// x x x
// x x x
// x x x