// Small interactions for the static portfolio.
document.addEventListener('DOMContentLoaded', () => {
  // Close the mobile navigation after choosing a section.
  const navLinks = document.querySelectorAll('#navLinks .nav-link, #navLinks .nav-contact');
  const navCollapse = document.getElementById('navLinks');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  // Static contact form: prepare a message in the visitor's email app.
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || 'Portfolio enquiry').trim();
    const message = String(data.get('message') || '').trim();
    const body = `Hi,\\n\\n${message}\\n\\nRegards,\\n${name}\\n${email}`;
    const recipient = 'hello@example.com'; // Replace with your email address.
    feedback.textContent = 'Opening your email app…';
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  // Prevent placeholder links from jumping to the top until real URLs are added.
  document.querySelectorAll('.placeholder-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (link.getAttribute('href') === '#') {
        event.preventDefault();
        const feedback = document.getElementById('formFeedback');
        if (feedback) feedback.textContent = 'Add your real project, article, or social profile URL to this link.';
      }
    });
  });
});
