const yearSelect = document.querySelector('#year-select');
const driverTable = document.querySelector('#driver-table');
const constructorTable = document.querySelector('#constructor-table');

function getSeasonResults(selectedYear) {
  fetchRaceResults(selectedYear);
  fetchQualifyingResults(selectedYear);
}

function fetchRaceResults(selectedYear) {
fetch('https://ergast.com/api/f1/${selectedYear}/results.json')
.then(response => response.json())
.then(data => {
const raceResults = data.MRData.RaceTable.Races;
let tableHTML = '<tr><th>Position</th><th>Pilote</th><th>Nationalité</th><th>Constructeur</th><th>Temps de course</th><th>Points</th></tr>';
raceResults.forEach(race => {
const results = race.Results;
results.forEach(result => {
const position = result.position;
const name = '${result.Driver.givenName} ${result.Driver.familyName}';
const nationality = result.Driver.nationality;
const constructor = result.Constructor.name;
const time = result.Time ? result.Time.time : 'N/A';
const points = result.points;
tableHTML += <tr><td>${position}</td><td>${name}</td><td>${nationality}</td><td>${constructor}</td><td>${time}</td><td>${points}</td></tr>;
});
});
driverTable.innerHTML = tableHTML;
})
.catch(error => console.error(error));
}

function fetchQualifyingResults(selectedYear) {
fetch('https://ergast.com/api/f1/${selectedYear}/qualifying.json')
.then(response => response.json())
.then(data => {
const qualifyingResults = data.MRData.RaceTable.Races[0].QualifyingResults;
let tableHTML = '<tr><th>Position</th><th>Pilote</th><th>Nationalité</th><th>Constructeur</th><th>Temps de qualification</th></tr>';
qualifyingResults.forEach(result => {
const position = result.position;
const name = '${result.Driver.givenName} ${result.Driver.familyName}';
const nationality = result.Driver.nationality;
const constructor = result.Constructor.name;
const time = result.Q3 ? result.Q3 : (result.Q2 ? result.Q2 : result.Q1);
tableHTML += <tr><td>${position}</td><td>${name}</td><td>${nationality}</td><td>${constructor}</td><td>${time}</td></tr>;
});
constructorTable.innerHTML = tableHTML;
})
.catch(error => console.error(error));
}

yearSelect.addEventListener('change', function() {
const selectedYear = this.value;
getSeasonResults(selectedYear);
});

updateTables();

function updateTables() {
const selectedYear = yearSelect.value;
getSeasonResults(selectedYear);
}