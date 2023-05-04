<?php
include 'config.php';
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/style.css">
  <?php
    include "navbar.php";
  ?>
</head>
<body>

   <h1 class="titre-pages">News - F1 2023</h1>
  <p class="txt-home">
  Restez au courant des dernières actualités de la Formule 1 avec notre couverture
   complète des courses, des écuries, des pilotes et des événements de cette saison.
  </p>
  <div class="news-feed">
    <?php
      include "src/pages/news.php";
    ?>
  </div>
  <?php
    include "footer.php";
  ?>
</body>
</html>
