// URL de l'API Ergast F1
const url = 'https://ergast.com/api/f1/current/constructorStandings.json';

// Récupération des données de l'API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const teams = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

    const teamContainer = document.createElement('div');
    teamContainer.classList.add('team-container');

    const NormalizedName = {
      // API           SITE
      // Name            
      'Red Bull' : 'red-bull-racing',
      'Alpine F1 Team' : 'alpine',
      'Aston Martin' : 'aston-martin',
      'Haas F1 Team':'haas-f1-team',
      'Alfa Romeo' : 'alfa-romeo' ,

    }
    
    teams.forEach(team => {
      const teamDiv = document.createElement('div');
      teamDiv.classList.add('team-card');

        // Ajout d'un event listener sur le clic de la carte d'équipe
        teamDiv.addEventListener('click', () => {
          const teamId = team.Constructor.constructorId;
          window.location.href = `#`;
          // window.location.href = `../pages/team.php?${teamId}`;
        });
      
        const teamRank = team.position;
        const name = team.Constructor.name;
  
        const teamInfosDiv = document.createElement('div');
        teamInfosDiv.classList.add('team-infos');
  
        const logoUrl = `https://media.formula1.com/content/dam/fom-website/teams/2023/${ NormalizedName[name] || name }-logo.png.transform/2col/image.png`;
        
        const teamNameDiv = document.createElement('div');
        teamNameDiv.classList.add('team-name');
        
        const rankP = document.createElement('p');
        const points = team.points;
        rankP.textContent = `${teamRank}.`;
  
        const pointsP = document.createElement('p');
        pointsP.classList.add('team-points');
        pointsP.textContent = `${points} pts`;
        
        const nameP = document.createElement('p');
        nameP.classList.add('team-name-text');
        nameP.textContent = name;
        
        const logoImg = document.createElement('img');
        logoImg.src = logoUrl;
        logoImg.alt = `${name} logo`;
        logoImg.classList.add('team-logo');
      // Car Image
      const carImage = document.createElement("img");
      carImage.classList.add("car-image");
      carImage.src = `https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/${ NormalizedName[name] || name }.png`;
      
      
      
      teamNameDiv.appendChild(rankP);
      teamNameDiv.appendChild(pointsP);

      teamInfosDiv.appendChild(logoImg);
      teamInfosDiv.appendChild(nameP);

      
      const driversDiv = document.createElement('div');
      driversDiv.classList.add('drivers');
      
      // Récupération des pilotes pour l'équipe
      fetch(`https://ergast.com/api/f1/current/constructors/${team.Constructor.constructorId}/drivers.json`)
        .then(response => response.json())
        .then(data => {
          const drivers = data.MRData.DriverTable.Drivers;
          
          // Création d'une carte pour chaque pilote
          drivers.forEach(driver => {
            const driverDiv = document.createElement('div');
            driverDiv.classList.add('driver-card');
            
            const driverName = `${driver.givenName} <br> <p class="familyname">${driver.familyName}</p>`;
            
            const driverNameP = document.createElement('p');
            driverNameP.innerHTML = driverName;
            
            
            driverDiv.appendChild(driverNameP);
            
            driversDiv.appendChild(driverDiv);
          });
        });

      teamDiv.appendChild(teamNameDiv);
      teamDiv.appendChild(teamInfosDiv);
      
      teamDiv.appendChild(driversDiv);
      teamDiv.appendChild(carImage);

      
      teamContainer.appendChild(teamDiv);
      
    });
    
    const teamListDiv = document.getElementById('team-list');
    teamListDiv.appendChild(teamContainer);
  });
