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

    <script src="<?= SITE_URL ?>/src/scripts/resultats.js"></script>
    <?php
    include '../../footer.php';
    ?>
  </body>
</html>
