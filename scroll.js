
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.acad-3-container');
  let isDown = false;
  let startY;
  let scrollTop;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startY = e.pageY - container.offsetTop;
    scrollTop = container.scrollTop;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - container.offsetTop;
    const walk = (y - startY) * 2; // Adjust scroll speed as needed
    container.scrollTop = scrollTop - walk;
  });
});

