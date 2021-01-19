function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function snowGeneration(count) {
  for (let i = 1; i <= count; i++) {
    const snowflake = document.createElement("span");
    snowflake.className = "snow";
    const opacity = Math.random().toFixed(2);
    const duration = getRandomInt(3, 10);
    const size = getRandomInt(1, 10);

    snowflake.style.cssText = `
      opacity: ${opacity};
      animation-duration: ${duration}s;
      animation-delay: ${getRandomInt(0, 10)}s;
      width: ${size}px;
      height: ${size}px;
    `;
    setTimeout(() => document.body.appendChild(snowflake), 200);
  }
}

snowGeneration(120);
