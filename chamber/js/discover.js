const grid = document.querySelector('.discover-grid');
const visitMessage = document.querySelector('.visit-message');

// Fetch JSON data
fetch('data/discover.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('section');
      card.classList.add('card');

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img src="${item.image}" alt="${item.name}"></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
      `;

      grid.appendChild(card);
    });
  });

// Visit tracking with localStorage
const LAST_VISIT_KEY = 'lastVisit';
const now = Date.now();
const lastVisit = Number(localStorage.getItem(LAST_VISIT_KEY));

let message = '';
if (!lastVisit) {
  message = 'Welcome! Let us know if you have any questions.';
} else {
  const diff = now - lastVisit;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) {
    message = 'Back so soon! Awesome!';
  } else if (days === 1) {
    message = 'You last visited 1 day ago.';
  } else {
    message = `You last visited ${days} days ago.`;
  }
}

if (visitMessage) {
  visitMessage.textContent = message;
}
localStorage.setItem(LAST_VISIT_KEY, now);

