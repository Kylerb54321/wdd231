const directory = document.getElementById('member-directory');
const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');

let membersData = [];

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
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
      `;
    } else {
      card.innerHTML = `
        <p><strong>${member.name}</strong>   ${member.address}   ${member.phone}   <a href="${member.website}" target="_blank">${member.website}</a></p>
      `;
    }

    directory.appendChild(card);
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

getMembers();


const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});


