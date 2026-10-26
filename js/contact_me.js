(function () {
  'use strict';
  var form = document.getElementById('contactForm');
  var status = document.getElementById('success');
  if (!form || !status) return;
  // This form is local: it never sends or stores field values.
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    status.textContent = 'Contact service is currently unavailable. Your message has not been sent.';
    status.className = 'alert alert-info';
    status.hidden = false;
  });
}());
