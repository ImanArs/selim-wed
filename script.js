window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000); // Убедитесь, что это значение совпадает с длительностью перехода в CSS
  }, 3000); // 5 секунд
});