// script.js - interacciones sencillas: menú móvil, tema y volver arriba

// Helper: safe query
const $ = (sel) => document.querySelector(sel);

// TEMA: alternar clase 'dark-mode' en body y guardar preferencia en localStorage
const themeToggle = document.getElementById('theme-toggle');
if(themeToggle){
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const active = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', active ? '1' : '0');
  });
  // Restaurar preferencia
  if(localStorage.getItem('darkMode') === '1') document.body.classList.add('dark-mode');
}

// MENÚ MÓVIL: varios botones de toggle (cada HTML tiene su botón)
const navButtons = document.querySelectorAll('.nav-toggle');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
});

// BACK TO TOP: mostrar cuando scrollees y subir al hacer click
const backBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if(!backBtn) return;
  if(window.scrollY > 300) backBtn.style.display = 'block';
  else backBtn.style.display = 'none';
});
if(backBtn){
  backBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}
