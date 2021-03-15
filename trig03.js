window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  let centerX = width * 0.5,
    centerY = height * 0.5,
    xAngle = 0,
    yAngle = 0,
    xSpeed = 0.09,
    ySpeed = 0.01,
    xRadius = 200,
    yRadius = 200;

  render();

  function render() {
    const y = centerY + yRadius * Math.sin(yAngle);
    const x = centerX + xRadius * Math.cos(xAngle);

    // context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2, true);
    context.fill();

    xAngle += xSpeed;
    yAngle += ySpeed;
    requestAnimationFrame(render);
  }
};
