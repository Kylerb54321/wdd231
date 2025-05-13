document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

const directory = document.getElementById('member-directory');
const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');

gridButton.addEventListener('click', () => {
  directory.classList.add('grid');
  directory.classList.remove('list');
});

listButton.addEventListener('click', () => {
  directory.classList.add('list');
  directory.classList.remove('grid');
});

async function getMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  directory.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement('section');
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    directory.appendChild(card);
  });
}

getMembers();
