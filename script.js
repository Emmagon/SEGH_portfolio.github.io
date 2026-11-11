// TODO: Personaliza las interacciones si añades nuevas secciones.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Revelar los proyectos al entrar en pantalla, sin bloquear el scroll normal.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => {
    // Los elementos visibles al cargar aparecen directamente.
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('is-pending');
      observer.observe(element);
    }
  });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.is-pending').forEach((element) => element.classList.remove('is-pending'));
    }
  });
}
// TODO: Añade enlaces de demos y repositorios en index.html.
// TODO: Nunca incluyas contraseñas o claves API en este archivo público.
