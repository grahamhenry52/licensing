// Mobile navigation
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}
// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
// Contact form (front-end demo only)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.service) {
      statusEl.textContent = 'Please complete required fields.';
      statusEl.style.color = '#DC2626';
      return;
    }
    statusEl.textContent = 'Thanks! We will contact you shortly.';
    statusEl.style.color = '#16A34A';
    // To wire up: send to email/API/form service.
    // fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
  });
}