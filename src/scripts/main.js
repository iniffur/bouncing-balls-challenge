const canvasElement = document.getElementById("canvas");
const canvas = new Canvas(canvasElement);
let ballCount = 0;
const counterElement = document.getElementById("counter");

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

canvasElement.addEventListener("click", (event) => {
  const x = event.clientX - canvasElement.offsetLeft;
  const y = event.clientY - canvasElement.offsetTop;
  const radius = getRandomNumber(20, 50);
  const dx = getRandomNumber(-5, 5);
  const dy = getRandomNumber(-10, -5);
  const color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(
    0,
    255
  )}, ${getRandomNumber(0, 255)})`;

  const ball = new Ball(x, y, radius, dx, dy, color);
  canvas.addBall(ball);
  ballCount++;
  counterElement.innerHTML = ballCount;
});

const animate = () => {
  canvas.clear();
  canvas.drawBalls();
  canvas.updateBalls();

  requestAnimationFrame(animate);
};

animate();
