var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

function viewStudentStats(id, toggle){
	if(toggle == 1){
		document.getElementById(id).style.visibility = "inherit";
		document.getElementById(id).style.height= "auto";
	}
	else{
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height= 0;
	}
}

function changeColor(color){
	document.body.style.background = color;
}
function loadStatsPage(){
	var table = document.getElementById("stats_table");//Retrieve our table element
	var row_counter;//Keeps track of our row index
	Ws = 0;
	Ls = 0;
	for(row_counter = 2; row_counter < table.rows.length; row_counter++){//Ou
		if(table.rows[row_counter].cells[2].innerHTML > table.rows[row_counter].cells[3].innerHTML){
			table.rows[row_counter].cells[4].innerHTML = "CU Boulder";
			Ws++;
		}
		else{
			table.rows[row_counter].cells[4].innerHTML = table.rows[row_counter].cells[1].innerHTML;
			Ls++;
		}
	}
	console.log(Ws);
	document.getElementById('wins').innerHTML= Ws;
	document.getElementById('losses').innerHTML = Ls;
}

function switchPlayers(playerNum)
{
   document.getElementById("p_year").innerHTML= players[playerNum].year;
   document.getElementById("p_major").innerHTML= players[playerNum].major;
   document.getElementById("g_played").innerHTML= players[playerNum].games_played;
   document.getElementById("player_img").src= players[playerNum].img;
   document.getElementById("player_img").alt= players[playerNum].alt;
   document.getElementById("p_yards").innerHTML= players[playerNum].pass_yards;
   document.getElementById("r_yards").innerHTML= players[playerNum].rushing_yards;
   document.getElementById("rec_yards").innerHTML= players[playerNum].receiving_yards;
   document.getElementById("avg_p_yards").innerHTML = Math.round(players[playerNum].pass_yards/players[playerNum].games_played);
   document.getElementById("avg_r_yards").innerHTML = Math.round(players[playerNum].rushing_yards/players[playerNum].games_played);
   document.getElementById("avg_rec_yards").innerHTML = Math.round(players[playerNum].receiving_yards/players[playerNum].games_played);


}
function loadPlayersPage(){
	var dropdown = document.getElementById('player_selector');
	var a = document.createElement('option');
	a.setAttribute('href', '#');
	a.innerText = players[0].name;
	a.setAttribute('class', 'dropdown-item');
	a.onclick = function(){switchPlayers(0)};
	dropdown.appendChild(a);
	var dropdown = document.getElementById('player_selector');
	var b = document.createElement('option');
	b.setAttribute('href', '#');
	b.innerText = players[1].name;
	b.setAttribute('class', 'dropdown-item');
	b.onclick = function(){switchPlayers(1)};
	dropdown.appendChild(b);
	var dropdown = document.getElementById('player_selector');
	var c = document.createElement('option');
	c.setAttribute('href', '#');
	c.innerText = players[2].name;
	c.setAttribute('class', 'dropdown-item');
	c.onclick = function(){switchPlayers(2)};
	dropdown.appendChild(c);
	var dropdown = document.getElementById('player_selector');
	var d = document.createElement('option');
	d.setAttribute('href', '#');
	d.innerText = players[3].name;
	d.setAttribute('class', 'dropdown-item');
	d.onclick = function(){switchPlayers(3)};
	dropdown.appendChild(d);
}
