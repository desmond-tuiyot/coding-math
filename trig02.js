window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  let centerX = width * 0.5,
    centerY = height * 0.5,
    angle = 0,
    speed = 0.1,
    offsetY = height * 0.4,
    offsetX = width * 0.4;

  render();

  function render() {
    const y = centerY + offsetY * Math.sin(angle);
    const y2 = centerY + offsetY * Math.cos(angle);
    const x = centerX + offsetX * Math.cos(angle);
    const x2 = centerX + offsetX * Math.sin(angle);

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2, true);
    context.arc(x2, y2, 50, 0, Math.PI * 2, true);
    context.fill();

    angle += speed;
    requestAnimationFrame(render);
  }
};
