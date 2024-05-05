function reportMainSize() {
  const info = document.querySelector('main > .info');
  const main = document.getElementById('clamped');
  info.textContent = `width: ${main.offsetWidth}`
}

function reportWindowSize() {
  const info = document.querySelector('.container > .info');
  info.textContent = `window width: ${window.innerWidth}`
}

function highlightAppliedWidth() {
  const min = document.querySelector('span.min');
  const val = document.querySelector('span.val');
  const max = document.querySelector('span.max');

  const width = window.innerWidth;
  if (width > 1200) {
    min.classList.remove('highlight');
    val.classList.remove('highlight');
    max.classList.add('highlight');
  } else if (width < 600) {
    min.classList.add('highlight');
    val.classList.remove('highlight');
    max.classList.remove('highlight');
  } else {
    min.classList.remove('highlight');
    val.classList.add('highlight');
    max.classList.remove('highlight');
  }
}

window.addEventListener("load", reportMainSize);
window.addEventListener("load", reportWindowSize);
window.addEventListener("load", highlightAppliedWidth);

window.addEventListener("resize", reportMainSize);
window.addEventListener("resize", reportWindowSize);
window.addEventListener("resize", highlightAppliedWidth);

