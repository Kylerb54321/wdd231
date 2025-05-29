document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

const params = new URLSearchParams(window.location.search);
const fields = {
  fname: "First Name",
  lname: "Last Name",
  email: "Email",
  phone: "Mobile Number",
  organization: "Business Name",
  membership: "Membership Type",
  description: "Business Description",
  timestamp: "Submission Date"
};

const container = document.getElementById("submitted-data");

Object.keys(fields).forEach(field => {
  const value = params.get(field);
  if (value) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${fields[field]}:</strong> ${value}`;
    container.appendChild(p);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("open");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const timestampInput = document.getElementById("timestamp");
  const now = new Date();
  const formatted = now.toLocaleString(); 
  timestampInput.value = formatted;
});



