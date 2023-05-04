<?php
include '../../config.php';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Formula 1 - Circuit</title>
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/style.css">
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/calendrier.css">
  <?php
    include "../../navbar.php";
  ?>

</head>
<body>
  <h1 class="titre-pages">Circuit - F1 2023</h1>
  <p class="txt">
  Découvrez tout ce que vous devez savoir sur le circuit</p>
  <div id="gp-list"></div>

  <?php
    include "../../footer.php";
  ?>
</body>

</html>
