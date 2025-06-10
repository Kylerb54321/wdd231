document.querySelector('#contactForm').addEventListener('submit', (e) => {
  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;

  localStorage.setItem('fname', fname);
  localStorage.setItem('lname', lname);

});

