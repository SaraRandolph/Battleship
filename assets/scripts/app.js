var grid = []; 
grid.length = 3;

var ship = {
  isHit:false
}


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

function fireMissle(){
    var coords = document.getElementById('user-guess').value;
    coords = parseInput(coords);
    var row = coords[0];
    var col = coords[1];
    checkHit(coords.row,coords.col);
}

function parseInput(coords){
    var char1 = coords[0].toUpperCase();
    var char2 = parseInt(coords[1]) - 1
    var usersShot =  {row:char1 , col:char2};
    return usersShot;
}

function checkHit(row, col){
    var cell = grid[row][col]
    if (cell.firedAt){
        alert('Invalid Location: Already fired at ' + row + col)
        return
    } else {
        cell.firedAt = true;
    } if (cell.ship){
        cell.ship.hits++;
        cell.text = 'Hit!'
        if (cell.ship.isSunk()){
            alert("You sank my battleship. Must be luck!");
        }else {
            cell.firedAt = true;
        }
    }
}

function checkVictory(){
    var shipsSunk = 0
    for (var i = 0; i < ships.length; i++){
        if (ships[i].isSunk()){
            shipsSunk++;
        }
    }
        if (shipsSunk >= ships.length){
            return true;
        } else {
            return false;
        }
}

hideShip(); 