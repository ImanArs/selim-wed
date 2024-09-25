window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      window.scrollTo(0, 0);
    }, 1000); // Убедитесь, что это значение совпадает с длительностью перехода в CSS
  }, 3000); // 5 секунд
});

const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const attendanceElement = document.querySelector('input[name="attendance"]:checked');
  const attendance = attendanceElement ? attendanceElement.value : '';

  const formData = {
    name: name,
    status: attendance,
  };

  const config = {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  if (!name || !attendance) {
    alert('Пожалуйста, заполните поле с именем и придетели вы');
    return;
  }

  try {
    const response = await fetch('https://636a27e5b10125b78fd2189a.mockapi.io/shoes', config);
    const data = await response.json();
    console.log(data);
    alert('Спасибо за вашу заявку!');
    window.location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
});