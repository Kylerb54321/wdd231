// DOM Elements
const directory = document.getElementById('member-directory');
const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');

// Data cache
let membersData = [];

// View Toggle Handlers
gridButton.addEventListener('click', () => {
  directory.classList.add('grid');
  directory.classList.remove('list');
  displayMembers(membersData);
});

listButton.addEventListener('click', () => {
  directory.classList.add('list');
  directory.classList.remove('grid');
  displayMembers(membersData);
});

// Fetch and render members
async function getMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  membersData = data.members;
  displayMembers(membersData);
}

function displayMembers(members) {
  directory.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement('section');

    if (directory.classList.contains('grid')) {
      // Grid view with image and full details
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
      `;
    } else {
      // List view: Name - Address - Phone - Website
      card.innerHTML = `
        <p><strong>${member.name}</strong>   ${member.address}   ${member.phone}   <a href="${member.website}" target="_blank">${member.website}</a></p> `;
    }

    directory.appendChild(card);
  });
}

// Footer Year and Last Modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initialize
getMembers();

