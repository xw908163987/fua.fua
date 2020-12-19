//字体适配
(function () {
  function autoRootFontSize() {
    const windowWidth = window.innerWidth
    const changedFontSize = parseInt(windowWidth / 20)
    document.querySelector('html').style.fontSize = `${changedFontSize}px`;
  }
    window.addEventListener('resize', autoRootFontSize);
    autoRootFontSize();
})();