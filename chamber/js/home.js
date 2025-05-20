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
      if (!response.ok) throw new Error("Network response was not ok");
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

  const spotlightContainer = document.querySelector('.spotlights');
  if (spotlightContainer) {
    fetch('js/members.json')
      .then(response => response.json())
      .then(data => {
        const members = data.members;

        const premiumMembers = members.filter(
          member => member.membership === 1 || member.membership === 2
        );

        for (let i = premiumMembers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [premiumMembers[i], premiumMembers[j]] = [premiumMembers[j], premiumMembers[i]];
        }

        const selected = premiumMembers.slice(0, 3);

        const membershipText = { 1: "Gold", 2: "Silver" };

        spotlightContainer.innerHTML = '<h2>Business Spotlights</h2>';

        selected.forEach(member => {
          const card = document.createElement('div');
          card.classList.add('spotlight-card');

          card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="Logo of ${member.name}" class="spotlight-logo" />
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${membershipText[member.membership]}</p>
          `;

          spotlightContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error loading spotlight data:', error);
        spotlightContainer.innerHTML += '<p>Unable to load spotlight members.</p>';
      });
  }
});



