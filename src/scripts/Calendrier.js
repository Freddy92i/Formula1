// Création de l'URL de l'API
const API_URL = 'https://ergast.com/api/f1/current.json';

// Récupération des données de l'API
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Récupération de la liste des Grands Prix
    const races = data.MRData.RaceTable.Races;

    // Création d'un élément <div> pour contenir les cartes de chaque Grand Prix
    const racesContainer = document.createElement('div');
    racesContainer.classList.add('gp-container');

    // Récupération de la date actuelle
    const currentDate = new Date();

    let upcoming = false;

    // Boucle sur chaque Grand Prix
    for (let i = 0; i < races.length; i++) {
      const race = races[i];

      // Conversion de la date du Grand Prix en format "DD-MM-YYYY"
      const raceDateObj = new Date(race.date);
      const raceDate = `${raceDateObj.getDate().toString().padStart(2, '0')}-${(raceDateObj.getMonth()+1).toString().padStart(2, '0')}-${raceDateObj.getFullYear()}`;

      // Création d'un élément <div> pour la carte du Grand Prix
      const raceCard = document.createElement('div');
      raceCard.classList.add('gp-card');

      // Ajout du numéro de course sur la totalité des Grands Prix dans la saison
      const raceNumber = document.createElement('h2');
      raceNumber.classList.add('gp-number');
      raceNumber.textContent = `Course ${i + 1}`;
      raceCard.appendChild(raceNumber);

      // Ajout de la date du Grand Prix
      const raceDateElem = document.createElement('p');
      raceDateElem.classList.add('gp-date');
      raceDateElem.textContent = raceDate;

      // Ajout de la classe "upcoming-race" si le Grand Prix a lieu dans le futur
      if (currentDate < raceDateObj && !upcoming) {
        upcoming = true;
        raceCard.classList.add('upcoming-race');
      }

      raceCard.appendChild(raceDateElem);

      // Ajout du lieu du Grand Prix
      const raceLocation = document.createElement('p');
      raceLocation.classList.add('gp-location');
      raceLocation.textContent = `${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`;
      raceCard.appendChild(raceLocation);

      const NormalizedTracks = {
        // API         SITE
        // Name       
        'Sakhir': 'Bahrain%20carbon',
        'Jeddah': 'Saudi%20Arabia%20carbon',
        'Melbourne': 'Australia%20carbon',
        'Baku': 'Azerbaijan%20carbon',
        'Miami': 'Miami%20carbon',
        'Imola' : 'Emilia%20Romagna%20carbon',
        'Montmeló': 'Spain%20carbon',
        'Monte-Carlo': 'Monte%20Carlo%20carbon',
        'Montreal': 'Canada%20carbon',
        'Spielberg': 'Austria%20carbon',
        'Silverstone': 'Great%20Britain%20carbon',
        'Budapest': 'Hungar%20carbon',
        'Spa': 'Belgium%20carbon',
        'Zandvoort': 'Netherlands%20carbon',
        'Monza': 'Italy%20carbon',
        'Sochi Autodrom': 'Russia',
        'Marina Bay': 'Singapor%20carbon',
        'Suzuka': 'Japan%20carbon',
        'Al Daayen':'Qatar%20carbon',
        'Austin': 'USA%20carbon',
        'Mexico City': 'Mexico%20carbon',
        'São Paulo': 'Brazil%20carbon',
        'Las Vegas' : 'Las%20Vegas%20carbon',
        'Abu Dhabi' : 'Abu%20Dhabi%20carbon',
      };
      
      // Ajout du tracé du Grand Prix
      const raceCircuit = document.createElement('img');
      raceCircuit.setAttribute('src', `https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/${NormalizedTracks[race.Circuit.Location.locality] || race.Circuit.Location.locality}.png.transform/2col/image.png`);
      raceCard.appendChild(raceCircuit);



      /*//////////////////////////////////////////////////////////////////
                      A VERIFIER AVEC PIERRE PQ CA MARCHE PO
      //////////////////////////////////////////////////////////////////*/




        // Rediriger vers la page information.php en cliquant sur la carte du Grand Prix
        // raceCard.addEventListener('click', () => {
        // Construction de l'URL pour la page information.php avec l'identifiant du circuit
        // const circuitId = race.Circuit.circuitId;
        // const infoUrl = `../pages/information.php?circuitId=${circuitId}`;

        // Redirection vers la page information.php
       //  window.location.href = infoUrl;
        // });

            /*//////////////////////////////////////////////////////////////////
                      A VERIFIER AVEC PIERRE PQ CA MARCHE PO
      //////////////////////////////////////////////////////////////////*/

      
      
      // Ajout de la carte du Grand Prix dans le conteneur
      racesContainer.appendChild(raceCard);
    }

    // Ajout du conteneur dans la div correspondante
    const gpListDiv = document.getElementById('gp-list');
    gpListDiv.appendChild(racesContainer);
  })
  .catch(error => {
    console.log('Erreur :', error);
  });
