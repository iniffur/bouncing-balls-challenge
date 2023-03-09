class Canvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.balls = [];
  }

  addBall = (ball) => {
    this.balls.push(ball);
  };

  clear = () => {
    this.context.clearRect(0, 0, this.width, this.height);
  };

  drawBalls = () => {
    for (const ball of this.balls) {
      ball.draw(this.context);
    }
  };

  updateBalls = () => {
    for (const ball of this.balls) {
      ball.update(this.width, this.height);
    }
  };
}

module.exports = Canvas;
