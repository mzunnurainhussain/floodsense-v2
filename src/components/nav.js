// Shared navigation and clock ticker
document.addEventListener('DOMContentLoaded', () => {
  // Live clock in any element with id="live-clock"
  const clockEl = document.getElementById('live-clock');
  if (clockEl) {
    const tick = () => { clockEl.textContent = SIM.clock(); };
    tick();
    setInterval(tick, 1000);
  }

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(el => {
    if (el.getAttribute('data-nav') === currentPage) {
      el.classList.add('active');
    }
  });

  // Mobile sidebar toggle
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }
});
