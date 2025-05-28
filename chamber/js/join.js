document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

getMembers();

  // Handle membership modal triggers
  const membershipLinks = document.querySelectorAll(".membership-card a");
  membershipLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.getAttribute("href").substring(1);
      const modal = document.getElementById(modalId);
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        console.warn(`Modal with ID "${modalId}" not found or not supported.`);
      }
    });
  });

  // Optional: Add ESC key functionality to close modals
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll("dialog[open]").forEach(modal => modal.close());
    }
  });

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('#main-nav ul');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("main-nav").classList.toggle("open");
});






