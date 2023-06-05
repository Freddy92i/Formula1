<?php
  $rss_feed = 'https://www.motorsport.com/rss/f1/news/';
  
  $xml = simplexml_load_file($rss_feed);
  $articles = $xml->channel->item;
  $max_articles = 18; // Nombre maximum d'articles à afficher par défaut
  $image_quality = 10; // Qualité de l'image (1-100), 10 étant une qualité très basse

  function get_article_image($article) {
    $html = file_get_contents($article->link);
    preg_match('/<meta\s+property="og:image"\s+content="([^"]+)"/', $html, $image_matches);
    if(!empty($image_matches[1])) {
      return $image_matches[1];
    }
    return null;
  }
?>

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="<?= SITE_URL ?>/src/css/news.css">
</head>

<div class="main-div">
  <?php $count = 0; ?>
  <?php foreach($articles as $article): ?>
    <?php if($count < $max_articles): ?>
      <div class="article">
        <div class="article-card">
          <?php
            $image_url = get_article_image($article);
            if($image_url) {
              $image_data = file_get_contents($image_url);
              $image = imagecreatefromstring($image_data);
              if($image) {
                // Ré-encoder l'image avec une qualité plus basse
                ob_start();
                imagejpeg($image, null, $image_quality);
                $image_data = ob_get_contents();
                ob_end_clean();
                $image_data_uri = 'data:image/jpeg;base64,' . base64_encode($image_data);
              }
            }
          ?>
          <div class="article-image">
            <?php if(isset($image_data_uri)): ?>
              <img class="img-articles" src="<?php echo $image_data_uri ?>">
            <?php endif; ?>
          </div>
          <div>
            <h4 class="article-title"><?php echo $article->title ?></h4>
          </div>
          <div class="article-link">
            <a class="button-lireplus" href="<?php echo $article->link ?>">Lire l'article sur motorsport.com</a>
          </div>
        </div>
      </div>

      <?php $count++; ?>
    <?php endif; ?>
  <?php endforeach; ?>
</div>

</script>
