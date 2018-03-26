function fillCards(player){	
	console.log(player.name)	
		var card =  
			card = document.querySelector('.card-'+player.id);
	
		var app = function(type) {
		  let cards = {
		    player: {
		      gold: {
		        name: player.name,
		        image: "",
		        pace: 67,
		        shooting: 64,
		        passing: 44,
		        dribbling: 55,
		        defending: 21,
		        physical: 61,
		        rating: 63
		      },
		      potm: {
		      	// id: parseInt(player.id),
		        name: player.name,
		        image: "",
		        pace: parseInt(player.speed),
		        shooting: parseInt(player.shoot),
		        passing: parseInt(player.pass),
		        dribbling: parseInt(player.dribble),
		        defending: parseInt(player.defense),
		        physical: parseInt(player.weight),
		        rating: 81
		      }
		    }
		  };
	
		  for (var id in cards.player[type]) {
		    if (id == "image") {
		      document.querySelector("." + id).innerHTML = "";
		      var item = false;
		      var playerImage = new Image();
		      playerImage.src = cards.player[type][id];
		      document.querySelector("." + id).append(playerImage);
		    } else {
		      if (Number.isInteger(cards.player[type][id])) {
		        animateValue("." + id + "-" + player.id.toString(), 0, cards.player[type][id], 1500);
		      } else {
		        document.querySelector("." + id + "-" + player.id.toString()).innerHTML = cards.player[type][id];
		      }
		    }
		  }
	
		  function animateValue(id, start, end, duration) {
		    var range = end - start;
		    var current = start;
		    var increment = end > start ? 1 : -1;
		    var stepTime = Math.abs(Math.floor(duration / range));
		    var obj = document.querySelector(id);
		    var timer = setInterval(function() {
		      current += increment;
		      obj.innerHTML = current;
		      if (current == end) {
		        clearInterval(timer);		        
		      }
		    }, stepTime);
		  }
		};
	
		app("potm");}