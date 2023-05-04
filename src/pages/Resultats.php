<?php
include '../../config.php';
include '../../navbar.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>F1 Race Results</title>
    <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/resultats.css">
    <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/style.css">

  </head>
  <body>
  <body>
    <div class="text-haut">
      <h2 class="results-text">Résultats de toutes les résultats de Formule 1</h2>
      <p class="text">Découvrez les résultats en course et qualifications de cette saison de Formule 1.</p>
    </div>
    <div class="selection">
        <label for="raceSelect">Selectionnez une course :</label>
        <select class="button-sel" id="raceSelect"></select>
    </div>






    <div class="container">
        <div class="qualifdiv">
            <h1>F1 Resultats des Qualifications</h1>
            <table id="qualifyingTable">
    
        <thead>
            <tr>
            <th>Driver</th>
            <th>Team</th>
            <th>Position</th>
            <th>Q1 Time</th>
            <th>Q2 Time</th>
            <th>Q3 Time</th>
            </tr>
        </thead>
        <tbody></tbody>
        </table>
        </div>
        <!--
        
        -->
        <div class="qualifdiv">
            <h1>Résultats de course </h1>
            <table id="raceTable">
      <thead>
        <tr>
          <th>Driver</th>
          <th>Team</th>
          <th>Position</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
        </div>    
    </div class="container">


    <script>
      // JavaScript to fetch and display qualifying data in the table
      const raceSelect = document.querySelector('#raceSelect');
      const qualifBody = document.querySelector('#qualifyingTable tbody');
      const raceBody = document.querySelector('#raceTable tbody');

      let selectedRaceId = null;
      
      // Populate the race select dropdown with available races
      fetch('http://ergast.com/api/f1/current.json')
        .then(response => response.json())
        .then(data => {
          const raceData = data.MRData.RaceTable.Races;
          raceData.forEach(race => {
            const option = document.createElement('option');
            option.value = race.round;
            option.text = `${race.raceName}`;
            raceSelect.appendChild(option);
          });
          // Set the default selected race to the first race in the list
          selectedRaceId = raceData[0].round;
          getQualifyingData();
          getRaceData()
        })
        .catch(error => console.error(error));
      
      // Handle changes to the selected race in the dropdown
      raceSelect.addEventListener('change', () => {
        selectedRaceId = raceSelect.value;
        getQualifyingData();
        getRaceData()
        
      });
      
            // Fetch qualifying data for the selected race and display it in the table
            function getQualifyingData() {
                qualifBody.innerHTML = '';
                fetch(`http://ergast.com/api/f1/current/${selectedRaceId}/qualifying.json`)
                .then(response => response.json())
                .then(data => {
                    const qualifyingData = data.MRData.RaceTable.Races[0].QualifyingResults;
                    qualifyingData.forEach(driver => {
                    const row = qualifBody.insertRow();
                    const driverNameCell = row.insertCell(0);
                    const teamNameCell = row.insertCell(1);
                    const positionCell = row.insertCell(2);
                    const q1TimeCell = row.insertCell(3);
                    const q2TimeCell = row.insertCell(4);
                    const q3TimeCell = row.insertCell(5);
                    driverNameCell.textContent = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
                    teamNameCell.textContent = driver.Constructor.name;
                    positionCell.textContent = driver.position;
                    q1TimeCell.textContent = driver.Q1 ? driver.Q1 : '--:--.---';
                    q2TimeCell.textContent = driver.Q2 ? driver.Q2 : '--:--.---';
                    q3TimeCell.textContent = driver.Q3 ? driver.Q3 : '--:--.---';
                    });
                })
                .catch(error => console.error(error));
            }

             // Fetch race data for the selected race and display it in the table
            function getRaceData() {
                raceBody.innerHTML = '';
                fetch(`http://ergast.com/api/f1/current/${selectedRaceId}/results.json`)
                .then(response => response.json())
                .then(data => {
                    const raceData = data.MRData.RaceTable.Races[0].Results;
                    raceData.forEach(driver => {
                    const row = raceBody.insertRow();
                    const driverNameCell = row.insertCell(0);
                    const teamNameCell = row.insertCell(1);
                    const positionCell = row.insertCell(2);
                    const pointsCell = row.insertCell(3);
                    driverNameCell.textContent = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
                    teamNameCell.textContent = driver.Constructor.name;
                    positionCell.textContent = driver.position;
                    pointsCell.textContent = driver.points;
                    });
                })
                .catch(error => console.error(error));
            }
    </script>


  </body>
</html>
