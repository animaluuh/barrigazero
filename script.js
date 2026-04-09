const reveals = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

reveals.forEach(el => io.observe(el));

const stickyBar = document.getElementById('stickyBar');

const toggleSticky = () => {
  if (window.scrollY > 700) {
    stickyBar.classList.add('show');
  } else {
    stickyBar.classList.remove('show');
  }
};

toggleSticky();
window.addEventListener('scroll', toggleSticky, { passive: true });

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;

    document.querySelectorAll('details').forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});