    const params = new URLSearchParams(window.location.search);
    const firstName = params.get('fname') || '';
    const lastName = params.get('lname') || '';

    const messageElem = document.getElementById('thankyou-message');
    const followupElem = document.getElementById('followup-message');

    if (firstName || lastName) {
      messageElem.textContent = `Thank you, ${firstName} ${lastName}, for reaching out to Mad Rugby Skills Development Center. One of our consultants will contact you shortly to arrange a meeting and discuss your expectations and how we can assist you.`;
    } else {
      messageElem.textContent = `Thank you for reaching out to Mad Rugby Skills Development Center. One of our consultants will contact you shortly to arrange a meeting and discuss your expectations and how we can assist you.`;
    }

    followupElem.textContent = `We look forward to working with you to improve your game and help you achieve the goals you set out for yourself. We think that this partnership will be very beneficial for both you and our center.`;
  