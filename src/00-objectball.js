gameObject = () => {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    }
  }
  
  const gameData = gameObject();
  console.log(gameData);
  
  
  function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  console.log(homeTeamName());
  
  // 
  
  numPointsScored = playerName => {
    let object = gameObject()
    const player = gameData.home.players[playerName] || gameData.away.players[playerName];
    return player ? player.points : "Player not found";
  }
  
  const playerName = "Alan Anderson";
  const pointsScored = numPointsScored(playerName);
  console.log(`${playerName} scored ${pointsScored} points.`);
  
  //
  
  shoeSize = playerName => {
    let object = gameObject()
    const player = gameData.home.players[playerName] || gameData.away.players[playerName];
    return player?.shoe ?? "Player not found";
  }
  
  //
  
  const playerShoeSize = shoeSize(playerName);
  console.log(`${playerName}'s shoe size is ${playerShoeSize}.`);
  
  teamColors = teamName => {
    const team = gameData.home.teamName === teamName ? gameData.home : gameData.away;
    return team.colors;
  }
  const teamName = "Brooklyn Nets";
  const colors = teamColors(teamName);
  console.log(`${teamName} team colors are: ${colors.join(", ")}.`);
  
  //
  
  teamNames = () => {
    return [gameData.home.teamName, gameData.away.teamName];
  }
  const names = teamNames();
  console.log(names);
  
  //
  
  playerNumbers = (teamName) => {
    const team = teamName === gameData.home.teamName ? 'home' : 'away';
    const players = gameData[team].players;
    return Object.values(players).map(player => player.number);
  }
  
  const homePlayerNumbers = playerNumbers('Brooklyn Nets');
  console.log(homePlayerNumbers);
  const awayPlayerNumbers = playerNumbers('Charlotte Hornets');
  console.log(awayPlayerNumbers);
  
  const playerStats = playerName => gameData.home.players[playerName] || gameData.away.players[playerName];
  
  console.log(playerStats("Alan Anderson"));
  
  //
  
  const bigShoeRebounds = () => {
    let object = gameObject()
    // Step 1: Find the player with the largest shoe size
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = '';
  
    for (const team in gameData) {
      for (const player in gameData[team].players) {
        const playerShoeSize = gameData[team].players[player].shoe;
        if (playerShoeSize > largestShoeSize) {
          largestShoeSize = playerShoeSize;
          playerWithLargestShoeSize = player;
        }
      }
    }
  
    console.log(`Step 1: Player with the largest shoe size is ${playerWithLargestShoeSize}`);
  
    // Step 2: Return that player's number of rebounds
    return gameData.home.players[playerWithLargestShoeSize].rebounds;
  }
  
  console.log(bigShoeRebounds());
  
  //BONUS\\
  
  
  const mostPointsScored = () => {
    const players = gameData.home.players;
    let maxPoints = 0;
    let playerWithMostPoints = '';
  
    for (const player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        playerWithMostPoints = player;
      }
    }
  
    console.log(playerWithMostPoints);
    return playerWithMostPoints;
  }
  
  mostPointsScored();
  