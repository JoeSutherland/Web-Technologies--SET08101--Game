TimePlayed = ['0'];
TotalDeaths = ['0'];
TotalEndings = ['0'];
TotalGamesPlayed = ['0'];

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function deleteAllCookies() {
  if (confirm('Are you sure you want to delete your savegame?')) {
    valus = ['Timeplayed','TotalDeaths','TotalEndings','TotalGamesPlayed'];
    for (i=0;i<valus.length;i++) {
      if (getCookie(valus[i])) setCookie(valus[i],null,0);
      if (localStorage.getItem(valus[i])) localStorage.removeItem(valus[i]);
    }
    setCookie('TimePlayed',null,0);
    setCookie('TotalDeaths',null,0);
    setCookie('TotalEndings',null,0);
    setCookie('TotalGamesPlayed',null,0);
    location.reload();
  } else {
  }
}

function ExportSave() { 

  valus = ['TimePlayed','TotalDeaths','TotalEndings','TotalGamesPlayed'];
  savedata = [];
  for (i=0;i<valus.length;i++) {
    j = getSave(valus[i]);
    if (j) savedata.push(j);
    else savedata.push('');
  }