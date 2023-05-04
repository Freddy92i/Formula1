<?php
include '../../config.php';
include '../../navbar.php';
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Championnats - Formule 1</title>
    <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/championnats.css">

  </head>
  <body>
          <div class="text-haut">
      <h2 class="results-text">Résultats de la saison</h2>
      <p class="text">Découvrez les résultats de la saisons de Formule 1 .</p>
    </div>
<div class="standings">
    <div class="driver-table-standings">
        <h2>Championnat Pilote</h2>
        <table id="driver-table"></table>
    </div>

    <div class="Constructor-table-standings">
        <h2>Championnat Constructeur</h2>
        <table id="constructor-table"></table>
    </div>

</div>

    <script src="<?= SITE_URL ?>/src/scripts/championnats.js"></script>
<?php
  include "../../footer.php";
?>
</body>
</html>
