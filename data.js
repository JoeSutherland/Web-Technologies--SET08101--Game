TimePlayed = ['0'];
TotalDeaths = ['0'];
TotalEndings = ['0'];
TotalGamesPlayed = ['0'];

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
//localStorage.setItem('key', 'value');
//alert(localStorage.getItem('key'));

//localStorage.setItem(‘key’, JSON.stringify({name: ‘value’}));
//alert(JSON.parse(localStorage.getItem('key')).name);

function store(game, status){
    localStorage.setItem(game, status);
}
function check(game){
    return localStorage.getItem(game);
    return localStorage.length
}

function GamesStats(){
	var TotalGamesPlayed = 
        document.getElementById("Games").innerHTML = TotalGamesPlayed.length;
 }

 function TimeStats(){
	var TotalTimePlayed = 
        document.getElementById("TimePlayed").innerHTML = TotalTimePlayed.length;
 }

function populateStorage(){
	localStorage.setItem('Good Ending', 'Not found');
	localStorage.setItem('Bad Ending', 'Not found');
	localStorage.setItem('Escape Ending', 'Not found');
	localStorage.setItem('Death Ending', 'Not found');

	return localStorage.length;
}

//function EndingStats(){
	//var TotalEndings = [];
   //  document.getElementById("Endings").innerHTML = TotalEndings.length;
 //}

function DeathStats(){
	var TotalDeaths = 
        document.getElementById("Deaths").innerHTML = TotalDeaths.length;
 }

window.onload = function() {
    store("ending1", false);
    store("ending2", false);
    store("ending3", false);
    store("ending4", false);
}


