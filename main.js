var images = ["Mars1.jpeg", "Mars2.jpeg", "Mars3.jpeg", "Mars4.jpeg", "Mars5.jpeg"];
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var roverWidth = 100;
var roverHeight = 90;
var roverX = 10;
var roverY = 10;
var backgroundImg = "mars.jpg";
var roverImg = "rover.png";
var randomNum = Math.floor(Math.random() * 5);
console.log(randomNum);
backgroundImg = images[randomNum];
console.log(backgroundImg);

function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = backgroundImg;

  rover_imgTag = new Image();
  rover_imgTag.onload = uploadRover;
  rover_imgTag.src = roverImg;
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
  ctx.drawImage(rover_imgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", keyDown);

function keyDown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  switch(keyPressed){
    case 38:
      up();
      console.log("up");
      break;
    case 40:
      down();
      console.log("down");
      break;
    case 37:
      left();
      console.log("left");
      break;
    case 39:
      right();
      console.log("right");
      break;
  }
}

function up() {
  if(roverY >= 0) {
    roverY -= 10;
    console.log("X = " + roverX, " Y = " + roverY);
    uploadBackground();
    uploadRover();
  }
}

function down() {
  if(roverY <= 500) {
    roverY += 10;
    console.log("X = " + roverX, " Y = " + roverY);
    uploadBackground();
    uploadRover();
  }
}

function left() {
  if(roverX >= 0) {
    roverX -= 10;
    console.log("X = " + roverX, " Y = " + roverY);
    uploadBackground();
    uploadRover();
  }
}

function right() {
  if(roverX <= 700) {
    roverX += 10;
    console.log("X = " + roverX, " Y = " + roverY);
    uploadBackground();
    uploadRover();
  }
}