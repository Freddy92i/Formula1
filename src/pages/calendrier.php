<?php
include '../../config.php';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Formula 1 - Résultats</title>
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/style.css">
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/calendrier.css">
  <?php
    include "../../navbar.php";
  ?>

</head>
<body>
  <h1 class="titre-pages">Calendrier - F1 2023</h1>
  <p class="txt">
  Découvrez tout ce que vous devez savoir sur le calendrier de Formule 1 de cette année
   - Les grand prix passés et futurs.
  </p>
  <div id="gp-list"></div>

  <script src="<?= SITE_URL ?>/src/scripts/calendrier.js"></script>
  <?php
    include "../../footer.php";
  ?>
</body>

</html>

