// 定义数字跳动函数
function animateNumber(counterElement, endValue) {
  let startValue = 0;
  const duration = 2000; // 动画持续时间（毫秒）

  // 每次更新的间隔时间（毫秒）
  const stepTime = 20;
  const steps = duration / stepTime;
  const stepValue = (endValue - startValue) / steps;

  let currentValue = startValue;

  // 更新数字的函数
  const updateNumber = () => {
    currentValue += stepValue;
    if (currentValue >= endValue) {
      currentValue = endValue;
    }
    counterElement.innerText = Math.round(currentValue);

    if (currentValue < endValue) {
      requestAnimationFrame(updateNumber);
    }
  };

  updateNumber();
}

// 启动所有数字跳动动画
window.onload = function () {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const endValue = parseInt(counter.getAttribute("data-end-value"), 10);
    animateNumber(counter, endValue);
  });
};
