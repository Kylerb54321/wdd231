// Wait for DOM to load
window.addEventListener("DOMContentLoaded", () => {

  const yearEl = document.getElementById('year');
  const modifiedEl = document.getElementById('last-modified');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (modifiedEl) modifiedEl.textContent = document.lastModified;

  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  const apiKey = "4e850eb1369b9b26ce6d6470880fd86a";
  const city = "Cape Town";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      const weatherSection = document.querySelector(".weather");
      if (!weatherSection) return;

      const temp = data.main.temp.toFixed(1);
      const condition = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      weatherSection.innerHTML = `
        <h2>Weather</h2>
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${condition}</p>
        <img src="${iconUrl}" alt="${condition}">
      `;
    })
    .catch(error => {
      console.error("Weather fetch failed:", error);
      const weatherSection = document.querySelector(".weather");
      if (weatherSection) {
        weatherSection.innerHTML = "<p>Unable to load weather data at this time.</p>";
      }
    });
});


