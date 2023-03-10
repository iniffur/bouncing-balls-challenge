class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw = (context) => {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  };

  update = (canvasWidth, canvasHeight) => {
    if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvasHeight) {
      this.dy = -this.dy * 0.8;
    } else {
      this.dy += 1;
    }
    this.slowDownBalls();
    this.x += this.dx;
    this.y += this.dy;
  };

  slowDownBalls = () => {
    if (this.dx !== 0) {
      this.dx *= 0.995; // reduce horizontal speed by 1% per frame
    }
    if (this.dy !== 0) {
      this.dy *= 0.995; // reduce vertical speed by 1% per frame
    }
  };
}
