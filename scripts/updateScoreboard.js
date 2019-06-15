var getCurrentScore = function(currentScore) {
  var scoreArray = currentScore.split("-");
  return parseInt(scoreArray[scoreArray.length - 1]);
}

var getNewScores = function(scoresObject, playerName, playerScore) {
  if (playerScore > getCurrentScore(scoresObject.scores.first)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = scoresObject.scores.eighth;
    scoresObject.scores.eighth = scoresObject.scores.seventh;
    scoresObject.scores.seventh = scoresObject.scores.sixth;
    scoresObject.scores.sixth = scoresObject.scores.fifth;
    scoresObject.scores.fifth = scoresObject.scores.fourth;
    scoresObject.scores.fourth = scoresObject.scores.third;
    scoresObject.scores.third = scoresObject.scores.second;
    scoresObject.scores.second = scoresObject.scores.first;
    scoresObject.scores.first = playerName + " - " + playerScore;

  } else if (playerScore > getCurrentScore(scoresObject.scores.second)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = scoresObject.scores.eighth;
    scoresObject.scores.eighth = scoresObject.scores.seventh;
    scoresObject.scores.seventh = scoresObject.scores.sixth;
    scoresObject.scores.sixth = scoresObject.scores.fifth;
    scoresObject.scores.fifth = scoresObject.scores.fourth;
    scoresObject.scores.fourth = scoresObject.scores.third;
    scoresObject.scores.third = scoresObject.scores.second;
    scoresObject.scores.second = playerName + " - " + playerScore;

  } else if (playerScore > getCurrentScore(scoresObject.scores.third)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = scoresObject.scores.eighth;
    scoresObject.scores.eighth = scoresObject.scores.seventh;
    scoresObject.scores.seventh = scoresObject.scores.sixth;
    scoresObject.scores.sixth = scoresObject.scores.fifth;
    scoresObject.scores.fifth = scoresObject.scores.fourth;
    scoresObject.scores.fourth = scoresObject.scores.third;
    scoresObject.scores.third = playerName + " - " + playerScore;
    
  } else if (playerScore > getCurrentScore(scoresObject.scores.fourth)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = scoresObject.scores.eighth;
    scoresObject.scores.eighth = scoresObject.scores.seventh;
    scoresObject.scores.seventh = scoresObject.scores.sixth;
    scoresObject.scores.sixth = scoresObject.scores.fifth;
    scoresObject.scores.fifth = scoresObject.scores.fourth;
    scoresObject.scores.fourth = playerName + " - " + playerScore;
    
  } else if (playerScore > getCurrentScore(scoresObject.scores.fifth)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = scoresObject.scores.eighth;
    scoresObject.scores.eighth = scoresObject.scores.seventh;
    scoresObject.scores.seventh = scoresObject.scores.sixth;
    scoresObject.scores.sixth = scoresObject.scores.fifth;
    scoresObject.scores.fifth = playerName + " - " + playerScore;
    
  } else if (playerScore > getCurrentScore(scoresObject.scores.sixth)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = scoresObject.scores.eighth;
    scoresObject.scores.eighth = scoresObject.scores.seventh;
    scoresObject.scores.seventh = scoresObject.scores.sixth;
    scoresObject.scores.sixth = playerName + " - " + playerScore;
    
  } else if (playerScore > getCurrentScore(scoresObject.scores.seventh)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = scoresObject.scores.eighth;
    scoresObject.scores.eighth = scoresObject.scores.seventh;
    scoresObject.scores.seventh = playerName + " - " + playerScore;
    
  } else if (playerScore > getCurrentScore(scoresObject.scores.eighth)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = scoresObject.scores.eighth;
    scoresObject.scores.eighth = playerName + " - " + playerScore;
    
  } else if (playerScore > getCurrentScore(scoresObject.scores.ninth)) {
    scoresObject.scores.tenth = scoresObject.scores.ninth;
    scoresObject.scores.ninth = playerName + " - " + playerScore;
    
  } else if (playerScore > getCurrentScore(scoresObject.scores.tenth)) {
    scoresObject.scores.tenth = playerName + " - " + playerScore;
  }
  return scoresObject;
}

// code for updating scores, taken straight from the JSONBin website
// www.jsonbin.io

function updateScores(playerName, playerScore) {
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    var scoresObject = JSON.parse(req.responseText);
    scoresObject = getNewScores(scoresObject, playerName, playerScore);
    postNewScores(scoresObject);
  }
};

req.open("GET", "https://api.jsonbin.io/b/5cf68a2ee36bab4cf31198d8", true);
req.setRequestHeader("secret-key", "$2a$10$i1CbSe3/MA5qTHWLYi10h.aFktmulIwidRSjv8d3pz1hVlCWQC476");
req.send();

var postNewScores = function(scoresObject) {
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          sessionStorage.clear();
          window.location.href = "scoreboard.html";
        }
      };
      
    req.open("PUT", "https://api.jsonbin.io/b/5cf68a2ee36bab4cf31198d8", true);
    req.setRequestHeader("Content-type", "application/json");
    req.setRequestHeader("secret-key", "$2a$10$i1CbSe3/MA5qTHWLYi10h.aFktmulIwidRSjv8d3pz1hVlCWQC476");
    req.setRequestHeader("versioning", "false");
    
    req.send(JSON.stringify(scoresObject));
}
}