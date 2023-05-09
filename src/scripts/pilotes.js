// URL de l'API Ergast F1
const url = 'https://ergast.com/api/f1/current/driverStandings.json';

// Récupération de la div pour le container des pilotes
const driverListDiv = document.getElementById('driver-list');

// Récupération des données de l'API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    const driverContainer = document.createElement('div');
    driverContainer.classList.add('driver-container');

    const NormalizedName = {
      // API           SITE
      // Name            
      'Red Bull' : 'red-bull-racing',
      'Alpine F1 Team' : 'alpine',
      'Aston Martin' : 'aston-martin',
      'Haas F1 Team':'haas-f1-team',
      'Alfa Romeo' : 'alfa-romeo' ,
    }
    
    drivers.forEach(driver => {
      const driverDiv = document.createElement('div');
      driverDiv.classList.add('driver-card');

      
      const driverRank = driver.position;
      const { familyName } = driver.Driver
      const name = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
      const nationality = driver.Driver.nationality;
      const points = driver.points;
      const teamName = driver.Constructors[0].name;

      const driverInfosDiv = document.createElement('div');
      driverInfosDiv.classList.add('driver-infos');

      const logoUrl = `https://media.formula1.com/content/dam/fom-website/teams/2023/${ NormalizedName[teamName] || teamName }-logo.png.transform/2col/image.png`;
      
      const driverNameDiv = document.createElement('div');
      driverNameDiv.classList.add('driver-name');
      
      const rankP = document.createElement('p');
      rankP.classList.add('driver-rank');
      rankP.textContent = `${driverRank}.`;

      const pointsP = document.createElement('p');
      pointsP.classList.add('driver-points');
      pointsP.textContent = `${points} pts`;
      
      const nameP = document.createElement('div');
      nameP.classList.add('driver-name-text');
      nameP.innerHTML = `${name} <br> <span class="nationality">${nationality}</span>`;
      
      
      // Numéros pilotes
      const NormalizedNamedriver = {
        // API           SITE
        // Name      
        // Red Bull Racing      
        'Verstappen' : '/M/MAXVER01_Max_Verstappen/maxver01',
        'Pérez' : '/S/SERPER01_Sergio_Perez/serper01',
        // Scuderia Ferrari
        'Leclerc' : '/C/CHALEC01_Charles_Leclerc/chalec01',
        'Sainz' : '/C/CARSAI01_Carlos_Sainz/carsai01',
        // Mercedes AMG Petronas F1 Team
        'Hamilton' : '/L/LEWHAM01_Lewis_Hamilton/lewham01',
        'Russell' : '/G/GEORUS01_George_Russell/georus01',
        // Aston  Martin
        'Alonso' : '/F/FERALO01_Fernando_Alonso/feralo01',
        'Stroll' : '/L/LANSTR01_Lance_Stroll/lanstr01',
        // McLaren
        'Norris' : '/L/LANNOR01_Lando_Norris/lannor01',
        'Piastri' : '/O/OSCPIA01_Oscar_Piastri/oscpia01',
        // Haas F1 Team
        'Magnussen' : '/K/KEVMAG01_Kevin_Magnussen/kevmag01',
        'Hülkenberg' : '/N/NICHUL01_Nico_Hulkenberg/nichul01',
        // Alpine F1 Team
        'Ocon' : '/E/ESTOCO01_Esteban_Ocon/estoco01',
        'Gasly' : '/P/PIEGAS01_Pierre_Gasly/piegas01',
        // Alfa Roméo
        'Bottas' : '/V/VALBOT01_Valtteri_Bottas/valbot01',
        'Zhou' : '/G/GUAZHO01_Guanyu_Zhou/guazho01',
        // Scuderia AlphaTauri
        'Tsunoda' : '/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01',
        'de Vries' : '/N/NYCDEV01_Nyck_De%20Vries/nycdev01',
        // Williams Racing
        'Albon' : '/A/ALEALB01_Alexander_Albon/alealb01',
        'Sargeant' : '/L/LOGSAR01_Logan_Sargeant/logsar01',
      }


      
      const logoImg = document.createElement('img');
      logoImg.src = `https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers${NormalizedNamedriver[familyName]}.png.transform/2col-retina/image.png`;
      logoImg.alt = `${teamName} logo`;
      logoImg.classList.add('driver-image');

      const NormalizedLogo = {
        // API           SITE
        // Name            
        'Verstappen' : 'MAXVER',
        'Pérez' : 'SERPER',
        // Scuderia Ferrari
        'Leclerc' : 'CHALEC',
        'Sainz' : 'CARSAI',
        // Mercedes AMG Petronas F1 Team
        'Hamilton' : 'LEWHAM',
        'Russell' : 'GEORUS',
        // Aston  Martin
        'Alonso' : 'FERALO',
        'Stroll' : 'LANSTR',
        // McLaren
        'Norris' : 'LANNOR',
        'Piastri' : 'OSCPIA',
        // Haas F1 Team
        'Magnussen' : 'KEVMAG',
        'Hülkenberg' : 'NICHUL',
        // Alpine F1 Team
        'Ocon' : 'ESTOCO',
        'Gasly' : 'PIEGAS',
        // Alfa Roméo
        'Bottas' : 'VALBOT',
        'Zhou' : 'GUAZHO',
        // Scuderia AlphaTauri
        'Tsunoda' : 'YUKTSU',
        'de Vries' : 'NYCDEV',
        // Williams Racing
        'Albon' : 'ALEALB',
        'Sargeant' : 'LOGSAR',
      }

      // Pilote Image
      const driverImage = document.createElement("img");
      driverImage.classList.add("driver-logo");
      driverImage.src = `https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/${NormalizedLogo[familyName]}01.png.transform/2col/image.png`;
      driverImage.alt = `${name} photo`;
      
      driverNameDiv.appendChild(rankP);
      driverNameDiv.appendChild(pointsP);
      driverInfosDiv.appendChild(nameP);

      driverInfosDiv.appendChild(driverImage);
      driverInfosDiv.appendChild(logoImg);

      
      const teamDiv = document.createElement('div');
      teamDiv.classList.add('team');
      const teamNameP = document.createElement('p');
      teamNameP.classList.add('team-name-text');
      teamNameP.textContent = teamName;
      teamDiv.appendChild(teamNameP);

      driverDiv.appendChild(driverNameDiv);
      driverDiv.appendChild(teamDiv);
      driverDiv.appendChild(driverInfosDiv);


      driverContainer.appendChild(driverDiv);
    });
    
    // Ajout du container des pilotes à la div correspondante
    driverListDiv.appendChild(driverContainer);
  });
