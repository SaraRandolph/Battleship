var grid = []; 
grid.length = 3;

var ship = {
  isHit:false
}
// kajdsflkjlfkajasfdssdfa

var missilesFired = 0; 
var rows = ["A","B","C","D","E","F","G","H", "I","J"]

function fireMissile(){
  var userGuess = document.getElementById("user-guess").value;
  missilesFired++;
  if (grid[userGuess]){
    alert ('Ship HIT!!' + ' Missiles Fired: ' + missilesFired);
    ship.isHit = true
    checkIfSunk()
  } else {
    alert ('Missed Sucker!' + ' Missiles Fired: ' + missilesFired);

  } 
}

function checkIfSunk (){
  if (ship.isHit === true ){
    alert ('YOU SUNK MY BATTLESHIP! Must be luck... :(')
  }
}

function hideShip(){
  ship.isHit = false;
  var randI = Math.floor(Math.random()*grid.length);
  grid[randI] = ship

}

function Ship(size) {
    this.size = size;
    this.hits = 0;
    this. isSunk(){
        if (this.hits>=this.size){
            return true
        } else {
            return false
        }  
    }
}

function createShips(totalShips,totalSize) {
    var ships = [];
    for (var i = 0; i < totalShips; i++){
        ships.push(new Ship(shipSize));
    }
    return ships;
}

function createGrid (rows){
    var grid = {}
    for (var i = 0; i < rows.length; i++){
        var row = rows[i];
        grid[row]=[];
    } for (var col = 0; col <rows.length; i++){
        grid[row][col] = {name: row + col}
    }
}

hideShip(); 