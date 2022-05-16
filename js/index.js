const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//field image
const imgField = new Image();
imgField.src = '../images/field-background.jpg';

// rock image
const imgRock = new Image();
imgRock.src = '../images/rock.PNG';

//player smiley image
const imgPlayer = new Image();
imgPlayer.src = '../images/smiling.png';

// player variables
const playerWidth = 100;
const playerHeight = 100;
const playerSpeedValue = 5;
let playerX = canvas.width / 2 - playerWidth / 2;
let playerY = canvas.height - playerHeight;
let isPlayerGoingLeft = false;
let isPlayerGoingRight = false;

let score = 0;
let gameOver = false;
let animationFrameId = 0;


//draw field background 
function drawField() {
ctx.drawImage(imgField, 0, 0, canvas.width, canvas.height);
}

//draw field background 
function drawField() {
    ctx.drawImage(imgField, 0, 0, canvas.width, canvas.height);
    }

//draw player emoji
function drawPlayer() {
  ctx.drawImage(imgPlayer, playerX, playerY, playerWidth, playerHeight);
}


//When "Start Game" is clicked: 

function startGame() {
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

  if (gameOver) {
    drawEnding()
    cancelAnimationFrame(animationFrameId);
    restartBtn.style.display = "block";
  } else {
    animationFrameId = requestAnimationFrame(animate);
  }
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


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log("start clicked");
    startGame();
  }
};