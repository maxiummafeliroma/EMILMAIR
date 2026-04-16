// Año dinámico en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const revealElements = document.querySelectorAll('.section__head, .card, .service-item, .brand, .info-block');
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => observer.observe(el));

// Formulario -> WhatsApp
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !telefono || !mensaje) {
      alert('Por favor completá todos los campos.');
      return;
    }

    const texto = `Hola EMILMAIR! Soy ${nombre}.%0A%0ATel: ${telefono}%0A%0A${encodeURIComponent(mensaje)}`;
    // Reemplazar PLACEHOLDER_WHATSAPP por el número real (ej: 5492611234567)
    const url = `https://wa.me/PLACEHOLDER_WHATSAPP?text=${texto}`;
    window.open(url, '_blank');
  });
}

// Smooth scroll con offset del header
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  });
});
