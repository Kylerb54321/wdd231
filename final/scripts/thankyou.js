export function displayThankYouMessage() {
  try {
    const data = JSON.parse(localStorage.getItem("userSubmission"));

    if (!data || !data.firstName || !data.lastName) {
      throw new Error("Incomplete user data.");
    }

    const message = `Thank you, ${data.firstName} ${data.lastName}, for reaching out to us.`;
    const followup = `We look forward to working with you to improve your game and help you achieve the goals you set out for yourself. We think that this partnership will be very beneficial for both you and our center.`;

    document.querySelector("#thankyou-message").textContent = message;
    document.querySelector("#followup-message").textContent = followup;
  } catch (err) {
    console.error("Error displaying thank you message:", err);
    document.querySelector("#thankyou-message").textContent = "Thank you for reaching out to us.";
    document.querySelector("#followup-message").textContent = "We look forward to working with you.";
  }
}

window.addEventListener("DOMContentLoaded", displayThankYouMessage);
