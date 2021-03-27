TimePlayed = ['0'];
TotalDeaths = ['0'];
TotalEndings = ['0'];
TotalGamesPlayed = ['0'];

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var TotalEndings ["Good ending", "Bad Ending", "Death Ending", "Escape Ending"]
	TotalEndings.length
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

window.onload = function() {
    store("ending1", false);
    store("ending2", false);
    store("ending3", false);
    store("ending4", false);
}


