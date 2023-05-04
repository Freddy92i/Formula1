<?php
include '../../config.php';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Formula 1 - Pilotes</title>
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/style.css">
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/pilotes.css">
  <?php
    include "../../navbar.php";
  ?>
</head>
<body>
  <h1 class="titre-pages">Pilotes - F1 2023</h1>
  <p class="txt-teams">
  Découvrez tout ce que vous devez savoir sur les pilotes de Formule 1 de cette année
   - écuries, podiums, points gagnés et titres de champion.
  </p>
  <div id="driver-list"></div>


  <script src="<?= SITE_URL ?>/src/scripts/pilotes.js"></script>
<?php
  include "../../footer.php";
?>
</body>
</html>
