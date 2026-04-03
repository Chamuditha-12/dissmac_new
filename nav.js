/* ── DiSSMaC Shared Navigation JS ── */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('active');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
  document.getElementById('hamburger').classList.remove('open');
}
function toggleServices() {
  const sub = document.getElementById('services-sub');
  const link = document.querySelector('.services-toggle');
  sub.classList.toggle('open');
  if(link) link.classList.toggle('active-parent');
}
window.addEventListener('scroll', () => {
  const tb = document.getElementById('topbar');
  if (tb) tb.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,.7)' : 'none';
});
