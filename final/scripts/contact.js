export function handleFormSubmission() {
  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const formData = {
      firstName: document.querySelector("#firstName").value.trim(),
      lastName: document.querySelector("#lastName").value.trim(),
      email: document.querySelector("#email").value.trim(),
      position: document.querySelector("#position").value.trim(),
      dob: document.querySelector("#dob").value,
      lastTeam: document.querySelector("#lastTeam").value.trim(),
    };

    localStorage.setItem("userSubmission", JSON.stringify(formData));

    window.location.href = "thankyou.html";
  });
}

window.addEventListener("DOMContentLoaded", handleFormSubmission);
