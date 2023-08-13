// File: js/main.js

import { Player } from "./game/Player.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = new Player();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();
