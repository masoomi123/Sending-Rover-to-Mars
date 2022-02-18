// Rover Object Goes Here 
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};

//Five obstacles on the grid, located with x/y coordinates.
var obstacles = {
  x: [1, 1, 4, 3, 2],
  y: [0, 1, 3, 2, 9]
};

//    Grid Visual: r - Rover, X - Obstacle, 0 - Empty Space
//   [r, X, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, X, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, X, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, X, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, X, 0, 0, 0, 0, 0, 0, 0]
//

// ======================
//Welcome message with instructions
console.log("Welcome to the Mars Rover App. Please use the 'command()' function with either 'l' , 'r', 'f', as arguments to move the rover.");

function turnLeft(){
  //takes in rover direction as argument and changes direction 90 degrees to the left
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log("turnLeft was called! Current direction is " + rover.direction);
}

function turnRight(){
  //takes in rover direction as argument and changes direction 90 degrees to the right
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("turnRight was called! Current direction is " + rover.direction);
}

function moveForward(){
  console.log("moveForward was called");
  //first if statement checks for rover direction & if rover will move outside boundary
  if(rover.direction === "N" && rover.y > 0){
    rover.y += -1;
    //calls checkObstacles function. If returned true, specific coordinate will be incremented/decremented
    if(checkObstacles())rover.y+= 1;
  } else if(rover.direction === "E" && rover.x < 10){
    rover.x += 1;
    if(checkObstacles())rover.x+= -1;
  } else if(rover.direction === "S" && rover.y < 10){
    rover.y+=1;
    if(checkObstacles())rover.y+= -1;
  } else if(rover.direction === "W" && rover.x > 0){
    rover.x += -1;
    if(checkObstacles())rover.x+= 1;
  } else{
    console.log("You must stay within the 10x10 grid! Position: " + rover.x + ", " + rover.y);
  } //pushes x & y coordinates to the array travelLog
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

function moveBackward(){
  console.log("moveBackward was called");
  //first if statement checks for rover direction & if rover will move outside boundary
  if(rover.direction === "N" && rover.y < 10){
    rover.y += 1;
    //calls checkObstacles function. If returned true, specific coordinate will be incremented/decremented
    if(checkObstacles())rover.y+= -1;
  } else if(direction === "E" && rover.x > 0 ){
    rover.x += -1;
    if(checkObstacles())rover.x+= 1;
  } else if(direction === "S" && rover.y > 0){
    rover.y+= -1;
    if(checkObstacles())rover.y+= 1;
  } else if(direction === "W" && rover.x < 10){
    rover.x += 1;
    if(checkObstacles())rover.x+= -1;
  } else{
    console.log("You must stay within the 10x10 grid! Position: " + rover.x + ", " + rover.y);
  }//pushes x & y coordinates to the array travelLog
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

function command(str){
  //loop to iterate through string to see if any invalid inputs
  for(var i = 0; i < str.length; i++){
    if(str[i] !== "l" && str[i] !== "r" && str[i] !== "f" && str[i] !== "b"){
      return "The command string has an invalid input. Please use only 'l', 'r', 'f'.";
    }
  } // if able to pass first for loop, this loop will iterate through string for rover commands
    for(i = 0; i < str.length; i++){
    switch (str[i]) {
      case 'l':
        turnLeft();
        break;
      case 'r':
        turnRight();
        break;
      case 'f':
        moveForward();
        break;
    }
  } console.log(rover.travelLog);
}
function checkObstacles(){
  //iterate through obstacles aray to check x,y coordinates of obstacles
  for(var j = 0; j < obstacles.x.length; j++){
    //check to see if rover x,y is same as obstacle x,y. If true, you will hit obstacle.
    if(rover.x === obstacles.x[j] && rover.y === obstacles.y[j]){
      console.log("you are about to hit an obstacle");
      return true;
    }
  } return false;
}
