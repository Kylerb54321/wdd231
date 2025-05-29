document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});

document.querySelectorAll(".membership-card a").forEach(link => {
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

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll("dialog[open]").forEach(modal => modal.close());
  }
});







