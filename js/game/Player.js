// File: js/game/Player.js

export class Player {
  constructor() {
    this.x = 400;
    this.y = 300;
    this.speed = 5;

    // Key bindings
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "w":
          this.y -= this.speed;
          break;
        case "a":
          this.x -= this.speed;
          break;
        case "s":
          this.y += this.speed;
          break;
        case "d":
          this.x += this.speed;
          break;
      }
    });
  }

  update() {
    // Future logic for updating player state
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, 20, 20); // Drawing the player as a square
  }
}
