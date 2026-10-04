const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
  });
});

// Replace this number later with LOVINGLY's production WhatsApp number.
const WHATSAPP_NUMBER = '919999999999';
const whatsappMessage = encodeURIComponent(
  "Hi LOVINGLY, I'd love to create a celebration experience for my moment."
);
const whatsappCta = document.getElementById('whatsapp-cta');
if (whatsappCta) {
  whatsappCta.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  whatsappCta.target = '_blank';
}

// Reveal sections as they enter the viewport.
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}

// Keep only one FAQ open at a time for a cleaner editorial interaction.
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});
