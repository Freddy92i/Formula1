<?php
include '../../config.php';
include '../../navbar.php';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Formula 1 - Écuries</title>
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/ecuries.css">
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/style.css">
</head>
<body>
  <h1 class="titre-pages">Teams - F1 2023</h1>
  <p class="txt-teams">
    Découvrez tout ce que vous devez savoir sur les équipes de Formule 1 de cette année
    - pilotes, podiums, points gagnés et titres de champion.
  </p>
  <div id="team-list"></div>

  <script src="<?= SITE_URL ?>/src/scripts/ecuries.js"></script>
<?php
  include "../../footer.php";
?>
</body>
</html>
