const form = document.getElementById('appointmentForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent real form submit
  confirmation.style.display = 'block';  // Show confirmation
  form.reset(); // Clear form fields
});