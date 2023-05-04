const yearSelect = document.querySelector('#year-select');
const driverTable = document.querySelector('#driver-table');
const constructorTable = document.querySelector('#constructor-table');

function getSeasonResults(selectedYear) {
  fetchDriverStandings(selectedYear);
  fetchConstructorStandings(selectedYear);
}

function fetchDriverStandings(selectedYear) {
  fetch(`https://ergast.com/api/f1/${selectedYear}/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
      const driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      let tableHTML = '<tr><th>Position</th><th>Pilote</th><th>Nationalité</th><th>Constructeur</th><th>Points</th></tr>';
      driverStandings.forEach(driver => {
        const position = driver.position;
        const name = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
        const nationality = driver.Driver.nationality;
        const constructor = driver.Constructors[0].name;
        const points = driver.points;
        tableHTML += `<tr><td>${position}</td><td>${name}</td><td>${nationality}</td><td>${constructor}</td><td>${points}</td></tr>`;
      });
      driverTable.innerHTML = tableHTML;
    })
    .catch(error => console.error(error));
}

function fetchConstructorStandings(selectedYear) {
  fetch(`https://ergast.com/api/f1/${selectedYear}/constructorStandings.json`)
    .then(response => response.json())
    .then(data => {
      const constructorStandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      let tableHTML = '<tr><th>Position</th><th>Constructeur</th><th>Nationalité</th><th>Points</th></tr>';
      constructorStandings.forEach(constructor => {
        const position = constructor.position;
        const name = constructor.Constructor.name;
        const nationality = constructor.Constructor.nationality;
        const points = constructor.points;
        tableHTML += `<tr><td>${position}</td><td>${name}</td><td>${nationality}</td><td>${points}</td></tr>`;
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
