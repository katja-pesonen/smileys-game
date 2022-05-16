const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//all variables
let startBtn = document.querySelector("#start-button");
let restartBtn = document.querySelector("#restart-button");
let smileyLogo = document.querySelector("#excited-img");
let mixedLogo = document.querySelector("#mixed-img");
let arrows = document.querySelector("#arrows-img");
let scoreDiv = document.querySelector("#score-div");
let scoreElement = document.querySelector("#score");
let dizzyLogo = document.querySelector("#dizzy-img");
let blurb = document.querySelector("#intro-blurb");
let gameOverDiv = document.querySelector("#game-over");


//field image
const imgField = new Image();
imgField.src = '../images/field-background.jpg';

// rock images
const imgRock1 = new Image();
imgRock1.src = '../images/Kuva1.png';
const imgRock2 = new Image();
imgRock2.src = '../images/Kuva2.png';
const imgRock3 = new Image();
imgRock3.src = '../images/Kuva3.png';

//player smiley image
const imgPlayer = new Image();
imgPlayer.src = '../images/smiling.png';

// player variables
const playerWidth = 100;
const playerHeight = 100;
const playerSpeedValue = 5;
let playerX = canvas.width / 2 - playerWidth / 2;
let playerY = canvas.height - playerHeight - 25;
let isPlayerGoingLeft = false;
let isPlayerGoingRight = false;

let score = 0;
let gameOver = false;
let animationFrameId = 0;

// rock variables
const rockWidth = 80;
const rockHeight = 80;
let rockSpeedValue = 3;
let rockX = canvas.width / 2 - rockWidth / 2;
let rockY = canvas.height - rockHeight;


//draw field background 
function drawField() {
ctx.drawImage(imgField, 0, 0, canvas.width, canvas.height);
}

//draw player emoji
function drawPlayer() {
  ctx.drawImage(imgPlayer, playerX, playerY, playerWidth, playerHeight);
}

//draw rocks
function drawRocks() {
    ctx.drawImage(imgRock1, 2, 2, rockWidth, rockHeight);
    ctx.drawImage(imgRock2, 3, 0, rockWidth, rockHeight);
    ctx.drawImage(imgRock3, 4, 0, rockWidth, rockHeight);
  }


//When "Start Game" is clicked: 

function startGame() {
    canvas.style.display = 'block'
    scoreDiv.style.display = "block"
    startBtn.style.display = "none";
    arrows.style.display = "none";
    smileyLogo.style.display = "none";
    mixedLogo.style.display = "none";
    blurb.style.display = "none";
  animate();
  }


//move the player left and right

  function animate() {

    if (isPlayerGoingLeft) {
      if (playerX > 0) {
        playerX -= playerSpeedValue;
      }
    } 
    else if (isPlayerGoingRight) {
      if (playerX < canvas.width - playerWidth) {
        playerX += playerSpeedValue;
      }
  }

  drawField()
  drawPlayer()
  drawRocks()

  if (gameOver) {
    drawEnding()
    cancelAnimationFrame(animationFrameId);
    restartBtn.style.display = "block";
  } else {
    animationFrameId = requestAnimationFrame(animate);
  }
}



function drawEnding() {
    gameOverDiv.style.display = "block"
    }


// Event listeners and window.onload

  document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
        isPlayerGoingLeft = true;
    }
    if (event.code === "ArrowRight") {
        isPlayerGoingRight = true;
    }
  });

  document.addEventListener("keyup", event => {
    isPlayerGoingLeft = false;
    isPlayerGoingRight = false;
  });


  restartBtn.addEventListener("click", () => {
    startGame(); 
  });


window.onload = () => {
    canvas.style.display = 'none'
    restartBtn.style.display = "none";
    dizzyLogo.style.display = "none";
    scoreDiv.style.display = "none"
    arrows.style.display = "block";

  document.getElementById('start-button').onclick = () => {
    console.log("start clicked");
    startGame();
  }
};